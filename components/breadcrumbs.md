---
layout: sidebar
title: Breadcrumbs
description: A breadcrumb trail is a secondary navigation, that displays as a series of links, situated below the header. 
---

## Why?
It helps identify where the user is, and the navigation they may have taken to get to the current page.

## Usage
- Use a `nav` element
- use an `aria-label` attribute to describe the breadcrumbs
- use `.visually-hidden` to only show the 'you are here' label to screen readers.
- use [schema.org microdata](http://schema.org/BreadcrumbList){:target="_blank"} for *BreadcrumbList* and *ListItem*.

## Variants
There's only 1 variant of breadcrumbs:

{% capture basics %}
<nav aria-label="Breadcrumbs" role="navigation">
    <p class="visually-hidden" id="breadcrumb-label">
        You are here:
    </p>
    <ol class="breadcrumbs" aria-labelledby="breadcrumb-label" itemscope itemtype="http://schema.org/BreadcrumbList">
        <li class="breadcrumbs__crumb" itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
            <a href="https://www.nice.org.uk/" itemprop="item">
                <span itemprop="name">Home</span>
            </a>
            <meta itemprop="position" content="1">
        </li>
        <li class="breadcrumbs__crumb" itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
            <a href="https://www.nice.org.uk/guidance" itemprop="item">
                <span itemprop="name">NICE Guidance</span>
            </a>
            <meta itemprop="position" content="2">
        </li>
        <li class="breadcrumbs__crumb" itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
            <span itemprop="name">
                Population groups
            </span>
            <meta itemprop="position" content="3">
        </li>
    </ol>
</nav>
{% endcapture %}
{% include example.html lang='html' body=basics %}
