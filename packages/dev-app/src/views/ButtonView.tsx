import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@nice-digital/nds-button";

export const ButtonView = () => {
	return (
		<>
			<Button variant="cta">CTA</Button>
			<Button variant="primary">primary</Button>
			<Button variant="secondary">secondary</Button>
			<Button onClick={alert}>On click alert</Button>
			<Button method="pigeon" to="/pigeons">
				Pigeon
			</Button>
			<Button elementType={Link} to="/simple-pagination">
				Hey
			</Button>
			<Button elementType="a" to="http://google.com" method="pigeon">
				Google Pigeon Method
			</Button>
			<Button disabled elementType="a" to="http://google.com">
				Google Pigeon
			</Button>
		</>
	);
};
