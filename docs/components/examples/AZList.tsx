import { AZList, AZListItem } from "@nice-digital/nds-a-z-list";

export const DefaultAZList = () => (
	<AZList alphabet={() => <p>Alphabet...</p>}>
		<AZListItem title="A">
			<p className="test-class">A: lorem ipsum dolor sit amet</p>
		</AZListItem>
		<AZListItem title="B">
			<p className="test-class">B: lorem ipsum dolor sit amet</p>
		</AZListItem>
	</AZList>
);
