# `@nice-digital/nds-table`

> Basic table styling for the NICE design system

- [`@nice-digital/nds-table`](#nice-digitaltable) - [Installation](#installation) - [Usage](#usage) - [React](#react) - [Props](#props) - [SCSS](#scss) - [HTML](#html)

## Installation

Install Node, and then:

```sh
npm i @nice-digital/nds-table --save
```

## Usage

### React

Import the `Table` component from the package and use within JSX:

```jsx
import React from "react";
import { Table } from "@nice-digital/nds-table";

<Table>
  <tr>
     <td>Data!</td>
  </tr>
</Table>
```

> Note: The React component automatically imports the SCSS, so there's no need to import the SCSS directly yourself.

#### Props

##### children

- Type: `React.node` (required)

The component will only return the surrounding table tag. The rest of the table must be supplied as children.

```jsx
<Table>
  <tr>
     <td>Data!</td>
  </tr>
</Table>
```

##### className

- Type: `string`

Any additional classes you would like cascading to the `table` tag.

### SCSS

If you're not using [React](#react), then import the SCSS directly into your application by:

```scss
@forward '@nice-digital/nds-table/scss/table';
```

### HTML

If you're not using [React](#react), then include the [SCSS as above](#scss) and use the HTML:

```html
<table class="table">
  <tbody>
    <tr>
      <td>Data!</td>
    </tr>
  </tbody>
</table>
```
