/*eslint-env browser */
/**
 * @module In page navigation
 */

import pluginizr from "../../javascripts/pluginizr";
import utils from "../../javascripts/utils";

import template from "./in-page-nav.template.njk";

/**
 * The name of the jquery plugin e.g. $(".test").inpagenav();
 * @type       {string}
 */
export const pluginName: String = "inpagenav";

/**
 * The headings to exclude
 * @type       {string}
 */
export const headingsExclude: String = "[data-no-inpagenav] *, [data-no-inpagenav], .card *, .footer *, .site-footer *, .stacked-nav *, .page-header *";


/**
 * The default settings, used for in page navigation.
 * @type       {Object}
 */
export const Defaults = {

	// Selector for the container in which to look for headings from which the nav tree is built
	headingsContainer: "body",

	// Selector for headings to include
	headings: "h2, h3",

	// Selector(s) for headings to exclude
	headingsExclude: "",

	// Selector for a footer to avoid overlap
	footerContainer: ".footer, .site-footer",

	// Number of pixels from the top of the screen that a heading is considered to be 'active'
	scrollTolerance: 80
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

	static defaults() { return Defaults; }

	constructor(element, options) {
		if(!element) throw new Error("Element must be non-null");

		this.$el = $(element);

		this.options = $.extend({}, InPageNav.defaults(), options);

		// Append the static headings to excluded headings
		if(this.options.headingsExclude !== "")
			this.options.headingsExclude += ",";
		this.options.headingsExclude += headingsExclude;

		// Generate uid (e.g. inpagenav-9) for this component, used for namespacing events
		this.uid = utils.nextUniqueId(pluginName);

		// Find headings to use for building the nav
		this.headings = this.findHeadings();

		this.render();
		this.updateNavState();

		// Used 2 namespaces for global events:
		// - Plugin name
		// - Individual instance id
		$(window)
			.on(`load.${ pluginName }.${ this.uid }`, () => {
				this.updateNavState();
			})
			.on(`scroll.${ pluginName }.${ this.uid }`, utils.throttle(() => {
				this.updateNavState(true);
			}, 50))
			.on(`resize.${ pluginName }.${ this.uid }`, utils.debounce(() => {
				this.calculatePosition();
			}, true));
	}

	/**
	 * Removes all event listeners (by namespace) and removes element
	 */
	destroy() {
		// Used the namespaced event
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
		$("a", this.$el).attr("aria-current", false);

		$("[aria-activedescendant]", this.$el).removeAttr("aria-activedescendant");

		$(".in-page-nav__list .in-page-nav__list", this.$el)
			.attr("aria-expanded", false)
			.attr("aria-hidden", true);
	}

	/**
	 * Determines which navigation elements are active
	 *
	 * @param      {boolean}  updateHash  Whether to update the hash in the URL
	 */
	updateNavState(updateHash = false) {

		this.resetNavState();

		let activeHeading = this.getActiveHeading();

		if(!activeHeading) return;

		let activeHref = "#" + activeHeading.id,
			$activeLink = $("a[href='" + activeHref + "']", this.$inpagenav).attr("aria-current", "location");

		if(updateHash) {
			if(history.replaceState)
				history.replaceState(undefined, undefined, activeHref);
			else if(window.location.hash != activeHref)
				window.location.hash = activeHref;
		}

		// Set aria-activedescendant on parent element
		this.$inpagenav.attr("aria-activedescendant", $activeLink.attr("id"));

		$activeLink
			.closest(".in-page-nav__item")
			.find(".in-page-nav__list")
			.attr("aria-hidden", false)
			.end()
			.parents(".in-page-nav__list")
			.attr("aria-hidden", false);

		this.calculatePosition();
	}

	/**
	 * Works out whether the menu should be fixed or not and add/removes a class to reflect this.
	 */
	calculatePosition() {
		let isFixed = this.$inpagenav.outerHeight() <= $(window).height()
			&& $(window).scrollTop() > this.$inpagenav.parent().offset().top;

		if(isFixed) {
			this.$inpagenav.addClass("in-page-nav--fixed");
			this.$inpagenav.width(this.$el.width());

			// Take footer into consideration to avoid overlap
			var $footer = $(this.options.footerContainer);
			if($footer.length > 0) {
				var footerYPos = $(this.options.footerContainer).offset().top - $(window).scrollTop(),
					top = footerYPos - this.$inpagenav.outerHeight();
				this.$inpagenav.css("top", (top < 0 ? top : ""));
			}
		}
		else {
			this.$inpagenav.removeClass("in-page-nav--fixed");
			this.$inpagenav.width("auto").css("top", "");
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

	/**
	 * Find headings within the headings container to use for building the nav.
	 * Ignores "excluded" headings, from the options passed in.
	 */
	findHeadings(): Array<HTMLHeadingElement> {
		return $(this.options.headingsContainer).find(this.options.headings)
			.not(this.options.headingsExclude).not("#inpagenav-title")
			.toArray();
	}

	/**
	 * Generates a unique id for a given heading element from its text content, but only if
	 * it doesn't already have an id attribute.
	 * Checks to see if an element already exists with the generated id - if it does
	 * then it adds an integer suffix incremented from the current maximum e.g. "-1", "-2" etc.
	 * This is to cater for the scenario that the id already exists on the page or if
	 * there are 2 headings with the same text.
	 *
	 * @param {HTMLHeadingElement} heading { The heading for which to generate an id }
	 * @returns {HTMLHeadingElement} { The heading that was passed in }
	 */
	generateHeadingId(heading: HTMLHeadingElement): HTMLHeadingElement {

		if(heading.id) return heading;

		let slug: string = utils.slugify(heading.textContent || heading.innerText);

		if($(`#${ slug }`).length === 0) {
			heading.id = slug;
			return heading;
		}

		// Increment the integer suffix to make a unique id
		let slugPrefixRegex: RegExp
			= new RegExp(`^${ slug }(-[0-9]+)?`, "i");

		let isSlugPrefixMatch
			= (i, el) => el.id.match(slugPrefixRegex);

		let max: number
			= $("[id]").filter(isSlugPrefixMatch).length;

		heading.id = `${ slug }-${ max + 1 }`;
		return heading;
	}
}
pluginizr(pluginName, InPageNav);
