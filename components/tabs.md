---
layout: sidebar
title: Tabs
description: Content is separated into different panes, with only one pane viewable at a time
---

## Why?
When you have a group of related content, and you need to save space, or when your user needs to switch between grouped content.

## Usage
Tabs should be used within a page for switching between groups of related content. They shouldn’t be a used as a way of navigating to different sections of the site. If your users need to compare content, or see all the content at one time, then tabs is not the correct solution.

- tab labels should be short (1-2 words), clear and descriptive
- it’s recommend that between 3 and 5 tabs is the limit to the amount tabs you use
- words used should relate to the content within each tab
- arrangement of tabs should be in a order which makes sense to our users
- do not use all caps for labels
- avoid having tabs within tabs
- ARIA attributes are applied via JS
- keyboard controls are enabled:
	* Left/up and down/right changes the selected tab
	* Home/end moves to first/last tab
	
## Variants
There's only 1 variant of tabs:

{% capture basics %}
<div class="tabs" data-tabs>
	<ul class="tabs__list" role="tablist">
		<li class="tabs__tab" role="presentation">
			<button class="tabs__tab-btn" type="button" role="tab">
				Tab 1
			</button>
		</li>
		<li class="tabs__tab" role="presentation">
			<button class="tabs__tab-btn" type="button" role="tab">
				Tab 2
			</button>
		</li>
		<li class="tabs__tab" role="presentation">
			<button class="tabs__tab-btn" type="button" role="tab">
				Tab 3
			</button>
		</li>
	</ul>
	<div class="tabs__content">
		<div class="tabs__pane" role="tabpanel">
			Content for tab 1
		</div>
		<div class="tabs__pane" role="tabpanel">
			Content for tab 2
		</div>
		<div class="tabs__pane" role="tabpanel">
			Content for tab 3
		</div>
	</div>
</div>
{% endcapture %}
{% include example.html lang='html' body=basics %}
