---
layout: sidebar
title: Action banner
description: Banner for highlighting, and giving context to, a call-to-action
---

Use action banners to highlight important calls-to-action
{:.lead}

## Why?
Some calls-to-action are higher priority than others. An action banner gives a way of highlighting these CTAs. They can also be used to break up a page layout and give visual interest.

## Usage
Action banners fill the available horizontal space and have their own built-in container. They usually live outside of any `.container` to fill the screen width.
- Use sparingly
- use a maximum of 1 per page
- use outside of `.container`
- follow the rules for <a href="{{ site.baseurl }}{% link foundations/buttons.md %}">buttons</a>.

## Variants

There's only 1 variant of an action banner:

{% capture example %}
<section class="action-banner" data-no-inpagenav>
    <div class="action-banner__container">
        <div class="action-banner__inner">
            <div class="action-banner__text">
                <h2 class="action-banner__title">
                    Register as a stakeholder
                </h2>
                <p class="action-banner__intro">
                    Stakeholders can comment on draft guidance and participate in workshops and events.
                </p>
            </div>
            <div class="action-banner__actions">
                <a href="https://www.nice.org.uk/get-involved/stakeholder-registration" class="btn btn--inverse">
                    Register
                </a>
            </div>
        </div>
    </div>
</section>
{% endcapture %}
{% include example.html lang='html' body=example %}