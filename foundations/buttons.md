---
layout: sidebar
title: Buttons
---

# Buttons

## Button basics

- buttons can be `<a>`, `<button>` or `<input type="submit">`
- use correct semantics for the button element
- use BEM modifiers for different types
- avoid excessively long button text
- make sure the button text describes an action
- don't use copy like 'read more' or 'view more'

{% capture basics %}
<p>
    <a href="#" class="btn btn--primary">Primary button</a>
    <button type="button" class="btn">Default button</button>
    <input type="button" class="btn btn--secondary" value="Subtle, secondary button" />
</p>
{% endcapture %}
{% include example.html lang='html' body=basics %}

## Button variants

### Primary buttons

- imit to just one primary action per page
- use for strong, emphasis on the key user journey

{% capture primary %}
<p><a href="#" class="btn btn--primary">Find NICE guidance</a></p>
{% endcapture %}
{% include example.html lang='html' body=primary %}

### CTA buttons

Use a main call-to-action button when the user is moving forward in a path, conveying a sense of purpose and urgency.
For example 'Register now', 'Contact us' or 'Join the mailing list'.

<ul>
    <li>try to have as few call-to-action buttons per page as possible - just one is best</li>
</ul>

{% capture cta %}
<p><a href="#" class="btn">Register now</a></p>
{% endcapture %}
{% include example.html lang='html' body=cta %}

<h3>Standard buttons</h3>

Use the standard button for normal actions, do something within the page, typically to reveal more information, for example: 'View guidance consultations', 'List of guidelines' or 'Advice listing'.

{% capture standard %}
<p><a href="#" class="btn btn--secondary">View guidance consultations</a></p>
{% endcapture %}
{% include example.html lang='html' body=standard %}

## Groups

- buttons can be grouped together
- typically a default/primary and a secondary
- don't group more than 3 buttons

{% capture groups %}
<p>
    <button type="button" class="btn">Primary action</button>
    <button type="button" class="btn btn--secondary">Secondary action</button>
</p>
{% endcapture %}
{% include example.html lang='html' body=groups %}
