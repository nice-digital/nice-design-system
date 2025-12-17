import { Input } from "@nice-digital/nds-input";
import { FormGroup } from "@nice-digital/nds-form-group";

export const DefaultInput = () => <Input label="First name" name="firstname" />;
export const ErrorInput = () => (
	<Input
		label="Surname"
		name="surname"
		error
		required
		errorMessage="Please enter your surname"
	/>
);

export const GroupedInputs = () => (
	<FormGroup legend="What is your address">
		<Input label="Address line 1" name="address-line-1" />
		<Input label="Address line 2" name="address-line-2" />
		<Input label="Town or city" name="address-town" />
		<Input label="County" name="address-county" />
		<Input label="Postcode" name="address-postcode" />
	</FormGroup>
);

export const HintInput = () => (
	<Input label="Age" name="age" hint="Please enter in years" />
);

export const GroupedInputHints = () => (
	<FormGroup legend="What is your address" hint="This should be a UK address">
		<Input label="Address line 1" name="address-line-1-hint" />
		<Input label="Address line 2" name="address-line-2-hint" />
		<Input label="Town or city" name="address-town-hint" />
		<Input label="County" name="address-county-hint" />
		<Input label="Postcode" name="address-postcode-hint" />
	</FormGroup>
);
