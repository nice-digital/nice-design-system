/* eslint-disable quotes */
import React, { FC } from "react";

import icons from "@nice-digital/icons/dist/nice-icons.json";
import { Panel } from "@nice-digital/nds-panel";

export const IconList: FC = () => {
	return (
		<ul className="list list--unstyled">
			{Object.entries(icons)
				.sort((a, b) => a[0].localeCompare(b[0]))
				.map(([name, codepoint]) => {
					const reactName =
						name[0].toUpperCase() +
						name.slice(1).replace(/-./g, x => x[1].toUpperCase());

					return (
						<li key={name}>
							<details>
								<summary className="h5 mt--0 mb--0">
									{name}{" "}
									<span
										className={`icon icon--${name}`}
										aria-hidden="true"
									></span>
								</summary>
								<Panel>
									<dl>
										<dt>HTML embed code</dt>
										<dd>
											<code>{`<span class="icon icon--${name}" aria-hidden="true"></span>`}</code>
										</dd>
										<dt>React embed code</dt>
										<dd>
											<code>
												{`import ${reactName} from "@nice-digital/icons/lib/${reactName}";`}
												<br />
												<br />
												{`<${reactName} />`}
											</code>
										</dd>
										<dt>SASS mixin</dt>
										<dd>
											<code>{`@include nice-icon(${name});`}</code>
										</dd>
										<dt>SASS function</dt>
										<dd>
											<code>{`&:before { content: nice-icon(${name}); }`}</code>
										</dd>
									</dl>
								</Panel>
							</details>
						</li>
					);
				})}
		</ul>
	);
};
