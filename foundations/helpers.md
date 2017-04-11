---
layout: sidebar
title: Helpers
---

# Helpers

## Floats

Quickly float elements with `.left` or `.right`. Clear floats on a parent element with the `.clearfix` class.

{% capture floats %}
<div class="clearfix">
    <div class="left">Floated left</div>
    <div class="right">Floated right</div>
</div>
{% endcapture %}
{% include example.html lang='html' body=floats %}

There is also a `clearfix()` mixin for use with custom components:

{% capture clearfix %}
.example {
    @include clearfix;
}
{% endcapture %}
{% include source.html lang='scss' body=clearfix title='Clearfix example' %}

## Center block

Set an element to `display: block` and center via `margin: auto`. Available as a mixin (`@include center-block;`) and class (`.center-block`).

{% capture centerblock %}
<div class="center-block text-center" style="background: #eee; width: 200px;">
    Center block
</div>
{% endcapture %}
{% include example.html lang='html' body=centerblock %}

## Text alignment

Change the text alignment of an element by adding `.text-left`, `.text-right`, `.text-center` or `.text-justify` to an element.

{% capture alignment %}
<p class="text-left">This is some left aligned text</p>
<p class="text-right">This is some right aligned text</p>
<p class="text-center">This is some center aligned text</p>
<p class="text-justify">This is some justified text</p>
{% endcapture %}
{% include example.html lang='html' body=alignment %}

## Text wrapping

Use `.text-nowrap` to keep text on one line and stop it from wrapping, and use `.text-truncate` to add an an ellipsis to text that overflows its container.

{% capture wrapping %}
<div style="background: #eee; width: 80px;">
    <p class="text-nowrap">This is some text that doesn't wrap</p>
    <p class="text-truncate">This is some truncated text</p>
</div>
{% endcapture %}
{% include example.html lang='html' body=wrapping %}

## Text transformation

Transform the casing of text by adding `.text-lowercase`, `.text-uppercase`, or `.text-capitalize` to an element.

{% capture transformation %}
<p class="text-lowercase">Lowercased text.</p>
<p class="text-uppercase">Uppercased text.</p>
<p class="text-capitalize">Capitalized text.</p>
{% endcapture %}
{% include example.html lang='html' body=transformation %}