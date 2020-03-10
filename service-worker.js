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
    "revision": "2899d3118fb567c43d8fce348a25af65"
  },
  {
    "url": "assets/css/0.styles.34c14dd6.css",
    "revision": "f9ec3ce60c1afa07bc47d556ad7c5b3d"
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
    "url": "assets/js/1.9ac3eaf6.js",
    "revision": "38336a220a40fb6078d8376456c6f150"
  },
  {
    "url": "assets/js/10.9a4aa09b.js",
    "revision": "375e8504d896fa8b0cdd0c84f652a9cc"
  },
  {
    "url": "assets/js/11.b699e366.js",
    "revision": "bc09181d400931e9f220ddc45d640c25"
  },
  {
    "url": "assets/js/12.dd78eff3.js",
    "revision": "1f5222add2c7082ee00776ff5b84f4d6"
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
    "url": "assets/js/15.8e48ba49.js",
    "revision": "db97fb93c4e40d7cc54269d227241c68"
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
    "url": "assets/js/9.8a3b444c.js",
    "revision": "6b94b4bc9efe53e1e50592a1b59c9227"
  },
  {
    "url": "assets/js/app.0eab283f.js",
    "revision": "fd6ccb905be6761c74730d76f42a94ed"
  },
  {
    "url": "categories/index.html",
    "revision": "3000284de0e0c2ed7d4877264a8a3261"
  },
  {
    "url": "demo.html",
    "revision": "83a86a9f29b7d01fb97f8c6df6397886"
  },
  {
    "url": "index.html",
    "revision": "5d1f33e04d85c5f93fb3cc653c64e8ec"
  },
  {
    "url": "philosophy/origin/history-of-philosophy.html",
    "revision": "c75a60047f7f4f985815f251879f1652"
  },
  {
    "url": "philosophy/origin/index.html",
    "revision": "9fcdbf004cc362cfac00cc99f9cd736b"
  },
  {
    "url": "tag/index.html",
    "revision": "a281fc099d7797dc2f153b0c7442fc3d"
  },
  {
    "url": "time.jpg",
    "revision": "217a6e2c0d56f4b97415f4a2bf79f92f"
  },
  {
    "url": "timeline/index.html",
    "revision": "c3e4ed4f6688bd68e98b9ed223cfc092"
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
