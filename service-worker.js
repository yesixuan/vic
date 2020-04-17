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
    "revision": "72e430c1b81513d88b7bb4cfeab535f9"
  },
  {
    "url": "assets/css/0.styles.5be8d092.css",
    "revision": "2501ee2d2f4675a2ce497db22c656d69"
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
    "url": "assets/js/1.8bfed15a.js",
    "revision": "ef3f0cd828ed8fd3fa14653a633ddd86"
  },
  {
    "url": "assets/js/10.26767a4b.js",
    "revision": "49c301a13e579b78a0dac6df147a1b59"
  },
  {
    "url": "assets/js/11.913c7e7d.js",
    "revision": "7ef0083a2d9c144f8ec665cedf068210"
  },
  {
    "url": "assets/js/12.059e77dd.js",
    "revision": "a916f1c8f355f6422075f23556812be3"
  },
  {
    "url": "assets/js/13.c1209171.js",
    "revision": "d389edad1bd6ae9c6f45e0ea7fbeb82e"
  },
  {
    "url": "assets/js/14.2131a72a.js",
    "revision": "f77c653571a881bf55fa0090579e7af9"
  },
  {
    "url": "assets/js/15.e0c08af4.js",
    "revision": "f201f6416572ed4d59630feb66ae8c40"
  },
  {
    "url": "assets/js/16.31af1c33.js",
    "revision": "7b5097edb7ec78912aaf5a05590c53fa"
  },
  {
    "url": "assets/js/17.7163a6bf.js",
    "revision": "5c3fc71d0eb409349c6c13524bf4f231"
  },
  {
    "url": "assets/js/18.bcd846d7.js",
    "revision": "313c0d259a646d1020faa966543a5783"
  },
  {
    "url": "assets/js/19.b759bbd7.js",
    "revision": "184c43d7273fc2847b63dc3874bcb48b"
  },
  {
    "url": "assets/js/20.2b273f2e.js",
    "revision": "8111bc6bdeef3f9d444c2245294fd8c7"
  },
  {
    "url": "assets/js/21.588eb118.js",
    "revision": "d9d08ed628b9f9184d560c80b22ad1ba"
  },
  {
    "url": "assets/js/22.6d96c6df.js",
    "revision": "74a21ca53360c8ac956c716fca289f9c"
  },
  {
    "url": "assets/js/23.28b3e972.js",
    "revision": "4321982e66cd973897ff831c7a185f26"
  },
  {
    "url": "assets/js/24.bfba838c.js",
    "revision": "4811d4c9716540a55591a6710955f039"
  },
  {
    "url": "assets/js/25.cdffe18d.js",
    "revision": "be2921effe6064a879b2675a52f1c085"
  },
  {
    "url": "assets/js/26.f45d65b1.js",
    "revision": "2f4033276e7e346f9ec6d8fcbb3bea4b"
  },
  {
    "url": "assets/js/27.9ce95adc.js",
    "revision": "118d724b0f359bafb48a2cd4e48049c2"
  },
  {
    "url": "assets/js/28.41067af6.js",
    "revision": "db66d619a158d7790b946073015d0416"
  },
  {
    "url": "assets/js/29.06fa3c87.js",
    "revision": "c0e5bbd165887069eccf54cf5312913b"
  },
  {
    "url": "assets/js/3.75e219d3.js",
    "revision": "0f0213030ee8836fb5cce5449e5510f3"
  },
  {
    "url": "assets/js/30.742db563.js",
    "revision": "9f468b2dfe8e33ae1a2fe070d07303fc"
  },
  {
    "url": "assets/js/31.81f925c7.js",
    "revision": "f447a6775743c89eb2fa323740fb8392"
  },
  {
    "url": "assets/js/32.f4fdb053.js",
    "revision": "196432bf0df2cb3da061f01d9c16bfba"
  },
  {
    "url": "assets/js/33.2445ccba.js",
    "revision": "67d78eb9031c87890fdd2c92fad5deec"
  },
  {
    "url": "assets/js/34.24d067eb.js",
    "revision": "0d52a22b639cfdb3ce8ff950342c706a"
  },
  {
    "url": "assets/js/35.dfe123e6.js",
    "revision": "68770e8fec15cd524f6a080586106a1b"
  },
  {
    "url": "assets/js/36.27df2d22.js",
    "revision": "0e41f38b55ef8e9c42d41b41beef85ab"
  },
  {
    "url": "assets/js/37.28d67d06.js",
    "revision": "4b80c3225547194d0e20914d629e035c"
  },
  {
    "url": "assets/js/38.57c3c8bf.js",
    "revision": "277775bd1a3de12c0c1200e7ffaddbc8"
  },
  {
    "url": "assets/js/4.11c9680f.js",
    "revision": "4b41647476ea562a2c38a6255314372a"
  },
  {
    "url": "assets/js/5.b608bf35.js",
    "revision": "79d5f3cf252f4ce51879ce2a2274505f"
  },
  {
    "url": "assets/js/6.7be5447f.js",
    "revision": "7d10d1b6a31a99f2fea0ca9223ae8aaf"
  },
  {
    "url": "assets/js/7.04991c46.js",
    "revision": "08bec252a3d5300814ee11b5b8ef308e"
  },
  {
    "url": "assets/js/8.57e28a80.js",
    "revision": "98ca603a4de9a6c8a2d9249c10aeeefe"
  },
  {
    "url": "assets/js/9.c6d8e784.js",
    "revision": "f24f9a350e312be2b3cb264315f65371"
  },
  {
    "url": "assets/js/app.b9beae0e.js",
    "revision": "58e0dc2960185b5e25183a2b11894d5e"
  },
  {
    "url": "categories/index.html",
    "revision": "da2db55150273218c22392c0d2953fde"
  },
  {
    "url": "demo.html",
    "revision": "22f48d5fe34f40aa14192ef96a5f410b"
  },
  {
    "url": "FiraCode-Light.ttf",
    "revision": "93e8a73358cd628cb143655d2d7f4db5"
  },
  {
    "url": "FiraCode-Regular.ttf",
    "revision": "94c6421c40b153fd303f8ace482b2322"
  },
  {
    "url": "HYQiH18030F50.ttf",
    "revision": "1afd7a575b5088cd2b8d6fc005303a9b"
  },
  {
    "url": "index.html",
    "revision": "44d16fb21140b1de42813282331306e8"
  },
  {
    "url": "logo/logo200.png",
    "revision": "dfc1cca5e2fec86474f3fc9a1b6a6c8b"
  },
  {
    "url": "logo/logo500.png",
    "revision": "8d1c3a2d6acd1ad3bc704027fd3606e6"
  },
  {
    "url": "philosophy/man&gad/index.html",
    "revision": "2af110094c4b6cdadbbe831eb1845c1a"
  },
  {
    "url": "philosophy/man&gad/patristic-philosophy.html",
    "revision": "15c50377bb8a7176fd2882216cefbf25"
  },
  {
    "url": "philosophy/man&gad/philosophy-come-back.html",
    "revision": "577602e032bbd533274d58836971a2ad"
  },
  {
    "url": "philosophy/man&gad/scholasticism.html",
    "revision": "8044a2225ed05a7f2191e5878d211b6f"
  },
  {
    "url": "philosophy/origin/atomism&sophists.html",
    "revision": "f607d4fdcb7a4ee75eee5c4d0784dd20"
  },
  {
    "url": "philosophy/origin/history-of-philosophy.html",
    "revision": "e072c6c74038af047dbdab9db3036cb6"
  },
  {
    "url": "philosophy/origin/index.html",
    "revision": "1d03490ab7b39a4a6283dcc9fa451d16"
  },
  {
    "url": "philosophy/origin/materialism-and-immaterialism.html",
    "revision": "cbd3df93c81624ad61db5607783f7a1f"
  },
  {
    "url": "philosophy/origin/origin-of-philosophy.html",
    "revision": "182d1d864c53a568de29051f71b7f8b5"
  },
  {
    "url": "philosophy/origin/Socrates.html",
    "revision": "ad4b8031c484ec0fe3860422c89930c3"
  },
  {
    "url": "philosophy/rationalism&empiricism/Aristotle.html",
    "revision": "31d389dc5da63e10528313c2c513a9bc"
  },
  {
    "url": "philosophy/rationalism&empiricism/index.html",
    "revision": "a70a00de12a0cc68474bb5e57f181db0"
  },
  {
    "url": "philosophy/reason/Descartes.html",
    "revision": "ecb9ada8c27fc25a30271b50ed8c3dfd"
  },
  {
    "url": "philosophy/reason/index.html",
    "revision": "3994d6e12b8260d3204c86495411c78a"
  },
  {
    "url": "philosophy/reason/Leibnitz.html",
    "revision": "e469077d2f63e94d400033958f51bd0d"
  },
  {
    "url": "philosophy/reason/Pascal.html",
    "revision": "e483b8ece3ea88100a2b58e71943b132"
  },
  {
    "url": "philosophy/reason/philo-sophia.html",
    "revision": "e087a89a09fa984f078e96e608fcc668"
  },
  {
    "url": "philosophy/reason/reformation.html",
    "revision": "9a00e941a529b2f366fd482a5d73c096"
  },
  {
    "url": "philosophy/reason/Spinoza.html",
    "revision": "a54f08912cbb7807b69d8a5a29c61913"
  },
  {
    "url": "philosophy/self-settle/end-of-Greek.html",
    "revision": "7f8391a7d36f667b0d8307974a60be7e"
  },
  {
    "url": "philosophy/self-settle/hedonism.html",
    "revision": "7d110d096cb01e28f309fe8cd147b6ef"
  },
  {
    "url": "philosophy/self-settle/index.html",
    "revision": "5c73e72b8fe769562223df2ceae62af6"
  },
  {
    "url": "philosophy/self-settle/scepticism.html",
    "revision": "ac5e794b1f6b90cda917afbbdd4cf468"
  },
  {
    "url": "philosophy/self-settle/stoa.html",
    "revision": "e68d558955686791185960084cb24559"
  },
  {
    "url": "tag/index.html",
    "revision": "99e9f09a3fe95b0dee7ca801e0a22b97"
  },
  {
    "url": "timeline/index.html",
    "revision": "716d1c6e6d89596e897cd4af6ca18da3"
  },
  {
    "url": "xuan200.png",
    "revision": "337c9efc9e84b65cfe4b29fe0d909ab4"
  },
  {
    "url": "xuan500.png",
    "revision": "7afeb05055b35382431eeee9f3953d56"
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
