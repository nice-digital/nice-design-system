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
import { HorizontalNavView } from "./views/HorizontalNavView";
import { PrevNextView } from "./views/PrevNextView";
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
						<Link to="/horizontal-nav">Horizontal Nav</Link>
					</li>
					<li>
					    <Link to="/prev-next">Previous and Next</Link>
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
					<Route path="/horizontal-nav" component={HorizontalNavView} />
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit.
						Consequatur minima molestiae nisi qui, reprehenderit tempora! Amet
						consequuntur ducimus illum incidunt maxime molestiae possimus quae
						quasi quisquam ratione reprehenderit, soluta, ullam unde voluptate
						voluptatibus. Aliquam atque blanditiis dolorem eius eos esse facere
						facilis fugit illo labore laboriosam laborum maiores necessitatibus
						nostrum quasi, recusandae reprehenderit sit. Ad consectetur dicta
						eum fugiat, iusto necessitatibus odit. Assumenda, fuga, nobis!
						Error, ipsum, vero. Aliquid animi architecto assumenda delectus
						doloribus eum excepturi fuga harum impedit laborum maiores
						molestiae, necessitatibus nesciunt pariatur possimus quae quo, quos
						saepe suscipit unde vel voluptate voluptatum. Ab commodi cum,
						dolorum est laboriosam libero officia. Adipisci aperiam asperiores
						atque consequuntur corporis cupiditate delectus deleniti dicta
						ducimus esse et expedita illo illum molestiae nihil nobis nulla,
						perferendis provident quos reprehenderit rerum sed soluta sunt
						temporibus ullam, unde velit. Atque consequatur, consequuntur cumque
						debitis delectus doloribus eligendi excepturi exercitationem, illum
						ipsa laboriosam nisi nostrum provident qui quo ratione recusandae
						sed temporibus unde ut? Assumenda deleniti distinctio eius, eos est
						explicabo itaque, libero maiores minima modi odit perferendis
						provident ratione repudiandae voluptatibus. A adipisci blanditiis
						commodi expedita explicabo, inventore magni maiores nam saepe sed. A
						adipisci at beatae cumque distinctio doloremque doloribus dolorum
						ea, est ex facere facilis, magni molestias nam nemo nostrum
						praesentium quae, quis repellendus rerum temporibus tenetur totam
						unde ut voluptatibus. Autem dolores enim excepturi inventore,
						laborum officia rerum. Amet blanditiis commodi consequuntur dicta
						dolore doloremque earum eligendi ex excepturi hic illum impedit
						laboriosam libero, necessitatibus nemo nisi quibusdam recusandae ut
						velit, voluptate? Et ex excepturi impedit minima nam provident rerum
						sapiente tempore. A accusamus ad assumenda corporis cum dignissimos,
						dolores dolorum eaque eos eum excepturi facere fuga in labore
						laborum nisi officia officiis perferendis perspiciatis provident
						quia quibusdam quidem reprehenderit sint tempora totam ut voluptate.
						Deserunt doloribus nihil possimus repellat sit.
					</p>
				</main>
			</Router>
		);
	}
}

export default App;
