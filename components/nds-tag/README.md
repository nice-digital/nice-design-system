# `@nice-digital/nds-tag`

> Tag component for the NICE Design System

- [`@nice-digital/nds-tag`](#nice-digitaltag) - [Installation](#installation) - [Usage](#usage) - [React](#react) - [Props](#props) - [SCSS](#scss) - [HTML](#html)

## Installation

Install Node, and then:

```sh
npm i @nice-digital/nds-tag --save
```

## Usage

### React

Import the `Tag` component from the package and use within JSX:

```jsx
import React from "react";
import { Tag } from "@nice-digital/nds-tag";

<Tag success>Tag content</Tag>;
<Tag success flush>
	Tag content
</Tag>;
```

#### Props

##### children

- Type: `ReactNode` (required)

The body content of the tag. Can receive any markup.

```jsx
<Tag>
	<p>Here is some addition content.</p>
</Tag>
```

##### alpha

- Type: `boolean`

Property to denote alpha service phase. Adds class to apply styling.

```jsx
<Tag alpha>alpha</Tag>
```

##### beta

- Type: `boolean`

Property to denote beta service phase. Adds class to apply styling.

```jsx
<Tag beta>beta</Tag>
```

##### live

- Type: `boolean`

Property to denote live service phase. Adds class to apply styling.

```jsx
<Tag live>live</Tag>
```

##### isNew

- Type: `boolean`

Property to denote the status of guidance. Adds class to apply styling.

```jsx
<Tag isNew>isNew</Tag>
```

##### consultation

- Type: `boolean`

Property to denote the status of guidance. Adds class to apply styling.

```jsx
<Tag consultation>consultation</Tag>
```

##### updated

- Type: `boolean`

Property to denote the status of guidance. Adds class to apply styling.

```jsx
<Tag updated>updated</Tag>
```

##### impact

- Type: `boolean`

Increases size, use sparingly, e.g. within phase banners. Adds class to apply styling.

```jsx
<Tag impact>impact</Tag>
```

##### flush

- Type: `boolean`

Reduces horizontal padding inside tag. Adds class to apply styling.

```jsx
<Tag flush>flush</Tag>
```

##### outline

- Type: `boolean`

Creates a tag with a border. Adds class to apply styling.

```jsx
<Tag outline>outline</Tag>
```

##### caution

- Type: `boolean`

Applies an caution state. Adds class to apply styling.

```jsx
<Tag caution>caution</Tag>
```

##### info

- Type: `boolean`

Applies an info state. Adds class to apply styling.

```jsx
<Tag info>info</Tag>
```

##### error

- Type: `boolean`

Applies an error state. Adds class to apply styling.

```jsx
<Tag error>error</Tag>
```

##### success

- Type: `boolean`

Applies an success state. Adds class to apply styling.

```jsx
<Tag success>success</Tag>
```

#### remove

- Type: `ReactNode`

An element to render as a the button/link if this is a removeable tag. Usually an anchor or a custom `Link` component when using a router. It will get passed a `className` prop of `tag__remove` automatically. It's up to you to provide relevant visually hidden link text for the anchor. See the example below:

```jsx
<Tag
	outline
	remove={
		<a href="#" className="test">
			<span className="visually-hidden">Remove this tag</span>
		</a>
	}
>
	Some tag text
</Tag>
```

##### other props

Other props will be cascaded to the containing span.

```jsx
<Tag data-hidden="true">Other props</Tag>
```

### SCSS

If you're not using [React](#react), then import the SCSS directly into your application by:

```scss
@forward '@nice-digital/nds-tag/scss/tag';
```

### HTML

If you're not using [React](#react), then include the [SCSS as above](#scss) and use the HTML:

```html
<span class="tag tag--flush tag--alpha">Alpha</span>
```
