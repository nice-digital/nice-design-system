import { Alert } from "@nice-digital/nds-alert";

export const InfoAlert = () => (
	<Alert type="info">
		<h3>Info alert</h3>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
	</Alert>
);

export const SuccessAlert = () => (
	<Alert type="success">
		<h3>Success alert</h3>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
	</Alert>
);

export const ErrorAlert = () => (
	<Alert type="error">
		<h3>Error alert</h3>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
	</Alert>
);

export const CautionAlert = () => (
	<Alert type="caution">
		<h3>Caution alert</h3>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
	</Alert>
);
