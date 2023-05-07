FROM node:16-alpine

ARG PORT=4711
ARG STORYBOOK="no"

WORKDIR /app

COPY . /app/

RUN npm install

RUN if [ "$STORYBOOK" = "yes" ] ; then npm run build-storybook ; fi

EXPOSE ${PORT}
