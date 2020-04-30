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
    "revision": "e539fd2fb7c7812e13afae30a75dec3d"
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
    "url": "assets/js/14.d3a0ebbb.js",
    "revision": "3da18c6d016755127a2112ebc9299a76"
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
    "url": "assets/js/app.5a5a1132.js",
    "revision": "67a694f2a24ec31ebe557541a41985c5"
  },
  {
    "url": "categories/index.html",
    "revision": "d106c4c606dd5e92a39ef65086041881"
  },
  {
    "url": "demo.html",
    "revision": "7aac8324772b8afc2aee5de35d1b7a08"
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
    "revision": "bcafa54b116a97024ae001c82ef8b5ad"
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
    "revision": "0e75a93ca538b30cef14674961506326"
  },
  {
    "url": "philosophy/enlightenment/enlightenment.html",
    "revision": "45849d7af1ffb7a50e5ab4be9ec16157"
  },
  {
    "url": "philosophy/enlightenment/GermanIdealism.html",
    "revision": "47e91a93cd0918be788080ad46ce930e"
  },
  {
    "url": "philosophy/enlightenment/Hume.html",
    "revision": "79c8b10d446ae3e3d3cb57ce505c70d3"
  },
  {
    "url": "philosophy/enlightenment/index.html",
    "revision": "f12a0d4acf233dd8b243934be5489298"
  },
  {
    "url": "philosophy/enlightenment/Kant.html",
    "revision": "e4394f742c45d7f6e7f68113095afc8b"
  },
  {
    "url": "philosophy/enlightenment/Locke.html",
    "revision": "6b0e734840df41fa10b217718a7fcfa2"
  },
  {
    "url": "philosophy/enlightenment/Rousseau.html",
    "revision": "f6b663e09c51494d4d8e1584c75eaab3"
  },
  {
    "url": "philosophy/man&gad/index.html",
    "revision": "9c2ee6692360829358a4afe175ac2311"
  },
  {
    "url": "philosophy/man&gad/patristic-philosophy.html",
    "revision": "1bb694713b21275accfeff6f174d4286"
  },
  {
    "url": "philosophy/man&gad/philosophy-come-back.html",
    "revision": "7c82bcbffae49c22932fe7b10e9b26f5"
  },
  {
    "url": "philosophy/man&gad/scholasticism.html",
    "revision": "d3861c596311e29fc8f304e7bde229e3"
  },
  {
    "url": "philosophy/origin/atomism&sophists.html",
    "revision": "84caf5592be83eb3b9f5434c2dfa382b"
  },
  {
    "url": "philosophy/origin/history-of-philosophy.html",
    "revision": "06d1778a2bb8ba9030e5551a7af944e8"
  },
  {
    "url": "philosophy/origin/index.html",
    "revision": "580a240946cc1b873f3af072677b8b2d"
  },
  {
    "url": "philosophy/origin/materialism-and-immaterialism.html",
    "revision": "4fc8dc07ee99f00670471fc6d28432c7"
  },
  {
    "url": "philosophy/origin/origin-of-philosophy.html",
    "revision": "59982a0a7c5d50fc108b903cfeae2a0b"
  },
  {
    "url": "philosophy/origin/Socrates.html",
    "revision": "213379dd8895b2cceb051e64e126027f"
  },
  {
    "url": "philosophy/rationalism&empiricism/Aristotle.html",
    "revision": "48b61ad121708becd485e368cb9c3667"
  },
  {
    "url": "philosophy/rationalism&empiricism/index.html",
    "revision": "7112f3fd1e3b5f075785bde14250b5f5"
  },
  {
    "url": "philosophy/reason/Descartes.html",
    "revision": "519b6e23d9116066c6d5e5d723b5d876"
  },
  {
    "url": "philosophy/reason/index.html",
    "revision": "3df61bb64effc05afc248e7cd212176b"
  },
  {
    "url": "philosophy/reason/Leibnitz.html",
    "revision": "8c4d4012312b402ff5b5ca0c4d4f30f4"
  },
  {
    "url": "philosophy/reason/Pascal.html",
    "revision": "cef1025a533b3dace57016334c5ce79b"
  },
  {
    "url": "philosophy/reason/philo-sophia.html",
    "revision": "2c6e8d9aacdde4828857d97d891b6c04"
  },
  {
    "url": "philosophy/reason/reformation.html",
    "revision": "5d244b82f424cce15da395457bb028f2"
  },
  {
    "url": "philosophy/reason/Spinoza.html",
    "revision": "0a2da342928d4007d1edb6727bcb88c1"
  },
  {
    "url": "philosophy/self-settle/end-of-Greek.html",
    "revision": "7bf584fc7d005708dfa17c1c76837cf5"
  },
  {
    "url": "philosophy/self-settle/hedonism.html",
    "revision": "1b900e5e5fdfad9927e90a602d67d502"
  },
  {
    "url": "philosophy/self-settle/index.html",
    "revision": "6e4f89179d667dc813590e5d11becc37"
  },
  {
    "url": "philosophy/self-settle/scepticism.html",
    "revision": "1eabef3a34838c3fce5a0fef8f6afd17"
  },
  {
    "url": "philosophy/self-settle/stoa.html",
    "revision": "76a4accc98cac9e958fc11daf89e3225"
  },
  {
    "url": "tag/index.html",
    "revision": "4e03078f99d24828a980a0da425da6f6"
  },
  {
    "url": "timeline/index.html",
    "revision": "b91bee38ec79e5660197dc6a48c8fae9"
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
