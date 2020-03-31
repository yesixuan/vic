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
    "url": "assets/css/0.styles.82ccce66.css",
    "revision": "8404c188b1f6fd2447066130690aee57"
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
    "url": "assets/js/1.620551ba.js",
    "revision": "7e1a9cf841162081b9490312345e1dec"
  },
  {
    "url": "assets/js/10.1a142299.js",
    "revision": "6f48f91c743a22b55f37bfd6416232dd"
  },
  {
    "url": "assets/js/11.c731f144.js",
    "revision": "ac663f2f8ac3ce4526021b8418b54c8f"
  },
  {
    "url": "assets/js/12.9932cb8e.js",
    "revision": "e398aaa222a484d671a00531be74d169"
  },
  {
    "url": "assets/js/13.4e5d151c.js",
    "revision": "842edfb74b126baa99994910642f6a1a"
  },
  {
    "url": "assets/js/14.6b5c70ac.js",
    "revision": "0ced713124e09bff1c842640297dbb72"
  },
  {
    "url": "assets/js/15.4d7b615f.js",
    "revision": "0c4bcdb7b4a6623ad532e31483c9044d"
  },
  {
    "url": "assets/js/16.ba2a9911.js",
    "revision": "11b5596e097f87048e6afdd0b3c510f2"
  },
  {
    "url": "assets/js/17.23335585.js",
    "revision": "876176b49163c802a13ae2b124056309"
  },
  {
    "url": "assets/js/18.0c1cfd39.js",
    "revision": "e3dfd466078f1440652d781527131f2a"
  },
  {
    "url": "assets/js/19.6c95c689.js",
    "revision": "eb4ce3131284324acea31f3f4b1709a3"
  },
  {
    "url": "assets/js/20.12423c8e.js",
    "revision": "89603237702ba258820f58dbeec1b2ce"
  },
  {
    "url": "assets/js/21.10060717.js",
    "revision": "003c9767b21aa93f30086fd88440a104"
  },
  {
    "url": "assets/js/22.bff27548.js",
    "revision": "717d2fe73532a6a5bc118e48cd8398cf"
  },
  {
    "url": "assets/js/23.8c0edbfc.js",
    "revision": "9a9fed5df11d8682c4b49c796385f1d8"
  },
  {
    "url": "assets/js/24.430ac891.js",
    "revision": "6b4e3e18ba155443f9392bc38c6e02ca"
  },
  {
    "url": "assets/js/25.bdefda3f.js",
    "revision": "e4e87644d8ffe39cb89b961ba054306d"
  },
  {
    "url": "assets/js/26.00f86212.js",
    "revision": "e81a6a2fad3ce378631203bc7a54b340"
  },
  {
    "url": "assets/js/27.b9012437.js",
    "revision": "5fc2b789362e9f124d034d74693fd283"
  },
  {
    "url": "assets/js/28.f7698dc7.js",
    "revision": "83b1747ffdbc8c56dbbe292cf9e1290f"
  },
  {
    "url": "assets/js/29.acf42f5a.js",
    "revision": "8ca43f6fb61a531015f23efdc6cfab48"
  },
  {
    "url": "assets/js/3.ed801ed2.js",
    "revision": "c5a2ccb8fb97748816a9f1f853154937"
  },
  {
    "url": "assets/js/4.c11fcd57.js",
    "revision": "d087ca6b3df5b0a460c5f01c309afbc8"
  },
  {
    "url": "assets/js/5.67ae0be8.js",
    "revision": "4c726911456edc5168945f6058730ebd"
  },
  {
    "url": "assets/js/6.b0534be9.js",
    "revision": "9cec99c77cb40ea7b103ce4c52f590de"
  },
  {
    "url": "assets/js/7.eb31859e.js",
    "revision": "0db340691c990fd756f8b5a51af560f5"
  },
  {
    "url": "assets/js/8.8e06d3b2.js",
    "revision": "3bb52c36f24ff2265558a0e1400e089c"
  },
  {
    "url": "assets/js/9.5fe50121.js",
    "revision": "159740ff31cf67af69df828184673773"
  },
  {
    "url": "assets/js/app.4aab9a3c.js",
    "revision": "15e2a4e804fac8d80ee0d86499e0e19e"
  },
  {
    "url": "categories/index.html",
    "revision": "08270bc627ac1482e2be1dc478b18112"
  },
  {
    "url": "demo.html",
    "revision": "4de87d1898b661b3fbeac43818c6e1e7"
  },
  {
    "url": "index.html",
    "revision": "16255cd955ce1989918a19865e9b65a1"
  },
  {
    "url": "philosophy/man&gad/index.html",
    "revision": "7bff4b5f8f070ab4193f57f10951475a"
  },
  {
    "url": "philosophy/man&gad/patristic-philosophy.html",
    "revision": "6624d218b4a439076729f2838fdcce6a"
  },
  {
    "url": "philosophy/origin/atomism&sophists.html",
    "revision": "6627064d437fd7b3ffc5511b9427a801"
  },
  {
    "url": "philosophy/origin/history-of-philosophy.html",
    "revision": "5355d399bd97367311b0c5a875a7e17b"
  },
  {
    "url": "philosophy/origin/index.html",
    "revision": "918036b74dc8985797dedb3329a8cb58"
  },
  {
    "url": "philosophy/origin/materialism-and-immaterialism.html",
    "revision": "4e5f683b1c07f71ee774d16c8f5ac03a"
  },
  {
    "url": "philosophy/origin/origin-of-philosophy.html",
    "revision": "9faacda66f63ca7b6c75544ce8d5a5e0"
  },
  {
    "url": "philosophy/origin/Socrates.html",
    "revision": "47a232e985dbfeece72c5ec5e86d322e"
  },
  {
    "url": "philosophy/rationalism&empiricism/Aristotle.html",
    "revision": "061c5e690d563c6488cd8821d50cdf60"
  },
  {
    "url": "philosophy/rationalism&empiricism/index.html",
    "revision": "0a11e0941b20b3c9fadd78225417b099"
  },
  {
    "url": "philosophy/self-settle/end-of-Greek.html",
    "revision": "de6e06a701a238c59258aac9625a2599"
  },
  {
    "url": "philosophy/self-settle/hedonism.html",
    "revision": "b24c0be4697e8501e3b106f8126f116f"
  },
  {
    "url": "philosophy/self-settle/index.html",
    "revision": "1dc45375a1ecd20c1501358c390728a8"
  },
  {
    "url": "philosophy/self-settle/scepticism.html",
    "revision": "ca90494ad4456d8515d18382ce414326"
  },
  {
    "url": "philosophy/self-settle/stoa.html",
    "revision": "10c0ad0ea30cf48394c1e8c2aaf73483"
  },
  {
    "url": "tag/index.html",
    "revision": "93ed5b069126dbf84b249d4aee8abc2f"
  },
  {
    "url": "time.jpg",
    "revision": "217a6e2c0d56f4b97415f4a2bf79f92f"
  },
  {
    "url": "timeline/index.html",
    "revision": "19c87bfc65d2bd9618bc04a4b2978b94"
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
