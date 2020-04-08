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
    "url": "assets/css/0.styles.7c06cc45.css",
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
    "url": "assets/js/1.e3ef2fa5.js",
    "revision": "fea10cef5763de4308259e8f6469d948"
  },
  {
    "url": "assets/js/10.653e71d4.js",
    "revision": "8753674243dab4d615d2c17c16c8d406"
  },
  {
    "url": "assets/js/11.418148f4.js",
    "revision": "a99e4a6de80bbe6b95e77235587392de"
  },
  {
    "url": "assets/js/12.0aa11382.js",
    "revision": "f20ce40f0e06ebe9f8bcbec624e5508e"
  },
  {
    "url": "assets/js/13.fb26d1d5.js",
    "revision": "e5c8af3833076e5fb05c7a813730ff0c"
  },
  {
    "url": "assets/js/14.1ae6867a.js",
    "revision": "dd9857fac18d167a05e2a11089fdba72"
  },
  {
    "url": "assets/js/15.15a06647.js",
    "revision": "35e70d66d5565f4c42f252788eb075df"
  },
  {
    "url": "assets/js/16.eba0eba6.js",
    "revision": "4ed4316aa1fb1813e2483515071d9f66"
  },
  {
    "url": "assets/js/17.7fee90c9.js",
    "revision": "7d5081f4f614b40614c27efb898b0540"
  },
  {
    "url": "assets/js/18.4e6f3dc4.js",
    "revision": "1178c7e6c18f9351ce85d47781f84465"
  },
  {
    "url": "assets/js/19.c48da2b9.js",
    "revision": "56c85522ba323bb37ed8e4b63faf3fad"
  },
  {
    "url": "assets/js/20.13638b8a.js",
    "revision": "0c7483ec59c6c4d608b0affd786538a0"
  },
  {
    "url": "assets/js/21.2e33aee5.js",
    "revision": "0ce14f3a93007e0d7c58610ef28fea19"
  },
  {
    "url": "assets/js/22.fadbfbe0.js",
    "revision": "f6c1309ffe0b428f40c94f4dc0e4fa7a"
  },
  {
    "url": "assets/js/23.f9876aeb.js",
    "revision": "7cf00332857c43ad1aadf0bf9783cdbf"
  },
  {
    "url": "assets/js/24.608caec6.js",
    "revision": "92c210b731a9f51f02f87b1483cff2ca"
  },
  {
    "url": "assets/js/25.343bb119.js",
    "revision": "a3f5e4e0f3dc847be3010ec6dbbd7a0d"
  },
  {
    "url": "assets/js/26.7946f570.js",
    "revision": "84df2761633d85086af33913bb125454"
  },
  {
    "url": "assets/js/27.bbe89f96.js",
    "revision": "3e6cc9c2cc1b6e6a85433b40c69ed866"
  },
  {
    "url": "assets/js/28.4ca6fb7f.js",
    "revision": "458bcd3708b42ef8a3e190f9047d9c85"
  },
  {
    "url": "assets/js/29.a6316f36.js",
    "revision": "be84d57ce35b5584f8a2fd718c648fbd"
  },
  {
    "url": "assets/js/3.558347a3.js",
    "revision": "ae98b237df43eec6adc125ed812e52fa"
  },
  {
    "url": "assets/js/30.9c95e172.js",
    "revision": "931a8cf2a9fd04d43ad4cf39bc03ef5a"
  },
  {
    "url": "assets/js/31.987cd1f1.js",
    "revision": "92484735b43215aba0f3745f48fa89c8"
  },
  {
    "url": "assets/js/32.b5295c54.js",
    "revision": "b877252dc987463e0d55f5e0380bf43f"
  },
  {
    "url": "assets/js/33.24a8a345.js",
    "revision": "7b978b9df94220f873cb274dd2ab0472"
  },
  {
    "url": "assets/js/34.0425db7e.js",
    "revision": "bc985c688b1f88f8f88c172d3cde752a"
  },
  {
    "url": "assets/js/35.76886457.js",
    "revision": "a8ce77cc61d688886597ee66504ca0ce"
  },
  {
    "url": "assets/js/4.212daf04.js",
    "revision": "cd67e59947806021442e3e3e44d8591a"
  },
  {
    "url": "assets/js/5.2312035f.js",
    "revision": "484ea1b7799a65ca6ba3ab5a34026c4e"
  },
  {
    "url": "assets/js/6.65d445c8.js",
    "revision": "3fd10a55b9946c82571a3327263f3a7f"
  },
  {
    "url": "assets/js/7.d91c55cf.js",
    "revision": "6428682ef0429a9f3a9d0e3c04a9ab5c"
  },
  {
    "url": "assets/js/8.3c18a6f2.js",
    "revision": "36e9fae241891a8b63f0b585568e16d9"
  },
  {
    "url": "assets/js/9.715fd094.js",
    "revision": "771a8ac27cc5d7818a1696889ac41e19"
  },
  {
    "url": "assets/js/app.0d83a5dd.js",
    "revision": "9990336d257c7874513dfd8042bae99c"
  },
  {
    "url": "categories/index.html",
    "revision": "e3d3c05376c31ed67c4c7a788b0d6658"
  },
  {
    "url": "demo.html",
    "revision": "1a8267ecb62aa8669db32b212a35f709"
  },
  {
    "url": "index.html",
    "revision": "8ebd9b76d9498f0864970207a4d9af7b"
  },
  {
    "url": "philosophy/man&gad/index.html",
    "revision": "7eb79a228435edcd900ca297d615bcf1"
  },
  {
    "url": "philosophy/man&gad/patristic-philosophy.html",
    "revision": "a858719b58e5bbc41a18e32eb35f5ba3"
  },
  {
    "url": "philosophy/man&gad/philosophy-come-back.html",
    "revision": "b0226dad15cbc092b9838d8e23eb2b9e"
  },
  {
    "url": "philosophy/man&gad/scholasticism.html",
    "revision": "7fc379507257adadfdb3cdd968af718b"
  },
  {
    "url": "philosophy/origin/atomism&sophists.html",
    "revision": "3e5f17020f76aaf573c1d87a8798cea7"
  },
  {
    "url": "philosophy/origin/history-of-philosophy.html",
    "revision": "4d80cde0b7e1ade559e0f2de71c45544"
  },
  {
    "url": "philosophy/origin/index.html",
    "revision": "ae7f615cf8126d842f65e10f7e303fed"
  },
  {
    "url": "philosophy/origin/materialism-and-immaterialism.html",
    "revision": "ba882b5609a0891912c58f03cbb89015"
  },
  {
    "url": "philosophy/origin/origin-of-philosophy.html",
    "revision": "3a359c17fceb3c5a914c465f5fa1cb66"
  },
  {
    "url": "philosophy/origin/Socrates.html",
    "revision": "c39df82ee5797fe0bd106d380808ed76"
  },
  {
    "url": "philosophy/rationalism&empiricism/Aristotle.html",
    "revision": "880eb7331c2dd76185f8a3d39494449a"
  },
  {
    "url": "philosophy/rationalism&empiricism/index.html",
    "revision": "6a388b7931e43eb4ea7697db3a6216b8"
  },
  {
    "url": "philosophy/reason/Descartes.html",
    "revision": "f4d18141af9fc591a79e219a1e69f057"
  },
  {
    "url": "philosophy/reason/index.html",
    "revision": "28af98c956712becf65f7395795943e3"
  },
  {
    "url": "philosophy/reason/philo-sophia.html",
    "revision": "4aea4f696b02533d70700ab07fabe65d"
  },
  {
    "url": "philosophy/reason/reformation.html",
    "revision": "426ed4902019bb1c1ca9230dbfe6a0fb"
  },
  {
    "url": "philosophy/self-settle/end-of-Greek.html",
    "revision": "f26542d3ead917d26e697d3aaf0ef221"
  },
  {
    "url": "philosophy/self-settle/hedonism.html",
    "revision": "59e88dad57684847b78c260ac1d10e9f"
  },
  {
    "url": "philosophy/self-settle/index.html",
    "revision": "ee66376214364c8d917dda35ac1839bc"
  },
  {
    "url": "philosophy/self-settle/scepticism.html",
    "revision": "5c3a7e9f1b87fb7da55219abd63b85ea"
  },
  {
    "url": "philosophy/self-settle/stoa.html",
    "revision": "f87d1703a2f4d7441a3fc7d4c242e4d0"
  },
  {
    "url": "tag/index.html",
    "revision": "3bc99cdbe83f0248159cc01e3a3854b5"
  },
  {
    "url": "time.jpg",
    "revision": "217a6e2c0d56f4b97415f4a2bf79f92f"
  },
  {
    "url": "timeline/index.html",
    "revision": "4bd29e66d4f717441da0c2d509e8aa04"
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
