#!/bin/bash

# Entire script should fail if any commands returns non-zero exit code
# https://stackoverflow.com/questions/821396/aborting-a-shell-script-if-any-command-returns-a-non-zero-value
set -e

# Feel free to add migrations or whatever here
# yarn migrate:dev init
# In production don't run migrate:dev BUT do run migrate:prod
yarn migrate:prod
yarn start