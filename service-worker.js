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
    "url": "assets/js/10.1abbd2af.js",
    "revision": "8420a9479dd41562f10a90fcc90b8ae8"
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
    "url": "assets/js/15.72e78ad9.js",
    "revision": "35e70d66d5565f4c42f252788eb075df"
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
    "url": "assets/js/20.eab18825.js",
    "revision": "0c7483ec59c6c4d608b0affd786538a0"
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
    "url": "assets/js/25.6e261853.js",
    "revision": "f0aa48adf4dfa0edd98ae2ec63cd092c"
  },
  {
    "url": "assets/js/26.a16e2033.js",
    "revision": "cea87dc8025a6e28b52f6347be6e1412"
  },
  {
    "url": "assets/js/27.9fc08b3c.js",
    "revision": "9f0ec33a7697865ee44337041b3f77df"
  },
  {
    "url": "assets/js/28.5ce1ec9c.js",
    "revision": "a64da02ab5d0b4efb2f85ae72dc839f1"
  },
  {
    "url": "assets/js/29.1f2ea24d.js",
    "revision": "57cc35470e85de464ccd1f1340f033f2"
  },
  {
    "url": "assets/js/3.a60118a2.js",
    "revision": "9781ae3db35e6c4f663b52146bcdf1ba"
  },
  {
    "url": "assets/js/30.1c6b0fa1.js",
    "revision": "2a47bae64fd8d5e2e2a0316086d86e0d"
  },
  {
    "url": "assets/js/31.f14da542.js",
    "revision": "37302423bcf0a7038abc3f489019a6a9"
  },
  {
    "url": "assets/js/32.385efd6f.js",
    "revision": "9ceb4ca534c3cf8a30c55fbbd860d58b"
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
    "url": "assets/js/app.723fb444.js",
    "revision": "030eb2fca97e9a88fe0fbf0af3c69f20"
  },
  {
    "url": "categories/index.html",
    "revision": "ed37c82bbbc41732dc92772fb92303cf"
  },
  {
    "url": "demo.html",
    "revision": "f90b381f2e94ca51edbfb7fea04fb141"
  },
  {
    "url": "index.html",
    "revision": "59d7737e5dc1b9f8688d71b70508fd56"
  },
  {
    "url": "philosophy/man&gad/index.html",
    "revision": "f721e5ddce73269bb09c49ff8f7c1483"
  },
  {
    "url": "philosophy/man&gad/patristic-philosophy.html",
    "revision": "cdf7d726701101cd0fef804800718c14"
  },
  {
    "url": "philosophy/man&gad/philosophy-come-back.html",
    "revision": "9c0f6628163ca016868cfaa98398d981"
  },
  {
    "url": "philosophy/man&gad/scholasticism.html",
    "revision": "a6fb50dd0d24b10fcd1955c9fb501421"
  },
  {
    "url": "philosophy/origin/atomism&sophists.html",
    "revision": "6944c34598b7eb8e73aa68a3248e5ed6"
  },
  {
    "url": "philosophy/origin/history-of-philosophy.html",
    "revision": "728540bb8335415fb7dfcd645e69888e"
  },
  {
    "url": "philosophy/origin/index.html",
    "revision": "18bd6641d260d2c67809828f6451f2a2"
  },
  {
    "url": "philosophy/origin/materialism-and-immaterialism.html",
    "revision": "c0feae28c5a0b18483abb6e6a46ce450"
  },
  {
    "url": "philosophy/origin/origin-of-philosophy.html",
    "revision": "beda317422669ef9759c4be380d4c155"
  },
  {
    "url": "philosophy/origin/Socrates.html",
    "revision": "a444540e3b04750b8ffd463b5623df20"
  },
  {
    "url": "philosophy/rationalism&empiricism/Aristotle.html",
    "revision": "890c5ad1757df5e9ade0d7337c4c7bb0"
  },
  {
    "url": "philosophy/rationalism&empiricism/index.html",
    "revision": "eba6ccd2e5a53001c687c564adb7c4b1"
  },
  {
    "url": "philosophy/reason/index.html",
    "revision": "8ea754907ac8b032a2bd6b0bff36bc45"
  },
  {
    "url": "philosophy/self-settle/end-of-Greek.html",
    "revision": "4455f62b19d096c8976553a1e03b8a18"
  },
  {
    "url": "philosophy/self-settle/hedonism.html",
    "revision": "9699439022ab9fe7c8494e22e8d6e44b"
  },
  {
    "url": "philosophy/self-settle/index.html",
    "revision": "4c51fbcede87bee63dcae3282a7daf6d"
  },
  {
    "url": "philosophy/self-settle/scepticism.html",
    "revision": "601cef7edb600e98cf806c7828a8e1fc"
  },
  {
    "url": "philosophy/self-settle/stoa.html",
    "revision": "9de316310b144af4b8108c37436eafab"
  },
  {
    "url": "tag/index.html",
    "revision": "265741a6774ad8e37e6fb39636b42dfa"
  },
  {
    "url": "time.jpg",
    "revision": "217a6e2c0d56f4b97415f4a2bf79f92f"
  },
  {
    "url": "timeline/index.html",
    "revision": "227a683bcae012945a5a443012498c71"
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
