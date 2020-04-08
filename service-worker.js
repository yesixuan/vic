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
    "url": "assets/js/14.2f6b64bc.js",
    "revision": "a7da2d64ff5c6c7bed53d5a89c9fb3cc"
  },
  {
    "url": "assets/js/15.ffff102f.js",
    "revision": "e613ae9e8b501d313a2932d5820ae0b6"
  },
  {
    "url": "assets/js/16.720882d1.js",
    "revision": "cec389af760a43789ce579476cd5e91c"
  },
  {
    "url": "assets/js/17.969a385c.js",
    "revision": "da32936ac1ba5d4c31a2423173b43c12"
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
    "url": "assets/js/25.c918e0ff.js",
    "revision": "0f9bba6a4e3cb37e7d1759662be36591"
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
    "url": "assets/js/app.d673b26f.js",
    "revision": "bb7318b779347ea80d13ddfb92df7d82"
  },
  {
    "url": "categories/index.html",
    "revision": "287f9d0110d97feb2177a31a4742fb73"
  },
  {
    "url": "demo.html",
    "revision": "1f70be5865c8405ab21f7a9bab46f6af"
  },
  {
    "url": "index.html",
    "revision": "01b75e4396a23027d0f56349bf7d700c"
  },
  {
    "url": "philosophy/man&gad/index.html",
    "revision": "a919be39de01bbc1a84fe10cab89e1d7"
  },
  {
    "url": "philosophy/man&gad/patristic-philosophy.html",
    "revision": "83b5f37ca70063d5b28f6f5d1c87b212"
  },
  {
    "url": "philosophy/man&gad/philosophy-come-back.html",
    "revision": "588ed28ed86d5f73753baa7276bb0f49"
  },
  {
    "url": "philosophy/man&gad/scholasticism.html",
    "revision": "079d0a254c96df015a410b9b227e04f2"
  },
  {
    "url": "philosophy/origin/atomism&sophists.html",
    "revision": "165c01d0ae72d54d8ee28d9d489c1ca5"
  },
  {
    "url": "philosophy/origin/history-of-philosophy.html",
    "revision": "f2c3a27fd216afd2bdc5ef89fb8e3cb2"
  },
  {
    "url": "philosophy/origin/index.html",
    "revision": "b53fb9492688c4e67d29e69fa93b5fc0"
  },
  {
    "url": "philosophy/origin/materialism-and-immaterialism.html",
    "revision": "c4ce5282df408b0b08c781ddc5f0648f"
  },
  {
    "url": "philosophy/origin/origin-of-philosophy.html",
    "revision": "08c4f3d37ce8589cff401b29c9116965"
  },
  {
    "url": "philosophy/origin/Socrates.html",
    "revision": "73988e9030a3851e83353731a775abba"
  },
  {
    "url": "philosophy/rationalism&empiricism/Aristotle.html",
    "revision": "a9203de55172245c104a3c1a19245a97"
  },
  {
    "url": "philosophy/rationalism&empiricism/index.html",
    "revision": "b8520398b3805fc0460d5ef190d516fd"
  },
  {
    "url": "philosophy/reason/Descartes.html",
    "revision": "7ee45c5d7d4af8255e636ada588bb4ee"
  },
  {
    "url": "philosophy/reason/index.html",
    "revision": "44bcf5caa5d77fba8c97c9f7730d7fd7"
  },
  {
    "url": "philosophy/reason/philo-sophia.html",
    "revision": "3f71fc61b4999a763f306714940868a2"
  },
  {
    "url": "philosophy/reason/reformation.html",
    "revision": "8cfb0db983320c4cfb8339a81d4980b5"
  },
  {
    "url": "philosophy/self-settle/end-of-Greek.html",
    "revision": "177cc860b4681e43512b22c6333e6010"
  },
  {
    "url": "philosophy/self-settle/hedonism.html",
    "revision": "70fb4b59e95db15282a6d16fee65dffd"
  },
  {
    "url": "philosophy/self-settle/index.html",
    "revision": "82f51eae25e4829f9480e18b95a65ec1"
  },
  {
    "url": "philosophy/self-settle/scepticism.html",
    "revision": "11498ad3ef86b4643b60326d25627e3d"
  },
  {
    "url": "philosophy/self-settle/stoa.html",
    "revision": "c40bff7490d0a1f6b390798ac81a7ebe"
  },
  {
    "url": "tag/index.html",
    "revision": "b1947ee7035c83dfb27b653ce704762f"
  },
  {
    "url": "time.jpg",
    "revision": "217a6e2c0d56f4b97415f4a2bf79f92f"
  },
  {
    "url": "timeline/index.html",
    "revision": "17bd261198f095deace4ed9aec5021f1"
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
