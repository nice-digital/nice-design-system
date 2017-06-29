---
layout: sidebar
title: Grid & layout
description: Containers, grid, layouts and responsive behaviours
---

## Introduction

Use containers, grids and whitespace to build a structure and hierarchy on the page. 
{:.lead}

### Page width

The default [maximum page width](#containers) is 1170px (73.125rem), but go wider if the content requires it.

[Use a grid](#grid-system) to lay out your content. To prevent long lines of text, content should sit in a column which is two-thirds of the page width.

Long lines reduce legibility, so all lines of text should be no longer than 70 to 80 characters.

### Screen size

Design for small screens first using a single column layout.

Optimise for different screen sizes, but don’t make assumptions about specific devices.

See our [responsive guidelines]({{ site.baseurl }}{% link foundations/responsive.md %}) for further content on building mobile first responsive layouts.

### Layout considerations

- Know and understand how the information on the page will be used
- organise content in terms of priority and group related content together
- always consider how your layout will be shown on small screen devices
- only exceed the maximum container width when your content requires it
- keep the layout consistent when developing similar pages.

## Containers

- Containers have a maximum width (1170px or 73.125rem) and are centrally aligned horizontally
- use the `--full` modifier to fill the available screen width when your content requires it
- extend it in SASS via the `%container` placeholder for building custom components
- don't nest containers
- add vertical [spacing classes]({{ site.baseurl }}{% link foundations/spacing.md %}#css-classes) to containers to add margins and padding.

{% capture containers %}
<div class="container mb-d">
    This is a container with a margin bottom
</div>
<div class="container container--full">
    This is a full width container
</div>
{% endcapture %}
{% include source.html lang='html' body=containers title='Container class example' %}

{% capture containersplaceholder %}
.layout {
    @extend %container;

    &__body {
        @include grid;
    }
}
{% endcapture %}
{% include source.html lang='scss' body=containersplaceholder title='Container placeholder example' %}

## Grid system

We use a grid to structure our designs. Our grid is a mobile-first, responsive, fluid system based on a 12 column layout:

- wrap grids in a `.container` to take care of maximum width and fluidity
- grids fill the available space within their parent container
- the grid is based on a fluid, responsive 12 column grid
- [grid items](#grid-items) sit directly within grids
- use `.grid` for grids and `data-g` for grid items
- grids can be nested within infinitely nested
- use [mixins](#semantic) for generating layouts or components with semantic class names.

### Grid items

Use the `data-g` attribute to create grid items:

- specify how many of the 12 columns to span, e.g. `data-g="3"` or `data-g="one-quarter"` for spanning three of the twelve columns
- there are also more human readable names like *one-half*, *two-thirds*, *three-quarters* etc, eg. `data-g="two-thirds"`
- use `breakpoint:columns` to override the column width from a breakpoint e.g. `data-g="6 md:3"` or `data-g="12 md:one-third"`
- grid item widths are mobile-first
- if there are more than 12 items within a grid, the items simply wrap onto the next line.

### Whole

{% capture whole %}
<div class="grid">
    <div data-g="12"><div class="grid-example-item">1 whole</div></div>
    <div data-g="one-whole"><div class="grid-example-item">1 whole</div></div>
</div>
{% endcapture %}
{% include example.html lang='html' body=whole %}

### Halves

{% capture halves %}
<div class="grid">
    <div data-g="6"><div class="grid-example-item">1/2</div></div>
    <div data-g="one-half"><div class="grid-example-item">1/2</div></div>
</div>
{% endcapture %}
{% include example.html lang='html' body=halves %}

### Thirds

{% capture thirds %}
<div class="grid">
    <div data-g="4"><div class="grid-example-item">1/3</div></div>
    <div data-g="two-thirds"><div class="grid-example-item">2/3</div></div>
</div>
{% endcapture %}
{% include example.html lang='html' body=thirds %}

### Quarters

{% capture quarters %}
<div class="grid">
    <div data-g="3"><div class="grid-example-item">1/4</div></div>
    <div data-g="3"><div class="grid-example-item">1/4</div></div>
    <div data-g="3"><div class="grid-example-item">1/4</div></div>
    <div data-g="3"><div class="grid-example-item">1/4</div></div>

    <div data-g="one-quarter"><div class="grid-example-item">1/4</div></div>
    <div data-g="one-quarter"><div class="grid-example-item">1/4</div></div>
    <div data-g="two-quarters"><div class="grid-example-item">2/4</div></div>

    <div data-g="one-quarter"><div class="grid-example-item">1/4</div></div>
    <div data-g="three-quarters"><div class="grid-example-item">3/4</div></div>
</div>
{% endcapture %}
{% include example.html lang='html' body=quarters %}

### Fifths

{% capture fifths %}
<div class="grid">
    <div data-g="one-fifth"><div class="grid-example-item">1/5</div></div>
    <div data-g="two-fifths"><div class="grid-example-item">2/5</div></div>
    <div data-g="two-fifths"><div class="grid-example-item">2/5</div></div>

    <div data-g="two-fifths"><div class="grid-example-item">2/5</div></div>
    <div data-g="three-fifths"><div class="grid-example-item">3/5</div></div>

    <div data-g="one-fifth"><div class="grid-example-item">1/5</div></div>
    <div data-g="four-fifths"><div class="grid-example-item">4/5</div></div>
</div>
{% endcapture %}
{% include example.html lang='html' body=fifths %}


## Nested grids

- Grids can be nested infinitely

{% capture nested %}
<div class="grid">
    <div data-g="one-half">
        <div class="grid-example-item">
            <div>1/2</div>
            <div class="grid">
                <div data-g="one-half">
                    <div class="grid-example-item">1/2</div>
                </div>
                <div data-g="one-half">
                    <div class="grid-example-item">
                        <div>1/2</div>
                        <div class="grid">
                            <div data-g="one-half">
                                <div class="grid-example-item">1/2</div>
                            </div>
                            <div data-g="one-half">
                                <div class="grid-example-item">1/2</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div data-g="one-half">
        <div class="grid-example-item">
            <div>1/2</div>
            <div class="grid">
                <div data-g="one-half">
                    <div class="grid-example-item">1/2</div>
                </div>
                <div data-g="one-half">
                    <div class="grid-example-item">1/2</div>
                </div>
            </div>
        </div>
    </div>
</div>
{% endcapture %}
{% include example.html lang='html' body=nested %}


## Responsive grids

- grids are mobile first
- use `xs:`, `sm:`, `md:`, `lg:` and `xl:` for different screen size
- use our [breakpoints]({{ site.baseurl }}{% link foundations/responsive.md %}#breakpoints).

{% capture responsive %}
<div class="grid">
    <div data-g="12 sm:6 md:4 lg:one-third">
        <div class="grid-example-item">*</div>
    </div>
    <div data-g="12 sm:6 md:4 lg:one-third">
        <div class="grid-example-item">*</div>
    </div>
    <div data-g="12 sm:6 md:4 lg:one-third">
        <div class="grid-example-item">*</div>
    </div>
    <div data-g="12 sm:6 md:4 lg:one-third">
        <div class="grid-example-item">*</div>
    </div>
    <div data-g="12 sm:6 md:4 lg:one-third">
        <div class="grid-example-item">*</div>
    </div>
</div>
{% endcapture %}
{% include example.html lang='html' body=responsive %}

<a href="{{ site.baseurl }}{% link foundations/responsive.md %}" class="btn btn--secondary">More about responsive design</a>

## Other grid features

Use [BEM modifiers]({{ site.baseurl }}{% link technical/sass/code-standards.md %}#bem-and-naming) for grids features. Use grid features when needed to suit the presentation of content.

### Reversed

The `.grid--rev` modifier renders the grid it in the opposite order to the source order. This is useful for stacking things in the correct order on mobile devices.

{% capture reversed %}
<div class="grid grid--rev">
    <div data-g="one-half">
        <div class="grid-example-item">first in the source</div>
    </div>
    <div data-g="one-half">
        <div class="grid-example-item">second in the source</div>
    </div>
</div>
{% endcapture %}
{% include example.html lang='html' body=reversed %}

### Gutterlesss

Remove the gutter between grid items with the `.grid--gutterless` modifier. Generally used for small components nested within other grids, or when you need to closely relate two pieces of information.

{% capture gutterlesss %}
<div class="grid grid--gutterless">
    <div data-g="one-quarter push:one-quarter">
        <div class="grid-example-item">something</div>
    </div>
    <div data-g="one-quarter push:one-quarter">
        <div class="grid-example-item">else</div>
    </div>
</div>
{% endcapture %}
{% include example.html lang='html' body=gutterlesss %}

### Compact

Use smaller gutters between grid items with the `.grid--compact` modifier

{% capture compact %}
<div class="grid grid--compact">
    <div data-g="one-quarter">
        <div class="grid-example-item">1/4</div>
    </div>
    <div data-g="one-quarter">
        <div class="grid-example-item">1/4</div>
    </div>
    <div data-g="one-quarter">
        <div class="grid-example-item">1/4</div>
    </div>
    <div data-g="one-quarter">
        <div class="grid-example-item">1/4</div>
    </div>
</div>
{% endcapture %}
{% include example.html lang='html' body=compact %}

### Loose

Use larger gutters between grid items with the `.grid--loose` modifier. A loose grid is generally used for layouts and container components.

{% capture loose %}
<div class="grid grid--loose">
    <div data-g="one-fifth">
        <div class="grid-example-item">1/5</div>
    </div>
    <div data-g="three-fifths">
        <div class="grid-example-item">3/5</div>
    </div>
    <div data-g="one-fifth">
        <div class="grid-example-item">1/5</div>
    </div>
</div>
{% endcapture %}
{% include example.html lang='html' body=loose %}

### Right

Right aligned grids with the `.grid--right` modifier

{% capture right %}
<div class="grid grid--right">
    <div data-g="one-quarter">
        <div class="grid-example-item">right</div>
    </div>
    <div data-g="one-quarter">
        <div class="grid-example-item">right</div>
    </div>
</div>
{% endcapture %}
{% include example.html lang='html' body=right %}

### Centered

Centrally aligned grids with the `.grid--center` modifier

{% capture centered %}
<div class="grid grid--center">
    <div data-g="one-quarter">
        <div class="grid-example-item">centered</div>
    </div>
    <div data-g="one-quarter">
        <div class="grid-example-item">centered</div>
    </div>
</div>
{% endcapture %}
{% include example.html lang='html' body=centered %}

### Push/pull

Pull grid items left with `pull:X` or push them right with `push:X`

{% capture pushpull %}
<div class="grid grid--center">
    <div data-g="3 pull:1">
        <div class="grid-example-item">pull</div>
    </div>
    <div data-g="3 push:1">
        <div class="grid-example-item">push</div>
    </div>
</div>
{% endcapture %}
{% include example.html lang='html' body=pushpull %}

Or push/pull on certain screen sizes:

{% capture pushpullresponsive %}
<div class="grid grid--center">
    <div data-g="6 md:3 md:pull:1">
        <div class="grid-example-item">pull from md</div>
    </div>
    <div data-g="6 md:3 md:push:1">
        <div class="grid-example-item">push from md</div>
    </div>
</div>
{% endcapture %}
{% include example.html lang='html' body=pushpullresponsive %}

### Middle

Vertically align grid items to the middle with the `.grid--middle` modifier

{% capture middle %}
<div class="grid grid--middle">
    <div data-g="6">
        <div class="grid-example-item">deep<br/>grid</div>
    </div>
    <div data-g="6">
        <div class="grid-example-item">middle</div>
    </div>
</div>
{% endcapture %}
{% include example.html lang='html' body=middle %}

### Bottom

Vertically align grid items to the bottom with the `.grid--bottom` modifier

{% capture bottom %}
<div class="grid grid--bottom">
    <div data-g="6">
        <div class="grid-example-item">deep<br/>grid</div>
    </div>
    <div data-g="6">
        <div class="grid-example-item">bottom</div>
    </div>
</div>
{% endcapture %}
{% include example.html lang='html' body=bottom %}

### Debug

Debug grids in development with an outline with the `.grid--debug` modifier

{% capture debug %}
<div class="grid grid--debug">
    <div data-g="6">
        <div class="grid-example-item">debug</div>
    </div>
    <div data-g="6">
        <div class="grid-example-item">debug</div>
    </div>
</div>
{% endcapture %}
{% include example.html lang='html' body=debug %}

Or debug all grids in an ancestor with the `.debug-grid` class (apply to the body to debug all grids):

{% capture debugall %}
<div class="debug-grid">
    <div class="grid">
        <div data-g="6">
            <div class="grid-example-item">debug</div>
        </div>
        <div data-g="6">
            <div class="grid-example-item">debug</div>
        </div>
    </div>
    <div class="grid grid--center">
        <div data-g="3">
            <div class="grid-example-item">debug</div>
        </div>
        <div data-g="3">
            <div class="grid-example-item">debug</div>
        </div>
    </div>
</div>
{% endcapture %}
{% include example.html lang='html' body=debugall %}


## Semantic

Use grid mixins for creating semantic class names for grid-based layouts. This replaces the default grid selectors with classes like `sidebar` or `article-body`.

{% capture semantic %}
.layout {
    @include grid;

    &__sidebar {
        @include grid-item(12, $md: 3, $lg: 4);
    }

    &__body {
        @include grid-item(12, $md: 9, $lg: 8);
    }
}
{% endcapture %}
{% include source.html lang='scss' body=semantic title='Semantic example' %}

<a href="{{ site.baseurl }}{% link technical/sass/documentation/grid.md %}#mixin-grid-item" class="btn btn--secondary">Grid item docs</a>

## Media queries

Use [media queries]({{ site.baseurl }}{% link foundations/responsive.md %}#media-queries) to build custom responsive layouts:

{% capture mediaqueries %}
.test {
    &__item {
        float: left;
        width: 100%;

        @include mq($from: md) {
            width: percentage(1 / 3);
        }

        @include mq($from: lg) {
            width: 25%;
        }
    }
}
{% endcapture %}
{% include source.html lang='scss' body=mediaqueries title='Media queries example' %}

<a href="{{ site.baseurl }}{% link foundations/responsive.md %}#media-queries" class="btn btn--secondary">More about media queries</a>
