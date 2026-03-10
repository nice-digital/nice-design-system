import { FormGroup } from "@nice-digital/nds-form-group";
import { Textarea } from "@nice-digital/nds-textarea";

export const DefaultTextarea = () => (
	<Textarea
		label="Tell us more about your request or issue."
		name="issue_description"
	></Textarea>
);

export const DefaultTextareaExample = () => (
	<Textarea
		label="Tell us more about your request or issue."
		name="issue_description_example"
	></Textarea>
);

export const SingleHintTextarea = () => (
	<Textarea
		label="Tell us more about your request or issue."
		name="issue_description_hint"
		hint="Please describe the issue in detail, including any error messages you have received."
	></Textarea>
);

export const SingleErrorTextarea = () => (
	<Textarea
		label="Tell us more about your request or issue."
		name="issue_description_error"
		error={true}
		errorMessage="Please describe your request or issue."
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
			name="improvement_feedback_hint"
		></Textarea>
		<Textarea
			label="Additional Comments"
			name="additional_comments_hint"
		></Textarea>
	</FormGroup>
);
