import React, { Component } from "react";
// import Faker from "faker";
import { Router, Route, Link } from "react-router-dom";
import { createBrowserHistory } from "history";
import { FormGroupView } from "./views/FormGroupView";
import { PageHeaderView } from "./views/PageHeaderView";
import { GridView } from "./views/GridView";
import "./App.scss";

const browserHistory = createBrowserHistory();

class App extends Component {
	render() {
		return (
			<Router history={browserHistory}>
				<nav className="container">
					<p>
						<Link to="/formgroup">FormGroup</Link> |{" "}
						<Link to="/pageheader">Page Header</Link> |{" "}
						<Link to="/grid">Grid</Link>
					</p>
				</nav>
				<main className="container">
					<Route path="/formgroup" component={FormGroupView} />
					<Route path="/pageheader" component={PageHeaderView} />
					<Route path="/grid" component={GridView} />
				</main>
			</Router>
		);
	}
}

export default App;
