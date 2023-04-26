import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="crossOrigin"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Lora:ital,wght@0,400;0,600;1,400;1,600&display=swap"
					rel="stylesheet"
				/>
				<Script strategy="afterInteractive" id="google-tag-manager">
					{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
						new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
						j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
						'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
						})(window,document,'script','dataLayer','GTM-M5FXXWL');`}
				</Script>
			</Head>
			<body>
				<noscript>
					<iframe
						src="https://www.googletagmanager.com/ns.html?id=GTM-M5FXXWL"
						height="0"
						width="0"
						style={{ display: "none", visibility: "hidden" }}
					></iframe>
				</noscript>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
