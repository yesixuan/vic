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
    "revision": "f0cf45f8ee07cf6c5c833caef60a1e16"
  },
  {
    "url": "assets/css/0.styles.f02ec9c3.css",
    "revision": "8cde49ff1398a5cc41a9c3dc0c828a50"
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
    "url": "assets/js/13.2ae0fac0.js",
    "revision": "57e8d277dbef4852329e7f06ffff8cde"
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
    "url": "assets/js/app.5594a682.js",
    "revision": "f76cd8aa7b6be0d49e83496a629e2e9f"
  },
  {
    "url": "categories/index.html",
    "revision": "30472daa8d8998ae469505628d44ef7c"
  },
  {
    "url": "demo.html",
    "revision": "1f6a20cfe3095a6fc3bb2179812195a6"
  },
  {
    "url": "index.html",
    "revision": "66e6725cc9da9ca0950ec61ac599412a"
  },
  {
    "url": "philosophy/origin/history-of-philosophy.html",
    "revision": "df44eafda0012494108ef8edb57289b8"
  },
  {
    "url": "philosophy/origin/index.html",
    "revision": "0a0801bf4ffbf229c4af4470797ae74e"
  },
  {
    "url": "tag/index.html",
    "revision": "ef8bcf95d73b592130ffb3ef15030905"
  },
  {
    "url": "time.jpg",
    "revision": "217a6e2c0d56f4b97415f4a2bf79f92f"
  },
  {
    "url": "timeline/index.html",
    "revision": "398e4d0a153f76783ffaa30b3a58419f"
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
