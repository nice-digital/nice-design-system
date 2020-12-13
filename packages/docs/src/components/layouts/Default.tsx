import React from "react";
import { graphql } from "gatsby";
import { Grid, GridItem } from "@nice-digital/nds-grid";
import { PageHeader } from "@nice-digital/nds-page-header";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Seo from "../../components/partials/Seo";
import Wrapper from "./Wrapper";
import { ComponentNavigation } from "../partials/ComponentNavigation";

type DefaultType = {
	data: {
		mdx: {
			frontmatter: {
				title: string;
				description: string;
			};
			id: string;
			fields: {
				section: string;
			};
			body: string;
		};
	};
};

export const query = graphql`
	query($slug: String!) {
		mdx(fields: { slug: { eq: $slug } }) {
			id
			frontmatter {
				title
				description
			}
			fields {
				section
			}
			body
		}
	}
`;

export default function Default(props: DefaultType) {
	const {
		body,
		fields,
		frontmatter: { title, description },
		id
	} = props.data.mdx;
	return (
		<Wrapper className="pt--e">
			<h1 data-attr={id}>{title}</h1>
			<p className="lead">{description}</p>
			<MDXRenderer>{body}</MDXRenderer>
		</Wrapper>
	);
}
