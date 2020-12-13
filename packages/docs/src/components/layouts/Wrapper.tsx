import React from "react";
import classnames from "classnames";
import { Header, Footer } from "@nice-digital/global-nav";
import "../../styles/main.scss";

interface ILayout {
	children: React.ReactNode;
	className?: string;
}

const Wrapper = (props: ILayout): React.ReactElement => {
	const classes = props.className
		? classnames("container", props.className)
		: "container";
	return (
		<>
			<Header search={false} />
			<div className={classes}>{props.children}</div>
			<Footer />
		</>
	);
};

export default Wrapper;
