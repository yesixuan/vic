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
    "revision": "e6779ecb9191ed8a8ffb4b58168cc221"
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
    "url": "assets/js/10.378ca859.js",
    "revision": "4f63a05c88bb80c2fbddcbfbb171be2a"
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
    "url": "assets/js/21.2d4543db.js",
    "revision": "c9a0f4379a22536b0a56202960b6a45e"
  },
  {
    "url": "assets/js/22.bb03cec4.js",
    "revision": "f1d06f719123afcc556a0cd4337a8ab1"
  },
  {
    "url": "assets/js/23.56dd5669.js",
    "revision": "f2a9c322e6b8190df8185135fad065e2"
  },
  {
    "url": "assets/js/24.ddaecad5.js",
    "revision": "32efca9a348b4742cb47134532174e43"
  },
  {
    "url": "assets/js/25.3c6cd89a.js",
    "revision": "f088571797f5da2a46b379f2d4c9c45d"
  },
  {
    "url": "assets/js/26.d5797370.js",
    "revision": "538ce504b3002a9fa32357b9eb29fbec"
  },
  {
    "url": "assets/js/27.cc33fe1f.js",
    "revision": "c2514718ed367a821280e2f00710552d"
  },
  {
    "url": "assets/js/28.07e47827.js",
    "revision": "4140309af2e961146c4a06d81ec2acf9"
  },
  {
    "url": "assets/js/29.798679d2.js",
    "revision": "604b420ae7d7a352f27ad7d9c7ce0a10"
  },
  {
    "url": "assets/js/3.755c60df.js",
    "revision": "fefd6c8a843b27d923c1cd2d1bd95d8e"
  },
  {
    "url": "assets/js/30.86fecb03.js",
    "revision": "8308f301a73504c717725106c25ad4cf"
  },
  {
    "url": "assets/js/31.c4c69e71.js",
    "revision": "b9925c06d014cb1a5e3d786d371c35c0"
  },
  {
    "url": "assets/js/32.92220046.js",
    "revision": "ba6d91777ed31d7695328248ce23bf17"
  },
  {
    "url": "assets/js/33.c7407712.js",
    "revision": "3a4f5012414b55c6b0c40a7f7b12d659"
  },
  {
    "url": "assets/js/34.30262eca.js",
    "revision": "b40fdf47cafb6d2db3ca5738d197bd83"
  },
  {
    "url": "assets/js/35.5c6e08da.js",
    "revision": "4fae2844089f985c59d72149fa33d0c6"
  },
  {
    "url": "assets/js/36.7549663a.js",
    "revision": "39204d6e97489e38769d852ec53fb6f7"
  },
  {
    "url": "assets/js/37.e40b5c97.js",
    "revision": "27ea7d855071a841f5763be4d8194609"
  },
  {
    "url": "assets/js/38.669ed2d3.js",
    "revision": "2ab0ae8f42f8b5458fb143eb3cb7b0d5"
  },
  {
    "url": "assets/js/39.0fc29407.js",
    "revision": "70b62ee1e1eab0487873bfa24a5c9956"
  },
  {
    "url": "assets/js/4.bbd2939d.js",
    "revision": "65bf447d797e6e2fa618bbfff3eb034b"
  },
  {
    "url": "assets/js/40.dbc4963a.js",
    "revision": "1f91c5cc6a28058ff6b886148824a0bc"
  },
  {
    "url": "assets/js/41.3958ce48.js",
    "revision": "15795e3cbe376bda946730b3f78017fc"
  },
  {
    "url": "assets/js/42.ff37057a.js",
    "revision": "329d58d3fa81cd034d2c10423296276e"
  },
  {
    "url": "assets/js/43.3436f51c.js",
    "revision": "9d3ecff420007c8dccd84d1c402ab743"
  },
  {
    "url": "assets/js/44.cfc9b297.js",
    "revision": "cf122607439e0f343defc9a1a81e5c2f"
  },
  {
    "url": "assets/js/45.ef7d3331.js",
    "revision": "f7a01c2e98dcda12e4427f575eb8f6b5"
  },
  {
    "url": "assets/js/46.bc7f9537.js",
    "revision": "406a9377e87dc3864e29c7fbbba3a634"
  },
  {
    "url": "assets/js/47.994830d5.js",
    "revision": "788f8e078829ee0a7e0bc7040506d6d2"
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
    "url": "assets/js/app.f3979ef0.js",
    "revision": "d3a2518ee765db001966b070f477be08"
  },
  {
    "url": "categories/index.html",
    "revision": "1f8058404494b81effa4ab732efb366c"
  },
  {
    "url": "demo.html",
    "revision": "727f6bc6bc5c540a0dc108657f734d23"
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
    "revision": "49300cde9ebe2845f49463e44413ed45"
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
    "revision": "3b5c971ce5f3b4fb22c1e85156e0611e"
  },
  {
    "url": "philosophy/enlightenment/enlightenment.html",
    "revision": "26b1b69753eccf2cdea8f2af710ce7a9"
  },
  {
    "url": "philosophy/enlightenment/GermanIdealism.html",
    "revision": "5b37c0208848aa5635c07b76e2735c6e"
  },
  {
    "url": "philosophy/enlightenment/Hume.html",
    "revision": "ad5125de9b9d03954d97f354bbf32747"
  },
  {
    "url": "philosophy/enlightenment/index.html",
    "revision": "abae6e2fe6729cbc798e3c5b3accfa57"
  },
  {
    "url": "philosophy/enlightenment/Kant.html",
    "revision": "29bf8b5731930bae28fd63f551b1091d"
  },
  {
    "url": "philosophy/enlightenment/Locke.html",
    "revision": "f7c68898ca9b1251c8c01e64dc5da583"
  },
  {
    "url": "philosophy/enlightenment/pessimism.html",
    "revision": "73b799e408441e13c95bb04da3810343"
  },
  {
    "url": "philosophy/enlightenment/Rousseau.html",
    "revision": "7b318b7d4356db77bd93e9b3e940eb85"
  },
  {
    "url": "philosophy/man&gad/index.html",
    "revision": "43ec5a8bc93d2c3657896575d0d92bf1"
  },
  {
    "url": "philosophy/man&gad/patristic-philosophy.html",
    "revision": "c0b3e9b5106690f9b26eeaa5c75bc3f6"
  },
  {
    "url": "philosophy/man&gad/philosophy-come-back.html",
    "revision": "08fe80b38626bd0afea3199d8ced1a6f"
  },
  {
    "url": "philosophy/man&gad/scholasticism.html",
    "revision": "e62d25bac7c4b00804964b06d5f9b3f9"
  },
  {
    "url": "philosophy/origin/atomism&sophists.html",
    "revision": "a7347d10a1133df9f770ef70ed0749da"
  },
  {
    "url": "philosophy/origin/history-of-philosophy.html",
    "revision": "2dafe804869617a7a6203c761c54ec82"
  },
  {
    "url": "philosophy/origin/index.html",
    "revision": "dc028f35f54b35d4cad08d065ca76e8c"
  },
  {
    "url": "philosophy/origin/materialism-and-immaterialism.html",
    "revision": "3cb10e175a7ab16f64067bc8f4cb1f8b"
  },
  {
    "url": "philosophy/origin/origin-of-philosophy.html",
    "revision": "8f9b23fa110f09d0a64afeb75e2819e7"
  },
  {
    "url": "philosophy/origin/Socrates.html",
    "revision": "1dc510719d7bbdcace4b44f15e685dcf"
  },
  {
    "url": "philosophy/rationalism&empiricism/Aristotle.html",
    "revision": "dfe0c0d6eabbf6eae87373df05ab62f3"
  },
  {
    "url": "philosophy/rationalism&empiricism/index.html",
    "revision": "f2139ba1f8197d2353fd5ae6729890d0"
  },
  {
    "url": "philosophy/reason/Descartes.html",
    "revision": "490ac786c0593f0056f8ba019e21a731"
  },
  {
    "url": "philosophy/reason/index.html",
    "revision": "b5a18468e1ad7f4450222a21f529cfee"
  },
  {
    "url": "philosophy/reason/Leibnitz.html",
    "revision": "0a311de65fde7262a41c68769d6d856f"
  },
  {
    "url": "philosophy/reason/Pascal.html",
    "revision": "6df713b2820052fa2bbe231f4b6fc3cc"
  },
  {
    "url": "philosophy/reason/philo-sophia.html",
    "revision": "ba2496b4a5f42660b813e0727cd96896"
  },
  {
    "url": "philosophy/reason/reformation.html",
    "revision": "5f3a53434ec833a7634fdd9ef0af06da"
  },
  {
    "url": "philosophy/reason/Spinoza.html",
    "revision": "f9d470f7f44d70bb3cad42f140691745"
  },
  {
    "url": "philosophy/self-settle/end-of-Greek.html",
    "revision": "a29cfa62e200011c9e3df5a050f6d04c"
  },
  {
    "url": "philosophy/self-settle/hedonism.html",
    "revision": "758fcd2724592230ed57b4c3f9aa90f0"
  },
  {
    "url": "philosophy/self-settle/index.html",
    "revision": "d94fffbda5ca15631433a2f1cc54efdd"
  },
  {
    "url": "philosophy/self-settle/scepticism.html",
    "revision": "7541d8fe999ce267f6a84e0a2e613710"
  },
  {
    "url": "philosophy/self-settle/stoa.html",
    "revision": "a0c632c436ad237b593dba349fdb85da"
  },
  {
    "url": "tag/index.html",
    "revision": "01881ae1c35c7b482218803fd4b96e5b"
  },
  {
    "url": "timeline/index.html",
    "revision": "1cd539e6274b84e297ce0972a8fcf781"
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
