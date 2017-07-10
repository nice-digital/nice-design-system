---
---
"use strict";

//## SERVICE WORKER
/// Caches requests and pre-caches items on startup

// The root of the application, from Jekyll config
const AppRoot = "{{ site.baseurl }}";

// Version of the cache, built from site generation time
const CacheVersion = '{{ site.time | date_to_xmlschema }}';
// Key used for caching items
const CacheKey = `{{ site.name | slugify }}-${CacheVersion}`;
// Initial URLs to cache when the service worker starts
const CacheInitialItems = [
		`${AppRoot}/`,
		`${AppRoot}/css/app.css`,
		`${AppRoot}/javascripts/nice.min.js`,
		`${AppRoot}/javascripts/app.js`
	];

// Regular expressions of cache item URLs to ignore
const CacheIgnoreItems = [
	// Google Tag Manager
	/www\.googletagmanager\.com/i,
	// Anything Google Analytics
	/www\.google-analytics\.com/i,
	// TopHat ajax request for login status
	/accounts\.nice\.org\.uk\/tophat/i,
	// Don't cache the service worker itself
	/sw.js/
];

self.addEventListener("install", e => {

	// Cache initial requests
	e.waitUntil(
		caches.open(CacheKey)
			.then(cache => {
				return cache
					.addAll(CacheInitialItems)
					.then(() => self.skipWaiting());
			}
		)
	)
});

self.addEventListener("activate",  event => {

	// Delete old cache items
	let expectedCacheNames = [CacheKey];
	event.waitUntil(
		caches.keys().then(function(cacheNames) {
			return Promise.all(
				cacheNames.map(function(cacheName) {
					if (expectedCacheNames.indexOf(cacheName) == -1) {
						//console.log('Deleting out of date cache:', cacheName);
						return caches.delete(cacheName);
					}
				})
			);
		})
	);

	event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", event => {
	event.respondWith(
		caches.match(event.request, { ignoreSearch:true })
		.then(response => {
			// Response was cached so just use it
			if(response) {
				//console.log(`Request cached for ${event.request.url}, with status ${ response.status }`);
				return response;
			}

			//console.log(`Request for ${event.request.url} not found, so fetching`);

			// Fetch and cache
			return fetch(event.request.clone()).then(resp => {

				let isIgnorable =
					resp.status >= 400 // Don't cache errors
					|| resp.method !== "GET" // Only cache GET requests
					|| CacheIgnoreItems.some(rgx => rgx.test(event.request.url));
				
				if(isIgnorable) {
					//console.log(`URL ${event.request.url} is being ignored from cache`);
					return resp;
				}

				//console.log(`Fetched ${event.request.url} with response ${ resp }, so caching`);
				caches.open(CacheKey).then(function(cache) {
					cache.put(event.request, resp);
				});
				return resp.clone();
			});
		})
	);
});