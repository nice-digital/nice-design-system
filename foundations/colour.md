---
layout: sidebar
title: Colour
---

The NICE colour palette is also described on the [brand guidelines](https://www.nice.org.uk/brand/colour-palette){:target="_blank"}. Use these guidelines to determine the best way to apply the NICE colour palette.


## Text
<ul class="colour-grid">
    {% include colour.html title="Primary text" var="colour-text" %}
    {% include colour.html title="Inverse text" var="colour-text-reverse" %}
</ul>

## Links

### Default 

<ul class="colour-grid">
    {% include colour.html title="Link" var="colour-link" %}
    {% include colour.html title="Link hover state" var="colour-link-hover" %}
    {% include colour.html title="Link visited state" var="colour-link-visited" %}
    {% include colour.html title="Link active state" var="colour-link-active" %}
    {% include colour.html title="Link focus" var="colour-focus" %}
</ul>

### Inverse 

link : #FFFFFF , 255,255,255
link hover : #d6d6d6 , 214,214,214
link visited :  #FFFFFF , 255,255,255 (Keeping it same as link colour to conform to AA standard across potentially various dark bgs) 
link active : #d6d6d6 , 214,214,214
link focus : as is
link focus text : #393939 



<ul class="colour-grid">
    {% include colour.html title="Inverse link" var="colour-inverselink" %}
    {% include colour.html title="Inverse link hover state" var="colour-inverselink-hover" %}
    {% include colour.html title="Inverse link visited state" var="colour-inverselink-visited" %}
    {% include colour.html title="Inverse link active state" var="colour-inverselink-active" %}
    {% include colour.html title="Inverse link focus" var="colour-focus" %}
    {% include colour.html title="Inverse link focus" var="colour-focus-text" %}
</ul>

## Buttons

### Call-to-action 
<ul class="colour-grid">
    {% include colour.html title="CTA button" var="colour-btn-cta" %}
    {% include colour.html title="CTA button hover state" var="colour-btn-cta-hover" %}
    {% include colour.html title="CTA button text" var="colour-btn-cta-text" %}
</ul>
    
### Primary
<ul class="colour-grid">
    {% include colour.html title="Primary button" var="colour-btn-primary" %}
    {% include colour.html title="Primary button hover state" var="colour-btn-primary-hover" %}
    {% include colour.html title="Primary button text" var="colour-btn-primary-text" %}
</ul>

### Secondary
<ul class="colour-grid">
    {% include colour.html title="Secondary button" var="colour-btn-secondary" %}
    {% include colour.html title="Secondary button hover state" var="colour-btn-secondary-hover" %}
    {% include colour.html title="Secondary button text" var="colour-btn-secondary-text" %}
</ul>

### Light
<ul class="colour-grid">
    {% include colour.html title="Light button" var="colour-btn-light" %}
    {% include colour.html title="Light button hover state" var="colour-btn-light-hover" %}
    {% include colour.html title="Light button text" var="colour-btn-light-text" %}
</ul>

### Focus state (all buttons)
<ul class="colour-grid">
    {% include colour.html title="Focus state" var="colour-focus" %}
</ul>


## Icons

<ul class="colour-grid">
    {% include colour.html title="Icons" var="colour-icons" %}
</ul>


## Backgrounds and border

<ul class="colour-grid">
    {% include colour.html title="Body background" var="colour-body" %}
    {% include colour.html title="Light panel background" var="colour-panel-light" %}
    {% include colour.html title="Dark panel background" var="colour-panel-dark" %}
    {% include colour.html title="Borders" var="colour-border" %}
</ul>


## Notifications and banners

<ul class="colour-grid">
    {% include colour.html title="Alpha & beta banner" var="colour-agile-phase" %}

    {% include colour.html title="Error text & border" var="colour-error" %}
    {% include colour.html title="Error background" var="colour-error-background" %}

    {% include colour.html title="Caution text & border" var="colour-caution" %}
    {% include colour.html title="Caution background" var="colour-caution-background" %}

    {% include colour.html title="Info text & border" var="colour-info" %}
    {% include colour.html title="Info background" var="colour-info-background" %}

    {% include colour.html title="Success text & border" var="colour-success" %}
    {% include colour.html title="Success background" var="colour-success-background" %}
</ul>

## Semantic colours

In addition to the corporate palette, there are a set of <a href="{{ site.baseurl }}{% link technical/sass/documentation/colours.md %}">semantic colour variables</a> in SASS for specific use cases. Wherever possible, these should be used rather than the corporate palette directly. For example, text should use `color: $colour-text` rather than `color: $colour-rich-black`.

<a href="{{ site.baseurl }}{% link technical/sass/documentation/colours.md %}" class="btn btn--secondary">SASS colour documentation</a>

{% capture semantic %}
body {
    background: $colour-page;
    colour: $colour-text;
}
{% endcapture %}
{% include source.html lang='scss' body=semantic title='Semantic colour example' %}

## Accessibility

We follow the guidelines for UK government websites and aim to support [W3C’s WCAG 2.0 Guidelines Level AA level](https://www.w3.org/TR/WCAG20/){:target="_blank"}.

Specifically, this means meeting guideline 1.4. <q>Distinguishable: Make it easier for users to see and hear content including separating foreground from background</q>. These are the most relevant guidelines for colour:

### 1.4.1 Use of Color

<blockquote class="quote">
    <p>
        Color is not used as the only visual means of conveying information, indicating an action, prompting a response, or distinguishing a visual element. (Level A)
    </p>
    <footer>
        <cite><a href="https://www.w3.org/TR/WCAG/#visual-audio-contrast-without-color">W3C</a></cite>
    </footer>
</blockquote>

This guideline is designed for [users who have difficulty perceiving colour](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-without-color.html#visual-audio-contrast-without-color-65-head){:target="_blank"}. This may be people with partial sight, colourblindness etc. The W3C describes [how to meet 1.4.1](http://www.w3.org/WAI/WCAG20/quickref/#qr-visual-audio-contrast-without-color){:target="_blank"} in detail.

Use other visual cues aside from colour to convey information, states etc. Use elements such as strokes, indicators, patterns, texture, or text to describe actions and content.

### 1.4.3 Contrast

<blockquote class="quote">
    <p>
        The visual presentation of text and images of text has a contrast ratio of at least 4.5:1 &hellip; (Level AA)
    </p>
    <footer>
        <cite><a href="https://www.w3.org/TR/WCAG/#visual-audio-contrast-contrast">W3C</a></cite>
    </footer>
</blockquote>

The W3C guidlines [1.4.3 Contrast (Minimum) (AA)](https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast){:target="_blank"} and [1.4.6 Contrast (Enhanced) (AAA)](https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast7){:target="_blank"} describe the minimum levels of colour contrast for different sizes of text.

The NICE colour palette has been designed to meet WCAG 2.0 AA with respect to colour contrast. However, because applications can use colours in their own way, the following tools can be used to test colour contrast:

- [Lea Verou's Contrast Ratio](http://leaverou.github.io/contrast-ratio/){:target="_blank"} - useful for a quick test of 2 colours
- [WAVE WebAIM](http://wave.webaim.org/extension/){:target="_blank"} - general accessibility testing tool that highlights colour contrast issues
- [HTML_CodeSniffer](http://squizlabs.github.io/HTML_CodeSniffer/){:target="_blank"} - general accessibility testing tool that highlights colour contrast issues
- [Accessibility Developer Tools extension for Chrome](https://chrome.google.com/webstore/detail/accessibility-developer-t/fpkknkljclfencbdbgkenhalefipecmb?hl=en){:target="_blank"} - extension for Chrome developer tools to check contrast of any inspected element
