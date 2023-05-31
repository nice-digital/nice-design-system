import { Button } from "@nice-digital/nds-button";

export const DefaultButton = () => <Button>Do something</Button>;
export const PrimaryButton = () => (
	<Button variant={Button.variants.primary}>Primary button</Button>
);
export const SecondaryButton = () => (
	<Button variant={Button.variants.secondary}>Secondary button</Button>
);
export const InverseButton = () => (
	<Button variant={Button.variants.inverse}>Inverse button</Button>
);
export const CTAButton = () => (
	<Button variant={Button.variants.cta}>CTA button</Button>
);
