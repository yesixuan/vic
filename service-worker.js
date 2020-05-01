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
    "revision": "5257d95210511ce8d55670fe75440c04"
  },
  {
    "url": "assets/css/0.styles.5af29c1f.css",
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
    "url": "assets/js/1.b8f953ba.js",
    "revision": "5dba9bdb0f3d5188be62088cf4060709"
  },
  {
    "url": "assets/js/10.a1ba4c5f.js",
    "revision": "0827aea77ff2fc67e9270bcc41b0073f"
  },
  {
    "url": "assets/js/11.656e41bd.js",
    "revision": "45f10c01d6e30b889cd34cacd29b9b80"
  },
  {
    "url": "assets/js/12.11d15ae1.js",
    "revision": "f8c5d3da7285e88f391988852d14e5c0"
  },
  {
    "url": "assets/js/13.68aad903.js",
    "revision": "c80e1a387e4641312de95da1bd4d16b1"
  },
  {
    "url": "assets/js/14.00addeea.js",
    "revision": "d3c43d236be2c6223e6ae88111c1bdcd"
  },
  {
    "url": "assets/js/15.19396b85.js",
    "revision": "4b297c365198a92800c20afcb367a1fb"
  },
  {
    "url": "assets/js/16.ec215a69.js",
    "revision": "288534ad45967fe84d24cf14fb14fe47"
  },
  {
    "url": "assets/js/17.b7b1d6d5.js",
    "revision": "e11bc0ccaffde54bc06c88cb93d6c7e6"
  },
  {
    "url": "assets/js/18.8e09a9f9.js",
    "revision": "567da02f36b12adacee9e0de55f8fe99"
  },
  {
    "url": "assets/js/19.524a16f9.js",
    "revision": "89827ed257b5be88e30bef5eaafb1117"
  },
  {
    "url": "assets/js/20.e4f2b0c4.js",
    "revision": "8b361fec908edee624fae2e038dc6d18"
  },
  {
    "url": "assets/js/21.340bf920.js",
    "revision": "b132debf06e086addf6f2e556d35bbb6"
  },
  {
    "url": "assets/js/22.a090e04c.js",
    "revision": "98b39a7c06847b78372cb0f18f6c9628"
  },
  {
    "url": "assets/js/23.0a346a9d.js",
    "revision": "754329df4e2f3c9038a83a4b0f243941"
  },
  {
    "url": "assets/js/24.9cd240c7.js",
    "revision": "7fdfa1b779806ade4c0a133e512d0259"
  },
  {
    "url": "assets/js/25.8810486a.js",
    "revision": "bcb2a47e7c25b56d248e52dfdde4c162"
  },
  {
    "url": "assets/js/26.ae6e2b74.js",
    "revision": "f6ad91c86445f9e048892683efd00da3"
  },
  {
    "url": "assets/js/27.0a6a0305.js",
    "revision": "c76c036448267bdd64921e89c34756ea"
  },
  {
    "url": "assets/js/28.012af4fb.js",
    "revision": "865e6d0574303a6920e723b0aacd3634"
  },
  {
    "url": "assets/js/29.bca2cb47.js",
    "revision": "c8dfdb62e31b56929155ca54112a8aef"
  },
  {
    "url": "assets/js/3.755c60df.js",
    "revision": "fefd6c8a843b27d923c1cd2d1bd95d8e"
  },
  {
    "url": "assets/js/30.d392e2ca.js",
    "revision": "18180385c840c7833708a992f189bbf0"
  },
  {
    "url": "assets/js/31.75b062d0.js",
    "revision": "8c659c184976b3b3d71464b5ab506059"
  },
  {
    "url": "assets/js/32.5518e645.js",
    "revision": "b08ba87f6685b47a088554490f44c389"
  },
  {
    "url": "assets/js/33.215ccdc8.js",
    "revision": "943fcf42a6e4d788866b1accfdfbf9e8"
  },
  {
    "url": "assets/js/34.eedc70ea.js",
    "revision": "c3d6bdcc0dfa33ae5197d094e5f3589a"
  },
  {
    "url": "assets/js/35.987cb5b9.js",
    "revision": "b214092f9e2381b7a12bf3b57d3851dd"
  },
  {
    "url": "assets/js/36.2e882c92.js",
    "revision": "61622a15dc1fec6c16a5b2fdc628b3a6"
  },
  {
    "url": "assets/js/37.1e688e04.js",
    "revision": "d1037f08247028b3aa19082586ce59a2"
  },
  {
    "url": "assets/js/38.08a6e2b4.js",
    "revision": "fc3faa6177651725355243d31e705fa8"
  },
  {
    "url": "assets/js/39.5255aa75.js",
    "revision": "3d5e26610d21ce70f50bb13f2db152db"
  },
  {
    "url": "assets/js/4.bbd2939d.js",
    "revision": "65bf447d797e6e2fa618bbfff3eb034b"
  },
  {
    "url": "assets/js/40.d5916f9b.js",
    "revision": "50817aebda9c102a4a64ed43383e1449"
  },
  {
    "url": "assets/js/41.f5a0af48.js",
    "revision": "313c39d94def5634f5fe10b594995bc0"
  },
  {
    "url": "assets/js/42.ac2075a1.js",
    "revision": "c15b1f7ee9afdab9793de86033d1eb35"
  },
  {
    "url": "assets/js/43.aec0f796.js",
    "revision": "9fb0d89d2e8e13dc4aee7e8a8ebc5ac1"
  },
  {
    "url": "assets/js/44.f807c9c9.js",
    "revision": "176efe1929390dabf30b2ca68c657892"
  },
  {
    "url": "assets/js/45.bf22730a.js",
    "revision": "3d069dfe873b7825a70260480e3320c7"
  },
  {
    "url": "assets/js/46.be527458.js",
    "revision": "5bb3f8d34a599b2a54b4d14e9d0f6577"
  },
  {
    "url": "assets/js/5.53a3cd81.js",
    "revision": "48a052670d6fe2a8aac7f20a9ef891c9"
  },
  {
    "url": "assets/js/6.bfcb87a0.js",
    "revision": "6d9e3b47c574aa62dc8c7323bafccdd6"
  },
  {
    "url": "assets/js/7.5eec7b38.js",
    "revision": "14dbf9bcc19aefb439a1a96691301f26"
  },
  {
    "url": "assets/js/8.5a31da0d.js",
    "revision": "d5d5fd8bdf1f48e8ee9b3ecd1a9692f2"
  },
  {
    "url": "assets/js/9.a731c7a5.js",
    "revision": "63a26484ef27dc6f55e2bd97bb8cf4e2"
  },
  {
    "url": "assets/js/app.ad778477.js",
    "revision": "85d0f5fc9a5be3b81818082cd3fc4b78"
  },
  {
    "url": "categories/index.html",
    "revision": "eb6371ba824bc6ba0c2e6d48622ed54d"
  },
  {
    "url": "demo.html",
    "revision": "05f9aea7a28e97cd205be0598917989c"
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
    "revision": "6739e7352f2b739f0165bcfb25d73e27"
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
    "revision": "15f5e7e93b6af13390a0bd7107de76a1"
  },
  {
    "url": "philosophy/enlightenment/enlightenment.html",
    "revision": "da7bdca0e52159cfd3dab4a7e1de69a9"
  },
  {
    "url": "philosophy/enlightenment/GermanIdealism.html",
    "revision": "be091c1d2bb216e0c69871c831b1841b"
  },
  {
    "url": "philosophy/enlightenment/Hume.html",
    "revision": "443cdd4f0cea839597fa3bfd7aca56a5"
  },
  {
    "url": "philosophy/enlightenment/index.html",
    "revision": "0f11cbaf1594797435301b7e148a23da"
  },
  {
    "url": "philosophy/enlightenment/Kant.html",
    "revision": "621b63ba8721472b1c394ffbc5ab0e3a"
  },
  {
    "url": "philosophy/enlightenment/Locke.html",
    "revision": "bffdb019650e0eccbb911e8135586071"
  },
  {
    "url": "philosophy/enlightenment/Rousseau.html",
    "revision": "f5fc9e68f9e674d83b8426bc07c17fe8"
  },
  {
    "url": "philosophy/man&gad/index.html",
    "revision": "dbf0638a6a40e9eb43497109f5702e63"
  },
  {
    "url": "philosophy/man&gad/patristic-philosophy.html",
    "revision": "7b50aec36440aacdbe2cfc362ada3329"
  },
  {
    "url": "philosophy/man&gad/philosophy-come-back.html",
    "revision": "d1696c5cb307fab195236d5af1dca5f4"
  },
  {
    "url": "philosophy/man&gad/scholasticism.html",
    "revision": "63759b071e19b5207d60e57ab597ca01"
  },
  {
    "url": "philosophy/origin/atomism&sophists.html",
    "revision": "77501ef5559372e240defb09ffa8273b"
  },
  {
    "url": "philosophy/origin/history-of-philosophy.html",
    "revision": "afc0a3586a61c68e0aae86890d4713bf"
  },
  {
    "url": "philosophy/origin/index.html",
    "revision": "2fab64ee693484c875043534c8e27c18"
  },
  {
    "url": "philosophy/origin/materialism-and-immaterialism.html",
    "revision": "8d56a419b395c3e9a0b1349ea82e3da8"
  },
  {
    "url": "philosophy/origin/origin-of-philosophy.html",
    "revision": "7556bdfb1fbb9cce6c72cee68cfffaca"
  },
  {
    "url": "philosophy/origin/Socrates.html",
    "revision": "3acab909fb0b519a0e1be944da4c9a68"
  },
  {
    "url": "philosophy/rationalism&empiricism/Aristotle.html",
    "revision": "6265041e17f5af6a4f44d0ce71d2b8ed"
  },
  {
    "url": "philosophy/rationalism&empiricism/index.html",
    "revision": "6614886dc70812aec468ea04dc8e9fe0"
  },
  {
    "url": "philosophy/reason/Descartes.html",
    "revision": "5786af19029bde34e7c13228b397f252"
  },
  {
    "url": "philosophy/reason/index.html",
    "revision": "11162e576e4c0ae9a827b28a0c0f42fa"
  },
  {
    "url": "philosophy/reason/Leibnitz.html",
    "revision": "1f814621cc88dee21d5eea26b0d959e2"
  },
  {
    "url": "philosophy/reason/Pascal.html",
    "revision": "0165b3c5c477c317c4118bd9fbce3294"
  },
  {
    "url": "philosophy/reason/philo-sophia.html",
    "revision": "ce4123255961c936bd2407bb7c16e284"
  },
  {
    "url": "philosophy/reason/reformation.html",
    "revision": "15edf107aeb807abbb0a3cd0a21e2fc4"
  },
  {
    "url": "philosophy/reason/Spinoza.html",
    "revision": "223559789037af5c82f66869b7bcd2d4"
  },
  {
    "url": "philosophy/self-settle/end-of-Greek.html",
    "revision": "65e60b37de41ec278e2310aa295dbeef"
  },
  {
    "url": "philosophy/self-settle/hedonism.html",
    "revision": "f434368f1aa8ec5ab92ad121642df174"
  },
  {
    "url": "philosophy/self-settle/index.html",
    "revision": "ba2ee95df0bde76d597bbfda3d5256ec"
  },
  {
    "url": "philosophy/self-settle/scepticism.html",
    "revision": "7749e8113c921b0d23657f88cefb1be2"
  },
  {
    "url": "philosophy/self-settle/stoa.html",
    "revision": "03b5ef6eda7c2e07f9d7478de931fbe3"
  },
  {
    "url": "tag/index.html",
    "revision": "9c9cca9fe7758de737a83f7d6c73ece6"
  },
  {
    "url": "timeline/index.html",
    "revision": "74cdf808e2c2a460bd30ff92ec7a633d"
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
