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
      - [displayTitleAsHeading](#displaytitleasheading)
      - [headingLevel (optional)](#headinglevel-optional)
  - [`AccordionGroup`](#accordiongroup)
    - [`AccordionGroup` Props](#accordiongroup-props)
      - [children](#children-1)
      - [toggleText](#toggletext)
      - [onToggle](#ontoggle)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

Install Node, and then:

```sh
npm i @nice-digital/nds-accordion --save
```

## Usage

This component is not intended for non-React environments.  Please contact the design system project team through necessary channels for guidance under these circumstances. We will not be providing snippets for html, SCSSor JavaScript for this reason.

If you're using a controlled group of Accordions. Import both the `Accordion` and `AccordionGroup` components from the package and use within the TSX as below:

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

If you're using a single accordion, import the `Accordion` component and use within the TSX, as below.

```jsx
import React from "react";
import { Accordion } from "@nice-digital/nds-accordion";

<Accordion title="Accordion title">
  <p>Accordion content </p>
</Accordion>

/**
 * ...more content between Accordions
*/

<Accordion title="Accordion caution title" variant="caution">
  <p>Caution accordion content</p>
</Accordion>
```

> Note: The React component automatically imports the SCSS, so there's no need to import the SCSS directly yourself.


### Accordion

The `Accordion` can be used as a standalone component or within an AccordionGroup component.

#### `Accordion` Props

##### title

- Type: `string | number`
- Required: Yes

The title of the accordion.  This is nested text within the accordions button.

```js
<Accordion title="An accordion title">
	<p>This is the accordions hidden content. Hidden by default.</p>
</Accordion>
```

##### open

- Type: `boolean`
- Required: No

The default state of the the accordion being open or closed.

##### showLabel

- Type: `string`
- Required: No

The label of the accordion toggle label when the is accordion closed.

```js
<Accordion title="An accordion title" showLabel="Show the content">
	<p>This is the accordions hidden content. Hidden by default.</p>
</Accordion>
```

##### hideLabel

- Type: `string`
- Required: No

The label of the accordion toggle label when the is accordion open.

```js
<Accordion title="An accordion title" hideLabel="Hide the content">
  <p>This is the accordions hidden content. Hidden by default.</p>
</Accordion>
```

##### children

- Type: `React.ReactNode`
- Required: Yes

The body of the `Accordion` component, which is hidden by default.

```js
<Accordion title="An accordion title">
  <p>This is the accordions child content. Hidden by default.</p>
</Accordion>
```

##### variant

- Type: `"caution"` | `"default"`
- Required: No
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
- Required: No
- Default: `""`

Any additional classes that you would like applied to the `<Accordion>` component, or to target it's hidden content children.
Test custom styles thoroughly to ensure they don't override critical component styles inadvertently.

```js
<Accordion title="An accordion title" className={style.StoryAccordion}>
  <p>This is the accordions hidden content. Hidden by default.</p>
</Accordion>
```

##### displayTitleAsHeading

- Type: `boolean`
- Required: No
- Default: `false`

If `true` the title will be wrapped in a heading element (`h2`,`h3`,`h4`,`h5`, or `h6`), as specified by the `headingLevel` prop.  
If `false` the title is wrapped in a `div` element.
If `true` and a `headingLevel` is not supplied, the title will be wrapped with a `div` by default.

For headings to wrap the title, both `displayTitleAsHeading` and `headingLevel` props need to be provided

##### headingLevel (optional)

- Type: `number | string | undefined`
- Required: Only if the `displayTitleAsHeading` is `true`

Specifies the heading level level to be used around the accordions button. This prop is only applicable when `displayTitleAsHeading` is true.
If `displayTitleAsHeading` is set to `false` and a `headingLevel` is supplied, the title will be wrapped with a `div` by default.
If a value other than `2, 3, 4, 5, 6` or `"2", "3", "4", "5", "6"` is provided, the title will be wrapped with a `div` by default.
If a value other than `2, 3, 4, 5, 6` or `"2", "3", "4", "5", "6"` is provided, the title will be wrapped with a `div` by default.

```js
// Correct
<Accordion title="An accordion title" displayTitleAsHeading={true} headingLevel={2}>
  <p>This is the accordions hidden content. Hidden by default.</p>
</Accordion>

// Incorrect
<Accordion title="An accordion title" displayTitleAsHeading={false} headingLevel={2}>
  <p>This is the accordions hidden content. Hidden by default.</p>
</Accordion>
```


```js
// Correct
<Accordion title="My Accordion" displayTitleAsHeading={true} headingLevel={3}>
  <p>Content goes here</p>
</Accordion>

// Incorrect
<Accordion title="My Accordion" displayTitleAsHeading={true} headingLevel={7}>
  <p>Content goes here</p>
</Accordion>
```

### `AccordionGroup`

Represents a group of `Accordions` with state to control toggling of all grouped `Accordions`.

#### `AccordionGroup` Props

<!-- markdownlint-disable-next-line -->
##### children

- Type: `React.ReactNode`
- Required: Yes

The child `Accordion` components to be rendered inside the `AccordionGroup`

##### toggleText

- Type: `function`
- Required: No

A function that returns the text for the group's toggle button based on whether the group is open or closed. 
Defaults to a`defaultToggleTextFn` function that returns "Show all sections" or "Hide all sections" based on the `isOpen` state.

##### onToggle

- Type: `function`
- Required: No

Is and optional prop that provides a callback function to be called whenever the `AccordionGroup` toggle button is clicked.
