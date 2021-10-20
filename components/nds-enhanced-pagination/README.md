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

const mapPageNumberToHref = (pageNumber: number) => `#${pageNumber}`;

<EnhancedPagination
		currentPage={32}
		mapPageNumberToHref={mapPageNumberToHref}
		totalPages={49}
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

##### mapPageNumberToHref
- Type: function (required)

Function to map a page number to a destination (e.g an href)
```
<EnhancedPagination
		currentPage={32}
		mapPageNumberToHref={mapPageNumberToHref}
		totalPages={49}
/>
```

##### elementType

- Type: `React.ElementType`
- Default: `a`

The element type for the pagination is by default an anchor 

If you wish you can change this to something else, for example a button (in which case you need to pass an onClick prop instead of a destination), or a custom elementType.

For custom elementTypes that use a method other than `href` for their destination, you should pass that in the method prop eg "to" for a Gatsby `Link` elementType.

```jsx
const mapPageNumberToHref = (pageNumber: number) => `#${pageNumber}`;

<EnhancedPagination
	currentPage={32}
    elementType={({ children, ...props }) => (
		<Link scroll={false} {...props}>
			<a>{children}</a>
		</Link>
	)}
	method="href"
	mapPageNumberToHref={mapPageNumberToHref}
	totalPages={49}
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
<nav role="navigation" aria-label="Pagination" class="pagination ">
  <ol class="pagination__list">
    <li class="pagination__item pagination__item--bookend">
      <a class="pagination__link" href="#15">Previous page
      </a>
    </li>
    <li class="pagination__item">
      <a aria-label="Go to page 1" class="pagination__link" href="#1">1
      </a>
    </li>
    <li class="pagination__item">
      <span class="pagination__inactive">…
      </span>
    </li>
    <li class="pagination__item">
      <a aria-label="Go to page 14" class="pagination__link" href="#14">14
      </a>
    </li>
    <li class="pagination__item">
      <a aria-label="Go to page 15" class="pagination__link" href="#15">15
      </a>
    </li>
    <li class="pagination__item pagination__item--current" aria-current="true">
      <span class="pagination__inactive">
        <span class="visually-hidden">Current page 
        </span>16
      </span>
    </li>
    <li class="pagination__item">
      <a aria-label="Go to page 17" class="pagination__link" href="#17">17
      </a>
    </li>
    <li class="pagination__item">
      <a aria-label="Go to page 18" class="pagination__link" href="#18">18
      </a>
    </li>
    <li class="pagination__item">
      <span class="pagination__inactive">…
      </span>
    </li>
    <li class="pagination__item">
      <a aria-label="Go to page 49" class="pagination__link" href="#49">49
      </a>
    </li>
    <li class="pagination__item pagination__item--count">
      <span>Page 
        <strong>16
        </strong> of 
        <strong>49
        </strong>
      </span>
    </li>
    <li class="pagination__item pagination__item--bookend">
      <a class="pagination__link" href="#17">Next page
      </a>
    </li>
  </ol>
</nav>

```
