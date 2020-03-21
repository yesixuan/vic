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
    "url": "assets/js/19.94d672a4.js",
    "revision": "e4f8e5ff360cb157a47a4107c37924bf"
  },
  {
    "url": "assets/js/20.78a2cc87.js",
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
    "url": "assets/js/app.8daeec00.js",
    "revision": "e39743226c8b51e6188d6bb207ddf0ac"
  },
  {
    "url": "categories/index.html",
    "revision": "16eb6bbf6f44dad28eff37119760a615"
  },
  {
    "url": "demo.html",
    "revision": "8acdbfee77f9b5ff86937fb1c676a602"
  },
  {
    "url": "index.html",
    "revision": "02b67154f7f09a90c40c0e3bdde5706a"
  },
  {
    "url": "philosophy/origin/atomism&sophists.html",
    "revision": "e9cdcb4f72377818feaae00083ee68de"
  },
  {
    "url": "philosophy/origin/history-of-philosophy.html",
    "revision": "35c2f35941f70b8cb6fe483d0af8a5fd"
  },
  {
    "url": "philosophy/origin/index.html",
    "revision": "3b830ef07c17004df62ad735bdc329a6"
  },
  {
    "url": "philosophy/origin/materialism-and-immaterialism.html",
    "revision": "edf58705cbe15f4759195b5431d42a58"
  },
  {
    "url": "philosophy/origin/origin-of-philosophy.html",
    "revision": "b038872d488eaf25fddd1aa5b9d17b52"
  },
  {
    "url": "philosophy/origin/Socrates.html",
    "revision": "334bd5063bfe099a0232f3181b25c3cf"
  },
  {
    "url": "philosophy/rationalism&empiricism/Aristotle.html",
    "revision": "c25eb0bb8cc1d8a69211b5595eff070a"
  },
  {
    "url": "philosophy/rationalism&empiricism/Plato.html",
    "revision": "962e6172810b9700889647d7313244cd"
  },
  {
    "url": "tag/index.html",
    "revision": "51fd90d6d334ffcf9f3484533feb2894"
  },
  {
    "url": "time.jpg",
    "revision": "217a6e2c0d56f4b97415f4a2bf79f92f"
  },
  {
    "url": "timeline/index.html",
    "revision": "a37fdd2d4547b4d019c3f109bc13b0bf"
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
