import { Radio } from "@nice-digital/nds-radio";

export const DefaultRadio = () => (
	<>
		<Radio label="Yes" value="Yes" name="defaultradio" />
		<Radio label="No" value="No" name="defaultradio" />
	</>
);

export const DefaultRadioExample = () => (
	<>
		<Radio label="Yes" value="Yes" name="defaultradioexample" />
		<Radio label="No" value="No" name="defaultradioexample" />
	</>
);

export const InlineRadio = () => (
	<>
		<Radio inline label="Yes" value="Yes" name="inlineradio" />
		<Radio inline label="No" value="No" name="inlineradio" />
	</>
);

export const HintRadio = () => (
	<>
		<Radio
			hint="Some helpful hint text"
			label="Yes"
			value="Yes"
			name="hintradio"
		/>
		<Radio label="No" value="No" name="hintradio" />
	</>
);

export const ErrorRadio = () => (
	<>
		<Radio error={true} label="Yes" value="Yes" name="errorradio" />
		<Radio label="No" value="No" name="errorradio" />
	</>
);

export const ErrorHintRadio = () => (
	<>
		<Radio
			error="Error message"
			label="Yes"
			value="Yes"
			name="errorhintradio"
		/>
		<Radio label="No" value="No" name="errorhintradio" />
	</>
);

export const DisabledRadio = () => (
	<>
		<Radio disabled label="Yes" value="Yes" name="disabledradio" />
		<Radio disabled label="No" value="No" name="disabledradio" />
	</>
);
