---
layout: master
title: Your source for quickly creating consistent on-brand NICE digital services
---

<div class="hero">
    {% include alpha.html %}

    <div class="hero__container">
        <div class="hero__body">
            <div class="hero__copy">
                <h1 class="hero__title">{{ site.product_name }}</h1>

                <p class="hero__intro">
                    Your source for quickly creating consistent on-brand NICE digital services
                </p>

                <div class="hero__actions">
                    <a href="{{ site.baseurl }}{% link about/getting-started.md %}" class="btn btn--cta">Get started</a>
                    <a href="{{ site.repository }}" class="btn" target="_blank" rel="noopener external">View on Github</a>
                </div>
            </div>
            <div class="hero__extra">
                <h2 class="h4 mt--0-md">Quick links</h2>

                <ul class="list list--unstyled list--loose">
                    <li><a href="{{ site.baseurl }}{% link foundations/index.md %}">Foundations</a></li>
                    <li><a href="{{ site.baseurl }}{% link components/index.md %}">Components</a></li>
                    <li><a href="{{ site.baseurl }}{% link technical/index.md %}">Technical</a></li>
                    <li><a href="{{ site.baseurl }}{% link about/index.md %}">About the Design System</a></li>
                </ul>
            </div>
        </div>
    </div>
</div>

<div class="container" markdown="1">

{% include section-nav.html nav="foundations" heading=true %}

___

{% include section-nav.html nav="components" heading=true %}

___

{% include section-nav.html nav="technical" heading=true %}

___

{% include section-nav.html nav="about" heading=true %}

</div>