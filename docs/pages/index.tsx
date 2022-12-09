import Head from "next/head";
import Link from "next/link";
import { Hero } from "@nice-digital/nds-hero";

export default function Home() {
	return (
		<>
			<Head>
				<title>Nice Design System</title>
				<meta
					name="description"
					content="Create consistent and on-brand digital services"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Hero
				title="NICE Design System"
				intro="Create consistent and on-brand digital services"
				header={
					<>
						<div>Add breadcrumbs...</div>
					</>
				}
			/>

			<ul>
				<li>
					<Link href="/components/action-banner">Action Banner docs page</Link>
				</li>
			</ul>
		</>
	);
}
