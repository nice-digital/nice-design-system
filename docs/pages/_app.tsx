import "../styles/globals.scss";
import "@code-hike/mdx/dist/index.css";
import type { AppProps } from "next/app";
import { RootLayout } from "../components/layouts/RootLayout";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<RootLayout>
			<Component {...pageProps} />
		</RootLayout>
	);
}
