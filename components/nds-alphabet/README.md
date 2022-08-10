# `@nice-digital/nds-alphabet`

> Alphabet component for the NICE Design System

## Installation

Install Node, and then:

```sh
npm i @nice-digital/nds-alphabet --save
```

## Usage

### React

Import the `Alphabet` and `Letter` components from the package and use within JSX:

```jsx
import React from "react";
import { Alphabet, Letter } from "@nice-digital/nds-alphabet";

const allLetters = "abcdefghijklmnopqrstuvwxyz".split("");

<Alphabet>
	{allLetters.map(letter => (
		<Letter key={letter} to={`#${letter}`} label={`Letter ${letter}`}>
			{letter.toUpperCase()}
		</Letter>
	))}
</Alphabet>

```

> Note: The React component automatically imports the SCSS, so there's no need to import the SCSS directly yourself.

#### Props (Alphabet)

##### chunky

- Type `boolean` (default: false)

Whether to render the alphabet in its chunky (i.e. large) variant. This will
get passed to its children as a modifier.

```js
<Alphabet chunky>
	{children}
</Alphabet>
```

##### id 

- Type `string` (default: "a-to-z")

The id to give the generated `<ol>` element. Defaults to "a-to-z" if not specified

```js
<Alphabet id="test-id">
	{children}
</Alphabet>
```

##### children

- Type: `React.ReactNode`

As the Alphabet component renders an `ol` element, it must have at least one `<li>`
child.

```js
<Alphabet>
	<li>Item one</li>
	<li>Item two</li>
	<li>Item three</li>
</Alphabet>
```

#### Props (Letter)

##### to

- Type: `string`

If specified, the link destination. If not specified, a span is rendered instead.

##### label

- Type: `string`

Creates an `aria-label` attribute on the generated element.

##### elementType

- Type: `Element` (default: `a`)

The element type used to render the component; can be a React component.

### SCSS

If you're not using [React](#react), then import the SCSS directly into your application by:

```scss
@forward '@nice-digital/nds-alphabet/scss/alphabet';
```

### HTML

If you're not using [React](#react), then include the [SCSS as above](#scss) and use the HTML:


#### Standard variant
```html
<ol class="alphabet" id="a-to-z">
  <li class="alphabet__letter"><a href="#a" aria-label="Letter a">A</a></li>
  <li class="alphabet__letter"><a href="#b" aria-label="Letter b">B</a></li>
  <li class="alphabet__letter"><a href="#c" aria-label="Letter c">C</a></li>
    ...
  <li class="alphabet__letter"><a href="#x" aria-label="Letter x">X</a></li>
  <li class="alphabet__letter"><a href="#y" aria-label="Letter y">Y</a></li>
  <li class="alphabet__letter"><a href="#z" aria-label="Letter z">Z</a></li>
</ol>
```

#### Chunky variant
```html
<ol class="alphabet alphabet--chunky" id="a-to-z">
  <li class="alphabet__letter alphabet__letter--chunky"><a href="#a" aria-label="Letter a">A</a></li>
  <li class="alphabet__letter alphabet__letter--chunky"><a href="#b" aria-label="Letter b">B</a></li>
  <li class="alphabet__letter alphabet__letter--chunky"><a href="#c" aria-label="Letter c">C</a></li>
    ...
  <li class="alphabet__letter alphabet__letter--chunky"><a href="#x" aria-label="Letter x">X</a></li>
  <li class="alphabet__letter alphabet__letter--chunky"><a href="#y" aria-label="Letter y">Y</a></li>
  <li class="alphabet__letter alphabet__letter--chunky"><a href="#z" aria-label="Letter z">Z</a></li>
</ol>
```

#### No links
```html
<ol class="alphabet" id="a-to-z">
  <li class="alphabet__letter"><span aria-label="Letter a">A</span></li>
  <li class="alphabet__letter"><span aria-label="Letter b">B</span></li>
  <li class="alphabet__letter"><span aria-label="Letter c">C</span></li>
    ...
  <li class="alphabet__letter"><span aria-label="Letter x">X</span></li>
  <li class="alphabet__letter"><span aria-label="Letter y">Y</span></li>
  <li class="alphabet__letter"><span aria-label="Letter z">Z</span></li>
</ol>
```
