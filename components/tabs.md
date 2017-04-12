---
layout: sidebar
title: Tabs
---

## Basics

- ARIA attributes are applied via JS
- Keyboard controls are enabled:
	* Left/up and down/right changes the selected tab
	* Home/end moves to first/last tab

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