---
layout: sidebar
title: Maintain ratio
---

# Maintain ratio

- Used for enforcing an aspect ratio for iframes, videos etc
- Use modifiers for different ratios

<a class="btn" href="{{ site.baseurl }}{% link technical/sass/documentation/components.md %}#css-.maintain-ratio">SASS docs for maintain ratio</a>

## Basic usage - 16x9

{% capture basics %}
<div class="maintain-ratio maintain-ratio--16-9">
    <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" allowfullscreen></iframe>
</div>
{% endcapture %}
{% include example.html lang='html' body=basics %}

## Custom - with BEM element

{% capture custom %}
<div class="maintain-ratio maintain-ratio--4-3">
    <img class="maintain-ratio__item" src="http://placehold.it/800x600" alt="An example of an image with a ratio of 4:3" />
</div>
{% endcapture %}
{% include example.html lang='html' body=custom %}