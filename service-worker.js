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
    "revision": "29a022665c5e3b74f51a7326552ad114"
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
    "url": "assets/js/10.023c5b12.js",
    "revision": "2c7636845572da33d445140c575fc0df"
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
    "url": "assets/js/18.edd34f8f.js",
    "revision": "c37ab3e5fcebab8eac20d64775569652"
  },
  {
    "url": "assets/js/19.af600c44.js",
    "revision": "0a972551acfc3392abf47cd3230fe499"
  },
  {
    "url": "assets/js/20.e701d84c.js",
    "revision": "d2d0f22813835ae63e486367d938978c"
  },
  {
    "url": "assets/js/21.5d2fd384.js",
    "revision": "8d65b08d7a17520a64dbd2fe4546565b"
  },
  {
    "url": "assets/js/22.55c30499.js",
    "revision": "d2857b64b7ec0489ab8f3379f1cace4b"
  },
  {
    "url": "assets/js/23.70ea0c61.js",
    "revision": "202d36706cd01c122e4c1e7364c97a59"
  },
  {
    "url": "assets/js/24.7ff80738.js",
    "revision": "af7286e87158427d64c5b96384abbba7"
  },
  {
    "url": "assets/js/25.d58afe9b.js",
    "revision": "fc68e5592c31297bd38740b2a9380866"
  },
  {
    "url": "assets/js/26.f766e79a.js",
    "revision": "dad0215d50ff06f095d0e98ad367d202"
  },
  {
    "url": "assets/js/27.c6686a78.js",
    "revision": "7c759d0151f7560c47e2d23b0ce5caa8"
  },
  {
    "url": "assets/js/28.fa06d306.js",
    "revision": "8e9447337eeb4fc8ffd9ee4d60bf8942"
  },
  {
    "url": "assets/js/29.531af918.js",
    "revision": "436b4d12d80181dcfc841a124cd71e05"
  },
  {
    "url": "assets/js/3.755c60df.js",
    "revision": "fefd6c8a843b27d923c1cd2d1bd95d8e"
  },
  {
    "url": "assets/js/30.074007f1.js",
    "revision": "f13d1fefa7b32810719da234830184fb"
  },
  {
    "url": "assets/js/31.5f2d5adc.js",
    "revision": "f79e48b19fc729144d44b90f3f88718a"
  },
  {
    "url": "assets/js/32.f26ef39b.js",
    "revision": "9e5b9a43a7629890cc1ebf2ec83c33a5"
  },
  {
    "url": "assets/js/33.391d302c.js",
    "revision": "ee877b7c5abb8ab82963de291c94196c"
  },
  {
    "url": "assets/js/34.ccd5e063.js",
    "revision": "7938acbe2fdab761036d70d279d68c08"
  },
  {
    "url": "assets/js/35.798cd07b.js",
    "revision": "b910660672c1be29fab8b360aaa77cdb"
  },
  {
    "url": "assets/js/36.8bdd310b.js",
    "revision": "1d459617aea7853816a662dd4e07be83"
  },
  {
    "url": "assets/js/37.47ea95a2.js",
    "revision": "b0e0feef761dbe85409a5cab186edefa"
  },
  {
    "url": "assets/js/38.c588ed59.js",
    "revision": "e5d51c826433a712e1fbf6c89aa129dc"
  },
  {
    "url": "assets/js/39.f236dc1c.js",
    "revision": "21d3432daed3b9248c97361d11ca5503"
  },
  {
    "url": "assets/js/4.bbd2939d.js",
    "revision": "65bf447d797e6e2fa618bbfff3eb034b"
  },
  {
    "url": "assets/js/40.3e08821b.js",
    "revision": "02f20d884982d88ddc7080d9318ad0ef"
  },
  {
    "url": "assets/js/41.7c2a6536.js",
    "revision": "79cee655305cd28b1d6ee3e86557a23c"
  },
  {
    "url": "assets/js/42.f50e1934.js",
    "revision": "6be2bdd02ac79970c4a733381ebc54a6"
  },
  {
    "url": "assets/js/43.d76a1c67.js",
    "revision": "21254b557dda5b74c58ab53a83f8e0b2"
  },
  {
    "url": "assets/js/44.53ace6f8.js",
    "revision": "71969a4065e8d90e316fd63708286432"
  },
  {
    "url": "assets/js/45.0ff20879.js",
    "revision": "fd6c766f04c72c951ff730298aeab669"
  },
  {
    "url": "assets/js/46.a75145f6.js",
    "revision": "c83fb887cd4e160379dc7b649539457b"
  },
  {
    "url": "assets/js/47.a38e54fe.js",
    "revision": "03438ee86a53cd2b0936987ed840cdac"
  },
  {
    "url": "assets/js/48.4045de39.js",
    "revision": "28bf07cd8f0acda3295f876ae45b103d"
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
    "url": "assets/js/app.e6a91b48.js",
    "revision": "860f2da24585c15ddecde3ddb1b28168"
  },
  {
    "url": "categories/index.html",
    "revision": "e57f5d471ccfbc4755018b8ea493e693"
  },
  {
    "url": "demo.html",
    "revision": "b33477e24d3c7de9cad42daaa00e4cf3"
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
    "revision": "96f15b8c239182142bca18c8d869134d"
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
    "revision": "e468c52602e3f964d5b10e9e863caf98"
  },
  {
    "url": "philosophy/enlightenment/enlightenment.html",
    "revision": "061f22036c003eca459d65e9dd32ccf7"
  },
  {
    "url": "philosophy/enlightenment/GermanIdealism.html",
    "revision": "c5220629cf1104b3c50b8a47563cb96b"
  },
  {
    "url": "philosophy/enlightenment/Hume.html",
    "revision": "f158f713e30afa0c4c884d8b4e5ffc84"
  },
  {
    "url": "philosophy/enlightenment/index.html",
    "revision": "adee15937216685742692d292213f1b1"
  },
  {
    "url": "philosophy/enlightenment/Kant.html",
    "revision": "5bd06eff4567cc62877c54aaafabb092"
  },
  {
    "url": "philosophy/enlightenment/Locke.html",
    "revision": "4c098f9804bc366ff9ece946d0955386"
  },
  {
    "url": "philosophy/enlightenment/Marx.html",
    "revision": "92b4d05580c0f25cc10cea9c654d4720"
  },
  {
    "url": "philosophy/enlightenment/pessimism.html",
    "revision": "a57fba97aa710c0e53224d185a600769"
  },
  {
    "url": "philosophy/enlightenment/Rousseau.html",
    "revision": "5b2db6b4ef67245b350a3f8673b89437"
  },
  {
    "url": "philosophy/man&gad/index.html",
    "revision": "012ea276229d94699b491eccbc29c8a0"
  },
  {
    "url": "philosophy/man&gad/patristic-philosophy.html",
    "revision": "e741cca553ac16c2e7b369de2270cb33"
  },
  {
    "url": "philosophy/man&gad/philosophy-come-back.html",
    "revision": "e4614d6fa60c82ab9735ee37cc52760f"
  },
  {
    "url": "philosophy/man&gad/scholasticism.html",
    "revision": "7dee12ea291b5fd13e8ffe74a2acd367"
  },
  {
    "url": "philosophy/origin/atomism&sophists.html",
    "revision": "61c89e58da6c97ae3d8535d73931c1b6"
  },
  {
    "url": "philosophy/origin/history-of-philosophy.html",
    "revision": "df60994cb3d4fad26f1d45f73569b735"
  },
  {
    "url": "philosophy/origin/index.html",
    "revision": "0006f2de4632a4dc1409430b2bbd008a"
  },
  {
    "url": "philosophy/origin/materialism-and-immaterialism.html",
    "revision": "8221faf4f69c364a53a4393f77582415"
  },
  {
    "url": "philosophy/origin/origin-of-philosophy.html",
    "revision": "8a200394b909f594cce3a9973a9f8855"
  },
  {
    "url": "philosophy/origin/Socrates.html",
    "revision": "dbb0b837cc75f0ad77a67d11f908e382"
  },
  {
    "url": "philosophy/rationalism&empiricism/Aristotle.html",
    "revision": "1dc8e33264f27f13f6305d35ac9fb4a8"
  },
  {
    "url": "philosophy/rationalism&empiricism/index.html",
    "revision": "6a67ffefc06ccd9d6dd5a7c8c0676bca"
  },
  {
    "url": "philosophy/reason/Descartes.html",
    "revision": "a36b5823d17dc3a5627cf07322844bb3"
  },
  {
    "url": "philosophy/reason/index.html",
    "revision": "8a1c949a2c7ab591ab95331f72d07f00"
  },
  {
    "url": "philosophy/reason/Leibnitz.html",
    "revision": "85574679e25ea8660b459df5eb08b112"
  },
  {
    "url": "philosophy/reason/Pascal.html",
    "revision": "152b47ac0bde493e2ed92d36d8805ed1"
  },
  {
    "url": "philosophy/reason/philo-sophia.html",
    "revision": "9582ee549181050b6caed1114fc26eda"
  },
  {
    "url": "philosophy/reason/reformation.html",
    "revision": "29afe762403d265aa42039ce7b95dff1"
  },
  {
    "url": "philosophy/reason/Spinoza.html",
    "revision": "2cd2f6e4a37f7e872e0aa956dff10b67"
  },
  {
    "url": "philosophy/self-settle/end-of-Greek.html",
    "revision": "a508d2ad065c8dd7c87f01d12e7216f8"
  },
  {
    "url": "philosophy/self-settle/hedonism.html",
    "revision": "18bf330392dacac2fe90871d1c2c455d"
  },
  {
    "url": "philosophy/self-settle/index.html",
    "revision": "d8c2dfd7c7772c0189503f461932a181"
  },
  {
    "url": "philosophy/self-settle/scepticism.html",
    "revision": "2ee76106cc63eb7fd8ed71d8717203bf"
  },
  {
    "url": "philosophy/self-settle/stoa.html",
    "revision": "15a4dde4fd5a6eb42409435bc67f8d27"
  },
  {
    "url": "tag/index.html",
    "revision": "7dd1b2d5d018b8421eea6c9f92167e8c"
  },
  {
    "url": "timeline/index.html",
    "revision": "54a4bf37138a24dc8e10f944586908db"
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
