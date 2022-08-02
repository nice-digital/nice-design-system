import React from "react";

export const TypographyView = () => {
	return (
		<div>
			<h2>Office fish</h2>
			<h3>Heading 3</h3>
			<p>
				Bacon ipsum dolor amet prosciutto salami filet mignon pork loin tail cow
				porchetta meatloaf rump short loin ribeye cupim chicken landjaeger
				alcatra. Fatback corned beef swine pancetta ball tip doner. Frankfurter
				doner rump short loin, jowl flank pastrami fatback prosciutto chicken.
				Flank tongue beef ribs buffalo.
			</p>
			<h3>Another heading</h3>
			<p>
				Short loin shankle capicola porchetta flank meatloaf doner, jowl ball
				tip filet mignon frankfurter. Kielbasa andouille chicken venison
				frankfurter short loin. Alcatra beef ribs fatback turducken cupim t-bone
				ham hock strip steak buffalo ball tip porchetta spare ribs cow.
				Tenderloin filet mignon bresaola jerky leberkas corned beef chicken pork
				chop. Shankle chislic corned beef, bresaola turducken venison filet
				mignon boudin.
			</p>
			<h2>Heading two again</h2>
			<p>Oh look, a list:</p>
			<ul>
				<li>A list item!</li>
				<li>And another</li>
				<li>
					With nested list items:
					<ul>
						<li>First nested</li>
						<li>
							Second nested with a bit more text that should wrap to demonstrate
							line height and list item spacing
						</li>
					</ul>
				</li>
			</ul>
			<h2>Unstyled list</h2>
			<ul className="list list--unstyled">
				<li>One potato</li>
				<li>Two potato</li>
				<li>Three potato</li>
			</ul>
			<h2>Loose list</h2>
			<ul className="list list--loose">
				<li>One potato</li>
				<li>Two potato</li>
				<li>Three potato</li>
				<li>
					More, nested list:
					<ul>
						<li>One potato</li>
						<li>Two potato</li>
						<li>Three potato</li>
					</ul>
				</li>
			</ul>
			<h2>Tight list</h2>
			<ul className="list list--tight">
				<li>One potato</li>
				<li>Two potato</li>
				<li>
					Three potato, loost list nested:
					<ul className="list list--loose">
						<li>One potato</li>
						<li>Two potato</li>
						<li>Three potato</li>
					</ul>
				</li>
			</ul>
			<h2>Piped list</h2>
			<ul className="list list--piped">
				<li>
					<a href="#">One potato</a>
				</li>
				<li>
					<a href="#">Two potato</a>
				</li>
				<li>Three potato</li>
			</ul>
		</div>
	);
};
