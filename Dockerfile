FROM node:latest
ADD . /app
WORKDIR /app

ARG DB_HOST
ARG DB_PORT
ARG POSTGRES_DB
ARG POSTGRES_PASSWORD
ARG POSTGRES_USER
ARG NODE_PORT
ARG UI_URL
ARG useSSL
ARG NODE_ENV
ARG PORT
ARG API_KEY
ARG API_SHORT_NAME

ENV DB_HOST=${DB_HOST}
ENV DB_PORT=${DB_PORT}
ENV POSTGRES_DB=${POSTGRES_DB}
ENV POSTGRES_PASSWORD=${POSTGRES_PASSWORD}
ENV POSTGRES_USER=${POSTGRES_USER}
ENV NODE_PORT=${NODE_PORT}
ENV UI_URL=${UI_URL}
ENV useSSL=${useSSL}
ENV NODE_ENV=${NODE_ENV}
ENV PORT=${PORT}
ENV API_KEY=${API_KEY}
ENV API_SHORT_NAME=${API_SHORT_NAME}

COPY . /usr/src/app
RUN ls && more package.json
RUN yarn global add typescript && \
    yarn install --production --silent && \
    yarn build && \
    ls

RUN ls -l /usr/src/app
RUN ls -l /usr/src/app/entrypoint.sh

RUN chmod +x /usr/src/app/entrypoint.sh

EXPOSE 5000
ENTRYPOINT ["/bin/bash", "-c", "./entrypoint.sh"]