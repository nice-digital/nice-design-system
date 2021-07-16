import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumbs, Breadcrumb } from "@nice-digital/nds-breadcrumbs";

const monkey = null;

export const BreadcrumbsView = () => {
	return (
		<Breadcrumbs>
			<Breadcrumb to="https://www.nice.org.uk">Hello</Breadcrumb>
			<Breadcrumb>There</Breadcrumb>
			<Breadcrumb method="pigeon" to="/filters" elementType={Link}>
				Pigeon
			</Breadcrumb>
			<Breadcrumb to="/filters" elementType={Link}>
				Filters
			</Breadcrumb>
			<Breadcrumb>Are</Breadcrumb>
			<Breadcrumb>You</Breadcrumb>
			{monkey && <Breadcrumb>Monkey</Breadcrumb>}
		</Breadcrumbs>
	);
};
