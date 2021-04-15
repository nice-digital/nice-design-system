import React from "react";
import { Tabs, Tab } from "@nice-digital/nds-tabs";

export const TabsView = () => {
	return (
		<Tabs>
			<Tab title="Tab 1">
				<h3>Hello</h3>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab aliquam
					aliquid cupiditate distinctio eos facilis itaque laborum officiis
					vitae.
				</p>
			</Tab>
			<Tab title="Tab 2 with a longer title">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum labore
				libero natus quas sit! Aut blanditiis deserunt dignissimos dolor eveniet
				libero maxime minima natus, quibusdam sed sunt tenetur velit, vitae?
			</Tab>
			<Tab title="Tab 3">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
				debitis ducimus laborum nostrum nulla officia quos. Nemo numquam
				praesentium qui.
			</Tab>
			<Tab title="Tab 4">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur ea
				error ex id in ipsam, iure laborum magni odio qui, repellendus
				voluptatibus! Architecto consequatur eos ex in, ipsam ipsum porro quia
				rem sequi tempore. Eos exercitationem magni omnis tempore veniam.
			</Tab>
			<Tab title="Tab 5">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, rerum?
			</Tab>
		</Tabs>
	);
};
