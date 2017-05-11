---
layout: sidebar
title: Spacing
---

## Introduction

Keep a consistent vertical and horizontal rhythm between elements on a page.
{:.lead}

Spacing values should be applied both within a component and between components/sections of a page. Built in components come with spacing built in but can be overridden with classes where appropriate.

## Spacing scale

Our spacing is set out on a non-linear scale, to avoid ambiguity between adjacent values: it should be obvious which value to use in each use-case. These values are defined as SASS variables and should cover the majority of scenarios:

{% assign spacingVars = site.data.sass.experience.items | where_exp: "item","item.context.name contains 'spacing-'" %}

{% for item in spacingVars %}
- `${{ item.context.name }}` ({{ item.resolvedValue }}px)
{% endfor %}

**Note**: use the `rem` or `em` function in SASS to convert pixel values to rems/ems.

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

## Classes

In addition to SASS variables, we provide CSS classes for overriding margin/padding where appropriate.

These classes are named using the format `{property}{sides}-{size}`.

Where `{property}` is one of:

- `m` - for classes that set `margin`
- `p` - for classes that set `padding`
- 
Where `{sides}` is one of:

- `t` - for classes that set margin-top or padding-top
- `b` - for classes that set margin-bottom or padding-bottom
- `v` - for classes that set both *-top and *-bottom

Where `{size}` is on a linear scale from *a* (small) via *d* (default/medium) to *g* (large) so is one of:

- `0` - for classes that eliminate the margin or padding by setting it to 0
- `a` - for extra extra small margin/padding
- `b` - for extra small margin/padding
- `c` - for small margin/padding
- `d` - for default (medium) margin/padding
- `e` - for large margin/padding
- `f` - for extra large margin/padding
- `g` - for extra extra large margin/padding

For example: `mt`, `pv-e` etc

{% capture classes %}
<p class="mv-0">
    <code>.mv-0</code> removes margins from both top and bottom
</p>
<p class="mt mb-b">
    <code>.mt</code> gives a default top margin and <code>.mb-b</code> a small bottom margin
</p>
<p class="pt-f pb-c">
    <code>.pt-f</code> gives a large top padding and <code>.pb-c</code> a small bottom padding 
</p>
{% endcapture %}
{% include example.html body=classes title="Spacing classes example" %}