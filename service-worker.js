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
    "revision": "fd315b43d578ca9bb4dcf17abcfaecb7"
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
    "url": "assets/js/app.c6af8ce3.js",
    "revision": "291bf3342dd4c77bf1727c4ff96089ac"
  },
  {
    "url": "categories/index.html",
    "revision": "34174caf48507d9e9d681f6adabfd044"
  },
  {
    "url": "demo.html",
    "revision": "1a5ba7fb26515eff085ea1e6b531afd9"
  },
  {
    "url": "index.html",
    "revision": "0436e45fc83fa58d31a4b87e6216758b"
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
    "revision": "ddf3babea15f93115942b10f5cb863cb"
  },
  {
    "url": "philosophy/man&gad/patristic-philosophy.html",
    "revision": "84adf271d0be2313e8cfb3c6d4b367b4"
  },
  {
    "url": "philosophy/man&gad/philosophy-come-back.html",
    "revision": "e796c3ef742a0a6b1252448e943301d9"
  },
  {
    "url": "philosophy/man&gad/scholasticism.html",
    "revision": "f92772a5a2d1e9bca3d0bcedb24dc9e6"
  },
  {
    "url": "philosophy/origin/atomism&sophists.html",
    "revision": "868e42a706661959717ec27320363223"
  },
  {
    "url": "philosophy/origin/history-of-philosophy.html",
    "revision": "894ef5c2accd061252c4c3a831c45b64"
  },
  {
    "url": "philosophy/origin/index.html",
    "revision": "a0eb226cd2710235231d53c3894e9c10"
  },
  {
    "url": "philosophy/origin/materialism-and-immaterialism.html",
    "revision": "b9b96c83d977dc65a0b8cf5ecd45957e"
  },
  {
    "url": "philosophy/origin/origin-of-philosophy.html",
    "revision": "0d8c725dd53d1e758fcce748533f4dc9"
  },
  {
    "url": "philosophy/origin/Socrates.html",
    "revision": "0f953059e284af75712e73a6429ba00e"
  },
  {
    "url": "philosophy/rationalism&empiricism/Aristotle.html",
    "revision": "9fb85cfef63eac9af7f712c1d3f2bfd5"
  },
  {
    "url": "philosophy/rationalism&empiricism/index.html",
    "revision": "652d2f93e98acbf84eebdcc497e2466d"
  },
  {
    "url": "philosophy/reason/Descartes.html",
    "revision": "d7802a625aaa3b258df86b64037ad2b5"
  },
  {
    "url": "philosophy/reason/index.html",
    "revision": "7c6a3b9e75ed7588a499ccb3730ba780"
  },
  {
    "url": "philosophy/reason/Pascal.html",
    "revision": "9209ed0cbec93188fee566d06a87373a"
  },
  {
    "url": "philosophy/reason/philo-sophia.html",
    "revision": "6431cffaea8a2e885097f9578eebd672"
  },
  {
    "url": "philosophy/reason/reformation.html",
    "revision": "6cf0440a4cb74e56ae4d71dc898883a6"
  },
  {
    "url": "philosophy/reason/Spinoza.html",
    "revision": "06830ab2254ec9253e2b4a6e694ee919"
  },
  {
    "url": "philosophy/self-settle/end-of-Greek.html",
    "revision": "60e24c78e0fe285ec7a5f3229781df11"
  },
  {
    "url": "philosophy/self-settle/hedonism.html",
    "revision": "b855375d5e75314c1e07a71e4bca90a6"
  },
  {
    "url": "philosophy/self-settle/index.html",
    "revision": "4841a4622e4d88c60a04ac19b3f9e290"
  },
  {
    "url": "philosophy/self-settle/scepticism.html",
    "revision": "3a79d06418bbc5da3522a04c1fa52c0b"
  },
  {
    "url": "philosophy/self-settle/stoa.html",
    "revision": "8ff5e6009f767723857ec762b4a17fc5"
  },
  {
    "url": "tag/index.html",
    "revision": "abef3a902868a689687139a5ef389a7a"
  },
  {
    "url": "timeline/index.html",
    "revision": "fa00f52f69f7c20e142d8412fd8a08ce"
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
