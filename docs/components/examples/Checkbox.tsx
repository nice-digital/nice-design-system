import { Checkbox } from "@nice-digital/nds-checkbox";

export const DefaultCheckbox = () => (
	<>
		<Checkbox value="Email" name="contact-email" />
		<Checkbox value="Telephone" name="contact-phone" />
		<Checkbox value="Text Message" name="contact-text" />
	</>
);

export const DefaultExampleCheckbox = () => (
	<>
		<Checkbox value="Email" name="contact-email-example" />
		<Checkbox value="Telephone" name="contact-phone-example" />
		<Checkbox value="Text Message" name="contact-text-example" />
	</>
);

export const InlineCheckbox = () => (
	<>
		<Checkbox inline value="Email" name="contact-email-inline" />
		<Checkbox inline value="Telephone" name="contact-phone-inline" />
		<Checkbox inline value="Text Message" name="contact-text-inline" />
	</>
);

export const HintCheckbox = () => (
	<Checkbox
		hint="You can unsubscribe at any time"
		value="Email"
		name="contact-email-hint"
	/>
);

export const ErrorCheckbox = () => (
	<Checkbox
		error="This is an error message"
		value="Email"
		name="contact-email-error"
	/>
);

export const DisabledCheckbox = () => (
	<Checkbox disabled value="Email" name="contact-email-disabled" />
);
