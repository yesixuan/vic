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
    "revision": "06d80683984bd3ca6f2c450c6646aea8"
  },
  {
    "url": "assets/css/0.styles.17e2a850.css",
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
    "url": "assets/js/1.6717655a.js",
    "revision": "ea072eea7e8979ea068df6bf3557d1b3"
  },
  {
    "url": "assets/js/10.17b0e921.js",
    "revision": "b34443435dbe35946fb9d5ccdbc75154"
  },
  {
    "url": "assets/js/11.8ce87827.js",
    "revision": "45f10c01d6e30b889cd34cacd29b9b80"
  },
  {
    "url": "assets/js/12.0adc1c19.js",
    "revision": "f8c5d3da7285e88f391988852d14e5c0"
  },
  {
    "url": "assets/js/13.4caa9dae.js",
    "revision": "c80e1a387e4641312de95da1bd4d16b1"
  },
  {
    "url": "assets/js/14.c7b4b534.js",
    "revision": "e2e48bff1531b8548cb2d83dbf59dd62"
  },
  {
    "url": "assets/js/15.dcf781fd.js",
    "revision": "17b694750b65639b8b28eb4e592bdf96"
  },
  {
    "url": "assets/js/16.b83a31b0.js",
    "revision": "0b9a5c19b7080e4c7cf1b2d3e5a33f7a"
  },
  {
    "url": "assets/js/17.17801490.js",
    "revision": "c85e43f2681c274e17fd56988d46ff4e"
  },
  {
    "url": "assets/js/18.f7d45e14.js",
    "revision": "d9bc0274b2517a610b37a4a5a93c7d33"
  },
  {
    "url": "assets/js/19.d961fbdc.js",
    "revision": "c07c1d592f82ef95d431b0fb8dc58771"
  },
  {
    "url": "assets/js/20.a2ebf529.js",
    "revision": "f3993948c6cb98e1d517c2fc27a0469b"
  },
  {
    "url": "assets/js/21.90bb9175.js",
    "revision": "9a3b89d86a5c18295cf0036ea478f5b2"
  },
  {
    "url": "assets/js/22.58ab4400.js",
    "revision": "e66cbc811e47c8bcc93317c5d121d4a8"
  },
  {
    "url": "assets/js/23.67a4f842.js",
    "revision": "3c88e46f0c47b2900477609988b98c2b"
  },
  {
    "url": "assets/js/24.e7474c36.js",
    "revision": "fec64443a2345201210a3f69fd145958"
  },
  {
    "url": "assets/js/25.8b7ea680.js",
    "revision": "c42eab46ba85288bbe592f8ecaeca154"
  },
  {
    "url": "assets/js/26.fbeee2b2.js",
    "revision": "6b9e5eb887f0bed37eeab1e9cf2e5d8f"
  },
  {
    "url": "assets/js/27.4e993677.js",
    "revision": "16e9d5d1623e06b06c8523ba7f752e44"
  },
  {
    "url": "assets/js/28.a22f852f.js",
    "revision": "ca3f587fae36109fff8d77817aa10e66"
  },
  {
    "url": "assets/js/29.8e4e2d21.js",
    "revision": "c00f4883c76ee8831f0db06cce5a95c5"
  },
  {
    "url": "assets/js/3.dc6bd04e.js",
    "revision": "f97b61bdd6d21ad28ea30d7b67db2361"
  },
  {
    "url": "assets/js/30.02bc0f46.js",
    "revision": "786996681ef4f04e420a09fb9b11cc73"
  },
  {
    "url": "assets/js/31.91cf9041.js",
    "revision": "f5074f4d2a5ee8b76709a35e48c8784e"
  },
  {
    "url": "assets/js/32.a9c22bbd.js",
    "revision": "5f5826edac61f7a9b34897da219a723b"
  },
  {
    "url": "assets/js/33.93882485.js",
    "revision": "03b4444eea221b90908e039100bc83f4"
  },
  {
    "url": "assets/js/34.055f780a.js",
    "revision": "2e859af00225e32c85e09ac5700f6f32"
  },
  {
    "url": "assets/js/35.8f7d4ec5.js",
    "revision": "8b1c71ca285d606e42dd3bd225816f59"
  },
  {
    "url": "assets/js/36.e70c8b5a.js",
    "revision": "091c7c6922411a8d1920c0d9095b5863"
  },
  {
    "url": "assets/js/37.10a5f3b4.js",
    "revision": "166bfd235c315c65a6b194818b5f22ed"
  },
  {
    "url": "assets/js/38.8ad73f6e.js",
    "revision": "ec06a160c85cd7f593d545e924da1156"
  },
  {
    "url": "assets/js/39.5546ccdd.js",
    "revision": "b31992b84cbbb51a345a4d29a7f0ff32"
  },
  {
    "url": "assets/js/4.5bb36fa4.js",
    "revision": "b1b7e56740f5fc2c1360655842a75db8"
  },
  {
    "url": "assets/js/40.32bf5d14.js",
    "revision": "3655cdd66e3139096f8238225be27b41"
  },
  {
    "url": "assets/js/41.02f86750.js",
    "revision": "df87e50cd9c3f99261f6ce234cd65123"
  },
  {
    "url": "assets/js/42.a9962483.js",
    "revision": "ef2a5fd6e0e44fd5fc279ceaca7c5eb7"
  },
  {
    "url": "assets/js/43.5139e823.js",
    "revision": "65135ccf7a0aac79b7e865da90c63fcd"
  },
  {
    "url": "assets/js/5.edf4a22d.js",
    "revision": "4cf8fa64a4d42c66aa157da82e2c0660"
  },
  {
    "url": "assets/js/6.98a80d1b.js",
    "revision": "ae888caf9ce0aedeaffaf12121b149a1"
  },
  {
    "url": "assets/js/7.fde623e2.js",
    "revision": "14dbf9bcc19aefb439a1a96691301f26"
  },
  {
    "url": "assets/js/8.c6a151f6.js",
    "revision": "d5d5fd8bdf1f48e8ee9b3ecd1a9692f2"
  },
  {
    "url": "assets/js/9.1877b4ec.js",
    "revision": "42b93f3cee0e5a0cd72b19f09671c190"
  },
  {
    "url": "assets/js/app.ce9b445c.js",
    "revision": "ff8a438186403fcffd4ece8400c42494"
  },
  {
    "url": "categories/index.html",
    "revision": "20d2fa61070b0b79e5cc1832821b3134"
  },
  {
    "url": "demo.html",
    "revision": "148072dddf0e9dc91d7274e1e5db0846"
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
    "revision": "8c2bd3e8ab38d028acffe88ecb90e91e"
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
    "revision": "cba4a24cc2707b55c763c442a8b6a824"
  },
  {
    "url": "philosophy/enlightenment/Hume.html",
    "revision": "1066509db7c16f5c5b02ad2cf4316767"
  },
  {
    "url": "philosophy/enlightenment/index.html",
    "revision": "9813100262eeb29acd064a1ec3493546"
  },
  {
    "url": "philosophy/enlightenment/Locke.html",
    "revision": "668e4e17ded84da7278845a664b814d4"
  },
  {
    "url": "philosophy/enlightenment/Rousseau.html",
    "revision": "4e2fdfb0b1d4fa51a64351c20cd267ef"
  },
  {
    "url": "philosophy/man&gad/index.html",
    "revision": "56a823bce2ef7d152eef7b9b8540d319"
  },
  {
    "url": "philosophy/man&gad/patristic-philosophy.html",
    "revision": "c52c844dcf79170fa505fd9ff6860b99"
  },
  {
    "url": "philosophy/man&gad/philosophy-come-back.html",
    "revision": "14c2be17d81edc9d5ba0e13efc7795a9"
  },
  {
    "url": "philosophy/man&gad/scholasticism.html",
    "revision": "4463ce68eca3b077aea2f61c2d99b2ff"
  },
  {
    "url": "philosophy/origin/atomism&sophists.html",
    "revision": "adb823f301b8e7a69e26aa71981aa657"
  },
  {
    "url": "philosophy/origin/history-of-philosophy.html",
    "revision": "39fc80bb608832d5ddb6dc41078a50b6"
  },
  {
    "url": "philosophy/origin/index.html",
    "revision": "95294605a2df80f22de3f8434136bf48"
  },
  {
    "url": "philosophy/origin/materialism-and-immaterialism.html",
    "revision": "fe23c44c182527772684d0213282cf06"
  },
  {
    "url": "philosophy/origin/origin-of-philosophy.html",
    "revision": "c133334431470355358c8aabd0b3ac3c"
  },
  {
    "url": "philosophy/origin/Socrates.html",
    "revision": "e16d1c1069acdd009f70b910da84b666"
  },
  {
    "url": "philosophy/rationalism&empiricism/Aristotle.html",
    "revision": "3ee54731b5ea84fe3d9a0a4f71284fef"
  },
  {
    "url": "philosophy/rationalism&empiricism/index.html",
    "revision": "137b48ca31db0561a65aaa701b953e40"
  },
  {
    "url": "philosophy/reason/Descartes.html",
    "revision": "7cf8113cebee7361fa5ba0a8b32f002c"
  },
  {
    "url": "philosophy/reason/index.html",
    "revision": "3ef555db85e1bcdfab1f0a52501cc541"
  },
  {
    "url": "philosophy/reason/Leibnitz.html",
    "revision": "3afaa9b0ef19a58d574ed0ef8e454f49"
  },
  {
    "url": "philosophy/reason/Pascal.html",
    "revision": "d5a26cfccd1c2c44352289285455753f"
  },
  {
    "url": "philosophy/reason/philo-sophia.html",
    "revision": "892157c888b94526ea6405eb16a4b2f6"
  },
  {
    "url": "philosophy/reason/reformation.html",
    "revision": "7fe11fe70bdd8532b9ce984dc43b5599"
  },
  {
    "url": "philosophy/reason/Spinoza.html",
    "revision": "89505a33d5bdb44dbf54c74e5fc1e1fe"
  },
  {
    "url": "philosophy/self-settle/end-of-Greek.html",
    "revision": "8cbaf329ad70694eb5bd09490cbe60a6"
  },
  {
    "url": "philosophy/self-settle/hedonism.html",
    "revision": "ab6540fd18458976c4e8ea465d6d4fdc"
  },
  {
    "url": "philosophy/self-settle/index.html",
    "revision": "6a5327fde8e0369749088337af8abd63"
  },
  {
    "url": "philosophy/self-settle/scepticism.html",
    "revision": "4cd5944131f299b09b7f8d50516762d1"
  },
  {
    "url": "philosophy/self-settle/stoa.html",
    "revision": "b6e3c21799e94202c500215f6e7d51b6"
  },
  {
    "url": "tag/index.html",
    "revision": "ff9adde2f68c58c624395ddac0060e19"
  },
  {
    "url": "timeline/index.html",
    "revision": "c46232061f0b0e39baf6715fa412680f"
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
