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
    "revision": "5b9a9ebf25b3673548f31e685229c9ee"
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
    "url": "assets/js/27.b61107ca.js",
    "revision": "82cd8af7bc817e1db3f6b213e8c6f25e"
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
    "url": "assets/js/app.4bbc41f9.js",
    "revision": "4815c43e25e96a0bc1e4c122c3ac3b11"
  },
  {
    "url": "categories/index.html",
    "revision": "5fc2c90db949c121270ecbb37f11c75a"
  },
  {
    "url": "demo.html",
    "revision": "dd16fd16e9f3827e4e5fadf51689102c"
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
    "revision": "dd0e50c7956589c52d1bd379b9c1c133"
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
    "revision": "36aca66ed85736ece684125f6e4a0493"
  },
  {
    "url": "philosophy/enlightenment/enlightenment.html",
    "revision": "67f23f34997910d3e8f2357edb5120a3"
  },
  {
    "url": "philosophy/enlightenment/GermanIdealism.html",
    "revision": "8f79edafcff1077bacdbae2845a72345"
  },
  {
    "url": "philosophy/enlightenment/Hume.html",
    "revision": "2ccb68b9153fa62221e5258c79402a2e"
  },
  {
    "url": "philosophy/enlightenment/index.html",
    "revision": "9eb6367a021e6c03849631ab4c0da147"
  },
  {
    "url": "philosophy/enlightenment/Kant.html",
    "revision": "8e8f889836fe8b86044ef7bab624203d"
  },
  {
    "url": "philosophy/enlightenment/Locke.html",
    "revision": "eecb824bc918cbe1d89c92432f47dcc7"
  },
  {
    "url": "philosophy/enlightenment/Marx.html",
    "revision": "4546961ef454de0f86c1a4cb7285c2bf"
  },
  {
    "url": "philosophy/enlightenment/pessimism.html",
    "revision": "d56f2b5c2b8824216ba1b432b3abc8a2"
  },
  {
    "url": "philosophy/enlightenment/Rousseau.html",
    "revision": "62c512322c055729ea732c5de3728240"
  },
  {
    "url": "philosophy/enlightenment/value.html",
    "revision": "ac12d47b573c493919e5de545f79c4f2"
  },
  {
    "url": "philosophy/ethics/index.html",
    "revision": "442ba9c55bc85231b85182e60e114bbc"
  },
  {
    "url": "philosophy/ethics/simpleEthics.html",
    "revision": "4e049f4c86c5c33d0676f7599eee2922"
  },
  {
    "url": "philosophy/existentialism/existentialism.html",
    "revision": "abd793372d7f9e3d8411d71aace29591"
  },
  {
    "url": "philosophy/existentialism/index.html",
    "revision": "588970387825bef3609f1428a1560a56"
  },
  {
    "url": "philosophy/existentialism/Kierkegaard.html",
    "revision": "4404c2f5e57c81972eab98496f541366"
  },
  {
    "url": "philosophy/existentialism/Nietzsche.html",
    "revision": "5570194e3d9891af42c828ad376e89c1"
  },
  {
    "url": "philosophy/man&gad/index.html",
    "revision": "003be9cc1e9f3f5fb99668ac9ebcfc4f"
  },
  {
    "url": "philosophy/man&gad/patristic-philosophy.html",
    "revision": "ee9b9158bfb3339b85b3b99880e13ac1"
  },
  {
    "url": "philosophy/man&gad/philosophy-come-back.html",
    "revision": "0a5c4647c56cdc473174cbb50f5e7d99"
  },
  {
    "url": "philosophy/man&gad/scholasticism.html",
    "revision": "43452c720c90c25df51ab6605f7c842e"
  },
  {
    "url": "philosophy/origin/atomism&sophists.html",
    "revision": "d13a49bd3f7bca73397ade328aa85396"
  },
  {
    "url": "philosophy/origin/history-of-philosophy.html",
    "revision": "0e01b7b8288d4aec323d5d8fc9e60e59"
  },
  {
    "url": "philosophy/origin/index.html",
    "revision": "1c5075c320f826c48f0a4f850ba9461b"
  },
  {
    "url": "philosophy/origin/materialism-and-immaterialism.html",
    "revision": "81d8067c039f29b0d697a7c266a8a267"
  },
  {
    "url": "philosophy/origin/origin-of-philosophy.html",
    "revision": "6cf462d2483c91b81a7a4ac681dc42cf"
  },
  {
    "url": "philosophy/origin/Socrates.html",
    "revision": "458b44a9c76e060533aeb2075f7ab7d6"
  },
  {
    "url": "philosophy/rationalism&empiricism/Aristotle.html",
    "revision": "814692c4442ca998cdae278a0cd5de20"
  },
  {
    "url": "philosophy/rationalism&empiricism/index.html",
    "revision": "d8cddd55cc72430b926bfea0dedbcc47"
  },
  {
    "url": "philosophy/reason/Descartes.html",
    "revision": "d595fe57f206bd047375f695059f9d47"
  },
  {
    "url": "philosophy/reason/index.html",
    "revision": "862e93000b0dbf87c50b18ca63405a18"
  },
  {
    "url": "philosophy/reason/Leibnitz.html",
    "revision": "0d0d4881fa734ad64eb5b31136d15ac1"
  },
  {
    "url": "philosophy/reason/Pascal.html",
    "revision": "298bfb3262d1d21ed44d1abae2cfa782"
  },
  {
    "url": "philosophy/reason/philo-sophia.html",
    "revision": "f1212392c74ece1f204da4c429175df2"
  },
  {
    "url": "philosophy/reason/reformation.html",
    "revision": "9ee0e5bbb2fe967a9f39b36d8fd2320c"
  },
  {
    "url": "philosophy/reason/Spinoza.html",
    "revision": "20d1b1ff164036c4117758485d8616eb"
  },
  {
    "url": "philosophy/self-settle/end-of-Greek.html",
    "revision": "ade68af4991cd3dbc4723d1986067ab6"
  },
  {
    "url": "philosophy/self-settle/hedonism.html",
    "revision": "646084b656973bc666dd3eeff49b96c9"
  },
  {
    "url": "philosophy/self-settle/index.html",
    "revision": "a372bddcfed40a7b59a1b64b0a10c18e"
  },
  {
    "url": "philosophy/self-settle/scepticism.html",
    "revision": "de59d00607d0c8d899a8e2bf7eaaf3f6"
  },
  {
    "url": "philosophy/self-settle/stoa.html",
    "revision": "00a00313f482e6c56a4c053f4a052c93"
  },
  {
    "url": "tag/index.html",
    "revision": "74032b04075dc91c65e27f8e98d82c93"
  },
  {
    "url": "timeline/index.html",
    "revision": "69d5dcd0a24e6e98af6889547095c155"
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
