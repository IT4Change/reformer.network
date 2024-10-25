ARG APP_IMAGE_TAG_BASE=latest-base
ARG APP_IMAGE_TAG_CODE=latest-code

FROM ghcr.io/ocelot-social-community/ocelot-social/webapp:${APP_IMAGE_TAG_CODE} AS build

FROM ghcr.io/ocelot-social-community/ocelot-social/webapp:${APP_IMAGE_TAG_BASE} AS branded
COPY --from=build /build .
