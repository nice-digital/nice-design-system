import { AZList, AZListItem } from "@nice-digital/nds-a-z-list";
import { DefaultAlphabet } from "./Alphabet";

export const DefaultAZList = () => (
	<AZList alphabet={DefaultAlphabet}>
		<AZListItem title="A">
			<p className="test-class">A: lorem ipsum dolor sit amet</p>
		</AZListItem>
		<AZListItem title="B">
			<p className="test-class">B: lorem ipsum dolor sit amet</p>
		</AZListItem>
	</AZList>
);
