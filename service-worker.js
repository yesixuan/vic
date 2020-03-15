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
    "revision": "7fa3d2d200ef816511b0edc7cf0e4ea5"
  },
  {
    "url": "assets/css/0.styles.afd6dab4.css",
    "revision": "66c9238dc2a417d62dddfc2ad6358103"
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
    "url": "assets/js/1.ddf4b769.js",
    "revision": "3c7cbae4a9655e00686d4c66db4db147"
  },
  {
    "url": "assets/js/10.eba46325.js",
    "revision": "2903cc375c86e145c4aef1f3788cefb2"
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
    "url": "assets/js/13.b78243bd.js",
    "revision": "f45a0a6a0588d6a88ec3f7b4736485ed"
  },
  {
    "url": "assets/js/14.8ea462dc.js",
    "revision": "7e41d18e2dbce06fe700f0045891978c"
  },
  {
    "url": "assets/js/15.69f984cb.js",
    "revision": "75fcee5fbefccc04bf67ab88d9c80db4"
  },
  {
    "url": "assets/js/16.48897d46.js",
    "revision": "c72156c2b44ad19ea49a5123c6e17812"
  },
  {
    "url": "assets/js/17.2392ebd5.js",
    "revision": "996c43378e9029b4db79ea62cadc97b1"
  },
  {
    "url": "assets/js/18.ca3a3875.js",
    "revision": "918c9cd2a88b36a7f643f0a081281e17"
  },
  {
    "url": "assets/js/3.fcf3777d.js",
    "revision": "3aede75364b53ca639e246ee09cbbd2a"
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
    "url": "assets/js/app.f35f738b.js",
    "revision": "ee62d7726f139d9da96e625685177c46"
  },
  {
    "url": "categories/index.html",
    "revision": "98c770186d3a46d21ee973fb74189567"
  },
  {
    "url": "demo.html",
    "revision": "c428ac1f961a099bd686d557d73e249e"
  },
  {
    "url": "index.html",
    "revision": "74dac1ae897f8aff5cd13ef76e1cbf8a"
  },
  {
    "url": "philosophy/origin/atomism&sophists.html",
    "revision": "184510cdc696fe7852b2f80de9a4e7d7"
  },
  {
    "url": "philosophy/origin/history-of-philosophy.html",
    "revision": "b66b95c8fc9443b7114acacb834ed48f"
  },
  {
    "url": "philosophy/origin/index.html",
    "revision": "30b72ba8f5ada355a47ce0acdb0ff983"
  },
  {
    "url": "philosophy/origin/materialism-and-immaterialism.html",
    "revision": "a6ff9ce68ceed7cde641690e9e36e7c7"
  },
  {
    "url": "philosophy/origin/origin-of-philosophy.html",
    "revision": "192a7f3f15836f1e79b722e139ccaf3d"
  },
  {
    "url": "tag/index.html",
    "revision": "fa3b4e85eb9b85c046556586d5ac06dd"
  },
  {
    "url": "time.jpg",
    "revision": "217a6e2c0d56f4b97415f4a2bf79f92f"
  },
  {
    "url": "timeline/index.html",
    "revision": "d3b5a456e582cc6f202dc4d1080c9382"
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
