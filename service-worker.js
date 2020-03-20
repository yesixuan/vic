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
    "url": "assets/js/10.9e9245e7.js",
    "revision": "74c294c01ca676bcf9cd5d175a74486b"
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
    "url": "assets/js/19.56648bd7.js",
    "revision": "4705b0d1b9480c2b5280aa9d5d609756"
  },
  {
    "url": "assets/js/20.40a3b871.js",
    "revision": "2d7ed2fdd585f5330f7843edb377b429"
  },
  {
    "url": "assets/js/21.2ab6f78f.js",
    "revision": "9d5d6101ea0dfadb9505210ce6e0a563"
  },
  {
    "url": "assets/js/22.a31bf711.js",
    "revision": "5951bf6664c2351bf1885a529f76d22d"
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
    "url": "assets/js/app.5d23ffe7.js",
    "revision": "fda55ba1cee01b394634e582e011c7c2"
  },
  {
    "url": "categories/index.html",
    "revision": "c892674ea5465a3bb789cfaf398061a2"
  },
  {
    "url": "demo.html",
    "revision": "7252d55913f2c081939f5a4954f5cf10"
  },
  {
    "url": "index.html",
    "revision": "ef59f8abe33713ccd92e4ef345fe9fed"
  },
  {
    "url": "philosophy/origin/atomism&sophists.html",
    "revision": "2a588652fb469d53360d5cb6b7d35b54"
  },
  {
    "url": "philosophy/origin/history-of-philosophy.html",
    "revision": "9a6a091c72c0adde72e3bad69ff2312f"
  },
  {
    "url": "philosophy/origin/index.html",
    "revision": "00be665934866fd509e300c601c1c6f3"
  },
  {
    "url": "philosophy/origin/materialism-and-immaterialism.html",
    "revision": "f6373d8c9830ad4be6e8da01b19960c9"
  },
  {
    "url": "philosophy/origin/origin-of-philosophy.html",
    "revision": "90f2bd62e8fe135c57f0abf76e4cca08"
  },
  {
    "url": "philosophy/origin/Socrates.html",
    "revision": "9e9df5145eada6363f4a55c8d792b6eb"
  },
  {
    "url": "philosophy/rationalism&empiricism/Aristotle.html",
    "revision": "9d3c69bfa1eaf815f6d647fdbe8c6dfa"
  },
  {
    "url": "philosophy/rationalism&empiricism/Plato.html",
    "revision": "49da14d1bae0e6933d67cb8dde528812"
  },
  {
    "url": "tag/index.html",
    "revision": "92cab509294c2f5c91c632ac457893bc"
  },
  {
    "url": "time.jpg",
    "revision": "217a6e2c0d56f4b97415f4a2bf79f92f"
  },
  {
    "url": "timeline/index.html",
    "revision": "1b74d567fde295868bb48ed11fdb14a5"
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
