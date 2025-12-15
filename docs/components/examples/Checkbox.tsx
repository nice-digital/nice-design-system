import { Checkbox } from "@nice-digital/nds-checkbox";
import { FormGroup } from "@nice-digital/nds-form-group";

export const DefaultCheckboxExample = () => (
	<>
		<FormGroup
			legend="How would you like us to contact you?"
			hint="Please select all that apply."
		>
			<Checkbox name="contact-example" value="email" label="Email" />
			<Checkbox name="contact-example" value="telephone" label="Telephone" />
			<Checkbox name="contact-example" value="sms" label="Text message" />
		</FormGroup>
	</>
);

export const GroupedCheckbox = () => (
	<>
		<FormGroup
			legend="How would you like us to contact you?"
			hint="Please select all that apply."
		>
			<Checkbox name="contact-grouped" value="email" label="Email" />
			<Checkbox name="contact-grouped" value="telephone" label="Telephone" />
			<Checkbox name="contact-grouped" value="sms" label="Text message" />
		</FormGroup>
	</>
);

export const GroupedCheckboxHint = () => (
	<>
		<FormGroup
			legend="How would you like us to contact you?"
			hint="Please select all that apply."
		>
			<Checkbox name="contact-grouped-hint" value="email" label="Email" />
			<Checkbox
				name="contact-grouped-hint"
				value="telephone"
				label="Telephone"
			/>
			<Checkbox name="contact-grouped-hint" value="sms" label="Text message" />
		</FormGroup>
	</>
);

export const GroupedCheckboxInline = () => (
	<>
		<FormGroup inline legend="How would you like us to contact you?">
			<Checkbox name="contact-inline" value="email" label="Email" />
			<Checkbox name="contact-inline" value="telephone" label="Telephone" />
			<Checkbox name="contact-inline" value="sms" label="Text message" />
		</FormGroup>
	</>
);

export const GroupedCheckboxNone = () => (
	<>
		<FormGroup legend="How would you like us to contact you?">
			<Checkbox name="contact-none-example" value="email" label="Email" />
			<Checkbox
				name="contact-none-example"
				value="telephone"
				label="Telephone"
			/>
			<Checkbox name="contact-none-example" value="sms" label="Text message" />
			<Checkbox
				value="none"
				name="contact-none-example"
				label="I do not wish to be contacted"
			/>
		</FormGroup>
	</>
);

export const SingleCheckbox = () => (
	<Checkbox
		name="terms-and-conditions"
		value="agree"
		label="I agree to the terms and conditions"
	/>
);

export const SingleCheckboxError = () => (
	<Checkbox
		name="terms-and-conditions"
		value="agree"
		label="I agree to the terms and conditions"
		error="You must agree to the terms and conditions."
	/>
);

export const SingleCheckboxHint = () => (
	<Checkbox
		name="newsletter-subscribe"
		value="agree"
		label="Yes, sign me up to the newsletter"
		hint="You can unsubscribe at any time."
	/>
);
