import React from "react";
import { Header, Footer } from "@nice-digital/global-nav";

export const PrintView = () => {
	return (
		<>
			<Header />
			<img
				src="https://media.giphy.com/media/lXiRLb0xFzmreM8k8/source.gif"
				alt="Should print!"
			/>
			<p className="show-print">
				1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
				perspiciatis quisquam ab nam, dolorem dolorum qui est, veritatis dicta
				nostrum possimus ex distinctio velit maiores, voluptate quam eveniet
				doloremque accusantium.
			</p>
			<hr />
			<p className="hide-print">
				2 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi
				pariatur quam quod facere explicabo fugiat ea quidem eaque? Tempora
				natus est et, delectus quaerat accusamus eaque temporibus praesentium
				maiores beatae sapiente sequi unde similique eum! Quo, sit laboriosam?
				Perferendis, omnis?
			</p>
			<img src="https://media.giphy.com/media/n1j3I3AESrZ04/source.gif" />
			<p>
				3 Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				Exercitationem nihil at harum magni rerum facere eius similique corporis
				minus natus a ullam quaerat aliquid explicabo nemo, impedit, facilis
				quasi. Perspiciatis reiciendis quisquam iure aspernatur, nisi laboriosam
				ratione cum sapiente ducimus delectus quos, vero consequuntur facere
				accusantium? Exercitationem debitis magnam perspiciatis.
			</p>
			<Footer />
		</>
	);
};
