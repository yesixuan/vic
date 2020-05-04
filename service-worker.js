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
    "revision": "dad16801a6910c6c980f693d52b368c4"
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
    "url": "assets/js/18.ef404a77.js",
    "revision": "169779478a4d3304431a71ade2bf73bb"
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
    "url": "assets/js/app.1625a210.js",
    "revision": "d195a9021fe23e6d25c8fa01b843ce95"
  },
  {
    "url": "categories/index.html",
    "revision": "7606d821530430f52b0585253b3dff1d"
  },
  {
    "url": "demo.html",
    "revision": "4e07d77ee4084efecb2d209b19bab797"
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
    "revision": "ae3aa84e058883e816f2c8e9582500dc"
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
    "revision": "7b74bc4e48795a54bedcbb2e6bf5dfaf"
  },
  {
    "url": "philosophy/enlightenment/enlightenment.html",
    "revision": "dd24ba68671c91eae7fbd9b7dbe84747"
  },
  {
    "url": "philosophy/enlightenment/GermanIdealism.html",
    "revision": "e880d984565e539827abe844a44c592a"
  },
  {
    "url": "philosophy/enlightenment/Hume.html",
    "revision": "9f3f10a2146922d0cec9cb9a24f7d9e8"
  },
  {
    "url": "philosophy/enlightenment/index.html",
    "revision": "296fecacc8481bca16c771975d846d28"
  },
  {
    "url": "philosophy/enlightenment/Kant.html",
    "revision": "7f1d16f6a4e148f27d456f73f5c32528"
  },
  {
    "url": "philosophy/enlightenment/Locke.html",
    "revision": "56da36d5544fc185d9a3263757145d0d"
  },
  {
    "url": "philosophy/enlightenment/Marx.html",
    "revision": "9e2f1e36c218f5934aa462bf328ecf94"
  },
  {
    "url": "philosophy/enlightenment/pessimism.html",
    "revision": "9f38eb01200ab767b3160e78efe8a682"
  },
  {
    "url": "philosophy/enlightenment/Rousseau.html",
    "revision": "8be331af7acb3b3b022ea0275c84bbad"
  },
  {
    "url": "philosophy/man&gad/index.html",
    "revision": "7ae5ff2140c2482a378c60a091212e06"
  },
  {
    "url": "philosophy/man&gad/patristic-philosophy.html",
    "revision": "6211d334e33f69e0db369fa22a999d25"
  },
  {
    "url": "philosophy/man&gad/philosophy-come-back.html",
    "revision": "4d56fa761c9688875524a20f482a5d2f"
  },
  {
    "url": "philosophy/man&gad/scholasticism.html",
    "revision": "d09287ddaf963c6507d751f70e8dfdcc"
  },
  {
    "url": "philosophy/origin/atomism&sophists.html",
    "revision": "14c40502f6b70b89b0e6c021507d4876"
  },
  {
    "url": "philosophy/origin/history-of-philosophy.html",
    "revision": "e8de7849dce23db4c204e816a411d561"
  },
  {
    "url": "philosophy/origin/index.html",
    "revision": "22fbd607f9c89ba091a5c12d517b0022"
  },
  {
    "url": "philosophy/origin/materialism-and-immaterialism.html",
    "revision": "6cf2f11b2f3e484bdccafb5fa86173dc"
  },
  {
    "url": "philosophy/origin/origin-of-philosophy.html",
    "revision": "1ebac9eed8753686663187db6fdf787c"
  },
  {
    "url": "philosophy/origin/Socrates.html",
    "revision": "b3f137b89f7093b21e8e4cf4d452c257"
  },
  {
    "url": "philosophy/rationalism&empiricism/Aristotle.html",
    "revision": "d1f9066a69ca412139a3fd915179a36d"
  },
  {
    "url": "philosophy/rationalism&empiricism/index.html",
    "revision": "59dc213e4751096f3b7b421c726cd1f5"
  },
  {
    "url": "philosophy/reason/Descartes.html",
    "revision": "0cb0548b78639b3d94fb6c21bb41a02f"
  },
  {
    "url": "philosophy/reason/index.html",
    "revision": "3b8e9304f21225bece160a9d2c3e412b"
  },
  {
    "url": "philosophy/reason/Leibnitz.html",
    "revision": "6b59e2d08aeea356590430c858cfb476"
  },
  {
    "url": "philosophy/reason/Pascal.html",
    "revision": "f1dc3a62e186a8a8f4cf5a1573ae6318"
  },
  {
    "url": "philosophy/reason/philo-sophia.html",
    "revision": "c22625382307b4fc75e0e6b64ded8dec"
  },
  {
    "url": "philosophy/reason/reformation.html",
    "revision": "725b52814fb4f94d54cff63294fdfc2c"
  },
  {
    "url": "philosophy/reason/Spinoza.html",
    "revision": "71990c9ae99e619cceaf209e44d8a1a1"
  },
  {
    "url": "philosophy/self-settle/end-of-Greek.html",
    "revision": "90f76ee87870f45547814a32b4c5af6f"
  },
  {
    "url": "philosophy/self-settle/hedonism.html",
    "revision": "e2d36f15554da223f9e92c5e6c83aa19"
  },
  {
    "url": "philosophy/self-settle/index.html",
    "revision": "461c1a024d5150c80a173e0863d92117"
  },
  {
    "url": "philosophy/self-settle/scepticism.html",
    "revision": "817cf6d7c6f65d5e7245a0de95670492"
  },
  {
    "url": "philosophy/self-settle/stoa.html",
    "revision": "4063e90219501575b60223897e0cc670"
  },
  {
    "url": "tag/index.html",
    "revision": "b6eb56bbdf92b977f990a86e317630c8"
  },
  {
    "url": "timeline/index.html",
    "revision": "9b5a3fd813339ae8df1f113820a37118"
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
