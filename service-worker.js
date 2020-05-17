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
    "revision": "c61e024c76cf190f88be498a83048ce5"
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
    "url": "assets/js/13.cce61f2a.js",
    "revision": "a66316b25c587d9531f000f8a5e4261c"
  },
  {
    "url": "assets/js/14.f05d1166.js",
    "revision": "6df92f7e113e4633bde89866e54288c7"
  },
  {
    "url": "assets/js/15.b762ea8c.js",
    "revision": "af084ed470ab273b32e00e4b8732f5e7"
  },
  {
    "url": "assets/js/16.4746a0e7.js",
    "revision": "c0bcd4531e0057659fe649c519e38eb9"
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
    "url": "assets/js/27.39263461.js",
    "revision": "a673caace80cdf94e4c5ef96f3d454d5"
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
    "url": "assets/js/app.199cb475.js",
    "revision": "5e42b94d8255493055bd8122084bb76e"
  },
  {
    "url": "categories/index.html",
    "revision": "1d7112235e220b1d5a85772ff871806b"
  },
  {
    "url": "demo.html",
    "revision": "e8efdae8909151cb9a44d411dc2e4ae5"
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
    "revision": "88e00a4e4477e005bddde2aed7052336"
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
    "revision": "98c00e65b121e11aa2b7215d28bcb6f3"
  },
  {
    "url": "philosophy/enlightenment/enlightenment.html",
    "revision": "3aa516f902f54e6cc736d8c4935f795d"
  },
  {
    "url": "philosophy/enlightenment/GermanIdealism.html",
    "revision": "fd2def5cc26ef02dd6c18128b1c0b7fc"
  },
  {
    "url": "philosophy/enlightenment/Hume.html",
    "revision": "fec1753d0490d2330a646176adc13582"
  },
  {
    "url": "philosophy/enlightenment/index.html",
    "revision": "4aab39e8856ece34087e34def1251cc5"
  },
  {
    "url": "philosophy/enlightenment/Kant.html",
    "revision": "f8c62c946fd9c5ef1cebfbf7d864d213"
  },
  {
    "url": "philosophy/enlightenment/Locke.html",
    "revision": "4f30d86a98dda53c37c3a1002e9a7faf"
  },
  {
    "url": "philosophy/enlightenment/Marx.html",
    "revision": "3ef5a33affd80214f4b9084fc2937a74"
  },
  {
    "url": "philosophy/enlightenment/pessimism.html",
    "revision": "7107488ac563d731f9f4fcdfb1b5aa60"
  },
  {
    "url": "philosophy/enlightenment/Rousseau.html",
    "revision": "4acc2c929b7da6a4bc8d2bdf827620b3"
  },
  {
    "url": "philosophy/enlightenment/value.html",
    "revision": "0a2595e113b2bb631ed5fd3e31169067"
  },
  {
    "url": "philosophy/ethics/index.html",
    "revision": "38a9c2ead650ac6275d81a52b123d551"
  },
  {
    "url": "philosophy/ethics/simpleEthics.html",
    "revision": "8ff1c070cb82adcdeecd743f08b9c1c8"
  },
  {
    "url": "philosophy/existentialism/existentialism.html",
    "revision": "6e83abd25dd7578c6e6356f8b0818508"
  },
  {
    "url": "philosophy/existentialism/index.html",
    "revision": "29c17b5361d5693406580a9c12319579"
  },
  {
    "url": "philosophy/existentialism/Kierkegaard.html",
    "revision": "a574f0d513ea823e872b5d0f988d3d7e"
  },
  {
    "url": "philosophy/existentialism/Nietzsche.html",
    "revision": "02ad46e2b637ca40aef49e919965a50e"
  },
  {
    "url": "philosophy/man&gad/index.html",
    "revision": "e6b59cbc303a7d10dd937b47c986704c"
  },
  {
    "url": "philosophy/man&gad/patristic-philosophy.html",
    "revision": "3084f4c851cd0f6dc48b65b4bdd7a009"
  },
  {
    "url": "philosophy/man&gad/philosophy-come-back.html",
    "revision": "46b0dc588cdc321e2173184faeb97cfc"
  },
  {
    "url": "philosophy/man&gad/scholasticism.html",
    "revision": "73a53564e99cac1995d8941077d00792"
  },
  {
    "url": "philosophy/origin/atomism&sophists.html",
    "revision": "19b02085d780dae3317fc47cbbf33b6b"
  },
  {
    "url": "philosophy/origin/history-of-philosophy.html",
    "revision": "9a686f46504a25b38e23221f129419be"
  },
  {
    "url": "philosophy/origin/index.html",
    "revision": "dc9300b2b52098fd35cd69b160979395"
  },
  {
    "url": "philosophy/origin/materialism-and-immaterialism.html",
    "revision": "2654249c95e105136854a83bb83beadf"
  },
  {
    "url": "philosophy/origin/origin-of-philosophy.html",
    "revision": "ea27a5719f7c098124cdd98735c90a79"
  },
  {
    "url": "philosophy/origin/Socrates.html",
    "revision": "f470679ff841abcdf398265bf977a3f8"
  },
  {
    "url": "philosophy/rationalism&empiricism/Aristotle.html",
    "revision": "fb46c1f157dd793cc0bcc6fabb691cab"
  },
  {
    "url": "philosophy/rationalism&empiricism/index.html",
    "revision": "b35be09066efdc4d6989358a872da609"
  },
  {
    "url": "philosophy/reason/Descartes.html",
    "revision": "26ef2d8e2099523c72341ea70518c244"
  },
  {
    "url": "philosophy/reason/index.html",
    "revision": "ecabb01ce284deea4d767d259efc5af1"
  },
  {
    "url": "philosophy/reason/Leibnitz.html",
    "revision": "da1b8e1af7cf24127e051c71f676427b"
  },
  {
    "url": "philosophy/reason/Pascal.html",
    "revision": "4e7f442e5cbf601a23bc927788779137"
  },
  {
    "url": "philosophy/reason/philo-sophia.html",
    "revision": "922c65b29c7f59c86147082d70d98635"
  },
  {
    "url": "philosophy/reason/reformation.html",
    "revision": "3b1b0e9010d5bc4caf9a51a37522b676"
  },
  {
    "url": "philosophy/reason/Spinoza.html",
    "revision": "b4438c66f0c6ce256e59310df1baefa8"
  },
  {
    "url": "philosophy/self-settle/end-of-Greek.html",
    "revision": "4bcc6f2fd1de37e1dd16cb4128165a32"
  },
  {
    "url": "philosophy/self-settle/hedonism.html",
    "revision": "2b56c4fc17fc4815ad1341ebc25c76a8"
  },
  {
    "url": "philosophy/self-settle/index.html",
    "revision": "7dca93b31132c6d7abae5b74c3b5f27c"
  },
  {
    "url": "philosophy/self-settle/scepticism.html",
    "revision": "c11bf8c646d6e1fa1dbe4fc27cccfd63"
  },
  {
    "url": "philosophy/self-settle/stoa.html",
    "revision": "2ad8b0a2075f396285509f56b1372e0c"
  },
  {
    "url": "tag/index.html",
    "revision": "1c8cb3ccfe25b574950a6815b1ffba81"
  },
  {
    "url": "timeline/index.html",
    "revision": "b5bea859c132dbaa1f0473794380a323"
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
