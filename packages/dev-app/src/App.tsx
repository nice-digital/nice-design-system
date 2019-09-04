import React, { Component } from "react";
// import Faker from "faker";
import { Router, Route, Link } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Checkbox } from "@nice-digital/nds-checkbox";
import { FormGroupView } from "./views/FormGroupView";
import "./App.scss";

const browserHistory = createBrowserHistory();

class App extends Component {
	render() {
		return (
			<main>
				<Router history={browserHistory}>
					<nav>
						<p>
							<Link to="/formgroup">FormGroup</Link>
						</p>
					</nav>
					<Route path="/formgroup" component={FormGroupView} />
				</Router>
			</main>
		);
	}
}

export default App;
