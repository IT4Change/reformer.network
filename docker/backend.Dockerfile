ARG APP_IMAGE=ghcr.io/ocelot-social-community/ocelot-social/backend
ARG APP_IMAGE_TAG_BASE=latest-base
ARG APP_IMAGE_TAG_CODE=latest-code
ARG APP_IMAGE_BASE=${APP_IMAGE}:${APP_IMAGE_TAG_BASE}
ARG APP_IMAGE_CODE=${APP_IMAGE}:${APP_IMAGE_TAG_CODE}
FROM $APP_IMAGE_CODE AS build

FROM $APP_IMAGE_BASE AS branded
COPY --from=build /build .
