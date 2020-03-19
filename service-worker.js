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
    "url": "assets/js/1.e7867169.js",
    "revision": "144bc8d4a17d12c53e2b95fe54c3d4b5"
  },
  {
    "url": "assets/js/10.4a636436.js",
    "revision": "18d59c82bd4c6c303179f415db83bcf6"
  },
  {
    "url": "assets/js/11.4427b62e.js",
    "revision": "8f3d2dcdf56aef723cfc21913a9c2e65"
  },
  {
    "url": "assets/js/12.cdb13b34.js",
    "revision": "e30c521cd86ff62dd38baa3420689f73"
  },
  {
    "url": "assets/js/13.ef626b8d.js",
    "revision": "98617458ae3daeeea347efb1928f97fd"
  },
  {
    "url": "assets/js/14.8b0b2677.js",
    "revision": "8619b0f7009e2b689e2164e039e6a622"
  },
  {
    "url": "assets/js/15.06adf62e.js",
    "revision": "55ca7e143b41194e4f9f466441701bc9"
  },
  {
    "url": "assets/js/16.3b8e5ff2.js",
    "revision": "b7da1c86f0e16953cf4672d981bacf87"
  },
  {
    "url": "assets/js/17.21c3ef6a.js",
    "revision": "2ad7a48394499d59a1a138ae497885fe"
  },
  {
    "url": "assets/js/18.dbe4f8c4.js",
    "revision": "7d1201d3416520bec9bcecbd395bbb4f"
  },
  {
    "url": "assets/js/19.82f730fc.js",
    "revision": "0b7ced19f75d36a14125b899c8c8d281"
  },
  {
    "url": "assets/js/20.efac4761.js",
    "revision": "4d7f48e638d289755be98a6d5af1e07b"
  },
  {
    "url": "assets/js/21.bd8a3523.js",
    "revision": "49b53a650d2811054a53909787ff3bf9"
  },
  {
    "url": "assets/js/3.b83cc918.js",
    "revision": "52823c891adb0afa0c6e81c81e9ed201"
  },
  {
    "url": "assets/js/4.185f328e.js",
    "revision": "fcd66258ab56a23f900eefedd9b41c68"
  },
  {
    "url": "assets/js/5.4ead1619.js",
    "revision": "85d4eff72201538d04f6e5db743fca2e"
  },
  {
    "url": "assets/js/6.87545241.js",
    "revision": "474f6063d3325b5922f260c1901ae58f"
  },
  {
    "url": "assets/js/7.a2069f33.js",
    "revision": "b78f16f5d6fc2137a9529087e82a475a"
  },
  {
    "url": "assets/js/8.6f559194.js",
    "revision": "2c55d6de3e54c77376bbfd875b11ea1c"
  },
  {
    "url": "assets/js/9.0a38c6d6.js",
    "revision": "f5a1573b6960526d6f08b69055ab86c4"
  },
  {
    "url": "assets/js/app.91f51894.js",
    "revision": "0d154c7d2f665c21ded6461cb747bd50"
  },
  {
    "url": "categories/index.html",
    "revision": "1937578293007ef8c972c72703d0dfa2"
  },
  {
    "url": "demo.html",
    "revision": "61c54e39c1e6dd577dd246245352c6c7"
  },
  {
    "url": "index.html",
    "revision": "7c2de6367d2f5f2eeb266a742e26e928"
  },
  {
    "url": "philosophy/origin/atomism&sophists.html",
    "revision": "9ba5e99eeb4bef7eb904740a50ea3153"
  },
  {
    "url": "philosophy/origin/history-of-philosophy.html",
    "revision": "9851d3b1a81addf87267978590162680"
  },
  {
    "url": "philosophy/origin/index.html",
    "revision": "7997858cf1a298bcf2ff16b82db4cd90"
  },
  {
    "url": "philosophy/origin/materialism-and-immaterialism.html",
    "revision": "82819ce2b53c54b3452ffa25e71e7679"
  },
  {
    "url": "philosophy/origin/origin-of-philosophy.html",
    "revision": "3e4007daa3cbafa390394da3a47bbaa7"
  },
  {
    "url": "philosophy/origin/Socrates.html",
    "revision": "db29e2b293b9f3a41ef5a50a1415c2d9"
  },
  {
    "url": "philosophy/rationalism&empiricism/Plato.html",
    "revision": "50231be41bff28101ea9648c2af9543a"
  },
  {
    "url": "tag/index.html",
    "revision": "cee3cba6064b248e493cc418619e2a5a"
  },
  {
    "url": "time.jpg",
    "revision": "217a6e2c0d56f4b97415f4a2bf79f92f"
  },
  {
    "url": "timeline/index.html",
    "revision": "b166d0f910e6d003e14b7a43f28525be"
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
