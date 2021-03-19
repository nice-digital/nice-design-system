import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs, text, select, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import { ActionBanner } from "@nice-digital/nds-action-banner";
import { Button } from "@nice-digital/nds-button";

const list = (
	<>
		<li>
			Cardiac arrest is a sudden state of circulatory failure due to a loss of
			cardiac systolic function.
		</li>
		<li>
			There are&nbsp;around 60,000 cases of suspected cardiac arrest every year,
			but&nbsp;fewer than 1 in 10 people survive an out of hospital cardiac
			arrest.
			<ul>
				<li>
					Immediate initiation of cardiopulmonary resuscitation (CPR) can double
					or quadruple survival from out hospital cardiac arrest,
					and&nbsp;defibrillation within 3–5 minutes of collapse can produce
					survival rates up to 50–70%.
				</li>
			</ul>
		</li>
		<li>
			Cardiac arrest should be suspected&nbsp;if a person is unresponsive and
			not breathing normally.
			<ul>
				<li>
					An inital safety assessment should be undertaken
					before&nbsp;approaching the person.
				</li>
				<li>
					Assessment of normal breathing should be performed, whilst keeping the
					airway open by turning the person onto their back and gently tilting
					their head back and lifting their chin.&nbsp;
				</li>
				<li>
					If there is&nbsp;no response and the person is not breathing normally,
					help should&nbsp;be requested and 999 called to dispatch an ambulance.
				</li>
				<li>
					The rescuer should stay with&nbsp;the person and activate the phone's
					speaker function to communicate&nbsp;with the ambulance service.
				</li>
				<li>
					Someone should be sent to fetch an automated external defibrillator
					(if available).
				</li>
			</ul>
		</li>
		<li>
			If a defibrillator is not immediately available, cardiopulmonary
			resuscitation (CPR) should be initiated.
			<ul>
				<li>
					Chest compressions and rescue breaths should be continued in a ratio
					of 30:2 —&nbsp;compressions should be continuous at a rate of 100–120
					times a minute.
				</li>
			</ul>
		</li>
		<li>
			As soon as a defibrillator is available, rhythm should be assessed by
			applying self-adhesive patches to the chest.
		</li>
		<li>
			If ventricular fibrillation (VF) or ventricular tachycardia (VT) is
			identified, defibrillation should be attempted.
			<ul>
				<li>
					One shock&nbsp;of 150 J should be given and CPR
					immediately&nbsp;resumed. This should be continued
					for&nbsp;2&nbsp;minutes, then paused briefly to check the monitor.
				</li>
				<li>
					If VF/VT persists a second shock of&nbsp;150 J should be given
					and&nbsp;CPR&nbsp;immediately resumed and continued for
					2&nbsp;minutes,&nbsp;then paused briefly to check the monitor.
				</li>
				<li>
					If VF/VT persists, a third shock of 150 J should be given, CPR resumed
					for 2 minutes and&nbsp;adrenaline 1 mg intravenously (IV)
					plus&nbsp;amiodarone 300 mg IV given.
				</li>
				<li>
					This sequence should be repeated and further adrenaline 1 mg IV given
					after alternate shocks&nbsp;(approximately every 3–5&nbsp;minutes).
				</li>
				<li>
					If organized electrical activity is seen during a rhythm check, the
					person&nbsp;should&nbsp;be checked for signs of return of spontaneous
					circulation (ROSC).&nbsp;
					<ul>
						<li>
							If there is ROSC,&nbsp;post-resuscitation care should be started.
						</li>
					</ul>
				</li>
			</ul>
		</li>
		<li>
			If asystole or pulseless electrical activity (PEA) is identified,
			defibrillation should not&nbsp;be attempted —&nbsp;CPR should be started
			or continued, and&nbsp;adrenaline&nbsp;1&nbsp;mg given intravenously (IV)
			as soon as venous access is achieved.
			<ul>
				<li>CPR should be continued until the airway is secured.&nbsp;</li>
				<li>The person should be checked for signs of life every 2 minutes.</li>
				<li>
					Adrenaline 1&nbsp;mg IV should be given after every alternate sequence
					of CPR/rhythm check (approximately every 3–5 minutes).
				</li>
			</ul>
		</li>
		<li>
			If an automated external defibrillator (AED) is used, the spoken and
			visual instructions should be followed.
		</li>
	</>
);

storiesOf("Typography/Lists", module)
	.addDecorator(withKnobs)
	.add("Default", () => {
		return <ul className="list">{list}</ul>;
	})
	.add("Loose", () => {
		return <ul className="list list--loose">{list}</ul>;
	})
	.add("Tight", () => {
		return <ul className="list list--tight">{list}</ul>;
	});
