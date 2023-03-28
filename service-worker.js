                        importScripts("/assets/js/workbox-v3.6.3/workbox-sw.js");
            workbox.setConfig({modulePathPrefix: "/assets/js/workbox-v3.6.3"});

            self.__precacheManifest = [{"url":"/2023/03/03/postgraduate-supervision-group-assistant/","revision":"f8136d6d2691727bf51b0e99fa4e6bc4"},{"url":"/2023/02/26/wechaty-in-gaidc/","revision":"73df6f2532c5346a430fd8a401c243bd"},{"url":"/2023/02/23/wechaty-invited-to-gaidc/","revision":"a8c4204106f191f1645c48214660f885"},{"url":"/2023/02/18/wechaty-flask-service/","revision":"867f7676edf2ba2e78a61eb344cb76ae"},{"url":"/2023/01/18/workpro-immigration-guide/","revision":"d3e6b1e503c5188591909ec229f82bfe"}];
            // set names for both precache & runtime cache
workbox.core.setCacheNameDetails({
    prefix: 'Wechaty',
    suffix: 'v1',
    precache: 'precache',
    runtime: 'runtime-cache'
});

// let Service Worker take control of pages ASAP
workbox.skipWaiting();
workbox.clientsClaim();

// let Workbox handle our precache list
workbox.precaching.precacheAndRoute(self.__precacheManifest);

// use `networkFirst` strategy for `*.html`, like all my posts
workbox.routing.registerRoute(
    /\.html$/,
    workbox.strategies.networkFirst()
);

// use `cacheFirst` strategy for images
workbox.routing.registerRoute(
    /assets\/(img|icons)/,
    workbox.strategies.cacheFirst()
);

// third party files
workbox.routing.registerRoute(
    /^https?:\/\/cdn.staticfile.org/,
    workbox.strategies.staleWhileRevalidate()
);
