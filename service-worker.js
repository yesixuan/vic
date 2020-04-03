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
    "url": "assets/css/0.styles.f605e6ad.css",
    "revision": "8404c188b1f6fd2447066130690aee57"
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
    "url": "assets/js/1.1d6a8e97.js",
    "revision": "7e1a9cf841162081b9490312345e1dec"
  },
  {
    "url": "assets/js/10.05d8a1c6.js",
    "revision": "7eb8395767999943449d331618fc81a8"
  },
  {
    "url": "assets/js/11.e715b63e.js",
    "revision": "ac663f2f8ac3ce4526021b8418b54c8f"
  },
  {
    "url": "assets/js/12.7da580a4.js",
    "revision": "e398aaa222a484d671a00531be74d169"
  },
  {
    "url": "assets/js/13.246feae4.js",
    "revision": "842edfb74b126baa99994910642f6a1a"
  },
  {
    "url": "assets/js/14.2dabb9b4.js",
    "revision": "9c95ab775fbb65a6640e056881fd4297"
  },
  {
    "url": "assets/js/15.bdac4662.js",
    "revision": "3b9ed6c723713b063bfce38bc7a75235"
  },
  {
    "url": "assets/js/16.9a240767.js",
    "revision": "0cf2862cfdb64102b14472328d59810d"
  },
  {
    "url": "assets/js/17.20d4eeed.js",
    "revision": "42676c9c7a99a9ed6794aa54574e9316"
  },
  {
    "url": "assets/js/18.0a04e948.js",
    "revision": "f39c965cc460e79fae0f304424941cbc"
  },
  {
    "url": "assets/js/19.36041950.js",
    "revision": "c92905d04ab7d0fbf36af20a9ea70639"
  },
  {
    "url": "assets/js/20.603f5e98.js",
    "revision": "f5eec2b24400ec30a18ce3e37cbff062"
  },
  {
    "url": "assets/js/21.978b4f9e.js",
    "revision": "43b4f920e0e5680dea3c40004db0fb08"
  },
  {
    "url": "assets/js/22.421b0623.js",
    "revision": "f1fa65752d5f53c263303ea109c35278"
  },
  {
    "url": "assets/js/23.73c36176.js",
    "revision": "66b9dca1d4a565b59552d228fc7d7f3d"
  },
  {
    "url": "assets/js/24.39e4ca42.js",
    "revision": "fa17364b6862b0fdfd82b543e48ad61f"
  },
  {
    "url": "assets/js/25.e6a168e9.js",
    "revision": "d0f80778e15f6212ad227fdf46409db7"
  },
  {
    "url": "assets/js/26.07d386f5.js",
    "revision": "7d8e7e7fdd1dfdf271956ad8bca62faf"
  },
  {
    "url": "assets/js/27.89618154.js",
    "revision": "bfb3680ee405b16d3edda5dd2cbdf48f"
  },
  {
    "url": "assets/js/28.241d85da.js",
    "revision": "4548717bbbcaf7c5f847fdc18efa3888"
  },
  {
    "url": "assets/js/29.ab917d72.js",
    "revision": "5c2244d421726d25ecb9d40f8c6c789f"
  },
  {
    "url": "assets/js/3.792f96ea.js",
    "revision": "c5a2ccb8fb97748816a9f1f853154937"
  },
  {
    "url": "assets/js/30.170b0b08.js",
    "revision": "103c8416b588ac807a98743c3fdd34f5"
  },
  {
    "url": "assets/js/4.f5c0d0e7.js",
    "revision": "d087ca6b3df5b0a460c5f01c309afbc8"
  },
  {
    "url": "assets/js/5.e5123615.js",
    "revision": "4c726911456edc5168945f6058730ebd"
  },
  {
    "url": "assets/js/6.07ff6c2d.js",
    "revision": "9cec99c77cb40ea7b103ce4c52f590de"
  },
  {
    "url": "assets/js/7.68537ea3.js",
    "revision": "0db340691c990fd756f8b5a51af560f5"
  },
  {
    "url": "assets/js/8.88a75b26.js",
    "revision": "3bb52c36f24ff2265558a0e1400e089c"
  },
  {
    "url": "assets/js/9.1074c3ef.js",
    "revision": "159740ff31cf67af69df828184673773"
  },
  {
    "url": "assets/js/app.8e8bcedd.js",
    "revision": "af99c7f8c0d33537c15350f3cb4fadc4"
  },
  {
    "url": "categories/index.html",
    "revision": "ecf974c847d43b4827c6fa49c694a5e1"
  },
  {
    "url": "demo.html",
    "revision": "19cd4bb97f24f2d56d66ba28fffbd43d"
  },
  {
    "url": "index.html",
    "revision": "993a4d82465864a0d58b1963c1449b33"
  },
  {
    "url": "philosophy/man&gad/index.html",
    "revision": "1e13b2929e9400499e003a2793ffeac6"
  },
  {
    "url": "philosophy/man&gad/patristic-philosophy.html",
    "revision": "8f214755b91c43ad66e2a0f2f52933d4"
  },
  {
    "url": "philosophy/man&gad/scholasticism.html",
    "revision": "cabfd7176fb127bb1ff03cc46221c343"
  },
  {
    "url": "philosophy/origin/atomism&sophists.html",
    "revision": "537bc2720d681ddf5c9d9c317303afe5"
  },
  {
    "url": "philosophy/origin/history-of-philosophy.html",
    "revision": "83bb02b4b21955a6236c78eaacfa5963"
  },
  {
    "url": "philosophy/origin/index.html",
    "revision": "afa72c99b55e02f434d7e68ff3aee863"
  },
  {
    "url": "philosophy/origin/materialism-and-immaterialism.html",
    "revision": "b657e8ac03bebbc090797cbe1e3885d7"
  },
  {
    "url": "philosophy/origin/origin-of-philosophy.html",
    "revision": "e4756f3062b25fa8f4ce9959580cf568"
  },
  {
    "url": "philosophy/origin/Socrates.html",
    "revision": "50915c941b36e4417db8e32a3a689e79"
  },
  {
    "url": "philosophy/rationalism&empiricism/Aristotle.html",
    "revision": "adf4cf82090f848774d862bd9a5c7cc7"
  },
  {
    "url": "philosophy/rationalism&empiricism/index.html",
    "revision": "53f9ddfbd79051600cc8c767f5f03bbc"
  },
  {
    "url": "philosophy/self-settle/end-of-Greek.html",
    "revision": "5981e5d7fdc879d3418d3ef4f73ed784"
  },
  {
    "url": "philosophy/self-settle/hedonism.html",
    "revision": "676044feb4b1989136c80130771e4f2c"
  },
  {
    "url": "philosophy/self-settle/index.html",
    "revision": "e323b3c609dcc75dabca5d1bc01d6727"
  },
  {
    "url": "philosophy/self-settle/scepticism.html",
    "revision": "6faacb62605aed5d7358f77292171a57"
  },
  {
    "url": "philosophy/self-settle/stoa.html",
    "revision": "090d4891eccac2283b7f4c06e0b93577"
  },
  {
    "url": "tag/index.html",
    "revision": "ab063cb11bd7c5d7e7cb6461dba5107c"
  },
  {
    "url": "time.jpg",
    "revision": "217a6e2c0d56f4b97415f4a2bf79f92f"
  },
  {
    "url": "timeline/index.html",
    "revision": "e56f57511c1fce9aef838f6f28c01001"
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
