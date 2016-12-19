# NICE Experience

Welcome to NICE Experience. Your source for creating beautiful, consistent experiences across NICE. See https://github.com/nhsevidence/NICE-brand-site for the Brand Site repository.

[![License](https://img.shields.io/github/license/nhsevidence/nice-experience.svg)](https://github.com/nhsevidence/NICE-Experience/blob/master/LICENSE)
[![Dependencies](https://img.shields.io/david/nhsevidence/nice-experience.svg)](https://david-dm.org/nhsevidence/nice-experience)
[![Dev dependencies](https://img.shields.io/david/dev/nhsevidence/nice-experience.svg)](https://david-dm.org/nhsevidence/nice-experience?type=dev)

## Table of contents

- [What is it?](#what-is-it)
- [Browser support](#browser-support)
- [Project structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Development](#development)
	- [npm/Grunt](#npmgrunt)
		- [npm](#npm)
		- [Grunt](#grunt)
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
| - [src/icons](src/icons) | SVG icon font source |
| - [src/javascripts](src/javascripts) | Main Experience JS + [JSDoc config](src/javascripts/.jsdoc.json) and [ESLint config](src/javascripts/.eslintrc.json) |
| - [src/stylesheets](src/stylesheets) | Main Experience SASS + [SASS Lint config](src/stylesheets/.sass-lint.yml) + [SASS Doc custom theme](src/stylesheets/sassdoc-nice-theme.js) |

## Prerequisites

We use Grunt for running tasks so the only prerequisites are:

- [Node 6+](https://nodejs.org/en/download/) (with npm 3.9)

## Development

### npm/Grunt

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

#### npm

Run `npm start` and `npm run test:watch` for development.

| Task | Description |
| ---- | ----------- |
| `npm start`           | Simply runs `grunt` under the hood |
| `npm test`            | Runs JS tests |
| `npm run test:watch`  | Runs JS test tests (with [min reporter](https://github.com/mochajs/mocha/blob/master/lib/reporters/min.js)) and watches for changes. Useful to run in development alongside grunt. |
| `npm run test:coverage`  | Runs JS test tests and generates a coverage report with [Istanbul](https://istanbul.js.org/) into the *coverage* folder |
| `npm run lint`        | Lints SASS and JS (uses `grunt lint` under the hood) |
| `npm run release`        | Releases a new version as a git tag, release and npm release. |

#### Grunt

Some of the npm scripts use Grunt tasks under the hood. These Grunt tasks (and aliases) can be run directly e.g. `grunt lint`. However, we recommend using the npm scripts themselves.

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

Not recommended for production, but useful for quick prototypes, the npm package includes a dist folder with precompiled assets.

You can reference directly if you have the correct permissions:

```html
<!-- Font from Google & compiled/minified CSS -->
<link href="https://fonts.googleapis.com/css?family=Lato:300,400,400i,700" rel="stylesheet">
<link rel="stylesheet" href="/node_modules/nice-experience/dist/stylesheets/experience.min.css">

<!-- jQuery from CDN & compiled/minified JavaScript -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
<script src="/node_modules/nice-experience/dist/javascripts/experience.min.js"></script>
```

OR if you're using express you can use the dist folder as a static directory:

```javascript
app.use(express.static(__dirname + "/node_modules/nice-experience/dist/"));
```

and then reference it from your HTML as:

```html
<link rel="stylesheet" href="/stylesheets/experience.min.css" type="text/css" media="screen" charset="utf-8">
<script src="/javascripts/experience.min.js"></script>
```

OR you can use a copy command (with Grunt or similar) to copy the compiled assets out of the *node_modules* folder to somewhere where you can serve them.

#### Source (npm)

The npm package contains the source code as well as the precompiled assets.

### Install with Bower

TODO
