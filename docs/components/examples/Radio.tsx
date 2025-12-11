import { FormGroup } from "@nice-digital/nds-form-group";
import { Radio } from "@nice-digital/nds-radio";

export const DefaultRadio = () => (
	<FormGroup
		legend="Are you happy for us to contact you in the future?"
		name="contact-preference-default"
	>
		<Radio label="Yes" value="yes" />
		<Radio label="No" value="no" />
	</FormGroup>
);

export const DefaultRadioExample = () => (
	<FormGroup
		legend="Are you happy for us to contact you in the future?"
		name="contact-preference-default-example"
	>
		<Radio label="Yes" value="yes" />
		<Radio label="No" value="no" />
	</FormGroup>
);

export const InlineRadio = () => (
	<FormGroup
		legend="Are you happy for us to contact you in the future?"
		inline
		name="contact-preference-inline"
	>
		<Radio label="Yes" value="yes" />
		<Radio label="No" value="no" />
	</FormGroup>
);

export const HintRadio = () => (
	<FormGroup
		legend="Are you happy for us to contact you in the future?"
		name="contact-preference-hint"
	>
		<Radio label="Yes" value="yes" hint="Some helpful hint text" />
		<Radio label="No" value="no" />
	</FormGroup>
);

export const GroupHintRadio = () => (
	<FormGroup
		legend="Are you happy for us to contact you in the future?"
		hint="Some helpful hint text"
		name="contact-preference-grouphint"
	>
		<Radio label="Yes" value="yes" />
		<Radio label="No" value="no" />
	</FormGroup>
);

export const ErrorHintRadio = () => (
	<FormGroup
		legend="Are you happy for us to contact you in the future?"
		name="contact-preference-errorhint"
	>
		<Radio label="Yes" value="yes" error="Error message" />
		<Radio label="No" value="no" />
	</FormGroup>
);
