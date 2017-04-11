---
layout: sidebar
title: Installation
---

# Installation

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
    <link href="//fonts.googleapis.com/css?family=Lato:200normal,200italic,300normal,300italic,400normal,400italic,700normal,700italic,900normal,900italic" rel="stylesheet" type="text/css">
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
        Note: also include HTML shim (//cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js) here if you don't in Modernizr.
    -->
    <!--[if lt IE 9]>
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

    <!-- jQuery (necessary for JavaScript plugins) -->
    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <!-- NICE TopHat for the main menu -->
    <script src="//cdn.nice.org.uk/V3/Scripts/nice/NICE.TopHat.dev.js"></script>
    <!-- Appliaction javascript, with polyfilled IE version -->
    <!--[if !IE]><!-->
        <script src="/javascripts/app.js"></script>
    <!--<![endif]-->
    <!--[if IE]>
        <script src="/javascripts/app.oldie.js"></script>
    <![endif]-->
</body>
</html>
{% endcapture %}
{% include source.html lang='html' body=template title='Basic HTML template' %}

## npm

npm is the recommended way of installing the NICE Experience into your project:

{% capture npm %}
npm i nice-experience --save
{% endcapture %}
{% include source.html lang='bash' body=npm title='npm install' %}

The package contains both source and pre-compiled versions for SASS, JavaScript and our icon font, as well as static assets like favicon and logo. We recommend only using the pre-compiled versions for rapid prototyping. Instead, [build the source JavaScript]({{ site.baseurl }}{% link technical/javascript/index.md %}) into your project with webpack, and <a href="{{ site.baseurl }}{% link technical/sass/index.md %}">build the source SASS</a> into your project with grunt-sass.

The following is the basic structure with important files mentioned. Please note, not all source files are included in the list below:

{% capture npm %}
node_modules/nice-experience/
├── dist/
│   ├── docs/
│       ├── fonts/
│           ├── nice-icons.json
│   ├── fonts/
│           ├── nice-icons.eot
│           ├── nice-icons.svg
│           ├── nice-icons.ttf
│           ├── nice-icons.woff
│           ├── nice-icons.woff2
│   ├── javascripts/
│           ├── experience.dev.js
│           ├── experience.dev.map
│           ├── experience.min.js
│           ├── experience.min.map
│           ├── experience.oldie.dev.js
│           ├── experience.oldie.dev.map
│           ├── experience.oldie.min.js
│           ├── experience.oldie.min.map
│   ├── stylesheets/
│           ├── experience.css
│           ├── experience.css.map
│           ├── experience.min.css
│           ├── experience.min.map
├── src
│   ├── assets/
│           ├── favicon.ico
│   ├── components/
│           ├── *
│   ├── icons/
│           ├── *.svg
│   ├── javascripts/
│           ├── .eslintignore
│           ├── .eslintrc.json
│           ├── experience.js
│           ├── *
│   ├── stylesheets/
│           ├── .sass-lint.yml
│           ├── experience.scss
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

<a href="https://github.com/nhsevidence/NICE-Experience/releases/latest" class="btn">Latest release</a>


## Download master ZIP

- Download a ZIP of the latest code from master
- Not recommended for production setups

<a href="https://github.com/nhsevidence/NICE-Experience/archive/master.zip" class="btn">Download latest ZIP</a>


## Bower

Bower support is [coming soon]({{ site.baseurl }}{% link about/roadmap.md %}) &hellip;


## Meteor

Meteor support is [coming soon]({{ site.baseurl }}{% link about/roadmap.md %}) &hellip;