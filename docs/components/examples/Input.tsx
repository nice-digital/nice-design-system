import { Input } from "@nice-digital/nds-input";

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
export const HintInput = () => (
	<Input label="Age" name="age" hint="Please enter in years" />
);
