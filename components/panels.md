---
layout: sidebar
title: Panels
---

## What problem does this solve?

## Variations

### Default (light) panel

{% capture light %}
<div class="panel">
    <p>This is some panel content</p>
</div>
{% endcapture %}
{% include example.html lang='html' body=light %}

### Inverse (dark) panel

{% capture dark %}
<div class="panel panel--inverse">
    <p>This is some panel content</p>
    <p>
        <a href="#" class="btn btn--light">Light button</a>
    </p>
</div>
{% endcapture %}
{% include example.html lang='html' body=dark %}