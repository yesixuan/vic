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
    "url": "assets/css/0.styles.f605e6ad.css",
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
    "url": "assets/js/1.1d6a8e97.js",
    "revision": "7e1a9cf841162081b9490312345e1dec"
  },
  {
    "url": "assets/js/10.05d8a1c6.js",
    "revision": "7eb8395767999943449d331618fc81a8"
  },
  {
    "url": "assets/js/11.e715b63e.js",
    "revision": "ac663f2f8ac3ce4526021b8418b54c8f"
  },
  {
    "url": "assets/js/12.7da580a4.js",
    "revision": "e398aaa222a484d671a00531be74d169"
  },
  {
    "url": "assets/js/13.246feae4.js",
    "revision": "842edfb74b126baa99994910642f6a1a"
  },
  {
    "url": "assets/js/14.2dabb9b4.js",
    "revision": "9c95ab775fbb65a6640e056881fd4297"
  },
  {
    "url": "assets/js/15.08b4796a.js",
    "revision": "9628eeb140ab643c494ed9e9eb9043f7"
  },
  {
    "url": "assets/js/16.7d27676d.js",
    "revision": "5d121bb70fa4e4c0f65a54480d82042c"
  },
  {
    "url": "assets/js/17.3395ae0d.js",
    "revision": "7291e679d658fe27e19715b5767fa7d5"
  },
  {
    "url": "assets/js/18.0a04e948.js",
    "revision": "f39c965cc460e79fae0f304424941cbc"
  },
  {
    "url": "assets/js/19.36041950.js",
    "revision": "c92905d04ab7d0fbf36af20a9ea70639"
  },
  {
    "url": "assets/js/20.603f5e98.js",
    "revision": "f5eec2b24400ec30a18ce3e37cbff062"
  },
  {
    "url": "assets/js/21.978b4f9e.js",
    "revision": "43b4f920e0e5680dea3c40004db0fb08"
  },
  {
    "url": "assets/js/22.421b0623.js",
    "revision": "f1fa65752d5f53c263303ea109c35278"
  },
  {
    "url": "assets/js/23.73c36176.js",
    "revision": "66b9dca1d4a565b59552d228fc7d7f3d"
  },
  {
    "url": "assets/js/24.39e4ca42.js",
    "revision": "fa17364b6862b0fdfd82b543e48ad61f"
  },
  {
    "url": "assets/js/25.e6a168e9.js",
    "revision": "d0f80778e15f6212ad227fdf46409db7"
  },
  {
    "url": "assets/js/26.07d386f5.js",
    "revision": "7d8e7e7fdd1dfdf271956ad8bca62faf"
  },
  {
    "url": "assets/js/27.89618154.js",
    "revision": "bfb3680ee405b16d3edda5dd2cbdf48f"
  },
  {
    "url": "assets/js/28.241d85da.js",
    "revision": "4548717bbbcaf7c5f847fdc18efa3888"
  },
  {
    "url": "assets/js/29.ab917d72.js",
    "revision": "5c2244d421726d25ecb9d40f8c6c789f"
  },
  {
    "url": "assets/js/3.792f96ea.js",
    "revision": "c5a2ccb8fb97748816a9f1f853154937"
  },
  {
    "url": "assets/js/30.170b0b08.js",
    "revision": "103c8416b588ac807a98743c3fdd34f5"
  },
  {
    "url": "assets/js/4.f5c0d0e7.js",
    "revision": "d087ca6b3df5b0a460c5f01c309afbc8"
  },
  {
    "url": "assets/js/5.e5123615.js",
    "revision": "4c726911456edc5168945f6058730ebd"
  },
  {
    "url": "assets/js/6.07ff6c2d.js",
    "revision": "9cec99c77cb40ea7b103ce4c52f590de"
  },
  {
    "url": "assets/js/7.68537ea3.js",
    "revision": "0db340691c990fd756f8b5a51af560f5"
  },
  {
    "url": "assets/js/8.88a75b26.js",
    "revision": "3bb52c36f24ff2265558a0e1400e089c"
  },
  {
    "url": "assets/js/9.1074c3ef.js",
    "revision": "159740ff31cf67af69df828184673773"
  },
  {
    "url": "assets/js/app.a12bc972.js",
    "revision": "9ef0b1bb21a3760448d4a05898c5ee6c"
  },
  {
    "url": "categories/index.html",
    "revision": "0d092a51326c844bc57cc950b733bd5d"
  },
  {
    "url": "demo.html",
    "revision": "0b1d7470a818a0e185a24d6966df1349"
  },
  {
    "url": "index.html",
    "revision": "b63902912c1d988b76ef158836f51a4c"
  },
  {
    "url": "philosophy/man&gad/index.html",
    "revision": "0e29d90159a4db03d3bcfd9a927df51d"
  },
  {
    "url": "philosophy/man&gad/patristic-philosophy.html",
    "revision": "f610a6f908e61339ffb06a1706baf720"
  },
  {
    "url": "philosophy/man&gad/scholasticism.html",
    "revision": "8402045bd4ba0adf13a94ca9e8d42913"
  },
  {
    "url": "philosophy/origin/atomism&sophists.html",
    "revision": "5ea727f3330150b3d922a9c16c1b5ec5"
  },
  {
    "url": "philosophy/origin/history-of-philosophy.html",
    "revision": "018547a1de6c2f3b6a8b7f5fd098b20a"
  },
  {
    "url": "philosophy/origin/index.html",
    "revision": "0b2c5d17243d4af38736b46943204b3e"
  },
  {
    "url": "philosophy/origin/materialism-and-immaterialism.html",
    "revision": "2f3a9a721f37e80a9e6d5ba6dda6841e"
  },
  {
    "url": "philosophy/origin/origin-of-philosophy.html",
    "revision": "79c4a0ee8d4add736b2f308aa1e2cc5a"
  },
  {
    "url": "philosophy/origin/Socrates.html",
    "revision": "822d8fe2437d528f67c5c4fd7b385371"
  },
  {
    "url": "philosophy/rationalism&empiricism/Aristotle.html",
    "revision": "1fa4dc996ce71229971144318e799850"
  },
  {
    "url": "philosophy/rationalism&empiricism/index.html",
    "revision": "35c7c78f48cf507ffacd805272dde875"
  },
  {
    "url": "philosophy/self-settle/end-of-Greek.html",
    "revision": "053abeff5f26dc5f9417f2a179fade10"
  },
  {
    "url": "philosophy/self-settle/hedonism.html",
    "revision": "c2169832600b2226d38ffbff42bb4da5"
  },
  {
    "url": "philosophy/self-settle/index.html",
    "revision": "11023b4d226101ca73f0ef38e9037b3f"
  },
  {
    "url": "philosophy/self-settle/scepticism.html",
    "revision": "e77d05a577a591badf4f4474667dded6"
  },
  {
    "url": "philosophy/self-settle/stoa.html",
    "revision": "80df10906549b63723fba345ca443de0"
  },
  {
    "url": "tag/index.html",
    "revision": "54c91f839ff28cbb863d467b4d6324f1"
  },
  {
    "url": "time.jpg",
    "revision": "217a6e2c0d56f4b97415f4a2bf79f92f"
  },
  {
    "url": "timeline/index.html",
    "revision": "3b56ef17e389e76c0bb5c38208fc1f4f"
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
