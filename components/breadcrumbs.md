---
layout: sidebar
title: Breadcrumbs
---

# Breadcrumbs

<h2>Basics</h2>

- Use a `nav` element
- Use `aria-label` to describe the breadcrumbs
- Use `.visually-hidden` to only show the 'you are here' label to screen readers.
- Use [schema.org microdata](http://schema.org/BreadcrumbList){:target="_blank"} for *BreadcrumbList* and *ListItem*.

{% capture basics %}
<nav aria-label="Breadcrumbs" role="navigation">
    <p class="visually-hidden" id="breadcrumb-label">
        You are here:
    </p>
    <ol class="breadcrumbs" aria-labelledby="breadcrumb-label" itemscope itemtype="http://schema.org/BreadcrumbList">
        <li class="breadcrumbs__crumb" itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
            <a href="https://www.nice.org.uk/" itemprop="name">
                Home
            </a>
            <meta itemprop="position" content="1">
        </li>
        <li class="breadcrumbs__crumb" itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
            <a href="https://www.nice.org.uk/guidance" itemprop="name">
                NICE Guidance
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