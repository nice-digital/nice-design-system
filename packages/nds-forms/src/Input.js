// @flow
import React, { Component } from "react";

type InputProps = {
	children: any,
	legend: string,
	group: string,
	help: string,
};

export default class Input extends Component<InputProps> {

	render() {

		return (
			<fieldset className="Form__fieldset">

				<legend className="Form__legend">
					Inputs
				</legend>


				<div
					className="form__group form__group--text ">
					<label
						className="form__label" htmlFor="input-text">Enter text</label>
					<input
						className="form__input form__input--text" name="input-text" id="input-text" type="text" placeholder="E.g. Malcolm"/>

				</div>


				<div
					className="form__group form__group--password ">
					<label
						className="form__label" htmlFor="input-password">Please enter your password</label>
					<input
						className="form__input form__input--password" name="input-password" id="input-password" type="password"
								 required="required"/>

					<p
						className="form__hint">
						Your password must contain both letters and numbers
					</p>

				</div>


				<div
					className="form__group form__group--range ">
					<label
						className="form__label" htmlFor="input-range">Choose between 0 and 100</label>
					<input
						className="form__input form__input--range" name="input-range" id="input-range" type="range" min="0"
								 max="100" step="10"/>

				</div>


				<div
					className="form__group form__group--text ">
					<label
						className="form__label" htmlFor="input-disabled">Disabled, pre-populated input</label>
					<input
						className="form__input form__input--text" name="input-disabled" id="input-disabled" type="text"
								 disabled="disabled" value="Unable to change"/>

				</div>


				<div
					className="form__group form__group--file ">
					<label
						className="form__label" htmlFor="input-file">Choose a file</label>
					<input
						className="form__input form__input--file" name="input-file" id="input-file" type="file"/>

				</div>


				<div
					className="form__group form__group--date ">
					<label
						className="form__label" htmlFor="input-date">Enter a date</label>
					<input
						className="form__input form__input--date" name="input-date" id="input-date" type="date"
								 min="2018-01-01" max="2019-01-01"/>

				</div>


			</fieldset>
		);
	}
}
