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
    "revision": "88ebc94ce52c2d2954afdcc1c3ca818f"
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
    "url": "assets/js/13.7683bdae.js",
    "revision": "d088d7cc26839f7fa46e9dab99dbc9f6"
  },
  {
    "url": "assets/js/14.837bb163.js",
    "revision": "ae8e27ca6066373e90f1a72342f9453c"
  },
  {
    "url": "assets/js/15.49acbac2.js",
    "revision": "55148051f6f400ae8723937054690b7c"
  },
  {
    "url": "assets/js/16.8d6c04f6.js",
    "revision": "20548b1e5051d333948f3ab3984af808"
  },
  {
    "url": "assets/js/17.46f7bd6b.js",
    "revision": "8ebfaab9dd5d84681e7c7f5cdc7b517c"
  },
  {
    "url": "assets/js/18.fc8565a8.js",
    "revision": "27ba34ecd110da99a03fbe739c45cff6"
  },
  {
    "url": "assets/js/19.ef082c0b.js",
    "revision": "5acb7b2d06f06d72edd97341453e66b8"
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
    "url": "assets/js/app.14cbc3ac.js",
    "revision": "293793efba8df7bc66b6e63ec76148ec"
  },
  {
    "url": "categories/index.html",
    "revision": "7531d6cb429e6cfe131b086e172511f4"
  },
  {
    "url": "demo.html",
    "revision": "a58b41ccb7e04372e29b2e27ef2ccff7"
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
    "revision": "d8b4dcef6199e6c3908040cd4f752134"
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
    "revision": "3119a4f57c30bae060b17ae21ffc0d5d"
  },
  {
    "url": "philosophy/enlightenment/enlightenment.html",
    "revision": "9fc6917acbd511c8e9bbf32b6490b738"
  },
  {
    "url": "philosophy/enlightenment/GermanIdealism.html",
    "revision": "a2aefd9d8a31b862db9a91bdf28dd64b"
  },
  {
    "url": "philosophy/enlightenment/Hume.html",
    "revision": "62d793734aff3701b29462ec7c33bb54"
  },
  {
    "url": "philosophy/enlightenment/index.html",
    "revision": "2025d25b2d18d8b1f06ed63462a1bbd7"
  },
  {
    "url": "philosophy/enlightenment/Kant.html",
    "revision": "8bba91cfb13f92f67477780998a5cae2"
  },
  {
    "url": "philosophy/enlightenment/Locke.html",
    "revision": "84fc6956e82863409709e86336c1d387"
  },
  {
    "url": "philosophy/enlightenment/Marx.html",
    "revision": "95d16b60b336d6f756515754cc84ff47"
  },
  {
    "url": "philosophy/enlightenment/pessimism.html",
    "revision": "20020c3e25b4b634f4aff16103b30794"
  },
  {
    "url": "philosophy/enlightenment/Rousseau.html",
    "revision": "7a867330c54036022ae3ac2e7383ca17"
  },
  {
    "url": "philosophy/man&gad/index.html",
    "revision": "bf40c3d9dfa371098ea7e9c21ae94630"
  },
  {
    "url": "philosophy/man&gad/patristic-philosophy.html",
    "revision": "f459127a2762569b9e598970a280c11c"
  },
  {
    "url": "philosophy/man&gad/philosophy-come-back.html",
    "revision": "90d360d3b4f26e6d1560162c998ededb"
  },
  {
    "url": "philosophy/man&gad/scholasticism.html",
    "revision": "aac057842727f9e25d6921f9f8991be8"
  },
  {
    "url": "philosophy/origin/atomism&sophists.html",
    "revision": "431c3f82ac01ef1dd63fc9d63d8cd703"
  },
  {
    "url": "philosophy/origin/history-of-philosophy.html",
    "revision": "76db01bd0b44d4843d0170d8b0b28e72"
  },
  {
    "url": "philosophy/origin/index.html",
    "revision": "a888f8d89748fed702ca9b1496f0e650"
  },
  {
    "url": "philosophy/origin/materialism-and-immaterialism.html",
    "revision": "d1e5d41e9c65e23775be410d576bed29"
  },
  {
    "url": "philosophy/origin/origin-of-philosophy.html",
    "revision": "f73c249d57649251d5bfefb2d7c40a4c"
  },
  {
    "url": "philosophy/origin/Socrates.html",
    "revision": "91b5e14e9b6f1c08b1fb65da1c7a5b6d"
  },
  {
    "url": "philosophy/rationalism&empiricism/Aristotle.html",
    "revision": "c42a8ea96f73e475120cf4e5004446f3"
  },
  {
    "url": "philosophy/rationalism&empiricism/index.html",
    "revision": "92b5909f087242717b6867c67f57f51e"
  },
  {
    "url": "philosophy/reason/Descartes.html",
    "revision": "ce7e4f6e53ecc093ebf689e12d45285a"
  },
  {
    "url": "philosophy/reason/index.html",
    "revision": "a328e2e2d3b4f88514479393a1d3cce4"
  },
  {
    "url": "philosophy/reason/Leibnitz.html",
    "revision": "4532986aa9e643ed7000b1ea6927999f"
  },
  {
    "url": "philosophy/reason/Pascal.html",
    "revision": "57af1e4c5af9f42f0b0d13efc979ea00"
  },
  {
    "url": "philosophy/reason/philo-sophia.html",
    "revision": "2dd88ae93160a676870f3282f434098b"
  },
  {
    "url": "philosophy/reason/reformation.html",
    "revision": "5cb60129c227010680e7ef6c68d790d2"
  },
  {
    "url": "philosophy/reason/Spinoza.html",
    "revision": "bfc509054b114134e53ddf5204ecc71e"
  },
  {
    "url": "philosophy/self-settle/end-of-Greek.html",
    "revision": "de88763198cc1b1533e1ecedd84bc464"
  },
  {
    "url": "philosophy/self-settle/hedonism.html",
    "revision": "2f66285b288186fc13b60c6ce363c687"
  },
  {
    "url": "philosophy/self-settle/index.html",
    "revision": "8a925719da5a270ab53f6b46349780b1"
  },
  {
    "url": "philosophy/self-settle/scepticism.html",
    "revision": "2995eec583f5fd4e0769b180bae7cf4f"
  },
  {
    "url": "philosophy/self-settle/stoa.html",
    "revision": "7047017f509d5e70163b910f78e7024a"
  },
  {
    "url": "tag/index.html",
    "revision": "57e6a9bdcff7f32f48f9503692d2293e"
  },
  {
    "url": "timeline/index.html",
    "revision": "bb03183b088d74d8e437021767927d63"
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
