---
layout: sidebar
title: Components
inpagenav: false
---

# Components

Once you've mastered the foundations, these components are further patterns for building user interfaces.
{:.lead}

<div class='grid'>

    {% capture alphabetalive %}{% link components/alpha-beta-live.md %}{% endcapture %}
    {% include menu-item.html title='Alpha/beta/live' href=alphabetalive description='Phase tags and banners to denote alpha and beta services' %}

    {% capture breadcrumbs %}{% link components/breadcrumbs.md %}{% endcapture %}
    {% include menu-item.html title='Breadcrumbs' href=breadcrumbs description='Secondary navigation scheme that reveals the users location' %}

    {% capture maintainratio %}{% link components/maintain-ratio.md %}{% endcapture %}
    {% include menu-item.html title='Maintain ratio' href=maintainratio description='Embed media and maintain an aspect ratio across devices' %}

    {% capture tabs %}{% link components/tabs.md %}{% endcapture %}
    {% include menu-item.html title='Tabs' href=tabs description='Content is separated into different panes, with only one pane viewable at a time.' %}

</div>