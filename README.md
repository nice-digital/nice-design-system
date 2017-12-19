# NICE Icons

> Icons for use in NICE Digital Services

[![npm](https://img.shields.io/npm/v/@nice-digital/icons.svg)](https://www.npmjs.com/package/@nice-digital/icons)
[![Bower](https://img.shields.io/bower/v/nice-icons.svg)](http://bower.io/search?q=nice-icons)
[![GitHub release](https://img.shields.io/github/release/nhsevidence/nice-icons.svg)](https://github.com/nhsevidence/nice-icons/releases/latest)
[![License](https://img.shields.io/github/license/nhsevidence/nice-icons.svg)](https://github.com/nhsevidence/nice-icons/blob/master/LICENSE)
[![Dependencies](https://img.shields.io/david/nhsevidence/nice-icons.svg)](https://david-dm.org/nhsevidence/nice-icons)
[![Dev dependencies](https://img.shields.io/david/dev/nhsevidence/nice-icons.svg)](https://david-dm.org/nhsevidence/nice-icons?type=dev)

<details>
<summary><strong>Table of contents</strong></summary>

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Intro](#intro)
  - [Guidance](#guidance)
- [Usage](#usage)
  - [Installation](#installation)
  - [Build process](#build-process)
  - [Serving font files](#serving-font-files)
    - [Express](#express)
    - [Grunt copy](#grunt-copy)
    - [Visual Studio Copy Task](#visual-studio-copy-task)
  - [Markup](#markup)
  - [SASS](#sass)
- [Development](#development)
  - [Dependencies](#dependencies)
  - [Commands](#commands)
  - [Updating ToC](#updating-toc)
  - [Releasing](#releasing)
- [Creating icons](#creating-icons)
- [Custom application icons](#custom-application-icons)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

</details>

## Intro

Nice-icons is a replacement for [NICE.Glyphs](http://nhsevidence.github.io/NICE.Bootstrap/Guide.Glyphs.html#charset). It is independent of Bootstrap and the Design System so can be used on its own.

We use a custom icon web font because:

- there's no JavaScript required
- icon color, size, shadow etc can be styled with CSS.
- any custom icons can be used
- icon fonts support IE8+
- vector icons are infinitely scalable
- vector icons look perfect on retina displays.

### Guidance

Avoid unnecessary decoration - only use icons if there’s a real user need:

- if icons are needed ensure they are clear, simple and accompanied by relevant text
- don’t hide functionality under icons
- icons should be easily recognizable
- keep icon designs simple and schematic.

## Usage

See the [examples](examples) folder for usage examples.

The easiest and recommended way to use NICE Icons is through the [NICE Design System](https://nhsevidence.github.io/nice-design-system/foundations/iconography/) rather than directly.

However, follow the steps below if you need to use NICE Icons manually:

### Installation

Install [NICE Icons from Yarn](https://yarnpkg.com/en/package/@nice-digital/icons):

`yarn add @nice-digital/icons`

> Note: if you prefer to use the [package from npm](https://www.npmjs.com/package/@nice-digital/icons) rather than yarn, run `npm i @nice-digital/icons` instead.

Source SVG files and dist files will then be available in *./node_modules/@nice-digital/icons*.

> Note: NICE Icons is available on Bower as *nice-icons* but is not recommended.

### Build process

Include the path *./node_modules/@nice-digital/icons/dist/_nice-icons.scss* in your SASS.

Use the [includePaths option from node-sass](https://github.com/sass/node-sass#includepaths) to include the path. Or with [grunt-sass](https://github.com/sindresorhus/grunt-sass#options):

```js
// Gruntfile.js
module.exports = function(grunt) {
	// Run `npm i grunt-sass --save-dev`
	grunt.loadNpmTasks("grunt-sass");

	grunt.initConfig({
		sass: {
			app: {
				includePaths: ["node_modules/@nice-digital/icons/dist"]
			}
		}
	});
};
```

Then in your SASS you can:

```scss
@import "nice-icons";
```

### Serving font files

> Note: [Add the corrrect MIME type to your web.config](http://stackoverflow.com/a/7374640/486434) if you get a 404 error for .woff files in IIS.

#### Express

Use `express.static` to serve font files in [Express](https://expressjs.com/) directly from the *dist* folder:

```js
const express = require("express"),
	path = require("path");

const app = express();

app.use("/fonts", express.static(path.join(__dirname, "./node_modules/@nice-digital/icons/dist")))
```

See the [simple-express](examples/simple-express) folder for a complete example of this.

#### Grunt copy

Setup a [copy task](https://github.com/gruntjs/grunt-contrib-copy) with [Grunt](https://gruntjs.com/) to copy the font files into your application:

```js
// Gruntfile.js
module.exports = function(grunt) {
	// Run `npm i grunt-contrib-copy --save-dev`
	grunt.loadNpmTasks("grunt-contrib-copy");

	grunt.initConfig({
		copy: {
			icons: {
				cwd: "node_modules/@nice-digital/icons/dist/",
				src: ["*"],
				dest: "/fonts/",
				expand: true,
				flatten: true,,
				filter: "isFile"
			}
		}
	});
};
```

#### Visual Studio Copy Task

Use a [Visual Studio Copy Task](https://docs.microsoft.com/en-gb/visualstudio/msbuild/copy-task) to copy the font files into your application. Or use a [post build event](https://stackoverflow.com/a/3719097/486434).

### Markup

Use custom icons in markup (rather than [SASS](#sass)) wherever possible:

- hide from screenreaders with `[aria-hidden="true"]`
- use BEM style CSS classes (`icon--NAME` modifier)
- prefer `<span>` over `<i>`.

Basics of usage are: `<span class="icon icon--[NAME]" aria-hidden="true"></span>` where name is one of the [source icons](src) e.g.:

```html
<span class="icon icon--logo" aria-hidden="true"></span>
```

### SASS

There are SASS constructs for advanced usage:

- `@mixin nice-icon-base` for the base styles required for an icon
- `@mixin nice-icon($icon)`n e.g. `@include nice-icon(logo);`
- `@function nice-icon($icon)` e.g. `content: nice-icon(logo);` - gets the unicode codepoint value
- `$nice-icons` - a map of icon name to unicode codepoint. Override this when generating a custom webfont in your application
- `$nice-font-base-path` - the URL from which to download the font files. Override this in your application if you serve font files from a different path.

```scss
.logo {
	&__btn {
		@include nice-icon(logo);
	}

	// or
	&__btn {
		@include nice-icon-base;

		&:before {
			content: nice-icon(logo);
			display: block;
		}
	}
}
```

## Development

### Dependencies

	TL;DR:
		1. `yarn`
		2. `npm start`

To build the icon font on your local machine, first install:

- [Node 6+](https://nodejs.org/en/download/)
- [Yarn](https://yarnpkg.com/en/docs/install)

Then before you can run any tasks, run the following from the command line to install dependencies:

- `yarn`

> Note: if you prefer to use npm rather than yarn, run `npm i` instead.

We use Grunt as a task runner hence the dependency on Node. If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide first.

### Commands

Run `npm start` from the command line for development. This uses [grunt-webfont](.grunt-tasks/webfont.js) under the hood to:

- build the [source icons](src) into a web font with formats:
	- [EOT](dist/nice-icons.eot)
	- [SVG](dist/nice-icons.svg)
	- [TTF](dist/nice-icons.ttf)
	- [WOFF](dist/nice-icons.woff)
	- [WOFF2](dist/nice-icons.woff2)
- build a [SASS file](dist/_nice-icons.scss)
- build a [JSON file](dist/nice-icons.json) of metadata for the font
- create a [demo html](dist/demo.html) - use this for testing new icons.

### Updating ToC

Run the following command to update the readme:

```sh
npx doctoc ./readme.md
```

### Releasing

Run `npm run release` from the command line to release a new patch version. This uses [grunt-release-it](.grunt-tasks/release-it.js) under the hood.

> Note: Generate a [GitHub personal acccess token](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/) and set this as the environment variable GITHUB_TOKEN. E.g. `export GITHUB_TOKEN="abcde1234"`

## Creating icons

Follow the following steps to create a new SVG:

1. 512px height SVG
2. Single compund path
3. Viewbox from 0,0

Then, if you're creating a core icon:

1. Save into the [src](src) folder
2. Re-run `npm start` to rebuild the icon font

## Custom application icons

Use these instructions to build a webfont from custom icons for your application. First, follow the [steps above to create an SVG](#creating-icons) then follow the steps below to create a custom icon font:

1. Create a [grunt task](https://github.com/sapegin/grunt-webfont) for webfont generation. You can base this off [our webfont task](.grunt-tasks/webfont.js).
2. Use a [custom template](.nice-icons.tmpl.scss) to override the `$nice-icons` map. (You don't need the mixins in your template.)
3. Reference both your SVG icon and the core icons:
	
	`src: ["./icons/*.svg", "./node_modules/@nice-digital/icons/src/*.svg"]`
4. Override the `$nice-font-base-path` variable in your application's SASS to match where your font files are served from. The default path is */fonts/*.

> Note: Only reference the core icons you need when building a custom icon font. E.g. replace `"./icons/*.svg"` with `"./icons/logo.svg", "./icons/search.svg"` etc.

See the [custom-icon](examples/custom-icon) folder for a complete example of this.

## Icons

<!-- START icons -->
- ![android](src/android.svg =100x) android 
- ![apple](src/apple.svg =100x) apple 
- ![calendar](src/calendar.svg =100x) calendar 
- ![comment](src/comment.svg =100x) comment 
- ![evidence](src/evidence.svg =100x) evidence 
- ![facebook-square](src/facebook-square.svg =100x) facebook-square 
- ![facebook](src/facebook.svg =100x) facebook 
- ![guidance](src/guidance.svg =100x) guidance 
- ![hamburger](src/hamburger.svg =100x) hamburger 
- ![linkedin-sign](src/linkedin-sign.svg =100x) linkedin-sign 
- ![logo-name](src/logo-name.svg =100x) logo-name 
- ![logo](src/logo.svg =100x) logo 
- ![pathways](src/pathways.svg =100x) pathways 
- ![print](src/print.svg =100x) print 
- ![readnews](src/readnews.svg =100x) readnews 
- ![search](src/search.svg =100x) search 
- ![standards](src/standards.svg =100x) standards 
- ![syndication](src/syndication.svg =100x) syndication 
- ![trash](src/trash.svg =100x) trash 
- ![twitter-square](src/twitter-square.svg =100x) twitter-square 
- ![twitter](src/twitter.svg =100x) twitter 
- ![user](src/user.svg =100x) user 
- ![youtube-play](src/youtube-play.svg =100x) youtube-play 
- ![youtube-square](src/youtube-square.svg =100x) youtube-square 

<!-- END icons -->
