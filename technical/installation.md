---
layout: sidebar
title: Installation
description: Install the product to get started
---

## Basic template

Use the following HTML structure as a guide when creating new applications. It contains annotations and placeholders for optional elements.

{% capture template %}
<!DOCTYPE html>
<html lang="en-GB" class="no-js">
<!-- no-js is replaced by Modernizr -->
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!--
        The above 3 meta tags *must* come first in the head.
        Any other head content must come *after* these tags
    -->
    <meta name="description" content="Description">
    <!--
        Add other meta tags as needed eg:
            - Theme colour
            - Dublin Core
            - RSS/Atom
            - Apple icons
            - MS Tile image/colour
    -->

    <title>Title</title>

    <!-- Optional: We are people, not machines - http://humanstxt.org/ -->
    <link type="text/plain" rel="author" href="/humans.txt" />
    <!--  Favicon -->
    <link rel="shortcut icon" href="/favicon.ico" />
    <!-- Main application css -->
    <link rel="stylesheet" href="/stylesheets/app.css" type="text/css" charset="utf-8">
    <!--
        Optional: Lato font from Google.
        Only include the required weights in production
    -->
    <link href="//fonts.googleapis.com/css?family=Lato:400,700,900" rel="stylesheet" type="text/css" />
    <!--
        Add other links tags as needed eg:
            - rel="canonical" for Canonical URLs (https://support.google.com/webmasters/answer/139066?hl=en#2)
            - rel=amphtml for AMP (https://www.ampproject.org/docs/get_started/create/prepare_for_discovery#linking-pages-with-link)
            - rel="icon" for Chrome Android (https://developers.google.com/web/updates/2014/11/Support-for-theme-color-in-Chrome-39-for-Android)
    -->

    <!--
        Modernizr: production builds should use a custom build with just the required rules rather than the full version.
        Note: Including HTML 5 shim in Modernizr (https://modernizr.com/download?setclasses-shiv) means no need for a separate download
    -->
    <script src="//cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js"></script>

    <!--
        Respond.js (https://github.com/scottjehl/Respond) to polyfill media queries in IE8.
        ES5 Shim & Sham - for making ES3 browsers (IE8) ES5 compatible.
        Note: also include HTML shim (//cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js) here if you don't in Modernizr.
    -->
    <!--[if lt IE 9]>
        <script src="//cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/es5-shim/4.5.7/es5-shim.min.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/es5-shim/4.5.10/es5-sham.min.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

    <!-- Optional: Other 3rd party scripts e.g. Hotjar/Optimizely/VWO -->
</head>
<!-- Optional: data-tracker initializes the Tracker plugin -->
<body data-tracker>

    <!-- Google Tag Manager -->
    <noscript>
        <iframe src="//www.googletagmanager.com/ns.html?id=GTM-XYZ"
                height="0" width="0" style="display:none;visibility:hidden"></iframe>
    </noscript>
    <script>
        (function (w, d, s, l, i) {
            w[l] = w[l] || []; w[l].push({
                'gtm.start':
                    new Date().getTime(), event: 'gtm.js'
            }); var f = d.getElementsByTagName(s)[0],
                    j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
                        '//www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', 'GTM-XYZ');</script>
    <!-- End Google Tag Manager -->

    <!-- BODY HERE -->
    <main>
    </main>

    <!-- jQuery (necessary for JavaScript plugins) -->
    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <!-- NICE TopHat for the main menu -->
    <script src="//cdn.nice.org.uk/V3/Scripts/nice/NICE.TopHat.dev.js"></script>
    <!-- Application javascript, or Design System js -->
    <script src="/javascripts/app.js"></script>
</body>
</html>
{% endcapture %}
{% include source.html lang='html' body=template title='Basic HTML template' %}

## yarn (or npm)

[yarn](https://yarnpkg.com/en/package/@nice-digital/design-system) is the recommended way of installing the NICE Design System into your project. Run the following from the command line to install it as a dependency:

{% capture yarn %}
yarn add @nice-digital/design-system
{% endcapture %}
{% include source.html lang='bash' body=yarn title='yarn' %}

Note: if you prefer to use npm rather than yarn, run npm `npm i @nice-digital/design-system --save` instead.

The installed package contains:
 - source SASS
 - pre-compiled (dist) CSS
 - source (ES6) JavaScript
 - pre-compiled (dist) JavaScript
 - static assets like favicon and logo.

Note: The icon font is referenced as a dependency from [@nice-digital/icons](https://yarnpkg.com/en/package/@nice-digital/icons).

We recommend only using the pre-compiled versions for rapid prototyping. Instead, [build the source JavaScript]({{ site.baseurl }}{% link technical/javascript/index.md %}) into your project (with webpack), and <a href="{{ site.baseurl }}{% link technical/sass/installation.md %}">build the source SASS</a> into your project.

The following is the basic structure with important files mentioned. Please note, not all source files are included in the list below:

{% capture npm %}
node_modules/@nice-digital/design-system/
├── dist/
│   ├── docs/
│       ├── *
│   ├── javascripts/
│           ├── nice.dev.js
│           ├── nice.dev.map
│           ├── nice.min.js
│           ├── nice.min.map
│           ├── nice.oldie.dev.js
│           ├── nice.oldie.dev.map
│           ├── nice.oldie.min.js
│           ├── nice.oldie.min.map
│   ├── stylesheets/
│           ├── nice.css
│           ├── nice.css.map
│           ├── nice.min.css
│           ├── nice.min.map
├── src
│   ├── assets/
│           ├── favicon.ico
│   ├── components/
│           ├── *
│   ├── javascripts/
│           ├── .eslintignore
│           ├── .eslintrc.json
│           ├── index.js
│           ├── *
│   ├── stylesheets/
│           ├── .sass-lint.yml
│           ├── index.scss
│           ├── *
{% endcapture %}
{% include source.html lang='bash' body=npm title='directory structure' %}

## CDN

- Useful for rapid prototyping
- No need for CSS/JS build steps: just reference the pre-compiled code in the template above
- Uses compiled CSS so loses the benefit of SASS mixins and functions
- You get everything: you can't pick and choose *just* what you need
- **Not recommended** for production setups

CDN is [coming soon]({{ site.baseurl }}{% link about/roadmap.md %}) &hellip;


## Latest release

- Use the latest release directly
- Not recommended for production setups

<a href="{{ site.repository }}/releases/latest" class="btn">Latest release</a>


## Download master ZIP

- Download a ZIP of the latest code from master
- Not recommended for production setups

<a href="{{ site.repository }}/archive/master.zip" class="btn">Download latest ZIP</a>


## Bower

Bower support is [coming soon]({{ site.baseurl }}{% link about/roadmap.md %}) &hellip;


## Meteor

Meteor support is [coming soon]({{ site.baseurl }}{% link about/roadmap.md %}) &hellip;