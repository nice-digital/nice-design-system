---
layout: sidebar
title: Maintain ratio
description: Embed media and maintain an aspect ratio across devices
---

## Why?
Embedded media, for example YouTube, videos generally need to keep a specific aspect ratio across a responsive site.

## Usage
- Used for enforcing an aspect ratio for iframes, videos etc
- use modifiers for different ratios.

<a class="btn btn--secondary" href="{{ site.baseurl }}{% link technical/sass/documentation/components.md %}#css-.maintain-ratio">SASS docs for maintain ratio</a>

## Variants

### Basic usage - 16x9

{% capture basics %}
<div class="maintain-ratio maintain-ratio--16-9">
    <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" allowfullscreen></iframe>
</div>
{% endcapture %}
{% include example.html lang='html' body=basics %}

### 4x3

{% capture fourthree %}
<div class="maintain-ratio maintain-ratio--4-3">
    <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" allowfullscreen></iframe>
</div>
{% endcapture %}
{% include example.html lang='html' body=fourthree %}

### Custom - with BEM element

Use `.maintain-ratio__item` for custom content:

{% capture custom %}
<div class="maintain-ratio maintain-ratio--4-3">
    <img class="maintain-ratio__item" src="http://placehold.it/800x600" alt="An example of an image with a ratio of 4:3" />
</div>
{% endcapture %}
{% include example.html lang='html' body=custom %}