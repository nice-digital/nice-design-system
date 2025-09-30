import { useEffect } from "react";

export default function FoundationsRedirect() {
	useEffect(() => {
		window.location.replace("/");
	}, []);

	return (
		<noscript>
			<meta httpEquiv="refresh" content="0;url=/" />
		</noscript>
	);
}
