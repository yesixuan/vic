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
    "revision": "e8e4933362c9124bb18534d6a1d108e1"
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
    "url": "assets/js/13.058a3ca3.js",
    "revision": "2dbdc57643415e00b17180cc9ce785f8"
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
    "url": "assets/js/app.3cff8a24.js",
    "revision": "7fd8c35f6dcc88ab5f51c6c2fdd44ca8"
  },
  {
    "url": "categories/index.html",
    "revision": "7392031478009b1961ac0bf222f95cdd"
  },
  {
    "url": "demo.html",
    "revision": "347c37f59561dfcd982d7c4883517f81"
  },
  {
    "url": "index.html",
    "revision": "11b55338e6793e31a377903ead904fc1"
  },
  {
    "url": "philosophy/origin/history-of-philosophy.html",
    "revision": "2dfb630e96086de843e3e1002e645dd3"
  },
  {
    "url": "philosophy/origin/index.html",
    "revision": "de4500ed1f2cd258508001084d28bfc9"
  },
  {
    "url": "tag/index.html",
    "revision": "3e401bf299a50a3769e58ea7c5a98c0e"
  },
  {
    "url": "time.jpg",
    "revision": "217a6e2c0d56f4b97415f4a2bf79f92f"
  },
  {
    "url": "timeline/index.html",
    "revision": "2f5829326703012fc7b15f8d10e7484e"
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
