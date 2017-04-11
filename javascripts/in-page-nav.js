(function() {
	var elements = anchors.elements,
		options = {
			// Comma separated list of capitalized heading tags
			//The only headings tags we care about for our tree. Note capitals for the tag property
			headingTags: "H2, H3",

			// Number of pixels from the top of the screen that a heading is considered to be 'active'
			scrollTolerance: 100
		},
		$el;

	$(document).ready(function() {

		$el = $("[data-inpagenav]");
		render();

		$el.on("click", "a", function(e) {
			if(history.replaceState) {
				e.preventDefault();

				$("html, body").animate({
					scrollTop: $($(e.currentTarget).attr("href")).offset().top
				}, 250);
			}
		});

		updateNavState(false);
	});

	$(window).on("load", function() {
		updateNavState(false);
	});

	$(window).on("scroll", function() {
		updateNavState(true);
	});

	$(window).on("resize", calculatePosition);

	// Renders the nav tree
	function render() {

		// Recursively builds a nested tree of links
		var buildTree = function(headings, level) {
			var arr = [];
			for (var i = 0; i < headings.length; i++) {
				var hdng = headings[i];
				if(_headingIndex(hdng) === level) {
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

		var templateHtml = $("#in-page-nav-template").html();

		// Render the nested tree with our pre-compiled template
		let tree = buildTree(_getHeadings(), 0);
		var res = nunjucks.renderString(templateHtml, { links: tree });
		$el.html(res);

		updateNavState();
	}

	// Resets classes and aria attributes
	function resetNavState() {
		$("a", $el).attr("aria-selected", false);

		$el.find(".in-page-nav").removeAttr("aria-activedescendant");

		$(".in-page-nav__list--level-2", $el)
			.attr("aria-expanded", false)
			.attr("aria-hidden", true);

		$(".in-page-nav__item", $el)
			.removeClass("in-page-nav__item--active");

		$(".in-page-nav__list", $el)
			.removeClass("in-page-nav__list--active");
	}

	// Determins which navigation elements are active
	function updateNavState(updateHash) {
		resetNavState();

		var activeHeading = getActiveHeading();

		if(!activeHeading) return;

		let $activeLink = $(`a[href='#${ activeHeading.id }']`, this.$el);

		if(updateHash && history.replaceState) {
			history.replaceState(undefined, undefined, $activeLink.attr("href"));
		}

		// Set aria-selected="true" on active a tag

		$activeLink.attr("aria-selected", true);

		// Set aria-activedescendant on parent element
		$el.find(".in-page-nav").attr("aria-activedescendant", $activeLink.attr("id"));

		// aria-expanded="true/false" for second-level <ul> containers
		// aria-hidden="true/false" for second-level <ul> containers
		$(".in-page-nav__list--level-2", $el).attr("aria-expanded", false).attr("aria-hidden", true);
		$activeLink.closest(".in-page-nav__list--level-2").attr("aria-expanded", true).attr("aria-hidden", false);

		// Apply the active class to the correct heading
		$activeLink
			.parents(".in-page-nav__item")
			.addClass("in-page-nav__item--active")
			.find(".in-page-nav__list")
			.addClass("in-page-nav__list--active");

		calculatePosition();
	}

	// Works out whether the menu should be fixed or not
	function calculatePosition() {
		if($el.outerHeight() > $(window).height()) {
			$el.removeClass("in-page-nav--fixed");
		}
		else if($(window).scrollTop() <= $el.parent().offset().top) {
			$el.removeClass("in-page-nav--fixed");
		}
		else {
			$el.addClass("in-page-nav--fixed");
		}
	}

	// Returns the active heading element from anchor js, that is, the heading
	// at the top of the viewport
	function getActiveHeading() {
		var scrollTop = $(window).scrollTop(),
			headings = _getHeadings(),
			activeHeading = headings && headings[0] || null;

		for (var i = 1; i < headings.length; i++) {
			let y = $(headings[i]).offset().top - scrollTop - options.scrollTolerance;
			if(y <= 0)
				activeHeading = headings[i];
			else
				break;
		}

		return activeHeading;
	}


	// Gets the elements from anchors js, filtered to ensure they are heading tags
	function _getHeadings() {
		return elements.filter(_isHeadingTag);
	}

	// Turn our comma separated list of strings into an array
	function _getTags() {
		return options.headingTags.split(/[\s,]+/g);
	}

	// Gets the index of the heading within the valid heading tags
	function _headingIndex(el) {
		return _getTags().indexOf(el.tagName);
	}

	// Checks if a given element is a heading
	function _isHeadingTag(el) {
		return _headingIndex(el) > -1;
	}

})();
