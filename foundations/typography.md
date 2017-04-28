---
layout: sidebar
title: Typography
---

## Basics

- typography follows the rules from our [brand guidelines](https://www.nice.org.uk/brand/typography){:target="_blank"} with some web specific adaptations (for responsive etc)
- we use Lato, which can be referenced or [downloaded from Google](https://fonts.google.com/specimen/Lato){:target="_blank"}
- follow [NICE's style guide](https://www.nice.org.uk/corporate/ecd1/){:target="_blank"} for writing.

### Usage

- there are set of <a href="{{ site.baseurl }}{% link technical/sass/documentation/typography.md %}">typographic SASS constructs</a> to allow consistent use of responsive typography
- favour using mixins e.g. `@include font-size(1)` rather than specifying font sizes directly
- we use REMs and automatically add fallbacks to px for older browsers via [PostCSS](https://github.com/nhsevidence/NICE-Experience/blob/master/.grunt-tasks/postcss.js){:target="_blank"}.


## Headings

- use sentence case for headings
- use headings consistently to create a clear hierarchy
- don't skip headings; use classes like `.h1, .h2` etc or mixins like `@include h1` etc if you need a visual difference in heading
- do not put a full stop at the end of the heading.

{% capture headings %}
<h1>This is a heading 1</h1>
<h2>This is a heading 2</h2>
<h3>This is a heading 3</h3>
<h4>This is a heading 4</h4>
<h5>This is a heading 5</h5>
<h6>This is a heading 6</h6>
{% endcapture %}
{% include example.html lang='html' body=headings %}


## Body copy

Avoid using long lines of text, as it makes it harder for the user to read. Aim for between 45 to 75 characters per line, as it is regarded as the optimal range for a single-column page. Reference: [The Elements of Typographic Style Applied to the web](http://webtypography.net/intro/){:target="_blank"}

- only use smaller font sizes if there’s a user need (16px, 14px)
- follow the NICE colour palette for text, the only coloured text should be links
- use `class="lead"` for leading, important, introductory paragraphs
- use only 1 lead per page
- body copy is **0** on our modular scale
- in SASS, body copy is `@include font-size(0)`.

{% capture bodycopy %}
<p class="lead">
    Curabitur dapibus risus at sem fermentum rhoncus sit amet vitae lectus. Morbi molestie, tortor et ultrices eleifend, nisi velit suscipit sem, et pulvinar nunc sapien sit amet risus.
</p>
<p>
    Donec tincidunt pretium mi, sit amet mattis leo auctor quis. In hac habitasse platea dictumst. Maecenas condimentum fringilla arcu eu convallis. Maecenas varius, orci ut fringilla varius, nibh felis sodales nunc, id ornare urna ex et urna.
</p>
{% endcapture %}
{% include example.html lang='html' body=bodycopy %}


## Inline text

### Bold

To emphasize a snippet of text with a heavier font-weight use the `<strong>` tag.

{% capture strong %}
<strong>rendered as bold text</strong>
{% endcapture %}
{% include example.html lang='html' body=strong %}

### Italics

To emphasize a snippet of text with italics `<em>` tag. 

{% capture italics %}
<em>rendered as italicized text</em>
{% endcapture %}
{% include example.html lang='html' body=italics %}


### Strikethrough text

For indicating blocks of text that are no longer relevant use the `<s>` tag.

{% capture strikethrough %}
<s>This line of text is meant to be treated as no longer accurate.</s>
{% endcapture %}
{% include example.html lang='html' body=strikethrough %}


### Small text

For de-emphasizing inline or blocks of text, use the `<small>` to set text at 85% the size of the parent. Alternatively, use `.small` instead.

{% capture small %}
<p>This is some text <small>with some</small> <span class="small">smaller text</span></p>
{% endcapture %}
{% include example.html lang='html' body=small %}


### Alternate elements

Feel free to use `<b>` and `<i>` in HTML5. `<b>` is meant to highlight words or phrases without conveying additional importance while `<i>` is mostly for voice, technical terms, etc.


## Quotations

- use when you want to emphasize excerpts of text
- use a citation where possible.

### With citation

{% capture blockquote %}
<blockquote class="quote">
    <p>We do the right work in the right way at NICE. We mix content, dev, design and research at the start to solve user problems.  We produce things quickly, get data and refine. </p>
    <footer>
        <cite><strong>Dafydd - Content Team</strong></cite>
    </footer>
</blockquote>
{% endcapture %}
{% include example.html body=blockquote %}


## Lists

- follow the [bullet points guide lines](https://www.nice.org.uk/corporate/ecd1/chapter/punctuation-and-bullet-points#bullet-points){:target="_blank"} on the NICE style guide
- use unordered or ordered lists appropriately to semantically define content
- list items start with a lowercase letter and have no full stop at the end.

### Bulleted list

Use a list to display a set of terms, phrases, or statements clearly.

{% capture bulleted %}
<ul>
    <li>item 1</li>
    <li>item 2</li>
    <li><a href="#">item 3</a></li>
    <li>
        nested list:
        <ul>
            <li>item a</li>
            <li>item b.</li>
        </ul>
    </li>
</ul>
{% endcapture %}
{% include example.html body=bulleted %}

### Numbered list

Use numbered lists when you want to indicate a hierarchy.

{% capture numbered %}
<ol>
    <li><a href="#">item 1</a></li>
    <li>item 2</li>
    <li>item 3.</li>
</ol>
{% endcapture %}
{% include example.html body=numbered %}

### Unstyled

Unstyled lists don't have bullets and can be uses for lists of links

{% capture unstyled %}
<ul class="list list--unstyled">
    <li><a href="#">list item</a></li>
    <li><a href="#">list item</a></li>
</ul>
{% endcapture %}
{% include example.html body=unstyled %}

