---
layout: sidebar
title: Links
---

Their primary usage is as a navigational element. They can also be used as a replacement for a button in space constrained situations (tables, forms, panels) or  when you need less visual prominence to perform an action.

## Basics
- links should follow the same sizing as containing copy
- use `rel="external"`, `rel="noopener"`, `rel="next"` and `rel="prev"` and [other link types](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types){:rel="external"} where applicable

## Wording

The wording of links is very important and should be contextual and meaningful. Link text should tell the user where they are going. DO NOT write ‘click here’ as a link! ‘Read more’ and other such phrases are also bad practice. Screen readers read out links as a list, so link text needs to be descriptive. Avoid making links too long.

- provides some information when read out of context
- explains what the link offers
- doesn't talk about mechanics
- is not a verb phrase.

## Text links

- links within body copy should be blue and underlined
- links without surrounding text should not have a full stop at the end.

{% capture textlinks %}
<p>
    <a href="#">A link with surrounding text</a>
</p>
<p>
    This is a <a href="#">body copy link</a> diam sem, interdum non scelerisque id, condimentum in arcu. Vivamus faucibus mollis mi ut ultrices. Quisque sed ultrices justo.
</p>
{% endcapture %}
{% include example.html body=textlinks %}

## Inverse text links

- for use on a dark background
- use `.link--inverse` on an individual link
- use `.inverse-links` on a containing element
- use `%inverse-links` in SASS on custom dark background components.

{% capture inverselinks %}
<div class="panel panel--inverse">
    <h3><a href="#">This is a heading 3</a></h3>
    <p>
        This is <a href="#">a link</a> in some body copy.
    </p>
</div>

<div class="panel inverse-links" style="background: #393939;">
    <p>
        <a href="#">links on a</a>
        <a href="#">dark background</a>
    </p>
</div>

<div class="panel" style="background: #393939;">
    <p>
        <a class="link--inverse" href="#">individual link on dark background</a>
    </p>
</div>
{% endcapture %}
{% include example.html body=inverselinks %}


## Heading links

The default styling is blue and underlined, to indicate that it’s a clickable link, but 
depending on the context in that the heading link appears, some of these rules could be relaxed. Check that your users understand this.

{% capture headinglinks %}
<h1><a href="#">This is a heading 1</a></h1>
<h2><a href="#">This is a heading 2</a></h2>
<h3><a href="#">This is a heading 3</a></h3>
<h4><a href="#">This is a heading 4</a></h4>
<h5><a href="#">This is a heading 5</a></h5>
<h6><a href="#">This is a heading 6</a></h6>
{% endcapture %}
{% include example.html body=headinglinks %}

## Download links

- it’s good practice to tell the user if they are downloading a media file
- warn the user what the file type and the size is
- to display further information on the file, place next to the size and type.

CODE AREA
{% comment %}
{% capture downloadlinks %}
<p>
    <a href="#"><span class="icon icon--download" aria-hidden="true"></span> Costing report</a> PDF 281.92 kB
</p>
<p>
    <a href="#"><span class="icon icon--download" aria-hidden="true"></span> Costing report</a> PDF 281.92 kB | 16 April 2010
</p>
{% endcapture %}
{% include example.html body=downloadlinks %}
{% endcomment %}

## List links
When you need to group related links.

{% capture linklist %}
<ul class="list list--unstyled">
    <li><a target="_blank" rel="external" href="https://www.nice.org.uk/guidance/published?type=csg">Cancer service guidelines</a></li>
    <li><a target="_blank" rel="external" href="https://www.nice.org.uk/guidance/published?type=cg">Clinical guidelines</a></li>
    <li><a target="_blank" rel="external" href="https://www.nice.org.uk/guidance/published?type=ph">Public health guidelines</a></li>
    <li><a target="_blank" rel="external" href="https://www.nice.org.uk/guidance/published?type=sc">Social care guidelines</a></li>
    <li><a target="_blank" rel="external" href="https://www.nice.org.uk/guidance/published?type=sg">Safe staffing guidelines</a></li>
</ul>
{% endcapture %}
{% include example.html body=linklist %}


