ARG APP_IMAGE=ghcr.io/ocelot-social-community/ocelot-social/webapp
ARG APP_IMAGE_TAG_BASE=latest-base
ARG APP_IMAGE_TAG_CODE=latest-code
ARG APP_IMAGE_BASE=${APP_IMAGE}:${APP_IMAGE_TAG_BASE}
ARG APP_IMAGE_CODE=${APP_IMAGE}:${APP_IMAGE_TAG_CODE}

##################################################################################
# CODE (branded) #################################################################
##################################################################################
FROM $APP_IMAGE_CODE AS code

# locales
RUN tools/merge-locales.sh

##################################################################################
# BUILD ##########################################################################
##################################################################################
FROM code AS build

# yarn install
RUN yarn install --production=false --frozen-lockfile --non-interactive
# yarn build
RUN yarn run build

##################################################################################
# BRANDED (Does contain only "binary"- and static-files to reduce image size) ####
##################################################################################
FROM $APP_IMAGE_BASE AS branded

# TODO - do all copying with one COPY command to have one layer
# Copy "binary"-files from build image
COPY --from=build ${DOCKER_WORKDIR}/.nuxt ./.nuxt
COPY --from=build ${DOCKER_WORKDIR}/node_modules ./node_modules
COPY --from=build ${DOCKER_WORKDIR}/nuxt.config.js ./nuxt.config.js
# Copy static files
# TODO - this seems not be needed anymore for the new rebranding
# TODO - this should be one Folder containign all stuff needed to be copied
COPY --from=build ${DOCKER_WORKDIR}/config/ ./config/
COPY --from=build ${DOCKER_WORKDIR}/constants ./constants
COPY --from=build ${DOCKER_WORKDIR}/static ./static
COPY --from=build ${DOCKER_WORKDIR}/locales ./locales
COPY --from=build ${DOCKER_WORKDIR}/assets/styles/imports ./assets/styles/imports
COPY --from=build ${DOCKER_WORKDIR}/assets/fonts ./assets/fonts
# Copy package.json for script definitions (lock file should not be needed)
COPY --from=build ${DOCKER_WORKDIR}/package.json ./package.json

# Run command
CMD /bin/sh -c "yarn run start"
