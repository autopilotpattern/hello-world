#!/bin/bash

docker-compose stop
docker rm `docker ps --no-trunc -aq`
docker rmi --force $(docker images -q)

