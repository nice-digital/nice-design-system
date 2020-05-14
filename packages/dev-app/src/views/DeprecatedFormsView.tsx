import React from "react";
import { Input, Textarea } from "@nice-digital/nds-forms";

export const DeprecatedFormsView = () => {
	return (
		<>
			<Input name={"name"} label={"First name"} />
			<Textarea label="Your address" name="address" error={true} />
		</>
	);
};
