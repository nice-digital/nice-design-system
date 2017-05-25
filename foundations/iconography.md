---
layout: sidebar
title: Iconography
description: Icons, their usage and how to create new icons
---

## Introduction

We use a custom web font for rendering our icons.
This is built from [source SVGs](https://github.com/nhsevidence/NICE-Experience/tree/master/src/icons){:target="_blank"} by a [grunt task](https://github.com/nhsevidence/NICE-Experience/blob/master/.grunt-tasks/webfont.js){:target="_blank"} as part of our build process.

- The icon font supports IE8+
- The icons are infinitely scalable

Basic usage of icons is easy as (where [NAME] is the icon name e.g. 'search'):

{% capture basics %}
<span class="icon icon--[NAME]" aria-hidden="true"></span>
{% endcapture %}
{% include source.html lang='html' body=basics title='Icons basics' %}


## Icons

<div class="grid">
    {% for glyph in site.data.fonts.nice-icons.glyphs %}
        <div data-g="6 xs:4 md:3 lg:2" class="text-center">
            <div class="h2">
                <span class="icon icon--{{ glyph }}"></span>
            </div>
            <p>
                {{ glyph }}
            </p>
        </div>
    {% endfor %}
</div>


## Usage

For performance reasons, all icons require a base class and individual icon class. To use, place the following code just about anywhere. Be sure to leave a space between the icon and text for proper padding.

Icon classes cannot be directly combined with other components. They should not be used along with other classes on the same element. Instead, add a nested `<span>` and apply the icon classes to the `<span>`.

Icon classes should only be used on elements that contain no text content and have no child elements. Use a `<span>` tag rather than `<i>`.

### URL

By default, the icon font files are referenced from CSS at the */fonts/*. This can be overridden by setting the `$nice-font-base-path` in your application settings. For example, if you move the font files to a different location or you want to load them from a CDN.

If you're using node and express then you can use the following to add the compiled fonts from the node modules folder:

{% capture mount %}
app.use("/fonts", express.static(path.join(__dirname, "./node_modules/nice-experience/dist/fonts")));
{% endcapture %}
{% include source.html lang='js' body=mount title='Mount fonts with Express' %}

If you're not using express, you could easily create a [copy task](ttps://github.com/gruntjs/grunt-contrib-copy){:target="_blank"} to copy the font files to a directory of your choice on build, e.g.:

{% capture gruntcopy %}
// Run `npm install grunt-contrib-copy --save-dev`
module.exports = function(grunt) {

    grunt.loadNpmTasks("grunt-contrib-copy");

    grunt.initConfig({
        copy: {
            icons: {
                cwd: "node_modules/nice-experience/dist/fonts/",
                src: ["*"],
                dest: "/fonts/",
                expand: true,
                flatten: true,,
                filter: "isFile"
            }
        }
    });
};
{% endcapture %}
{% include source.html lang='js' body=gruntcopy title='Grunt copy example' %}

### 404 in IIS

If you get a 404 error for .woff files with IIS, then you may need to [add the MIME type](http://stackoverflow.com/a/7374640/486434){:target="_blank"} to your web.config:

{% capture webconfig %}
<system.webServer>
    <staticContent>
        <remove fileExtension=".woff" />
        <mimeMap fileExtension=".woff" mimeType="application/x-font-woff" />
    </staticContent>
</system.webServer>
{% endcapture %}
{% include source.html lang='xml' body=webconfig title='Web.config update' %}

## Markup

- Hide from screenreaders with `[aria-hidden="true"]`
- Use BEM style CSS classes
- Prefer `<span>` over `<i>`

{% capture markup %}
<p>
    <span class="icon icon--plus" aria-hidden="true"></span>
    Some text with an icon
    <span class="icon icon--standards" aria-hidden="true"></span>
</p>
<p>
    <button type="button" class="btn">Remove <span class="icon icon--remove" aria-hidden="true"></span></button>
</p>
{% endcapture %}
{% include example.html lang='html' body=markup %}

### SASS

There are generated SASS constructs (map, function and mixin) available for creating custom components. These are useful if the default classes for use in markup are not sufficient.

<a href="{{ site.baseurl }}{% link technical/sass/documentation/icons.md %}" class="btn">Iconography constructs</a>

{% capture sass %}
.search {
    &__btn {
        @include nice-icon(search);
    }

    // or
    &__btn {
        @include nice-icon-base;

        &:before {
            content: nice-icon(search);
            display: block;
        }
    }
}
{% endcapture %}
{% include source.html lang='xml' body=sass title='Custom component icon example' %}


## Custom icons

The icons provided by default should cater for most scenarios but sometimes you'll need an icon that isn't included.
Then you have 2 options after [creating an icon SVG](#creating-icons):

- Option 1: Add a new core icon in to the NICE Experience via a PR and release a new version - this is the best approach if it's an icon that could be used for other applications
- Option 2: Add an icon into your application and generate a custom icon font (see below).

### Custom icon font

Option 2 is best if you're creating a bespoke icon set for your application but it does require more work. The steps are:

1. Create the SVG as per the [creating icons](#creating-icons) section
2. Create a [grunt task for webfont generation](https://github.com/sapegin/grunt-webfont){:target="_blank"}. You can base this off [our webfont task](https://github.com/nhsevidence/NICE-Experience/blob/master/.grunt-tasks/webfont.js){:target="_blank"}.
3. Use a [custom template](https://github.com/nhsevidence/NICE-Experience/blob/master/src/icons/.nice-icons.tmpl.scss){:target="_blank"} to override the `$nice-icons` map. (You don't need the mixins in your template.)
4. Reference both your SVG icon and the core ones from NICE Experience: (`src: ["./icons/*.svg", "./node_modules/nice-experience/src/icons/*.svg"]`). You can also only reference the icons you need from the NICE Experience if you're only using a few.
5. Override the `$nice-font-base-path` variable if you generate your font files anywhere other than */fonts/*


## Creating icons

- 512px height SVG
- Single compund path
- Viewbox from 0,0
- Save into the *src/icons* folder (if creating a new core icon)
- Rerun `grunt webfont` rebuild the icon font and run the app


## More Info

### IE8 and @font-face

Internet Explorer 8 has some issues with `@font-face `when combined with `:before`. Our icon font uses that combination. If a page is cached, and loaded without the mouse over the window (i.e. hit the refresh button or load something in an iframe) then the page gets rendered before the font loads. Hovering over the page (body) will show some of the icons and hovering over the remaining icons will show those as well.
