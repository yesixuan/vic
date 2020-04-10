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
    "url": "assets/css/0.styles.7c06cc45.css",
    "revision": "4b1f1206660c2516caddb5f0ffc907a9"
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
    "url": "assets/js/1.e3ef2fa5.js",
    "revision": "fea10cef5763de4308259e8f6469d948"
  },
  {
    "url": "assets/js/10.f19a5bab.js",
    "revision": "dc8d6139201b098e16020aa37b48d87b"
  },
  {
    "url": "assets/js/11.418148f4.js",
    "revision": "a99e4a6de80bbe6b95e77235587392de"
  },
  {
    "url": "assets/js/12.0aa11382.js",
    "revision": "f20ce40f0e06ebe9f8bcbec624e5508e"
  },
  {
    "url": "assets/js/13.fb26d1d5.js",
    "revision": "e5c8af3833076e5fb05c7a813730ff0c"
  },
  {
    "url": "assets/js/14.2791eaeb.js",
    "revision": "3bb26f7792961405ee103d791df41bbe"
  },
  {
    "url": "assets/js/15.6e61543a.js",
    "revision": "e613ae9e8b501d313a2932d5820ae0b6"
  },
  {
    "url": "assets/js/16.fc834d19.js",
    "revision": "cec389af760a43789ce579476cd5e91c"
  },
  {
    "url": "assets/js/17.03fd5e45.js",
    "revision": "da32936ac1ba5d4c31a2423173b43c12"
  },
  {
    "url": "assets/js/18.273479f8.js",
    "revision": "3e0b27515bef504cf780503c05e01fef"
  },
  {
    "url": "assets/js/19.e8cad335.js",
    "revision": "f14f7942584ac1ea33b5ec6cabebd209"
  },
  {
    "url": "assets/js/20.4f1c351c.js",
    "revision": "22b93f15c40c6f35b61ef30a9242ec23"
  },
  {
    "url": "assets/js/21.ce9ee83b.js",
    "revision": "abc869a1a5fceac8c05b6097d27484d7"
  },
  {
    "url": "assets/js/22.b3fb585b.js",
    "revision": "1fef74f09f715a77672e9876ae9d3539"
  },
  {
    "url": "assets/js/23.f9876aeb.js",
    "revision": "7cf00332857c43ad1aadf0bf9783cdbf"
  },
  {
    "url": "assets/js/24.608caec6.js",
    "revision": "92c210b731a9f51f02f87b1483cff2ca"
  },
  {
    "url": "assets/js/25.343bb119.js",
    "revision": "a3f5e4e0f3dc847be3010ec6dbbd7a0d"
  },
  {
    "url": "assets/js/26.d1e9daa3.js",
    "revision": "e6aa1207d00330ddc9d7f95f040555d9"
  },
  {
    "url": "assets/js/27.1329ff35.js",
    "revision": "ce83caab4b3192c773748d92636076ab"
  },
  {
    "url": "assets/js/28.82a05118.js",
    "revision": "01cc8df3bc5e0afd4f4a3bc5c42f0750"
  },
  {
    "url": "assets/js/29.1925480c.js",
    "revision": "a6960ebf20caf623888f0c835ab3ce00"
  },
  {
    "url": "assets/js/3.558347a3.js",
    "revision": "ae98b237df43eec6adc125ed812e52fa"
  },
  {
    "url": "assets/js/30.57cd2dfa.js",
    "revision": "a91b8eca56e2f565d15924e37d751f1c"
  },
  {
    "url": "assets/js/31.157b8d5e.js",
    "revision": "5459f57279fd598eb517e239b7ea5caa"
  },
  {
    "url": "assets/js/32.d1a56c75.js",
    "revision": "44d33b103e913da3c2e32f565edac57f"
  },
  {
    "url": "assets/js/33.d1bc04b5.js",
    "revision": "cb43e8b9bf6a52cbbd45df706b01011e"
  },
  {
    "url": "assets/js/34.bfc17209.js",
    "revision": "9c2703ff52e2cc2886eaba8c8c285fb9"
  },
  {
    "url": "assets/js/35.a6cdbd91.js",
    "revision": "f98617788734731ea081678f05961068"
  },
  {
    "url": "assets/js/36.8da1b251.js",
    "revision": "9fed4dadb17bf34e5e0c69c89cea9f17"
  },
  {
    "url": "assets/js/4.212daf04.js",
    "revision": "cd67e59947806021442e3e3e44d8591a"
  },
  {
    "url": "assets/js/5.2312035f.js",
    "revision": "484ea1b7799a65ca6ba3ab5a34026c4e"
  },
  {
    "url": "assets/js/6.65d445c8.js",
    "revision": "3fd10a55b9946c82571a3327263f3a7f"
  },
  {
    "url": "assets/js/7.d91c55cf.js",
    "revision": "6428682ef0429a9f3a9d0e3c04a9ab5c"
  },
  {
    "url": "assets/js/8.3c18a6f2.js",
    "revision": "36e9fae241891a8b63f0b585568e16d9"
  },
  {
    "url": "assets/js/9.715fd094.js",
    "revision": "771a8ac27cc5d7818a1696889ac41e19"
  },
  {
    "url": "assets/js/app.2e5aee2c.js",
    "revision": "a740e30ccbdf3b573b2e2b692f159987"
  },
  {
    "url": "categories/index.html",
    "revision": "4c9d80a1d8c8f05025b627fc82dc03b8"
  },
  {
    "url": "demo.html",
    "revision": "c8d274f26226603fac8565616244a3a2"
  },
  {
    "url": "index.html",
    "revision": "bd4b3972a53353bdd0b44325796714b5"
  },
  {
    "url": "philosophy/man&gad/index.html",
    "revision": "7b079681b32a3f8af5a50483289c618a"
  },
  {
    "url": "philosophy/man&gad/patristic-philosophy.html",
    "revision": "69eee9cbfac683aad5163c2e88fe78e6"
  },
  {
    "url": "philosophy/man&gad/philosophy-come-back.html",
    "revision": "a63d2b5690de599ec02fe704e1e29f59"
  },
  {
    "url": "philosophy/man&gad/scholasticism.html",
    "revision": "d9e877dec23ecfd72206f072eae66e70"
  },
  {
    "url": "philosophy/origin/atomism&sophists.html",
    "revision": "60a98d1dffdb705e7703a23fc924db82"
  },
  {
    "url": "philosophy/origin/history-of-philosophy.html",
    "revision": "ebb2b0dc113eff52b92288fdb9ec19b9"
  },
  {
    "url": "philosophy/origin/index.html",
    "revision": "9ce49bd4478593e1fa920cbd7481bf76"
  },
  {
    "url": "philosophy/origin/materialism-and-immaterialism.html",
    "revision": "e49dad5c7f210311eafa247d5249573d"
  },
  {
    "url": "philosophy/origin/origin-of-philosophy.html",
    "revision": "236f3f4a692c33cc5e748892e5655aca"
  },
  {
    "url": "philosophy/origin/Socrates.html",
    "revision": "796236d7afbcde0c3d75c5d2d0f654e2"
  },
  {
    "url": "philosophy/rationalism&empiricism/Aristotle.html",
    "revision": "c5a29b33e4ab9064022bbc85b9f6a2e0"
  },
  {
    "url": "philosophy/rationalism&empiricism/index.html",
    "revision": "19c41ea8334f4f2bcee01c3314cd5185"
  },
  {
    "url": "philosophy/reason/Descartes.html",
    "revision": "96d10b8882dd9dcbc86ea97dc7acb4c4"
  },
  {
    "url": "philosophy/reason/index.html",
    "revision": "ef3aa82a407dbf15ccf10b695a1999a9"
  },
  {
    "url": "philosophy/reason/Pascal.html",
    "revision": "f44b79212cd4621d355a86a269e37616"
  },
  {
    "url": "philosophy/reason/philo-sophia.html",
    "revision": "6481db7b63f165b404f36d6bff0a22d8"
  },
  {
    "url": "philosophy/reason/reformation.html",
    "revision": "b74f43c6f51d8a07b1888c2e8c2e225f"
  },
  {
    "url": "philosophy/self-settle/end-of-Greek.html",
    "revision": "c246c875b1e830cd8c4eb08fd4253a90"
  },
  {
    "url": "philosophy/self-settle/hedonism.html",
    "revision": "a4ed935966457d0b3e3865666308982c"
  },
  {
    "url": "philosophy/self-settle/index.html",
    "revision": "ffd21008cf6fff4452cefe1495e4525e"
  },
  {
    "url": "philosophy/self-settle/scepticism.html",
    "revision": "db234bb384e1f5832fe8a860be7accc4"
  },
  {
    "url": "philosophy/self-settle/stoa.html",
    "revision": "e6c2a9c1e70581b66ef53c3f9f054605"
  },
  {
    "url": "tag/index.html",
    "revision": "137edf8fd76ad573ecce81a09419f67b"
  },
  {
    "url": "time.jpg",
    "revision": "217a6e2c0d56f4b97415f4a2bf79f92f"
  },
  {
    "url": "timeline/index.html",
    "revision": "179cd3fdeadef73053ef08a01666192a"
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
