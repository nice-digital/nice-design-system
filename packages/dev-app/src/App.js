import React, { Component, Fragment } from "react";
import { Radio, RadioGroup, Textarea, Input, Fieldset, Checkbox, CheckboxGroup } from "@nice-digital/nds-forms";
import Alert from "@nice-digital/nds-alert";
import ActionBanner from "@nice-digital/nds-action-banner";
import Breadcrumbs from "@nice-digital/nds-breadcrumbs";
import Button from "@nice-digital/nds-button";
import Card from "@nice-digital/nds-card";
import { FilterPanel, FilterGroup } from "@nice-digital/nds-filters";
import Hero from "@nice-digital/nds-hero";
import InPageNav from "@nice-digital/nds-in-page-nav";
import MaintainRatio from "@nice-digital/nds-maintain-ratio";
import PageHeader from "@nice-digital/nds-page-header";
import Panel from "@nice-digital/nds-panel";
import PhaseBanner from "@nice-digital/nds-phase-banner";
import StackedNav from "@nice-digital/nds-stacked-nav";
import Tabs, { Tab } from "@nice-digital/nds-tabs";
import Tag from "@nice-digital/nds-tag";
import "./App.scss";

class App extends Component {
	render() {
		return (
			<main>

				<h1>NICE Design System dev app</h1>

				<h2>Action banner</h2>
				<ActionBanner title="This is an action banner" closeable={true} cta={<button type="button" class="btn">Test CTA</button>}>
					<p>With some body copy</p>
				</ActionBanner>

				<h2>Breadcrumbs</h2>
				<Breadcrumbs />

				<h2>Button</h2>
				<Button modifier="cta">Primary CTA</Button>
				<Button modifier="inverse">Inverse button</Button>

				<h2>Card</h2>
				<Card />

				<h2>Filters</h2>
				<FilterPanel>
					<FilterGroup></FilterGroup>
				</FilterPanel>

				<h2>Hero</h2>
				<Hero />

				<h2>Maintain aspect ratio</h2>
				<MaintainRatio />

				<h2>Page header</h2>
				<PageHeader />

				<h2>Panel</h2>
				<Panel>
					<h3>Panel content</h3>
					<p>Here is some panel content</p>
				</Panel>

				<h2>Phase banner</h2>
				<PhaseBanner />

				<h2>Stacked nav</h2>
				<StackedNav />

				<h2>Tabs</h2>
				<Tabs>
					<Tab title="First">Some tab content</Tab>
					<Tab title="Second">Some more tab content</Tab>
				</Tabs>

				<h2>Tag</h2>
				<Tag />

				<h2>Alert</h2>

				<Alert type="info">
					The information you provide on this form will be used by us to administer your NICE account. For more information about how we process your data, see our <a href="#">privacy notice</a>.
				</Alert>

				<Alert type="caution">
					Note: if you do not receive an activation email please check your spam folder.
				</Alert>

				<Alert type="error">
					Oops, something went wrong. If you used autocomplete try completing the form manually.
				</Alert>

				<Alert type="success">
					Thank you, your account was activated successfully. If this page does not automatically refresh, <a href="#">refresh the page</a>.
				</Alert>

				<CheckboxGroup legend="Checkboxes (stacked, default)" name="contact_preferences" hint="Hello here's a hint...">
					<Checkbox label="Post" value="post" disabled checked/>
					<Checkbox label="Email" value="email" error/>
					<Checkbox label="Telephone Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque in laboriosam maxime possimus rem. Cupiditate debitis dicta eaque illo laborum natus numquam possimus quas sint ut? Beatae corporis dolorem dolores eaque est explicabo fugit laboriosam quidem repellendus soluta? Nihil, reiciendis." value="phone"/>
				</CheckboxGroup>

				<CheckboxGroup inline legend="Checkboxes (inline)" name="contact_preferences-2" hint="Hello here's a hint...">
					<Checkbox label="Post" value="post" disabled checked/>
					<Checkbox label="Email" value="email"/>
					<Checkbox label="Telephone Lorem ipsum dolor sit amet, consectetur adipisicing elit." value="phone"/>
				</CheckboxGroup>

				<RadioGroup
					legend="Radio buttons (stacked, default)"
					group="group-1"
					hint="This is some hint text you can read">
					<Radio error value="yes" label="Yes please!" data-track="no"/>
					<Radio value="no" label="No thanks!"/>
					<Radio value="maybe" label="Well maybe..? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea eaque explicabo, facere harum necessitatibus nulla optio pariatur rem! Aut blanditiis dolores expedita minima mollitia nostrum rem! Accusamus aliquid, distinctio facilis harum illum magni nemo pariatur provident sequi vel, voluptates voluptatum!"/>
				</RadioGroup>

				<RadioGroup legend="Radio buttons (inline)" group="group-2" hint="This is some hint text you can read" inline>
					<Radio value="yes" label="Yes please!"/>
					<Radio value="no" label="No thanks!"/>
					<Radio value="maybe" label="Well maybe..?"/>
				</RadioGroup>

				<Fieldset legend="Textarea">
					<Textarea
						error
						errorMessage="This is an error message"
						unique="textarea-1"
						label="Who do you think you are?"
						value="Default value for textarea"/>
					<Textarea
						unique="textarea-1"
						label="Who do you think you are?"
						hint="This is some hint text you can read"
						name="myCommentBox"/>
					<Textarea
						unique="textarea-1"
						label="Who do you think you are?"
						name="mySecondCommentBox"/>
				</Fieldset>

				<Fieldset legend="Inputs">
					<Input
						name="full-name"
						type="text"
						label="Full name"/>
					<Input
						error
						errorMessage="This is an error message"
						name="email"
						type="email"
						label="Your email address"/>
					<Input
						name="password"
						type="password"
						hint="Your password must contain 4 special characters, 6 numbers, 12 letters and an emoji"
						label="Password"/>
				</Fieldset>
			</main>
		);
	}
}

export default App;
