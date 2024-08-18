# `@nice-digital/nds-accordion`
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
Accordion component for the NICE Design System

- [Installation](#installation)
- [Usage](#usage)
  - [Accordion](#accordion)
    - [`Accordion` Props](#accordion-props)
      - [title](#title)
      - [open](#open)
      - [showLabel](#showlabel)
      - [hideLabel](#hidelabel)
      - [children](#children)
      - [variant](#variant)
      - [className](#classname)
      - [headingLevel (optional)](#headinglevel-optional)
  - [`AccordionGroup`](#accordiongroup)
    - [`AccordionGroup` Props](#accordiongroup-props)
      - [children](#children-1)
      - [toggleText](#toggletext)
      - [onToggle](#ontoggle)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->
Accordion component for the NICE Design System

## Installation

Install Node, and then:

```sh
npm i @nice-digital/nds-accordion --save
```

## Usage

This is a React controlled component, therefore we will not be providing snippets for html, scss or JavaScript.  If a non-React component is required for your project, please contact the design system project team through necessary channels for guidance.

If you're using a controlled group of Accordions. Import both the `Accordion` and `AccordionGroup` components from the package and use within TSX:

```jsx
import React from "react";
import { Accordion, AccordionGroup } from "@nice-digital/nds-accordion";

<AccordionGroup>
  <Accordion key="1" title="Accordion 1">
    Accordion 1 body
  </Accordion>
  <Accordion key="2" title="Accordion 2">
    Accordion 2 body
  </Accordion>
</AccordionGroup>
```

If you're using a single accordion, import the `Accordion` component and use within the TSX.

```jsx
import React from "react";
import { Accordion } from "@nice-digital/nds-accordion";

<Accordion title="Accordion title">
  <p>Accordion content </p>
</Accordion>

<Accordion title="Accordion caution title" variant="caution">
  <p>Caution accordion content</p>
</Accordion>
```

> Note: The React component automatically imports the SCSS, so there's no need to import the SCSS directly yourself.


### Accordion

The `Accordion` can be used as a standalone component or within an AccordionGroup component.

#### `Accordion` Props

##### title

- Type: `string`

The title of the accordion.  This is nested text within the accordions button.

```js
<Accordion title="An accordion title">
	<p>This is the accordions hidden content. Hidden by default.</p>
</Accordion>
```

##### open

- Type: `boolean`

The default state of the details element and whether the accordion is open and closed.

##### showLabel

- Type: `string`

The label of the accordion toggle label when the is accordion closed.

```js
<Accordion title="An accordion title" showLabel="Show the content">
	<p>This is the accordions hidden content. Hidden by default.</p>
</Accordion>
```

##### hideLabel

- Type: `string`

The label of the accordion toggle label when the is accordion open.

```js
<Accordion title="An accordion title" hideLabel="Hide the content">
  <p>This is the accordions hidden content. Hidden by default.</p>
</Accordion>
```

##### children

- Type: `React.ReactNode`

The body of the `Accordion` component hidden content.

```js
<Accordion title="An accordion title" hideLabel="Hide the content">
  <p>This is the accordions child content. Hidden by default.</p>
</Accordion>
```

##### variant

- Type: `"caution"` | `"default"`
- Default: `"default"`

The variant of the accordion. Leave blank for the default variant. 
When caution is provided it displays a `WarningIcon` that preceeds the accordion title.

```js
<Accordion title="An accordion title" variant="caution">
  <p>This is the accordions hidden content. Hidden by default.</p>
</Accordion>
```

##### className

- Type: `string`
- Default: `""`

Any additional classes that you would like applied to the `<Accordion>` component, or to target it's hidden content children.

```js
<Accordion title="An accordion title" className={style.StoryAccordion}>
  <p>This is the accordions hidden content. Hidden by default.</p>
</Accordion>
```

##### headingLevel (optional)

- Type: `2 | 3 | 4 | 5 | 6`  

This is an optional field, that sets a wrapping heading level element around the accordions button. The nested button contains the title prop text.

As this is an optional field, it carries no default value. If no headingLevel is provided, it defaults to a button which contains the title prop text.

No cascade for accordion hidden content headings is currently available in this component. This is due to the dynamic nature of the accordions hidden content and where that content could be generated.  It is currently up to editors to decide on correct, cascading heading levels for the accordions hidden content.

```js
<Accordion title="An accordion title" headingLevel={2}>
  <p>This is the accordions hidden content. Hidden by default.</p>
</Accordion>
```

### `AccordionGroup`

Represents a group of `Accordions` with state to control toggling of all grouped `Accordions`.

#### `AccordionGroup` Props

<!-- markdownlint-disable-next-line -->
##### children

- Type: `React.ReactNode`

The child `Accordion` components to be rendered inside the `AccordionGroup`

##### toggleText

- Type: `function`

Is a prop for an optional function that takes a boolean `isOpen` parmameter and returns a `ReactNode`.  

It allows us to update the wording of the `AccordionGroup` toggle button text based on the `isOpen` state.

Defaults to a`defaultToggleTextFn` function that returns "Show all sections" or "Hide all sections" based on the `isOpen` state.

##### onToggle

- Type: `function`

Is and optional prop that provides a callback function to be called whenever the `AccordionGroup` toggle button is clicked.
