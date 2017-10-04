import pluginizr from "../../javascripts/pluginizr";
import utils from "../../javascripts/utils";
import { matchesFrom } from "../../javascripts/breakpoints";

import template from "./in-page-nav.template.njk";

/**
 * { The default settings for in page nav }
 *
 * @type       {Object}
 */
export const Defaults = {

	// Selector for the container to look for headings from which the nav tree is built
	headingsContainer: "body",

	// Selector for headings to include
	headings: "h2,h3",

	// Selector for excluding headings
	headingsExclude: "[data-no-inpagenav] *, [data-no-inpagenav]",

	// Number of pixels from the top of the screen that a heading is considered to be 'active'
	scrollTolerance: 80,

	// The target element that the in page nav will be moved to on wider breakpoints
	wideTarget: null,

	// The breakpoint from which the nav will be moved into 'wideTarget'
	wideBreakpoint: "md"
};

/// Creates a nested, in page navigation, built from existing headings on the page.
/// @see {@link http://stackoverflow.com/a/12279190/486434|Useful answer on StackOverflow}
/// @example <caption>Simplest example</caption>
/// 	<div data-inpagenav></div>
/// @example <caption>Example with all options</caption>
/// 	<aside role="complementary" data-inpagenav data-inpagenav-headings-container="#main" data-inpagenav-headings="h2,h3" data-inpagenav-headings-exclude="[data-no-inpagenav]" data-inpagenav-scroll-tolerance="100"></aside>
/// @example <caption>Raw JS usage</caption>
/// 	let inPageNav = new InPageNav($nav);
/// @example <caption>jQuery plugin usage</caption>
/// 	$(document).ready(function() {
/// 		$nav.inpagenav();
/// 	});
export default class InPageNav {

	static defaults() {
		return Defaults;
	}

	constructor(element, options) {
		if(!element) throw new Error("Element must be non-null");

		this.el = element;
		this.$el = $(element);

		// Generate uid for this component, used for namespacing events
		this.uid = utils.nextUniqueId("inpagenav");

		this.options = $.extend({}, InPageNav.defaults(), options);

		// The containing element where the nav will be moved to on wider breakpoints
		this.$wideTarget = $("#" + this.options.wideTarget);

		// Find headings to use for building the nav
		this.headings = this.getHeadings();

		this.render();
		this.updateNavState();

		$(window)
			.on(`load.InPageNav.${ this.uid }`, () => {
				this.updateNavState();
			})
			.on(`scroll.InPageNav.${ this.uid }`, () => {
				this.updateNavState(true);
			})
			.on(`resize.InPageNav.${ this.uid }`, () => {
				this.calculatePosition();
			});
	}

	destroy() {
		$(window).off(`.${ this.uid }`);
		this.$el.remove();
	}

	// Builds a navigation object tree and renderes it into the element
	// via the pre-compiled template
	render() {

		// Recursively builds a nested tree of links
		var buildTree = (headings: Array<HTMLHeadingElement>, level: number = 0): Array => {
			var arr = [];
			for (var i = 0; i < headings.length; i++) {
				var hdng = headings[i];

				// Headings needs an id for the # href to work
				this.generateHeadingId(hdng);

				// TODO: Replace magic number '2' with min from list of headings
				var index = parseInt(hdng.tagName.substring(1)) - 2;

				if(index === level) {
					arr.push({
						title: $(hdng).text(),
						href: "#" + hdng.id,
						links: buildTree(headings.slice(i + 1), level + 1)
					});
				} else if (level > 0) {
					return arr;
				}
			}
			return arr;
		};

		// Render the nested tree with our pre-compiled template
		let tree = buildTree(this.headings);
		this.$el.html(template.render({ links: tree }));

		this.$inpagenav = this.$el.find(".in-page-nav");
	}

	/**
	 * Resets classes and aria attributes
	 */
	resetNavState() {
		$("a", this.$inpagenav).attr("aria-selected", false);

		this.$inpagenav.removeAttr("aria-activedescendant");

		// TODO: This should be a media query with em values
		// Nav is fully expanded on smaller breakpoints
		// and expands as you scroll on wider breakpoints
		if(matchesFrom(this.options.wideBreakpoint)) {
			$(".in-page-nav__list .in-page-nav__list", this.$inpagenav)
				.attr("aria-expanded", false)
				.attr("aria-hidden", true);
		} else {
			$(".in-page-nav__list .in-page-nav__list", this.$inpagenav)
				.attr("aria-expanded", true)
				.attr("aria-hidden", false);
		}
	}

	// Determins which navigation elements are active
	updateNavState(updateHash = false) {

		this.resetNavState();

		let activeHeading = this.getActiveHeading();

		if(!activeHeading) return;

		let activeHref = "#" + activeHeading.id,
			$activeLink = $("a[href='" + activeHref + "']", this.$inpagenav);

		if(updateHash && history.replaceState) {
			history.replaceState(undefined, undefined, activeHref);
		}

		// Set aria-activedescendant on parent element
		this.$inpagenav.attr("aria-activedescendant", $activeLink.attr("id"));

		$activeLink.attr("aria-selected", true);

		// aria-expanded="true/false" for second-level <ul> containers
		// aria-hidden="true/false" for second-level <ul> containers
		$activeLink
			.closest(".in-page-nav__item")
			.find(".in-page-nav__list")
			.attr("aria-expanded", true)
			.attr("aria-hidden", false)
			.end()
			.parents(".in-page-nav__list")
			.attr("aria-expanded", true)
			.attr("aria-hidden", false);

		this.calculatePosition();
	}


	calculatePosition() {
		// If the element isn't attached to the dom then don't care about calculating position
		if(!document.contains(this.$el[0])) return;

		this.calculateFixedPosition();
		this.attachToCorrectParent();
	}

	/**
	 * Works out whether the menu should be fixed or not and add/removes a class to reflect this.
	 */
	calculateFixedPosition() {
		let isFixed = this.$inpagenav.outerHeight() <= $(window).height()
			&& $(window).scrollTop() > this.$inpagenav.parent().offset().top;

		if(isFixed)
			this.$inpagenav.addClass("in-page-nav--fixed");
		else
			this.$inpagenav.removeClass("in-page-nav--fixed");
	}

	// Attached the in page nav to the correct parent depending on breakpoint.
	// ie on mobile devices the nav sits within the main body but on wider screens
	// it gets copied into a different container
	attachToCorrectParent() {

		let isWide = matchesFrom(this.options.wideBreakpoint)
			&& this.$wideTarget.length === 1;

		// Move to the correct container based on width
		if(isWide) {
			if(!this.$inpagenav.parent().is(this.$wideTarget)) {
				// Move element to the target
				this.$inpagenav.appendTo(this.$wideTarget);
			}
			this.$inpagenav.width(this.$wideTarget.width());
		} else if(!this.$inpagenav.parent().is(this.$el)) {
			this.$inpagenav.appendTo(this.$el);
			this.$inpagenav.width("auto");
		}
	}

	/**
	 * Returns the 'active' heading element. That is, the heading at the top
	 * of the viewport, taking into the scrollTolerance option.
	 */
	getActiveHeading(): ?HTMLHeadingElement {
		let scrollTop = $(window).scrollTop(),
			activeHeading = this.headings && this.headings[0] || null;

		$(this.headings).each((i, heading) => {
			let y = $(heading).offset().top - scrollTop - this.options.scrollTolerance;
			if(y <= 0)
				activeHeading = heading;
			else
				return false;
		});

		return activeHeading;
	}

	// Find headings to use for building the nav
	getHeadings(): Array<HTMLHeadingElement> {
		return $(this.options.headingsContainer)
			.find(this.options.headings)
			.not(this.options.headingsExclude)
			.not("#ipn-title")
			.toArray();
	}

	/**
	 * Generates an id for a given heading element from its text content, but only if
	 * it doesn't already have an id.
	 * Checks to se if an element alrerady exists with the generated id - if it does
	 * then it adds an integer suffix incremented from the current maximum e.g. -1, -2.
	 * This is to cater for the scenario that the id already exists on the page or if
	 * there are 2 headings with the same text.
	 *
	 * @param {HTMLHeadingElement} heading { The heading for which to generate an id }
	 * @returns {HTMLHeadingElement} { The heading that was passed in }
	 */
	generateHeadingId(heading: HTMLHeadingElement): HTMLHeadingElement {

		if(heading.id) return heading;

		let slug: string = utils.slugify(heading.textContent);

		if($(`#${ slug }`).length === 0) {
			heading.id = slug;
			return heading;
		}

		// Increment the integer suffix to make a unique id
		let slugPrefixRegex: RegExp
			= new RegExp(`^${ slug }(-\d+)?`, "i");

		let isSlugPrefixMatch
			= (i, el) => el.id.match(slugPrefixRegex);

		let max: number
			= $("[id]").filter(isSlugPrefixMatch).length;

		heading.id = `${ slug }-${ max + 1 }`;
		return heading;
	}
}
pluginizr("inpagenav", InPageNav);
