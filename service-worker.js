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
    "url": "assets/css/0.styles.b4138879.css",
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
    "url": "assets/js/1.179e22fc.js",
    "revision": "7e1a9cf841162081b9490312345e1dec"
  },
  {
    "url": "assets/js/10.dabb7fc0.js",
    "revision": "6f48f91c743a22b55f37bfd6416232dd"
  },
  {
    "url": "assets/js/11.fc5dec4d.js",
    "revision": "da7d0aa53846379ade4587e6277b1ca9"
  },
  {
    "url": "assets/js/12.1c2395a6.js",
    "revision": "e398aaa222a484d671a00531be74d169"
  },
  {
    "url": "assets/js/13.9f9175cb.js",
    "revision": "abc839aa67b053b831856a00967af237"
  },
  {
    "url": "assets/js/14.93e8134f.js",
    "revision": "c578851ca1c7395324c8def30ca38728"
  },
  {
    "url": "assets/js/15.342277cc.js",
    "revision": "12d33b1157725a6b4097f2c2024d2ffc"
  },
  {
    "url": "assets/js/16.28f3c8a5.js",
    "revision": "2e8b3ab0be2f5413cc2afd6f6c25822d"
  },
  {
    "url": "assets/js/17.8d694d5f.js",
    "revision": "876176b49163c802a13ae2b124056309"
  },
  {
    "url": "assets/js/18.1c193efe.js",
    "revision": "e3dfd466078f1440652d781527131f2a"
  },
  {
    "url": "assets/js/19.7bb29e20.js",
    "revision": "eb4ce3131284324acea31f3f4b1709a3"
  },
  {
    "url": "assets/js/20.b1088f02.js",
    "revision": "89603237702ba258820f58dbeec1b2ce"
  },
  {
    "url": "assets/js/21.18d39cd6.js",
    "revision": "003c9767b21aa93f30086fd88440a104"
  },
  {
    "url": "assets/js/22.3756526e.js",
    "revision": "717d2fe73532a6a5bc118e48cd8398cf"
  },
  {
    "url": "assets/js/23.21ad7dc5.js",
    "revision": "9a9fed5df11d8682c4b49c796385f1d8"
  },
  {
    "url": "assets/js/24.89838ad3.js",
    "revision": "6b4e3e18ba155443f9392bc38c6e02ca"
  },
  {
    "url": "assets/js/25.9d6b10f5.js",
    "revision": "e4e87644d8ffe39cb89b961ba054306d"
  },
  {
    "url": "assets/js/26.a21825a2.js",
    "revision": "e81a6a2fad3ce378631203bc7a54b340"
  },
  {
    "url": "assets/js/27.fbea84bf.js",
    "revision": "5fc2b789362e9f124d034d74693fd283"
  },
  {
    "url": "assets/js/28.c0621c58.js",
    "revision": "83b1747ffdbc8c56dbbe292cf9e1290f"
  },
  {
    "url": "assets/js/29.f9640fac.js",
    "revision": "8ca43f6fb61a531015f23efdc6cfab48"
  },
  {
    "url": "assets/js/3.2bd6378e.js",
    "revision": "c5a2ccb8fb97748816a9f1f853154937"
  },
  {
    "url": "assets/js/4.f63241c4.js",
    "revision": "d087ca6b3df5b0a460c5f01c309afbc8"
  },
  {
    "url": "assets/js/5.a2a0ceb8.js",
    "revision": "4c726911456edc5168945f6058730ebd"
  },
  {
    "url": "assets/js/6.f95672ff.js",
    "revision": "9cec99c77cb40ea7b103ce4c52f590de"
  },
  {
    "url": "assets/js/7.6cf567c2.js",
    "revision": "0db340691c990fd756f8b5a51af560f5"
  },
  {
    "url": "assets/js/8.c01f11c8.js",
    "revision": "3bb52c36f24ff2265558a0e1400e089c"
  },
  {
    "url": "assets/js/9.b7624c48.js",
    "revision": "159740ff31cf67af69df828184673773"
  },
  {
    "url": "assets/js/app.757b8957.js",
    "revision": "c1f667dafce68364937be758c16fdb43"
  },
  {
    "url": "categories/index.html",
    "revision": "7c0db68921027e99a4d41a675946ee01"
  },
  {
    "url": "demo.html",
    "revision": "607624e8b7b8bf91e86841bd403ebc42"
  },
  {
    "url": "index.html",
    "revision": "5d9c8af7895083b1d31deb07e522d63a"
  },
  {
    "url": "philosophy/man&gad/index.html",
    "revision": "293070cfc828cb36dec0f722de54e275"
  },
  {
    "url": "philosophy/man&gad/patristic-philosophy.html",
    "revision": "4f870de7ee364bd10f993b664fa51f40"
  },
  {
    "url": "philosophy/origin/atomism&sophists.html",
    "revision": "8be60eb940749bf71fad5904797559f1"
  },
  {
    "url": "philosophy/origin/history-of-philosophy.html",
    "revision": "65daa6946365b21e9e81ca36f2a040cb"
  },
  {
    "url": "philosophy/origin/index.html",
    "revision": "6cf68c8215535c7c7b87556c7d93dea0"
  },
  {
    "url": "philosophy/origin/materialism-and-immaterialism.html",
    "revision": "6cf0805b656005ae830256bfec3ed07c"
  },
  {
    "url": "philosophy/origin/origin-of-philosophy.html",
    "revision": "77414a76e569e66b93ef2ee449a7922c"
  },
  {
    "url": "philosophy/origin/Socrates.html",
    "revision": "409a8d2f04243af41131b729e9483077"
  },
  {
    "url": "philosophy/rationalism&empiricism/Aristotle.html",
    "revision": "687e58b44ce4a7885ae20fd7366414b0"
  },
  {
    "url": "philosophy/rationalism&empiricism/index.html",
    "revision": "fa2d84d7b28b845df4bd929bb2f12334"
  },
  {
    "url": "philosophy/self-settle/end-of-Greek.html",
    "revision": "6ac11a892023a8eb6868cf425c61ff39"
  },
  {
    "url": "philosophy/self-settle/hedonism.html",
    "revision": "68812c2bf3655ffeed2fdf4d0689dfbe"
  },
  {
    "url": "philosophy/self-settle/index.html",
    "revision": "fe6a8610371a858e44fc9ece2f097347"
  },
  {
    "url": "philosophy/self-settle/scepticism.html",
    "revision": "dc3f7f4b4555382acb5694a9b9bfa525"
  },
  {
    "url": "philosophy/self-settle/stoa.html",
    "revision": "26942972081b91fb35951709f3ba7663"
  },
  {
    "url": "tag/index.html",
    "revision": "56cb826a90e9a20ee59d12eaa4f3d2eb"
  },
  {
    "url": "time.jpg",
    "revision": "217a6e2c0d56f4b97415f4a2bf79f92f"
  },
  {
    "url": "timeline/index.html",
    "revision": "56e93724b9da63a01e86ed590ea369c2"
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
