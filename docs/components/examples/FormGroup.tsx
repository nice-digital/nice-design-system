import { Input } from "@nice-digital/nds-input";
import { Radio } from "@nice-digital/nds-radio";
import { Checkbox } from "@nice-digital/nds-checkbox";
import { FormGroup } from "@nice-digital/nds-form-group";

export const ExampleGroup = () => (
	<FormGroup legend="Personal information">
		<Input label="First name" name="firstname" />
		<Input label="Surname" name="surname" />
	</FormGroup>
);

export const DefaultGroup = () => (
	<FormGroup
		legend="Are you happy for us to contact you in the future?"
		name="contact-preference"
	>
		<Radio label="Yes" value="yes" />
		<Radio label="No" value="no" />
	</FormGroup>
);

export const InlineGroup = () => (
	<FormGroup
		legend="Are you happy for us to contact you in the future?"
		name="contact-preference-inline"
		inline
	>
		<Radio label="Yes" value="yes" />
		<Radio label="No" value="no" />
	</FormGroup>
);

export const HintsGroup = () => (
	<FormGroup
		legend="How would you like us to contact you?"
		hint="We promise not to contact you too often"
	>
		<Checkbox label="Email" value="email" name="contact-preference-hints" />
		<Checkbox label="Telephone" value="phone" name="contact-preference-hints" />
	</FormGroup>
);

export const ErrorGroup = () => (
	<FormGroup
		legend="How would you like us to contact you?"
		groupError="Please choose at least one contact method!"
	>
		<Checkbox label="Email" value="email" name="contact-preference-error" />
		<Checkbox label="Telephone" value="phone" name="contact-preference-error" />
	</FormGroup>
);
