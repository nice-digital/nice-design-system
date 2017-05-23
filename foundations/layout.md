---
layout: sidebar
title: Grid & layout
description: Containers, grid, layouts and responsive behaviours
---

## Introduction

Our grid system is a responsive, mobile-first, fluid grid system.
It is based on a 12 column grid and can use predefined classes or mixins for generating layouts with more semantic class names.
{:.lead}

Grids should sit within a `.container` which takes care of the maximum width and fluidity - grids fill the available space within their parent container. There are no rows: grid items sit directly within the grid itself.

- Gutters between grid items are achieved with a left margin, but the gutter can easily be removed, or reduced
- The grid has a negative left margin so that the grid can align with non-grid content
- The grid is based on `inline-block` so uses a word and letter spacing fix.
- SASS mixins can also be used to make layouts with more semantic class names


### Defining grid items

- Grid items are created by specifying how many of the 12 columns to span, e.g. `[data-g="3"]` for 3/12 columns
- Predefined selectors like `[data-g="6"]` for grid items exist for quickly making grid-based layouts
- There are also more human readable names like *one-half* etc, eg. `[data-g="two-thirds"]`
- Grid item widths are mobile-first. This means they apply from the given widths upwards, overriding widths targeted for smaller devices. E.g. `[data-g="6 md:3"]` will be &frac14; of the width for 'medium' screen widths and up.
- If there are more than 12 items within a grid, the items simply wrap onto the next line

### Layout considerations

- Organise content in terms of priority and group related content together
- Always consider how your layout will be shown on small screen devices
- Only exceed the maximum container width when your content requires it
- Keep the layout consistent when developing similar pages


## Containers

- Containers have a max width and centrally aligned horizontally
- Use containers to wrap grids to restrict their width
- Containers can be 'normal' or one of the followin BEM modifiers:
    * `--narrow` - smaller width, good for adding visual interest
    * `--full` - fills the available width on all screen sizes
    * `--panel` - adds a background fill
- Can extend it in SASS via the `%container` placeholder for building custom components
- Containers aren't designed to be nested
- Vertical spacing classes can be added to containers

{% capture containers %}
<div class="container">
    Some content e.g. a grid goes here
</div>
<div class="container container--narrow">
    Some content in a narrower container
</div>
{% endcapture %}
{% include example.html lang='html' body=containers %}


## Basic grid

- The grid is based on a fluid, responsive 12 column grid
- Use the `data-g` attribute to specify column widths
- E.g. `data-g="6"` 6 of 12 columns
- Alternatively use more 'human' names like `data-g="one-half"` or `data-g="two-fifths"`

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

- Grids are mobile first
- Use `xs:`, `sm:`, `md:`, `lg:` and `xl:` for different screen size

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


## Other grid features

Use BEM modifiers for grids features:

### Reversed

The `.grid--rev` modifier renders the grid it in the opposite order to the source order

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

Remove the gutter between grid items with the `.grid--gutterless` modifier

{% capture gutterlesss %}
<div class="grid grid--gutterless">
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

Use larger gutters between grid items with the `.grid--loose` modifier

{% capture compact %}
<div class="grid grid--loose">
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

There are mixins and placeholders available for creating more 'semantic' named classes.
This avoids using the `grid` and `[data-g]` selectors directly in the html and can be useful for creating custom components or layouts. For example, you could create a classes of `.sidebar` and `.main` and the widths/layouts are taken care of in CSS. Alternatively, use [media queries](#media-queries) for custom layouts.

{% capture semantic %}
.test {
    @include grid-item($breakpoints: ( md: ( width: 50%, push: 25% ), lg: 20% ));
}
{% endcapture %}
{% include source.html lang='scss' body=semantic %}

<a href="{{ site.baseurl }}{% link technical/sass/documentation/grid.md %}#mixin-grid-item" class="btn">Grid item docs</a>

## Media queries

An alternative to [semantic classes](#semantic), media queries can be used to build custom responsive layouts. They can either be used with the grid mixins or on their own to build completely bespoke layouts. We use SASS MQ to create our breakpoints:

<a href="https://github.com/sass-mq/sass-mq" class="btn" rel="noopener external" target="_blank">SASS MQ</a>

{% capture mixins %}
.test-parent {
    @include grid();
}
.test {
    @include grid-item();

    @include mq($from: md) {
        width: percentage(1 / 3);
    }

    @include mq($from: lg) {
        width: 25%;
    }
}
{% endcapture %}
{% include source.html lang='scss' body=mixins title='Mixins example' %}

Please note: there are also [responsive utilities]({{ site.baseurl }}{% link foundations/visibility.md %}) for showing and hiding elements across breakpoints.
