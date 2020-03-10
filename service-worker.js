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
    "revision": "1e0ab3925a055bfd5c1d39a2cf3c7213"
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
    "url": "assets/js/1.9ac3eaf6.js",
    "revision": "38336a220a40fb6078d8376456c6f150"
  },
  {
    "url": "assets/js/10.5cdf1ed6.js",
    "revision": "1fa911f1a5ca12d490dabd2273e802dc"
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
    "url": "assets/js/15.8fe1eb09.js",
    "revision": "c65a8e9cd9f8ca5819ed805e4bc7aad5"
  },
  {
    "url": "assets/js/16.172229ec.js",
    "revision": "f6dc647d77adf6e20eee6a0d6ec985b1"
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
    "url": "assets/js/app.2d559361.js",
    "revision": "a1f4baa12324b276bc3d93dd14e671b2"
  },
  {
    "url": "categories/index.html",
    "revision": "69aad960380ed721ff685612ea44dd1f"
  },
  {
    "url": "demo.html",
    "revision": "4f574a4618f11699fcdb64c73121e404"
  },
  {
    "url": "index.html",
    "revision": "9c2d53eeceae9c225bf6c0530fd2f976"
  },
  {
    "url": "philosophy/origin/history-of-philosophy.html",
    "revision": "beeb06f3b825db31c86e340299984d37"
  },
  {
    "url": "philosophy/origin/index.html",
    "revision": "d23bcb73665e8f008cdf83cfdf95fcdb"
  },
  {
    "url": "philosophy/origin/origin-of-philosophy.html",
    "revision": "fc6e107a6dc3bea0e75bf0e2dd834e9a"
  },
  {
    "url": "tag/index.html",
    "revision": "00921250f8a64356fa8d99856f568411"
  },
  {
    "url": "time.jpg",
    "revision": "217a6e2c0d56f4b97415f4a2bf79f92f"
  },
  {
    "url": "timeline/index.html",
    "revision": "59f20f7d7154f4e7eb728f8aa0f60a5b"
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
