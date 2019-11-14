import React from "react";
import { Header, Footer } from "@nice-digital/global-nav";
import { Grid, GridItem } from "@nice-digital/nds-grid";
import "./main.scss";

interface ILayout {
	children: React.ReactNode;
}

const Layout = (props: ILayout): React.ReactElement => (
	<>
		<Header search={false} />
		<div className="container">
			<Grid>
				<GridItem cols={12}>{props.children}</GridItem>
			</Grid>
		</div>
		<Footer />
	</>
);

export default Layout;
