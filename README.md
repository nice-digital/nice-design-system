# NICE Experience

Welcome to NICE Experience. Your source for creating beautiful, consistent experiences across NICE.

## Table of contents

- [What is it?](#what-is-it)
- [Project structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Development](#development)
  - [Option 1: Docker](#option-1-docker)
    - [Troubleshooting](#docker-troubleshooting)
  - [Option 2: Grunt](#option-2-grunt)
    - [Grunt](#grunt)
    - [NPM](#npm)
    - [Node](#node)

## What is it?

NICE Experience is a replacement for [NICE.Bootstrap](https://github.com/nhsevidence/NICE.Bootstrap/). It's a front-end toolkit and guidelines for rapidly building modern, accessible web apps that are consistent with the NICE brand.

## Project structure

| Folder | Description |
| ---- | ----------- |
| [.github](.github) | [Github templates folder](https://help.github.com/articles/helping-people-contribute-to-your-project/) |
| [.grunt-tasks](.grunt-tasks) | Grunt task configs loaded in from Gruntfile.js |
| [src](src) | The main source of Experience |
| - [src/assets](src/assets) | Common static assets |
| - [src/javascripts](src/javascripts) | Main Experience JS + [JSDoc config](src/javascripts/.jsdoc.json) and [ESLint config](src/javascripts/.eslintrc.json) |
| - [src/stylesheets](src/stylesheets) | Main Experience SASS + [SASS Lint config](src/stylesheets/.sass-lint.yml) + [SASS Doc custom theme](src/stylesheets/sassdoc-nice-theme.js) |
| [web](web) | Web app for the style guide |
| - [web/client](web/client) | Client side assets required for the website itself |
| - [web/server](web/server) | Server scripts for the website itself. [/web/server/index.js](web/server/index.js) is the entry point. |

## Prerequisites

You can either run the app directly on your machine with Node OR via Docker if you prefer. So, pre-requisites are:

- [Node 6+](https://nodejs.org/en/download/) (with NPM 3.9)

OR

- [Docker](https://docs.docker.com/)
- Docker's dependencies e.g. VirtualBox

## Development

You can either run the app in development through [Docker](#option-1-docker) or via [Grunt](#option-2-grunt) (via Node) directly on your machine.

### Option 1: Docker

Before running Docker commands, you will need to make sure of 2 things:

- If running Docker through VirtualBox, your source code must be in your Users directory. VB only shares the users directory by default. Or you can add your code directory manually via the VB GUI.
- Enable sharing your C drive (or whichever drive you code is in) via the Docker GUI.

If you have Docker installed, then running:

`./docker-dev.sh`

from a shell is enough to:

1. build our custom image (named 'experience') if it hasn't been built already
2. share a volume of the app's code for development
3. run the container (named 'experience'), exposing necessary ports
   - *12345* (mapped to 54321 inside) for the web app
   - *35729* for livereload
4. run `grunt watch` inside the container
5. opens http://localhost:12345 on the host to browse to the web app

This means you can run the solution without having to get the correct version Node, install global grunt etc. It will be slow the first time as it downloads the image and gets dependencies but Docker caches everything so will be quicker on subsequent runs.

Once the Docker container is running you can treat it like any other Docker container, e.g.

`winpty docker exec -it experience ash`

to attach a command prompt. Not use of *ash* not *bash* as we're using Alpine.

#### Docker troubleshooting

**A valid Gruntfile could not be found**

Is your source code shared with VB? Is your C drive shared with Docker? Have a look at https://blogs.msdn.microsoft.com/stevelasker/2016/06/14/configuring-docker-for-windows-volumes/ if you're still struggling with credentials for shared folders on Windows.

### Option 2: Grunt

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide.

We use Grunt as a task runner to build assets etc so a dependency on Node. Once built, you can run the app itself via Node directly if you want, but the easiest thing is just simply running `grunt` from the command line.

If you want to run the app directly on your machine you can do so, but you'll need:

- Node 6+
- NPM 3.9+

Before you run any tasks, you'll have to run the following from the command line to install dependencies:

- `npm i -g grunt-cli`
- `npm i`

#### Grunt

| Task | Description |
| ---- | ----------- |
| `grunt`      | Default. Lints, builds everything in parallel and runs an express server and a watch task for dev changes. |
| `grunt lint` | Lints SASS (sasslint) and JS (eslint) |
| `grunt dist` | Builds documentation, modernizr, CSS and JS in production mode (minified etc). Fro deploying the web app itself. |
| `grunt prepublish` | Builds minified code for publishing to NPM etc |

#### NPM

There are a set of NPM scripts within package.json, for convenience. However, it's recommended to just use [Grunt](#grunt).

| Task | Description |
| ---- | ----------- |
| `npm start`     | Simply runs `grunt` under the hood |
| `npm test`      | TODO |
| `npm run lint`  | Lints SASS and JS (uses `grunt lint` under the hood) |
| `npm run serve` | Spins up an express server through Node directly (NOT via Grunt) on port *54321* |

#### Node

Once the app (CSS/JS etc) has been built, the express app can be run via Node directly e.g. `node web/server`. This isn't recommended for development - use Grunt instead.
