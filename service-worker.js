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
    "revision": "9ad9b5b6475533c9f8a03fa209b0bb9e"
  },
  {
    "url": "assets/css/0.styles.2a6a7a2b.css",
    "revision": "f8ab8636fee0bfdf57766864005453a3"
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
    "url": "assets/js/1.f1cd049c.js",
    "revision": "85c4d16f0ad5cb7fbce00032963992c2"
  },
  {
    "url": "assets/js/10.4703102e.js",
    "revision": "4051516b7d65aed7b92004a643532b6b"
  },
  {
    "url": "assets/js/11.064c3158.js",
    "revision": "145d9d3ec02104b74984102c9525c309"
  },
  {
    "url": "assets/js/12.7e687f57.js",
    "revision": "5d3bbc46f71a9d601a5279683aa68909"
  },
  {
    "url": "assets/js/13.9468eaa1.js",
    "revision": "c396f4b10f42fe11934b9259d29a5606"
  },
  {
    "url": "assets/js/14.7840838c.js",
    "revision": "5ddeaf5bd83e8d0bc151368358422489"
  },
  {
    "url": "assets/js/15.fe0d389e.js",
    "revision": "eb8631831a84a1c8c66da16d9fdbc5e9"
  },
  {
    "url": "assets/js/16.cac9b660.js",
    "revision": "bf21ae6380bd4391c3faf0e9baaa1524"
  },
  {
    "url": "assets/js/17.c3789459.js",
    "revision": "3d227fa11766b567f916bd9921e88563"
  },
  {
    "url": "assets/js/18.84638776.js",
    "revision": "e13fb5bc79273e9343eeacd0ed530017"
  },
  {
    "url": "assets/js/19.7e1aebfe.js",
    "revision": "2be879eacc844514a3b17cca90f3dd00"
  },
  {
    "url": "assets/js/20.7adf54af.js",
    "revision": "4c59e37084fe4a9d8760c83570ed9619"
  },
  {
    "url": "assets/js/21.3a7b0556.js",
    "revision": "380bf6a72b0a922427d9ce341dd85fb4"
  },
  {
    "url": "assets/js/22.f9319080.js",
    "revision": "d5541ed89e5f9339d1586ee416172946"
  },
  {
    "url": "assets/js/23.9ce05711.js",
    "revision": "5a7c5aeb1ca95aa3c1d105a34c024190"
  },
  {
    "url": "assets/js/24.c81781ab.js",
    "revision": "a378795422ddcd0c5eee2254ff0d5b73"
  },
  {
    "url": "assets/js/25.89e9fb59.js",
    "revision": "87599dcff4e3ea49940564e5da8260d3"
  },
  {
    "url": "assets/js/26.3c9af401.js",
    "revision": "645fbabbf5d82691356d7c63ed9d5cb1"
  },
  {
    "url": "assets/js/27.cadf95d8.js",
    "revision": "70e4f88085dd573b74d96221945d6b4d"
  },
  {
    "url": "assets/js/28.9fdc1642.js",
    "revision": "df77f1f52754284b2add2609b9f7dc52"
  },
  {
    "url": "assets/js/29.4c55104f.js",
    "revision": "f47e56adf90abc5ede9a86b6170dde26"
  },
  {
    "url": "assets/js/3.d9fe1332.js",
    "revision": "ee8071252441688b38a4fda831b396fa"
  },
  {
    "url": "assets/js/30.85ba083b.js",
    "revision": "da935c004922d09002ca9a4e1d57076d"
  },
  {
    "url": "assets/js/31.eda5d2fc.js",
    "revision": "2662c8d553947113ce65aa7564a70dda"
  },
  {
    "url": "assets/js/32.b1c5b096.js",
    "revision": "4e857991d511dd8ceb11f419678b928d"
  },
  {
    "url": "assets/js/33.7ee346d1.js",
    "revision": "7fcbd66e6caa0d9a0041803e90b768d1"
  },
  {
    "url": "assets/js/34.5c89c159.js",
    "revision": "918ec9f525afed2f5d2ad95a566da94c"
  },
  {
    "url": "assets/js/35.8b68d5fa.js",
    "revision": "90062e4f2785d69f8980cf28477802d5"
  },
  {
    "url": "assets/js/36.13cc9703.js",
    "revision": "6d42512202897efc7c2def47848af269"
  },
  {
    "url": "assets/js/37.4de5ef70.js",
    "revision": "c2d2ae59bdebbfe72a7b1931ff9bb684"
  },
  {
    "url": "assets/js/38.7e684be2.js",
    "revision": "4a0cb969327c955b1a9da25ead19973e"
  },
  {
    "url": "assets/js/39.fa0f385c.js",
    "revision": "f437e1b4b3d46b75983e327961fd94ad"
  },
  {
    "url": "assets/js/4.1581da55.js",
    "revision": "d97e4166785e06fc412361eaed784655"
  },
  {
    "url": "assets/js/40.a4b7cc10.js",
    "revision": "bb6a648244b7613a124334484b561653"
  },
  {
    "url": "assets/js/41.04c9cd78.js",
    "revision": "68bfb38b25f3a92f8faa67885a5d593c"
  },
  {
    "url": "assets/js/42.9a82cbd3.js",
    "revision": "efaf519b5ee818aa37c79234b9a8d1ab"
  },
  {
    "url": "assets/js/43.3d5e1f2c.js",
    "revision": "aee2ff26cb15efccd7801a3d5be417c1"
  },
  {
    "url": "assets/js/44.c79ae2e4.js",
    "revision": "78cc52ba0fd9ed1445b95ffbeb92888c"
  },
  {
    "url": "assets/js/45.364e8d7e.js",
    "revision": "ef748113898409098936d6a650a05ff7"
  },
  {
    "url": "assets/js/46.b411b4e4.js",
    "revision": "c14ad86dece97ef9f315ac7eef28370d"
  },
  {
    "url": "assets/js/47.1cd12dee.js",
    "revision": "6e4b212f32e0434e42437435e592c13d"
  },
  {
    "url": "assets/js/48.fa9dd4b0.js",
    "revision": "08e09bada0f9e8f8a2fbe7dca8b777c2"
  },
  {
    "url": "assets/js/49.e3c18881.js",
    "revision": "db18b65a5fe6506aaeaae35986f62697"
  },
  {
    "url": "assets/js/5.63542295.js",
    "revision": "aef2a1e39bf8e11490ee5a4698a02f5a"
  },
  {
    "url": "assets/js/50.0601e09f.js",
    "revision": "6536ff6bcf0e21da2d6b033b9a625200"
  },
  {
    "url": "assets/js/51.4cc7ef57.js",
    "revision": "030d0b215a69a55cdd4e8278bc5352d2"
  },
  {
    "url": "assets/js/52.263e1ad2.js",
    "revision": "ceafb36ce6755616964b511c94b7b4da"
  },
  {
    "url": "assets/js/53.79fe0182.js",
    "revision": "efc174b4d194f1c34270eba705c90e31"
  },
  {
    "url": "assets/js/54.0cc9fa73.js",
    "revision": "f512fe558528bd84021b20b972a29b58"
  },
  {
    "url": "assets/js/6.cf6c226d.js",
    "revision": "c622364b098ccd1f589cd4c81d285a43"
  },
  {
    "url": "assets/js/7.69ca89df.js",
    "revision": "42979384fa0c197e4320d7ed839e920b"
  },
  {
    "url": "assets/js/8.e8bef48c.js",
    "revision": "43a9e768948ed59c20d2a75063d45a13"
  },
  {
    "url": "assets/js/9.9af896eb.js",
    "revision": "238fbc27bd1508fc5c0dcdff0eecdd7a"
  },
  {
    "url": "assets/js/app.3cfe0733.js",
    "revision": "c73f885bbd285196efe6c3b209efcc1d"
  },
  {
    "url": "categories/index.html",
    "revision": "129a8ef9bcf2cdd27f8605a691b1f315"
  },
  {
    "url": "demo.html",
    "revision": "3a43c2040ef1562deabe9d9504a98c8c"
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
    "revision": "b52338a10779fc81ea422c84c1f20f03"
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
    "revision": "a9176bd89e99a4550e3a94f0cc7e0ce7"
  },
  {
    "url": "philosophy/enlightenment/enlightenment.html",
    "revision": "71731ff03530b3a4243727eab39aabea"
  },
  {
    "url": "philosophy/enlightenment/GermanIdealism.html",
    "revision": "c0623324f4107e5c81d47d51065af13e"
  },
  {
    "url": "philosophy/enlightenment/Hume.html",
    "revision": "b88011ede60710aebdd1e7a3a1c73887"
  },
  {
    "url": "philosophy/enlightenment/index.html",
    "revision": "604e205b22f84878b4701f3970017331"
  },
  {
    "url": "philosophy/enlightenment/Kant.html",
    "revision": "1bae8dc6b308667c92ff28a307c6a5f0"
  },
  {
    "url": "philosophy/enlightenment/Locke.html",
    "revision": "cf1ee50c8a0afeb220303064d2d29fa1"
  },
  {
    "url": "philosophy/enlightenment/Marx.html",
    "revision": "0f101c82fb8f13c6f1c2784a8f421003"
  },
  {
    "url": "philosophy/enlightenment/pessimism.html",
    "revision": "4992dd8c484a5a0e9430307fcbd0675f"
  },
  {
    "url": "philosophy/enlightenment/Rousseau.html",
    "revision": "3c4e54ef992f11c65cd7bd17bb8c8b66"
  },
  {
    "url": "philosophy/enlightenment/value.html",
    "revision": "2eef1b80ee9771d8b4114116ab3818f8"
  },
  {
    "url": "philosophy/ethics/index.html",
    "revision": "a6f6b86132eed5d23327a5dffd10b48a"
  },
  {
    "url": "philosophy/ethics/simpleEthics.html",
    "revision": "1f71f47e38fcbcfdf3ece6d2a68b1199"
  },
  {
    "url": "philosophy/existentialism/existentialism.html",
    "revision": "101ecea77b72634db2391dcd4655f974"
  },
  {
    "url": "philosophy/existentialism/index.html",
    "revision": "f36c38869fc11b58c69d177fda84da05"
  },
  {
    "url": "philosophy/existentialism/Kierkegaard.html",
    "revision": "5f23012bb63e4471623fea5c2fe34444"
  },
  {
    "url": "philosophy/existentialism/Nietzsche.html",
    "revision": "1b8841925ccb45dc3c271483e40abb46"
  },
  {
    "url": "philosophy/man&gad/index.html",
    "revision": "0cae9096239ea8698bdb7882e1854661"
  },
  {
    "url": "philosophy/man&gad/patristic-philosophy.html",
    "revision": "bd67d2e8c9a9af8ae0345291674c603d"
  },
  {
    "url": "philosophy/man&gad/philosophy-come-back.html",
    "revision": "5755d1a71cf46596675a1a73d004699b"
  },
  {
    "url": "philosophy/man&gad/scholasticism.html",
    "revision": "95fb40ff913e6b29be41cbf4796f27a9"
  },
  {
    "url": "philosophy/origin/atomism&sophists.html",
    "revision": "e34f42eb1c564c8c69d83572150d7f24"
  },
  {
    "url": "philosophy/origin/history-of-philosophy.html",
    "revision": "69375d9b3961cda73a338b2ab2fdbce5"
  },
  {
    "url": "philosophy/origin/index.html",
    "revision": "c8e9d82ee913da59766817da7554070e"
  },
  {
    "url": "philosophy/origin/materialism-and-immaterialism.html",
    "revision": "ed399e1bcd8b1d7973f16e5d0528f362"
  },
  {
    "url": "philosophy/origin/origin-of-philosophy.html",
    "revision": "d45664ab6eb0f72fd7796db20d4bd801"
  },
  {
    "url": "philosophy/origin/Socrates.html",
    "revision": "8f80497848dd6622780523a599beb8e3"
  },
  {
    "url": "philosophy/rationalism&empiricism/Aristotle.html",
    "revision": "f25d4748ece685fe9185d6b6e906f991"
  },
  {
    "url": "philosophy/rationalism&empiricism/index.html",
    "revision": "db1fa9af34d69a355937165ba5e15568"
  },
  {
    "url": "philosophy/reason/Descartes.html",
    "revision": "bc5a8a62a65b66c040dec3bdfe1800e2"
  },
  {
    "url": "philosophy/reason/index.html",
    "revision": "919bd0bbf41f7297caf0257dd62dd11f"
  },
  {
    "url": "philosophy/reason/Leibnitz.html",
    "revision": "5ae703139e8d395d2e76ceb0cd1a82e3"
  },
  {
    "url": "philosophy/reason/Pascal.html",
    "revision": "be80594854189dc045f86e5def83a907"
  },
  {
    "url": "philosophy/reason/philo-sophia.html",
    "revision": "faf6c1606546b91e1055c2cdbf1506b5"
  },
  {
    "url": "philosophy/reason/reformation.html",
    "revision": "c7c19db6ad9e42460ece9e3a5de27bd3"
  },
  {
    "url": "philosophy/reason/Spinoza.html",
    "revision": "1310d4a04b8bbed7668041ca5d9bec0f"
  },
  {
    "url": "philosophy/self-settle/end-of-Greek.html",
    "revision": "e7261d551569016e498366702d97aaf3"
  },
  {
    "url": "philosophy/self-settle/hedonism.html",
    "revision": "58d7530b7cd6433e137b8d9d816b6b35"
  },
  {
    "url": "philosophy/self-settle/index.html",
    "revision": "bb546d8fd7e121f80476485038c0669c"
  },
  {
    "url": "philosophy/self-settle/scepticism.html",
    "revision": "cf6d571e685dc4415091dfccc8d0d524"
  },
  {
    "url": "philosophy/self-settle/stoa.html",
    "revision": "8caf54ba27c4279a57ec033b8fdc7e0a"
  },
  {
    "url": "tag/index.html",
    "revision": "ca34c5e81563fe6ac3f3bee3c7e7d098"
  },
  {
    "url": "timeline/index.html",
    "revision": "fd60ada8272667096cf3600ffe2069f8"
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
