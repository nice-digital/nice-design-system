import React from "react";
import { PageHeader } from "@nice-digital/nds-page-header";

export const PageHeaderView = () => {
	return (
		<>
			<PageHeader
				heading="Products"
				lead="A list of all our products on systemic lupus erythematosus"
				cta="Look now!"
				preheading="Preheading"
			/>

			<PageHeader
				heading="Cerliponase alfa for treating neuronal ceroid lipofuscinosis type 2"
				metadata={[
					"Highly specialised technologies guidance",
					<>
						<span className="visually-hidden">Reference number: </span>HST12
					</>,
					"Last updated: 29 October 2019",
					"Last updated: 29 October 2019"
				]}
				cta={<a href="/pageheader">Register as a stakeholder</a>}
			/>

			<PageHeader
				useAltHeading
				preheading="Alt heading 1 with pre heading"
				heading="Cerliponase alfa for treating neuronal ceroid lipofuscinosis type 2"
				metadata={[
					"Highly specialised technologies guidance",
					<>
						<span className="visually-hidden">Reference number: </span>HST12
					</>,
					"Last updated: 29 October 2019",
					"Last updated: 29 October 2019"
				]}
				cta={<a href="/pageheader">Register as a stakeholder</a>}
			/>
		</>
	);
};
