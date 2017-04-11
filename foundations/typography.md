---
layout: sidebar
title: Typography
---

# Typography


## Basics

- Typography follows the rules from our [brand guidelines](https://www.nice.org.uk/brand/typography){:target="_blank"} with some web specific adaptations (for responsive design etc)
- we use Lato, which can be referenced or [downloaded from Google](https://fonts.google.com/specimen/Lato){:target="_blank"}
- follow [NICE's style guide](https://www.nice.org.uk/corporate/ecd1/){:target="_blank"} for writing

### Usage

- there are set of <a href="{{ site.baseurl }}{% link technical/sass/documentation/typography.md %}">typographic SASS constructs</a> to allow consistent use of responsive typography
- favour using mixins e.g. `@include font-size(1)` rather than specifying font sizes directly
- we use REMs and automatically add fallbacks to px for older browsers via [PostCSS](https://github.com/nhsevidence/NICE-Experience/blob/master/.grunt-tasks/postcss.js){:target="_blank"}


## Headings

- use Lato Bold (700)
- use sentence case for headings
- use headings consistently to create a clear hierarchy
- don't skip headings; use classes like `.h1, .h2` etc or mixins like `@include h1` etc if you need a visual difference in heading

{% capture headings %}
<h1>How quickly daft<br/>jumping zebras vex</h1>
<h2>The five boxing<br/>wizards jump quickly</h2>
<h3>Pack my box with<br/>five dozen liquor jugs</h3>
<h4>The quick brown fox<br/>jumps over the lazy dog</h4>
<h5>Amazingly few discotheques<br/>provide jukeboxes</h5>
<h6>Whenever the black fox jumped<br/>the squirrel gazed suspiciously</h6>
{% endcapture %}
{% include example.html lang='html' body=headings %}


## Body copy

- stick to 10 words or 70 characters per line as a guide
- use `class="lead"` for leading, important, introductory paragraphs
- use only 1 lead per page
- body copy is **0** on our modular scale
- in SASS, body copy is `@include font-size(0)`

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

### Marked text

For highlighting a run of text due to its relevance in another context, use the `<mark>` tag or `.mark`.

{% capture mark %}
You can use the mark tag to <mark>highlight</mark> text.
{% endcapture %}
{% include example.html lang='html' body=mark %}

### Deleted text

For indicating blocks of text that have been deleted use the `<del>` tag.

{% capture del %}
<del>This line of text is meant to be treated as deleted text.</del>
{% endcapture %}
{% include example.html lang='html' body=del %}

### Strikethrough text

For indicating blocks of text that are no longer relevant use the `<s>` tag.

{% capture strikethrough %}
<s>This line of text is meant to be treated as no longer accurate.</s>
{% endcapture %}
{% include example.html lang='html' body=strikethrough %}

### Inserted text

For indicating additions to the document use the `<ins>` tag.

{% capture ins %}
<ins>This line of text is meant to be treated as an addition to the document.</ins>
{% endcapture %}
{% include example.html lang='html' body=ins %}

### Underlined text

To underline text use the `<u>` tag.

{% capture underlined %}
<u>This line of text will render as underlined</u>
{% endcapture %}
{% include example.html lang='html' body=underlined %}

### Small text

For de-emphasizing inline or blocks of text, use the `<small>` to set text at 85% the size of the parent. Alternatively, use `.small` instead.

{% capture small %}
<p>This is some text <small>with some</small> <span class="small">smaller text</span></p>
{% endcapture %}
{% include example.html lang='html' body=small %}

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

### Alternate elements

Feel free to use `<b>` and `<i>` in HTML5. `<b>` is meant to highlight words or phrases without conveying additional importance while `<i>` is mostly for voice, technical terms, etc.


## Quotations

- use a citation where possible

### Simple block quotation

{% capture blockquote %}
<blockquote class="quote">
    <p>In 2015, 74% of staff rated NICE as a good place to work.</p>
</blockquote>
{% endcapture %}
{% include example.html lang='html' body=blockquote %}

### Block quotation w/ citation

{% capture withcitation %}
<blockquote class="quote">
    <p>We do the right work in the right way at NICE. We mix content, dev, design and research at the start to solve user problems.  We produce things quickly, get data and refine. </p>
    <footer>
        <cite><strong>Dafydd</strong> - Content Team</cite>
    </footer>
</blockquote>
{% endcapture %}
{% include example.html lang='html' body=withcitation %}


## Links

- links should follow the same sizing as containing copy
- use underline and colour to maximise [perceived affordance](http://www.jnd.org/dn.mss/affordances_and.html){:target="_blank"}
- use `rel="external"`, `rel="next"` and `rel="previous"` where applicable
- visually distinguish external links

{% capture links %}
<p><a href="#">A link on its own</a></p>
<p>This is some text with <a href="#" target="_blank" rel="external">an external link</a> inside it.</p>
{% endcapture %}
{% include example.html lang='html' body=links %}


## Lists

- follow the [bullet points guide lines](https://www.nice.org.uk/corporate/ecd1/chapter/punctuation-and-bullet-points#bullet-points){:target="_blank"} on the NICE style guide
- use unordered or ordered lists appropriately to semantically define content

### Default lists

{% capture defaultlist %}
<p>This is an unordered list:</p>
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li><a href="#">Item 3</a></li>
</ul>
<p>This is an ordered list:</p>
<ol>
    <li><a href="#" target="_blank" rel="external">Item 1</a></li>
    <li>Item 2</li>
    <li>Item 3</li>
</ol>
{% endcapture %}
{% include example.html lang='html' body=defaultlist %}

### Featured lists

- use featured lists when you want more impact
- limit to just 1 or 2 per page for impact
- try to stick to a maximum of 4 items in a featured list.

{% capture featuredlist %}
<p>This is a featured list:</p>
<ul class="list list--featured">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>
{% endcapture %}
{% include example.html lang='html' body=featuredlist %}
