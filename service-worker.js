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
    "revision": "afc6de60b9f1658c7e1e0fe64ae817d0"
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
    "url": "assets/js/13.9977f297.js",
    "revision": "25b15d1f857a5c11152ab3093ac471bd"
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
    "url": "assets/js/app.18d97954.js",
    "revision": "5668d94d8a607206b9fb90851977dbdc"
  },
  {
    "url": "categories/index.html",
    "revision": "4de92bfdaddf0ceef625a8785c3ef919"
  },
  {
    "url": "demo.html",
    "revision": "f7214d17f1771dbf58acdaea4ebafc62"
  },
  {
    "url": "index.html",
    "revision": "4a1b06a86aadee74a73d0b5c6c2f332e"
  },
  {
    "url": "philosophy/origin/atomism&sophists.html",
    "revision": "80c26fb495ed4536751e9ca562ed0d82"
  },
  {
    "url": "philosophy/origin/history-of-philosophy.html",
    "revision": "1946fe20f5e3c416183cf840647e0068"
  },
  {
    "url": "philosophy/origin/index.html",
    "revision": "6c68fdc81a4a636a2d50e3aa3a24ca3b"
  },
  {
    "url": "philosophy/origin/materialism-and-immaterialism.html",
    "revision": "caa1f08203fd72b5157d7de617dc95b3"
  },
  {
    "url": "philosophy/origin/origin-of-philosophy.html",
    "revision": "dffe8fb7ea0eadb46756880a88227cba"
  },
  {
    "url": "philosophy/origin/Socrates.html",
    "revision": "8e518c2ee554afc91696c130c466a066"
  },
  {
    "url": "tag/index.html",
    "revision": "b536b7cd6f471f5da8b255ce4a1d3fac"
  },
  {
    "url": "time.jpg",
    "revision": "217a6e2c0d56f4b97415f4a2bf79f92f"
  },
  {
    "url": "timeline/index.html",
    "revision": "2b98291a6f1a777b6dd4d94f345501a3"
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
