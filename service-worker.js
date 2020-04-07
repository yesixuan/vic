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
    "url": "assets/js/11.e9582092.js",
    "revision": "54a735d499bdd40973f8cf06bc523740"
  },
  {
    "url": "assets/js/12.ce510d6e.js",
    "revision": "db816727e1eb0bf9680f912fd3d7980f"
  },
  {
    "url": "assets/js/13.9f74cdb2.js",
    "revision": "e38f99a4ed0a130bce99ad58e5b9a362"
  },
  {
    "url": "assets/js/14.fdb84544.js",
    "revision": "e01ea6291d2f694c3119d7081fd6161b"
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
    "url": "assets/js/26.27446b82.js",
    "revision": "0ef8f1fc31dfec6e74a9a72b265972f6"
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
    "url": "assets/js/app.9a55d650.js",
    "revision": "8f334fae9c717cd03d700bbffd191ce4"
  },
  {
    "url": "categories/index.html",
    "revision": "9a0e076ed631639cebbe7056f4761249"
  },
  {
    "url": "demo.html",
    "revision": "68047fb43398d1a0705057881e57e581"
  },
  {
    "url": "index.html",
    "revision": "8649848634e8db84e3dc5f48f3cd78cf"
  },
  {
    "url": "philosophy/man&gad/index.html",
    "revision": "8579d9e1b3aced44bccc8582d6668baa"
  },
  {
    "url": "philosophy/man&gad/patristic-philosophy.html",
    "revision": "8fc1b446ff3ab562e544a90c2503c1ca"
  },
  {
    "url": "philosophy/man&gad/philosophy-come-back.html",
    "revision": "885d1e5667bdb718c0ed1b91fc777800"
  },
  {
    "url": "philosophy/man&gad/scholasticism.html",
    "revision": "96a1161d5d41ee1c223ba1398d7247c5"
  },
  {
    "url": "philosophy/origin/atomism&sophists.html",
    "revision": "902053f6bebf7cafabf6f20c1e543294"
  },
  {
    "url": "philosophy/origin/history-of-philosophy.html",
    "revision": "a41dc9522a53b5135b2b91d579fd9e1e"
  },
  {
    "url": "philosophy/origin/index.html",
    "revision": "05d986ebc1fbba8fea6c40bc5420d7b7"
  },
  {
    "url": "philosophy/origin/materialism-and-immaterialism.html",
    "revision": "3df67b90b153f488d1b60c26ec213e7c"
  },
  {
    "url": "philosophy/origin/origin-of-philosophy.html",
    "revision": "8c4eecb17906dd70dbcb9ce0ffb893fc"
  },
  {
    "url": "philosophy/origin/Socrates.html",
    "revision": "ef800a1b39e74824a55ced1b1f984ee9"
  },
  {
    "url": "philosophy/rationalism&empiricism/Aristotle.html",
    "revision": "8bc844f971bddf35f6d11897094dbd94"
  },
  {
    "url": "philosophy/rationalism&empiricism/index.html",
    "revision": "95bd2d187882de0e27a584b598bfc026"
  },
  {
    "url": "philosophy/reason/index.html",
    "revision": "af4552097f692055b9b1a08e6bffdde1"
  },
  {
    "url": "philosophy/reason/philo-sophia.html",
    "revision": "5330b8220b0464fbe036d8432345ff95"
  },
  {
    "url": "philosophy/reason/reformation.html",
    "revision": "294f0fc1e968b20ea331cf69df0d5103"
  },
  {
    "url": "philosophy/self-settle/end-of-Greek.html",
    "revision": "02a49b8d28861cfba07962d9e494e263"
  },
  {
    "url": "philosophy/self-settle/hedonism.html",
    "revision": "2772e8cfd30c1b590d62276489a26294"
  },
  {
    "url": "philosophy/self-settle/index.html",
    "revision": "0d3587509b72f15583940f8d39514ee7"
  },
  {
    "url": "philosophy/self-settle/scepticism.html",
    "revision": "080ef112e504f72e6df89e4fcbfe2066"
  },
  {
    "url": "philosophy/self-settle/stoa.html",
    "revision": "731dc2c02e5f3dda9736dbb5e6eebda7"
  },
  {
    "url": "tag/index.html",
    "revision": "175b47b88f5f73ad768ea7fbddf1ae2f"
  },
  {
    "url": "time.jpg",
    "revision": "217a6e2c0d56f4b97415f4a2bf79f92f"
  },
  {
    "url": "timeline/index.html",
    "revision": "469213f233a85fc5c8737972f99e115a"
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
