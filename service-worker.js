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
    "revision": "23c537da7e544be165161d12e4c1feb1"
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
    "url": "assets/js/10.b855061c.js",
    "revision": "78d0420c75de19c305802e015253e93a"
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
    "url": "assets/js/14.12214cc5.js",
    "revision": "992cdbb97b09ec4631b4a02be7f910fe"
  },
  {
    "url": "assets/js/15.c3aec860.js",
    "revision": "2c68de36499c7bab61b4872645546d5d"
  },
  {
    "url": "assets/js/16.2c82afc4.js",
    "revision": "f54abb64932b77e70759f6970fe9af50"
  },
  {
    "url": "assets/js/17.b1134a1a.js",
    "revision": "f253b6ae1c0c28442ae3c34e0e1be9a9"
  },
  {
    "url": "assets/js/18.4cd61846.js",
    "revision": "5518121337fd6bc7169235a8d7c20973"
  },
  {
    "url": "assets/js/19.dd3ad58c.js",
    "revision": "ce98b78cce23f9485824acb2ab4282e3"
  },
  {
    "url": "assets/js/20.af720d96.js",
    "revision": "be5273ed9d18a8ea6124dccea8a69d48"
  },
  {
    "url": "assets/js/21.c93f99ff.js",
    "revision": "21ee472ec53d16cddea4ae3e60cd7d09"
  },
  {
    "url": "assets/js/22.c14a483b.js",
    "revision": "ed9984453e2bd67b74b5aa33a75fea04"
  },
  {
    "url": "assets/js/23.f88ef5ae.js",
    "revision": "fc40e57fe64e17fd7e550cd7951affa1"
  },
  {
    "url": "assets/js/24.c023b91c.js",
    "revision": "a051c82eb26e46acdf9f719c9c3c8ee0"
  },
  {
    "url": "assets/js/25.8357d47b.js",
    "revision": "c8f8c4f4eb7f3e345d6e6f4f26aaac5c"
  },
  {
    "url": "assets/js/26.22401e0c.js",
    "revision": "7c97b2234f720dd81aeab763414829d3"
  },
  {
    "url": "assets/js/27.9c02bc7f.js",
    "revision": "963fd6ba388fd17ea70b9bf20ae44243"
  },
  {
    "url": "assets/js/28.bd4b7921.js",
    "revision": "a4b70656d5ee43eeff3eb5d2bdea905e"
  },
  {
    "url": "assets/js/29.b6c2969c.js",
    "revision": "8fcdfea5feb8f826faff862e2ea57fac"
  },
  {
    "url": "assets/js/3.dc6bd04e.js",
    "revision": "f97b61bdd6d21ad28ea30d7b67db2361"
  },
  {
    "url": "assets/js/30.c2427413.js",
    "revision": "0de8a0b76fd09822fa8eba75be46ecc9"
  },
  {
    "url": "assets/js/31.998637cd.js",
    "revision": "7a33fc8625b58d2d772ceac92c785acb"
  },
  {
    "url": "assets/js/32.519c727b.js",
    "revision": "4f114938b62fcedfe1aeaa5c43b18f38"
  },
  {
    "url": "assets/js/33.6223f55b.js",
    "revision": "04d85c53290d0893046d0c08d243f5de"
  },
  {
    "url": "assets/js/34.6afa28dd.js",
    "revision": "dbce6f017091a808d7f2e9e63a963104"
  },
  {
    "url": "assets/js/35.be542512.js",
    "revision": "caecfd9879808f5c67e6dc58f88fa528"
  },
  {
    "url": "assets/js/36.2e256b3b.js",
    "revision": "7518c03e6d74bd6ebf42c6423bb7b023"
  },
  {
    "url": "assets/js/37.52062aea.js",
    "revision": "b8f41d162823a06be89392dc2c3579d6"
  },
  {
    "url": "assets/js/38.72db858b.js",
    "revision": "8b55e1ca42659cb569e9364193ef17c5"
  },
  {
    "url": "assets/js/39.de8f9470.js",
    "revision": "010d5608ef710010ae5a6de5af981ede"
  },
  {
    "url": "assets/js/4.5bb36fa4.js",
    "revision": "b1b7e56740f5fc2c1360655842a75db8"
  },
  {
    "url": "assets/js/40.49f3515b.js",
    "revision": "4daa34e96d5bde47b8232dd6113c1da9"
  },
  {
    "url": "assets/js/41.b70cf7d9.js",
    "revision": "eb55cc147ae533a3e01f949b520c9e46"
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
    "url": "assets/js/app.c35d6820.js",
    "revision": "064ee31619b8c76a6d5253eeaccc053f"
  },
  {
    "url": "categories/index.html",
    "revision": "5c6b4ba03a1c6643882c89ed92a85061"
  },
  {
    "url": "demo.html",
    "revision": "0e2cc3f649f85424e9719da75d5bce72"
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
    "revision": "1afd7a575b5088cd2b8d6fc005303a9b"
  },
  {
    "url": "index.html",
    "revision": "632effcc990088e3fc38d4e0947e32d5"
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
    "revision": "b06299b5b849f8b33a0f1283c9c2b143"
  },
  {
    "url": "philosophy/enlightenment/index.html",
    "revision": "c0fe951e853dc7798dee6a8341056926"
  },
  {
    "url": "philosophy/enlightenment/Locke.html",
    "revision": "cffc6b0f663714680c9739043f45ac8d"
  },
  {
    "url": "philosophy/man&gad/index.html",
    "revision": "a0c8e9ddab8c8b547c4d50a15d2b4577"
  },
  {
    "url": "philosophy/man&gad/patristic-philosophy.html",
    "revision": "9fd8765a8f1ad0211e534ca9a72d3c1f"
  },
  {
    "url": "philosophy/man&gad/philosophy-come-back.html",
    "revision": "57d93f0c0542ba143cdca9ec998ceb7c"
  },
  {
    "url": "philosophy/man&gad/scholasticism.html",
    "revision": "e4b905617dfbc7d5f96e066495dd4b35"
  },
  {
    "url": "philosophy/origin/atomism&sophists.html",
    "revision": "5d0dd8372de52772cdb4ee1fc3364f1a"
  },
  {
    "url": "philosophy/origin/history-of-philosophy.html",
    "revision": "94772672787553e6bfd060eac0c62863"
  },
  {
    "url": "philosophy/origin/index.html",
    "revision": "9df4b036e64d2396fd5a1ca16bc33018"
  },
  {
    "url": "philosophy/origin/materialism-and-immaterialism.html",
    "revision": "08d3560b49320afb8982e305847a4b26"
  },
  {
    "url": "philosophy/origin/origin-of-philosophy.html",
    "revision": "4b9bee0453c43d3e9c5c84ae37a1524b"
  },
  {
    "url": "philosophy/origin/Socrates.html",
    "revision": "6847e8865869409e2ea068b5cb57c1ad"
  },
  {
    "url": "philosophy/rationalism&empiricism/Aristotle.html",
    "revision": "c4dfc1a3eed0968067fefe8927b2736e"
  },
  {
    "url": "philosophy/rationalism&empiricism/index.html",
    "revision": "e5e926c603316064654076771d773c99"
  },
  {
    "url": "philosophy/reason/Descartes.html",
    "revision": "1eae482507744ce77fed2629e350baa4"
  },
  {
    "url": "philosophy/reason/index.html",
    "revision": "b98e8e012c0dc7e3fc0b63c47963cee3"
  },
  {
    "url": "philosophy/reason/Leibnitz.html",
    "revision": "d08ca0ec292adedc641c8fc63f3771f1"
  },
  {
    "url": "philosophy/reason/Pascal.html",
    "revision": "da65e325ba8dfe8d767aaaf626eae686"
  },
  {
    "url": "philosophy/reason/philo-sophia.html",
    "revision": "4f5074d8ba31f42f180f5165b5b305db"
  },
  {
    "url": "philosophy/reason/reformation.html",
    "revision": "9bc5252ef63d318a62fcd4115138cb2b"
  },
  {
    "url": "philosophy/reason/Spinoza.html",
    "revision": "29531648366273c9999605db7a899acd"
  },
  {
    "url": "philosophy/self-settle/end-of-Greek.html",
    "revision": "51bfe8dc1e80cbb799616df2130a9b7d"
  },
  {
    "url": "philosophy/self-settle/hedonism.html",
    "revision": "fb820193efbd50430cf0fa6cac1cd7a9"
  },
  {
    "url": "philosophy/self-settle/index.html",
    "revision": "e672ebaa6f42c6f5f86f4d88b96662fa"
  },
  {
    "url": "philosophy/self-settle/scepticism.html",
    "revision": "2480d0a38348b486358037c68ae9c105"
  },
  {
    "url": "philosophy/self-settle/stoa.html",
    "revision": "2161e22dce71043d5189a466336a3372"
  },
  {
    "url": "tag/index.html",
    "revision": "d94047e2c0b0a41d6128def3e5cbdf45"
  },
  {
    "url": "timeline/index.html",
    "revision": "e39fdaaf3960a8154011781994f1cb9a"
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
