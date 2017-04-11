---
layout: sidebar
title: SASS documentation
breadcrumb: Docs
inpagenav: false
---

# SASS documentation

<div class="grid">

    {% capture colours %}{% link technical/sass/documentation/colours.md %}{% endcapture %}
    {% include menu-item.html title='Colours' href=colours description='Colour variables to use the NICE corporate palette' %}

    {% capture components %}{% link technical/sass/documentation/components.md %}{% endcapture %}
    {% include menu-item.html title='Components' href=components description='Components' %}

    {% capture grid %}{% link technical/sass/documentation/grid.md %}{% endcapture %}
    {% include menu-item.html title='Grid' href=grid description='Grid and layout functions and mixins for building responsive layouts' %}

    {% capture helpers %}{% link technical/sass/documentation/helpers.md %}{% endcapture %}
    {% include menu-item.html title='Helpers' href=helpers description='Helper functions and mixins' %}

    {% capture icons %}{% link technical/sass/documentation/icons.md %}{% endcapture %}
    {% include menu-item.html title='Icons' href=icons description='Iconography' %}

    {% capture spacing %}{% link technical/sass/documentation/spacing.md %}{% endcapture %}
    {% include menu-item.html title='Spacing' href=spacing description='Spacing' %}

    {% capture typography %}{% link technical/sass/documentation/typography.md %}{% endcapture %}
    {% include menu-item.html title='Typography' href=typography description='Functions, mixins and variables for consistent typography' %}

</div>
