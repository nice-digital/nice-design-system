// @flow
import React, { Component, Fragment } from "react";
import "./../scss/input.scss";

type InputProps = {
	label: string,
	hint: string,
	type: string
};

export default class Input extends Component<InputProps> {

	render() {

		const { label, hint, type } = this.props;

		return (

			<Fragment>

				<div className="Input">
					<label className="Input__label">{label}</label>
					{hint && <p className="Input__hint">{hint}</p>}
					<input className="Input__input" type={type}/>
				</div>

			</Fragment>

		);
	}
}

{/*<div className="form__group form__group--text ">*/}
	{/*<label className="form__label" htmlFor="input-text">Enter text</label>*/}
	{/*<input className="form__input form__input--text" name="input-text" id="input-text" type="text"/>*/}
{/*</div>*/}


{/*<div className="form__group form__group--password ">*/}
	{/*<label*/}
{/*className="form__label" htmlFor="input-password">Please enter your password</label>*/}
{/*<input*/}
	{/*className="form__input form__input--password" name="input-password" id="input-password" type="password"*/}
	{/*required="required"/>*/}

{/*<p*/}
{/*className="form__hint">*/}
	{/*Your password must contain both letters and numbers*/}
{/*</p>*/}

{/*</div>*/}

{/*<input*/}
	{/*className="form__input form__input--range" name="input-range" id="input-range" type="range" min="0"*/}
	{/*max="100" step="10"/>*/}


{/*<input*/}
{/*className="form__input form__input--text" name="input-disabled" id="input-disabled" type="text"*/}
{/*disabled="disabled" value="Unable to change"/>*/}


	{/*<input*/}
{/*className="form__input form__input--file" name="input-file" id="input-file" type="file"/>*/}


	{/*<input*/}
{/*className="form__input form__input--date" name="input-date" id="input-date" type="date"*/}
{/*min="2018-01-01" max="2019-01-01"/>*/}
