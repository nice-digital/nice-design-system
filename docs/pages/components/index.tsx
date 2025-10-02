import { useEffect } from "react";
import { useRouter } from "next/router";

export default function ComponentsRedirect() {
	const { replace } = useRouter();

	useEffect(() => {
		replace("/design-library/#components");
	}, [replace]);

	return (
		<noscript>
			<meta httpEquiv="refresh" content="0;url=/design-library/#components" />
		</noscript>
	);
}
