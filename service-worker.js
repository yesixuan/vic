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
    "url": "assets/css/0.styles.a745d5ac.css",
    "revision": "4b1f1206660c2516caddb5f0ffc907a9"
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
    "url": "assets/js/1.637ab70c.js",
    "revision": "fea10cef5763de4308259e8f6469d948"
  },
  {
    "url": "assets/js/10.05df231a.js",
    "revision": "8753674243dab4d615d2c17c16c8d406"
  },
  {
    "url": "assets/js/11.c5c30219.js",
    "revision": "a99e4a6de80bbe6b95e77235587392de"
  },
  {
    "url": "assets/js/12.55789b69.js",
    "revision": "f20ce40f0e06ebe9f8bcbec624e5508e"
  },
  {
    "url": "assets/js/13.70731561.js",
    "revision": "e5c8af3833076e5fb05c7a813730ff0c"
  },
  {
    "url": "assets/js/14.141b272c.js",
    "revision": "dd9857fac18d167a05e2a11089fdba72"
  },
  {
    "url": "assets/js/15.72e78ad9.js",
    "revision": "35e70d66d5565f4c42f252788eb075df"
  },
  {
    "url": "assets/js/16.d5def09c.js",
    "revision": "4ed4316aa1fb1813e2483515071d9f66"
  },
  {
    "url": "assets/js/17.b8fb9523.js",
    "revision": "7d5081f4f614b40614c27efb898b0540"
  },
  {
    "url": "assets/js/18.66437e86.js",
    "revision": "1178c7e6c18f9351ce85d47781f84465"
  },
  {
    "url": "assets/js/19.142ac48b.js",
    "revision": "56c85522ba323bb37ed8e4b63faf3fad"
  },
  {
    "url": "assets/js/20.eab18825.js",
    "revision": "0c7483ec59c6c4d608b0affd786538a0"
  },
  {
    "url": "assets/js/21.3c103de5.js",
    "revision": "0ce14f3a93007e0d7c58610ef28fea19"
  },
  {
    "url": "assets/js/22.6878d357.js",
    "revision": "f6c1309ffe0b428f40c94f4dc0e4fa7a"
  },
  {
    "url": "assets/js/23.5ffe18ce.js",
    "revision": "7cf00332857c43ad1aadf0bf9783cdbf"
  },
  {
    "url": "assets/js/24.21fc7aa9.js",
    "revision": "92c210b731a9f51f02f87b1483cff2ca"
  },
  {
    "url": "assets/js/25.800b3a09.js",
    "revision": "1f9fda44593f05ba681f95901c4649d5"
  },
  {
    "url": "assets/js/26.c7629f29.js",
    "revision": "84df2761633d85086af33913bb125454"
  },
  {
    "url": "assets/js/27.13e46224.js",
    "revision": "3e6cc9c2cc1b6e6a85433b40c69ed866"
  },
  {
    "url": "assets/js/28.f3e096f1.js",
    "revision": "458bcd3708b42ef8a3e190f9047d9c85"
  },
  {
    "url": "assets/js/29.5b904123.js",
    "revision": "be84d57ce35b5584f8a2fd718c648fbd"
  },
  {
    "url": "assets/js/3.6c9c5b3e.js",
    "revision": "ae98b237df43eec6adc125ed812e52fa"
  },
  {
    "url": "assets/js/30.2fa296eb.js",
    "revision": "931a8cf2a9fd04d43ad4cf39bc03ef5a"
  },
  {
    "url": "assets/js/31.a9c91661.js",
    "revision": "92484735b43215aba0f3745f48fa89c8"
  },
  {
    "url": "assets/js/32.79e42dc1.js",
    "revision": "b877252dc987463e0d55f5e0380bf43f"
  },
  {
    "url": "assets/js/33.6a39ce38.js",
    "revision": "7b978b9df94220f873cb274dd2ab0472"
  },
  {
    "url": "assets/js/34.023045cd.js",
    "revision": "bc985c688b1f88f8f88c172d3cde752a"
  },
  {
    "url": "assets/js/35.c3506782.js",
    "revision": "a8ce77cc61d688886597ee66504ca0ce"
  },
  {
    "url": "assets/js/4.4d9e372d.js",
    "revision": "cd67e59947806021442e3e3e44d8591a"
  },
  {
    "url": "assets/js/5.fc8ab074.js",
    "revision": "484ea1b7799a65ca6ba3ab5a34026c4e"
  },
  {
    "url": "assets/js/6.7a40cf7d.js",
    "revision": "3fd10a55b9946c82571a3327263f3a7f"
  },
  {
    "url": "assets/js/7.5f4426a3.js",
    "revision": "6428682ef0429a9f3a9d0e3c04a9ab5c"
  },
  {
    "url": "assets/js/8.dabe52c6.js",
    "revision": "36e9fae241891a8b63f0b585568e16d9"
  },
  {
    "url": "assets/js/9.13525f48.js",
    "revision": "771a8ac27cc5d7818a1696889ac41e19"
  },
  {
    "url": "assets/js/app.d420036d.js",
    "revision": "e9fffc72a74cb186112b6307fbe8506c"
  },
  {
    "url": "categories/index.html",
    "revision": "05acc163442b70bda7e6c2dbc6ea8be8"
  },
  {
    "url": "demo.html",
    "revision": "cc955df467d43d82c7cce3ea8aee485d"
  },
  {
    "url": "index.html",
    "revision": "90973c98e382aa111b5ab01b8eb2d8ae"
  },
  {
    "url": "philosophy/man&gad/index.html",
    "revision": "b2b884bbaec6aa105a75611d5e6f82b8"
  },
  {
    "url": "philosophy/man&gad/patristic-philosophy.html",
    "revision": "b9b613000d2722261d6684171a2f8b57"
  },
  {
    "url": "philosophy/man&gad/philosophy-come-back.html",
    "revision": "79f18a7d13a4c2eae74cca9df2b181fe"
  },
  {
    "url": "philosophy/man&gad/scholasticism.html",
    "revision": "b75e76bc0d414ebd819f12521ee63ca5"
  },
  {
    "url": "philosophy/origin/atomism&sophists.html",
    "revision": "dc3189267dd8f31a9c6ddec77b6ad44a"
  },
  {
    "url": "philosophy/origin/history-of-philosophy.html",
    "revision": "211536296cdae19fd2425e24c64b0961"
  },
  {
    "url": "philosophy/origin/index.html",
    "revision": "5998b147b99bdc0597a3e785988b4361"
  },
  {
    "url": "philosophy/origin/materialism-and-immaterialism.html",
    "revision": "464ca6348d36a69583b715074541bfa6"
  },
  {
    "url": "philosophy/origin/origin-of-philosophy.html",
    "revision": "32fb481dbb061382c4b66932d1c68452"
  },
  {
    "url": "philosophy/origin/Socrates.html",
    "revision": "27d6e75603ac43d020230a4a93a968f7"
  },
  {
    "url": "philosophy/rationalism&empiricism/Aristotle.html",
    "revision": "9777d0446a026a38303f3ddc4e5b4210"
  },
  {
    "url": "philosophy/rationalism&empiricism/index.html",
    "revision": "8d5227cf034db8907f9333efce001e0f"
  },
  {
    "url": "philosophy/reason/Descartes.html",
    "revision": "d04f851b48b1d061e1a3a26bc57120a5"
  },
  {
    "url": "philosophy/reason/index.html",
    "revision": "e0d95bcff66bbdd246536d2a244db378"
  },
  {
    "url": "philosophy/reason/philo-sophia.html",
    "revision": "1bafce8dc83aadf219ab13f3fba0e2e5"
  },
  {
    "url": "philosophy/reason/reformation.html",
    "revision": "1b1d7e48ca061c645c4f2a17db177916"
  },
  {
    "url": "philosophy/self-settle/end-of-Greek.html",
    "revision": "17a280262bfcc3fdb3fb67b20d66e6df"
  },
  {
    "url": "philosophy/self-settle/hedonism.html",
    "revision": "e3930c65bf60a6e5b466e194f626968e"
  },
  {
    "url": "philosophy/self-settle/index.html",
    "revision": "2c9cfb75977a43f9c31668004aee1d79"
  },
  {
    "url": "philosophy/self-settle/scepticism.html",
    "revision": "5cb797868a99683942575f662fe60d2a"
  },
  {
    "url": "philosophy/self-settle/stoa.html",
    "revision": "1f9bf02a1ebb382409d2defbec2e7f61"
  },
  {
    "url": "tag/index.html",
    "revision": "91510c35fa4d5c6bedfec68f94558edf"
  },
  {
    "url": "time.jpg",
    "revision": "217a6e2c0d56f4b97415f4a2bf79f92f"
  },
  {
    "url": "timeline/index.html",
    "revision": "e73a9f25ee2ddf566c135029a047bfeb"
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
