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
    "revision": "907aa46e700b7c8d60e755d48bc2cfe8"
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
    "url": "assets/js/11.e1b5865c.js",
    "revision": "9f8a6095df6ca17233f0e2ce82fd0969"
  },
  {
    "url": "assets/js/12.11d15ae1.js",
    "revision": "f8c5d3da7285e88f391988852d14e5c0"
  },
  {
    "url": "assets/js/13.03948b9f.js",
    "revision": "84d3ac4ed68c98db7a997ec5508256b4"
  },
  {
    "url": "assets/js/14.a84152c9.js",
    "revision": "fa4a013e91ff9da7b4539ee35c7dd99a"
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
    "url": "assets/js/app.355ec609.js",
    "revision": "633859be0d284bf93a34e1451e7170c2"
  },
  {
    "url": "categories/index.html",
    "revision": "722c88f07d5231869f49ff019c5f4169"
  },
  {
    "url": "demo.html",
    "revision": "7bcf3c9004b86fd1b6542fc34a7d06ec"
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
    "revision": "0e46f554fcc67e24f9958665249c4a0d"
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
    "revision": "1d68066caed0b6ce3f10a72c32f8bf02"
  },
  {
    "url": "philosophy/enlightenment/enlightenment.html",
    "revision": "9797174ddf8e5e89524e4efeabee337e"
  },
  {
    "url": "philosophy/enlightenment/GermanIdealism.html",
    "revision": "62e317dd7f7e439c6d2c54b9448c157d"
  },
  {
    "url": "philosophy/enlightenment/Hume.html",
    "revision": "73823c5c7db90d6caecfd9dfcb00de34"
  },
  {
    "url": "philosophy/enlightenment/index.html",
    "revision": "e6020c76b7689b6d9fa9401c11e76c3e"
  },
  {
    "url": "philosophy/enlightenment/Kant.html",
    "revision": "22c248a2ca94c3725bdaea846308673e"
  },
  {
    "url": "philosophy/enlightenment/Locke.html",
    "revision": "41604cb5a44c771321277b4890468321"
  },
  {
    "url": "philosophy/enlightenment/Rousseau.html",
    "revision": "6eab01d3b4a55fe30efae15fc9178085"
  },
  {
    "url": "philosophy/man&gad/index.html",
    "revision": "15ed7082b16e67b97a22f430cded2003"
  },
  {
    "url": "philosophy/man&gad/patristic-philosophy.html",
    "revision": "ba9090c6add7e3965151a4617d76ef2c"
  },
  {
    "url": "philosophy/man&gad/philosophy-come-back.html",
    "revision": "45418192c22dead33a69c96220c0aa4f"
  },
  {
    "url": "philosophy/man&gad/scholasticism.html",
    "revision": "55b708fd0e7ab786a6f3cd8e5d104dec"
  },
  {
    "url": "philosophy/origin/atomism&sophists.html",
    "revision": "a75aefc1232b0d6d62165cac1887565b"
  },
  {
    "url": "philosophy/origin/history-of-philosophy.html",
    "revision": "d29adaf5c2c08a6091528b464d236f07"
  },
  {
    "url": "philosophy/origin/index.html",
    "revision": "08220f1110839a5a8e0d974bfc657a20"
  },
  {
    "url": "philosophy/origin/materialism-and-immaterialism.html",
    "revision": "b13e6da1aee1a58fc12f4cd64aee39d6"
  },
  {
    "url": "philosophy/origin/origin-of-philosophy.html",
    "revision": "2e1f476674adf40abfe250aa2593a1a3"
  },
  {
    "url": "philosophy/origin/Socrates.html",
    "revision": "234c5df74ad783fb5c9209d2419328db"
  },
  {
    "url": "philosophy/rationalism&empiricism/Aristotle.html",
    "revision": "a68036be669069ef0c03d4587d80119c"
  },
  {
    "url": "philosophy/rationalism&empiricism/index.html",
    "revision": "d82dff194191aaa871869ce7d6b37ad8"
  },
  {
    "url": "philosophy/reason/Descartes.html",
    "revision": "fa96656d76463f47e1a88e7155784028"
  },
  {
    "url": "philosophy/reason/index.html",
    "revision": "62066145bd97e1b2e91455dc739b7b3c"
  },
  {
    "url": "philosophy/reason/Leibnitz.html",
    "revision": "8b5d32e7b6cb43bd2c4679d35d38ab2b"
  },
  {
    "url": "philosophy/reason/Pascal.html",
    "revision": "8aebfe83ddee6c0ec1236868a01361f8"
  },
  {
    "url": "philosophy/reason/philo-sophia.html",
    "revision": "e9557e7b4fb66243dac1216990ac0816"
  },
  {
    "url": "philosophy/reason/reformation.html",
    "revision": "d42b3b4056c7310802be2e9630a6a4ca"
  },
  {
    "url": "philosophy/reason/Spinoza.html",
    "revision": "485363e13bf08b279c081064e518c8ff"
  },
  {
    "url": "philosophy/self-settle/end-of-Greek.html",
    "revision": "9d1b834a1797f362537d6730cd46dd6f"
  },
  {
    "url": "philosophy/self-settle/hedonism.html",
    "revision": "93b2a9a188d542fb6828988c83f2fdbc"
  },
  {
    "url": "philosophy/self-settle/index.html",
    "revision": "1825a0ec95dc338f5892fb95cd6df61b"
  },
  {
    "url": "philosophy/self-settle/scepticism.html",
    "revision": "fbed7f21eebe3c9d1f7db75c2e8aa2b6"
  },
  {
    "url": "philosophy/self-settle/stoa.html",
    "revision": "ea5d7bb84e4adb90d6aec7e152864ce5"
  },
  {
    "url": "tag/index.html",
    "revision": "fa7060f33c6ed558796e7f6ec4ffa5e3"
  },
  {
    "url": "timeline/index.html",
    "revision": "395ae6b38991cb84292a93cafe117fbf"
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
