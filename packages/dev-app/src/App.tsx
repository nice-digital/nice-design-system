import React, { Component } from "react";
// import Faker from "faker";
import { Router, Route, Link } from "react-router-dom";
import { createBrowserHistory } from "history";
import { FormGroupView } from "./views/FormGroupView";
import { PageHeaderView } from "./views/PageHeaderView";
import { GridView } from "./views/GridView";
import { AlertView } from "./views/AlertView";
import { TabsView } from "./views/TabsView";
import "./App.scss";

const browserHistory = createBrowserHistory();

class App extends Component {
	render() {
		return (
			<Router history={browserHistory}>
				<ul className="container">
					<li>
						<Link to="/formgroup">FormGroup</Link>
					</li>
					<li>
						<Link to="/pageheader">Page Header</Link>
					</li>
					<li>
						<Link to="/grid">Grid</Link>
					</li>
					<li>
						<Link to="/alert">Alert</Link>
					</li>
					<li>
						<Link to="/tabs">Tabs</Link>
					</li>
				</ul>
				<main className="container">
					<Route path="/formgroup" component={FormGroupView} />
					<Route path="/pageheader" component={PageHeaderView} />
					<Route path="/alert" component={AlertView} />
					<Route path="/grid" component={GridView} />
					<Route path="/tabs" component={TabsView} />
				</main>
			</Router>
		);
	}
}

export default App;
