import { ActionBanner } from "@nice-digital/nds-action-banner";
import { Button } from "@nice-digital/nds-button";

export const DefaultBanner = () => (
	<ActionBanner
		title="Sign up for NICE News"
		cta={<Button variant="cta">Sign up</Button>}
	>
		Our monthly newsletter, keeping you up to date with{" "}
		<a href="#">important developments at NICE</a>
	</ActionBanner>
);
