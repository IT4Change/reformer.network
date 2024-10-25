ARG APP_IMAGE_TAG_CODE=latest-code

FROM ghcr.io/ocelot-social-community/ocelot-social/maintenance:${APP_IMAGE_TAG_CODE} as build

FROM nginx:alpine AS branded
COPY --from=build ./app/dist/ /usr/share/nginx/html/
COPY --from=build ./app/maintenance/nginx/custom.conf /etc/nginx/conf.d/default.conf
