/* eslint-disable quotes */
import React, { FC } from "react";

import icons from "@nice-digital/icons/dist/nice-icons.json";
import { Panel } from "@nice-digital/nds-panel";
import { Button } from "@nice-digital/nds-button";

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
						<li key={name} className="mb--c">
							<details>
								<summary>
									<span className="h3 mv--0">
										<span
											className={`icon icon--${name}`}
											aria-hidden="true"
										></span>
									</span>
									<span className="h6 ml--c mt--0 mb--0">{name}</span>
								</summary>
								<Panel className="mt--c">
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
									<Button
										to={`/fonts/${name}.svg`}
										variant="secondary"
										download
									>
										Download {name}.svg
									</Button>
								</Panel>
							</details>
						</li>
					);
				})}
		</ul>
	);
};
