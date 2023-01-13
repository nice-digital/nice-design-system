import { Tabs, Tab } from "@nice-digital/nds-tabs";

export default function TabTest() {
	return (
		<div>
			<Tabs>
				<Tab title="Tab 1">
					<p>Here is some content for the first tab</p>
				</Tab>
				<Tab title="Tab 2">
					<p>Here is some content for the second tab</p>
				</Tab>
				<Tab title="Tab 3">
					<p>Here is some content for the third tab</p>
				</Tab>
			</Tabs>
		</div>
	);
}
