import React from "react";
import { FormGroup } from "@nice-digital/nds-form-group";
import { Radio } from "@nice-digital/nds-radio";
import { Checkbox } from "@nice-digital/nds-checkbox";

export const FormGroupView = () => {
	return (
		<>
			<h1>Form Group View</h1>
			<FormGroup
				inline
				name="my-group"
				hint="Please choose an option"
				legend="Would you mind if we contacted you in the future?"
			>
				<Radio value="yes" label="Yes, please do" />
				<Radio value="no" label="No, thank you" />
			</FormGroup>
			<hr />
			<FormGroup name="my-group-2">
				<Radio value="yes" label="Yes, please do" />
				<Radio value="no" label="No, thank you" />
			</FormGroup>
			<hr />
			<FormGroup
				inline
				name="my-group-3"
				groupError="You forgot to choose an option!"
				legend="Would you mind if we contacted you in the future?"
			>
				<Radio value="yes" label="Yes, please do" />
				<Radio value="no" label="No, thank you" />
			</FormGroup>
			<hr />
			<FormGroup name="my-group-4">
				<h3>Heading 3</h3>
				<Radio value="yes" label="Yes, please do" />
				<Radio value="no" label="No, thank you" />
			</FormGroup>
		</>
	);
};
