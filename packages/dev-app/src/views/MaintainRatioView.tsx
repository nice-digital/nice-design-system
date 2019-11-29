import React from "react";
import { MaintainRatio } from "@nice-digital/nds-maintain-ratio";

export const MaintainRatioView = () => {
	return (
		<>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius obcaecati
				repellat at ab laboriosam? Ipsam hic, fugit quibusdam culpa aliquid
				excepturi error distinctio iste suscipit enim saepe voluptates nemo
				quaerat.
			</p>
			<MaintainRatio stretchFirstChild={true}>
				<div style={{ background: "blue" }}>
					<p>hello</p>
					<p>how are</p>
					<p>you</p>
				</div>
			</MaintainRatio>
			<MaintainRatio ratio="16:9">
				<div style={{ background: "red" }}>hello</div>
			</MaintainRatio>
			<MaintainRatio ratio="16:9" stretchFirstChild={true}>
				<img
					src="https://media3.giphy.com/media/iiWHlIfhGpU4PAMAAK/giphy.gif?cid=ecf05e47dab6ae5446b2688a6a7e41428d60e54ba38a656a&rid=giphy.gif"
					alt=""
				/>
				<img
					src="https://media3.giphy.com/media/iiWHlIfhGpU4PAMAAK/giphy.gif?cid=ecf05e47dab6ae5446b2688a6a7e41428d60e54ba38a656a&rid=giphy.gif"
					alt=""
				/>
			</MaintainRatio>
			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus,
				odio? Tempora, beatae molestiae? Deserunt eligendi non iste aut
				doloremque possimus!
			</p>
		</>
	);
};
