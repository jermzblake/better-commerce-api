#!/bin/bash
# Feel free to add migrations or whatever here
yarn migrate:dev init
# In production don't run migrate:dev BUT do run migrate:prod
#yarn migrate:prod
yarn start