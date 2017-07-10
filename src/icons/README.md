# Icons

## Compiling icons

We use [grunt-webfont](https://github.com/nhsevidence/nice-design-system/blob/master/.grunt-tasks/webfont.js) for compiling our icons into a web font. This generates a [SASS file](https://github.com/nhsevidence/nice-design-system/blob/master/src/stylesheets/typography/_typography-icons.scss) and icon font files (eot, svg, ttf, woff and woff2) into the dist folder.

If you're using Node/Express you can use the following to serve font files: `app.use("/fonts", express.static(path.join(__dirname, "./node_modules/@nice-digital/design-system/dist/fonts")))`, otherwise you'd need to setup a copy task to copy the font files out of the node module into your application.

## Usage

Basics of usage are: `<span class="icon icon--[NAME]" aria-hidden="true"></span>` e.g. `<span class="icon icon--search" aria-hidden="true"></span>`.

But there are also SASS constructs for custom usage:

- `@mixin nice-icon-base` for the base styles required for an icon
- `@mixin nice-icon($icon)`n e.g. `@include nice-icon(search);`
- `@function nice-icon($icon)` e.g. `content: nice-icon(search);` - gets the unicode codepoint value
- `$nice-icon.` - a map of icon name to unicode codepoint. Can be overridden if generating a custom webfont in your application.
- `$nice-font-base-path` - the URL from which to download the font files. Can be overridden in your application if you host your font files from a different path.

## Creating icons

Follow the following steps to create a new icon:

1. 512px height SVG
2. Single compund path
3. Viewbox from 0,0</li>
4. Save into the <em>src/icons</em> folder
5. Rerun <code>grunt webfont</code> rebuild the icon font

## Custom application icons

If you're creating custom icons for your application only (not adding them to the core set), then you can follow the steps above but then you need to do the following to generate your own custom webfont:

1. Create a [grunt task](https://github.com/sapegin/grunt-webfont) for webfont generation. You can base this off [our webfont task](https://github.com/nhsevidence/nice-design-system/blob/master/.grunt-tasks/webfont.js).
2. Use a [custom template](https://github.com/nhsevidence/nice-design-system/blob/master/src/icons/.nice-icons.tmpl.scss) to override the $nice-icons map. (You don't need the mixins in your template.)
3. Reference both your SVG icon and the core ones from NICE Experience: (`src: ["./icons/*.svg", "./node_modules/@nice-digital/design-system/src/icons/*.svg"]`). You can also only reference the icons you need from the NICE Experience if you're only using a few.
Override the `$nice-font-base-path` variable if you generate your font files anywhere other than */fonts/*
