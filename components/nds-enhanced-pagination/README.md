# `@nice-digital/nds-enhanced-pagination`

> Enchanced pagination component for the NICE Design System

## Installation

Install Node, and then:

```sh
npm i @nice-digital/nds-enhanced-pagination --save
```

## Usage

### React

Import the `EnhancedPagination` component from the package and use within JSX:

```jsx
import React from "react";
import { EnahncedPagination } from "@nice-digital/nds-enhanced-pagination";

<EnhancedPagination
	currentPage={32}
	totalPages={49}
	pagesActions={pagesActions}
	nextPageAction={nextPageAction}
	previousPageAction={previousPageAction}
/>
```

> Note: The React component automatically imports the SCSS, so there's no need to import the SCSS directly yourself.

#### Props

##### currentPage

- Type: number (required)

The page of the search results you are currently on.

#### totalPages

- Type: number (required)

The total number of pages your results will be over.

##### pagesActions

- Type: `ActionType[]` (required)

An array of objects, one for each page that will have links rendered. You should provide the page number, and either a destination if you are using links, or an onClick if you are using buttons.

You can provide more pages than will be rendered (ie you could provide an object for every results page), but you need to at least provide an object for each that will be rendered. This will be the first and last pages, the current page, and two to either side.

```ts
type ActionType = {
		destination?: string;
		onClick?: React.EventHandler;
		pageNumber?: number;
	};
```

```jsx
const pagesActions =  [
	{
		pageNumber: 1,
		destination: "#1",
	},
	{
		pageNumber: 30,
		destination: "#30",
	},
	{
		pageNumber: 31,
		destination: "#31",
	},
	{
		pageNumber: 32,
		destination: "#32",
	},
	{
		pageNumber: 33,
		destination: "#33",
	},
	{
		pageNumber: 34,
		destination: "#34",
	},
	{
		pageNumber: 49,
		destination: "#49",
	}
];

<EnhancedPagination
	currentPage={32}
	totalPages={49}
	pagesActions={pagesActions}
	nextPageAction={nextPageAction}
	previousPageAction={previousPageAction}
/>
```

##### nextPageAction and previousPageAction

- Type: `ActionType` (required)

Contains either a destination if you are using links, or an onClick if you are using buttons for the next and previous pages (relative to your current page).

```jsx
const nextPageAction = {
	destination: "#somewhere",
};

const previousPageAction = {
	destination: "#somewhereElse",
};

<EnhancedPagination
	currentPage={32}
	totalPages={49}
	pagesActions={pagesActions}
	nextPageAction={nextPageAction}
	previousPageAction={previousPageAction}
/>
```

##### elementType

- Type: `React.ElementType`
- Default: `a`

The element type for the pagination is by default an anchor, in which case you should pass a destination with your pagesActions, previousPageAction, and nextPageAction props. 

If you wish you can change this to something else, for example a button (in which case you need to pass an onClick prop instead of a destination), or a custom elementType.

For custom elementTypes that use a method other than `href` for their destination, you should pass that in the method prop eg "to" for a Gatsby `Link` elementType.

```jsx
<EnhancedPagination
	currentPage={32}
	totalPages={49}
	pagesActions={pagesActions}
	nextPageAction={nextPageAction}
	previousPageAction={previousPageAction}
	elementType={"button"}
/>
```

##### method

- Type: `string`
- Default: "href"

Use this is you pass a custom elementType that uses a method other than href eg "to" for a Gatsby `Link` elementType.

##### className

- Type: `string`

Any aditional classes that you would like applied to the `<nav />` element 

##### additional props

Any additional props are spread on to the `nav` element, useful for accessibility or data attributes.

### SCSS

If you're not using [React](#react), then import the SCSS directly into your application by:

```scss
@import "~@nice-digital/nds-enhanced-pagination/scss/enhanced-pagination";
```

### HTML

If you're not using [React](#react), then include the [SCSS as above](#scss) and use the HTML:

```html
<nav role="navigation" aria-label="Pagination Navigation" class="pagination clearfix ">
  <ul class="pagination__list">
    <li class="pagination__item pagination__item--bookend" aria-label="Go to previous page">
      <button class="pagination__link">Previous page
      </button>
    </li>
    <li class="pagination__item">
      <button aria-label="Go to page 1" class="pagination__link">1
      </button>
    </li>
    <li class="pagination__item">
      <span class="pagination__inactive">…
      </span>
    </li>
    <li class="pagination__item">
      <button aria-label="Go to page 30" class="pagination__link">30
      </button>
    </li>
    <li class="pagination__item">
      <button aria-label="Go to page 31" class="pagination__link">31
      </button>
    </li>
    <li class="pagination__item pagination__item--current" aria-current="true">
      <span class="pagination__inactive">
        <span class="visually-hidden">Current page 
        </span>32
      </span>
    </li>
    <li class="pagination__item">
      <button aria-label="Go to page 33" class="pagination__link">33
      </button>
    </li>
    <li class="pagination__item">
      <button aria-label="Go to page 34" class="pagination__link">34
      </button>
    </li>
    <li class="pagination__item">
      <span class="pagination__inactive">…
      </span>
    </li>
    <li class="pagination__item">
      <button class="pagination__link">49
      </button>
    </li>
    <li class="pagination__item pagination__item--count">
      <span>Page 
        <strong>32
        </strong> of 
        <strong>49
        </strong>
      </span>
    </li>
    <li class="pagination__item pagination__item--bookend" aria-label="Go to next page">
      <button class="pagination__link">Next page
      </button>
    </li>
  </ul>
</nav>
```
