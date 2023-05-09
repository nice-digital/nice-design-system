import { type PageMeta } from "types/PageMeta";
import { Example } from "components/examples/Example";

import styles from "./ComponentHeader.module.scss";

export const ComponentHeader = ({
	title,
	description,
	npmUrl,
	gitHubUrl,
	component: Component
}: PageMeta) => {
	const shouldShowExternalLinks = gitHubUrl || npmUrl;
	const headerClass = Component
		? styles.header
		: `${styles.header} ${styles.headerNoComponent}`;

	return (
		<header className={headerClass}>
			<h1>{title}</h1>
			{description && <p className="lead">{description}</p>}
			{shouldShowExternalLinks && (
				<ul className={styles.externalLinkList}>
					{gitHubUrl && (
						<li>
							<a href={gitHubUrl}>View on GitHub</a>
						</li>
					)}
					{npmUrl && (
						<li>
							<a href={npmUrl}>View on NPM</a>
						</li>
					)}
				</ul>
			)}
			{Component && (
				<Example>
					<Component />
				</Example>
			)}
		</header>
	);
};
