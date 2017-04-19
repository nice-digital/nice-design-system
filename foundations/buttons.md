---
layout: sidebar
title: Buttons
---

Their main purpose is to trigger an action when the user clicks on them. It's important that the button label is clear about what action the button performs to the user.


## Button basics

- buttons can be `<a>`, `<button>` or `<input type="submit">`
- use correct semantics for the button element
- use BEM modifiers for different types

## Button text

- wording on buttons should be clear and inform the user what the button does
- words like ‘okay’ and ‘no’ don’t give the user enough information
- make sure the button text describes an action
- avoid excessively long button text

## Button positioning

- consider the user's reading path before deciding where to put a button
- ensure that prominent buttons are displayed in a easy to spot location
- place buttons in a sensible order 
- make it harder to find destructive buttons (Cancel, delete)

## Button variants

### Call-to-action button

Use a main call-to-action button when the user is moving forward in a path, conveying a sense of purpose and urgency. 
For example 'Register now', 'Contact us' or 'Join the mailing list'. Try to have as few Call-to-action buttons per page as possible - just one is best

{% capture cta %}
<p><a href="#" class="btn btn--cta">Register now</a></p>
{% endcapture %}
{% include example.html lang='html' body=cta %}

### Primary button

Use the primary button for normal actions, do something within the page, typically to reveal more information, for example: 'View guidance consultations', 'List of guidelines' or 'Advice listing'.

{% capture primary %}
<p><a href="#" class="btn">Find NICE guidance</a></p>
{% endcapture %}
{% include example.html lang='html' body=primary %}

### Secondary button
When you require a button type that sits lower in the hierarchy then a primary button. 

{% capture secondary %}
<p><a href="#" class="btn btn--secondary">View guidance consultations</a></p>
{% endcapture %}
{% include example.html lang='html' body=secondary %}

### Light button
If you are wanting to place a button on a dark background, use the light button as a way of making the button distinguishable.

{% capture light %}
<p class="panel panel--dark"><a href="#" class="btn btn--light">View guidance consultations</a></p>
{% endcapture %}
{% include example.html lang='html' body=light %}

### Icon button
If you are looking for an additional way to convey the label on a button. Instances of this could include: Refresh or loading state buttons.

{% capture icon %}
<p><a href="#" class="btn"><span class="icon icon--pathways" aria-hidden="true"></span> View guidance consultations</a></p>
{% endcapture %}
{% include example.html lang='html' body=icon %}

## Dropdown button
A dropdown menu with a set of related actions. Ensure that the button label is clear as to what the contents of the dropdown are

CODE AREA

## Disabled buttons
- disabled buttons are lowered down to 50% opacity to ensure they look unclickable
- if you are using disabled buttons, make sure there is a valid reason
- provide clear infomation on why its disabled (error message or label text)
- you can use `[disabled]`, `[disabled='disabled']`, `.disabled`, `.btn--disabled` or `[aria-disabled='true']`

{% capture disabled %}
<p>
    <button type="button" class="btn" disabled>Disabled primary</button>
    <button type="button" class="btn btn--cta" disabled>Disabled cta</button>
    <button type="button" class="btn btn--secondary" disabled>Disabled secondary</button>
    <button type="button" class="btn btn--light" disabled>Disabled light</button>
</p>
{% endcapture %}
{% include example.html lang='html' body=disabled %}

## Grouped buttons
If you need to show a close relationship between multiple buttons, used grouped buttons

{% capture groups %}
<p>
    <button type="button" class="btn">Primary action</button>
    <button type="button" class="btn btn--secondary">Secondary action</button>
</p>
{% endcapture %}
{% include example.html lang='html' body=groups %}
