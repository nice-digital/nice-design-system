---
layout: sidebar
title: SASS
inpagenav: false
---

# SASS (&amp; CSS)

We use [SASS](http://sass-lang.com/){:target="_blank"} as our [CSS pre-processor](https://github.com/showcases/css-preprocessors){:target="_blank"} as it's mature, got a great feature set and [libsass](https://github.com/sass/libsass){:target="_blank"} is super quick.

<blockquote class="quote">
    <p>Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.</p>
    <footer>
        - <cite><a href="http://sass-lang.com/" target="_blank" rel="external">sass-lang.com</a></cite>
    </footer>
</blockquote>

<div class="grid">

    {% capture codestandards %}{% link technical/sass/code-standards.md %}{% endcapture %}
    {% include menu-item.html title='Code standards' href=codestandards description='SASS code standards, naming conventions etc' %}

    {% capture docs %}{% link technical/sass/documentation/index.md %}{% endcapture %}
    {% include menu-item.html title='Documentation' href=docs description='Auto-generated SASS documentation from our SASSDoc comments' %}

    {% capture libraries %}{% link technical/sass/libraries.md %}{% endcapture %}
    {% include menu-item.html title='Libraries' href=libraries description='The third party libraries we use within our SASS' %}

</div>
