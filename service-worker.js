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
    "revision": "dff537f2e802f832489675abee8f509c"
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
    "url": "assets/js/10.3609e71b.js",
    "revision": "0eab55f746fcc1745411279ccd698635"
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
    "url": "assets/js/17.1a8a65a0.js",
    "revision": "850eee45dec6c1ac3d02f02c0195069f"
  },
  {
    "url": "assets/js/18.a4de2ee4.js",
    "revision": "b55cd1b3d31017f7713c9d267d2256a0"
  },
  {
    "url": "assets/js/19.43ad112d.js",
    "revision": "a5947c4d0bb9b358b0fe7df8922b6d49"
  },
  {
    "url": "assets/js/20.92261580.js",
    "revision": "591c5f9d321e13107108ded54dc26ae7"
  },
  {
    "url": "assets/js/21.997ed814.js",
    "revision": "768e9dd1070a5ba4140283c291e910ef"
  },
  {
    "url": "assets/js/22.524bd918.js",
    "revision": "6c913c9a60fa52685250ac7e95eb6f22"
  },
  {
    "url": "assets/js/23.84a12ed6.js",
    "revision": "20b7b13f812d61db38291967bbd3ff25"
  },
  {
    "url": "assets/js/24.ad0a9e20.js",
    "revision": "5f07ad7acab27661bf9dfdfd3445a7ff"
  },
  {
    "url": "assets/js/25.9955ad22.js",
    "revision": "0297140305a9765edf10b40791f66d0e"
  },
  {
    "url": "assets/js/26.b893cfea.js",
    "revision": "9e5b9418802c3b647b779b8bd80390e6"
  },
  {
    "url": "assets/js/27.61d84576.js",
    "revision": "9359582f0e8d4f560c8d2bbd78ce9ada"
  },
  {
    "url": "assets/js/28.3cbdb0b0.js",
    "revision": "86600b61f5e0cab0674687b3f778126a"
  },
  {
    "url": "assets/js/29.ba99c4c6.js",
    "revision": "81a6343e2b910cfeb0a20a89160c62bd"
  },
  {
    "url": "assets/js/3.dc6bd04e.js",
    "revision": "f97b61bdd6d21ad28ea30d7b67db2361"
  },
  {
    "url": "assets/js/30.23e5b034.js",
    "revision": "5204b5f8b62ed898c5cb9090f2ed4c5a"
  },
  {
    "url": "assets/js/31.e63de3da.js",
    "revision": "763c31bf6de809bed0a1e13df65e95d5"
  },
  {
    "url": "assets/js/32.cb8e21eb.js",
    "revision": "7e4360333875bc845a8d65393b20a7d3"
  },
  {
    "url": "assets/js/33.6cc148b3.js",
    "revision": "18a304ffa629828bd18888401606b104"
  },
  {
    "url": "assets/js/34.bc82e73f.js",
    "revision": "3294770318752b48bae25feded544ebb"
  },
  {
    "url": "assets/js/35.ce0bbc1f.js",
    "revision": "d91db13d1ac522db233cc682dbb05725"
  },
  {
    "url": "assets/js/36.bb8153c8.js",
    "revision": "2f17e5aa4e2a4d3351ec888f0610cfd2"
  },
  {
    "url": "assets/js/37.595117a5.js",
    "revision": "92e8040ca3c8435ee88e61c9ba566879"
  },
  {
    "url": "assets/js/38.5f8e3967.js",
    "revision": "22fdfa11aa3cf106d439412d4d0962a5"
  },
  {
    "url": "assets/js/39.9e08a2d6.js",
    "revision": "cb4d62bc2193c7230280261e6acbef67"
  },
  {
    "url": "assets/js/4.5bb36fa4.js",
    "revision": "b1b7e56740f5fc2c1360655842a75db8"
  },
  {
    "url": "assets/js/40.059fd45e.js",
    "revision": "574a7448a8af905452b403316b482277"
  },
  {
    "url": "assets/js/41.36395441.js",
    "revision": "1b78f5754dae40f3c97bfc5c9fc6758b"
  },
  {
    "url": "assets/js/42.7a2385fe.js",
    "revision": "2a6ac7f362a169abfaa8ef4b246d7822"
  },
  {
    "url": "assets/js/43.741e5db8.js",
    "revision": "97ab321ce15ebbe9bd7a201f5ddb0fad"
  },
  {
    "url": "assets/js/44.0792e38b.js",
    "revision": "2b8f48f907372a4748cedcf015212417"
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
    "url": "assets/js/app.5b1018f5.js",
    "revision": "1a824fd5a93a039cd4a119b36cf6c4a8"
  },
  {
    "url": "categories/index.html",
    "revision": "cd507baf1972aae91099f179a485eea5"
  },
  {
    "url": "demo.html",
    "revision": "6385da8f9e10fc72f5ab3e4704bc1f07"
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
    "revision": "ae75a421f89d976c365d0c7217c15900"
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
    "revision": "5bcd0f3fc7a6f0a027da3fd68bed9a7a"
  },
  {
    "url": "philosophy/enlightenment/enlightenment.html",
    "revision": "89f08138daca86bd56b72a5115861230"
  },
  {
    "url": "philosophy/enlightenment/Hume.html",
    "revision": "779be88a1c208d42c04699a5bf03e791"
  },
  {
    "url": "philosophy/enlightenment/index.html",
    "revision": "49d938e3b72dafd54f953f99c1535f55"
  },
  {
    "url": "philosophy/enlightenment/Locke.html",
    "revision": "28d6b3a709ed68c5a2eaf19f52a4ae2e"
  },
  {
    "url": "philosophy/enlightenment/Rousseau.html",
    "revision": "428ccfa4612be755c01abeadd44adec9"
  },
  {
    "url": "philosophy/man&gad/index.html",
    "revision": "9ae274b9b796db42de295aecce88a19f"
  },
  {
    "url": "philosophy/man&gad/patristic-philosophy.html",
    "revision": "761531638297a0e1505ece6ce71584ab"
  },
  {
    "url": "philosophy/man&gad/philosophy-come-back.html",
    "revision": "a065b34fe0c2f5caa491588c8149746b"
  },
  {
    "url": "philosophy/man&gad/scholasticism.html",
    "revision": "de20a4ceb95bf5faa24d69f4c29f6621"
  },
  {
    "url": "philosophy/origin/atomism&sophists.html",
    "revision": "6bf174712dd3542ab2688e1a6e1102c2"
  },
  {
    "url": "philosophy/origin/history-of-philosophy.html",
    "revision": "a5e4d8f29c8b9bf14ceaa7886d000476"
  },
  {
    "url": "philosophy/origin/index.html",
    "revision": "b0199aac9fad9f7810038f902d3c4ee1"
  },
  {
    "url": "philosophy/origin/materialism-and-immaterialism.html",
    "revision": "cd40ff8d4686c6677ff1b9b67f4ca827"
  },
  {
    "url": "philosophy/origin/origin-of-philosophy.html",
    "revision": "5a8b7ea98dd5ab920afcbcfcd056e36c"
  },
  {
    "url": "philosophy/origin/Socrates.html",
    "revision": "1befc1f5c10f379dbb63c130d2754029"
  },
  {
    "url": "philosophy/rationalism&empiricism/Aristotle.html",
    "revision": "05f2cf08c398edec742a394fe1357eeb"
  },
  {
    "url": "philosophy/rationalism&empiricism/index.html",
    "revision": "bfe72794837d9cc4673981335aa76dfe"
  },
  {
    "url": "philosophy/reason/Descartes.html",
    "revision": "db967aff1aeaef0f42121e0b1a1060da"
  },
  {
    "url": "philosophy/reason/index.html",
    "revision": "8da8ff4afd8b4ec4d211b68a8a7c2f2e"
  },
  {
    "url": "philosophy/reason/Leibnitz.html",
    "revision": "c50aee5f32a67777ce7e87b6a8cb11ad"
  },
  {
    "url": "philosophy/reason/Pascal.html",
    "revision": "59b178252e77bfba298c4b0454ef2b99"
  },
  {
    "url": "philosophy/reason/philo-sophia.html",
    "revision": "3795d090f30eb65b2680ba8af9be32ea"
  },
  {
    "url": "philosophy/reason/reformation.html",
    "revision": "a9b896d182858388f0c20fb6e97df1be"
  },
  {
    "url": "philosophy/reason/Spinoza.html",
    "revision": "1207a5fd221d2a7864304d53cabe7a28"
  },
  {
    "url": "philosophy/self-settle/end-of-Greek.html",
    "revision": "8d7e90911e4aa5801ddf4000e82aa74b"
  },
  {
    "url": "philosophy/self-settle/hedonism.html",
    "revision": "29da0912aca798777c872191d61bc14f"
  },
  {
    "url": "philosophy/self-settle/index.html",
    "revision": "9a629aa5b20a320f2fe4d5568873898f"
  },
  {
    "url": "philosophy/self-settle/scepticism.html",
    "revision": "da48cd987c9038517c218f03141b6ca2"
  },
  {
    "url": "philosophy/self-settle/stoa.html",
    "revision": "6aeccd630f54f11d60e331eca72b9c38"
  },
  {
    "url": "tag/index.html",
    "revision": "058b1c061f75f16c581e33a15820d136"
  },
  {
    "url": "timeline/index.html",
    "revision": "be854e4d52ccc4bf6a9b334e266b9e8d"
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
