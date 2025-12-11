import { FormGroup } from "@nice-digital/nds-form-group";
import { Radio } from "@nice-digital/nds-radio";

export const DefaultRadio = () => (
	<FormGroup
		legend="Are you happy for us to contact you in the future?"
		name="contact-preference"
	>
		<Radio label="Yes" value="yes" name="defaultradio" />
		<Radio label="No" value="no" name="defaultradio" />
	</FormGroup>
);

export const DefaultRadioExample = () => (
	<FormGroup
		legend="Are you happy for us to contact you in the future?"
		name="contact-preference-default"
	>
		<Radio label="Yes" value="yes" name="defaultradioexample" />
		<Radio label="No" value="no" name="defaultradioexample" />
	</FormGroup>
);

export const InlineRadio = () => (
	<FormGroup
		legend="Are you happy for us to contact you in the future?"
		name="contact-preference-inline"
		inline
	>
		<Radio inline label="Yes" value="yes" name="inlineradio" />
		<Radio inline label="No" value="no" name="inlineradio" />
	</FormGroup>
);

export const HintRadio = () => (
	<FormGroup
		legend="Are you happy for us to contact you in the future?"
		name="contact-preference-hint"
	>
		<Radio
			hint="Some helpful hint text"
			label="Yes"
			value="yes"
			name="hintradio"
		/>
		<Radio label="No" value="no" name="hintradio" />
	</FormGroup>
);

export const GroupHintRadio = () => (
	<FormGroup
		legend="Are you happy for us to contact you in the future?"
		hint="Some helpful hint text"
		name="contact-preference-hint-group"
	>
		<Radio label="Yes" value="yes" name="hintradio" />
		<Radio label="No" value="no" name="hintradio" />
	</FormGroup>
);

export const ErrorHintRadio = () => (
	<FormGroup
		legend="Are you happy for us to contact you in the future?"
		name="contact-preference-error-hint"
	>
		<Radio
			error="Error message"
			label="Yes"
			value="yes"
			name="errorhintradio"
		/>
		<Radio label="No" value="no" name="errorhintradio" />
	</FormGroup>
);
