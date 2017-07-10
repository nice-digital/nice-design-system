---
layout: sidebar
title: Spacing
description: Spacing between elements and vertical rhythm
---

## Introduction

Keep a consistent vertical and horizontal rhythm between elements on a page.
{:.lead}

Spacing values should be applied both within a component and between components/sections of a page. Built in components come with spacing built in but can be overridden with classes where appropriate.

## Spacing scale

Our spacing is set out on a non-linear scale, to avoid ambiguity between adjacent values: it should be obvious which value to use in each use-case.

- spacing is based off a `4px` baseline
- default spacing is provided within typography, grid and all components
- use [css classes](#css-classes) or [SASS variables](#sass-variables) in code rather than pixel values directly.

<ul class="list list--unstyled">
    <li><div class="spacing-block spacing-block--xx-small"></div> 2px</li>
    <li><div class="spacing-block spacing-block--x-small"></div> 4px</li>
    <li><div class="spacing-block spacing-block--small"></div> 8px</li>
    <li><div class="spacing-block spacing-block--medium"></div> 16px</li>
    <li><div class="spacing-block spacing-block--large"></div> 32px</li>
    <li><div class="spacing-block spacing-block--x-large"></div> 48px</li>
    <li><div class="spacing-block spacing-block--xx-large"></div> 64px</li>
</ul>

## CSS classes

Typography, components, containers and grids have built in spacing, but sometimes it is necassary to override this default spacing. This can be done via CSS helper classes for overriding margin and/or padding.

These classes are named using the format `{property}{sides}--{size}` or `{property}{sides}--{size}-{breakpoint}`.

Where `{property}` is one of:

- `m` - for classes that set `margin`
- `p` - for classes that set `padding`
- 
Where `{sides}` is one of:

- `t` - for classes that set margin-top or padding-top
- `b` - for classes that set margin-bottom or padding-bottom
- `l` - for classes that set margin-left or padding-left
- `r` - for classes that set margin-right or padding-right
- `h` - for classes that set both *-left and *-right
- `v` - for classes that set both *-top and *-bottom

Where `{size}` is on a linear scale from *a* (small) via *d* (default/medium) to *g* (large):

- `0` - for classes that eliminate the margin or padding by setting it to 0
- `a` - for extra extra small margin/padding
- `b` - for extra small margin/padding
- `c` - for small margin/padding
- `d` - for default (medium) margin/padding
- `e` - for large margin/padding
- `f` - for extra large margin/padding
- `g` - for extra extra large margin/padding
- 
And `{breakpoint}` is optional and one of:

- `xs`
- `sm`
- `md`
- `lg`
- `xl`

### Class examples

For example: `mt--d`, `pv-e` etc

{% capture classes %}
<p class="mv--0">
    <code>.mv--0</code> removes margins from both top and bottom
</p>
<p class="mt--d mb--b">
    <code>.mt--d</code> gives a default top margin and <code>.mb--b</code> a small bottom margin
</p>
<p class="pt--f pb--c">
    <code>.pt--f</code> gives a large top padding and <code>.pb--c</code> a small bottom padding 
</p>
{% endcapture %}
{% include example.html body=classes title="Spacing classes example" %}

## SASS variables

As well as CSS classes, we provide SASS variables for use in custom components:

- the variables are unitless
- use these variables rather than pixel values directly
- use the variables for things like widths, heights, margins, paddings and borders
- wrap in `em` or `rem` functions to convert to relative units.

The variables are:

<ul class="list list--unstyled">
{% assign spacingVars = site.data.sass.experience.items | where_exp: "item","item.context.name contains 'spacing-'" %}
{% for item in spacingVars %}
<li><code>${{ item.context.name }}</code> ({{ item.resolvedValue }}px)</li>
{% endfor %}
</ul>

### Usage

These SASS variables should be used in custom components to ensure consistent spacing:

{% capture usage %}
.component {
    border-top: em($spacing-xx-small) solid $colour-border;
    margin: rem($spacing-medium 0 $spacing-large);
    padding: rem($spacing-medium);
}
{% endcapture %}
{% include source.html lang='scss' body=usage title='Spacing example' %}