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
    "url": "assets/css/0.styles.a745d5ac.css",
    "revision": "4b1f1206660c2516caddb5f0ffc907a9"
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
    "url": "assets/js/1.637ab70c.js",
    "revision": "fea10cef5763de4308259e8f6469d948"
  },
  {
    "url": "assets/js/10.a488d362.js",
    "revision": "dd1031adffcc539d135e7934b3e27d18"
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
    "url": "assets/js/25.d16366e7.js",
    "revision": "944197ca2da897195316fa1f5494db52"
  },
  {
    "url": "assets/js/26.a564925f.js",
    "revision": "9aed6f7b3c2af8cd2dfc865b9757586b"
  },
  {
    "url": "assets/js/27.6285aeba.js",
    "revision": "13a559a32919303e7107e59f9df759aa"
  },
  {
    "url": "assets/js/28.72579058.js",
    "revision": "bde2f6971af1026a8dcf653d15846b1f"
  },
  {
    "url": "assets/js/29.5bd9c8be.js",
    "revision": "915e9909cd9cb4d989dc4dbb6b7c5b99"
  },
  {
    "url": "assets/js/3.6c9c5b3e.js",
    "revision": "ae98b237df43eec6adc125ed812e52fa"
  },
  {
    "url": "assets/js/30.99784543.js",
    "revision": "64067e97d75fa2d30bc950d6705cc0ef"
  },
  {
    "url": "assets/js/31.e0efa253.js",
    "revision": "853952381efb2afbb6a2ff53c77e79d6"
  },
  {
    "url": "assets/js/32.e27e5936.js",
    "revision": "b50404469548ba10903b49eb3f10ccba"
  },
  {
    "url": "assets/js/33.7b0e6090.js",
    "revision": "28630cf26e347bb32cd7481b1e2b4d49"
  },
  {
    "url": "assets/js/34.1881a8b4.js",
    "revision": "8a18c3b7c009306b12342127e5b95fe9"
  },
  {
    "url": "assets/js/4.4d9e372d.js",
    "revision": "cd67e59947806021442e3e3e44d8591a"
  },
  {
    "url": "assets/js/5.fc8ab074.js",
    "revision": "484ea1b7799a65ca6ba3ab5a34026c4e"
  },
  {
    "url": "assets/js/6.7a40cf7d.js",
    "revision": "3fd10a55b9946c82571a3327263f3a7f"
  },
  {
    "url": "assets/js/7.5f4426a3.js",
    "revision": "6428682ef0429a9f3a9d0e3c04a9ab5c"
  },
  {
    "url": "assets/js/8.dabe52c6.js",
    "revision": "36e9fae241891a8b63f0b585568e16d9"
  },
  {
    "url": "assets/js/9.13525f48.js",
    "revision": "771a8ac27cc5d7818a1696889ac41e19"
  },
  {
    "url": "assets/js/app.d9d95f56.js",
    "revision": "7582fcbbd9a9d58e15ac1a2a434233a6"
  },
  {
    "url": "categories/index.html",
    "revision": "e665c124d2b017b39046be1518290f77"
  },
  {
    "url": "demo.html",
    "revision": "dd5f8fbe31aece315b2dc5b6bb99f7de"
  },
  {
    "url": "index.html",
    "revision": "dc392c9fa615b42d63151b292d7bca3f"
  },
  {
    "url": "philosophy/man&gad/index.html",
    "revision": "37ddb981d9120e6f34a81b54222ac4b9"
  },
  {
    "url": "philosophy/man&gad/patristic-philosophy.html",
    "revision": "f11af3f96fd89994f2d35a8896df784d"
  },
  {
    "url": "philosophy/man&gad/philosophy-come-back.html",
    "revision": "863be1a523a80d525517b1c3964a89b9"
  },
  {
    "url": "philosophy/man&gad/scholasticism.html",
    "revision": "3ac7dfe841aeefc5367527a5ac5480d4"
  },
  {
    "url": "philosophy/origin/atomism&sophists.html",
    "revision": "705013d92fe015569c7be8c37ebc914c"
  },
  {
    "url": "philosophy/origin/history-of-philosophy.html",
    "revision": "2d54be0dbab177fdf214ecce15579fcd"
  },
  {
    "url": "philosophy/origin/index.html",
    "revision": "268a49b9151d50ff75b7e3f9fa92997c"
  },
  {
    "url": "philosophy/origin/materialism-and-immaterialism.html",
    "revision": "eed282ef623bce449a430a4eced82f89"
  },
  {
    "url": "philosophy/origin/origin-of-philosophy.html",
    "revision": "bd0428a871ea6200c4a8910e927fe4dd"
  },
  {
    "url": "philosophy/origin/Socrates.html",
    "revision": "4cb13874eeab703e3b71050d837854a2"
  },
  {
    "url": "philosophy/rationalism&empiricism/Aristotle.html",
    "revision": "a9446876240be299860e4ad3c5e66bec"
  },
  {
    "url": "philosophy/rationalism&empiricism/index.html",
    "revision": "199afccb01c204c8010c09b95f44ff2b"
  },
  {
    "url": "philosophy/reason/index.html",
    "revision": "db94e395cabbfb0791b0a603b540ce8c"
  },
  {
    "url": "philosophy/reason/philo-sophia.html",
    "revision": "7569d6ac96ce4cc9c3472f6d8dd95d58"
  },
  {
    "url": "philosophy/reason/reformation.html",
    "revision": "fa7366e7d0c0283250595f2a70817233"
  },
  {
    "url": "philosophy/self-settle/end-of-Greek.html",
    "revision": "9eb7ece686d8fae94a6c6bca24755d94"
  },
  {
    "url": "philosophy/self-settle/hedonism.html",
    "revision": "777071a96946bf95e348b90ec45daf69"
  },
  {
    "url": "philosophy/self-settle/index.html",
    "revision": "e29026be3266e76658992bcd32235ce4"
  },
  {
    "url": "philosophy/self-settle/scepticism.html",
    "revision": "ee5a63aa3c91b705acf324b68fa7633d"
  },
  {
    "url": "philosophy/self-settle/stoa.html",
    "revision": "72249d8540b140bcee8e7bfc76fa7821"
  },
  {
    "url": "tag/index.html",
    "revision": "a5b1ebbea7303f2b05b155e5aba6b0c2"
  },
  {
    "url": "time.jpg",
    "revision": "217a6e2c0d56f4b97415f4a2bf79f92f"
  },
  {
    "url": "timeline/index.html",
    "revision": "20f19ecf63a5786eb2f75584f2f87f02"
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
