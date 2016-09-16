# Hello World using the Autopilot Pattern

1. `git clone git@github.com:autopilotpattern/hello-world.git`
2. `cd hello-world`
3. `docker-compose up -d`
4. `open http://localhost`

## Overview

The application is divided into 4 parts:

1. nginx - nginx server rendering static assets
2. consul - service catalog used to keep track of registered services
3. hello - Node.js service responding with the word "Hello"
4. world - Node.js service responding with the word "World"


![application configuration diagram](application-diagram.jpg)


# Hello World running on Triton

1. `./triton-docker-setup.sh -k us-east-1.api.joyent.com <ACCOUNT> ~/.ssh/<PRIVATE_KEY_FILE>`
2. `docker-compose up -d`
