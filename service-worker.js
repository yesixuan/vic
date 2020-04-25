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
    "revision": "c831011d7dce2499996fe3b9bbd97f78"
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
    "url": "assets/js/17.5a65bdb1.js",
    "revision": "555994af5867ad3b5aa4326b03d8fc91"
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
    "url": "assets/js/app.9e375c39.js",
    "revision": "4802e1458fc4cc70b14f8b97e8707a88"
  },
  {
    "url": "categories/index.html",
    "revision": "bc750b7a8ae4dc90fe8b8d10b47470c1"
  },
  {
    "url": "demo.html",
    "revision": "f13e1d6605b578936e27cbb09fe6fc5b"
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
    "revision": "e7c0ee2da908dd1b7d30e72a6ecc7318"
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
    "revision": "639235f33aa536a81a17830e0c65ba77"
  },
  {
    "url": "philosophy/enlightenment/enlightenment.html",
    "revision": "f7ee3d148d5efb795a8eb6740a403ca6"
  },
  {
    "url": "philosophy/enlightenment/Hume.html",
    "revision": "7eafef9f4f0659636615f8aa8152b3c8"
  },
  {
    "url": "philosophy/enlightenment/index.html",
    "revision": "79563b683799ac3421e9866f1cf3e60e"
  },
  {
    "url": "philosophy/enlightenment/Locke.html",
    "revision": "b64b49fc5b11c7f67e561a77a726bc8a"
  },
  {
    "url": "philosophy/enlightenment/Rousseau.html",
    "revision": "854d3894d455337bce494f0529e486b0"
  },
  {
    "url": "philosophy/man&gad/index.html",
    "revision": "8a89c0a0f086b0a25f65d4cefc731cda"
  },
  {
    "url": "philosophy/man&gad/patristic-philosophy.html",
    "revision": "ccad1b7d19163526b02fab9df5fa3262"
  },
  {
    "url": "philosophy/man&gad/philosophy-come-back.html",
    "revision": "0bfa81e2d4aba5c82cd7d05a2ea8ef1b"
  },
  {
    "url": "philosophy/man&gad/scholasticism.html",
    "revision": "5e45343beda9f60f03e65a505df2102e"
  },
  {
    "url": "philosophy/origin/atomism&sophists.html",
    "revision": "bc4e056b7dc9f716f74e70b25ba32dcc"
  },
  {
    "url": "philosophy/origin/history-of-philosophy.html",
    "revision": "f034a365ab918a8f0ca88ff92f1c22fa"
  },
  {
    "url": "philosophy/origin/index.html",
    "revision": "6ee6e1825babb1ff890448a24209d006"
  },
  {
    "url": "philosophy/origin/materialism-and-immaterialism.html",
    "revision": "d88b8f5c2225d16199c76a571c33f11c"
  },
  {
    "url": "philosophy/origin/origin-of-philosophy.html",
    "revision": "7a9cb06bd80392438a4d7978019ddd24"
  },
  {
    "url": "philosophy/origin/Socrates.html",
    "revision": "6d840633d5cfd733c7a2abd973bbd88a"
  },
  {
    "url": "philosophy/rationalism&empiricism/Aristotle.html",
    "revision": "3e8e9508787e4ad649147888f75037df"
  },
  {
    "url": "philosophy/rationalism&empiricism/index.html",
    "revision": "3a17ec1a8f101baed57472e56bc4bf8a"
  },
  {
    "url": "philosophy/reason/Descartes.html",
    "revision": "1918f6436790509637dda6dbaa53b71c"
  },
  {
    "url": "philosophy/reason/index.html",
    "revision": "be99dfa26a2be47a982bc5ebdc81821f"
  },
  {
    "url": "philosophy/reason/Leibnitz.html",
    "revision": "a7be7ad85b4afce7cece1cd10f0c181e"
  },
  {
    "url": "philosophy/reason/Pascal.html",
    "revision": "15d7bc181c67192b0f2048fa410e8ac6"
  },
  {
    "url": "philosophy/reason/philo-sophia.html",
    "revision": "629fc08c4ddb922f52afb4bed092a1ae"
  },
  {
    "url": "philosophy/reason/reformation.html",
    "revision": "4f21019706fd4a6736efa4f171eae384"
  },
  {
    "url": "philosophy/reason/Spinoza.html",
    "revision": "d202c0fcbab2e8c55dbb3c2a308e4cc3"
  },
  {
    "url": "philosophy/self-settle/end-of-Greek.html",
    "revision": "f9a099bcc4f7de255a3c92c0af7589cc"
  },
  {
    "url": "philosophy/self-settle/hedonism.html",
    "revision": "75baffe48b181b699a3ffd3382e54d4d"
  },
  {
    "url": "philosophy/self-settle/index.html",
    "revision": "eaf8778b9858ee1d825b11147aa1b948"
  },
  {
    "url": "philosophy/self-settle/scepticism.html",
    "revision": "2b138b30c03b269cfa0aa9b5b27ed762"
  },
  {
    "url": "philosophy/self-settle/stoa.html",
    "revision": "860e5713bb275e0c6af6f902f20729d0"
  },
  {
    "url": "tag/index.html",
    "revision": "c135bdd7a8b6c9f7927c5b3b4d1da6d2"
  },
  {
    "url": "timeline/index.html",
    "revision": "adf316c10c92ee509d09de099f4b5625"
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
