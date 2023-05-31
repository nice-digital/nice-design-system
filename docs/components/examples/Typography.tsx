export const AllHeadings = () => (
	<div>
		<h1>Heading 1</h1>
		<p>49px 2.75rem / 600 / line-height: 1.2</p>
		<h1 className="h1-alt">Heading 1 alt</h1>
		<p>42.75px 2.375rem / 600 / line-height: 1.2</p>
		<h2>Heading 2</h2>
		<p>38.25px 2.125rem / 600 / line-height: 1.2</p>
		<h3>Heading 3</h3>
		<p>31.5px 1.75rem / 600 / line-height: 1.25</p>
		<h4>Heading 4</h4>
		<p>24.75px 1.375rem / 600 / line-height: 1.3</p>
		<h5>Heading 5</h5>
		<p>20.25px 1.125rem / 600 / line-height: 1.4</p>
		<h6>Heading 6</h6>
		<p>18px 1rem / 600 / line-height: 1.6</p>
	</div>
);

export const BodyText = () => (
	<p>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed gravida
		augue, ut semper nunc. Praesent ultrices at turpis fringilla congue. Proin
		iaculis dolor non nibh pellentesque scelerisque.
	</p>
);

export const LeadText = () => (
	<p className="lead">
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed gravida
		augue, ut semper nunc.
	</p>
);

export const SmallText = () => <small>This is smaller text.</small>;

export const BoldText = () => <strong>This is strong text.</strong>;

export const ItalicText = () => <em>This is italicized text.</em>;

export const StrikethroughText = () => (
	<s>This text should be treated as no longer accurate.</s>
);

export const Quote = () => (
	<blockquote className="quote">
		<p>
			We do the right work in the right way at NICE. We mix content, dev, design
			and research at the start to solve user problems. We produce things
			quickly, get data and refine.{" "}
		</p>
		<footer>
			<cite>
				<strong>Dafydd - Content Team</strong>
			</cite>
		</footer>
	</blockquote>
);

export const BulletedList = () => (
	<ul>
		<li>
			<a href="#">list item</a>
		</li>
		<li>
			<a href="#">list item</a>
		</li>
	</ul>
);

export const NumberedList = () => (
	<ol>
		<li>
			<a href="#">list item</a>
		</li>
		<li>
			<a href="#">list item</a>
		</li>
	</ol>
);

export const UnstyledList = () => (
	<ul className="list list--unstyled">
		<li>
			<a href="#">list item</a>
		</li>
		<li>
			<a href="#">list item</a>
		</li>
	</ul>
);

export const PipedList = () => (
	<ul className="list list--piped">
		<li>
			<a href="#">Published</a>
		</li>
		<li>
			<a href="#">In consultation</a>
		</li>
		<li>
			<a href="#">In development</a>
		</li>
		<li>
			<a href="#">Proposed</a>
		</li>
	</ul>
);

export const DefaultList = () => (
	<ul>
		<li>list item 1</li>
		<li>list item 2</li>
		<li>list item 3</li>
	</ul>
);

export const LooseList = () => (
	<ul className="list--loose">
		<li>list item 1</li>
		<li>list item 2</li>
		<li>list item 3</li>
	</ul>
);

export const TightList = () => (
	<ul className="list--tight">
		<li>list item 1</li>
		<li>list item 2</li>
		<li>list item 3</li>
	</ul>
);
