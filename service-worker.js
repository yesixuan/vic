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
    "url": "assets/js/25.6206fddf.js",
    "revision": "ccd445170e367401db77fca9c5a37c6b"
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
    "url": "assets/js/app.dc9b3af9.js",
    "revision": "8ac92795e9c9faf84ba10c0a775cfa66"
  },
  {
    "url": "categories/index.html",
    "revision": "42389d0989c823b0c338c9c02a6168a7"
  },
  {
    "url": "demo.html",
    "revision": "825ceee1ccaeed51082b857f933bf5b6"
  },
  {
    "url": "index.html",
    "revision": "ec0783e35030d09c9b37c300b78cadae"
  },
  {
    "url": "philosophy/man&gad/index.html",
    "revision": "fe1011dd5874558a6166aecafff3bd68"
  },
  {
    "url": "philosophy/man&gad/patristic-philosophy.html",
    "revision": "818a98d280e94dfd8270959d1cf1cd80"
  },
  {
    "url": "philosophy/man&gad/philosophy-come-back.html",
    "revision": "cce88c696b67a6d5c58fbc03d3b5c5ac"
  },
  {
    "url": "philosophy/man&gad/scholasticism.html",
    "revision": "9ba8857ecf594c612f8d6598f08d511f"
  },
  {
    "url": "philosophy/origin/atomism&sophists.html",
    "revision": "c4e5c8faeb5ffdfe011e9d7256625683"
  },
  {
    "url": "philosophy/origin/history-of-philosophy.html",
    "revision": "aa79a23191f5a4320b4368989844cb36"
  },
  {
    "url": "philosophy/origin/index.html",
    "revision": "a1e9c0845d5b30a3c1778a87832e5c14"
  },
  {
    "url": "philosophy/origin/materialism-and-immaterialism.html",
    "revision": "9e4332a2c33301942e185efabd843893"
  },
  {
    "url": "philosophy/origin/origin-of-philosophy.html",
    "revision": "f237d57b6b5e293fe694749d26a4be47"
  },
  {
    "url": "philosophy/origin/Socrates.html",
    "revision": "46e5bcd8c400563ef44fce471f276200"
  },
  {
    "url": "philosophy/rationalism&empiricism/Aristotle.html",
    "revision": "894195b10ddabf19635659c630dd7f86"
  },
  {
    "url": "philosophy/rationalism&empiricism/index.html",
    "revision": "317161729b44038b3fe959c3ebc97653"
  },
  {
    "url": "philosophy/reason/index.html",
    "revision": "bc2f393d75cbb4e8349a669187de7edf"
  },
  {
    "url": "philosophy/self-settle/end-of-Greek.html",
    "revision": "e60ef004d608abbe32c7b31ebe0612e2"
  },
  {
    "url": "philosophy/self-settle/hedonism.html",
    "revision": "a82e348a4214257332c465fa4a61d880"
  },
  {
    "url": "philosophy/self-settle/index.html",
    "revision": "c78ba5c9a934efabd2939975d021ac8f"
  },
  {
    "url": "philosophy/self-settle/scepticism.html",
    "revision": "cfd5eca0bcd4bd3be85f3162b3f7a03a"
  },
  {
    "url": "philosophy/self-settle/stoa.html",
    "revision": "5e0343baa7d1c247cfcccf71bca27729"
  },
  {
    "url": "tag/index.html",
    "revision": "44fadfe79df7682b302993aa2556690e"
  },
  {
    "url": "time.jpg",
    "revision": "217a6e2c0d56f4b97415f4a2bf79f92f"
  },
  {
    "url": "timeline/index.html",
    "revision": "1ca81a142964b5ca9e154e750aac5087"
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
