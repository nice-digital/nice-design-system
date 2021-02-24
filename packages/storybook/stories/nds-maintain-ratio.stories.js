import React from "react";

import { storiesOf } from "@storybook/react";
import { select, boolean } from "@storybook/addon-knobs";
import imageSample from "./assets/image-sample.png";
import videoSample from "./assets/video-sample.mp4";
import pdfSample from "./assets/pdf-sample.pdf";
import { Grid, GridItem } from "@nice-digital/nds-grid";
import { MaintainRatio } from "@nice-digital/nds-maintain-ratio";

const contentOptions = {
	Image: <img src={imageSample} alt="" />,
	Video: <video controls src={videoSample} />,
	iFrame: <iframe src="/?path=/story/action-banner--default" />,
	Object: <object type="application/pdf" data={pdfSample} />
};

storiesOf("Foundations/Maintain Ratio", module).add("Try it out", () => {
	const content = select("Child content", Object.keys(contentOptions), "Image");
	const ratio = select("Ratios", MaintainRatio.ratios);
	const props = {
		ratio,
		stretchFirstChild: boolean("Stretch first child")
	};
	const layoutHelper = boolean("Show layout helper");
	return (
		<Grid>
			<GridItem cols="4">
				<div
					style={layoutHelper ? { background: "red" } : { background: "none" }}
				>
					<MaintainRatio {...props}>{contentOptions[content]}</MaintainRatio>
				</div>
			</GridItem>
		</Grid>
	);
});
