/* eslint react/prop-types: 0 */
import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import { PageHeader } from "@nice-digital/nds-page-header";
import { Grid, GridItem } from "@nice-digital/nds-grid";

import "./grid.stories.scss";

const GridCellExample = ({ text, children }) => (
	<div className="grid-example-item">
		<div>{text}</div>
		{children}
	</div>
);

storiesOf("Foundations/Grid", module)
	.addDecorator(withKnobs)
	.add("Basics", () => (
		<>
			<PageHeader
				heading="Basics"
				lead={
					<>
						Use the <code>Grid</code> and <code>GridItem</code> components to
						build a mobile-first 12 column grid.
					</>
				}
			/>
			<Grid>
				<GridItem cols={12}>
					<GridCellExample text="💯" />
				</GridItem>
				<GridItem cols={12}>
					<GridCellExample text="💯" />
				</GridItem>
				<GridItem cols={6}>
					<GridCellExample text="½" />
				</GridItem>
				<GridItem cols={6}>
					<GridCellExample text="½" />
				</GridItem>
				<GridItem cols={5}>
					<GridCellExample text="5/12" />
				</GridItem>
				<GridItem cols={7}>
					<GridCellExample text="7/12" />
				</GridItem>
				<GridItem cols={4}>
					<GridCellExample text="⅓" />
				</GridItem>
				<GridItem cols={8}>
					<GridCellExample text="⅔" />
				</GridItem>
				<GridItem cols={3}>
					<GridCellExample text="¼" />
				</GridItem>
				<GridItem cols={9}>
					<GridCellExample text="¾" />
				</GridItem>
				<GridItem cols={2}>
					<GridCellExample text="⅙" />
				</GridItem>
				<GridItem cols={10}>
					<GridCellExample text="5/6" />
				</GridItem>
			</Grid>
		</>
	))
	.add("Custom elements", () => (
		<>
			<PageHeader
				heading="Custom elements"
				lead={
					<>
						Use the <code>elementType</code> prop to override the rendered DOM
						element for semantic grids.
					</>
				}
			/>
			<Grid elementType="ul">
				<GridItem cols={6} elementType="li">
					<GridCellExample text="li" />
				</GridItem>
				<GridItem cols={6} elementType="li">
					<GridCellExample text="li" />
				</GridItem>
			</Grid>
		</>
	))
	.add("Nested", () => (
		<>
			<PageHeader
				heading="Nested grids"
				lead="Nest grids infinitely within each other"
			/>
			<Grid>
				<GridItem cols={6}>
					<GridCellExample text="½">
						<Grid>
							<GridItem cols={6}>
								<GridCellExample text="½" />
							</GridItem>
							<GridItem cols={6}>
								<GridCellExample text="½">
									<Grid>
										<GridItem cols={6}>
											<GridCellExample text="½" />
										</GridItem>
										<GridItem cols={6}>
											<GridCellExample text="½" />
										</GridItem>
									</Grid>
								</GridCellExample>
							</GridItem>
						</Grid>
					</GridCellExample>
				</GridItem>
				<GridItem cols={6}>
					<GridCellExample text="½">
						<Grid>
							<GridItem cols={6}>
								<GridCellExample text="½" />
							</GridItem>
							<GridItem cols={6}>
								<GridCellExample text="½" />
							</GridItem>
						</Grid>
					</GridCellExample>
				</GridItem>
			</Grid>
		</>
	))
	.add("Gutter widths", () => (
		<>
			<PageHeader
				heading="Gutter"
				lead={
					<>
						Use the <code>gutter</code> prop on <code>Grid</code> to override
						the gap between grid items.
					</>
				}
			/>
			<h2>Default</h2>
			<Grid>
				<GridItem cols={6}>
					<GridCellExample text="½" />
				</GridItem>
				<GridItem cols={6}>
					<GridCellExample text="½" />
				</GridItem>
			</Grid>
			<h2>Compact</h2>
			<Grid gutter="compact">
				<GridItem cols={6}>
					<GridCellExample text="½" />
				</GridItem>
				<GridItem cols={6}>
					<GridCellExample text="½" />
				</GridItem>
			</Grid>
			<h2>Loose</h2>
			<Grid gutter="loose">
				<GridItem cols={6}>
					<GridCellExample text="½" />
				</GridItem>
				<GridItem cols={6}>
					<GridCellExample text="½" />
				</GridItem>
			</Grid>
			<h2>Gutterless</h2>
			<Grid gutter="none">
				<GridItem cols={12} sm={{ cols: 3, push: 3 }}>
					<GridCellExample text="*" />
				</GridItem>
				<GridItem cols={12} sm={{ cols: 3, push: 3 }}>
					<GridCellExample text="*" />
				</GridItem>
			</Grid>
		</>
	))
	.add("Responsive", () => (
		<>
			<PageHeader
				heading="Responsive"
				lead={
					<>
						Use the <code>xs</code>, <code>sm</code>, <code>md</code>,{" "}
						<code>lg</code> and <code>xl</code> props on <code>GridItem</code>{" "}
						to override the columns across breakpoints.
					</>
				}
			/>
			<h2>Breakpoints</h2>
			<Grid>
				<GridItem cols={12} sm={6} md={4} lg={3}>
					<GridCellExample text="📱" />
				</GridItem>
				<GridItem cols={12} sm={6} md={4} lg={3}>
					<GridCellExample text="📱" />
				</GridItem>
				<GridItem cols={12} sm={6} md={4} lg={3}>
					<GridCellExample text="📱" />
				</GridItem>
				<GridItem cols={12} sm={6} md={4} lg={3}>
					<GridCellExample text="📱" />
				</GridItem>
			</Grid>
			<h2>Push/pull</h2>
			<Grid horizontalAlignment="center">
				<GridItem cols={12} sm={6} md={{ cols: 3, pull: 1 }}>
					<GridCellExample text="📱" />
				</GridItem>
				<GridItem cols={12} sm={6} md={{ cols: 3, push: 1 }}>
					<GridCellExample text="📱" />
				</GridItem>
			</Grid>
		</>
	))
	.add("Other features", () => (
		<>
			<PageHeader
				heading="Other features"
				lead={<>Use the other grid features to create interesting layouts.</>}
			/>
			<h2>Reversed</h2>
			<Grid reverse>
				<GridItem cols={12} sm={6}>
					<GridCellExample text="first in the source" />
				</GridItem>
				<GridItem cols={12} sm={6}>
					<GridCellExample text="second in the source" />
				</GridItem>
			</Grid>
			<h2>Right</h2>
			<Grid horizontalAlignment="right">
				<GridItem cols={6}>
					<GridCellExample text="right" />
				</GridItem>
			</Grid>
			<h2>Centered</h2>
			<Grid horizontalAlignment="center">
				<GridItem cols={6}>
					<GridCellExample text="center" />
				</GridItem>
			</Grid>
			<h2>Push/pull</h2>
			<Grid horizontalAlignment="center">
				<GridItem cols={3} pull={1}>
					<GridCellExample text="pull 1" />
				</GridItem>
				<GridItem cols={3} push={1}>
					<GridCellExample text="push 1" />
				</GridItem>
			</Grid>
			<h2>Middle</h2>
			<Grid verticalAlignment="middle">
				<GridItem cols={6}>
					<GridCellExample
						text={
							<div>
								deep
								<br />
								grid
							</div>
						}
					/>
				</GridItem>
				<GridItem cols={6}>
					<GridCellExample text="middle" />
				</GridItem>
			</Grid>
			<h2>Bottom</h2>
			<Grid verticalAlignment="bottom">
				<GridItem cols={6}>
					<GridCellExample
						text={
							<div>
								deep
								<br />
								grid
							</div>
						}
					/>
				</GridItem>
				<GridItem cols={6}>
					<GridCellExample text="bottom" />
				</GridItem>
			</Grid>
		</>
	))
	.add("Debugging", () => (
		<>
			<PageHeader
				heading="Debugging"
				lead={
					<>
						Use the <code>debug</code> prop on <code>Grid</code> to add coloured
						outlines for debugging grids and grid items.
					</>
				}
			/>
			<Grid debug>
				<GridItem cols={6}>
					<GridCellExample text="🐛" />
				</GridItem>
				<GridItem cols={6}>
					<GridCellExample text="🐛" />
				</GridItem>
			</Grid>
		</>
	));
