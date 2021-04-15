import React from "react";
import { Grid, GridItem } from "@nice-digital/nds-grid";

import { InPageNav } from "@nice-digital/nds-in-page-nav";

export const InPageNavView = () => {
	return (
		<Grid reverse>
			<GridItem cols={12} md={4}>
				<InPageNav
					headingsContainerSelector=".in-page-nav-target"
					headingsExcludeSelector=".ignore"
				/>
			</GridItem>
			<GridItem cols={12} md={8}>
				<h2>Excluded heading</h2>
				<p>The above heading is outside of the target element.</p>
				<div className="in-page-nav-target">
					<h2 id="an-id-already-here">Bacon</h2>
					<p>
						This heading and correpsonding link in the in page nav should use
						the existing id. But all the other links should have an id
						generated.
					</p>
					<p>
						Bacon ipsum dolor amet ham t-bone cupim rump ham hock. Corned beef
						beef fatback ham hock pork capicola alcatra kevin. Rump short ribs
						brisket pancetta ribeye. Short ribs pork loin tri-tip picanha
						shankle beef ribs boudin spare ribs tenderloin bacon brisket.
					</p>
					<h3>Prosciutto</h3>
					<p>
						Tri-tip prosciutto turkey bacon. Pig flank pork loin alcatra
						hamburger leberkas pork chop meatball boudin ribeye ham drumstick.
						Ball tip picanha ground round bacon. Picanha beef rump fatback
						sirloin tail tongue ham hock pancetta shank shankle spare ribs
						turkey ribeye pork belly.
					</p>
					<h2>Cured meats</h2>
					<h2>Cured meats</h2>
					<h2>Cured meats</h2>
					<h2>Cured meats</h2>
					<h2>Cured meats</h2>
					<h2>Cured meats</h2>
					<h2>Cured meats</h2>
					<h2>Cured meats</h2>
					<h2>Cured meats</h2>
					<h2>Cured meats</h2>
					<h3>Pastrami</h3>
					<p>
						Pastrami shankle ham, tenderloin bresaola pork chop doner pork belly
						frankfurter chuck sausage ham hock drumstick porchetta shank. Pork
						porchetta leberkas, cow turducken bacon chuck. Drumstick ball tip
						landjaeger turducken, ham hock strip steak chislic. Tenderloin
						pastrami spare ribs, pork kevin leberkas beef ribs drumstick
						shankle. Biltong rump tail alcatra hamburger, kielbasa pork belly
						shank meatball landjaeger beef ribs sausage ham brisket. Short ribs
						kevin ham hock cow chislic, landjaeger jerky pastrami filet mignon
						t-bone frankfurter buffalo cupim.
					</p>
					<h3>Pastrami</h3>
					<p>
						This is a duplicate heading so should have a unique heading
						generated with an incremeting postfix.
					</p>
					<h3 className="ignore">Excluded heading</h3>
					<p>
						The ignore class is used in the <code>headingsExcludeSelector</code>{" "}
						prop so should be excluded from the in page nav.
					</p>
				</div>
			</GridItem>
		</Grid>
	);
};
