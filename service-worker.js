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
    "revision": "f21cc9181509d74c10af81cd6d8c5343"
  },
  {
    "url": "assets/css/0.styles.8291038c.css",
    "revision": "ca88bcf441e64b2033f21bd771c3fdab"
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
    "url": "assets/js/27.881f79a6.js",
    "revision": "b6656e11dce82493aa8d64c8b3655bf5"
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
    "url": "assets/js/app.f45c4db2.js",
    "revision": "1b86b386c287375078f862cbf4f2fcfe"
  },
  {
    "url": "categories/index.html",
    "revision": "45713afe9d37317e42bb6f27e236439e"
  },
  {
    "url": "demo.html",
    "revision": "0c4fd6d6bc2b6a53448c5286a7a96f17"
  },
  {
    "url": "FiraCode-Light.ttf",
    "revision": "93e8a73358cd628cb143655d2d7f4db5"
  },
  {
    "url": "FiraCode-Regular.ttf",
    "revision": "94c6421c40b153fd303f8ace482b2322"
  },
  {
    "url": "HYQiH18030F50.ttf",
    "revision": "1afd7a575b5088cd2b8d6fc005303a9b"
  },
  {
    "url": "index.html",
    "revision": "93dd24808863c9ae84abdd9672d50d82"
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
    "revision": "452db271d44d151bb7ed1919190da233"
  },
  {
    "url": "philosophy/man&gad/patristic-philosophy.html",
    "revision": "9fbffdbda56b6cbc652f0668b7bcccd4"
  },
  {
    "url": "philosophy/man&gad/philosophy-come-back.html",
    "revision": "63b4fd4d6e66f60e1c179d02f034dec8"
  },
  {
    "url": "philosophy/man&gad/scholasticism.html",
    "revision": "31be80f51d4f60168994c16e604d2d0c"
  },
  {
    "url": "philosophy/origin/atomism&sophists.html",
    "revision": "65f3ed623a28136ccf2cfae7765288b7"
  },
  {
    "url": "philosophy/origin/history-of-philosophy.html",
    "revision": "10553d0397ed9f9aa83561c10be5ff07"
  },
  {
    "url": "philosophy/origin/index.html",
    "revision": "6cd3a15c0aa93f930ed7f5085441bc1f"
  },
  {
    "url": "philosophy/origin/materialism-and-immaterialism.html",
    "revision": "7e44045246fff9d6c10377150e5a23d8"
  },
  {
    "url": "philosophy/origin/origin-of-philosophy.html",
    "revision": "4c7cd6afdc84197e508a2e0dad71d90e"
  },
  {
    "url": "philosophy/origin/Socrates.html",
    "revision": "2d69de7321710e4dbdcb57fe4ffcd2e0"
  },
  {
    "url": "philosophy/rationalism&empiricism/Aristotle.html",
    "revision": "203b2d772ac6d675e8910538207a9bdb"
  },
  {
    "url": "philosophy/rationalism&empiricism/index.html",
    "revision": "17ed5393c3954560085a04c577022553"
  },
  {
    "url": "philosophy/reason/Descartes.html",
    "revision": "144e6e246b3c55e5e05894d13d75c334"
  },
  {
    "url": "philosophy/reason/index.html",
    "revision": "55137ada03abdb6ddbd4da1e1162a544"
  },
  {
    "url": "philosophy/reason/Pascal.html",
    "revision": "d8e6a9484ae0a405ba4d252b7c7e630b"
  },
  {
    "url": "philosophy/reason/philo-sophia.html",
    "revision": "3fa1377b8bbc4857ba2f873f82997505"
  },
  {
    "url": "philosophy/reason/reformation.html",
    "revision": "596c2e6cb8b03998e9bcee86f1443ccc"
  },
  {
    "url": "philosophy/reason/Spinoza.html",
    "revision": "7d85ca413709eeb45e11af7addd9abe7"
  },
  {
    "url": "philosophy/self-settle/end-of-Greek.html",
    "revision": "e02559b9f4ccd6e7de12c1a2c5d61aa1"
  },
  {
    "url": "philosophy/self-settle/hedonism.html",
    "revision": "5844b71348b6150789cb7ae1c1d4cccc"
  },
  {
    "url": "philosophy/self-settle/index.html",
    "revision": "61763101b4db6c29bc9e83ce3445423c"
  },
  {
    "url": "philosophy/self-settle/scepticism.html",
    "revision": "83d890d95b6c116bee5d4336a95d4e34"
  },
  {
    "url": "philosophy/self-settle/stoa.html",
    "revision": "f12c71e1aeb0e7d14fb23aeaf53abab5"
  },
  {
    "url": "tag/index.html",
    "revision": "291b86ec12e70c64b51981f5521df253"
  },
  {
    "url": "timeline/index.html",
    "revision": "4d6f60621857ce99dbd929559968f758"
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
