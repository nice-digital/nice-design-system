# NICE.Bootstrap v2

Welcome to NICE Bootstrap v2.

## Project structure

| Folder | Description |
| ---- | ----------- |
| .grunt-tasks | Grunt task configs loaded in from Gruntfile.js |
| src | SASS and JS source (plus other assets) |
| web | Web app for the style guide |

## Prerequisites

You can either run the app directly on your machine OR via Docker if you prefer. So, pre-requisites are:

- Node 6+
- NPM 3.9+
OR
- Docker

## Running tasks

### Docker

If you have Docker installed, then running:

`./docker-dev.sh`

from a shell should be enough to build our custom image, share a volume for dev and run the container.

This means you can run the solution without having to get the correct version Node, install global grunt etc.

This creates an image and runs a container, exposing the necessary ports. It will be slow the first time as it downloads the image and gets dependencies but Docker caches everything so will be quicker on subsequent runs.

### Node

If you want to run the app directly on your machine you can do so, but you'll need:

- Node 6+
- NPM 3.9+

Before you run any tasks, you'll have to run the following from the command line to install dependencies:

- `npm install -g grunt-cli`
- `npm i`

#### Grunt only

| Task | Description |
| ---- | ----------- |
| `grunt`      | Default. Lints, builds everything and spins up an express server and a watch task for changes |
| `grunt lint` | Lints SASS (sasslint) and JS (eslint) |
| `grunt docs` | Generates documentation JSON files for SASS and JS |
| `grunt build` | Builds everything needed |

#### NPM

| Task | Description |
| ---- | ----------- |
| `npm start`     | Runs `grunt` under the hood |
| `npm test`      | TODO |
| `npm run lint`  | Lints SASS and JS (uses `grunt lint` under the hood) |
| `npm run serve` | Spins up an express server in node on port *54321* |
