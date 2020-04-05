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
    "url": "assets/css/0.styles.870a35d2.css",
    "revision": "6e1c5dd5388cab34e4f85eea3559853d"
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
    "url": "assets/js/1.46f07dd0.js",
    "revision": "6a751d7afa025430a8589524db2b3953"
  },
  {
    "url": "assets/js/10.9904310c.js",
    "revision": "67497283a05f9cf73b34093d973d3a7b"
  },
  {
    "url": "assets/js/11.c5c30219.js",
    "revision": "a99e4a6de80bbe6b95e77235587392de"
  },
  {
    "url": "assets/js/12.55789b69.js",
    "revision": "f20ce40f0e06ebe9f8bcbec624e5508e"
  },
  {
    "url": "assets/js/13.70731561.js",
    "revision": "e5c8af3833076e5fb05c7a813730ff0c"
  },
  {
    "url": "assets/js/14.141b272c.js",
    "revision": "dd9857fac18d167a05e2a11089fdba72"
  },
  {
    "url": "assets/js/15.2f0df6ab.js",
    "revision": "e4583c26258faf6a19a5fdfc7a23e781"
  },
  {
    "url": "assets/js/16.d5def09c.js",
    "revision": "4ed4316aa1fb1813e2483515071d9f66"
  },
  {
    "url": "assets/js/17.b8fb9523.js",
    "revision": "7d5081f4f614b40614c27efb898b0540"
  },
  {
    "url": "assets/js/18.66437e86.js",
    "revision": "1178c7e6c18f9351ce85d47781f84465"
  },
  {
    "url": "assets/js/19.142ac48b.js",
    "revision": "56c85522ba323bb37ed8e4b63faf3fad"
  },
  {
    "url": "assets/js/20.eed7e6a4.js",
    "revision": "41adb86bad61ae3bd0b389ab026b7bc3"
  },
  {
    "url": "assets/js/21.3c103de5.js",
    "revision": "0ce14f3a93007e0d7c58610ef28fea19"
  },
  {
    "url": "assets/js/22.6878d357.js",
    "revision": "f6c1309ffe0b428f40c94f4dc0e4fa7a"
  },
  {
    "url": "assets/js/23.5ffe18ce.js",
    "revision": "7cf00332857c43ad1aadf0bf9783cdbf"
  },
  {
    "url": "assets/js/24.21fc7aa9.js",
    "revision": "92c210b731a9f51f02f87b1483cff2ca"
  },
  {
    "url": "assets/js/25.075608f6.js",
    "revision": "e64621dfcf9c4efd10e1d1ea135f0b80"
  },
  {
    "url": "assets/js/26.a27aa2c2.js",
    "revision": "157bf17db91f7a2aa54b3d9ccc867d55"
  },
  {
    "url": "assets/js/27.e4e75b20.js",
    "revision": "26196ccfcd32440bdcda4eb809586088"
  },
  {
    "url": "assets/js/28.fbfe3a04.js",
    "revision": "d16ef6a81350594b782f27150b024f17"
  },
  {
    "url": "assets/js/29.bd55b2e0.js",
    "revision": "c80577e5aa8e4827cc320da8ea5403bf"
  },
  {
    "url": "assets/js/3.a60118a2.js",
    "revision": "9781ae3db35e6c4f663b52146bcdf1ba"
  },
  {
    "url": "assets/js/30.5792f7f5.js",
    "revision": "0ca899ef84a8f5e39df1e01500847d40"
  },
  {
    "url": "assets/js/31.842039c0.js",
    "revision": "3abfc7f0184998dc00e486f2a9f6481b"
  },
  {
    "url": "assets/js/4.83606b17.js",
    "revision": "1008a93fd20d9e2dd083307eab65d5db"
  },
  {
    "url": "assets/js/5.fd5fa3c8.js",
    "revision": "e8d0e0bb8045ab693f1e860bf9210db1"
  },
  {
    "url": "assets/js/6.360a7c63.js",
    "revision": "17d759b84b7dd48ced870319ea0cc357"
  },
  {
    "url": "assets/js/7.656dfcf4.js",
    "revision": "1098c5e4080461b7a0e7dcebfbac1419"
  },
  {
    "url": "assets/js/8.50fcce05.js",
    "revision": "5763981e162b8833d644829e8a4403c5"
  },
  {
    "url": "assets/js/9.13525f48.js",
    "revision": "771a8ac27cc5d7818a1696889ac41e19"
  },
  {
    "url": "assets/js/app.5f0aae87.js",
    "revision": "334b18ba17f2211f3ac1521620b5404a"
  },
  {
    "url": "categories/index.html",
    "revision": "571f798aa3c6796a84ba635650f9981a"
  },
  {
    "url": "demo.html",
    "revision": "7befe377a25aaa65e44d2863aa8585e4"
  },
  {
    "url": "index.html",
    "revision": "b6809412335d3cac445ef05d812bcd22"
  },
  {
    "url": "philosophy/man&gad/index.html",
    "revision": "a9cdb0a981d30c7fafa8df0b379a3556"
  },
  {
    "url": "philosophy/man&gad/patristic-philosophy.html",
    "revision": "512c9f58cddf09ac46d7ef93f9e6a167"
  },
  {
    "url": "philosophy/man&gad/philosophy-come-back.html",
    "revision": "6dc33f335a5105ab8572905d5091136e"
  },
  {
    "url": "philosophy/man&gad/scholasticism.html",
    "revision": "0abee0ec5416a190a7ceb588d4bceaeb"
  },
  {
    "url": "philosophy/origin/atomism&sophists.html",
    "revision": "24624959408daefece020b063b26f559"
  },
  {
    "url": "philosophy/origin/history-of-philosophy.html",
    "revision": "2bc10faabbaf45b20c7abe6b518c6de3"
  },
  {
    "url": "philosophy/origin/index.html",
    "revision": "2e56564687b3fcb991cdaa8d8a0d08f6"
  },
  {
    "url": "philosophy/origin/materialism-and-immaterialism.html",
    "revision": "0ff512355b6d56198af5742fe5548509"
  },
  {
    "url": "philosophy/origin/origin-of-philosophy.html",
    "revision": "b7d62d9e73f1933ef7d71f33b9245e8f"
  },
  {
    "url": "philosophy/origin/Socrates.html",
    "revision": "28b9e2046cda989b4bffd8a9c3ab697e"
  },
  {
    "url": "philosophy/rationalism&empiricism/Aristotle.html",
    "revision": "34620c6fbbada6a0f41bfe1222e2ee49"
  },
  {
    "url": "philosophy/rationalism&empiricism/index.html",
    "revision": "5a87a36e4626bfe4aead0a97b4a28f22"
  },
  {
    "url": "philosophy/self-settle/end-of-Greek.html",
    "revision": "bc76a520989451fcfea0f3b7c7414571"
  },
  {
    "url": "philosophy/self-settle/hedonism.html",
    "revision": "98cd883e845bb58e89bcb0714fe5053f"
  },
  {
    "url": "philosophy/self-settle/index.html",
    "revision": "9cc3d730a23b99d96cbd4d9efe19ffdf"
  },
  {
    "url": "philosophy/self-settle/scepticism.html",
    "revision": "a9391062a62199c4af918883f187fcf2"
  },
  {
    "url": "philosophy/self-settle/stoa.html",
    "revision": "2c0ee4446206fedc520297e4bc24c6ee"
  },
  {
    "url": "tag/index.html",
    "revision": "dc7c135f4be98b5db55d3b9bd9e71bf6"
  },
  {
    "url": "time.jpg",
    "revision": "217a6e2c0d56f4b97415f4a2bf79f92f"
  },
  {
    "url": "timeline/index.html",
    "revision": "6a5ebefbffa8a969e7ac086635e4098e"
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
