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
    "revision": "cc25eddbbbf40fd526c44a29d07423b3"
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
    "url": "assets/js/14.2b8d00fb.js",
    "revision": "9977adcd302be409ba651191e92d0c4e"
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
    "url": "assets/js/3.e495a9a4.js",
    "revision": "f97b61bdd6d21ad28ea30d7b67db2361"
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
    "url": "assets/js/4.811f41b3.js",
    "revision": "b1b7e56740f5fc2c1360655842a75db8"
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
    "url": "assets/js/9.bf80550f.js",
    "revision": "63a26484ef27dc6f55e2bd97bb8cf4e2"
  },
  {
    "url": "assets/js/app.3470b45e.js",
    "revision": "a987b6aa12aa2dbd4536513ddd72a19f"
  },
  {
    "url": "categories/index.html",
    "revision": "767a0625ccdfe2212796ac5a5cc09916"
  },
  {
    "url": "demo.html",
    "revision": "1b9dacad7bbcb6d0b87ba246394c84fd"
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
    "revision": "8f31ec2e507db021c3f2abf205592a24"
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
    "revision": "72f0308d3ab487e5ba3a6f8d9e374e8d"
  },
  {
    "url": "philosophy/enlightenment/enlightenment.html",
    "revision": "756c62300c9a06c9b63e2da2016d8832"
  },
  {
    "url": "philosophy/enlightenment/GermanIdealism.html",
    "revision": "fd38f866af7583b0a1b1bd740a75f064"
  },
  {
    "url": "philosophy/enlightenment/Hume.html",
    "revision": "78278d48261592b54d24fdd5124ca657"
  },
  {
    "url": "philosophy/enlightenment/index.html",
    "revision": "327feffbdbdda0274ef7ea4b5defea3b"
  },
  {
    "url": "philosophy/enlightenment/Kant.html",
    "revision": "101698d222f3463ab4a96e5ab949ddf7"
  },
  {
    "url": "philosophy/enlightenment/Locke.html",
    "revision": "c2749b36527ebdd41caf094356ac279f"
  },
  {
    "url": "philosophy/enlightenment/Rousseau.html",
    "revision": "ddf8cc65d6c942d2c1e970af8a749ad2"
  },
  {
    "url": "philosophy/man&gad/index.html",
    "revision": "d7dc8cfee0840f263d7464751043a0e8"
  },
  {
    "url": "philosophy/man&gad/patristic-philosophy.html",
    "revision": "f2f81126ed14a1b789c8f82479138678"
  },
  {
    "url": "philosophy/man&gad/philosophy-come-back.html",
    "revision": "7bd3b14da567fa3229cfb488b0417c9f"
  },
  {
    "url": "philosophy/man&gad/scholasticism.html",
    "revision": "a87c58d8ea443b7612f8d3cc838eeeb0"
  },
  {
    "url": "philosophy/origin/atomism&sophists.html",
    "revision": "c4304c96ff2644e484de9dc4e592b7b6"
  },
  {
    "url": "philosophy/origin/history-of-philosophy.html",
    "revision": "5c190e5f135d9c6729bf1c6297bd859f"
  },
  {
    "url": "philosophy/origin/index.html",
    "revision": "c6202d0af4c0d0212b0cdcf59a3b73a3"
  },
  {
    "url": "philosophy/origin/materialism-and-immaterialism.html",
    "revision": "a284e5c89c25b8ece24b24c3ff331646"
  },
  {
    "url": "philosophy/origin/origin-of-philosophy.html",
    "revision": "123d128197e5509d092f49e0cbf70bad"
  },
  {
    "url": "philosophy/origin/Socrates.html",
    "revision": "a816c6af2b27125db69c81765f73fc9d"
  },
  {
    "url": "philosophy/rationalism&empiricism/Aristotle.html",
    "revision": "557ed2fe3daccd3625855829293c7fcf"
  },
  {
    "url": "philosophy/rationalism&empiricism/index.html",
    "revision": "7a1342fb8b8aaed388d323b1d0b41f32"
  },
  {
    "url": "philosophy/reason/Descartes.html",
    "revision": "78e59c905076fdf4a7abf622fde2958e"
  },
  {
    "url": "philosophy/reason/index.html",
    "revision": "810b7935f123f82477b233d94c428293"
  },
  {
    "url": "philosophy/reason/Leibnitz.html",
    "revision": "20410d0ffc007d3469fdca41fb6899ef"
  },
  {
    "url": "philosophy/reason/Pascal.html",
    "revision": "98a13171fafd9b8f9ac7f07f7c56a86a"
  },
  {
    "url": "philosophy/reason/philo-sophia.html",
    "revision": "1167bf3074db00344048c89763025d16"
  },
  {
    "url": "philosophy/reason/reformation.html",
    "revision": "2842ce87f7603f7519c5a3f5aaeb9563"
  },
  {
    "url": "philosophy/reason/Spinoza.html",
    "revision": "3c364e0e183699f838ae329728962412"
  },
  {
    "url": "philosophy/self-settle/end-of-Greek.html",
    "revision": "8c1b001bbaa9e8c382b4c07e43dc79a9"
  },
  {
    "url": "philosophy/self-settle/hedonism.html",
    "revision": "d18a751bba8e72caf504c02b6faa983b"
  },
  {
    "url": "philosophy/self-settle/index.html",
    "revision": "17095a7b0f96fd6318324db6316cf047"
  },
  {
    "url": "philosophy/self-settle/scepticism.html",
    "revision": "402e05bd5e2b52277fbd197ac3e85e2d"
  },
  {
    "url": "philosophy/self-settle/stoa.html",
    "revision": "21431bc14d728bee3d687318e692f407"
  },
  {
    "url": "tag/index.html",
    "revision": "569a970f631794c22cff967dab6f8e9f"
  },
  {
    "url": "timeline/index.html",
    "revision": "6cdc53c59b6798d767af69e701788c7f"
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
