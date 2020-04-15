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
    "url": "404.html",
    "revision": "3cc70c6d3c561d162ca469765f99128b"
  },
  {
    "url": "assets/css/0.styles.7c06cc45.css",
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
    "url": "assets/js/1.8bfed15a.js",
    "revision": "ef3f0cd828ed8fd3fa14653a633ddd86"
  },
  {
    "url": "assets/js/10.09970ae8.js",
    "revision": "c6d6a38ff9da9311d554a75dc97fdf3c"
  },
  {
    "url": "assets/js/11.913c7e7d.js",
    "revision": "7ef0083a2d9c144f8ec665cedf068210"
  },
  {
    "url": "assets/js/12.059e77dd.js",
    "revision": "a916f1c8f355f6422075f23556812be3"
  },
  {
    "url": "assets/js/13.c1209171.js",
    "revision": "d389edad1bd6ae9c6f45e0ea7fbeb82e"
  },
  {
    "url": "assets/js/14.2131a72a.js",
    "revision": "f77c653571a881bf55fa0090579e7af9"
  },
  {
    "url": "assets/js/15.e0c08af4.js",
    "revision": "f201f6416572ed4d59630feb66ae8c40"
  },
  {
    "url": "assets/js/16.31af1c33.js",
    "revision": "7b5097edb7ec78912aaf5a05590c53fa"
  },
  {
    "url": "assets/js/17.7163a6bf.js",
    "revision": "5c3fc71d0eb409349c6c13524bf4f231"
  },
  {
    "url": "assets/js/18.bcd846d7.js",
    "revision": "313c0d259a646d1020faa966543a5783"
  },
  {
    "url": "assets/js/19.b759bbd7.js",
    "revision": "184c43d7273fc2847b63dc3874bcb48b"
  },
  {
    "url": "assets/js/20.2b273f2e.js",
    "revision": "8111bc6bdeef3f9d444c2245294fd8c7"
  },
  {
    "url": "assets/js/21.588eb118.js",
    "revision": "d9d08ed628b9f9184d560c80b22ad1ba"
  },
  {
    "url": "assets/js/22.6d96c6df.js",
    "revision": "74a21ca53360c8ac956c716fca289f9c"
  },
  {
    "url": "assets/js/23.28b3e972.js",
    "revision": "4321982e66cd973897ff831c7a185f26"
  },
  {
    "url": "assets/js/24.bfba838c.js",
    "revision": "4811d4c9716540a55591a6710955f039"
  },
  {
    "url": "assets/js/25.cdffe18d.js",
    "revision": "be2921effe6064a879b2675a52f1c085"
  },
  {
    "url": "assets/js/26.333d78c5.js",
    "revision": "2863369b89c7218b6ad15c6cdaa25322"
  },
  {
    "url": "assets/js/27.eff08316.js",
    "revision": "48b2010434827f18f52d7a41e0ca6340"
  },
  {
    "url": "assets/js/28.a81d003c.js",
    "revision": "c7b375e75c7874fd741ee1287bc0fef7"
  },
  {
    "url": "assets/js/29.3ad9b1e7.js",
    "revision": "ab7463c12c0cef47f1a06746a20fe8ed"
  },
  {
    "url": "assets/js/3.75e219d3.js",
    "revision": "0f0213030ee8836fb5cce5449e5510f3"
  },
  {
    "url": "assets/js/30.705031ae.js",
    "revision": "e12a9b1b2a51d4e2ebdf48b2327e49fe"
  },
  {
    "url": "assets/js/31.4e9374b3.js",
    "revision": "1ed6815e25cec6b3ba848efeff3fab19"
  },
  {
    "url": "assets/js/32.44796cba.js",
    "revision": "601c76e1f0382adace7d92299ba62194"
  },
  {
    "url": "assets/js/33.51cd82d2.js",
    "revision": "b3f77fba9486606db663464ccc6eed63"
  },
  {
    "url": "assets/js/34.59776cda.js",
    "revision": "a5d14099c03cfe1cfaaca95e2687ae17"
  },
  {
    "url": "assets/js/35.5045b033.js",
    "revision": "7aa95e4e5098a66eec401a0d099d07fc"
  },
  {
    "url": "assets/js/36.dcea427c.js",
    "revision": "b466c2f69de474f730e1c9e036d96619"
  },
  {
    "url": "assets/js/37.3feb1522.js",
    "revision": "0163717eae544adb04a9b2de701ca179"
  },
  {
    "url": "assets/js/4.11c9680f.js",
    "revision": "4b41647476ea562a2c38a6255314372a"
  },
  {
    "url": "assets/js/5.b608bf35.js",
    "revision": "79d5f3cf252f4ce51879ce2a2274505f"
  },
  {
    "url": "assets/js/6.7be5447f.js",
    "revision": "7d10d1b6a31a99f2fea0ca9223ae8aaf"
  },
  {
    "url": "assets/js/7.04991c46.js",
    "revision": "08bec252a3d5300814ee11b5b8ef308e"
  },
  {
    "url": "assets/js/8.57e28a80.js",
    "revision": "98ca603a4de9a6c8a2d9249c10aeeefe"
  },
  {
    "url": "assets/js/9.c6d8e784.js",
    "revision": "f24f9a350e312be2b3cb264315f65371"
  },
  {
    "url": "assets/js/app.e9510876.js",
    "revision": "dfaeace3e1f6ac2e6924393bdbbced9a"
  },
  {
    "url": "categories/index.html",
    "revision": "526c6e51667fdd69b4bbc00cd78fda66"
  },
  {
    "url": "demo.html",
    "revision": "faececb5e6314eb0f0fcb8d38d098029"
  },
  {
    "url": "index.html",
    "revision": "d2798d93c46272173d55ad2e72f82d60"
  },
  {
    "url": "logo/logo200.png",
    "revision": "dfc1cca5e2fec86474f3fc9a1b6a6c8b"
  },
  {
    "url": "logo/logo500.png",
    "revision": "8d1c3a2d6acd1ad3bc704027fd3606e6"
  },
  {
    "url": "philosophy/man&gad/index.html",
    "revision": "fd83eb3abdee257d694727e598df6635"
  },
  {
    "url": "philosophy/man&gad/patristic-philosophy.html",
    "revision": "d72ae71fd1429eff8f594384f6f87e55"
  },
  {
    "url": "philosophy/man&gad/philosophy-come-back.html",
    "revision": "3143bd4bec9b39966d3bc7ade6835c13"
  },
  {
    "url": "philosophy/man&gad/scholasticism.html",
    "revision": "e74f7b5e9ff4870cfa269f896126c2eb"
  },
  {
    "url": "philosophy/origin/atomism&sophists.html",
    "revision": "0b4ef790e345cd5195351580274e3737"
  },
  {
    "url": "philosophy/origin/history-of-philosophy.html",
    "revision": "9ad1ba0906a8bca442a0565a89b1d67a"
  },
  {
    "url": "philosophy/origin/index.html",
    "revision": "26eafa2e8b9aa41cec411be32086d294"
  },
  {
    "url": "philosophy/origin/materialism-and-immaterialism.html",
    "revision": "71036adfe7bc2366482f3fc887397be1"
  },
  {
    "url": "philosophy/origin/origin-of-philosophy.html",
    "revision": "30e9cc297564ab315689254fdd850c4a"
  },
  {
    "url": "philosophy/origin/Socrates.html",
    "revision": "5552ba48be8661e2366a4fe30d7a1db1"
  },
  {
    "url": "philosophy/rationalism&empiricism/Aristotle.html",
    "revision": "79db1d8966741f89bb7732e3ad5c59c5"
  },
  {
    "url": "philosophy/rationalism&empiricism/index.html",
    "revision": "6c81bc235f342b08b32a88ef3354c9c5"
  },
  {
    "url": "philosophy/reason/Descartes.html",
    "revision": "05ecc1067a616fa0bd3d30ef4d18778a"
  },
  {
    "url": "philosophy/reason/index.html",
    "revision": "5aac8d185847106e2b179f936d553df6"
  },
  {
    "url": "philosophy/reason/Pascal.html",
    "revision": "50c7713834ea890bed6192013babf2cf"
  },
  {
    "url": "philosophy/reason/philo-sophia.html",
    "revision": "c1ae1a0e1cd9d5cfd984d5212b55b162"
  },
  {
    "url": "philosophy/reason/reformation.html",
    "revision": "f3682182965d41cf5b4c9ddee760f700"
  },
  {
    "url": "philosophy/reason/Spinoza.html",
    "revision": "a359227a3aacb4ecc31e571d7e71467b"
  },
  {
    "url": "philosophy/self-settle/end-of-Greek.html",
    "revision": "621b894958d4ee8d1c144b1964a6e7b3"
  },
  {
    "url": "philosophy/self-settle/hedonism.html",
    "revision": "18695d4af48b4ac0938e0d5e6a65fe87"
  },
  {
    "url": "philosophy/self-settle/index.html",
    "revision": "590ae4bc23b47548951ffaac2f769db2"
  },
  {
    "url": "philosophy/self-settle/scepticism.html",
    "revision": "36af651f636c8e21f250efb33044f35a"
  },
  {
    "url": "philosophy/self-settle/stoa.html",
    "revision": "e42d895ad7a0ee92aeebd376195df681"
  },
  {
    "url": "tag/index.html",
    "revision": "8ecf912a680768b19f963a4fc535e201"
  },
  {
    "url": "timeline/index.html",
    "revision": "88bc24d39496e986f236a3523f7d3ed3"
  },
  {
    "url": "xuan200.png",
    "revision": "337c9efc9e84b65cfe4b29fe0d909ab4"
  },
  {
    "url": "xuan500.png",
    "revision": "7afeb05055b35382431eeee9f3953d56"
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
