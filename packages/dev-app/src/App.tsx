import React, { Component } from "react";
// import Faker from "faker";
import { Router, Route, Link } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Container } from "@nice-digital/nds-grid";
import { FormGroupView } from "./views/FormGroupView";
import { PageHeaderView } from "./views/PageHeaderView";
import { GridView } from "./views/GridView";
import { AlertView } from "./views/AlertView";
import { StackedNavView } from "./views/StackedNavView";
import { CardView } from "./views/CardView";
import { ButtonView } from "./views/ButtonView";
import { HeroView } from "./views/HeroView";
import { InPageNavView } from "./views/InPageNavView";
import { TabsView } from "./views/TabsView";
import { TagsView } from "./views/TagsView";
import { MaintainRatioView } from "./views/MaintainRatioView";
import { PrintView } from "./views/PrintView";
import { BreadcrumbsView } from "./views/BreadcrumbsView";
import { FiltersView } from "./views/FiltersView";
import { DeprecatedFormsView } from "./views/DeprecatedFormsView";
import { SimplePaginationView } from "./views/SimplePaginationView";
import { PrevNextView } from "./views/PrevNextView";
import { HorizontalNavView } from "./views/HorizontalNavView";
import { TableView } from "./views/TableView";
import { FullBleedView } from "./views/FullBleedView";
import { CalloutView } from "./views/CalloutView";
import "./App.scss";

const browserHistory = createBrowserHistory();

class App extends Component {
	render() {
		return (
			<Router history={browserHistory}>
				<ul className="container hide-print list list--unstyled">
					<li>
						<Link to="/alert">Alert</Link>
					</li>
					<li>
						<Link to="/breadcrumbs">Breadcrumbs</Link>
					</li>
					<li>
						<Link to="/button">Button</Link>
					</li>
					<li>
						<Link to="/callout">Callout</Link>
					</li>
					<li>
						<Link to="/card">Card</Link>
					</li>
					<li>
						<Link to="/dep-forms">Deprecated Forms</Link>
					</li>
					<li>
						<Link to="/filters">Filters</Link>
					</li>
					<li>
						<Link to="/formgroup">Form Group</Link>
					</li>
					<li>
						<Link to="/full-bleed">Full Bleed</Link>
					</li>
					<li>
						<Link to="/grid">Grid</Link>
					</li>
					<li>
						<Link to="/hero">Hero</Link>
					</li>
					<li>
						<Link to="/in-page-nav">In page nav</Link>
					</li>
					<li>
						<Link to="/horizontal-nav">Horizontal Nav</Link>
					</li>
					<li>
						<Link to="/maintain-ratio">Maintain Ratio</Link>
					</li>
					<li>
						<Link to="/pageheader">Page Header</Link>
					</li>
					<li>
						<Link to="/prev-next">Previous and Next</Link>
					</li>
					<li>
						<Link to="/print">Print</Link>
					</li>
					<li>
						<Link to="/stackednav">Stacked Nav</Link>
					</li>
					<li>
						<Link to="/simple-pagination">Simple pagination</Link>
					</li>
					<li>
						<Link to="/table">Table</Link>
					</li>
					<li>
						<Link to="/tabs">Tabs</Link>
					</li>
					<li>
						<Link to="/tags">Tags</Link>
					</li>
				</ul>
				<hr />
				<Container>
					<Route path="/alert" component={AlertView} />
					<Route path="/breadcrumbs" component={BreadcrumbsView} />
					<Route path="/button" component={ButtonView} />
					<Route path="/callout" component={CalloutView} />
					<Route path="/card" component={CardView} />
					<Route path="/dep-forms" component={DeprecatedFormsView} />
					<Route path="/filters" component={FiltersView} />
					<Route path="/formgroup" component={FormGroupView} />
					<Route path="/full-bleed" component={FullBleedView} />
					<Route path="/grid" component={GridView} />
					<Route path="/hero" component={HeroView} />
					<Route path="/in-page-nav" component={InPageNavView} />
					<Route path="/horizontal-nav" component={HorizontalNavView} />
					<Route path="/maintain-ratio" component={MaintainRatioView} />
					<Route path="/pageheader" component={PageHeaderView} />
					<Route path="/prev-next" component={PrevNextView} />
					<Route path="/print" component={PrintView} />
					<Route path="/simple-pagination" component={SimplePaginationView} />
					<Route path="/stackednav" component={StackedNavView} />
					<Route path="/table" component={TableView} />
					<Route path="/tabs" component={TabsView} />
					<Route path="/tags" component={TagsView} />
					<p>
						Some paragraph content for context. Lorem ipsum dolor sit amet,
						consectetur adipisicing elit. Consequatur minima molestiae nisi qui,
						reprehenderit tempora! Amet consequuntur ducimus illum incidunt
						maxime molestiae possimus quae quasi quisquam ratione reprehenderit,
						soluta, ullam unde voluptate voluptatibus. Aliquam atque blanditiis
						dolorem eius eos esse facere facilis fugit illo labore laboriosam
						laborum maiores necessitatibus nostrum quasi, recusandae
						reprehenderit sit.
					</p>
				</Container>
			</Router>
		);
	}
}

export default App;
