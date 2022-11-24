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
				<li>
					<Link href="/test">Test page 1 (NDS Action Banner)</Link>
				</li>
				<li>
					<Link href="/test2">Test page 2 (A glorious button)</Link>
				</li>
				<li>
					<Link href="/test3">
						Test page 3 (MDX, code samples, nested layout)
					</Link>
				</li>
			</ul>
		</>
	);
}
