---
layout: sidebar
title: Alpha & Beta
description: Alpha and beta beta banners clearly identify non-live services
---

## Why?
If your service is on the NICE subdomain and is within alpha or beta you must have a phase banner which reflects this.

## Usage
Your banner must sit below the TopHat, and above the page breadcrumb. You should use a ‘feedback’ link to collect feedback about your service. Ensure the user can return to their previous point in the page, having opened a dedicated page or form.

## Variants

### Alpha

{% capture alpha %}
<p class="phase-banner">
    <span class="phase-banner__tag">
        <span class="tag tag--impact tag--alpha">Alpha</span>
    </span>
    <span class="phase-banner__label">
       This is a new service – your <a href="#">feedback</a> will help us to improve it.
    </span>
</p>
{% endcapture %}
{% include example.html lang='html' body=alpha %}

### Beta

{% capture beta %}
<p class="phase-banner">
    <span class="phase-banner__tag">
        <span class="tag tag--impact tag--beta">Alpha</span>
    </span>
    <span class="phase-banner__label">
       This is a new service – your <a href="#">feedback</a> will help us to improve it.
    </span>
</p>
{% endcapture %}
{% include example.html lang='html' body=beta %}

