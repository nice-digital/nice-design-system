import styles from "./ExternalLinkList.module.scss";

export interface ExternalLinkListProps {
	gitHubUrl?: string;
	npmUrl?: string;
}

export const ExternalLinkList = ({
	gitHubUrl,
	npmUrl
}: ExternalLinkListProps) => {
	return (
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
	);
};
