# :art: NICE Design System

> Lerna-managed monorepo for the NICE Design System

[![npm](https://img.shields.io/npm/v/@nice-digital/design-system.svg)](https://www.npmjs.com/package/@nice-digital/design-system)
[![GitHub release](https://img.shields.io/github/release/nice-digital/nice-design-system.svg)](https://github.com/nice-digital/nice-design-system)
[![License](https://img.shields.io/github/license/nice-digital/nice-design-system.svg)](https://github.com/nice-digital/nice-design-system/blob/master/LICENSE)
[![Dependencies](https://img.shields.io/david/nice-digital/nice-design-system.svg)](https://david-dm.org/nice-digital/nice-design-system)
[![Dev dependencies](https://img.shields.io/david/dev/nice-digital/nice-design-system.svg)](https://david-dm.org/nice-digital/nice-design-system?type=dev)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

<details>
<summary><strong>Table of contents</strong></summary>

- [:art: NICE Design System](#art-nice-design-system)
	- [What is it?](#what-is-it)
	- [Development](#development)
		- [Quick start](#quick-start)
		- [Slow start](#slow-start)
		- [Storybook](#storybook)
		- [Tests](#tests)
		- [Documentation](#documentation)
		- [Commands](#commands)
			- [Publishing to npm](#publishing-to-npm)
	- [Upgrading to 1.x from 0.x](#upgrading-to-1x-from-0x)
</details>

## What is it?

NICE Design System is a pattern library, front-end toolkit and set of guidelines for rapidly building modern, accessible digital services that are consistent with the NICE brand guidelines.

It is a replacement for [NICE.Bootstrap](https://github.com/nice-digital/NICE.Bootstrap/).

## Development

We recommend using vscode as the IDE when developing with the NICE Design System. We have a set of [recommended extensions](.vscode/extensions.json) you should install to make development easier. You should be prompted to install these when opening the folder in vscode.

### Quick start

    TL;DR:
    	1. Install Node 8.9+
    	2. `npm i`
		3. `npm run bootstrap`
    	4. `npm start`
    	5. http://localhost:3000/

### Slow start

To run the design system site and tests locally, first install the required dependencies:

- [Node 8.9+](https://nodejs.org/en/download/)
- [npm 5+](https://www.npmjs.com/)

Then before you can run any tasks, run `npm i` from the command line to install dependencies from npm. This will also 'link local packages together and install remaining package dependencies'.

> Want to know more details? This runs `lerna bootstrap` under the hood as a `postinstall` command - see [the lerna bootstrap docs](https://github.com/lerna/lerna/tree/master/commands/bootstrap#readme) for more info.

Next, run `npm start` from the command line to run a server for local development, and view http://localhost:3000/ in a browser.

### Storybook

[Storybook](https://storybook.js.org/) is an open source tool for developing UI components in isolation. Run it locally by running `npm run storybook` on the command line. Edit *.stories.js* files to manage storybook stories.

### Tests

All the components have tests, written in Jest. Run `test:unit:watch` to run unit tests and watch for changes.

To run tests for a just a single component, run the following:

```sh
npm run test:unit:watch -- breadcrumbs
```

### Documentation

The docs site is built with [Gatsby](https://www.gatsbyjs.org/), a state site generator that uses React. You can use `npm run docs:dev` to run locally with live reloading. See the [Commands](#commands) table for other commands.

### Commands

Run `npm start` and `test:unit:watch` for development. However, there are other npm scripts available to be run for other tasks:

| Task                         | Description                                                                   |
| ---------------------------- | ------------------------------------------------------------------------------|
| `npm start`                  | Runs a server for local development and watches for changes                   |
| `npm run bootstrap`          | Runs `lerna bootstrap` under the hood                                         |
| `npm run lerna`              | Runs `lerna` under the hood                                                   |
| `npm run release`            | Runs `lerna publish` under the hood                                           |
| `npm run storybook`          | Runs the storybook web app locally at localhost:6006                          |
| `npm run storybook:build`    | Builds a compiled storybook site                                              |
| `npm test`                   | Lints JS and SCSS and runs JS unit tests                                      |
| `npm run test:unit`          | Runs JS unit tests                                                            |
| `npm run test:unit:watch`    | Runs JS test tests and watches for changes to re-run tests                    |
| `npm run test:unit:coverage` | Runs JS test tests and generates a coverage report                            |
| `npm run lint`               | Lints both JS and SCSS                                                        |
| `npm run lint:js`            | Lints just JS                                                                 |
| `npm run lint:scss`          | Lints just SCSS                                                               |
| `npm run docs:dev`           | Start development server for Gatsby documentation site at localhost:8000      |
| `npm run docs:serve`         | Serve the built docs site locally for testing at localhost:9000               |
| `npm run docs:build`         | Build out the docs static site for deployment                                 |

> Note: because lerna is installed locally, you can use `npm run lerna -- ` to run lerna commands, for example `npm run lerna -- add @nice-digital/icons --scope=@nice-digital/nds-filters`

#### Publishing to npm

First, make sure you're logged in to npm on the command line by running `npm whoami`.

> Please make sure 2FA is enabled on your account for at least auth, and preferably writes as well.

Next, check you have access to the @nice-digital org on npm by running `npm org ls nice-digital USERNAME`. It should list your username and role. You should have at least the *developers* role, which wiLl give you write access.

Then run `npm run release` to publish to npm. This runs `lerna publish` under the hood, which means you can pass in [additional command arguments](https://github.com/lerna/lerna/tree/master/commands/publish#readme). For example to release to npm with an alpha [dist tag](https://docs.npmjs.com/cli/dist-tag), run the following:

```sh
npm run release:alpha
```

## Upgrading to 1.x from 0.x

These are the following breaking changes from 0.x to 1.x:

- SASS paths (~ with absolute paths)
- scss folder rather than stylesheets
- sass-lint -> style lint
- dist folder??
- jquery versions
- removed border-box mixin - assume we're using autoprefixer
- removed footer component - part of TopHat v2
- removed `important` mixin - overkill
- dropped styling overrides for TopHat: hiding on print and bottom margin override are removed
- removed default-box-sixing - now applied directly to html element
- removed remove-mz-focus-inner mixin
- removed hacks folder
- recommend npm rather than yarn
- drop support for Bower
- remove grunt and use npm scripts
- Node 8.9+ requried for local development (because CSS modules 3 requires 8.9+)
- drop support for Sublime as an IDE - prefer vscode
- removed nunjucks templates, we now recommend using React components
- removed the inverse panel
- prefixed all mixin, functions, variables and classes with _nds-_ e.g. `container` is now `nds-container`
- moved component-specific colour variables out of core into their respective component SCSS. Also renamed appropriately e.g.`$colour-panel-default` and `$colour-panel-default-border` are now in @nice-digital/nds-panel and renamed to `$colour-panel-default-background` and `$colour-panel-default-border`
- removed `nds-element` and `nds-modifier` and their aliases `nds-e` and `nds-m` as they were never used
- Removed all placeholders and replaced with mixins
- Removed grid mixins: either use the grid in markup or use your own custom grid with flexbox etc in CSS.
