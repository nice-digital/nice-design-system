import { Textarea } from "@nice-digital/nds-textarea";

export const DefaultTextarea = () => (
	<Textarea label="Your address" name="address"></Textarea>
);

export const HintTextarea = () => (
	<Textarea
		label="Your address"
		name="addresshint"
		hint="Enter your full address including postcode"
	></Textarea>
);

export const ErrorTextarea = () => (
	<Textarea
		label="Your address"
		name="addresshint"
		error={true}
		errorMessage="Please enter your full address"
	></Textarea>
);
