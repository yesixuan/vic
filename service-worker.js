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
    "revision": "5366a72bcf13ab391c1d9e9d56621cec"
  },
  {
    "url": "assets/css/0.styles.b4a7f7fd.css",
    "revision": "6b058989186c41b83cbdcec82dd57e4c"
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
    "url": "assets/js/10.f41c5414.js",
    "revision": "9471d872b7c1f34421dfd462a12f01ba"
  },
  {
    "url": "assets/js/11.b699e366.js",
    "revision": "bc09181d400931e9f220ddc45d640c25"
  },
  {
    "url": "assets/js/12.64985d28.js",
    "revision": "31a789a4c79696bc4dcd4c079a59138b"
  },
  {
    "url": "assets/js/13.b6e734b3.js",
    "revision": "06d01a034bcdc8101a62e7653f4f7b2b"
  },
  {
    "url": "assets/js/14.4c5ab671.js",
    "revision": "37ad5c2c51d05169432b2da3edf9793f"
  },
  {
    "url": "assets/js/15.5fec7105.js",
    "revision": "0fbf47327e1d9577002a6a51d61c0c05"
  },
  {
    "url": "assets/js/16.f175eb77.js",
    "revision": "0cb8f28b913c3a37885ac9d5cc186552"
  },
  {
    "url": "assets/js/17.48342fb8.js",
    "revision": "88053ed7584730ca039805d7299f8b6f"
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
    "url": "assets/js/app.7412de2f.js",
    "revision": "a1f7cc03f03f953b48d125414eb852e5"
  },
  {
    "url": "categories/index.html",
    "revision": "6bc80fec7b36059ed8301c9f1592df96"
  },
  {
    "url": "demo.html",
    "revision": "223a17c793ce999da858fd9e85523cd5"
  },
  {
    "url": "index.html",
    "revision": "5bcf933c6fd16f7fe5f0d288bd36385f"
  },
  {
    "url": "philosophy/origin/history-of-philosophy.html",
    "revision": "1a7a6a605abac16a0cc42c1f420f145c"
  },
  {
    "url": "philosophy/origin/index.html",
    "revision": "93a35374490b9f173ab4907e327da5f6"
  },
  {
    "url": "philosophy/origin/materialism-and-immaterialism.html",
    "revision": "aec42573c87328dc7d7c92b7314f853c"
  },
  {
    "url": "philosophy/origin/origin-of-philosophy.html",
    "revision": "5fce679a4b16c5a17ffd40f10d6596ca"
  },
  {
    "url": "tag/index.html",
    "revision": "7d28010969af24dafa00c9049ba43a11"
  },
  {
    "url": "time.jpg",
    "revision": "217a6e2c0d56f4b97415f4a2bf79f92f"
  },
  {
    "url": "timeline/index.html",
    "revision": "f8da32273ff59ded85722d24a9ff0fbe"
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
