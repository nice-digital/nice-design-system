import { FormGroup } from "@nice-digital/nds-form-group";
import { Radio } from "@nice-digital/nds-radio";

export const DefaultRadio = () => (
	<FormGroup
		legend="Are you happy for us to contact you in the future?"
		name="contact-preference"
	>
		<Radio label="Yes" value="Yes" name="defaultradio" />
		<Radio label="No" value="No" name="defaultradio" />
	</FormGroup>
);

export const DefaultRadioExample = () => (
	<FormGroup
		legend="Are you happy for us to contact you in the future?"
		name="contact-preference"
	>
		<Radio label="Yes" value="Yes" name="defaultradioexample" />
		<Radio label="No" value="No" name="defaultradioexample" />
	</FormGroup>
);

export const InlineRadio = () => (
	<FormGroup
		legend="Are you happy for us to contact you in the future?"
		name="contact-preference-inline"
		inline
	>
		<Radio inline label="Yes" value="Yes" name="inlineradio" />
		<Radio inline label="No" value="No" name="inlineradio" />
	</FormGroup>
);

export const HintRadio = () => (
	<FormGroup
		legend="Are you happy for us to contact you in the future?"
		name="contact-preference"
	>
		<Radio
			hint="Some helpful hint text"
			label="Yes"
			value="Yes"
			name="hintradio"
		/>
		<Radio label="No" value="No" name="hintradio" />
	</FormGroup>
);

export const GroupHintRadio = () => (
	<FormGroup
		legend="Are you happy for us to contact you in the future?"
		hint="Some helpful hint text"
		name="contact-preference"
	>
		<Radio label="Yes" value="Yes" name="hintradio" />
		<Radio label="No" value="No" name="hintradio" />
	</FormGroup>
);

export const ErrorRadio = () => (
	<FormGroup
		legend="Are you happy for us to contact you in the future?"
		name="contact-preference"
	>
		<Radio error={true} label="Yes" value="Yes" name="errorradio" />
		<Radio label="No" value="No" name="errorradio" />
	</FormGroup>
);

export const ErrorHintRadio = () => (
	<FormGroup
		legend="Are you happy for us to contact you in the future?"
		name="contact-preference"
	>
		<Radio
			error="Error message"
			label="Yes"
			value="Yes"
			name="errorhintradio"
		/>
		<Radio label="No" value="No" name="errorhintradio" />
	</FormGroup>
);
