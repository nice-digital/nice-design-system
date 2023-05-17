/* eslint-disable @next/next/no-img-element */
import { MaintainRatio } from "@nice-digital/nds-maintain-ratio";

export const Floats = () => (
	<div className="clearfix">
		<div className="left">Floated left</div>
		<div className="right">Floated right</div>
	</div>
);

export const CenterBlock = () => (
	<div
		className="center-block text-center"
		style={{ background: "#eee", width: "200px" }}
	>
		Center block
	</div>
);

export const TextAlignment = () => (
	<>
		<p className="text-left">This is some left-aligned text</p>
		<p className="text-right">This is some right-aligned text</p>
		<p className="text-center">This is some center-aligned text</p>
		<p className="text-justify">This is some justified text</p>
	</>
);

export const TextWrapping = () => (
	<div style={{ background: "#eee", width: "80px" }}>
		<p className="text-nowrap">This is some text that doesn&apos;t wrap</p>
		<p className="text-truncate">This is some truncated text</p>
	</div>
);

export const TextTransformation = () => (
	<>
		<p className="text-lowercase">Lowercased text</p>
		<p className="text-uppercase">Uppercased text</p>
		<p className="text-capitalize">Capitalized text</p>
	</>
);

export const MaintainRatio169 = () => (
	<MaintainRatio ratio="16:9">
		<iframe
			src="https://www.youtube.com/embed/h7FP4FEDWrA"
			height="500px"
			width="100%"
			title="YouTube video player"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
		></iframe>
	</MaintainRatio>
);

export const MaintainRatio43 = () => (
	<MaintainRatio ratio="4:3">
		<iframe
			width="100%"
			height="700px"
			src="https://www.youtube.com/embed/h7FP4FEDWrA"
			title="YouTube video player"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
		></iframe>
	</MaintainRatio>
);
