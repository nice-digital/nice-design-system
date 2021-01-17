import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Wrapper from "./Wrapper";

type DefaultType = {
	data: {
		mdx: {
			frontmatter: {
				title: string;
				description: string;
			};
			id: string;
			body: string;
		};
	};
};

export const query = graphql`
	query($slug: String!) {
		mdx(slug: { eq: $slug }) {
			id
			frontmatter {
				title
				description
			}
			body
		}
	}
`;

export default function Default(props: DefaultType) {
	const {
		body,
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
