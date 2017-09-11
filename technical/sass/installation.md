---
layout: sidebar
title: SASS Installation
breadcrumb: Installation
description: How to install the NICE Design System SASS
---

Use the instructions below for how to reference SASS when using the NICE Design System. Use the following paths for node-sass `includePaths` option:

- node_modules/@nice-digital/design-system/src/stylesheets
- node_modules/@nice-digital/icons/dist

## Grunt

Use [grunt-sass](https://github.com/sindresorhus/grunt-sass) to build from souce SASS. First install dependencies:

{% capture gruntInstall %}
yarn add @nice-digital/design-system grunt grunt-sass
{% endcapture %}
{% include source.html lang='bash' body=gruntInstall title='grunt dependencies' %}

Then reference the source SASS via the `includePaths` option:

{% capture gruntfile %}
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
{% endcapture %}
{% include source.html lang='js' body=gruntfile title='gruntfile.js' %}

Then in your application's SASS import the design system via: `@import 'index';`.

## Webpack

Use [sass-loader](https://github.com/webpack-contrib/sass-loader) with [extract-text-webpack-plugin](https://github.com/webpack-contrib/extract-text-webpack-plugin) when building with webpack. First install depdencies:

{% capture webpackInstall %}
yarn add @nice-digital/design-system webpack css-loader sass-loader node-sass extract-text-webpack-plugin
{% endcapture %}
{% include source.html lang='bash' body=webpackInstall title='webpack dependencies' %}

Then your *webpack.config.js* would look something like:

{% capture webpackconfig %}
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
{% endcapture %}
{% include source.html lang='js' body=webpackconfig title='webpack.config.js' %}

Then in your app's JavaScript you can use `require("./main.scss");` which in turn has `@import 'index';`.