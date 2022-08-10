<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [`@nice-digital/nds-filters`](#nice-digitalnds-filters)
  - [Installation](#installation)
  - [Usage](#usage)
    - [React](#react)
      - [Props](#props)
        - [`<FilterSummary />`](#filtersummary-)
          - [sorting](#sorting)
          - [activeFilters](#activefilters)
          - [children](#children)
          - [className](#classname)
          - [additional props](#additional-props)
        - [`<FilterPanel />`](#filterpanel-)
          - [children](#children-1)
          - [className](#classname-1)
          - [heading](#heading)
          - [fallback](#fallback)
          - [additional props](#additional-props-1)
        - [`<FilterGroup />`](#filtergroup-)
          - [heading](#heading-1)
          - [id](#id)
          - [selectedCount](#selectedcount)
          - [collapseByDefault](#collapsebydefault)
          - [children](#children-2)
          - [className](#classname-2)
          - [additional props](#additional-props-2)
        - [`<FilterOption />`](#filteroption-)
          - [groupId](#groupid)
          - [groupHeading](#groupheading)
          - [isSelected](#isselected)
          - [children](#children-3)
          - [value](#value)
          - [onChanged](#onchanged)
          - [additional props](#additional-props-3)
        - [`<FilterByInput />`](#filterbyinput-)
          - [label](#label)
          - [name](#name)
          - [buttonLabel](#buttonlabel)
          - [className](#classname-3)
          - [collapseByDefault](#collapsebydefault-1)
          - [type](#type)
          - [inputProps](#inputprops)
          - [additional props](#additional-props-4)
    - [SCSS](#scss)
    - [HTML](#html)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# `@nice-digital/nds-filters`

> Filter components for the NICE Design System

## Installation

Install Node, and then:

```sh
npm i @nice-digital/nds-filters --save
```

## Usage

### React

Import the `FilterSummary`, `FilterPanel`, `FilterGroup`, `FilterOption`, and `FilterByInput` components from the package and use within JSX:

```jsx
import React from "react";
import {
	FilterSummary,
	FilterPanel,
	FilterGroup,
	FilterOption,
	FilterByInput
} from "@nice-digital/nds-filters";

<FilterSummary sorting={sorting} activeFilters={activeFilters}>
	Showing results 1 to 10 of 1209
</FilterSummary>

// A filter panel can contain a filter group with filter options to select, and/or a filter by input
<FilterPanel heading="A filter panel">
	<FilterGroup heading="Type">
		<FilterOption isSelected={true} onChange={onChanged}>
			Guidance
		</FilterOption>
		<FilterOption isSelected={false} onChange={onChanged}>
			Advice
		</FilterOption>
		<FilterOption isSelected={false} onChange={onChanged}>
			NICE Pathways
		</FilterOption>
	</FilterGroup>
	<FilterByInput
		label="Filter by guidance ID"
		name="GID-filter"
	/>
</FilterPanel>
```

> Note: The React component automatically imports the SCSS, so there's no need to import the SCSS directly yourself.

#### Props

##### `<FilterSummary />`

###### sorting

- Type: `SortingType` (required)

Ways to sort the returned results. 

Each `SortingType` item contains an `onSelected` property - this is a callback function that will
run when that option is selected. If the user isn't running JS then a button will be displayed instead,
submitting the form with the selected option's value.

```ts
type SortingType = {
		label: string;
		value: string;
		active?: boolean | undefined;
		onSelected?: React.EventHandler<any>;
	};
```

```js
const sorting = [
	{ label: "Item 1", value: "item-1", onSelected: () => { console.log("Callback 1"); } },
	{ label: "Item 2", value: "item-2", onSelected: () => { console.log("Callback 2"); } },
	{
		label: "Item 3 (active)",
		value: "item-3",
		onSelected: () => { console.log("Callback 3"); },
		active: true
	},
];

<FilterSummary sorting={sorting} activeFilters={activeFilters}>
	Showing results 1 to 10 of 1209
</FilterSummary>
```

###### activeFilters

- Type: `FilterType` (required)

The filters that are being applied to the data, creates a tag that can be clicked to eg remove that filter.

If an onClick function is passed, the elementType will default to a button. If no onClick or elementType is passed, it will default to an anchor and you should pass it a destination for the href. If you use a custom elementType, you should also pass the method and destination for the element to use, eg "to" for Gatsby.

```ts
type FilterType = {
		label: string;
		destination?: string;
		onClick?: React.MouseEventHandler;
		elementType?: React.ElementType;
		method?: string;
		className?: string;
	};
```

```js
const activeFilters = [
	{
		label: "My filter",
		elementType: Link,
		to: "somewhere",
	},
	{
		label: "Another filter",
		onClick: onChanged
	}
];

<FilterSummary sorting={sorting} activeFilters={activeFilters}>
	Showing results 1 to 10 of 1209
</FilterSummary>
```

###### children

- Type: `ReactNode`

The heading text of the filter summary. Will be a `<h2>` unless the headingLevel prop is provided to change the level.

###### className

- Type: `string`

Any additional classes that you would like applied to the `<FilterSummary />` component

```js
<FilterSummary sorting={sorting} activeFilters={activeFilters} className="mb--f">
	Showing results 1 to 10 of 1209
</FilterSummary>
```

###### headingLevel

- Type: `2 | 3 | 4 | 5`
- Default: `2`

The heading level for the filter summary. This defaults to 2, but you may need to change it depending on the rest of the page structure. 

[When you initialize a variable with an object, TypeScript assumes that the properties of that object might change values later, ](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-inference) so the heading level provided here would be inferred to be a number as it could be reassigned before use. This means TypeScript will consider the code to have an error if you pass the fallback prop to filter panel with `headingLevel: 3`. Instead you need to add a type assertion like so: `headingLevel: 3 as 3`.

```js
<FilterSummary sorting={sorting} activeFilters={activeFilters} headingLevel={3 as 3}>
	Showing results 1 to 10 of 1209
</FilterSummary>
```

###### additional props

Any additional props are spread on to the first `div` element, useful for accessibility or data attributes.

##### `<FilterPanel />`

###### children

- Type: `ReactNode`

The body text of the filter panel

###### className

- Type: `string`

Any additional classes that you would like applied to the `<FilterPanel />` component

```js
<FilterPanel heading="A filter panel" className="mb--f" />
```

###### heading

- Type: `string` (required)

The heading for the filter panel

```js
<FilterPanel heading="A filter panel" />
```

###### fallback

- Type: 
``` ts 
fallback?: {
	action?: string;
	method?: "GET" | "POST";
};
```

The `<FilterPanel />` is a form, which will submit via the form action (GET request by default), if js is not available. If js is available and an action is supplied, it will override the default behaviour. 

[When you initialize a variable with an object, TypeScript assumes that the properties of that object might change values later, ](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-inference) so the method here would be inferred to be a string as it could be reassigned before use. This means TypeScript will consider the code to have an error if you pass the fallback prop to filter panel with `method: "POST"`. Instead you need to add a type assertion like so: `method: "POST" as "POST"`.

```js
<FilterPanel 
	heading="A filter panel" 
	fallback={{
		action: "/submit-form",
		method: "POST" as "POST"
	}}> />
```

###### onSubmit

- Type: `React.MouseEventHandler`

This gets used when js is available instead of the fallback above.

###### headingLevel

- Type: `2 | 3 | 4 | 5`
- Default: `2`

The heading level for the panel heading. This defaults to 2, but you may need to change it depending on the rest of the page structure. This heading level cascades to the `<FilterGroup />` and `<FilterByInput />` components, which have their headings set to the headingLevel you provide here + 1.

As above, [when you initialize a variable with an object, TypeScript assumes that the properties of that object might change values later, ](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-inference) so the heading level provided here would be inferred to be a number as it could be reassigned before use. This means TypeScript will consider the code to have an error if you pass the fallback prop to filter panel with `headingLevel: 3`. Instead you need to add a type assertion like so: `headingLevel: 3 as 3`.

```js
<FilterPanel 
	heading="A filter panel" 
	headingLevel={3 as 3}> />
```

###### additional props

Any additional props are spread on to the `form` element, useful for accessibility or data attributes.

##### `<FilterGroup />`

###### heading

- Type: `string` (required)

The heading for the filter group

```js
<FilterGroup heading="Type" />
```

###### id

- Type: `string` 

The id for the filter panel

```js
<FilterGroup heading="Type" id="ProductType"/>
```

###### selectedCount

- Type: `number` 

How many of the options in the group are currently selected ie how many filters are applied. 

```js
<FilterGroup heading="Type" selectedCount={99}/>
```

###### collapseByDefault

- Type: `boolean` 
- Default: `false`

The filter group can be collapsed to hide the filter options. 

```js
<FilterGroup heading="Type" collapseByDefault={true}/>
```

###### children

- Type: `ReactNode`

One or more `<FilterOption \>` components.

###### className

- Type: `string`

Any additional classes that you would like applied to the `<FilterGroup />` component

```js
<FilterGroup heading="Type" className="mb--f" />
```

###### additional props

Any additional props are spread on to the first `div` element, useful for accessibility or data attributes.

##### `<FilterOption />`

###### groupId

- Type: `string` 

Passed from the parent `<FilterGroup />`, will be the id or slufigied heading of the parent `<FilterGroup />`. 

###### groupHeading

- Type: `string`

Passed from the parent `<FilterGroup />`, will be the heading of the parent `<FilterGroup />`. 

###### isSelected

- Type: `boolean` (required)

If the option is selected by default

```js
<FilterOption isSelected={true} onChanged={onChanged}>
	Guidance
</FilterOption>
```

###### children

- Type: `string` (required)

The label text of the filter option. The value defaults to this if no value is provided

```js
<FilterOption isSelected={true} onChanged={onChanged}>
	Guidance
</FilterOption>
```

###### value

- Type: `string`

The value of the input

```js
<FilterOption isSelected={true} onChange={onChanged} value="guidance">
	Guidance
</FilterOption>
```

###### onChanged

- Type: `function` (required)

What happens when the checkbox is selected

```js
<FilterOption isSelected={true} onChanged={onChanged}>
	Guidance
</FilterOption>
```

###### additional props

Any additional props are spread on to the `label` element, useful for accessibility or data attributes.

##### `<FilterByInput />`

###### label

- Type: `string` (required)

The label for the input

```js
<FilterByInput
	label="Filter by guidance ID"
	name="GID-filter"
/>
```

###### name

- Type: `string` (required)

The name for the input

```js
<FilterByInput
	label="Filter by guidance ID"
	name="GID-filter"
/>
```

###### buttonLabel

- Type: `string` 
- Default: "Filter"

Replace the label for the button

```js
<FilterByInput
	label="Filter by guidance ID"
	name="GID-filter"
	buttonLabel="Filter results"
/>
```

###### className

- Type: `string` 

Any additional classes that you would like applied to the `<FilterByInput />` component

```js
<FilterByInput
	label="Filter by guidance ID"
	name="GID-filter"
	className="mb--f"
/>
```

###### collapseByDefault

- Type: `boolean` 
- Default: `false`

The filter by input panel can be collapsed to hide the input and button. 

```js
<FilterByInput
	label="Filter by guidance ID"
	name="GID-filter"
	collapseByDefault={true}
/>
```

###### type

- Type: "color"
		| "date"
		| "datetime-local"
		| "email"
		| "file"
		| "hidden"
		| "image"
		| "month"
		| "number"
		| "range"
		| "password"
		| "search"
		| "tel"
		| "text"
		| "time"
		| "url"
		| "week";
- Default: "text""

The type of input for the filter

```js
<FilterByInput
	label="Filter by guidance ID"
	name="GID-filter"
	type="number"
/>
```

###### inputProps

- Type: `object` 

Any props you would like to spread on to the `<Input />` component, examples given below. See the documentation for nds-input for more options.

```js
<FilterByInput
	label="Filter by guidance ID"
	name="GID-filter"
	inputProps={{
		hint: "enter your search term here",
		error: true,
		errorMessage: "NOOOO",
		"data-tracking": "message"
	}}
/>
```

###### additional props

Any additional props are spread on to the first `div` element, useful for accessibility or data attributes.

### SCSS

If you're not using [React](#react), then import the SCSS directly into your application by:

```scss
@forward '@nice-digital/nds-filters/scss/filters';
```

### HTML

If you're not using [React](#react), then include the [SCSS as above](#scss) and use the HTML:

```html
<form title="Filter" action="/submit-form" method="POST">
	<div class="filter-panel undefined">
		<h2 class="filter-panel__heading">
			<button aria-expanded="true" aria-controls="filter-panel-body">A filter panel</button>
		</h2>
		<div id="filter-panel-body" class="filter-panel__body" aria-hidden="false">

			// For a filter group
			<div class="filter-group">
				<h3 class="filter-group__heading">
					<button type="button" aria-expanded="true" aria-controls="group-ProductType">
						<span id="group-heading-ProductType">Type</span>
					</button>
				</h3>
				<fieldset id="group-ProductType" aria-hidden="false" class="filter-group__options">
					<legend>Type</legend>
					<label for="filter_ProductType_guidance" class="filter-option">
						<input id="filter_ProductType_guidance" type="checkbox" name="ProductType" title="Type - Guidance" value="Guidance" checked="">
						<span class="filter-option__text">Guidance</span>
					</label>
					<label for="filter_ProductType_advice" class="filter-option">
						<input id="filter_ProductType_advice" type="checkbox" name="ProductType" title="Type - Advice" value="Advice">
						<span class="filter-option__text">Advice</span>
					</label>
					<label for="filter_ProductType_nice-pathways" class="filter-option">
						<input id="filter_ProductType_nice-pathways" type="checkbox" name="ProductType" title="Type - NICE Pathways" value="NICE Pathways">
						<span class="filter-option__text">NICE Pathways</span>
					</label>
				</fieldset>
			</div>

			// For a filter by input
			<div class="inputFilterBox">
				<h3 class="inputFilterBox__heading">
					<button type="button" aria-expanded="false" aria-controls="inputFilter-filter">Filter by GID</button>
				</h3>
				<div id="inputFilter-filter" aria-hidden="true" class="inputFilterBox__controls">
					<div class="input">
						<label class="input__label" for="filter">Filter by GID</label>
						<input name="filter" class="input__input" id="filter" type="text"  value="">
					</div>
					<button type="submit" class="btn ml--0 mb--0">Filter</button>
				</div>
			</div>
			
		</div>
	</div>
</form>
```
