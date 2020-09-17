/* eslint-disable no-restricted-globals */
if ('function' === typeof importScripts) {
  // this will import workbox var
  importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js');
  // Global workbox
  if (workbox) {
    // Disable logging
    workbox.setConfig({ debug: true });
    workbox.core.setCacheNameDetails({
      prefix: 'sos-cache-v1',
      precache: 'precache',
      runtime: 'runtime',
    });
    const { registerRoute, NavigationRoute } = workbox.routing;
    const { precacheAndRoute } = workbox.precaching;
    const { CacheFirst, StaleWhileRevalidate, NetworkOnly } = workbox.strategies;
    const { ExpirationPlugin } = workbox.expiration;

    //`generateSW` and `generateSWString` provide the option
    // to force update an exiting service worker.
    // Since we're using `injectManifest` to build SW,
    // manually overriding the skipWaiting();
    self.addEventListener('install', event => {
      event.waitUntil(caches.open('offline').then(cache => cache.add('/index.html')));
      self.skipWaiting();
    });

    // Manual injection point for manifest files.
    // All assets under build/ and 5MB sizes are precached.
    precacheAndRoute([{"revision":"3114008b6f24de8fc80826259e15c39f","url":"android-chrome-192x192.png"},{"revision":"61c88308d213a6f00fba47f6d8f21c6f","url":"android-chrome-512x512.png"},{"revision":"8034668e73600fb69f08019c681e202e","url":"apple-touch-icon.png"},{"revision":"b5019db2ec4a4565e39e0db15ba5f2b7","url":"favicon-16x16.png"},{"revision":"4fc48612a54d497a89c5435c88d2cc95","url":"favicon-32x32.png"},{"revision":"c5d94aeaa60572c286e5566be2759840","url":"index.html"},{"revision":"0ab9505bbc26fe5300311da4106adde2","url":"precache-manifest.0ab9505bbc26fe5300311da4106adde2.js"},{"revision":"0960881f73146eb2ccbac374efc99f09","url":"static/js/2.0a5d2386.chunk.js"},{"revision":"3241a95c0eccafe3e9877603a0af9b7a","url":"static/js/3.2aefba5b.chunk.js"},{"revision":"cfdc0e24da10f269dd8711f99304da2b","url":"static/js/4.34abfc45.chunk.js"},{"revision":"7ba37d47dd217ba87946218e1ecdc099","url":"static/js/main.cc764b60.chunk.js"},{"revision":"7144d7e76db8fe4bd3d904f5d443c0a1","url":"static/js/runtime~main.a406ba04.js"}]);

    // Font caching
    registerRoute(
      /https:\/\/fonts.(?:.googlepis|gstatic).com\/(.*)'/,
      new CacheFirst({
        cacheName: 'googleapis',
        plugins: [
          new ExpirationPlugin({
            maxEntries: 30,
          }),
        ],
      })
    );

    // Image caching
    registerRoute(
      /\.(?:png|gif|jpg|jpeg|svg)$/,
      new CacheFirst({
        cacheName: 'images',
        plugins: [
          new ExpirationPlugin({
            maxEntries: 60,
            maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
          }),
        ],
      })
    );

    // JS, CSS caching
    registerRoute(
      /\.(?:js|css)$/,
      new CacheFirst({
        cacheName: 'static-resources',
        plugins: [
          new ExpirationPlugin({
            maxEntries: 60,
            maxAgeSeconds: 20 * 24 * 60 * 60, // 20 Days
          }),
        ],
      })
    );

    // Disable caching for API
    registerRoute(new RegExp('.*amazonaws.com/dev/.*'), new NetworkOnly());

    const networkOnly = new NetworkOnly();
    const navigationHandler = async params => {
      try {
        // Attempt a network request.
        return await networkOnly.handle(params);
      } catch (error) {
        // If it fails, return the cached HTML.
        return caches.match('/index.html', {
          cacheName: 'offline',
        });
      }
    };

    // Register this strategy to handle all navigations.
    registerRoute(new NavigationRoute(navigationHandler));
  } else {
    console.error('Workbox could not be loaded. No offline support.');
  }
}
