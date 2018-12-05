import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import "./grid.stories.scss";

const GridCellExample = (props) => (
	<div data-g={props.columns}>
		<div className="grid-example-item">
			<div>{props.text}</div>
			{props.children}
		</div>
	</div>);

storiesOf("Grid", module)
	.addDecorator(withKnobs)
	.add("Basics", () => (
		<div>
			<div className="grid">
				<GridCellExample columns="12" text="💯" />
				<GridCellExample columns="12" text="💯" />
				<GridCellExample columns="6" text="½" />
				<GridCellExample columns="6" text="½" />
				<GridCellExample columns="5" text="5/12" />
				<GridCellExample columns="7" text="7/12" />
				<GridCellExample columns="4" text="⅓" />
				<GridCellExample columns="8" text="⅔" />
				<GridCellExample columns="3" text="¼" />
				<GridCellExample columns="9" text="¾" />
				<GridCellExample columns="2" text="⅙" />
				<GridCellExample columns="10" text="5/6" />
			</div>
		</div>
	))
	.add("Nested", () => (
		<div className="grid">
			<GridCellExample columns="6" text="½">
				<div className="grid">
					<GridCellExample columns="6" text="½" />
					<GridCellExample columns="6" text="½">
						<div className="grid">
							<GridCellExample columns="6" text="½" />
							<GridCellExample columns="6" text="½" />
						</div>
					</GridCellExample>
				</div>
			</GridCellExample>
			<GridCellExample columns="6" text="½">
				<div className="grid">
					<GridCellExample columns="6" text="½" />
					<GridCellExample columns="6" text="½" />
				</div>
			</GridCellExample>
		</div>
	))
	.add("Gutter widths", () => (
		<div>
			<h2>Default</h2>
			<div className="grid">
				<GridCellExample columns="6" text="½" />
				<GridCellExample columns="6" text="½" />
			</div>
			<h2>Compact</h2>
			<div className="grid grid--compact">
				<GridCellExample columns="6" text="½" />
				<GridCellExample columns="6" text="½" />
			</div>
			<h2>Loose</h2>
			<div className="grid grid--loose">
				<GridCellExample columns="6" text="½" />
				<GridCellExample columns="6" text="½" />
			</div>
			<h2>Gutterless</h2>
			<div className="grid grid--gutterless">
				<GridCellExample columns="sm:3 push:3" text="*" />
				<GridCellExample columns="sm:3 push:3" text="*" />
			</div>
		</div>
	))
	.add("Responsive", () => (
		<div>
			<h2>Breakpoints</h2>
			<div className="grid">
				<GridCellExample columns="12 sm:6 md:4 lg:3" text="📱" />
				<GridCellExample columns="12 sm:6 md:4 lg:3" text="📱" />
				<GridCellExample columns="12 sm:6 md:4 lg:3" text="📱" />
				<GridCellExample columns="12 sm:6 md:4 lg:3" text="📱" />
				<GridCellExample columns="12 sm:6 md:4 lg:3" text="📱" />
				<GridCellExample columns="12 sm:6 md:4 lg:3" text="📱" />
			</div>
			<h2>Push/pull</h2>
			<div className="grid grid--center">
				<GridCellExample columns="12 sm:6 md:3 md:pull:1" text="📱" />
				<GridCellExample columns="12 sm:6 md:3 md:push:1" text="📱" />
			</div>
		</div>
	))
	.add("Other features", () => (
		<div>
			<h2>Reversed</h2>
			<div className="grid grid--rev">
				<GridCellExample columns="12 sm:6" text="first in the source" />
				<GridCellExample columns="12 sm:6" text="second in the source" />
			</div>
			<h2>Right</h2>
			<div className="grid grid--right">
				<GridCellExample columns="6" text="*" />
			</div>
			<h2>Centered</h2>
			<div className="grid grid--center">
				<GridCellExample columns="6" text="*" />
			</div>
			<h2>Push/pull</h2>
			<div className="grid grid--center">
				<GridCellExample columns="3 pull:1" text="pull" />
				<GridCellExample columns="3 push:1" text="push" />
			</div>
			<h2>Middle</h2>
			<div className="grid grid--middle">
				<GridCellExample columns="6" text={<div>deep<br/>grid</div>} />
				<GridCellExample columns="6" text="middle" />
			</div>
			<h2>Bottom</h2>
			<div className="grid grid--bottom">
				<GridCellExample columns="6" text={<div>deep<br/>grid</div>} />
				<GridCellExample columns="6" text="bottom" />
			</div>
		</div>
	))
	.add("Debugging", () => (
		<div className="container">
			<h2>Debug single grid</h2>
			<div className="grid grid--debug">
				<GridCellExample columns="6" text="🐛" />
				<GridCellExample columns="6" text="🐛" />
			</div>
			<h2>Debug nested grids</h2>
			<div className="debug-grid">
				<div className="grid">
					<GridCellExample columns="6" text="🐛" />
					<GridCellExample columns="6" text="🐛" />
				</div>
				<div className="grid grid--center grid--gutterless">
					<GridCellExample columns="3 pull:1" text="🐞" />
					<GridCellExample columns="3 push:1" text="🐞" />
				</div>
			</div>
		</div>
	));
