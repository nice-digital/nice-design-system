# JavaScript

## Table of contents

* [Compilation](#compilation)
* [Flow type](#flow-type)
* [Linting](#linting)
* [Auto plugin loader](#auto-plugin-loader)
* [Comments](#comments)

Our JavaScript is written in ES6 with [Flow type annotations](#flow-type) so needs to be [compiled/bundled](#compilation). We recommend requiring the modules you need as and when you need them to avoid bloat - the below examples demonstrate this:

```JavaScript
var el = document.querySelector(".a-selector");

// Recommended: import a module directly
import Tabs from "tabs";
var tabs = new Tabs(el);

// Import a named export
import { Tabs } from "@nice-digital/design-system";
var tabs = new Tabs(el);

// Import via module
import nice from "@nice-digital/design-system";
var tabs = new nice.Tabs(el);

// Requiring - named module
var Tabs = require("tabs").default;
var tabs = new Tabs(el);

// Requiring - via module
var nice = require("@nice-digital/design-system");
var tabs = new nice.Tabs(el);

// Not recommended - global namespace usage
var tabs = new NICE.nice.Tabs(el);

// Use the jquery plugin version
$(".a-selector").tabs();
```

## Compilation

Our source JS needs to be compiled, transpiled and packed for several reasons:

- [Flow type annotations](#flow-type)
- [ES6 (ECMAScript 2015)](https://github.com/lukehoban/es6features)
- our JS is written in modules and should be combined and minified
- applications should ideally build from source, rather than using the pre-compiled version

We use and recommend [Webpack](https://webpack.github.io/) with [Babel](https://babeljs.io/) and their respective plugins for packing and transpiling our JavaScript.

See our [webpack.config.js](../../webpack.config.js) and our [.babelrc](../../.babelrc) for an example of compilation of ES6 with Flow type annotations.

TODO: Webpack/require/browserify - path to source code for compilation.

## Flow type

We use [Flow type annotations](https://flowtype.org/) in our JavaScript because:

- annotations are opt-in, so allows adding them gradually
- no learning a new like TypeScript/CoffeeScript
- support for IDE integration
- easily transforms to normal JavaScript
- catches common type related static bugs
- used with [Babel Typecheck](https://github.com/codemix/babel-plugin-typecheck) allows runtime type checking

We encourage use of runtime type checking with Babel Typecheck during development. See our [.bablerc](../../.babelrc) for an example. Note: it disables them in production, as long as `NODE_ENV=production` is set when compiling production JS.

A runtime error would look like: *Uncaught TypeError: Value of argument "num" violates contract. Expected: number Got: string*.

## Linting

We have a set of ES Lint rules for linting our JS. See our [.eslintrc](.eslintrc) for our ruleset. It uses [babel-eslint](https://github.com/babel/babel-eslint) as the parser and uses a [flowtype plugin](eslint-plugin-flowtype) because of our [Flow type annotations](#flow-type). You should use a [watch task](../../.grunt-tasks/watch.js#L24-L30) to lint as you work.

## Auto plugin loader

Our modules are written as ES6 classes within modules so can be used directly, but for convenience are also wrapped in jQuery plugins. We then have a [plugin loader module](plugin-autoloader.js) that automatically:

- requires all plugin modules
- looks for any `[data-PLUGIN]` instances
- applies the named plugin to each
- parses the `[data-PLUGIN-OPTION]` attributes for plugin options

The pre-compiled version automatically includes the plugin auto loader. So you can do:

```html
<div class="tabs" data-tabs data-tabs-test="something">
</div>
<script src="nice.min.js"></script>
```

## Comments

We use [documentationjs](http://documentation.js.org/) to generate documentation for our library code, so any comments should follow a [JSDoc style](https://github.com/documentationjs/documentation/blob/master/docs/GETTING_STARTED.md) syntax.

