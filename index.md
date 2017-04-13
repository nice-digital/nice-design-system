---
layout: default
title: Create consistent digital experiences across NICE
---

# NICE Experience

Your source for quickly creating consistent on-brand NICE digital services
{: .lead}

[Get started]({{ site.baseurl }}{% link technical/installation.md %}){: .btn .btn--primary} [View on Github](https://github.com/nhsevidence/NICE-Experience){:target="_blank" .btn .btn--secondary}



## [Foundations]({{ site.baseurl }}{% link foundations/index.md %})

The foundations and patterns that are to be used for faster product development.

<div class="grid">
    {% capture buttons %}{% link foundations/buttons.md %}{% endcapture %}
    {% include menu-item.html title='Buttons' href=buttons description='Button of different types, colours and sizes and combination of buttons' %}

    {% capture colour %}{% link foundations/colour.md %}{% endcapture %}
    {% include menu-item.html title='Colour' href=colour description='Colour palettes and usage, contrast guidelines and SASS variables' %}

    {% capture helpers %}{% link foundations/helpers.md %}{% endcapture %}
    {% include menu-item.html title='Helpers' href=helpers description='Useful helper classes for common tasks' %}

    {% capture iconography %}{% link foundations/iconography.md %}{% endcapture %}
    {% include menu-item.html title='Iconography' href=iconography description='Icons, their usage and how to create new icons' %}

    {% capture layout %}{% link foundations/layout.md %}{% endcapture %}
    {% include menu-item.html title='Layout' href=layout description='Containers, grid, layouts and responsive behaviours' %}

    {% capture links %}{% link foundations/links.md %}{% endcapture %}
    {% include menu-item.html title='Links' href=links description='Links and hover/active/visited/focus states' %}

    {% capture typography %}{% link foundations/typography.md %}{% endcapture %}
    {% include menu-item.html title='Typography' href=typography description='Headings, paragraphs, featured text, quotations, lists, links' %}

    {% capture visibility %}{% link foundations/visibility.md %}{% endcapture %}
    {% include menu-item.html title='Visibility' href=visibility description='Showing and hiding elements across breakpoints, for print, device orientations and screen readers' %}
</div>


## [Components]({{ site.baseurl }}{% link components/index.md %})

Once you've mastered the foundations, these components are further patterns for building user interfaces.

<div class="grid">
    {% capture alphabetalive %}{% link components/alpha-beta-live.md %}{% endcapture %}
    {% include menu-item.html title='Alpha/beta/live' href=alphabetalive description='Phase tags and banners to denote alpha and beta services' %}

    {% capture breadcrumbs %}{% link components/breadcrumbs.md %}{% endcapture %}
    {% include menu-item.html title='Breadcrumbs' href=breadcrumbs description='Secondary navigation scheme that reveals the users location' %}

    {% capture global %}{% link components/global.md %}{% endcapture %}
    {% include menu-item.html title='Global' href=global description='Global navigational element' %}

    {% capture maintainratio %}{% link components/maintain-ratio.md %}{% endcapture %}
    {% include menu-item.html title='Maintain ratio' href=maintainratio description='Embed media and maintain an aspect ratio across devices' %}

    {% capture panels %}{% link components/panels.md %}{% endcapture %}
    {% include menu-item.html title='Panels' href=panels description='Panels to highlight content' %}

    {% capture side-nav %}{% link components/side-nav.md %}{% endcapture %}
    {% include menu-item.html title='Side nav' href=side-nav description=' Navigation to support deeper content or guidance chapters.' %}

    {% capture tabs %}{% link components/tabs.md %}{% endcapture %}
    {% include menu-item.html title='Tabs' href=tabs description='Content is separated into different panes, with only one pane viewable at a time.' %}
</div>


## [Technical]({{ site.baseurl }}{% link technical/index.md %})

Technical documentation and code style guides for creating NICE digital services

<div class="grid">
    {% capture installation %}{% link technical/installation.md %}{% endcapture %}
    {% include menu-item.html title='Installation' href=installation description='Install the product to get started' %}

    {% capture sass %}{% link technical/sass/index.md %}{% endcapture %}
    {% include menu-item.html title='SASS' href=sass description='SASS documentation (mixins, functions, variables, selectors) and code style guide' %}

    {% capture js %}{% link technical/javascript/index.md %}{% endcapture %}
    {% include menu-item.html title='JavaScript' href=js description='JS documentation and code style guide' %}
</div>



## [About]({{ site.baseurl }}{% link about/index.md %})

Find out about the NICE Experience

<div class="grid">
    {% capture aims %}{% link about/index.md %}{% endcapture %}
    {% include menu-item.html title='Aims and principles' href=aims description='The principles we follow when building the product' %}

    {% capture roadmap %}{% link about/roadmap.md %}{% endcapture %}
    {% include menu-item.html title='Roadmap' href=roadmap description='Where we&#39;re taking the product' %}
</div>
