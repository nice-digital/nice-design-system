# `@nice-digital/design-system`

> Your source for quickly creating consistent on-brand NICE digital services.

[![npm](https://img.shields.io/npm/v/@nice-digital/design-system.svg)](https://www.npmjs.com/package/@nice-digital/design-system)
[![GitHub release](https://img.shields.io/github/release/nice-digital/nice-design-system.svg)](https://github.com/nice-digital/nice-design-system)
[![License](https://img.shields.io/github/license/nice-digital/nice-design-system.svg)](https://github.com/nice-digital/nice-design-system/blob/master/LICENSE)
[![Dependencies](https://img.shields.io/david/nice-digital/nice-design-system.svg)](https://david-dm.org/nice-digital/nice-design-system)
[![Dev dependencies](https://img.shields.io/david/dev/nice-digital/nice-design-system.svg)](https://david-dm.org/nice-digital/nice-design-system?type=dev)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

<details>
<summary><strong>Table of contents</strong></summary>

- [`@nice-digital/design-system`](#nice-digitaldesign-system) - [Required software](#Required-software) - [Installation](#Installation) - [Usage](#Usage) - [SCSS](#SCSS) - [Precompiled](#Precompiled) - [CDN](#CDN)
  </details>

## Required software

Install [Node](https://nodejs.org/en/download/) >= 6.9.0 and npm >= 5. Choose LTS from the Node download page.

## Installation

Install the NICE Design System npm package into your project by running the following on the command line:

```sh
npm i @nice-digital/design-system --save
```

Then follow the [usage](#usage) steps below:

## Usage

This package is the 'kitchen sink' package which gives you access to all styles, components and icons. It references [@nice-digital/nds-core](packages/nds-core#readme), [@nice-digital/icons](https://github.com/nice-digital/nice-icons#readme) and all the [component packages](../).

The installed package contains:

- source SCSS
- pre-compiled (dist) CSS and JavaScript
- static assets like favicon and logo.

> Note: Install and reference components directly if you don't need the full kitchen sink, for example [tabs](packages/nds-tabs).

### SCSS

Import the NICE Design System into your application:

```scss
@forward '@nice-digital/design-system/scss/nice-design-system';
```

This gives you everything: core (mixins, functions, variables, placeholders), CSS resets, icon font, default styles and all components. Visit the [documentation site](https://design-system.nice.org.uk/technical/sass/documentation/) for full details on what's available in the SCSS.


If you want the design system without all of the components you can install the base styling (CSS resets and global ):

```scss
@forward "@nice-digital/design-system/scss/base";
```

You can then start using the SCSS from the NICE Design System, for example:

```scss
@use "@nice-digital/nds-core/scss/colours";

.something {
	color: colours.$text;
}
```

### Precompiled

The [@nice-digital/design-system](https://www.npmjs.com/package/@nice-digital/design-system) npm package includes a dist folder with pre-compiled assets (CSS and JS). These are useful for quick prototypes, but aren't recommended for production because:

- it uses compiled CSS so you lose the benefit of all the SCSS mixins, function and variables
- you get everything: you can’t pick and choose just what you need.

Use the dist folder as a static directory with [Express](https://expressjs.com/) to serve these precompiled files:

```js
app.use(
	express.static(__dirname + "/node_modules/@nice-digital/design-system/dist/")
);
```

and then reference it from your HTML as:

```html
<link rel="stylesheet" href="/stylesheets/nice.min.css" type="text/css" />
<script src="/javascripts/nice.min.js"></script>
```

> Note: you'll probably also need to serve the nice-icons icon font if you're doing this: `app.use(express.static(__dirname + "/node_modules/@nice-digital/icons/dist/"));`.

Alternatively, use a script to copy the precompiled assets out of the _node_modules_ folder to somewhere where you can serve them.

### CDN

We are planning on publishing the [precompiled](#precompiled) version of the Design System to the NICE CDN. Watch this space.
