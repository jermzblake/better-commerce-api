# API Service

The API layer that handles backend functions. This node backend utilizes a postgres database within a Docker Image

## Dependencies

Docker

## Stack

- Node
- Typescript
- Postgres
- Koa
- Prisma 

## Scripts

### `yarn`

Adds all the dependencies

### `create .env file and copy contents of env.example`

Adds environment variables

### `yarn docker:dev`

Starts Docker image of Postgres (attaching configured db)

### `yarn migrate:dev init`

Runs all the database migrations

### `yarn dev`

Runs the API in dev mode. This uses `nodemon` to watch files and recompile and restart the server

### `start http://localhost:4000`

## LIVE DEMO
[live API](https://better-commerce-api.onrender.com)