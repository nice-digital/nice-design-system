import React from "react";
import { Header, Footer } from "@nice-digital/global-nav";
import "../main.scss";

interface ILayout {
	children: React.ReactNode;
}

const Wrapper = (props: ILayout): React.ReactElement => (
	<>
		<Header search={false} />
		<div className="container pt--e">{props.children}</div>
		<Footer />
	</>
);

export default Wrapper;
