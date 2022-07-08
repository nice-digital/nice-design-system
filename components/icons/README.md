# NICE Icons

> Icons for use in NICE Digital Services

[![npm](https://img.shields.io/npm/v/@nice-digital/icons.svg)](https://www.npmjs.com/package/@nice-digital/icons)
[![GitHub release](https://img.shields.io/github/release/nice-digital/nice-icons.svg)](https://github.com/nice-digital/nice-icons/releases/latest)
[![License](https://img.shields.io/github/license/nice-digital/nice-icons.svg)](https://github.com/nice-digital/nice-icons/blob/master/LICENSE)
[![Dependencies](https://img.shields.io/david/nice-digital/nice-icons.svg)](https://david-dm.org/nice-digital/nice-icons)
[![Dev dependencies](https://img.shields.io/david/dev/nice-digital/nice-icons.svg)](https://david-dm.org/nice-digital/nice-icons?type=dev)

<details>
<summary><strong>Table of contents</strong></summary>

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [NICE Icons](#nice-icons)
	- [Intro](#intro)
		- [Guidance](#guidance)
	- [Upgrading from 1.x to 2.x](#upgrading-from-1x-to-2x)
		- [What's new in v2.x?](#whats-new-in-v2x)
	- [Installation](#installation)
		- [Include sass](#include-sass)
			- [Environment variable](#environment-variable)
			- [includePaths](#includepaths)
			- [Tilde import](#tilde-import)
	- [Usage](#usage)
		- [React](#react)
			- [Browser support](#browser-support)
		- [Webfont](#webfont)
			- [Serving font files](#serving-font-files)
				- [Express](#express)
				- [Grunt copy](#grunt-copy)
				- [Visual Studio Copy Task](#visual-studio-copy-task)
				- [Webpack](#webpack)
			- [Markup](#markup)
			- [SASS](#sass)
	- [Development](#development)
		- [Dependencies](#dependencies)
		- [Commands](#commands)
		- [Updating the readme](#updating-the-readme)
		- [Releasing](#releasing)
	- [Creating icons](#creating-icons)
	- [Custom application icons](#custom-application-icons)
	- [Icons](#icons)
	- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

</details>

## Intro

NICE Icons is a replacement for [NICE.Glyphs](http://nhsevidence.github.io/NICE.Bootstrap/Guide.Glyphs.html#charset). It is independent of Bootstrap and the Design System so can be used on its own.

### Guidance

Avoid unnecessary decoration - only use icons if there’s a real user need:

- if icons are needed ensure they are clear, simple and accompanied by relevant text
- don’t hide functionality under icons
- icons should be easily recognizable
- keep icon designs simple and schematic.

## Upgrading from 1.x to 2.x

The following are breaking changes from v1 to v2:

- the generated SASS file is at a new path - now at */scss* rather than *dist/* to be consistent with other packages
- the SASS base path variable `$nice-font-base-path` is now `$nice-icons-base-path`
- the SASS mixin `icon-base` is now `nice-icons-base`
- there are no nested folders within src
- dropped `speak: none` CSS property
- dropped support for usage via Bower
- use Node 10, and npm 6.8+.

### What's new in v2.x?

As well as the breaking changes listed above, we've made the following updates:

- upgrade to Babel 7
- upgrade other outdated packages
- add Figma source file containing all the SVG icons
- add React components, with ES5 transpiled version.

## Installation

Install [NICE Icons from npm](https://www.npmjs.com/package/@nice-digital/icons):

`npm i @nice-digital/icons --save`

The *node_modules/@nice-digital/icons* package folder will include:

- source SVG files in the *src* folder
- React components:
  - ES5 in the *lib* folder (with associated d.ts files)
  - ES6 in the *es* folder (with associated d.ts files)
  - TypeScript in the *ts* folder
- generated icon font (EOT, SVG, TTF, WOFF and WOFF 2) in the *dist* folder
- JSON file in the *dist* folder with font metadata information.

### Include sass

Import NICE Icons in SASS with:

```scss
@import 'nice-icons';
```

But before you do this, you'll need to include the path *./node_modules/@nice-digital/icons/scss* in your SASS build. There are a few ways to do this:

#### Environment variable

Use the [SASS_PATH environment variable](https://github.com/sass/node-sass/pull/1680) with SASS. For example, in Create React App 2 use the following inside a *.env* file:

```
SASS_PATH=node_modules/@nice-digital/icons/scss
```

#### includePaths

Use the [includePaths option from node-sass](https://github.com/sass/node-sass#includepaths) to include the path. Or with [grunt-sass](https://github.com/sindresorhus/grunt-sass#options):

```js
// Gruntfile.js
module.exports = function(grunt) {
	// Run `npm i grunt-sass --save-dev`
	grunt.loadNpmTasks("grunt-sass");

	grunt.initConfig({
		sass: {
			app: {
				includePaths: ["node_modules/@nice-digital/icons/scss"]
			}
		}
	});
};
```

#### Tilde import

Replace the import above with a tilde path if you're using [sass-loader via webpack](https://github.com/webpack-contrib/sass-loader#imports) or [node-sass-tilde-importer](https://www.npmjs.com/package/node-sass-tilde-importer) with node-sass:

```scss
@import '~@nice-digital/icons/scss/nice-icons';
```

## Usage

We've created various [usage examples](examples) to help with getting started.

There are 2 main ways to use NICE Icons in your project:

### React

There are React component versions of each icon within the *lib* folder. This allows you to easily include inline SVGs when rendering via React. Each icon file is named with PascalCase, for example *src/email-closed.svg* is available in React as *lib/EmailClosed.js*.

To use, first import the SASS file into your project [as above](#installation). Then import and use React components from the lib folder, for example:

```js
import Search from "@nice-digital/icons/lib/Search";

const something = (props) => {
	return <div>
		<Search />
	</div>;
};

```

The React component icons have the following default props:

- `className=icon` - the associated class has a height and width of 1em to match the surrounding text
- `aria-hidden={true}` as they're designed to be a visual to textual labels. In the rare case you need icons on their own without text, then pass a prop of `aria-hidden={false}` and make sure there's an associated aria label, title etc.

The svg path also has a default `fill=currentColor` to match surrounding text colour, but this can also be overridden via CSS.

Note: these React files in the *lib* folder are ES5 compatible. However, we also include ES6 versions in the _es_ folder if you prefer. This means you'll need to transpile these with babel (or similar) as part of your build. For example, by using the [include option](https://webpack.js.org/configuration/module/#condition) pointing to *node_modules/@nice-digital/icons* with babel-loader in webpack.

#### Browser support

This method is subject to the same [browser support as inline SVGs](https://caniuse.com/#feat=svg-html5) - essentially IE9+. To support IE8, you'd need to roll your own fallback - that's currently beyond the scope of this package.

### Webfont

We provide a custom icon web font because:

- it's easy to render custom icons with content managed markup
- there's no JavaScript required
- icon color, size, shadow etc can be styled with CSS
- any custom icons can be used
- icon fonts support IE8+
- vector icons are infinitely scalable
- vector icons look perfect on retina displays.

#### Serving font files

> Note: [Add the corrrect MIME type to your web.config](http://stackoverflow.com/a/7374640/486434) if you get a 404 error for .woff files in IIS.

##### Express

Use `express.static` to serve font files in [Express](https://expressjs.com/) directly from the *dist* folder:

```js
const express = require("express"),
	path = require("path");

const app = express();

app.use("/fonts", express.static(path.join(__dirname, "./node_modules/@nice-digital/icons/dist")))
```

See the [simple-express](examples/simple-express) folder for a complete example of this.

##### Grunt copy

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
				src: ["*.{eot,woff,woff2,ttf,svg}"],
				dest: "/fonts/",
				expand: true,
				flatten: true,,
				filter: "isFile"
			}
		}
	});
};
```

##### Visual Studio Copy Task

Use a [Visual Studio Copy Task](https://docs.microsoft.com/en-gb/visualstudio/msbuild/copy-task) to copy the font files into your application. Or use a [post build event](https://stackoverflow.com/a/3719097/486434).


##### Webpack

Install [Copy Webpack Plugin](copy-webpack-plugin) into your application, then at the top of your webpack config file add the following:

`const CopyWebpackPlugin = require('copy-webpack-plugin');`

then in the plugins section add the following:

`new CopyWebpackPlugin([{ from: "node_modules/@nice-digital/icons/dist/*", to: "fonts", ignore: ["*.html"], flatten: true }]),`

note that the 'to' destination is relative to the output path, which for a .NET core app would probably have been configured for wwwroot.


#### Markup

Use custom icons in markup (rather than [SASS](#sass)) wherever possible:

- hide from screenreaders with `[aria-hidden="true"]`
- use BEM style CSS classes (`icon--NAME` modifier)
- prefer `<span>` over `<i>`.

Basics of usage are: `<span class="icon icon--[NAME]" aria-hidden="true"></span>` where name is one of the [source icons](src) e.g.:

```html
<span class="icon icon--logo" aria-hidden="true"></span>
```

#### SASS

There are SASS constructs for advanced usage:

- `@mixin nice-icons-base` for the base styles required for an icon
- `@mixin nice-icon($icon)`n e.g. `@include nice-icon(logo);`
- `@function nice-icon($icon)` e.g. `content: nice-icon(logo);` - gets the unicode codepoint value
- `$nice-icons` - a map of icon name to unicode codepoint. Override this when generating a custom webfont in your application
- `$nice-icons-base-path` - the URL from which to download the font files. Override this in your application if you serve font files from a different path.

```scss
.logo {
	&__btn {
		@include nice-icon(logo);
	}

	// or
	&__btn {
		@include nice-icons-base;

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
		1. `npm i`
		2. `npm start`

To build the icon font on your local machine, first install:

- [Node 12](https://nodejs.org/en/download/)
- [npm 6.8+](https://www.npmjs.com/)

Then before you can run any tasks, run the following from the command line to install dependencies:

- `npm i`

> Note: if you prefer to use npm rather than yarn, run `yarn` instead.

We use Grunt as a task runner hence the dependency on Node. If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide first.

### Commands

Run `npm start` from the command line for development. This uses [grunt-webfont](.grunt-tasks/webfont.js) under the hood to:

- build the [source icons](src) into a web font in the [dist folder](dist) with formats:
	- [EOT](dist/nice-icons.eot)
	- [SVG](dist/nice-icons.svg)
	- [TTF](dist/nice-icons.ttf)
	- [WOFF](dist/nice-icons.woff)
	- [WOFF2](dist/nice-icons.woff2)
- build a [JSON file](dist/nice-icons.json) of metadata for the font
- build a [SASS file](scss/_nice-icons.scss)
- build [React components](lib) into the lib folder
- create a [demo html](dist/demo.html) - use this for testing new icons.

### Updating the readme

Run the following command to update the readme:

```sh
npm run readme
```

This will generate the table of icons from the readme and to update the ToC.

### Releasing

Run `npm run release` from the command line to release the package in interactive mode. Or run one of:

- `npm run release:major`
- `npm run release:minor`
- `npm run release:patch`

Alternatively use fine-grained options like `npm run release -- 2.0.0-beta.1 --tag=beta --any-branch`

This uses [np](https://www.npmjs.com/package/np) under the hood.

> Note: Generate a [GitHub personal acccess token](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/) and set this as the environment variable GITHUB_TOKEN. E.g. `export GITHUB_TOKEN="abcde1234"`

## Creating icons

We provide a [Figma file](NICE Icons.fig) with the source of all icons. Upload this into Figma and add a new Page for each icon.

> Note: [Figma](https://www.figma.com/) is an online (and desktop) design and wireframing-type application. We're using it here in the context of a vector drawing tool, like Adobe Illustrator. The steps below will essentially take you through opening the existing project file with all the icons in, adding a new one in the "right" way (so it's a standard format with all of the other icons), exporting your new icon as an SVG to add to the repo, and re-saving the project file ready for the next person.

Follow the following steps to create a new SVG in Figma:

1.  Add page with the correct name eg "Address book"
2.  If you have an existing SVG, drag it into the page pane. If creating a custom SVG, ensure you have a single compound path vector.
3.  Set X and Y to 0 and 0
4.  Add a 32px layout grid to the frame
5.  Rename the frame (with the hash symbol) to "Address book frame" and the vector within it to "Address book vector"
6.  On the vector, change the constraints to Centre and Centre.
7.  On the frame change the width and height to 512px.
8.  On the vector, SHIFT+Click the corner resize tool and give it 1 square padding
9.  Centre the vector using the icons at the top of the design tool panel or use ALT+V and ALT+H when the vector is inside the frame.
10. On the Address book page, add an export setting with type of SVG, then export the SVG changing the filename to kebab case eg "address-book.svg" and save in the src folder.
	(Alternatively, right-click the frame and Copy As SVG)
11. Ensure the SVG file has the XML declaration at the top, the same as all the other SVG files in the repository.
12. In Figma menu, File > Save as .fig and save a new copy of NICE Icons.fig, in the root of the repository.

Afterwards,

1. Re-run `npm start` to rebuild the icon font and React components
2. Re-run `npm run readme` to rebuild the icons in this readme file.

## Custom application icons

Use these instructions to build a webfont from custom icons for your application. First, follow the [steps above to create an SVG](#creating-icons) then follow the steps below to create a custom icon font:

1. Create a [grunt task](https://github.com/sapegin/grunt-webfont) for webfont generation. You can base this off [our webfont task](.grunt-tasks/webfont.js).
2. Use a [custom template](.nice-icons.tmpl.scss) to override the `$nice-icons` map. (You don't need the mixins in your template.)
3. Reference both your SVG icon and the core icons:
	
	`src: ["./icons/*.svg", "./node_modules/@nice-digital/icons/src/*.svg"]`
4. Override the `$nice-icons-base-path` variable in your application's SASS to match where your font files are served from. The default path is */fonts/*.

> Note: Only reference the core icons you need when building a custom icon font. E.g. replace `"./icons/*.svg"` with `"./icons/logo.svg", "./icons/search.svg"` etc.

See the [custom-icon](examples/custom-icon) folder for a complete example of this.

## Icons

<!-- START icons generated comment -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN COMMAND TO UPDATE -->

| Icon                                                                        | Name               | Unicode | HTML                                                                     | SASS                                      |
| --------------------------------------------------------------------------- | ------------------ | ------- | ------------------------------------------------------------------------ | ----------------------------------------- |
| <img src="src/android.svg" alt="android" height="50">                       | android            | f17b    | `<span class="icon icon--android" aria-hidden="true"></span>`            | `@include nice-icon(android);`            |
| <img src="src/apple.svg" alt="apple" height="50">                           | apple              | f179    | `<span class="icon icon--apple" aria-hidden="true"></span>`              | `@include nice-icon(apple);`              |
| <img src="src/calendar.svg" alt="calendar" height="50">                     | calendar           | e045    | `<span class="icon icon--calendar" aria-hidden="true"></span>`           | `@include nice-icon(calendar);`           |
| <img src="src/check.svg" alt="check" height="50">                           | check              | f00c    | `<span class="icon icon--check" aria-hidden="true"></span>`              | `@include nice-icon(check);`              |
| <img src="src/chevron-down.svg" alt="chevron-down" height="50">             | chevron-down       | e03c    | `<span class="icon icon--chevron-down" aria-hidden="true"></span>`       | `@include nice-icon(chevron-down);`       |
| <img src="src/chevron-left.svg" alt="chevron-left" height="50">             | chevron-left       | e03b    | `<span class="icon icon--chevron-left" aria-hidden="true"></span>`       | `@include nice-icon(chevron-left);`       |
| <img src="src/chevron-right.svg" alt="chevron-right" height="50">           | chevron-right      | e03a    | `<span class="icon icon--chevron-right" aria-hidden="true"></span>`      | `@include nice-icon(chevron-right);`      |
| <img src="src/chevron-up.svg" alt="chevron-up" height="50">                 | chevron-up         | e039    | `<span class="icon icon--chevron-up" aria-hidden="true"></span>`         | `@include nice-icon(chevron-up);`         |
| <img src="src/comment.svg" alt="comment" height="50">                       | comment            | f101    | `<span class="icon icon--comment" aria-hidden="true"></span>`            | `@include nice-icon(comment);`            |
| <img src="src/download.svg" alt="download" height="50">                     | download           | e006    | `<span class="icon icon--download" aria-hidden="true"></span>`           | `@include nice-icon(download);`           |
| <img src="src/email-closed.svg" alt="email-closed" height="50">             | email-closed       | e014    | `<span class="icon icon--email-closed" aria-hidden="true"></span>`       | `@include nice-icon(email-closed);`       |
| <img src="src/evidence.svg" alt="evidence" height="50">                     | evidence           | e017    | `<span class="icon icon--evidence" aria-hidden="true"></span>`           | `@include nice-icon(evidence);`           |
| <img src="src/facebook-square.svg" alt="facebook-square" height="50">       | facebook-square    | f082    | `<span class="icon icon--facebook-square" aria-hidden="true"></span>`    | `@include nice-icon(facebook-square);`    |
| <img src="src/facebook.svg" alt="facebook" height="50">                     | facebook           | e012    | `<span class="icon icon--facebook" aria-hidden="true"></span>`           | `@include nice-icon(facebook);`           |
| <img src="src/google-plus-square.svg" alt="google-plus-square" height="50"> | google-plus-square | f0d4    | `<span class="icon icon--google-plus-square" aria-hidden="true"></span>` | `@include nice-icon(google-plus-square);` |
| <img src="src/google-plus.svg" alt="google-plus" height="50">               | google-plus        | f0d5    | `<span class="icon icon--google-plus" aria-hidden="true"></span>`        | `@include nice-icon(google-plus);`        |
| <img src="src/guidance.svg" alt="guidance" height="50">                     | guidance           | e011    | `<span class="icon icon--guidance" aria-hidden="true"></span>`           | `@include nice-icon(guidance);`           |
| <img src="src/hamburger.svg" alt="hamburger" height="50">                   | hamburger          | e03d    | `<span class="icon icon--hamburger" aria-hidden="true"></span>`          | `@include nice-icon(hamburger);`          |
| <img src="src/instagram.svg" alt="instagram" height="50">                   | instagram          | f16d    | `<span class="icon icon--instagram" aria-hidden="true"></span>`          | `@include nice-icon(instagram);`          |
| <img src="src/linkedin-sign.svg" alt="linkedin-sign" height="50">           | linkedin-sign      | f08c    | `<span class="icon icon--linkedin-sign" aria-hidden="true"></span>`      | `@include nice-icon(linkedin-sign);`      |
| <img src="src/linkedin.svg" alt="linkedin" height="50">                     | linkedin           | f0e1    | `<span class="icon icon--linkedin" aria-hidden="true"></span>`           | `@include nice-icon(linkedin);`           |
| <img src="src/location.svg" alt="location" height="50">                     | location           | f102    | `<span class="icon icon--location" aria-hidden="true"></span>`           | `@include nice-icon(location);`           |
| <img src="src/logo-full.svg" alt="logo-full" height="50">                   | logo-full          | e01c    | `<span class="icon icon--logo-full" aria-hidden="true"></span>`          | `@include nice-icon(logo-full);`          |
| <img src="src/logo-name.svg" alt="logo-name" height="50">                   | logo-name          | e01b    | `<span class="icon icon--logo-name" aria-hidden="true"></span>`          | `@include nice-icon(logo-name);`          |
| <img src="src/logo.svg" alt="logo" height="50">                             | logo               | e01a    | `<span class="icon icon--logo" aria-hidden="true"></span>`               | `@include nice-icon(logo);`               |
| <img src="src/minus.svg" alt="minus" height="50">                           | minus              | e02a    | `<span class="icon icon--minus" aria-hidden="true"></span>`              | `@include nice-icon(minus);`              |
| <img src="src/pathways.svg" alt="pathways" height="50">                     | pathways           | e005    | `<span class="icon icon--pathways" aria-hidden="true"></span>`           | `@include nice-icon(pathways);`           |
| <img src="src/play.svg" alt="play" height="50">                             | play               | e028    | `<span class="icon icon--play" aria-hidden="true"></span>`               | `@include nice-icon(play);`               |
| <img src="src/plus.svg" alt="plus" height="50">                             | plus               | e027    | `<span class="icon icon--plus" aria-hidden="true"></span>`               | `@include nice-icon(plus);`               |
| <img src="src/podcast.svg" alt="podcast" height="50">                       | podcast            | e00b    | `<span class="icon icon--podcast" aria-hidden="true"></span>`            | `@include nice-icon(podcast);`            |
| <img src="src/print.svg" alt="print" height="50">                           | print              | e001    | `<span class="icon icon--print" aria-hidden="true"></span>`              | `@include nice-icon(print);`              |
| <img src="src/question-circle.svg" alt="question-circle" height="50">       | question-circle    | f059    | `<span class="icon icon--question-circle" aria-hidden="true"></span>`    | `@include nice-icon(question-circle);`    |
| <img src="src/readnews.svg" alt="readnews" height="50">                     | readnews           | e009    | `<span class="icon icon--readnews" aria-hidden="true"></span>`           | `@include nice-icon(readnews);`           |
| <img src="src/remove.svg" alt="remove" height="50">                         | remove             | e024    | `<span class="icon icon--remove" aria-hidden="true"></span>`             | `@include nice-icon(remove);`             |
| <img src="src/search.svg" alt="search" height="50">                         | search             | e004    | `<span class="icon icon--search" aria-hidden="true"></span>`             | `@include nice-icon(search);`             |
| <img src="src/share.svg" alt="share" height="50">                           | share              | e008    | `<span class="icon icon--share" aria-hidden="true"></span>`              | `@include nice-icon(share);`              |
| <img src="src/sorting-asc.svg" alt="sorting-asc" height="50">               | sorting-asc        | e022    | `<span class="icon icon--sorting-asc" aria-hidden="true"></span>`        | `@include nice-icon(sorting-asc);`        |
| <img src="src/sorting-desc.svg" alt="sorting-desc" height="50">             | sorting-desc       | e023    | `<span class="icon icon--sorting-desc" aria-hidden="true"></span>`       | `@include nice-icon(sorting-desc);`       |
| <img src="src/sorting.svg" alt="sorting" height="50">                       | sorting            | e021    | `<span class="icon icon--sorting" aria-hidden="true"></span>`            | `@include nice-icon(sorting);`            |
| <img src="src/standards.svg" alt="standards" height="50">                   | standards          | e002    | `<span class="icon icon--standards" aria-hidden="true"></span>`          | `@include nice-icon(standards);`          |
| <img src="src/stop.svg" alt="stop" height="50">                             | stop               | e043    | `<span class="icon icon--stop" aria-hidden="true"></span>`               | `@include nice-icon(stop);`               |
| <img src="src/syndication.svg" alt="syndication" height="50">               | syndication        | e013    | `<span class="icon icon--syndication" aria-hidden="true"></span>`        | `@include nice-icon(syndication);`        |
| <img src="src/trash.svg" alt="trash" height="50">                           | trash              | e020    | `<span class="icon icon--trash" aria-hidden="true"></span>`              | `@include nice-icon(trash);`              |
| <img src="src/twitter-square.svg" alt="twitter-square" height="50">         | twitter-square     | f081    | `<span class="icon icon--twitter-square" aria-hidden="true"></span>`     | `@include nice-icon(twitter-square);`     |
| <img src="src/twitter.svg" alt="twitter" height="50">                       | twitter            | e000    | `<span class="icon icon--twitter" aria-hidden="true"></span>`            | `@include nice-icon(twitter);`            |
| <img src="src/user.svg" alt="user" height="50">                             | user               | e01f    | `<span class="icon icon--user" aria-hidden="true"></span>`               | `@include nice-icon(user);`               |
| <img src="src/warning.svg" alt="warning" height="50">                       | warning            | e04b    | `<span class="icon icon--warning" aria-hidden="true"></span>`            | `@include nice-icon(warning);`            |
| <img src="src/youtube-play.svg" alt="youtube-play" height="50">             | youtube-play       | f16a    | `<span class="icon icon--youtube-play" aria-hidden="true"></span>`       | `@include nice-icon(youtube-play);`       |
| <img src="src/youtube-square.svg" alt="youtube-square" height="50">         | youtube-square     | f166    | `<span class="icon icon--youtube-square" aria-hidden="true"></span>`     | `@include nice-icon(youtube-square);`     |

<!-- END icons generated comment -->

## License

NICE Icons distributed under the [MIT license](LICENSE).

We use some icons from the awesome [Font Awesome Free](https://fontawesome.com/free), which is licensed under the [CC BY 4.0 license](https://fontawesome.com/license/free).
