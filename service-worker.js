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
    "url": "assets/css/0.styles.eba9bd4b.css",
    "revision": "b27e063b2ac1ea996f7143f7581b2de3"
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
    "url": "assets/js/1.5d0e70c1.js",
    "revision": "f116faba9fe60cfa6dd5d279248a624d"
  },
  {
    "url": "assets/js/10.6bb982e5.js",
    "revision": "dffdf84d59655944db407f78f6d2dbce"
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
    "url": "assets/js/19.b0d9fcbb.js",
    "revision": "3c04db7388f8ee928cfa43a5a514d926"
  },
  {
    "url": "assets/js/20.cca4aaac.js",
    "revision": "f43cb35ae84197d2bc3d7abd5cca0789"
  },
  {
    "url": "assets/js/21.cf14ef5b.js",
    "revision": "df44ac5d2a7952ab5b0137abbbeb74d4"
  },
  {
    "url": "assets/js/22.065f3e17.js",
    "revision": "dc71ea5a6ab4e561cac32f8d6d561c7f"
  },
  {
    "url": "assets/js/3.637cd4bb.js",
    "revision": "d781bd1e6b90dcaf40f08f48f9c44960"
  },
  {
    "url": "assets/js/4.013d262a.js",
    "revision": "a44e24978ef030dd2914c795d3bd0ca1"
  },
  {
    "url": "assets/js/5.a504351b.js",
    "revision": "ff20d52c8c973f05d0e1c7e44f42022e"
  },
  {
    "url": "assets/js/6.01fca290.js",
    "revision": "72da8c8ebdcebdbd3ddc23565f12c939"
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
    "url": "assets/js/9.e5beb490.js",
    "revision": "a49b4b521354e78fc5704146cc681e17"
  },
  {
    "url": "assets/js/app.6410d0d5.js",
    "revision": "bb4a6f51a001ced6886e69e2d1e2a32c"
  },
  {
    "url": "categories/index.html",
    "revision": "4fd62ecbaaa9d1f60f5ee0e1b8bda01a"
  },
  {
    "url": "demo.html",
    "revision": "97b108b9faeed89fcd3e49e86639beae"
  },
  {
    "url": "index.html",
    "revision": "a194f3949208b14695b1acb8dee5bf37"
  },
  {
    "url": "philosophy/origin/atomism&sophists.html",
    "revision": "3c74592b7b8e04fa70c5c380aeffa9f6"
  },
  {
    "url": "philosophy/origin/history-of-philosophy.html",
    "revision": "75b36ef5b9c22f96a66e9f0bfbc18232"
  },
  {
    "url": "philosophy/origin/index.html",
    "revision": "ab5e3bbc614e9699085c89bf0ee5c983"
  },
  {
    "url": "philosophy/origin/materialism-and-immaterialism.html",
    "revision": "bfa210ec365436506d26c5498e68b359"
  },
  {
    "url": "philosophy/origin/origin-of-philosophy.html",
    "revision": "552bc4f1d009578572b80a68b01986bf"
  },
  {
    "url": "philosophy/origin/Socrates.html",
    "revision": "cc0ba4d84fcd28cf22fce34ad5ced188"
  },
  {
    "url": "philosophy/rationalism&empiricism/Aristotle.html",
    "revision": "26db1b1dd70b6793674b97f127857200"
  },
  {
    "url": "philosophy/rationalism&empiricism/index.html",
    "revision": "66f3f1a9f077b402dff03ab6f6b91666"
  },
  {
    "url": "tag/index.html",
    "revision": "896149ea7fffa37fcaa784cc3bda677d"
  },
  {
    "url": "time.jpg",
    "revision": "217a6e2c0d56f4b97415f4a2bf79f92f"
  },
  {
    "url": "timeline/index.html",
    "revision": "5c1f0fb9b587fc6199371a047bafc69d"
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
