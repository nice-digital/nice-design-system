# `@nice-digital/design-system`

> TODO: description

## Usage

```
const designSystem = require('@nice-digital/design-system');

// TODO: DEMONSTRATE API
```

## Installation

### Install with yarn

[yarn](https://yarnpkg.com/en/package/@nice-digital/design-system) is the recommended way of installing the NICE Design System into your project. Run the following from the command line to install it as a dependency:

`yarn add @nice-digital/design-system -D`

Then follow the [usage](#usage) steps below...

> Note: if you prefer to use npm rather than yarn, run npm `npm i @nice-digital/design-system --save` instead.

The installed package contains:

- source SASS
- pre-compiled (dist) CSS
- source (ES6) JavaScript
- pre-compiled (dist) JavaScript
- static assets like favicon and logo.

Note: The icon font is referenced as a dependency from [@nice-digital/icons](https://github.com/nhsevidence/nice-icons#readme).

### Usage

#### From source

The yarn/npm package contains the source code as well as the precompiled assets.

See the [stylesheets directory](src/stylesheets#installation) for further information on how to build from SASS source in your project.

See the [javascripts directory](src/javascripts#installation) for further information on how to build from JavaScript source in your project.

#### CDN

- Useful for rapid prototyping
- no need for CSS/JS build steps: just reference the pre-compiled CSS/JS
- uses compiled CSS so loses the benefit of SASS mixins, function and variables
- you get everything: you can’t pick and choose just what you need
- not recommended for production setups.

*CDN is coming soon…*

#### Precompiled

Not recommended for production, but useful for quick prototypes, the npm package includes a dist folder with precompiled assets.

You can reference directly if you have the correct permissions:

```html
<!-- Font from Google & compiled/minified CSS -->
<link href="https://fonts.googleapis.com/css?family=Lato:300,400,400i,700" rel="stylesheet">
<link rel="stylesheet" href="/node_modules/@nice-digital/design-system/dist/stylesheets/nice.min.css">

<!-- jQuery from CDN & compiled/minified JavaScript -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
<script src="/node_modules/@nice-digital/design-system/dist/javascripts/nice.min.js"></script>
```

OR if you're using express you can use the dist folder as a static directory:

```javascript
app.use(express.static(__dirname + "/node_modules/@nice-digital/design-system/dist/"));
app.use(express.static(__dirname + "/node_modules/@nice-digital/icons/dist/"));
```

and then reference it from your HTML as:

```html
<link rel="stylesheet" href="/stylesheets/nice.min.css" type="text/css">
<script src="/javascripts/nice.min.js"></script>
```

OR you can use a copy command (with Grunt or similar) to copy the compiled assets out of the *node_modules* folder to somewhere where you can serve them.
