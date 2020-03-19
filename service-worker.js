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
    "url": "assets/js/19.72225ba3.js",
    "revision": "0370eddbfcbac66474d0b7832fa6eb29"
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
    "url": "assets/js/app.e25beabe.js",
    "revision": "9152964ba848b245471da4de79438c6e"
  },
  {
    "url": "categories/index.html",
    "revision": "1cecaa39172c2ce1876135bba8f78c43"
  },
  {
    "url": "demo.html",
    "revision": "54d5a198e58bf61f15ad39e7ae6ca0a4"
  },
  {
    "url": "index.html",
    "revision": "a2d9c18f4095f315c33f9d7f0af74280"
  },
  {
    "url": "philosophy/origin/atomism&sophists.html",
    "revision": "425aa6fd4af9acfbc7b6c082bc2a6d08"
  },
  {
    "url": "philosophy/origin/history-of-philosophy.html",
    "revision": "977c3cb484f6bfe20860005fca0119d2"
  },
  {
    "url": "philosophy/origin/index.html",
    "revision": "fe939b144451a469e1ced96bd40d247f"
  },
  {
    "url": "philosophy/origin/materialism-and-immaterialism.html",
    "revision": "b5195a999efda867a332aaa59b5a00c4"
  },
  {
    "url": "philosophy/origin/origin-of-philosophy.html",
    "revision": "a40f4c410983aae1380fabc4cc9da091"
  },
  {
    "url": "philosophy/origin/Socrates.html",
    "revision": "7e3b525c78ca866c6176660c719222b5"
  },
  {
    "url": "philosophy/rationalism&empiricism/Plato.html",
    "revision": "573acc5afef9259375068481b2bb1685"
  },
  {
    "url": "tag/index.html",
    "revision": "02f729b9d77d556c03e92f05bd73a11c"
  },
  {
    "url": "time.jpg",
    "revision": "217a6e2c0d56f4b97415f4a2bf79f92f"
  },
  {
    "url": "timeline/index.html",
    "revision": "01cd6b49f01831e186453ebdf0cbd141"
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
