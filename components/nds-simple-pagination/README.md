# `@nice-digital/nds-simple-pagination`

> Simple pagination component for the NICE Design System

- [`@nice-digital/nds-simple-pagination`](#nice-digitalnds-simple-pagination) - [Installation](#installation) - [Usage](#usage) - [React](#react) - [Props](#props) - [SCSS](#scss) - [HTML](#html)

## Installation

Install Node, and then:

```sh
npm i @nice-digital/nds-simple-pagination --save
```

## Usage

### React

Import the `SimplePagination` component from the package and use within JSX:

```jsx
import React from "react";
import { SimplePagination } from "@nice-digital/nds-simple-pagination";

<SimplePagination totalPages={3} currentPage={1} nextPageLink={{destination: "#next", elementType: "a"}} />
```

> Note: The React component automatically imports the SCSS, so there's no need to import the SCSS directly yourself.

#### Props

##### currentPage

- Type:`number` (required)

The current page number you wish to be displayed.

##### totalPages

- Type: `number`

The total pages you want to display. If this is omitted, only the current page will be displayed.

##### nextPageLink

- Type: `PageLink` | `null`
- Default: `null`

An object to describe the destination, element or action you want to supply to the 'next' pagination link.

##### previousPageLink

- Type: `PageLink` | `null`
- Default: `null`

An object to describe the destination, element or action you want to supply to the 'previous' pagination link.

###### PageLink.destination

- Type: `string`

A string to represent the destination if you're supplying a traditional "link". If no `elementType` is provided, it will default to an anchor tag, and the destination will default to an href attribute. If a custom element is provided, the destination will be used as a `to` property.

###### PageLink.elementType

- Type: `React.elementType`
- Default: `"a"`

Here you can pass a custom link type such as `Link` from `react-router` or `gatsby`. If no `elementType` is provided, it will default to an anchor tag.

### SCSS

If you're not using [React](#react), then import the SCSS directly into your application by:

```scss
@import "~@nice-digital/nds-simple-pagination/scss/simple-pagination";
```

### HTML

If you're not using [React](#react), then include the [SCSS as above](#scss) and use the HTML:

```html
<div class="simple-pagination">
    <p>
        Page <b>2</b> of <b>4</b>
    </p>
    <nav aria-label="Pagination">
        <span class="simple-pagination__link-wrapper">
            <a 
                class="simple-pagination__link" 
                aria-label="Go to next page" 
                href="#next">
                Next page
            </a>
        </span>
        <span class="simple-pagination__link-wrapper">
            <a 
                class="simple-pagination__link" 
                aria-label="Go to previous page" 
                href="#previous">
                Previous page
            </a>
        </span>
    </nav>
</div>
```
