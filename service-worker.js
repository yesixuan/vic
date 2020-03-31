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
    "url": "assets/css/0.styles.82ccce66.css",
    "revision": "8404c188b1f6fd2447066130690aee57"
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
    "url": "assets/js/1.620551ba.js",
    "revision": "7e1a9cf841162081b9490312345e1dec"
  },
  {
    "url": "assets/js/10.ac58c5d4.js",
    "revision": "7eb8395767999943449d331618fc81a8"
  },
  {
    "url": "assets/js/11.c731f144.js",
    "revision": "ac663f2f8ac3ce4526021b8418b54c8f"
  },
  {
    "url": "assets/js/12.9932cb8e.js",
    "revision": "e398aaa222a484d671a00531be74d169"
  },
  {
    "url": "assets/js/13.4e5d151c.js",
    "revision": "842edfb74b126baa99994910642f6a1a"
  },
  {
    "url": "assets/js/14.a4799fb8.js",
    "revision": "9c95ab775fbb65a6640e056881fd4297"
  },
  {
    "url": "assets/js/15.b705611e.js",
    "revision": "3d570395dca3dc4a2a5761c08f74a3fd"
  },
  {
    "url": "assets/js/16.cb6b74b8.js",
    "revision": "5d121bb70fa4e4c0f65a54480d82042c"
  },
  {
    "url": "assets/js/17.b6cb16cb.js",
    "revision": "7291e679d658fe27e19715b5767fa7d5"
  },
  {
    "url": "assets/js/18.b550473f.js",
    "revision": "f39c965cc460e79fae0f304424941cbc"
  },
  {
    "url": "assets/js/19.a86097e6.js",
    "revision": "c92905d04ab7d0fbf36af20a9ea70639"
  },
  {
    "url": "assets/js/20.986521ea.js",
    "revision": "f5eec2b24400ec30a18ce3e37cbff062"
  },
  {
    "url": "assets/js/21.855d2248.js",
    "revision": "43b4f920e0e5680dea3c40004db0fb08"
  },
  {
    "url": "assets/js/22.f15d25d3.js",
    "revision": "f1fa65752d5f53c263303ea109c35278"
  },
  {
    "url": "assets/js/23.2ae98512.js",
    "revision": "66b9dca1d4a565b59552d228fc7d7f3d"
  },
  {
    "url": "assets/js/24.9081f8ba.js",
    "revision": "fa17364b6862b0fdfd82b543e48ad61f"
  },
  {
    "url": "assets/js/25.84cfadcd.js",
    "revision": "d0f80778e15f6212ad227fdf46409db7"
  },
  {
    "url": "assets/js/26.d880c594.js",
    "revision": "7d8e7e7fdd1dfdf271956ad8bca62faf"
  },
  {
    "url": "assets/js/27.5a076086.js",
    "revision": "bfb3680ee405b16d3edda5dd2cbdf48f"
  },
  {
    "url": "assets/js/28.c710eef2.js",
    "revision": "4548717bbbcaf7c5f847fdc18efa3888"
  },
  {
    "url": "assets/js/29.6236c092.js",
    "revision": "5c2244d421726d25ecb9d40f8c6c789f"
  },
  {
    "url": "assets/js/3.ed801ed2.js",
    "revision": "c5a2ccb8fb97748816a9f1f853154937"
  },
  {
    "url": "assets/js/30.ff4c06f2.js",
    "revision": "103c8416b588ac807a98743c3fdd34f5"
  },
  {
    "url": "assets/js/4.c11fcd57.js",
    "revision": "d087ca6b3df5b0a460c5f01c309afbc8"
  },
  {
    "url": "assets/js/5.67ae0be8.js",
    "revision": "4c726911456edc5168945f6058730ebd"
  },
  {
    "url": "assets/js/6.b0534be9.js",
    "revision": "9cec99c77cb40ea7b103ce4c52f590de"
  },
  {
    "url": "assets/js/7.eb31859e.js",
    "revision": "0db340691c990fd756f8b5a51af560f5"
  },
  {
    "url": "assets/js/8.8e06d3b2.js",
    "revision": "3bb52c36f24ff2265558a0e1400e089c"
  },
  {
    "url": "assets/js/9.5fe50121.js",
    "revision": "159740ff31cf67af69df828184673773"
  },
  {
    "url": "assets/js/app.491e68b4.js",
    "revision": "029863707f24e8267e48bf5eaf0905f6"
  },
  {
    "url": "categories/index.html",
    "revision": "e973fe1d89b1edd9cb709b32f2ccf255"
  },
  {
    "url": "demo.html",
    "revision": "d4179db12110a5e89ead9dcd75c4ec5c"
  },
  {
    "url": "index.html",
    "revision": "c515a721b8f866d2b233d3674ba49407"
  },
  {
    "url": "philosophy/man&gad/index.html",
    "revision": "bac83772ffdc2a1d3482fe09c9ea7caf"
  },
  {
    "url": "philosophy/man&gad/patristic-philosophy.html",
    "revision": "295d45e2a59b0a07dcc5cd11a5eb7026"
  },
  {
    "url": "philosophy/man&gad/scholasticism.html",
    "revision": "c5a53a6c78ffc45fd918fee61e754076"
  },
  {
    "url": "philosophy/origin/atomism&sophists.html",
    "revision": "b76aa93e0fdb99c482ca13421b299ff0"
  },
  {
    "url": "philosophy/origin/history-of-philosophy.html",
    "revision": "03caf65d9fd8c6f69cd589cacd7a7647"
  },
  {
    "url": "philosophy/origin/index.html",
    "revision": "a8657f599bea788994e1b6afb32ae92d"
  },
  {
    "url": "philosophy/origin/materialism-and-immaterialism.html",
    "revision": "993bb346a3efe361c0ecaf8854b05dd3"
  },
  {
    "url": "philosophy/origin/origin-of-philosophy.html",
    "revision": "e5bf94afb12018f7d1b7af177c8d3fee"
  },
  {
    "url": "philosophy/origin/Socrates.html",
    "revision": "a346fccc9af81f701ca8acd4279a2972"
  },
  {
    "url": "philosophy/rationalism&empiricism/Aristotle.html",
    "revision": "ba57f14601ae3e2feadde88f21453687"
  },
  {
    "url": "philosophy/rationalism&empiricism/index.html",
    "revision": "0c35ad529c02f4af26667520d24a58bb"
  },
  {
    "url": "philosophy/self-settle/end-of-Greek.html",
    "revision": "5295cc256148d5e7b132c37c855a04c5"
  },
  {
    "url": "philosophy/self-settle/hedonism.html",
    "revision": "e054787849b04b7ffbe79f9364e02b48"
  },
  {
    "url": "philosophy/self-settle/index.html",
    "revision": "7d4ff010cef39e40646e6113511f954c"
  },
  {
    "url": "philosophy/self-settle/scepticism.html",
    "revision": "d0a98b2ed95b24bf8f6feb86b176d167"
  },
  {
    "url": "philosophy/self-settle/stoa.html",
    "revision": "dbb311e9a81df784329eb75395aa6d05"
  },
  {
    "url": "tag/index.html",
    "revision": "9fcc76a0ebc2578f398e76a75a767c4e"
  },
  {
    "url": "time.jpg",
    "revision": "217a6e2c0d56f4b97415f4a2bf79f92f"
  },
  {
    "url": "timeline/index.html",
    "revision": "acb7bb14974865a728d5d43edfbea9f2"
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
