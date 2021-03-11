import React from "react";
import { Breadcrumbs, Breadcrumb } from "@nice-digital/nds-breadcrumbs";

const monkey = null;

export const BreadcrumbsView = () => {
	return (
		<Breadcrumbs>
			<Breadcrumb to="https://www.nice.org.uk">Hello</Breadcrumb>
			<Breadcrumb>There</Breadcrumb>
			<Breadcrumb>How</Breadcrumb>
			<Breadcrumb>Are</Breadcrumb>
			<Breadcrumb>You</Breadcrumb>
			{monkey && <Breadcrumb>Monkey</Breadcrumb>}
		</Breadcrumbs>
	);
};
