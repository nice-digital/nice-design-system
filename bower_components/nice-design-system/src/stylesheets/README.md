# SASS

<details>
<summary><strong>Table of contents</strong></summary>

- [Installation](#installation)
	- [Grunt](#grunt)
	- [Webpack](#webpack)
- [Linting](#linting)
- [.editorconfig](#editorconfig)
- [Naming and syntax](#naming-and-syntax)
</details>

## Installation

Import the Design System's SASS into your application to build from source. This makes use of Design System mixins, functions and variables. Use the [node-sass](https://github.com/sass/node-sass#includepaths) `includePaths` option to reference the source in your project. The paths are:

- *node_modules/@nice-digital/design-system/src/stylesheets*
- *node_modules/@nice-digital/icons/dist*

Then import via `@import 'nice-design-system';` in your application's SASS. There are specific instructions below for [grunt](#grunt) or [webpack](#webpack).

### Grunt

Use [grunt-sass](https://github.com/sindresorhus/grunt-sass) to include the Design System source SASS in your project. First install dependencies:

```sh
yarn add @nice-digital/design-system grunt grunt-sass
```

Then reference the source SASS via the `includePaths` option in your *Gruntfile.js*:

```js
// Gruntfile.js
module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      options: {
        sourceMap: true,
        includePaths: [
          'node_modules/@nice-digital/design-system/src/stylesheets',
          'node_modules/@nice-digital/icons/dist'
        ]
      },
      dist: {
        files: {
          'main.css': 'scss/main.scss'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.registerTask('default', ['sass']);
};
```

And import the Design System in your application's SASS:

```scss
// app.scss
@import "nice-design-system";
```

### Webpack

Use [sass-loader](https://github.com/webpack-contrib/sass-loader) with [extract-text-webpack-plugin](https://github.com/webpack-contrib/extract-text-webpack-plugin) when building with webpack. First install dependencies:

```sh
yarn add @nice-digital/design-system webpack css-loader sass-loader node-sass extract-text-webpack-plugin
```

Then reference the source SASS via the `includePaths` option in your *webpack.config.js*:

```js
// webpack.config.js
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
  filename: "[name].[contenthash].css"
});

module.exports = {
  entry: './app.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: extractSass.extract({
        use: [{
          loader: "css-loader"
        }, {
          loader: "sass-loader",
          options: {
            includePaths: [
              'node_modules/@nice-digital/design-system/src/stylesheets',
              'node_modules/@nice-digital/icons/dist'
            ]
          }
        }]
      })
    }]
  },
  plugins: [
    extractSass
  ]
};
```

Then require your app's CSS through JS:

```js
// app.js
require("./app.scss");;
```

Finally, import the Design System in your `app.scss`:

```scss
// app.scss
@import "nice-design-system";
```

## Linting

We use [Sass Lint](https://github.com/sasstools/sass-lint) (or [Grunt Sass Lint](https://github.com/sasstools/grunt-sass-lint)) to lint our SASS. A Sass Lint config ([.sass-lint.yml](.sass-lint.yml)) is included in the source.

Reference this via a Sass Lint command in your application (e.g. via grunt-sass-lint) to follow the same rules. This allows consistency across our applications.

First install dependencies:

```sh
yarn add @nice-digital/design-system grunt grunt-sass-lint
```

Then reference the `configFile` in your *Gruntfile.js*:

```js
// Gruntfile.js
module.exports = function(grunt) {
  grunt.initConfig({
    sasslint: {
      options: {
        configFile: 'node_modules/@nice-digital/design-system/src/stylesheets/.sass-lint.yml'
      },
      dist: ['./*.scss']
    }
  });

  grunt.loadNpmTasks('grunt-sass-lint');
  grunt.registerTask('default', ['sasslint']);
};
```

## .editorconfig

Include an editorconfig in your application's root. You can copy the one from this repository, or use the following rule for SCSS files:

```sh
# .editorconfig
[*.scss]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
```

## Naming and syntax

- Follow our Sass Lint rules with our [.sass-lint.yml](.sass-lint.yml)
- Use [BEM](http://getbem.com/) for component naming
- Use [general-to-specific](https://webdesign.tutsplus.com/articles/quick-tip-name-your-sass-variables-modularly--webdesign-13364) variable naming 
- Use [SassDoc](http://sassdoc.com/) comments
