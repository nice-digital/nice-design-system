# :art: NICE Design System

> Lerna-managed monorepo for the NICE Design System

[![npm](https://img.shields.io/npm/v/@nice-digital/design-system.svg)](https://www.npmjs.com/package/@nice-digital/design-system)
[![GitHub release](https://img.shields.io/github/release/nice-digital/nice-design-system.svg)](https://github.com/nice-digital/nice-design-system)
[![License](https://img.shields.io/github/license/nice-digital/nice-design-system.svg)](https://github.com/nice-digital/nice-design-system/blob/master/LICENSE)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

<details>
<summary><strong>Table of contents</strong></summary>

- [What is it?](#what-is-it)
- [Development](#development)
	- [Quick start](#quick-start)
	- [Slow start](#slow-start)
	- [Help! I'm getting complaints about icons!](#help-im-getting-complaints-about-icons)
	- [NextJS](#nextjs)
	- [Tests](#tests)
	- [Commands](#commands)
		- [Publishing to npm](#publishing-to-npm)
</details>

## What is it?

The NICE Design System (NDS) is a pattern library, front-end toolkit and set of guidelines for rapidly building modern, accessible digital services that are consistent with the NICE brand guidelines.

## Development

We recommend using vscode as the IDE when developing with the NICE Design System. We have a set of [recommended extensions](.vscode/extensions.json) you should install to make development easier. You should be prompted to install these when opening the folder in vscode.

### Quick start

    TL;DR:
    	1. `volta install node`
    	2. `npm ci`
    	3. `npm start`
    	4. http://localhost:3000/

### Slow start

To run the design system site and tests locally, first install [Node](https://nodejs.org/en/download/). We use [Volta](https://volta.sh/) to manage Node versions; you may need to [install that first](https://docs.volta.sh/guide/getting-started).

Then before you can run any tasks, run `npm ci` from the command line to install dependencies from npm. This will also link local packages together and install remaining package dependencies.

Next, run `npm start` from the command line to run a server for local development, and view http://localhost:3000/ in a browser.

### Help! I'm getting complaints about icons!

You may need to generate the icon packages first. Change to the components/icons
folder, run `npm ci` and then `npm start`. You should then be able to return to
the root folder and run `npm start` again without any issues.

### NextJS

The NDS docs site is built using [NextJS](https://nextjs.org/). It can be found in the **docs** folder.

### Tests

All the components have tests, written with [Jest](https://jestjs.io/) and 
[React Testing Library](https://testing-library.com/docs/react-testing-library/intro/). 
Run `test:unit:watch` to run unit tests and watch for changes.

To run tests for a just a single component, run the following:

```sh
npm run test:unit:watch -- breadcrumbs
```

### Commands

Run `npm start` and `test:unit:watch` for development. However, there are other npm scripts available to be run for other tasks - here are some useful ones:

| Task                         | Description                                                                   |
| ---------------------------- | ------------------------------------------------------------------------------|
| `npm start`                  | Runs a server for local development and watches for changes                   |
| `npm run lerna`              | Runs `lerna` under the hood                                                   |
| `npm run release:alpha`      | Runs `lerna publish` under the hood for an alpha release                      |
| `npm run release:latest`     | Runs `lerna publish` under the hood for the latest full release               |
| `npm test`                   | Lints JS and SCSS and runs JS unit tests                                      |
| `npm run test:unit`          | Runs JS unit tests                                                            |
| `npm run test:unit:watch`    | Runs JS test tests and watches for changes to re-run tests                    |
| `npm run test:unit:coverage` | Runs JS test tests and generates a coverage report                            |
| `npm run lint`               | Lints both JS and SCSS                                                        |
| `npm run lint:js`            | Lints just JS                                                                 |
| `npm run lint:scss`          | Lints just SCSS                                                               |
| `npm run clean:ts`           | Cleans the Typescript output                                                  |
| `npm run build:ts`           | Compiles all Typescript components                                            |
| `npm run docs:dev`           | Starts the Next.js documentation site in development mode                     |
| `npm run docs:build`         | Builds the Next.js documentation site for production                          |

Check [package.json](package.json) for a complete list of scripts.

> Note: because lerna is installed locally, you can use `npm run lerna -- ` to run lerna commands, for example `npm run lerna -- add @nice-digital/icons --scope=@nice-digital/nds-filters`
>
> ### Alpha release detects no changes?

If you make changes, do npm start to rebuild the project and have lerna update version numbers. If you run npm run release:alpha and it detects no changes, as a last resort, try running this command beforehand to manually bump version numbers (this won't push changes to git - '--no-push'):

```sh
npx lerna version prerelease --preid alpha --no-push --no-git-tag-version
```

#### Publishing to npm

First, make sure you're logged in to npm on the command line by running `npm whoami`.

> Please make sure 2FA is enabled on your account for at least auth, and preferably writes as well.

Next, check you have access to the @nice-digital org on npm by running `npm org ls nice-digital USERNAME`. It should list your username and role. You should have at least the *developers* role, which wiLl give you write access.

Then run `npm run release` to publish to npm. This runs `lerna publish` under the hood, which means you can pass in [additional command arguments](https://github.com/lerna/lerna/tree/master/commands/publish#readme). For example to release to npm with an alpha [dist tag](https://docs.npmjs.com/cli/dist-tag), run the following:

```sh
npm run release:alpha
```
