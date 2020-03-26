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
    "url": "assets/css/0.styles.b4138879.css",
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
    "url": "assets/js/1.179e22fc.js",
    "revision": "7e1a9cf841162081b9490312345e1dec"
  },
  {
    "url": "assets/js/10.1654d966.js",
    "revision": "c0a1dc4fd4b47cb8d826aac808e266c8"
  },
  {
    "url": "assets/js/11.93445289.js",
    "revision": "ac663f2f8ac3ce4526021b8418b54c8f"
  },
  {
    "url": "assets/js/12.1c2395a6.js",
    "revision": "e398aaa222a484d671a00531be74d169"
  },
  {
    "url": "assets/js/13.941ab324.js",
    "revision": "158847cede70b98168ccc13fea435998"
  },
  {
    "url": "assets/js/14.e571b9f8.js",
    "revision": "478a0b3728b6f8ebc718dd2a5b110da2"
  },
  {
    "url": "assets/js/15.a73d8eda.js",
    "revision": "3d6cd3d5b6114c302a89bacaecaff02c"
  },
  {
    "url": "assets/js/16.f6bf6ef8.js",
    "revision": "52a9e1cc8e12d5b75dca7f0f7ea3f1c2"
  },
  {
    "url": "assets/js/17.78fe3a2e.js",
    "revision": "c247e28971f5f258e6540672d51ac739"
  },
  {
    "url": "assets/js/18.c1e5668d.js",
    "revision": "190cfdce9298aa2e076245065a8cb3e3"
  },
  {
    "url": "assets/js/19.fb76cc4a.js",
    "revision": "8c58baaa5a66047ed8f3a243116ea6ab"
  },
  {
    "url": "assets/js/20.cca4aaac.js",
    "revision": "f43cb35ae84197d2bc3d7abd5cca0789"
  },
  {
    "url": "assets/js/21.0e2311bc.js",
    "revision": "a9fbce2ffca2044946de619a8cb7b2ff"
  },
  {
    "url": "assets/js/22.7cc9103e.js",
    "revision": "3102760e5fc2adf970d538a0be5fc325"
  },
  {
    "url": "assets/js/23.006ff35f.js",
    "revision": "1baa944906aa726d29afca29e7d3da19"
  },
  {
    "url": "assets/js/24.fdc17b57.js",
    "revision": "72074cafdcabf5bebd2ecbb5beb811eb"
  },
  {
    "url": "assets/js/3.2bd6378e.js",
    "revision": "c5a2ccb8fb97748816a9f1f853154937"
  },
  {
    "url": "assets/js/4.f63241c4.js",
    "revision": "d087ca6b3df5b0a460c5f01c309afbc8"
  },
  {
    "url": "assets/js/5.a2a0ceb8.js",
    "revision": "4c726911456edc5168945f6058730ebd"
  },
  {
    "url": "assets/js/6.f95672ff.js",
    "revision": "9cec99c77cb40ea7b103ce4c52f590de"
  },
  {
    "url": "assets/js/7.6cf567c2.js",
    "revision": "0db340691c990fd756f8b5a51af560f5"
  },
  {
    "url": "assets/js/8.c01f11c8.js",
    "revision": "3bb52c36f24ff2265558a0e1400e089c"
  },
  {
    "url": "assets/js/9.b7624c48.js",
    "revision": "159740ff31cf67af69df828184673773"
  },
  {
    "url": "assets/js/app.8a13d27e.js",
    "revision": "e77c2ca098f5c61b4d22d65b368f35f3"
  },
  {
    "url": "categories/index.html",
    "revision": "555e7cde410105fefd5f501498e7ddfa"
  },
  {
    "url": "demo.html",
    "revision": "7b6255f1e43770bc561d3e01f0d1bd0c"
  },
  {
    "url": "index.html",
    "revision": "7e6258cd54378f06773c46336d49a0e2"
  },
  {
    "url": "philosophy/origin/atomism&sophists.html",
    "revision": "09ec9d6c196109e09ee022dacf5fe96f"
  },
  {
    "url": "philosophy/origin/history-of-philosophy.html",
    "revision": "5828a79f14f4445a1f014155b86d1aad"
  },
  {
    "url": "philosophy/origin/index.html",
    "revision": "ed8b6b527d80a0142a4225a97d0b96fa"
  },
  {
    "url": "philosophy/origin/materialism-and-immaterialism.html",
    "revision": "3406b2b6e3e1c4f39348f010cf102081"
  },
  {
    "url": "philosophy/origin/origin-of-philosophy.html",
    "revision": "34dbcf0e5f36618f8026d543d51f9782"
  },
  {
    "url": "philosophy/origin/Socrates.html",
    "revision": "48b9f66bb6af7a3fb8d7121fa4acbb58"
  },
  {
    "url": "philosophy/rationalism&empiricism/Aristotle.html",
    "revision": "f897e16fafede0d65a173ab535d7faa7"
  },
  {
    "url": "philosophy/rationalism&empiricism/index.html",
    "revision": "55e305cfa94a44862022a08a88f1e29a"
  },
  {
    "url": "philosophy/self-settle/index.html",
    "revision": "248bd7943d90badd939295c8b53e05e1"
  },
  {
    "url": "philosophy/self-settle/scepticism.html",
    "revision": "7b5a7b43749c786d272495e1cfd11269"
  },
  {
    "url": "tag/index.html",
    "revision": "cbde529383146a610172644a43bedee5"
  },
  {
    "url": "time.jpg",
    "revision": "217a6e2c0d56f4b97415f4a2bf79f92f"
  },
  {
    "url": "timeline/index.html",
    "revision": "8fa1335a83cc8369e9d0c95f8a637859"
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
