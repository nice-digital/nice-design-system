---
layout: sidebar
title: Card
description: A flexible component for displaying an item within a list
---

Cards are flexible components for displaying items, usually within a list. They're used for guidance and search results. They consist of a heading and optional:

- heading icon
- body
- metadata, including <a href="{{ site.baseurl }}{% link components/tag.md %}">tags</a>

Tags are usually used within a `list--unstyled`.

## Standard

{% capture standard %}
<article class="card" data-no-inpagenav>
    <header class="card__header">
        <h3 class="card__heading">
            <a href="https://www.nice.org.uk/">
                Advanced breast cancer: diagnosis and treatment (CG81)
            </a>
        </h3>
    </header>
    <dl class="card__metadata">
        <div class="card__metadatum">
            <dt>
                <span class="card__tag tag tag--consultation">
                    In consultation
                </span>
            </dt>
            <dd class="visually-hidden">Yes</dd>
        </div>
        <div class="card__metadatum">
            <dt>
                <span class="card__tag tag tag--new">
                    New
                </span>
            </dt>
            <dd class="visually-hidden">Yes</dd>
        </div>
        <div class="card__metadatum">
            <dt>Date updated:</dt>
            <dd>
                <time datetime="2017-12">December 2017</time>
            </dd>
        </div>
        <div class="card__metadatum">
            <dt>Date created:</dt>
            <dd>
                <time datetime="2017-01">January 2017</time>
            </dd>
        </div>
    </dl>
</article>
{% endcapture %}
{% include example.html lang='html' body=standard %}

## Card list

{% capture standard %}
<ul class="list--unstyled" data-no-inpagenav>
    <li>
        <article class="card">
            <header class="card__header">
                <h3 class="card__heading">
                    <a href="https://www.nice.org.uk/">
                        Early and locally advanced breast cancer: diagnosis and treatment (CG80)
                    </a>
                </h3>
            </header>
            <dl class="card__metadata">
                <div class="card__metadatum">
                    <dt>Date created:</dt>
                    <dd>
                        <time datetime="2017-01">January 2017</time>
                    </dd>
                </div>
            </dl>
        </article>
    </li>
    <li>
        <article class="card">
            <header class="card__header">
                <h3 class="card__heading">
                    <a href="https://www.nice.org.uk/">
                        Improving outcomes in breast cancer (CSG1)
                    </a>
                </h3>
            </header>
            <dl class="card__metadata">
                <div class="card__metadatum">
                    <dt>
                        <span class="card__tag tag tag--consultation">
                            In consultation
                        </span>
                    </dt>
                    <dd class="visually-hidden">Yes</dd>
                </div>
                <div class="card__metadatum">
                    <dt>Date created:</dt>
                    <dd>
                        <time datetime="2017-01">January 2017</time>
                    </dd>
                </div>
            </dl>
        </article>
    </li>
    <li>
        <article class="card">
            <header class="card__header">
                <h3 class="card__heading">
                    <a href="https://www.nice.org.uk/">
                        Suspected cancer: recognition and referral (NG12)
                    </a>
                </h3>
            </header>
            <dl class="card__metadata">
                <div class="card__metadatum">
                    <dt>Date created:</dt>
                    <dd>
                        <time datetime="2017-01">January 2017</time>
                    </dd>
                </div>
            </dl>
        </article>
    </li>
</ul>
{% endcapture %}
{% include example.html lang='html' body=standard %}
