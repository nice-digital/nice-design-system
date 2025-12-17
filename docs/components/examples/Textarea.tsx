import { FormGroup } from "@nice-digital/nds-form-group";
import { Textarea } from "@nice-digital/nds-textarea";

export const DefaultTextareaExample = () => (
	<Textarea label="Your address" name="address"></Textarea>
);

export const SingleHintTextarea = () => (
	<Textarea
		label="Your address"
		name="addresshint"
		hint="Enter your full address including postcode"
	></Textarea>
);

export const SingleErrorTextarea = () => (
	<Textarea
		label="Your address"
		name="addresshint"
		error={true}
		errorMessage="Please enter your full address"
	></Textarea>
);

export const GroupedTextarea = () => (
	<FormGroup legend="Feedback Details">
		<Textarea
			label="What could be improved?"
			name="improvement_feedback"
		></Textarea>
		<Textarea label="Additional Comments" name="additional_comments"></Textarea>
	</FormGroup>
);

export const GroupedHintTextarea = () => (
	<FormGroup
		legend="Feedback Details"
		hint="Please answer all fields clearly and avoid including any personal or sensitive information."
	>
		<Textarea
			label="What could be improved?"
			name="improvement_feedback"
		></Textarea>
		<Textarea label="Additional Comments" name="additional_comments"></Textarea>
	</FormGroup>
);
