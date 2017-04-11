---
layout: sidebar
title: Technical
inpagenav: false
---

# Technical

Technical documentation and code style guides for creating NICE digital services
{:.lead}

<div class="grid">
    {% capture installation %}{% link technical/installation.md %}{% endcapture %}
    {% include menu-item.html title='Installation' href=installation description='Install the product to get started' %}

    {% capture sass %}{% link technical/sass/index.md %}{% endcapture %}
    {% include menu-item.html title='SASS' href=sass description='SASS documentation (mixins, functions, variables, selectors) and code style guide' %}

    {% capture js %}{% link technical/javascript/index.md %}{% endcapture %}
    {% include menu-item.html title='JavaScript' href=js description='JS documentation and code style guide' %}
</div>