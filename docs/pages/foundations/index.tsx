import { useEffect } from "react";
import { useRouter } from "next/router";

export default function FoundationsRedirect() {
	const { replace } = useRouter();

	useEffect(() => {
		replace("/design-library/#foundations");
	}, [replace]);

	return (
		<noscript>
			<meta httpEquiv="refresh" content="0;url=/design-library/#foundations" />
		</noscript>
	);
}
