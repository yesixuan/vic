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
    "url": "assets/js/10.93c0d786.js",
    "revision": "3001a1f67aa40791c092cf9479d1f363"
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
    "url": "assets/js/21.0dad07a6.js",
    "revision": "95fbae6cb47c99934c668b52a7778cee"
  },
  {
    "url": "assets/js/22.3c64be72.js",
    "revision": "06b9019383845461b35d9147a9070c6d"
  },
  {
    "url": "assets/js/23.b5dbb1af.js",
    "revision": "28c9211148c47aaee9c21a02e7f9dccd"
  },
  {
    "url": "assets/js/24.bc878611.js",
    "revision": "38f4089e0dbee6617e93c718287a26fc"
  },
  {
    "url": "assets/js/25.4693684f.js",
    "revision": "58ef48750cda77ebf56bc3e80b2be409"
  },
  {
    "url": "assets/js/26.42ffe87c.js",
    "revision": "7adb215c99ec1167f31f4e1e26699ffc"
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
    "url": "assets/js/app.251c3dcc.js",
    "revision": "6eb3cb25553e8346ac5bebb8a58b5de8"
  },
  {
    "url": "categories/index.html",
    "revision": "def3d2f87989c022420ee6ca5b7ac5d2"
  },
  {
    "url": "demo.html",
    "revision": "fe08901d19a6fd32cf35f866df6a3807"
  },
  {
    "url": "index.html",
    "revision": "71616d44fde3f610d0229aea2a46a92d"
  },
  {
    "url": "philosophy/origin/atomism&sophists.html",
    "revision": "cb164e8e1a351726bdb4dab175870c46"
  },
  {
    "url": "philosophy/origin/history-of-philosophy.html",
    "revision": "f56dd923a4b40d939409c17e0d4d2fc8"
  },
  {
    "url": "philosophy/origin/index.html",
    "revision": "6587f6921be42c0192d2a90460b3bc39"
  },
  {
    "url": "philosophy/origin/materialism-and-immaterialism.html",
    "revision": "356ae70a0d98dcbfbe885b76d7619942"
  },
  {
    "url": "philosophy/origin/origin-of-philosophy.html",
    "revision": "cac8e4548c7b8ba1df941e95a9e2efa6"
  },
  {
    "url": "philosophy/origin/Socrates.html",
    "revision": "dcf37e6b2358160184b65b4267b22fd7"
  },
  {
    "url": "philosophy/rationalism&empiricism/Aristotle.html",
    "revision": "9f6eaf4c0d88f213e12403f644df44a8"
  },
  {
    "url": "philosophy/rationalism&empiricism/index.html",
    "revision": "a4ad9ca3373c3cdfca962ac7c39d141d"
  },
  {
    "url": "philosophy/self-settle/hedonism.html",
    "revision": "17e73008d121512f305aadb06f5e2ef3"
  },
  {
    "url": "philosophy/self-settle/index.html",
    "revision": "d10d0614214cf8896c5bcca697e30dae"
  },
  {
    "url": "philosophy/self-settle/scepticism.html",
    "revision": "f76b5acdfe44e736a04283f532d77023"
  },
  {
    "url": "philosophy/self-settle/stoa.html",
    "revision": "5bf964f07a04698a1be1137fecd3c71b"
  },
  {
    "url": "tag/index.html",
    "revision": "824a62ec62d2df2855f23f286e3b03ac"
  },
  {
    "url": "time.jpg",
    "revision": "217a6e2c0d56f4b97415f4a2bf79f92f"
  },
  {
    "url": "timeline/index.html",
    "revision": "8ae42977603f1a2470256f31049f2836"
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
