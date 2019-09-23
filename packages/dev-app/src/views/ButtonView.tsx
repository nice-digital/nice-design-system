import React from "react";
import { Button } from "@nice-digital/nds-button";

export const ButtonView = () => {
	return (
		<>
			<Button variant="cta">CTA</Button>
			<Button variant="primary">primary</Button>
			<Button variant="secondary">secondary</Button>
			<Button onClick={alert}>On click alert</Button>
		</>
	);
};
