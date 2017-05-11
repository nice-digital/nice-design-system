---
layout: sidebar
title: Alpha & Beta
---

 <!--- 
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

--->

## Phase banner

If your service is on the NICE subdomain and is within alpha or beta you must have a phase banner which reflects this.
Your banner must sit below the global NICE header, and above the page breadcrumb

You should use a ‘feedback’ link to collect on-page feedback about your service. Ensure the user can return to their previous point in the page, having opened a dedicated page or form.

### Alpha

{% capture alpha %}
<p class="phase-banner">
    <span class="phase-banner__tag">
        <strong class="phase-tag phase-tag--alpha">ALPHA</strong>
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
        <strong class="phase-tag phase-tag--beta">BETA</strong>
    </span>
    <span class="phase-banner__label">
       This is a new service – your <a href="#">feedback</a> will help us to improve it.
    </span>
</p>
{% endcapture %}
{% include example.html lang='html' body=beta %}

<!--- ### Live 

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
{% include example.html lang='html' body=live %}  ---> 
