# :art: NICE Design System

> Your source for quickly creating consistent on-brand NICE digital services.

[![npm](https://img.shields.io/npm/v/@nice-digital/design-system.svg)](https://www.npmjs.com/package/@nice-digital/design-system)
[![GitHub release](https://img.shields.io/github/release/nhsevidence/nice-design-system.svg)](https://github.com/nhsevidence/nice-design-system)
[![License](https://img.shields.io/github/license/nhsevidence/nice-design-system.svg)](https://github.com/nhsevidence/nice-design-system/blob/master/LICENSE)
[![Dependencies](https://img.shields.io/david/nhsevidence/nice-design-system.svg)](https://david-dm.org/nhsevidence/nice-design-system)
[![Dev dependencies](https://img.shields.io/david/dev/nhsevidence/nice-design-system.svg)](https://david-dm.org/nhsevidence/nice-design-system?type=dev)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

<details>
<summary><strong>Table of contents</strong></summary>

- [:art: NICE Design System](#art-nice-design-system)
	- [What is it?](#what-is-it)
	- [Development](#development)
		- [Getting started](#getting-started)
			- [Quick start](#quick-start)
			- [Slow start](#slow-start)
			- [Commands](#commands)
	- [Browser support](#browser-support)
	- [Accessibility](#accessibility)
	- [Upgrading to 1.x from 0.x](#upgrading-to-1x-from-0x)
</details>

## What is it?

NICE Design System is a pattern library, front-end toolkit and set of guidelines for rapidly building modern, accessible digital services that are consistent with the NICE brand guidelines.

It is a replacement for [NICE.Bootstrap](https://github.com/nhsevidence/NICE.Bootstrap/).

## Development

### Getting started

#### Quick start

	TL;DR:
		1. Install Node 6+
		2. `npm i`
		3. `npm start`

#### Slow start

To run the design system site and tests locally, first install the required dependencies:

- [Node 6+](https://nodejs.org/en/download/)
- [npm 5+](https://www.npmjs.com/)

Then before you can run any tasks, run `npm i` from the command line to install dependencies from npm. This will also 'link local packages together and install remaining package dependencies'.

> Want to know more details? This runs `lerna bootstrap` under the hood as a `postinstall` command - see [the lerna bootstrap docs](https://github.com/lerna/lerna/tree/master/commands/bootstrap#readme) for more info.

Next, run `npm start` from the command line to run a server for local development.

There are also other commands you can run:

#### Commands

Run `npm start` and `test:unit:watch` for development. However, there are other npm scripts available to be run for other tasks:

| Task | Description |
| ---- | ----------- |
| `npm start`           				| Runs a server for local development and watches for changes |
| `npm run storybook`           | Runs the storybook web app locally |
| `npm run storybook:build`     | Builds a compiled storybook site |
| `npm test`            				| Lints JS and SCSS and runs JS unit tests |
| `npm run test:unit`           | Runs JS unit tests |
| `npm run test:unit:watch` 		| Runs JS test tests and watches for changes to re-run tests |
| `npm run test:unit:coverage` 	| Runs JS test tests and generates a coverage report |
| `npm run lint`        				| Lints both JS and SCSS |
| `npm run lint:js`        			| Lints just JS |
| `npm run lint:scss`        		| Lints just SCSS |

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

## Accessibility

NICE Design System has been built with accessibility in mind and is built to conform to WCAG 2.1 AA. 

See https://www.nice.org.uk/accessibility for more information on NICE's policy.

## Upgrading to 1.x from 0.x

- SASS paths (~ with absolute paths)
- scss folder rather than stylesheets
- sass-lint -> style lint
- dist folder
- jquery versions
- removed border-box mixin - assume we're using autoprefixer
- removed footer component - part of TopHat v2
- removed `important` mixin - overkill
- TopHat hide print style is removed
- removed default-box-sixing - now applied directly to html element
- removed remove-mz-focus-inner mixin
- removed hacks folder
- recommend npm rather than yarn
- drop support for Bower
- remove grunt and use npm scripts
