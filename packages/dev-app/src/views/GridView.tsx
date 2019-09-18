import React from "react";
import { Grid, GridItem } from "@nice-digital/nds-grid";

const GridCellExample = ({ text, children }: any) => (
	<div className="grid-example-item">
		<div>{text}</div>
		{children}
	</div>
);

export const GridView = () => {
	return (
		<>
			<h1>Grid</h1>
			<h2>Basics</h2>
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
			<h2>Custom element</h2>
			<Grid elementType="ul">
				<GridItem cols={6} elementType="li">
					<GridCellExample text="li" />
				</GridItem>
				<GridItem cols={6} elementType="li">
					<GridCellExample text="li" />
				</GridItem>
			</Grid>
			<h2>Nested</h2>
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
			<h2>Gutter widths</h2>
			<h3>Default</h3>
			<Grid>
				<GridItem cols={6}>
					<GridCellExample text="½" />
				</GridItem>
				<GridItem cols={6}>
					<GridCellExample text="½" />
				</GridItem>
			</Grid>
			<h3>Compact</h3>
			<Grid gutter="compact">
				<GridItem cols={6}>
					<GridCellExample text="½" />
				</GridItem>
				<GridItem cols={6}>
					<GridCellExample text="½" />
				</GridItem>
			</Grid>
			<h3>Loose</h3>
			<Grid gutter="loose">
				<GridItem cols={6}>
					<GridCellExample text="½" />
				</GridItem>
				<GridItem cols={6}>
					<GridCellExample text="½" />
				</GridItem>
			</Grid>
			<h3>Gutterless</h3>
			<Grid gutter="none">
				<GridItem cols={12} sm={{ cols: 3, push: 3 }}>
					<GridCellExample text="*" />
				</GridItem>
				<GridItem cols={12} sm={{ cols: 3, push: 3 }}>
					<GridCellExample text="*" />
				</GridItem>
			</Grid>
			<h2>Responsive</h2>
			<h3>Breakpoints</h3>
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
			<h3>Push/pull</h3>
			<Grid horizontalAlignment="center">
				<GridItem cols={12} sm={6} md={{ cols: 3, pull: 1 }}>
					<GridCellExample text="📱" />
				</GridItem>
				<GridItem cols={12} sm={6} md={{ cols: 3, push: 1 }}>
					<GridCellExample text="📱" />
				</GridItem>
			</Grid>
			<h2>Other features</h2>
			<h3>Reversed</h3>
			<Grid reverse>
				<GridItem cols={12} sm={6}>
					<GridCellExample text="first in the source" />
				</GridItem>
				<GridItem cols={12} sm={6}>
					<GridCellExample text="second in the source" />
				</GridItem>
			</Grid>
			<h3>Right</h3>
			<Grid horizontalAlignment="right">
				<GridItem cols={6}>
					<GridCellExample text="right" />
				</GridItem>
			</Grid>
			<h3>Centered</h3>
			<Grid horizontalAlignment="center">
				<GridItem cols={6}>
					<GridCellExample text="center" />
				</GridItem>
			</Grid>
			<h3>Push/pull</h3>
			<Grid horizontalAlignment="center">
				<GridItem cols={3} pull={1}>
					<GridCellExample text="pull 1" />
				</GridItem>
				<GridItem cols={3} push={1}>
					<GridCellExample text="push 1" />
				</GridItem>
			</Grid>
			<h3>Middle</h3>
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
			<h3>Bottom</h3>
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
			<h2>Debug</h2>
			<Grid debug>
				<GridItem cols={6}>
					<GridCellExample text="🐛" />
				</GridItem>
				<GridItem cols={6}>
					<GridCellExample text="🐛" />
				</GridItem>
			</Grid>
		</>
	);
};
