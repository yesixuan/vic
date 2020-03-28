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
    "url": "assets/js/24.3f0ecd60.js",
    "revision": "535ddb9f2000f1978ae10a552192f0a3"
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
    "url": "assets/js/app.cb5edd93.js",
    "revision": "fa5106cdd8771b481e5a356d088213f7"
  },
  {
    "url": "categories/index.html",
    "revision": "22a6cff32a07d425dc4bc7403d4575c7"
  },
  {
    "url": "demo.html",
    "revision": "c09cb2d832242c2dd641dd4c56531472"
  },
  {
    "url": "index.html",
    "revision": "5b4fc078e2f94a40dc48d87be5441eee"
  },
  {
    "url": "philosophy/origin/atomism&sophists.html",
    "revision": "f4b207102e2297d0958e31bd5e7c144f"
  },
  {
    "url": "philosophy/origin/history-of-philosophy.html",
    "revision": "27c6e7c61ecce62b0b44985b2ad927d1"
  },
  {
    "url": "philosophy/origin/index.html",
    "revision": "52e415d3eb91651fbdc62d2d593fb4cf"
  },
  {
    "url": "philosophy/origin/materialism-and-immaterialism.html",
    "revision": "a073996ebdbe434aab498b5d206d0331"
  },
  {
    "url": "philosophy/origin/origin-of-philosophy.html",
    "revision": "d62103b7094ce049e01bf481d2e37151"
  },
  {
    "url": "philosophy/origin/Socrates.html",
    "revision": "8764df4ebff49bcc0daba6960b101eeb"
  },
  {
    "url": "philosophy/rationalism&empiricism/Aristotle.html",
    "revision": "ad1b35cd05296d31d2b2205a2ffa8189"
  },
  {
    "url": "philosophy/rationalism&empiricism/index.html",
    "revision": "632ef270cabb01ee4c9e1d8cb65f02d9"
  },
  {
    "url": "philosophy/self-settle/hedonism.html",
    "revision": "16bfd6d56b5b8a7a40bc5a6c38150b6e"
  },
  {
    "url": "philosophy/self-settle/index.html",
    "revision": "a0f9244e108a15b694111fb077a281bc"
  },
  {
    "url": "philosophy/self-settle/scepticism.html",
    "revision": "82984423add42b716fa0fd7558f0eb24"
  },
  {
    "url": "philosophy/self-settle/stoa.html",
    "revision": "d0b220fc84dab7f1cfaf678088f8f170"
  },
  {
    "url": "tag/index.html",
    "revision": "666206bea9b0bcbaa2c74223e56f2e7a"
  },
  {
    "url": "time.jpg",
    "revision": "217a6e2c0d56f4b97415f4a2bf79f92f"
  },
  {
    "url": "timeline/index.html",
    "revision": "48cd5dbbeae72740f6b10636a3d24a6c"
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
