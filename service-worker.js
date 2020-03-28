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
    "url": "assets/js/24.3b2d31d5.js",
    "revision": "cdd7ad15ffb7cf75f0497ebca56c54df"
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
    "url": "assets/js/app.4f4fc82b.js",
    "revision": "7eb1200dd659343f99868c671429a028"
  },
  {
    "url": "categories/index.html",
    "revision": "78ed28239e25f272a346c7c7463e04de"
  },
  {
    "url": "demo.html",
    "revision": "b5d1fef8840bf104630a1c24298cec44"
  },
  {
    "url": "index.html",
    "revision": "fe407dd45adad52ec229370be0752cfa"
  },
  {
    "url": "philosophy/origin/atomism&sophists.html",
    "revision": "8180922b1f0625f35e7475815335b446"
  },
  {
    "url": "philosophy/origin/history-of-philosophy.html",
    "revision": "d493b8d309031ef90ef2b99c7c48987a"
  },
  {
    "url": "philosophy/origin/index.html",
    "revision": "eff0943b61415fb3cd7763c261fca8c1"
  },
  {
    "url": "philosophy/origin/materialism-and-immaterialism.html",
    "revision": "15c6dd45127b8eab4a659908170934e4"
  },
  {
    "url": "philosophy/origin/origin-of-philosophy.html",
    "revision": "d6aeccbd7db0d8748613b2ec57e7f246"
  },
  {
    "url": "philosophy/origin/Socrates.html",
    "revision": "f084e9451180e048cbf6cb7e223715f5"
  },
  {
    "url": "philosophy/rationalism&empiricism/Aristotle.html",
    "revision": "046dab565586ff03c1cffffe588fb7ef"
  },
  {
    "url": "philosophy/rationalism&empiricism/index.html",
    "revision": "1eee981d03580bea45b5d462c64471ae"
  },
  {
    "url": "philosophy/self-settle/hedonism.html",
    "revision": "7b863ce2febd65b758d215a23b4b10e3"
  },
  {
    "url": "philosophy/self-settle/index.html",
    "revision": "79359522237bc9b85e20ad8c31f6e6b5"
  },
  {
    "url": "philosophy/self-settle/scepticism.html",
    "revision": "e062ac6e9941ab779228bc58c96a7cb4"
  },
  {
    "url": "philosophy/self-settle/stoa.html",
    "revision": "f4a2e55e99a47438fd5b1accf5bf2819"
  },
  {
    "url": "tag/index.html",
    "revision": "f891eef3e0a4516b72c4b191c2f8a9a5"
  },
  {
    "url": "time.jpg",
    "revision": "217a6e2c0d56f4b97415f4a2bf79f92f"
  },
  {
    "url": "timeline/index.html",
    "revision": "93e9c798d3a937828d8e1e56ba094f63"
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
