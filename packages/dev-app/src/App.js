import React, { Component } from "react";
import {
	RadioGroup,
	Textarea,
	Input,
	Fieldset,
	Checkbox,
	CheckboxGroup
} from "@nice-digital/nds-forms";
import { Radio } from "@nice-digital/nds-radio";
import Alert from "@nice-digital/nds-alert";
import ActionBanner from "@nice-digital/nds-action-banner";
import { Breadcrumbs, Breadcrumb } from "@nice-digital/nds-breadcrumbs";
import Button from "@nice-digital/nds-button";
import Card from "@nice-digital/nds-card";
import { FilterPanel, FilterGroup } from "@nice-digital/nds-filters";
import Hero from "@nice-digital/nds-hero";
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
				<RadioGroup
					legend="Radio buttons (stacked, default)"
					name="group-1"
					hint="This is some hint text you can read"
				>
					<Radio
						error
						value="yes"
						label="Yes please!"
						unique="radio1-yes"
						data-track="no"
					/>
					<Radio value="no" label="No thanks!" unique="radio1-no" />
					<Radio
						value="maybe"
						unique="radio1-maybe"
						label="Well maybe..? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea eaque explicabo, facere harum necessitatibus nulla optio pariatur rem! Aut blanditiis dolores expedita minima mollitia nostrum rem! Accusamus aliquid, distinctio facilis harum illum magni nemo pariatur provident sequi vel, voluptates voluptatum!"
					/>
				</RadioGroup>

				<RadioGroup
					legend="Radio buttons (inline)"
					name="group-2"
					hint="This is some hint text you can read"
					inline
				>
					<Radio value="yes" label="Yes please!" unique="radio2-yes" />
					<Radio value="no" label="No thanks!" unique="radio2-no" error />
					<Radio value="maybe" label="Well maybe..?" unique="radio2-maybe" />
				</RadioGroup>

				<CheckboxGroup
					legend="Checkboxes (stacked, default)"
					name="contact_preferences"
					hint="Hello here's a hint..."
				>
					<Checkbox
						label="Can we contact you?"
						value="contact"
						unique="check-contact"
						disabled
						checked
					/>
					<Checkbox
						label="Do you agree to our privacy policy?"
						value="privacy"
						unique="check-privacy"
						error
					/>
					<Checkbox
						label="Do you agree to our terms and conditions?"
						value="terms"
						unique="check-terms"
					/>
				</CheckboxGroup>

				<CheckboxGroup
					inline
					legend="Checkboxes (inline)"
					name="contact_preferences-2"
					hint="Hello here's a hint..."
				>
					<Checkbox
						label="Post"
						value="post"
						unique="check-post"
						disabled
						checked
					/>
					<Checkbox label="Email" value="email" unique="check-email" error />
					<Checkbox label="Telephone" unique="check-phone" value="phone" />
				</CheckboxGroup>

				<Fieldset legend="Textarea">
					<Textarea
						error
						errorMessage="This is an error message"
						unique="textarea-1"
						label="Who do you think you are?"
						value="Default value for textarea"
						name="whoDoYouThinkYouAre"
					/>
					<Textarea
						unique="textarea-2"
						label="Who do you think you are?"
						hint="This is some hint text you can read"
						name="myCommentBox"
					/>
					<Textarea
						unique="textarea-3"
						label="Who do you think you are?"
						name="mySecondCommentBox"
					/>
				</Fieldset>

				<Fieldset legend="Inputs">
					<Input
						name="full-name"
						unique="full-name"
						type="text"
						label="Full name"
					/>
					<Input
						error
						errorMessage="This is an error message"
						name="email"
						type="email"
						unique="email"
						label="Your email address"
					/>
					<Input
						name="password"
						type="password"
						unique="pwd"
						hint="Your password must contain 4 special characters, 6 numbers, 12 letters and an emoji"
						label="Password"
					/>
					<Input name="number" type="number" unique="number" label="Number" />
				</Fieldset>

				<h2>Action banner</h2>
				<ActionBanner
					title="This is an action banner"
					closeable={true}
					cta={<Button modifier="inverse">Test CTA</Button>}
				>
					With some body copy
				</ActionBanner>

				<h2>Breadcrumb trail</h2>
				<Breadcrumbs>
					<Breadcrumb href="/text">Text</Breadcrumb>
					<Breadcrumb href="/text-2">Text 2</Breadcrumb>
				</Breadcrumbs>

				<h2>Button</h2>
				<Button href="/">A link</Button>
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
				<div className="grid">
					<div data-g="6">
						<h2>16:9</h2>
						<MaintainRatio>
							<iframe
								src="https://www.youtube.com/embed/dQw4w9WgXcQ"
								title="Never gonna give you up"
								allowFullScreen
							/>
						</MaintainRatio>
					</div>
					<div data-g="6">
						<h2>Square</h2>
						<MaintainRatio ratio="square" className="mb--d">
							<img src="https://picsum.photos/400/400" alt="" />
						</MaintainRatio>
					</div>
				</div>

				<h2>Page header</h2>
				<PageHeader heading="A heading" lead="Some intro copy" />

				<h2>Panel</h2>
				<Panel>
					<h3>Default panel</h3>
					<p>
						Here is some panel content <a href="/">with a link</a>
					</p>
				</Panel>
				<Panel type="inverse">
					<h3>Inverse panel</h3>
					<p>
						Here is some panel content <a href="/">with a link</a>
					</p>
				</Panel>

				<h2>Phase banner</h2>
				<PhaseBanner alpha>
					This is a new service – your <a href="/">feedback</a> will help us to
					improve it.
				</PhaseBanner>
				<PhaseBanner beta>
					This is a new service – your <a href="/">feedback</a> will help us to
					improve it.
				</PhaseBanner>

				<h2>Stacked nav</h2>
				<StackedNav />

				<h2>Tabs</h2>
				<Tabs>
					<Tab title="First">Some tab content</Tab>
					<Tab title="Second">Some more tab content</Tab>
				</Tabs>

				<h2>Tag</h2>
				<Tag>Test</Tag>
				<Tag alpha>Alpha</Tag>
				<Tag beta>Beta</Tag>
				<Tag live>Live</Tag>
				<Tag isNew>New</Tag>
				<Tag updated>Updated</Tag>
				<Tag consultation>Consultation</Tag>
				<Tag outline>Outline</Tag>

				<h2>Alert</h2>

				<Alert type="info">
					<p>
						The information you provide on this form will be used by us to
						administer your NICE account. For more information about how we
						process your data, see our{" "}
						<a href="https://www.nice.org.uk/privacy-notice">privacy notice</a>.
					</p>
				</Alert>

				<Alert type="caution">
					<p>
						Note: if you do not receive an activation email please check your
						spam folder.
					</p>
				</Alert>

				<Alert type="error">
					Oops, something went wrong. If you used autocomplete try completing
					the form manually.
				</Alert>

				<Alert type="success">
					Thank you, your account was activated successfully. If this page does
					not automatically refresh, <a href="/">refresh the page</a>.
				</Alert>
			</main>
		);
	}
}

export default App;
