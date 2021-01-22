import orderBy from "lodash/orderBy";
import { ResponseObjectType } from "./Navigation";
import {
	formatList,
	isSiblingOrDirectChild,
	slugMatches
} from "../../../utils";

type resultsType = Array<{
	label: string;
	destination: string;
	isCurrent: boolean;
	order: number;
}>;

export function navigationGenerator(
	navigation: ResponseObjectType[],
	currentId: string,
	currentSlug: string
) {
	let results: resultsType = [];

	// get all the entries that start with the current slug
	const relevant = navigation.filter(slugMatches, currentSlug);
	// if none of them match, return nout
	if (relevant.length === 0) {
		console.warn(
			"Current page slug didn't match anything in the generated nav list"
		);
		return results;
	}

	// if there's only one, you know there's no children
	else if (relevant.length === 1) {
		const arr = currentSlug.split("/").filter(i => i);
		// so we need the siblings that include the slug minus one segment
		arr.length = arr.length - 1;

		const parentSlug = arr.join("/");

		results = navigation
			.filter(slugMatches, parentSlug)
			.filter(isSiblingOrDirectChild, arr.length)
			.map(formatList, currentId);
	} else {
		const currentSlugLength = currentSlug.split("/").filter(i => i).length;

		results = relevant
			.filter(isSiblingOrDirectChild, currentSlugLength)
			.map(formatList, currentId);
	}

	return orderBy(results, ["order", "label"]);
}
