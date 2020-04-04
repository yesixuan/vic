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
    "url": "assets/css/0.styles.9c2b164d.css",
    "revision": "46ca7681de3fd44073efed752cd49925"
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
    "url": "assets/js/1.46f07dd0.js",
    "revision": "6a751d7afa025430a8589524db2b3953"
  },
  {
    "url": "assets/js/10.9904310c.js",
    "revision": "67497283a05f9cf73b34093d973d3a7b"
  },
  {
    "url": "assets/js/11.c5c30219.js",
    "revision": "a99e4a6de80bbe6b95e77235587392de"
  },
  {
    "url": "assets/js/12.55789b69.js",
    "revision": "f20ce40f0e06ebe9f8bcbec624e5508e"
  },
  {
    "url": "assets/js/13.70731561.js",
    "revision": "e5c8af3833076e5fb05c7a813730ff0c"
  },
  {
    "url": "assets/js/14.141b272c.js",
    "revision": "dd9857fac18d167a05e2a11089fdba72"
  },
  {
    "url": "assets/js/15.2018f976.js",
    "revision": "51b2fac2ea9335afe38aeae71cc48cad"
  },
  {
    "url": "assets/js/16.d5def09c.js",
    "revision": "4ed4316aa1fb1813e2483515071d9f66"
  },
  {
    "url": "assets/js/17.b8fb9523.js",
    "revision": "7d5081f4f614b40614c27efb898b0540"
  },
  {
    "url": "assets/js/18.66437e86.js",
    "revision": "1178c7e6c18f9351ce85d47781f84465"
  },
  {
    "url": "assets/js/19.142ac48b.js",
    "revision": "56c85522ba323bb37ed8e4b63faf3fad"
  },
  {
    "url": "assets/js/20.eed7e6a4.js",
    "revision": "41adb86bad61ae3bd0b389ab026b7bc3"
  },
  {
    "url": "assets/js/21.3c103de5.js",
    "revision": "0ce14f3a93007e0d7c58610ef28fea19"
  },
  {
    "url": "assets/js/22.6878d357.js",
    "revision": "f6c1309ffe0b428f40c94f4dc0e4fa7a"
  },
  {
    "url": "assets/js/23.5ffe18ce.js",
    "revision": "7cf00332857c43ad1aadf0bf9783cdbf"
  },
  {
    "url": "assets/js/24.21fc7aa9.js",
    "revision": "92c210b731a9f51f02f87b1483cff2ca"
  },
  {
    "url": "assets/js/25.075608f6.js",
    "revision": "e64621dfcf9c4efd10e1d1ea135f0b80"
  },
  {
    "url": "assets/js/26.a27aa2c2.js",
    "revision": "157bf17db91f7a2aa54b3d9ccc867d55"
  },
  {
    "url": "assets/js/27.e4e75b20.js",
    "revision": "26196ccfcd32440bdcda4eb809586088"
  },
  {
    "url": "assets/js/28.fbfe3a04.js",
    "revision": "d16ef6a81350594b782f27150b024f17"
  },
  {
    "url": "assets/js/29.bd55b2e0.js",
    "revision": "c80577e5aa8e4827cc320da8ea5403bf"
  },
  {
    "url": "assets/js/3.a60118a2.js",
    "revision": "9781ae3db35e6c4f663b52146bcdf1ba"
  },
  {
    "url": "assets/js/30.5792f7f5.js",
    "revision": "0ca899ef84a8f5e39df1e01500847d40"
  },
  {
    "url": "assets/js/31.842039c0.js",
    "revision": "3abfc7f0184998dc00e486f2a9f6481b"
  },
  {
    "url": "assets/js/4.83606b17.js",
    "revision": "1008a93fd20d9e2dd083307eab65d5db"
  },
  {
    "url": "assets/js/5.fd5fa3c8.js",
    "revision": "e8d0e0bb8045ab693f1e860bf9210db1"
  },
  {
    "url": "assets/js/6.360a7c63.js",
    "revision": "17d759b84b7dd48ced870319ea0cc357"
  },
  {
    "url": "assets/js/7.656dfcf4.js",
    "revision": "1098c5e4080461b7a0e7dcebfbac1419"
  },
  {
    "url": "assets/js/8.50fcce05.js",
    "revision": "5763981e162b8833d644829e8a4403c5"
  },
  {
    "url": "assets/js/9.13525f48.js",
    "revision": "771a8ac27cc5d7818a1696889ac41e19"
  },
  {
    "url": "assets/js/app.a1b3c5c2.js",
    "revision": "6b69564d93e7a695dc78362c040a7f73"
  },
  {
    "url": "categories/index.html",
    "revision": "92457ff00e28bb8ccb78d15f05134f29"
  },
  {
    "url": "demo.html",
    "revision": "3f3cc48e2aceac6f1687f0ec8de06470"
  },
  {
    "url": "index.html",
    "revision": "f8ce22ca0477eb3d94a8f707dab4468f"
  },
  {
    "url": "philosophy/man&gad/index.html",
    "revision": "2c72520ca6a43b20768643f3dceaff1c"
  },
  {
    "url": "philosophy/man&gad/patristic-philosophy.html",
    "revision": "d44c50493d6f07cc33877650552a84ce"
  },
  {
    "url": "philosophy/man&gad/philosophy-come-back.html",
    "revision": "1c39930902de7137eec73dc16dc515cb"
  },
  {
    "url": "philosophy/man&gad/scholasticism.html",
    "revision": "4e0370dbe46086a158480379617829a2"
  },
  {
    "url": "philosophy/origin/atomism&sophists.html",
    "revision": "0c5c6a1843700ef013e980d584034e18"
  },
  {
    "url": "philosophy/origin/history-of-philosophy.html",
    "revision": "efe4f8e0885f07ad2237491432d6684f"
  },
  {
    "url": "philosophy/origin/index.html",
    "revision": "79791956c68b95171948aeb9e9a90849"
  },
  {
    "url": "philosophy/origin/materialism-and-immaterialism.html",
    "revision": "359e2b63e82325ff6e07e9fb33582802"
  },
  {
    "url": "philosophy/origin/origin-of-philosophy.html",
    "revision": "8972bbd5a70e5764e45c32b9d5c600ef"
  },
  {
    "url": "philosophy/origin/Socrates.html",
    "revision": "b5d4273fc256fc6a361deb7ccbe87e1d"
  },
  {
    "url": "philosophy/rationalism&empiricism/Aristotle.html",
    "revision": "0bdc35c23838643b1f8395eaed746522"
  },
  {
    "url": "philosophy/rationalism&empiricism/index.html",
    "revision": "2123056e812bbbdb830eb806ba2d5e29"
  },
  {
    "url": "philosophy/self-settle/end-of-Greek.html",
    "revision": "409eb72512fd1c9706b190dd0aeeaec0"
  },
  {
    "url": "philosophy/self-settle/hedonism.html",
    "revision": "c3d28a27fd654ecc5792f066d9e996dd"
  },
  {
    "url": "philosophy/self-settle/index.html",
    "revision": "bbd7b812671bcd218f526058b47ad154"
  },
  {
    "url": "philosophy/self-settle/scepticism.html",
    "revision": "6a02c63d5650f6bd18d15e214fb59233"
  },
  {
    "url": "philosophy/self-settle/stoa.html",
    "revision": "68e737024d52777f10f59df069e08f2c"
  },
  {
    "url": "tag/index.html",
    "revision": "0e2c6ad10a63a075e3ff21c885420720"
  },
  {
    "url": "time.jpg",
    "revision": "217a6e2c0d56f4b97415f4a2bf79f92f"
  },
  {
    "url": "timeline/index.html",
    "revision": "cd87ddee8e3c1833994ed2ca4ab6551f"
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
