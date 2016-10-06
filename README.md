# NICE Experience

Welcome to NICE Experience. Your source for creating beautiful, consistent experiences across NICE.

[![License](https://img.shields.io/github/license/nhsevidence/nice-experience.svg)](https://github.com/nhsevidence/NICE-Experience/blob/master/LICENSE)
[![Dependencies](https://img.shields.io/david/nhsevidence/nice-experience.svg)](https://david-dm.org/nhsevidence/nice-experience)
[![Dev dependencies](https://img.shields.io/david/dev/nhsevidence/nice-experience.svg)](https://david-dm.org/nhsevidence/nice-experience?type=dev)

## Table of contents

- [What is it?](#what-is-it)
- [Browser support](#browser-support)
- [Project structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Development](#development)
	- [Option 1: Docker](#option-1-docker)
		- [Troubleshooting](#docker-troubleshooting)
	- [Option 2: npm/Grunt](#option-2-npmgrunt)
		- [Grunt](#grunt)
		- [npm](#npm)
		- [Node](#node)
	- [JavaScript](#javascript)
	- [SASS](#sass)
	- [Icons](#icons)
- [Test](#tests)
- [Installation](#installation)
	- [CDN](#cdn)
	- [Install with npm](#install-with-npm)
		- [Precompiled (npm)](#precompiled-npm)
		- [Source (npm)](#source-npm)
	- [Install with Bower](#install-with-bower)

## What is it?

NICE Experience is a replacement for [NICE.Bootstrap](https://github.com/nhsevidence/NICE.Bootstrap/). It's a front-end toolkit and guidelines for rapidly building modern, accessible web apps that are consistent with the NICE brand guidelines.

## Browser support

| IE/Edge | Chrome | Firefox | Safari | Safari (iOS) | Android | 
| ------- | ------ | ------- | ------ | ------------ | ------- |
| ![Internet Explorer](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/35.2.0/internet-explorer/internet-explorer_48x48.png) | ![Chrome](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/35.2.0/chrome/chrome_48x48.png) | ![Firefox](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/35.2.0/firefox/firefox_48x48.png) | ![Safari](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/35.2.0/safari/safari_48x48.png) | ![Safari (iOS)](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/35.2.0/safari-ios/safari-ios_48x48.png) | ![Android](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/35.2.0/android/android_48x48.png) |
| 8+ | 52+ | 47+ | Latest | Latest | Latest |

And all other modern browsers

We support IE8 because of our audience - traffic to nice.org.uk as of 22/09/2016:

- 15.80% - IE11
- 5.08% - IE8
- 2.61% - IE9
- 1.78% - IE10
- 0.56% - IE7

To support older IE we have separate builds of our JS and CSS.

## Accessibility

Experience has been built with accessibility in mind and is built to conform to WCAG 2.0 AA.

If you are building an application with Experience, please keep the same level of conformance.

See https://www.nice.org.uk/accessibility for more information.

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

- [Node 6+](https://nodejs.org/en/download/) (with npm 3.9)

OR

- [Docker](https://docs.docker.com/)
- Docker's dependencies e.g. [VirtualBox](https://www.virtualbox.org/)

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

### Option 2: npm/Grunt

	TL;DR:
		1. `npm i -g grunt-cli`
		2. `npm i`
		3. `npm start`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide first.

If you want to run the app directly (via Grunt/npm) on your machine you can do so, but you'll need:

- Node 6+
- npm 3.9+

We use Grunt as a task runner to build assets etc so have a dependency on Node. Run `npm start` from the command line which will build the required assets (JS/CSS/web fonts) and serve the app.

Before you run any tasks, you'll have to run the following from the command line to install dependencies:

- `npm i -g grunt-cli`
- `npm i`

#### Grunt

| Task | Description |
| ---- | ----------- |
| `grunt`      | Default. Lints, builds everything in parallel and runs an express server and a watch task for dev changes. Prefer to use `npm start` instead. |
| `grunt lint` | Lints SASS and JS |
| `grunt test` | Runs JS tests |
| `grunt dist` | Builds documentation, modernizr, CSS and JS in production mode (minified etc). Fro deploying the web app itself. |
| `grunt prepublish` | Builds minified code for publishing to npm etc |

#### npm

Run `npm start` and `npm run test:watch` for development.

| Task | Description |
| ---- | ----------- |
| `npm start`           | Simply runs `grunt` under the hood |
| `npm test`            | Runs JS tests |
| `npm run test:watch`  | Runs JS test tests (with [min reporter](https://github.com/mochajs/mocha/blob/master/lib/reporters/min.js)) and watches for changes. Useful to run in development alongside grunt. |
| `npm run test:coverage`  | Runs JS test tests and generates a coverage report with [Istanbul](https://istanbul.js.org/) into the *coverage* folder |
| `npm run lint`        | Lints SASS and JS (uses `grunt lint` under the hood) |
| `npm run serve`       | Spins up an express server through Node directly (NOT via Grunt) on port *54321* |

#### Node

Once the app (CSS/JS etc) has been built, the express app can be run via Node directly e.g. `node web/server`. This isn't really useful for development as it just runs on port 3000, doesn't build assets, watch for changes etc - use `npm start` instead for deveopment. Running the web app directly via node is useful for production environments where the assets have already been built by a build server and we just need to serve the app.

### JavaScript

See the [javascript](src/javascripts) folder for more information.

### SASS

See the [stylesheets](src/stylesheets) folder for more information.

## Tests

See the [test](test) folder for more information.

## Installation

### NICE CDN

TODO

### Install with npm

NICE Experience is released as a package on npm for convenience, but is designed to be used as a client side module, rather than server side.

`npm install nice-experience`

Then...

#### Precompiled (npm)

Not recommended for production, but useful for quick prototypes, the npm package includes a dist folder with precompiled assets you can reference directly:

```html
<!-- Font from Google & compiled/minified CSS -->
<link href="https://fonts.googleapis.com/css?family=Lato:300,400,400i,700" rel="stylesheet">
<link rel="stylesheet" href="/node_modules/nice-experience/dist/stylesheets/experience.min.css">

<!-- jQuery from CDN & compiled/minified JavaScript -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
<script src="/node_modules/nice-experience/dist/javascripts/experience.min.js"></script>
```

#### Source (npm)

The npm package contains the source code as well as the precompiled assets.

### Install with Bower

TODO
