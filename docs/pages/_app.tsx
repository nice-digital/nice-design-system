import "../styles/globals.scss";
import "@code-hike/mdx/dist/index.css";
import type { AppProps } from "next/app";
import { Inter, Lora } from "next/font/google";
import { RootLayout } from "../components/layouts/RootLayout";

const inter = Inter({
	subsets: ["latin"]
});

const lora = Lora({
	subsets: ["latin"]
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<style jsx global>{`
				html {
					--sans-font-family: ${inter.style.fontFamily};
					--serif-font-family: ${lora.style.fontFamily};
				}
			`}</style>
			<RootLayout>
				<Component {...pageProps} />
			</RootLayout>
		</>
	);
}
