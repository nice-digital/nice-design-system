# `@nice-digital/nds-maintain-ratio`

> Component to maintain the ratio of a contained element

- [`@nice-digital/nds-maintain-ratio`](#nice-digitalnds-maintain-ratio) - [Installation](#installation) - [Usage](#usage) - [React](#react) - [Props](#props) - [SCSS](#scss) - [HTML](#html)

## Installation

Install Node, and then:

```sh
npm i @nice-digital/nds-maintain-ratio --save
```

## Usage

### React

Import the `MaintainRatio` component from the package and use within JSX:

```jsx
import React from "react";
import { MaintainRatio } from "@nice-digital/nds-maintain-ratio";

<MaintainRatio ratio="16:9">
	<img src="image.jpg" />
</MaintainRatio>;
```

> Note: The React component automatically imports the SCSS, so there's no need to import the SCSS directly yourself.

#### Props

##### ratio

- Type: `string`

The ratio to maintain. Defaults to `16:9` if not supplied. Can be one of `16:9`, `21:9`, `4:3`, `square` and `1:1`.

```js
<MaintainRatio ratio="4:3">
	<img src="image.jpg" />
</MaintainRatio>
```

##### className

- Type: `string`

Any additional class to apply to the container.

```js
<MaintainRatio className="mt--d">
	<img src="image.jpg" />
</MaintainRatio>
```

##### stretchFirstChild

- Type: `boolean`

Apply CSS to the first child of the component to make it fill the container.

```js
<MaintainRatio stretchFirstChild={true}>
	<img src="image.jpg" />
</MaintainRatio>
```

##### children

- Type: `React.ReactNode`

The content to maintain the ratio of. Expects, but isn't limited to, a single element. In most cases would be the `video` or `img` to maintain the aspect of.

```js
<MaintainRatio>
	<video src="my-video.mp4" contols />
</MaintainRatio>
```

### SCSS

If you're not using [React](#react), then import the SCSS directly into your application by:

```scss
@forward '@nice-digital/nds-maintain-ratio/scss/maintain-ratio';
```

### HTML

If you're not using [React](#react), then include the [SCSS as above](#scss) and use the HTML:

```html
<div class="maintain-ratio maintain-ratio--16-9 maintain-ratio--stretch">
	<img src="image.jpg" />
</div>
```
