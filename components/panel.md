---
layout: sidebar
title: Panel
description: Blocks to highlight or separate content
---

## Why?
To group related content into a box or to visually break up a page layout.

## Usage
Use panels in side panel as an aside from the main content, or to group related content.

Panels have a default padding and remove the margin top/bottom from the first/last children to maintain consistent padding.

Panels have a margin above and below by default to separate from the surrounding content. Use with <a href="{{ site.baseurl }}{% link foundations/spacing.md %}#css-classes">spacing CSS classes</a> e.g. `mb--e` or `mt--0` to adjust the margins if necessary.

## Variants

### Default (light) panel

{% capture default %}
<div class="panel">
    <p>This is a default panel</p>
</div>
{% endcapture %}
{% include example.html lang='html' body=default %}

### Inverse (dark) panel

{% capture dark %}
<div class="panel panel--inverse">
    <p>This is a dark panel. <a href="">Links are inverted automatically</a>.</p>
    <p>
        <a href="#" class="btn btn--inverse">Inverse button</a>
    </p>
</div>
{% endcapture %}
{% include example.html lang='html' body=dark %}