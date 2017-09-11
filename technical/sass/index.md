---
layout: sidebar
title: SASS & CSS
breadcrumb: SASS
description: SASS documentation (mixins, functions, variables, selectors) and code style guide
inpagenav: false
---

We use [SASS](http://sass-lang.com/){:target="_blank"} as our [CSS pre-processor](https://github.com/showcases/css-preprocessors){:target="_blank"} as it's mature, got a great feature set and [libsass](https://github.com/sass/libsass){:target="_blank"} is super quick.

<blockquote class="quote">
    <p>Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.</p>
    <footer>
        - <cite><a href="http://sass-lang.com/" target="_blank" rel="noopener external">sass-lang.com</a></cite>
    </footer>
</blockquote>

<div class="grid">

    {% assign installation = site.pages | where: "path", "technical/sass/installation.md" | first %}
    {% include menu-item.html page=installation %}

    {% assign codestandards = site.pages | where: "path", "technical/sass/code-standards.md" | first %}
    {% include menu-item.html page=codestandards %}

    {% assign docs = site.pages | where: "path", "technical/sass/documentation/index.md" | first %}
    {% include menu-item.html page=docs %}

    {% assign libs = site.pages | where: "path", "technical/sass/libraries.md" | first %}
    {% include menu-item.html page=libs %}

</div>
