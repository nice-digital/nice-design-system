import { useEffect } from "react";
import { useRouter } from "next/router";

interface RedirectProps {
	to: string;
}

export function Redirect({ to }: RedirectProps) {
	const { replace } = useRouter();

	useEffect(() => {
		replace(to);
	}, [replace, to]);

	return (
		<noscript>
			<meta httpEquiv="refresh" content={`0;url=${to}`} />
		</noscript>
	);
}
