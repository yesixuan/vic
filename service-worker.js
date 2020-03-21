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
    "url": "assets/js/12.9af3215f.js",
    "revision": "87679263abdd5362688eed764ae087f8"
  },
  {
    "url": "assets/js/13.3077d801.js",
    "revision": "0c9d57d6740173f0aba37fb1ab5c18cb"
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
    "url": "assets/js/19.df43ff01.js",
    "revision": "c3312cc9b2e235c617c18be52095ae32"
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
    "url": "assets/js/app.f611c143.js",
    "revision": "929ec242a2c06fffa68f0aeb5abf76e9"
  },
  {
    "url": "categories/index.html",
    "revision": "903fcc33ea23e483c65fee895e3b9b5f"
  },
  {
    "url": "demo.html",
    "revision": "0d7cb3c8d00e69bb8ac2f8f6e9653843"
  },
  {
    "url": "index.html",
    "revision": "e095e53833bdbe8306e525d129108ed2"
  },
  {
    "url": "philosophy/origin/atomism&sophists.html",
    "revision": "4026716ce7d1c824791f088f61567c2b"
  },
  {
    "url": "philosophy/origin/history-of-philosophy.html",
    "revision": "dc1863af0f102b83458581b6fa844a24"
  },
  {
    "url": "philosophy/origin/index.html",
    "revision": "b150b145ca76fba7b3c23dbe79f632b5"
  },
  {
    "url": "philosophy/origin/materialism-and-immaterialism.html",
    "revision": "cb8d23ffde72ace1a4f1f6524e2365fb"
  },
  {
    "url": "philosophy/origin/origin-of-philosophy.html",
    "revision": "9f1129e4cbafa9f60549b42c29c492b7"
  },
  {
    "url": "philosophy/origin/Socrates.html",
    "revision": "569561205f445631d30f55a03ab69fcd"
  },
  {
    "url": "philosophy/rationalism&empiricism/Aristotle.html",
    "revision": "3fb4696ec79b576e729b4cfde268b34e"
  },
  {
    "url": "philosophy/rationalism&empiricism/index.html",
    "revision": "047c7c0d34d66d90aa07f58afe66074a"
  },
  {
    "url": "tag/index.html",
    "revision": "47a59cd65b7614ee9c2686de9d40588e"
  },
  {
    "url": "time.jpg",
    "revision": "217a6e2c0d56f4b97415f4a2bf79f92f"
  },
  {
    "url": "timeline/index.html",
    "revision": "08fa2c3a710395c2630dc8cf08b03b4a"
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
