import React, { Component } from "react";
// import Faker from "faker";
import { Router, Route, Link } from "react-router-dom";
import { createBrowserHistory } from "history";
import { FormGroupView } from "./views/FormGroupView";
import { PageHeaderView } from "./views/PageHeaderView";
import { AlertView } from "./views/AlertView";
import { StackedNavView } from "./views/StackedNavView";
import "./App.scss";

const browserHistory = createBrowserHistory();

class App extends Component {
	render() {
		return (
			<Router history={browserHistory}>
				<nav>
					<ul>
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
					</ul>
				</nav>
				<main>
					<Route path="/formgroup" component={FormGroupView} />
					<Route path="/pageheader" component={PageHeaderView} />
					<Route path="/stackednav" component={StackedNavView} />
					<Route path="/alert" component={AlertView} />
				</main>
			</Router>
		);
	}
}

export default App;
