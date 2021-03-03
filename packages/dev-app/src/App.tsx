import React, { Component } from "react";
// import Faker from "faker";
import { Router, Route, Link } from "react-router-dom";
import { createBrowserHistory } from "history";
import { FormGroupView } from "./views/FormGroupView";
import { PageHeaderView } from "./views/PageHeaderView";
import { GridView } from "./views/GridView";
import { AlertView } from "./views/AlertView";
import { StackedNavView } from "./views/StackedNavView";
import { CardView } from "./views/CardView";
import { ButtonView } from "./views/ButtonView";
import { HeroView } from "./views/HeroView";
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
import "./App.scss";

const browserHistory = createBrowserHistory();

class App extends Component {
	render() {
		return (
			<Router history={browserHistory}>
				<ul className="container hide-print list list--unstyled">
					<li>
						<Link to="/formgroup">Form Group</Link>
					</li>
					<li>
						<Link to="/pageheader">Page Header</Link>
					</li>
					<li>
						<Link to="/stackednav">Stacked Nav</Link>
					</li>
					<li>
						<Link to="/alert">Alert</Link>
					</li>
					<li>
						<Link to="/grid">Grid</Link>
					</li>
					<li>
						<Link to="/card">Card</Link>
					</li>
					<li>
						<Link to="/button">Button</Link>
					</li>
					<li>
						<Link to="/hero">Hero</Link>
					</li>
					<li>
						<Link to="/tabs">Tabs</Link>
					</li>
					<li>
						<Link to="/tags">Tags</Link>
					</li>
					<li>
						<Link to="/maintain-ratio">Maintain Ratio</Link>
					</li>
					<li>
						<Link to="/print">Print</Link>
					</li>
					<li>
						<Link to="/breadcrumbs">Breadcrumbs</Link>
					</li>
					<li>
						<Link to="/filters">Filters</Link>
					</li>
					<li>
						<Link to="/dep-forms">Deprecated Forms</Link>
					</li>
					<li>
						<Link to="/simple-pagination">Simple pagination</Link>
					</li>
					<li>
						<Link to="/prev-next">Previous and Next</Link>
					</li>
					<li>
						<Link to="/horizontal-nav">Horizontal Nav</Link>
					</li>
					<li>
						<Link to="/table">Table</Link>
					</li>
					<li>
						<Link to="/full-bleed">Full Bleed</Link>
					</li>
				</ul>
				<main className="container">
					<Route path="/formgroup" component={FormGroupView} />
					<Route path="/pageheader" component={PageHeaderView} />
					<Route path="/stackednav" component={StackedNavView} />
					<Route path="/alert" component={AlertView} />
					<Route path="/hero" component={HeroView} />
					<Route path="/grid" component={GridView} />
					<Route path="/card" component={CardView} />
					<Route path="/button" component={ButtonView} />
					<Route path="/tabs" component={TabsView} />
					<Route path="/tags" component={TagsView} />
					<Route path="/maintain-ratio" component={MaintainRatioView} />
					<Route path="/print" component={PrintView} />
					<Route path="/breadcrumbs" component={BreadcrumbsView} />
					<Route path="/filters" component={FiltersView} />
					<Route path="/dep-forms" component={DeprecatedFormsView} />
					<Route path="/simple-pagination" component={SimplePaginationView} />
					<Route path="/prev-next" component={PrevNextView} />
					<Route path="/table" component={TableView} />
					<Route path="/horizontal-nav" component={HorizontalNavView} />
					<Route path="/full-bleed" component={FullBleedView} />
				</main>
			</Router>
		);
	}
}

export default App;
