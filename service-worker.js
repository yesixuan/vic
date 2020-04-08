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
    "url": "assets/js/25.d8a30e8a.js",
    "revision": "cb6e7012b4fc55fde23c7aa2b81173d6"
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
    "url": "assets/js/app.096f890f.js",
    "revision": "eb367393370ce46f228d55418f7319b5"
  },
  {
    "url": "categories/index.html",
    "revision": "6e22e15964659cb62e5518bfa1687898"
  },
  {
    "url": "demo.html",
    "revision": "0373c83aa125cef4ed77cecf1e65737f"
  },
  {
    "url": "index.html",
    "revision": "4fc2ce296196a3bc672cc37813a01d8b"
  },
  {
    "url": "philosophy/man&gad/index.html",
    "revision": "330384372a82509e1e620d77dd6ed288"
  },
  {
    "url": "philosophy/man&gad/patristic-philosophy.html",
    "revision": "51ae954bace3c8153acade039316a6be"
  },
  {
    "url": "philosophy/man&gad/philosophy-come-back.html",
    "revision": "e6369e87053061e8513b9cf16e808a8b"
  },
  {
    "url": "philosophy/man&gad/scholasticism.html",
    "revision": "52cb9dabbf81323eb08144f1f9ce959b"
  },
  {
    "url": "philosophy/origin/atomism&sophists.html",
    "revision": "dbf07fe330bac3df91de1f7f608832ad"
  },
  {
    "url": "philosophy/origin/history-of-philosophy.html",
    "revision": "260367731a77d174f035a2531b0379ca"
  },
  {
    "url": "philosophy/origin/index.html",
    "revision": "bba5885ab60d91983a126164fbd3abdc"
  },
  {
    "url": "philosophy/origin/materialism-and-immaterialism.html",
    "revision": "e8963cc203cf125bf361900ea261b75f"
  },
  {
    "url": "philosophy/origin/origin-of-philosophy.html",
    "revision": "8fb32c06924e5f0b0c5a005b3a687527"
  },
  {
    "url": "philosophy/origin/Socrates.html",
    "revision": "533ed16a53fbc5548782e70e41ff98bf"
  },
  {
    "url": "philosophy/rationalism&empiricism/Aristotle.html",
    "revision": "e71a08ed9427f79292e700392e40f7e5"
  },
  {
    "url": "philosophy/rationalism&empiricism/index.html",
    "revision": "7282ee68728a297555baedc11d3b0df6"
  },
  {
    "url": "philosophy/reason/Descartes.html",
    "revision": "1067ae27e34015dce1252d830d9c8a51"
  },
  {
    "url": "philosophy/reason/index.html",
    "revision": "61076ab04c7676993f4642a04b974a79"
  },
  {
    "url": "philosophy/reason/philo-sophia.html",
    "revision": "fe281cde997545014d8f21d9d749f234"
  },
  {
    "url": "philosophy/reason/reformation.html",
    "revision": "7d210f8337ea0c1fd8e21d0109e2f13a"
  },
  {
    "url": "philosophy/self-settle/end-of-Greek.html",
    "revision": "8767e1c75135f3e066ff7542b2cd82ca"
  },
  {
    "url": "philosophy/self-settle/hedonism.html",
    "revision": "1f7717c42f07c395cc6a85efb8f3c2c0"
  },
  {
    "url": "philosophy/self-settle/index.html",
    "revision": "964205c6df6a48ef35fd28adb6e7e903"
  },
  {
    "url": "philosophy/self-settle/scepticism.html",
    "revision": "b0f5b50d3c83486e05ce0847188e74c1"
  },
  {
    "url": "philosophy/self-settle/stoa.html",
    "revision": "f4573d3cccb83921eb82b6eedce2c38c"
  },
  {
    "url": "tag/index.html",
    "revision": "feac93b7d79f0bd7a09047dbcf6739de"
  },
  {
    "url": "time.jpg",
    "revision": "217a6e2c0d56f4b97415f4a2bf79f92f"
  },
  {
    "url": "timeline/index.html",
    "revision": "cac18dd39694ff4e36afcaa2ffc80ab6"
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
