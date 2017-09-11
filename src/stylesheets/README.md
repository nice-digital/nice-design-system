# SASS

<details>
<summary><strong>Table of contents</strong></summary>

- [Installation](#installation)
	- [Grunt](#grunt)
	- [Webpack](#webpack)
- [Linting](#linting)
- [.editorconfig](#.editorconfig)
- [Naming and syntax](#naming-and-syntax)
</details>

## Installation

Use the instructions below for how to reference SASS when using the NICE Design System. Use the following paths for node-sass `includePaths` option:

- node_modules/@nice-digital/design-system/src/stylesheets
- node_modules/@nice-digital/icons/dist

Then import via `@import 'nice-design-system';` in your application's SASS.

### Grunt

Use [grunt-sass](https://github.com/sindresorhus/grunt-sass) to build from souce SASS. First install dependencies:

```sh
yarn add @nice-digital/design-system grunt grunt-sass
```

Then reference the source SASS via the `includePaths` option:

```js
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

Then in your SASS you can:

```scss
@import "nice-design-system";
```

### Webpack

Use [sass-loader](https://github.com/webpack-contrib/sass-loader) with [extract-text-webpack-plugin](https://github.com/webpack-contrib/extract-text-webpack-plugin) when building with webpack. First install depdencies:

```sh
yarn add @nice-digital/design-system webpack css-loader sass-loader node-sass extract-text-webpack-plugin
```

Then your *webpack.config.js* would look something like:

```js
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

Then in your JavaScript you can:

```j
require("./app.scss");;
```

Then in your `app.scss` you can:

```scss
@import "nice-design-system";
```

## Linting

We use [Sass Lint](https://github.com/sasstools/sass-lint) (or [Grunt Sass Lint](https://github.com/sasstools/grunt-sass-lint)) to lint our SASS. A Sass Lint config ([.sass-lint.yml](.sass-lint.yml)) is included in the source.

Reference this via a Sass Lint command in your application (e.g. via grunt-sass-lint). This allows consistency across our applications.

First install depdencies:

```sh
yarn add @nice-digital/design-system grunt grunt-sass-lint
```

Then your *Gruntfile.js* would look something like:

```js
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
