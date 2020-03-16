/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "484be8b9c08014f79ad8a394e8d167e3"
  },
  {
    "url": "assets/css/0.styles.f38f898a.css",
    "revision": "b27e063b2ac1ea996f7143f7581b2de3"
  },
  {
    "url": "assets/img/create.e25f75be.png",
    "revision": "e25f75befa6d34f64851c51d60013d61"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/js/1.eac3cb7e.js",
    "revision": "72ad45b691816f07f974ae7150c34c0f"
  },
  {
    "url": "assets/js/10.fad1d22b.js",
    "revision": "84e9680b531f96ea2af70d702a36c63f"
  },
  {
    "url": "assets/js/11.b699e366.js",
    "revision": "bc09181d400931e9f220ddc45d640c25"
  },
  {
    "url": "assets/js/12.70d7be1f.js",
    "revision": "4a3cd69803fa3c97affcbc0b44400fc0"
  },
  {
    "url": "assets/js/13.178d6e50.js",
    "revision": "0f90aec6aed178f0b0ddea97591ea653"
  },
  {
    "url": "assets/js/14.0c3bdbf6.js",
    "revision": "829a28f15e3255bf991146f8ccf978ca"
  },
  {
    "url": "assets/js/15.e127fdaa.js",
    "revision": "40428fd1b03211f4a5ac3fcf0ac3a435"
  },
  {
    "url": "assets/js/16.43f8e2d2.js",
    "revision": "30a51b0678f485cd2e23930e6ddaf65c"
  },
  {
    "url": "assets/js/17.8bddb854.js",
    "revision": "8e10f48a8fde4f27b0f5931b6edef94c"
  },
  {
    "url": "assets/js/18.8a8cedee.js",
    "revision": "c6edbb6614886269a2415f27723fdecc"
  },
  {
    "url": "assets/js/19.c1969d76.js",
    "revision": "30cd7e2e425b1c8a40a82bca3be253f7"
  },
  {
    "url": "assets/js/3.7b01cd52.js",
    "revision": "6a4ea0adfd94d4f9d5f58619c6dc2f88"
  },
  {
    "url": "assets/js/4.fe5cb08a.js",
    "revision": "81f713ff84b73d68bbaafd3a33a8e10b"
  },
  {
    "url": "assets/js/5.2ba08ba1.js",
    "revision": "57b2ff86d5d0447446a64bc8c4c9987d"
  },
  {
    "url": "assets/js/6.31e69a57.js",
    "revision": "5650b86e464b784e1a511978943e7f68"
  },
  {
    "url": "assets/js/7.6f9d8a75.js",
    "revision": "e6f678e79dfbb84ef7b9f2ce52f0ee60"
  },
  {
    "url": "assets/js/8.8d2e0302.js",
    "revision": "1e719258025ff01c18b18ca19c21d68f"
  },
  {
    "url": "assets/js/9.37c7d139.js",
    "revision": "3704283182d726ad4c0b7f6323ebcb2a"
  },
  {
    "url": "assets/js/app.e58cfb1f.js",
    "revision": "4864e60f7587a446db1b78f9add1d4b1"
  },
  {
    "url": "categories/index.html",
    "revision": "a83b0f11d82d5e88b920756914e0ea2b"
  },
  {
    "url": "demo.html",
    "revision": "f5a3e82c11978fc20c5b0cf1b3a8d92d"
  },
  {
    "url": "index.html",
    "revision": "b06b1239df0e8dc658bb4de92250b7d6"
  },
  {
    "url": "philosophy/origin/atomism&sophists.html",
    "revision": "902152945a4e356f77f96a69c9ddb702"
  },
  {
    "url": "philosophy/origin/history-of-philosophy.html",
    "revision": "13a146e494cf52404f2b9c1ecf8ba27a"
  },
  {
    "url": "philosophy/origin/index.html",
    "revision": "87ace5d27649ce895fcef15d5db78c89"
  },
  {
    "url": "philosophy/origin/materialism-and-immaterialism.html",
    "revision": "106e8fdfec26b03f519ed6f42d6c9811"
  },
  {
    "url": "philosophy/origin/origin-of-philosophy.html",
    "revision": "540a0eea37c6e2178c29e15bc7b08a90"
  },
  {
    "url": "philosophy/origin/Socrates.html",
    "revision": "1048cd7618783266491aa72d623d69ba"
  },
  {
    "url": "tag/index.html",
    "revision": "d22c837bd2df0eae9da8fc14e464fd5a"
  },
  {
    "url": "time.jpg",
    "revision": "217a6e2c0d56f4b97415f4a2bf79f92f"
  },
  {
    "url": "timeline/index.html",
    "revision": "19001384bf232b05cbbaf58e13ddfde2"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
