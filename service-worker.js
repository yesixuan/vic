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
    "revision": "8230deee582deb8e07eabeb8cc797fe9"
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
    "url": "assets/js/13.1d3c2ff0.js",
    "revision": "652323f2a7b5b145e03a2330c92dc777"
  },
  {
    "url": "assets/js/14.a01a9953.js",
    "revision": "0c883b8b2a3011eafbf2baa18aec9507"
  },
  {
    "url": "assets/js/15.6993155f.js",
    "revision": "e74d5909f68d18ed751c49fed200d74f"
  },
  {
    "url": "assets/js/16.857ec20a.js",
    "revision": "ac2081e8b5a59885b1947de6f7c8423c"
  },
  {
    "url": "assets/js/17.e38d6aec.js",
    "revision": "6337f8d41bd7ab65a2f2bedf90aa8d7d"
  },
  {
    "url": "assets/js/18.cade338a.js",
    "revision": "e499e1f3624a17dcc5ac87931e96469f"
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
    "url": "assets/js/27.92d7c91e.js",
    "revision": "ae338496ad2fcc0977531c0db3ba3a38"
  },
  {
    "url": "assets/js/28.9fdc1642.js",
    "revision": "df77f1f52754284b2add2609b9f7dc52"
  },
  {
    "url": "assets/js/29.4ebad40e.js",
    "revision": "3a67499f9f4680d80eec77efeeac3165"
  },
  {
    "url": "assets/js/3.d9fe1332.js",
    "revision": "ee8071252441688b38a4fda831b396fa"
  },
  {
    "url": "assets/js/30.9756bffa.js",
    "revision": "e21f0de5d3ec3c90c79628cacf0375aa"
  },
  {
    "url": "assets/js/31.417a6492.js",
    "revision": "83eec99ebdf26771f05f326631c44616"
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
    "url": "assets/js/app.ad7efcef.js",
    "revision": "6c6b489f4e97d47cb2dfcb9beebbfb41"
  },
  {
    "url": "categories/index.html",
    "revision": "5b0b7c9a3f0b6dc2e613bf23945f1c96"
  },
  {
    "url": "demo.html",
    "revision": "b3dd2c8cf4df4357dfad51c37c115755"
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
    "revision": "4ab99eced4b7083be43c57a8bf9e845d"
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
    "revision": "d6b64226efc6a019d5c22ef31d389448"
  },
  {
    "url": "philosophy/enlightenment/enlightenment.html",
    "revision": "b02e8b7698c6e4115a0d2d806a64ae79"
  },
  {
    "url": "philosophy/enlightenment/GermanIdealism.html",
    "revision": "fb9f6a487db5e143363e8483567425f1"
  },
  {
    "url": "philosophy/enlightenment/Hume.html",
    "revision": "d5f7826e8dbe0449532ec05b5c45ea70"
  },
  {
    "url": "philosophy/enlightenment/index.html",
    "revision": "01418c5986024241e1e6a3a7997f4e83"
  },
  {
    "url": "philosophy/enlightenment/Kant.html",
    "revision": "1fd482d1679c0bea992ac005ffd4870c"
  },
  {
    "url": "philosophy/enlightenment/Locke.html",
    "revision": "ed331d401594c35e653c56fb22c9d873"
  },
  {
    "url": "philosophy/enlightenment/Marx.html",
    "revision": "2e75be68b8a3b5f4931deb783780d34e"
  },
  {
    "url": "philosophy/enlightenment/pessimism.html",
    "revision": "a6fc775b6678a9241f99fec474d2dffe"
  },
  {
    "url": "philosophy/enlightenment/Rousseau.html",
    "revision": "4ba1a78401d8c51fae022bbe93eba777"
  },
  {
    "url": "philosophy/enlightenment/value.html",
    "revision": "20e0ce1dac826df06477a92195cc6afa"
  },
  {
    "url": "philosophy/ethics/index.html",
    "revision": "9d89c94f480452324aa28c7c2c99bbd6"
  },
  {
    "url": "philosophy/ethics/simpleEthics.html",
    "revision": "aee13e3baca9c0999de756af775d924c"
  },
  {
    "url": "philosophy/existentialism/existentialism.html",
    "revision": "5b7910f2bcb3455328731da9b3d89e1b"
  },
  {
    "url": "philosophy/existentialism/index.html",
    "revision": "7d4554582fe482165215f7f7d814e7b5"
  },
  {
    "url": "philosophy/existentialism/Kierkegaard.html",
    "revision": "d72343a645999480a1919d7ad25f28db"
  },
  {
    "url": "philosophy/existentialism/Nietzsche.html",
    "revision": "2ed71e1019e3496f67985849615e57c3"
  },
  {
    "url": "philosophy/man&gad/index.html",
    "revision": "0750a1092aea61a0e5cc9a48623b651a"
  },
  {
    "url": "philosophy/man&gad/patristic-philosophy.html",
    "revision": "77427803b74f79fdb505c255c47ab50a"
  },
  {
    "url": "philosophy/man&gad/philosophy-come-back.html",
    "revision": "047edb4b8c7b038841464128892d774e"
  },
  {
    "url": "philosophy/man&gad/scholasticism.html",
    "revision": "cea1673ca849efa2b7e8b22929ff4287"
  },
  {
    "url": "philosophy/origin/atomism&sophists.html",
    "revision": "a32aebee6b8eba0cf80163759330223b"
  },
  {
    "url": "philosophy/origin/history-of-philosophy.html",
    "revision": "56af017ca87338e472af11ffe6859d1a"
  },
  {
    "url": "philosophy/origin/index.html",
    "revision": "fe3c606c037571eb54e14d6c9a54f16c"
  },
  {
    "url": "philosophy/origin/materialism-and-immaterialism.html",
    "revision": "8d8dab931994f1bea2560c957d0e51fa"
  },
  {
    "url": "philosophy/origin/origin-of-philosophy.html",
    "revision": "ab0325d2e252355153130b7be0b33f96"
  },
  {
    "url": "philosophy/origin/Socrates.html",
    "revision": "4bdea2136135bdb62cc25c91cbea1393"
  },
  {
    "url": "philosophy/rationalism&empiricism/Aristotle.html",
    "revision": "ba26303e38905aed3717772545a84e51"
  },
  {
    "url": "philosophy/rationalism&empiricism/index.html",
    "revision": "21fc0ff3dd92f3ba3cc17204b40261e7"
  },
  {
    "url": "philosophy/reason/Descartes.html",
    "revision": "d01e113d08dd56c073a65b3318a29e9b"
  },
  {
    "url": "philosophy/reason/index.html",
    "revision": "108ccbc7f3440e1221f4e2ae1d7634d4"
  },
  {
    "url": "philosophy/reason/Leibnitz.html",
    "revision": "065c051c76a983df9455724f6609012c"
  },
  {
    "url": "philosophy/reason/Pascal.html",
    "revision": "c15499279e4f24218e11cfca3fadce4b"
  },
  {
    "url": "philosophy/reason/philo-sophia.html",
    "revision": "73de31024682c2d1d267f13aeea7aa99"
  },
  {
    "url": "philosophy/reason/reformation.html",
    "revision": "af16de114a2560e38ab507899bfb1ab3"
  },
  {
    "url": "philosophy/reason/Spinoza.html",
    "revision": "9371ff44e9a96723489f3cf9625a7d6b"
  },
  {
    "url": "philosophy/self-settle/end-of-Greek.html",
    "revision": "235e8d1d2b0b345d831ab069e766e284"
  },
  {
    "url": "philosophy/self-settle/hedonism.html",
    "revision": "95b5f481d6549da4d1f56811601a7a37"
  },
  {
    "url": "philosophy/self-settle/index.html",
    "revision": "c1217cfebd495788189dea5084453107"
  },
  {
    "url": "philosophy/self-settle/scepticism.html",
    "revision": "33e5f62573f421e6a837920631349439"
  },
  {
    "url": "philosophy/self-settle/stoa.html",
    "revision": "66a61afeccee81c44af18a0cf59a81bc"
  },
  {
    "url": "tag/index.html",
    "revision": "9f7561cb2a3f7b9a5a3204073712a4e5"
  },
  {
    "url": "timeline/index.html",
    "revision": "50c7129c8ebd1dd6fbe37cedd5f59fef"
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
