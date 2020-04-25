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
    "revision": "ac63435de051d95522df2ebef821c8ee"
  },
  {
    "url": "assets/css/0.styles.69283bfb.css",
    "revision": "2987fa0be4e1231a78ad2e146778f0c3"
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
    "url": "assets/js/1.63f98290.js",
    "revision": "ea072eea7e8979ea068df6bf3557d1b3"
  },
  {
    "url": "assets/js/10.eef275ed.js",
    "revision": "0eab55f746fcc1745411279ccd698635"
  },
  {
    "url": "assets/js/11.18ea4158.js",
    "revision": "45f10c01d6e30b889cd34cacd29b9b80"
  },
  {
    "url": "assets/js/12.7104aae8.js",
    "revision": "f8c5d3da7285e88f391988852d14e5c0"
  },
  {
    "url": "assets/js/13.db8e075a.js",
    "revision": "c80e1a387e4641312de95da1bd4d16b1"
  },
  {
    "url": "assets/js/14.fd10f2b9.js",
    "revision": "e2e48bff1531b8548cb2d83dbf59dd62"
  },
  {
    "url": "assets/js/15.edcfebf2.js",
    "revision": "17b694750b65639b8b28eb4e592bdf96"
  },
  {
    "url": "assets/js/16.e066e4d0.js",
    "revision": "0b9a5c19b7080e4c7cf1b2d3e5a33f7a"
  },
  {
    "url": "assets/js/17.dc043e46.js",
    "revision": "8453409114ad89e30c4c46bff5a26c39"
  },
  {
    "url": "assets/js/18.0f149d4b.js",
    "revision": "b55cd1b3d31017f7713c9d267d2256a0"
  },
  {
    "url": "assets/js/19.c25c5b38.js",
    "revision": "a5947c4d0bb9b358b0fe7df8922b6d49"
  },
  {
    "url": "assets/js/20.076a7bc4.js",
    "revision": "591c5f9d321e13107108ded54dc26ae7"
  },
  {
    "url": "assets/js/21.24d67b7d.js",
    "revision": "768e9dd1070a5ba4140283c291e910ef"
  },
  {
    "url": "assets/js/22.2ff20328.js",
    "revision": "6c913c9a60fa52685250ac7e95eb6f22"
  },
  {
    "url": "assets/js/23.cf50a5c2.js",
    "revision": "20b7b13f812d61db38291967bbd3ff25"
  },
  {
    "url": "assets/js/24.ece0b6a3.js",
    "revision": "5f07ad7acab27661bf9dfdfd3445a7ff"
  },
  {
    "url": "assets/js/25.e41e288c.js",
    "revision": "0297140305a9765edf10b40791f66d0e"
  },
  {
    "url": "assets/js/26.22cd2583.js",
    "revision": "9e5b9418802c3b647b779b8bd80390e6"
  },
  {
    "url": "assets/js/27.72627bdd.js",
    "revision": "9359582f0e8d4f560c8d2bbd78ce9ada"
  },
  {
    "url": "assets/js/28.de6f7dbe.js",
    "revision": "86600b61f5e0cab0674687b3f778126a"
  },
  {
    "url": "assets/js/29.0ea20feb.js",
    "revision": "81a6343e2b910cfeb0a20a89160c62bd"
  },
  {
    "url": "assets/js/3.e495a9a4.js",
    "revision": "f97b61bdd6d21ad28ea30d7b67db2361"
  },
  {
    "url": "assets/js/30.7d7ded0d.js",
    "revision": "5204b5f8b62ed898c5cb9090f2ed4c5a"
  },
  {
    "url": "assets/js/31.443bfdf1.js",
    "revision": "763c31bf6de809bed0a1e13df65e95d5"
  },
  {
    "url": "assets/js/32.2a2ab864.js",
    "revision": "7e4360333875bc845a8d65393b20a7d3"
  },
  {
    "url": "assets/js/33.207f8379.js",
    "revision": "18a304ffa629828bd18888401606b104"
  },
  {
    "url": "assets/js/34.2c171ed2.js",
    "revision": "3294770318752b48bae25feded544ebb"
  },
  {
    "url": "assets/js/35.9f6d0656.js",
    "revision": "d91db13d1ac522db233cc682dbb05725"
  },
  {
    "url": "assets/js/36.d9f04506.js",
    "revision": "2f17e5aa4e2a4d3351ec888f0610cfd2"
  },
  {
    "url": "assets/js/37.ec1ccf53.js",
    "revision": "92e8040ca3c8435ee88e61c9ba566879"
  },
  {
    "url": "assets/js/38.45f85de3.js",
    "revision": "22fdfa11aa3cf106d439412d4d0962a5"
  },
  {
    "url": "assets/js/39.5a6585dc.js",
    "revision": "cb4d62bc2193c7230280261e6acbef67"
  },
  {
    "url": "assets/js/4.811f41b3.js",
    "revision": "b1b7e56740f5fc2c1360655842a75db8"
  },
  {
    "url": "assets/js/40.fff85615.js",
    "revision": "574a7448a8af905452b403316b482277"
  },
  {
    "url": "assets/js/41.c1c3161c.js",
    "revision": "1b78f5754dae40f3c97bfc5c9fc6758b"
  },
  {
    "url": "assets/js/42.ead70bd7.js",
    "revision": "2a6ac7f362a169abfaa8ef4b246d7822"
  },
  {
    "url": "assets/js/43.4232a9a0.js",
    "revision": "97ab321ce15ebbe9bd7a201f5ddb0fad"
  },
  {
    "url": "assets/js/44.9243ce80.js",
    "revision": "2b8f48f907372a4748cedcf015212417"
  },
  {
    "url": "assets/js/5.9adb7a44.js",
    "revision": "4cf8fa64a4d42c66aa157da82e2c0660"
  },
  {
    "url": "assets/js/6.47cae887.js",
    "revision": "ae888caf9ce0aedeaffaf12121b149a1"
  },
  {
    "url": "assets/js/7.f24fab21.js",
    "revision": "14dbf9bcc19aefb439a1a96691301f26"
  },
  {
    "url": "assets/js/8.4eba1cb6.js",
    "revision": "d5d5fd8bdf1f48e8ee9b3ecd1a9692f2"
  },
  {
    "url": "assets/js/9.03777879.js",
    "revision": "42b93f3cee0e5a0cd72b19f09671c190"
  },
  {
    "url": "assets/js/app.c1787ee4.js",
    "revision": "42fe4d7cea914e01611bdf13140f9de5"
  },
  {
    "url": "categories/index.html",
    "revision": "78335a8f8d58ed32ec927ea8e05f1067"
  },
  {
    "url": "demo.html",
    "revision": "657e7bbc99b13e9ab9581931c1d90032"
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
    "revision": "79781ea0063360f5ffed23d98954359f"
  },
  {
    "url": "index.html",
    "revision": "4536213c471ceccdc683d90c1cf84835"
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
    "url": "philosophy/enlightenment/Berkeley.html",
    "revision": "97b38ef5c9bdff5a8b842d1b11fdc42f"
  },
  {
    "url": "philosophy/enlightenment/enlightenment.html",
    "revision": "829868a65fe8da853429c892b7d00d22"
  },
  {
    "url": "philosophy/enlightenment/Hume.html",
    "revision": "d4fad2453f4ba506c79c2ac62248500e"
  },
  {
    "url": "philosophy/enlightenment/index.html",
    "revision": "806b0b643fa17e8d833d5c28e1ba4e92"
  },
  {
    "url": "philosophy/enlightenment/Locke.html",
    "revision": "24011a038783d22dd9cf86cb71f0769d"
  },
  {
    "url": "philosophy/enlightenment/Rousseau.html",
    "revision": "19507d0bdd842389938ee56dbe6e200a"
  },
  {
    "url": "philosophy/man&gad/index.html",
    "revision": "aae83f59c99801b3a41bd88a4287b143"
  },
  {
    "url": "philosophy/man&gad/patristic-philosophy.html",
    "revision": "f4dfaaff4b2bafd448a9491c60954b77"
  },
  {
    "url": "philosophy/man&gad/philosophy-come-back.html",
    "revision": "569c18e58119c742856f89fd08ca23e7"
  },
  {
    "url": "philosophy/man&gad/scholasticism.html",
    "revision": "47fb90c764f36f7c808d7cc7c42e6f4a"
  },
  {
    "url": "philosophy/origin/atomism&sophists.html",
    "revision": "3db288795143d99a72c5e27f76d014a1"
  },
  {
    "url": "philosophy/origin/history-of-philosophy.html",
    "revision": "f934d8d088a23517c2260cf3df38149a"
  },
  {
    "url": "philosophy/origin/index.html",
    "revision": "e0f3f00cc0bbfdfdd7c832805d773c6c"
  },
  {
    "url": "philosophy/origin/materialism-and-immaterialism.html",
    "revision": "865b8093110ec787c7ab26b86e546bee"
  },
  {
    "url": "philosophy/origin/origin-of-philosophy.html",
    "revision": "25ccb31c90f8413d548ce1b46884f421"
  },
  {
    "url": "philosophy/origin/Socrates.html",
    "revision": "739859696c22c72df41e690811be7ffa"
  },
  {
    "url": "philosophy/rationalism&empiricism/Aristotle.html",
    "revision": "df747658cadf4d158ed911b35d0dc175"
  },
  {
    "url": "philosophy/rationalism&empiricism/index.html",
    "revision": "0d7c0246435dc953bf6f25c9ccff8ae2"
  },
  {
    "url": "philosophy/reason/Descartes.html",
    "revision": "1e0f7c1083bcecae504c06a7b232f14c"
  },
  {
    "url": "philosophy/reason/index.html",
    "revision": "dcfe21605a0d5471a0cd018d9997b40f"
  },
  {
    "url": "philosophy/reason/Leibnitz.html",
    "revision": "fea2e113270745531cd7b59d76abdd6b"
  },
  {
    "url": "philosophy/reason/Pascal.html",
    "revision": "e2f7cb227d91202dd9a3038c5533bb1f"
  },
  {
    "url": "philosophy/reason/philo-sophia.html",
    "revision": "93c3f730385962510465ee02a9b30024"
  },
  {
    "url": "philosophy/reason/reformation.html",
    "revision": "8b96c6e8083e52814131b6035e1a6f7c"
  },
  {
    "url": "philosophy/reason/Spinoza.html",
    "revision": "1c01b025cf89140a31437ecd7baed41f"
  },
  {
    "url": "philosophy/self-settle/end-of-Greek.html",
    "revision": "c6c7e18b9a52115bac7b5de3f611fb0e"
  },
  {
    "url": "philosophy/self-settle/hedonism.html",
    "revision": "c184791b04f6acb751a4493a42da5086"
  },
  {
    "url": "philosophy/self-settle/index.html",
    "revision": "ce12d530a3f43d6e4f5e7c7c6fd702f8"
  },
  {
    "url": "philosophy/self-settle/scepticism.html",
    "revision": "ef4e46cd62053b1a9be83168a1a82758"
  },
  {
    "url": "philosophy/self-settle/stoa.html",
    "revision": "1a246f144cccfdc3dcd4ab71c760b343"
  },
  {
    "url": "tag/index.html",
    "revision": "bce254a546c0443472bb3a2939001e70"
  },
  {
    "url": "timeline/index.html",
    "revision": "031325dfff8c36b78d31390036d0de11"
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
