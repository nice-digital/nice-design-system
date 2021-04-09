import React from "react";
import { Container } from "@nice-digital/nds-grid";
import { Header, Footer } from "@nice-digital/global-nav";
import "../../styles/main.scss";

interface ILayout {
	children: React.ReactNode;
	className?: string;
}

const Wrapper = (props: ILayout): React.ReactElement => {
	return (
		<div {...props}>
			<Header search={false} />
			<Container>
				{props.children}
			</Container>
			<Footer />
		</div>
	);
};

export default Wrapper;
