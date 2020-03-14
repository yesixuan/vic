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
    "revision": "e5b262de95d574194ea156d8f0642555"
  },
  {
    "url": "assets/css/0.styles.b3d591c8.css",
    "revision": "670e9db5f014531f687980a551edfb3f"
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
    "url": "assets/js/1.3339473f.js",
    "revision": "bcf40f73da25c3b873e020f661e1836a"
  },
  {
    "url": "assets/js/10.c8238790.js",
    "revision": "77974f287145e675518dfe71fbcffadf"
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
    "url": "assets/js/13.cab1af72.js",
    "revision": "90ef4eedf66b839269f7f2b7701c3ea5"
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
    "url": "assets/js/3.aabc4740.js",
    "revision": "d363958443a558b1250821e944f37a24"
  },
  {
    "url": "assets/js/4.9d727f8d.js",
    "revision": "f301cc214e82fb1472e8e41e3d2fb14b"
  },
  {
    "url": "assets/js/5.9be222de.js",
    "revision": "7115c7e3a2cac1204ea895132ad02654"
  },
  {
    "url": "assets/js/6.ff1a2c1e.js",
    "revision": "435f744d817b7923bce860ed6facb32d"
  },
  {
    "url": "assets/js/7.6f9d8a75.js",
    "revision": "e6f678e79dfbb84ef7b9f2ce52f0ee60"
  },
  {
    "url": "assets/js/8.70ea702c.js",
    "revision": "968e0cdc5a7d08f4281f9053d3a87e5b"
  },
  {
    "url": "assets/js/9.d56434b0.js",
    "revision": "17a582889f7a3777f1d22166b1ccd6be"
  },
  {
    "url": "assets/js/app.dc02e7fb.js",
    "revision": "2f16a796ca0d65b8536ff8606f8c1312"
  },
  {
    "url": "categories/index.html",
    "revision": "c502391ce2004df8d88ddd57ad5b8610"
  },
  {
    "url": "demo.html",
    "revision": "1daa6d287d8e9574e706513b5bb540e0"
  },
  {
    "url": "index.html",
    "revision": "ca11248dbbe26b1538907e6ea44f7f8e"
  },
  {
    "url": "philosophy/origin/atomism&sophists.html",
    "revision": "d4d7fe12f8e75d02df11c148d5f6d8cb"
  },
  {
    "url": "philosophy/origin/history-of-philosophy.html",
    "revision": "a4421b525058e919aa783125c9bc440c"
  },
  {
    "url": "philosophy/origin/index.html",
    "revision": "df2152b7f9a3e6625b64e641eda6cbf0"
  },
  {
    "url": "philosophy/origin/materialism-and-immaterialism.html",
    "revision": "f5ef476aad1b0941484f3f43f5eeabb2"
  },
  {
    "url": "philosophy/origin/origin-of-philosophy.html",
    "revision": "fc1b4ef8dc72ab5b7cf9cda73eb803f3"
  },
  {
    "url": "tag/index.html",
    "revision": "058a251daed1f37d67f8a23115aec033"
  },
  {
    "url": "time.jpg",
    "revision": "217a6e2c0d56f4b97415f4a2bf79f92f"
  },
  {
    "url": "timeline/index.html",
    "revision": "b2377dd158a5a36f31e577f5277549a6"
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
