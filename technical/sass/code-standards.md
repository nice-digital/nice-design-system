---
layout: sidebar
title: SASS code standards
---

# SASS code standards

We follow the coding standards rules from the brilliant [Code Guide by @mdo](http://codeguide.co/#css){:target="_blank"} (which in turn was heavily inspired by [Idiomatic CSS](https://github.com/necolas/idiomatic-css){:target="_blank"} and the [GitHub Styleguide](http://github.com/styleguide){:target="_blank"}) with a few exceptions as described below.
{:.lead}

We use [SASS Lint](https://github.com/sasstools/sass-lint){:target="_blank"} for SASS code linting and enforcement of syntax consistency. See our *.sass-lint.yml* for a detailed view.


## Syntax & formatting

The following are exceptions or additions to @mdo's Code Style:

### Declaration order

Use this ordering of property declarations:

1. Extends<br/><small>(enforced with `extends-before-declarations` & `extends-before-mixins` rules)</small>
2. Mixins<br/><small>(enforced with `extends-before-mixins` & `mixins-before-declarations` rule)</small>
3. Style declarations <small> (in alphabetical order - enforced by `property-sort-order` rule)</small>
4. Media queries

For example:

{% capture declarationorder %}
.selector {
    @extend %something;
    @include font(1);
    background: red;
    color: blue;
    margin: 0 auto;

    @include mq($from: md) {
        color: orange;
    }
}
{% endcapture %}
{% include source.html lang='scss' body=declarationorder title='Declaration order' %}

### Prefixed properties

We encourage writing CSS as close to the W3C spec as possible which means not including vendor prefixes in our source. If these are needed for legacy browser support then we encourage use of tools like [PostCSS Autoprefixer](https://github.com/postcss/autoprefixer){:target="_blank"}.


## BEM and naming

<blockquote class="quote">
    <p>There are 2 hard problems in computer science: cache invalidation, naming things, and off-by-1 errors.</p>
    <footer>
        - <cite>Phil Karlton &amp; <a href="https://twitter.com/secretGeek/status/7269997868" target="_blank" rel="external">Leon Bambrick</a></cite>
    </footer>
</blockquote>

We follow the [class naming rules](http://codeguide.co/#css-classes){:target="_blank"} (and selector rules) from @mdo. However, it's about CSS/SASS in general and doesn't include anything specifc about [BEM](http://getbem.com/introduction/){:target="_blank"}.

We encourage use of BEM because (from [Airbnb's CSS / Sass Styleguide](https://github.com/airbnb/css#oocss-and-bem){:target="_blank"}):

- It helps create clear, strict relationships between CSS and HTML
- It helps us create reusable, composable components
- It allows for less nesting and lower specificity
- It helps in building scalable stylesheets

### Variable naming

Variable names should follow the [general-to-specific approach](http://webdesign.tutsplus.com/tutorials/htmlcss-tutorials/quick-tip-name-your-sass-variables-modularly/){:target="_blank"} as suggested on [SASS's Code Style Guide](http://sass-lang.com/styleguide/code){:target="_blank"}.

{% capture variablenaming %}
$color-link;
$color-link-dark;
$color-link-light;
{% endcapture %}
{% include source.html lang='scss' body=variablenaming title='Variable naming example' %}


## Comments

The other difference from @mdo's Code Guide is comment style. We use [SassDoc](http://sassdoc.com/){:target="_blank"} to auto-generate documentation from our comments, so we use [SassDoc annotations](http://sassdoc.com/annotations/){:target="_blank"} and [file-level annotations](http://sassdoc.com/file-level-annotations/){:target="_blank"}:

{% capture comments %}
/// This is the description of a mixin
/// @param {Number} $some-vale A value that gets passed in
@mixin($some-value) {
    // Do something
}
{% endcapture %}
{% include source.html lang='scss' body=comments title='SassDoc annotation example' %}

<a href="{{ site.baseurl }}{% link technical/sass/documentation/index.md %}" class="btn btn--primary">SASS Documentation</a>
