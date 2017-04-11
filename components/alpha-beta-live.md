---
layout: sidebar
title: Alpha, beta & live
---

# Alpha, beta & live

## Phase tag

{% capture phasetag %}
<p>
    Phase tags can be used on their own like this:
    <strong class="phase-tag phase-tag--alpha">ALPHA</strong>
</p>
<p>
    Or anywhere else, e.g. a list
</p>
<ul>
    <li>
        An alpha service <strong class="phase-tag phase-tag--alpha">ALPHA</strong>
    </li>
    <li>
        A beta service <strong class="phase-tag phase-tag--beta">BETA</strong>
    </li>
    <li>
        A live service <strong class="phase-tag phase-tag--live">LIVE</strong>
    </li>
</ul>
{% endcapture %}
{% include example.html lang='html' body=phasetag %}

## Phase banner

- Phase banners combine phase tags into a layout
- Phase banners should be prominent at the top a service

### Alpha

{% capture alpha %}
<p class="phase-banner">
    <span class="phase-banner__tag">
        <strong class="phase-tag phase-tag--alpha">ALPHA</strong>
    </span>
    <span class="phase-banner__label">
        NICE Experience is in development. This means there it isn't feature complete and there will be issues. Find any? Please, let us know!
    </span>
</p>
{% endcapture %}
{% include example.html lang='html' body=alpha %}

### Beta

{% capture beta %}
<p class="phase-banner">
    <span class="phase-banner__tag">
        <strong class="phase-tag phase-tag--beta">BETA</strong>
    </span>
    <span class="phase-banner__label">
        HDAS2 is in Beta
    </span>
</p>
{% endcapture %}
{% include example.html lang='html' body=beta %}

### Live

{% capture live %}
<p class="phase-banner">
    <span class="phase-banner__tag">
        <strong class="phase-tag phase-tag--live">LIVE</strong>
    </span>
    <span class="phase-banner__label">
        Pathways is a Live Service
    </span>
</p>
{% endcapture %}
{% include example.html lang='html' body=live %}
