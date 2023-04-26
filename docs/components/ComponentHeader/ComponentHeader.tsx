import { type PageMeta } from "types/PageMeta";
import styles from "./ComponentHeader.module.scss";

export const ComponentHeader = ({
	title,
	description,
	npmUrl,
	gitHubUrl
}: PageMeta) => {
	const shouldShowExternalLinks = gitHubUrl || npmUrl;

	return (
		<header className={styles.header}>
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
		</header>
	);
};
