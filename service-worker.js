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
    "revision": "cbcd0034e80fffd866cf8c089454f235"
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
    "url": "assets/js/13.e3f66b04.js",
    "revision": "a2c0a46a5ea37618ba620aaedf510657"
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
    "url": "assets/js/app.a5d74495.js",
    "revision": "556c61670235ab8327258720cdf4ce2d"
  },
  {
    "url": "categories/index.html",
    "revision": "2f66ce8edcd1cc73a334d50512e4a662"
  },
  {
    "url": "demo.html",
    "revision": "08e6e9d68b05de96a83be4f949a00030"
  },
  {
    "url": "index.html",
    "revision": "50482373f283fa2341357d122160f500"
  },
  {
    "url": "philosophy/origin/atomism&sophists.html",
    "revision": "30cebf4ce6b6070f380ee04758c14708"
  },
  {
    "url": "philosophy/origin/history-of-philosophy.html",
    "revision": "5036d15986e7543294f2dd2568ad6f80"
  },
  {
    "url": "philosophy/origin/index.html",
    "revision": "ce77e360e3875379bcd7c852eb3c5b9d"
  },
  {
    "url": "philosophy/origin/materialism-and-immaterialism.html",
    "revision": "7c050122b59c0978a3fac5596b430a29"
  },
  {
    "url": "philosophy/origin/origin-of-philosophy.html",
    "revision": "579add17377dd645048172e98d210283"
  },
  {
    "url": "tag/index.html",
    "revision": "ff768cfe0d67bef78c3e502c6a5b0f38"
  },
  {
    "url": "time.jpg",
    "revision": "217a6e2c0d56f4b97415f4a2bf79f92f"
  },
  {
    "url": "timeline/index.html",
    "revision": "1ccd1a318a81be9969aa3edd5bb0c5a4"
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
