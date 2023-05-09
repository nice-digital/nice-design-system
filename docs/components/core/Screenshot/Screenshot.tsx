/* eslint-disable @next/next/no-img-element */
import styles from "./Screenshot.module.scss";

interface ScreenshotProps {
	image: string;
	alt: string;
	caption: string;
}

export const Screenshot = ({ image, alt, caption }: ScreenshotProps) => {
	const imageSrc = `/images/screenshots/${image}`;
	return (
		<figure className={styles.container}>
			<a href={imageSrc}>
				<img className={styles.screenshot} src={imageSrc} alt={alt} />
			</a>
			<figcaption className={styles.caption}>{caption}</figcaption>
		</figure>
	);
};
