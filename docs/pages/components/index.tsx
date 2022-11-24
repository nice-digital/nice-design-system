import Head from "next/head";
import Link from "next/link";
import { Breadcrumb, Breadcrumbs } from "@nice-digital/nds-breadcrumbs";

export default function Components() {
	return (
		<>
			<Head>
				<title>Components | Nice Design System</title>
			</Head>
			<Breadcrumbs>
				<Breadcrumb to="/">NICE Design System</Breadcrumb>
				<Breadcrumb>Components</Breadcrumb>
			</Breadcrumbs>

			<h1>Components index page (TODO!)</h1>

			<ul>
				<li>
					<Link href="/components/action-banner">Action Banner</Link>
				</li>
			</ul>
		</>
	);
}
