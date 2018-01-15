---
layout: sidebar
title: Panels
description: Blocks to highlight or separate content
---

## What problem does this solve?

## Variations

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
    <p>This is a dark panel</p>
    <p>
        <a href="#" class="btn btn--inverse">Inverse button</a>
    </p>
</div>
{% endcapture %}
{% include example.html lang='html' body=dark %}