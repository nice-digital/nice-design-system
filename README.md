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
  - [Option 2: Grunt](#option-2-grunt)
    - [Grunt](#grunt)
    - [npm](#npm)
    - [Node](#node)
- [Test](#tests)
- [Installation](#installation)
  - [CDN](#cdn)
  - [Install with npm](#install-with-npm)
    - [Precompiled (npm)](#precompiled-npm)
    - [Source (npm)](#source-npm)
  - [Install with Bower](#install-with-bower)
- [JavaScript](#javascript)
  - [JS Compilation](#js-compilation)
  - [Flow type](#flow-type)
  - [ESLint](#eslint)
  - [Auto plugin loader](#auto-plugin-loader)
  - [JS Comments](#js-comments)

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

### Option 2: Grunt

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide.

We use Grunt as a task runner to build assets etc so a dependency on Node. Once built, you can run the app itself via Node directly if you want, but the easiest thing is just simply running `grunt` from the command line.

If you want to run the app directly on your machine you can do so, but you'll need:

- Node 6+
- npm 3.9+

Before you run any tasks, you'll have to run the following from the command line to install dependencies:

- `npm i -g grunt-cli`
- `npm i`

#### Grunt

| Task | Description |
| ---- | ----------- |
| `grunt`      | Default. Lints, builds everything in parallel and runs an express server and a watch task for dev changes. |
| `grunt lint` | Lints SASS and JS |
| `grunt test` | Runs JS tests |
| `grunt dist` | Builds documentation, modernizr, CSS and JS in production mode (minified etc). Fro deploying the web app itself. |
| `grunt prepublish` | Builds minified code for publishing to npm etc |

#### npm

There are a set of npm scripts within package.json, for convenience. However, it's recommended to just use [Grunt](#grunt).

| Task | Description |
| ---- | ----------- |
| `npm start`           | Simply runs `grunt` under the hood |
| `npm test`            | Runs JS tests |
| `npm run test:watch`  | Runs JS test tests (with [min reporter](https://github.com/mochajs/mocha/blob/master/lib/reporters/min.js)) and watches for changes. Useful to run in development alongside grunt. |
| `npm run lint`        | Lints SASS and JS (uses `grunt lint` under the hood) |
| `npm run serve`       | Spins up an express server through Node directly (NOT via Grunt) on port *54321* |

#### Node

Once the app (CSS/JS etc) has been built, the express app can be run via Node directly e.g. `node web/server`. This isn't really useful for development as it just runs on port 3000, doesn't build assets, watch for changes etc - use `grunt` instead for deveopment.

## Tests

We use [Mocha](http://mochajs.org/) for our JS testing, see the [test folder](test/) for more information.

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

# JavaScript

Our JavaScript is written in ES6 with [Flow type annotations](#flow-type) so needs to be [compiled/bundled](#js-compilation). We recommend requiring the modules you need as and when you need them to avoid bloat - the below examples demonstrate this:

```JavaScript
var el = document.querySelector(".a-selector");

// Recommended: import a module directly
import Tabs from "tabs";
var tabs = new Tabs(el);

// Import a named export from experience
import { Tabs } from "experience";
var tabs = new Tabs(el);

// Import via experience module
import experience from "experience";
var tabs = new experience.Tabs(el);

// Requiring - named module
var Tabs = require("tabs").default;
var tabs = new Tabs(el);

// Requiring - via experience module
var experience = require("experience");
var tabs = new experience.Tabs(el);

// Not recommended - global namespace usage
var tabs = new NICE.experience.Tabs(el);

// Use the jquery plugin version
$(".a-selector").tabs();
```

## JS Compilation

Our source JS needs to be compiled, transpiled and packed for several reasons:

- [Flow type annotations](#flow-type)
- [ES6 (ECMAScript 2015)](https://github.com/lukehoban/es6features)
- Our JS is written in modules and should be combined and minified
- Apps using Experience should ideally use the source, rather than using the pre-compiled version

We use and recommend [Webpack](https://webpack.github.io/) with [Babel](https://babeljs.io/) and their respective plugins for packing and transpiling our JavaScript.

See our [webpack.config.js](webpack.config.js) and our [.babelrc](.babelrc) for an example of compilation of ES6 with Flow type annotations.

TODO: Webpack/require/browserify - path to source code for compilation.

## Flow type

We use [Flow type annotations](https://flowtype.org/) in our JavaScript because:

- annotations are opt-in, so allows adding them gradually
- no learning a new like TypeScript/CoffeeScript
- support for IDE integration
- easily transforms to normal JavaScript
- catches common type related static bugs
- used with [Babel Typecheck](https://github.com/codemix/babel-plugin-typecheck) allows runtime type checking

We encourage use of runtime type checking with Babel Typecheck during development. See our [.bablerc](.babelrc) for an example. Note: it disables them in production, as long as `NODE_ENV=production` is set when compiling production JS.

A runtime error would look like: *Uncaught TypeError: Value of argument "num" violates contract. Expected: number Got: string*.

## ESLint

We have a set of ES Lint rules for linting our JS. See our [.eslintrc.json](src/javascripts/.eslintrc.json) for our ruleset. It uses [babel-eslint](https://github.com/babel/babel-eslint) as the parser and uses a [flowtype plugin](eslint-plugin-flowtype) because of our [Flow type annotations](#flow-type). You should use a [watch task](.grunt-tasks/watch.js) to lint as you work.

## Auto plugin loader

Our modules are written as ES6 classes within modules so can be used directly, but for convenience are also wrapped in jQuery plugins. We then have a [plugin loader module](src/javascripts/plugin-autoloader.js) that automatically:

- requires all plugin modules
- looks for any `[data-nice-plugin]` instances
- applies the named plugin to each

The pre-compiled version of experience automatically includes the plugin auto loader. So you can do:

```html
<div class="tabs" data-nice-plugin="tabs">
</div>
<script src="experience.min.js"></script>
```

## JS Comments

We use [documentationjs](http://documentation.js.org/) to generate documentation for our library code, so any comments shoudl follow a [JSDoc style](https://github.com/documentationjs/documentation/blob/master/docs/GETTING_STARTED.md) syntax.

