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
    "revision": "1d4a652bc40f1950e32a981453229fd4"
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
    "url": "assets/js/1.6c43311e.js",
    "revision": "5dba9bdb0f3d5188be62088cf4060709"
  },
  {
    "url": "assets/js/10.3ae1c541.js",
    "revision": "0827aea77ff2fc67e9270bcc41b0073f"
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
    "url": "assets/js/14.058a08b8.js",
    "revision": "888259b280f38a8f3697c7df253fbbf4"
  },
  {
    "url": "assets/js/15.e25ad454.js",
    "revision": "4b297c365198a92800c20afcb367a1fb"
  },
  {
    "url": "assets/js/16.e5f03e0f.js",
    "revision": "288534ad45967fe84d24cf14fb14fe47"
  },
  {
    "url": "assets/js/17.c736a186.js",
    "revision": "e11bc0ccaffde54bc06c88cb93d6c7e6"
  },
  {
    "url": "assets/js/18.dc99e77c.js",
    "revision": "567da02f36b12adacee9e0de55f8fe99"
  },
  {
    "url": "assets/js/19.a134fc37.js",
    "revision": "89827ed257b5be88e30bef5eaafb1117"
  },
  {
    "url": "assets/js/20.a87000d5.js",
    "revision": "8b361fec908edee624fae2e038dc6d18"
  },
  {
    "url": "assets/js/21.84411ff6.js",
    "revision": "b132debf06e086addf6f2e556d35bbb6"
  },
  {
    "url": "assets/js/22.7a867cd9.js",
    "revision": "98b39a7c06847b78372cb0f18f6c9628"
  },
  {
    "url": "assets/js/23.808c524d.js",
    "revision": "754329df4e2f3c9038a83a4b0f243941"
  },
  {
    "url": "assets/js/24.7d7edcab.js",
    "revision": "7fdfa1b779806ade4c0a133e512d0259"
  },
  {
    "url": "assets/js/25.733afa91.js",
    "revision": "bcb2a47e7c25b56d248e52dfdde4c162"
  },
  {
    "url": "assets/js/26.5a1bef22.js",
    "revision": "f6ad91c86445f9e048892683efd00da3"
  },
  {
    "url": "assets/js/27.f0aca7aa.js",
    "revision": "c76c036448267bdd64921e89c34756ea"
  },
  {
    "url": "assets/js/28.06a840c5.js",
    "revision": "865e6d0574303a6920e723b0aacd3634"
  },
  {
    "url": "assets/js/29.82b25a1c.js",
    "revision": "c8dfdb62e31b56929155ca54112a8aef"
  },
  {
    "url": "assets/js/3.1e1950df.js",
    "revision": "fefd6c8a843b27d923c1cd2d1bd95d8e"
  },
  {
    "url": "assets/js/30.26bd48ce.js",
    "revision": "18180385c840c7833708a992f189bbf0"
  },
  {
    "url": "assets/js/31.b2b69381.js",
    "revision": "8c659c184976b3b3d71464b5ab506059"
  },
  {
    "url": "assets/js/32.342ae079.js",
    "revision": "b08ba87f6685b47a088554490f44c389"
  },
  {
    "url": "assets/js/33.b78b4d2e.js",
    "revision": "943fcf42a6e4d788866b1accfdfbf9e8"
  },
  {
    "url": "assets/js/34.2b5fe51a.js",
    "revision": "c3d6bdcc0dfa33ae5197d094e5f3589a"
  },
  {
    "url": "assets/js/35.a58de14a.js",
    "revision": "b214092f9e2381b7a12bf3b57d3851dd"
  },
  {
    "url": "assets/js/36.3e5dce5a.js",
    "revision": "61622a15dc1fec6c16a5b2fdc628b3a6"
  },
  {
    "url": "assets/js/37.39c3a7c1.js",
    "revision": "d1037f08247028b3aa19082586ce59a2"
  },
  {
    "url": "assets/js/38.142c3a29.js",
    "revision": "fc3faa6177651725355243d31e705fa8"
  },
  {
    "url": "assets/js/39.b8071a39.js",
    "revision": "3d5e26610d21ce70f50bb13f2db152db"
  },
  {
    "url": "assets/js/4.6f6a7b98.js",
    "revision": "65bf447d797e6e2fa618bbfff3eb034b"
  },
  {
    "url": "assets/js/40.31cf86ee.js",
    "revision": "50817aebda9c102a4a64ed43383e1449"
  },
  {
    "url": "assets/js/41.4c96118f.js",
    "revision": "313c39d94def5634f5fe10b594995bc0"
  },
  {
    "url": "assets/js/42.20568844.js",
    "revision": "c15b1f7ee9afdab9793de86033d1eb35"
  },
  {
    "url": "assets/js/43.25d20a4d.js",
    "revision": "9fb0d89d2e8e13dc4aee7e8a8ebc5ac1"
  },
  {
    "url": "assets/js/44.a0425c91.js",
    "revision": "176efe1929390dabf30b2ca68c657892"
  },
  {
    "url": "assets/js/45.474b5585.js",
    "revision": "3d069dfe873b7825a70260480e3320c7"
  },
  {
    "url": "assets/js/46.30f8a375.js",
    "revision": "5bb3f8d34a599b2a54b4d14e9d0f6577"
  },
  {
    "url": "assets/js/5.e728c3cb.js",
    "revision": "48a052670d6fe2a8aac7f20a9ef891c9"
  },
  {
    "url": "assets/js/6.1ffcf3df.js",
    "revision": "6d9e3b47c574aa62dc8c7323bafccdd6"
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
    "url": "assets/js/9.bf80550f.js",
    "revision": "63a26484ef27dc6f55e2bd97bb8cf4e2"
  },
  {
    "url": "assets/js/app.b2fe465c.js",
    "revision": "deb64fd037bfd1d7ff2ca4272001d3c3"
  },
  {
    "url": "categories/index.html",
    "revision": "5c303697be06675248aa2a5c74dae24e"
  },
  {
    "url": "demo.html",
    "revision": "e28cc3ef1634b5749fd68204043094b8"
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
    "revision": "6d99a5d5d60273637a57cc22ccbc32aa"
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
    "revision": "8bb4ad2f40e3ea5a828f7e9e21ccc861"
  },
  {
    "url": "philosophy/enlightenment/enlightenment.html",
    "revision": "4332d6e73f43fda0c9a33b494fceb000"
  },
  {
    "url": "philosophy/enlightenment/GermanIdealism.html",
    "revision": "25bd7ca5a831c2d2b98d829c4d0341d2"
  },
  {
    "url": "philosophy/enlightenment/Hume.html",
    "revision": "c193aa6750e07d40aa32d2e58afbc6a3"
  },
  {
    "url": "philosophy/enlightenment/index.html",
    "revision": "77236883ff0d5e77f5e3099e70900c8c"
  },
  {
    "url": "philosophy/enlightenment/Kant.html",
    "revision": "b81c7f288455202449ac4b41e629368e"
  },
  {
    "url": "philosophy/enlightenment/Locke.html",
    "revision": "094bfc70e6d7bc359ec82a030221f8bb"
  },
  {
    "url": "philosophy/enlightenment/Rousseau.html",
    "revision": "67eff64bfdbacbac4be0c3d072e014dc"
  },
  {
    "url": "philosophy/man&gad/index.html",
    "revision": "d574c1ac354281df505c8e6b3a1ab98d"
  },
  {
    "url": "philosophy/man&gad/patristic-philosophy.html",
    "revision": "5dbdfd926fd989e6e647aa727feb8afb"
  },
  {
    "url": "philosophy/man&gad/philosophy-come-back.html",
    "revision": "d922bec0e3780a9c79af6e38ba1b29ed"
  },
  {
    "url": "philosophy/man&gad/scholasticism.html",
    "revision": "f24b3bb73964cfe9e5f03ed692f2c9b7"
  },
  {
    "url": "philosophy/origin/atomism&sophists.html",
    "revision": "6b780859974e87cbfdddae7f8503d375"
  },
  {
    "url": "philosophy/origin/history-of-philosophy.html",
    "revision": "564d28662be4f1bcd1f0cf7af70d0aa0"
  },
  {
    "url": "philosophy/origin/index.html",
    "revision": "8dd9519dc65953d4424a4963110cecce"
  },
  {
    "url": "philosophy/origin/materialism-and-immaterialism.html",
    "revision": "637c460e1e3aa5c1c484689fa23b7133"
  },
  {
    "url": "philosophy/origin/origin-of-philosophy.html",
    "revision": "eff4ea395450fac616f479b185fb4bca"
  },
  {
    "url": "philosophy/origin/Socrates.html",
    "revision": "dd75bcc536e2ec64bb9b358b42ca7257"
  },
  {
    "url": "philosophy/rationalism&empiricism/Aristotle.html",
    "revision": "0601645f5a643e330bcd0ac0375ba211"
  },
  {
    "url": "philosophy/rationalism&empiricism/index.html",
    "revision": "08de58f6f3bdd2dd30e63fcb46b86362"
  },
  {
    "url": "philosophy/reason/Descartes.html",
    "revision": "de9254887afac6c09c7397e755d609f5"
  },
  {
    "url": "philosophy/reason/index.html",
    "revision": "a6755760f4d682ec8316012f561d13f8"
  },
  {
    "url": "philosophy/reason/Leibnitz.html",
    "revision": "cbe2dc8af6783b63fe7b4da7d1bb89fb"
  },
  {
    "url": "philosophy/reason/Pascal.html",
    "revision": "46d1c191ff6e105ddde25619324b96e0"
  },
  {
    "url": "philosophy/reason/philo-sophia.html",
    "revision": "3f560e4c04db3c0883663ce2c5e9ccd0"
  },
  {
    "url": "philosophy/reason/reformation.html",
    "revision": "067a040eb057925160b2b1d6a94ac8fa"
  },
  {
    "url": "philosophy/reason/Spinoza.html",
    "revision": "b064ae233992bf7867976f471afc4397"
  },
  {
    "url": "philosophy/self-settle/end-of-Greek.html",
    "revision": "3dadedb75b493ef59c0559f53fbfce04"
  },
  {
    "url": "philosophy/self-settle/hedonism.html",
    "revision": "02b1aba82f2b288bd828db54e2a3b97f"
  },
  {
    "url": "philosophy/self-settle/index.html",
    "revision": "1067f181edb101496a75a568e7e70cae"
  },
  {
    "url": "philosophy/self-settle/scepticism.html",
    "revision": "67e51e955239e7d2ece1f122923243d7"
  },
  {
    "url": "philosophy/self-settle/stoa.html",
    "revision": "0b3cc3e104df219b10c930e91a9dc48d"
  },
  {
    "url": "tag/index.html",
    "revision": "5dc4f1339742a6ed302afe710f162ed8"
  },
  {
    "url": "timeline/index.html",
    "revision": "188e35bf6d28c0eed493869879d66076"
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
