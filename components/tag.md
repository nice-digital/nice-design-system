---
layout: sidebar
title: Tag
description: Tag component used for labelling items in a list
---

Use tags to mark or highlight an item in a list.

## Standard

{% capture standard %}
<p>
    This is a standard tag
    <span class="tag">Tag</span>
</p>
{% endcapture %}
{% include example.html lang='html' body=standard %}

## Phase

See also <a href="{{ site.baseurl }}{% link components/alpha-beta-live.md %}">phase banners</a>.

{% capture phase %}
<p>
    Use tags to denote service phase:
    <span class="tag tag--alpha">Alpha</span>
</p>
<p>
    Or anywhere else, e.g. a list
</p>
<ul>
    <li>
        An alpha service <span class="tag tag--alpha">Alpha</span>
    </li>
    <li>
        A beta service <span class="tag tag--beta">Beta</span>
    </li>
    <li>
        A live service <span class="tag tag--live">Live</span>
    </li>
</ul>
{% endcapture %}
{% include example.html lang='html' body=phase %}

## Guidance

Use tags to denote the status of guidance in lists etc. Usually used within a <a href="{{ site.baseurl }}{% link components/card.md %}">card component</a>.

{% capture guidance %}
<ul>
    <li>
        New guidance <span class="tag tag--new">New</span>
    </li>
    <li>
        Updated guidance <span class="tag tag--updated">Updated</span>
    </li>
    <li>
        Guidance in consultation <span class="tag tag--consultation">In consultation</span>
    </li>
</ul>
{% endcapture %}
{% include example.html lang='html' body=guidance %}

## Impact

Use impact tags sparingly, e.g. within <a href="{{ site.baseurl }}{% link components/alpha-beta-live.md %}">phase banners</a>.

{% capture impact %}
<p>
    This is an impact tag
    <span class="tag tag--alpha tag--impact">Alpha</span>
</p>
{% endcapture %}
{% include example.html lang='html' body=impact %}

## Flush

Tags have a small margin by default. Use the `.tag--flush` modifier to remove the margin:

{% capture flush %}
<p>
    This is an flush tag
    <span class="tag tag--flush">Flush</span>
</p>
{% endcapture %}
{% include example.html lang='html' body=flush %}