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
    "url": "assets/js/11.86cfbfc7.js",
    "revision": "c30df95a7ea6b9c6c3b93f40862fafd2"
  },
  {
    "url": "assets/js/12.1d202543.js",
    "revision": "fe04e11ef4ea2af65fe42ed4c2636d02"
  },
  {
    "url": "assets/js/13.3077d801.js",
    "revision": "0c9d57d6740173f0aba37fb1ab5c18cb"
  },
  {
    "url": "assets/js/14.82ee2d82.js",
    "revision": "93cf4501a7810ce45c71fec790521c96"
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
    "url": "assets/js/app.cb46d7c3.js",
    "revision": "089d750e0e25c5c4aa4f6cef4c69bbc0"
  },
  {
    "url": "categories/index.html",
    "revision": "10ab5519d662248502e4dd768a43c1a4"
  },
  {
    "url": "demo.html",
    "revision": "98ddc1c469589ca5fe6dc3ffde5dfa09"
  },
  {
    "url": "index.html",
    "revision": "0737e2e0228bf7aa9534a981c2406fb3"
  },
  {
    "url": "philosophy/origin/atomism&sophists.html",
    "revision": "312558156a74d7d131991f560abc0a31"
  },
  {
    "url": "philosophy/origin/history-of-philosophy.html",
    "revision": "e72c9bc9d7196ad271d48a58deec56a7"
  },
  {
    "url": "philosophy/origin/index.html",
    "revision": "de9f139a6b494946b64b6e74e1717941"
  },
  {
    "url": "philosophy/origin/materialism-and-immaterialism.html",
    "revision": "c6df3441df02b8694649e0fc29088cdd"
  },
  {
    "url": "philosophy/origin/origin-of-philosophy.html",
    "revision": "7fd3f34910c55457dac9468cb02ce4b0"
  },
  {
    "url": "philosophy/origin/Socrates.html",
    "revision": "d4c9758a9980c19b1a02eda2f58f8c33"
  },
  {
    "url": "philosophy/rationalism&empiricism/Aristotle.html",
    "revision": "997e3e08f72a3f2889c67355078fae8e"
  },
  {
    "url": "philosophy/rationalism&empiricism/index.html",
    "revision": "d57f23d319983bdc63528001f946952c"
  },
  {
    "url": "tag/index.html",
    "revision": "3b17d750fb504228de6212a0224cd5fa"
  },
  {
    "url": "time.jpg",
    "revision": "217a6e2c0d56f4b97415f4a2bf79f92f"
  },
  {
    "url": "timeline/index.html",
    "revision": "25868641e3d16c553167f200d126f365"
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
