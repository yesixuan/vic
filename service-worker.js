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
    "url": "assets/js/10.75c09656.js",
    "revision": "af3147dfbeedd02e4319eb55c7361f29"
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
    "url": "assets/js/19.dd283c19.js",
    "revision": "d45018e26d0e5f204f6e2b879627609a"
  },
  {
    "url": "assets/js/20.cca4aaac.js",
    "revision": "f43cb35ae84197d2bc3d7abd5cca0789"
  },
  {
    "url": "assets/js/21.181502bc.js",
    "revision": "4e8a7cdf86d3d84ddd99b736ef0c69ec"
  },
  {
    "url": "assets/js/22.9f6b74a8.js",
    "revision": "342490102d133e88d39cef19945dca3e"
  },
  {
    "url": "assets/js/23.824467ac.js",
    "revision": "e875f61668752a24fae1b26087105d4d"
  },
  {
    "url": "assets/js/24.039a6333.js",
    "revision": "6118552092b9f1935a58c1eebe1b1a6b"
  },
  {
    "url": "assets/js/25.505fb257.js",
    "revision": "ba3457522bcf26518e23945f8b627dd9"
  },
  {
    "url": "assets/js/26.524bd85c.js",
    "revision": "9e65fa23d2ef24746e16bcd90c6219a1"
  },
  {
    "url": "assets/js/27.eaf0ad84.js",
    "revision": "384e3721ef7573a85cf6230bbd878aff"
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
    "url": "assets/js/app.9ec551d1.js",
    "revision": "59241855808b914416847850ce708a9e"
  },
  {
    "url": "categories/index.html",
    "revision": "93fa45334faabf17a6102b69d09e292f"
  },
  {
    "url": "demo.html",
    "revision": "fb7eabf1c8727443811cf88eb1510106"
  },
  {
    "url": "index.html",
    "revision": "2714301b65b1b60f0095505a0c1e38e6"
  },
  {
    "url": "philosophy/origin/atomism&sophists.html",
    "revision": "e342b6fbcdebb5d810704f7e4fde48a2"
  },
  {
    "url": "philosophy/origin/history-of-philosophy.html",
    "revision": "ecdcb5d6c93a1bd6298f1ec1a30f0f61"
  },
  {
    "url": "philosophy/origin/index.html",
    "revision": "7b35f47bb668e4c8496309f8d185226e"
  },
  {
    "url": "philosophy/origin/materialism-and-immaterialism.html",
    "revision": "6dbb897757d22033639cfb9db231f806"
  },
  {
    "url": "philosophy/origin/origin-of-philosophy.html",
    "revision": "627130512150fa3c49f0a3983527a106"
  },
  {
    "url": "philosophy/origin/Socrates.html",
    "revision": "5ff2bbdf77a22a9779d9049521f4c8ff"
  },
  {
    "url": "philosophy/rationalism&empiricism/Aristotle.html",
    "revision": "72a5386bf13b87fa304a3b7a7bd22001"
  },
  {
    "url": "philosophy/rationalism&empiricism/index.html",
    "revision": "77cd36fe46e62bbd81761dca7a7343c6"
  },
  {
    "url": "philosophy/self-settle/end-of-Greek.html",
    "revision": "07a379c05338073cb5f94155b5c3bd94"
  },
  {
    "url": "philosophy/self-settle/hedonism.html",
    "revision": "a9df69fa29bc5adc94249c3fdd4a1937"
  },
  {
    "url": "philosophy/self-settle/index.html",
    "revision": "684269a0f243f5f790c1cab1ce7c535f"
  },
  {
    "url": "philosophy/self-settle/scepticism.html",
    "revision": "a8535ac9207a3f22b5dae5e4aa3e5aae"
  },
  {
    "url": "philosophy/self-settle/stoa.html",
    "revision": "8c05d3504b9799473e99604792e677ee"
  },
  {
    "url": "tag/index.html",
    "revision": "7a64f4e0a23e13ec15600a4f133a3c2c"
  },
  {
    "url": "time.jpg",
    "revision": "217a6e2c0d56f4b97415f4a2bf79f92f"
  },
  {
    "url": "timeline/index.html",
    "revision": "227b411ab552fc3bf07fdcb77366862d"
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
