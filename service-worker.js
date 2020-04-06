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
    "url": "assets/css/0.styles.870a35d2.css",
    "revision": "6e1c5dd5388cab34e4f85eea3559853d"
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
    "url": "assets/js/10.fcabcd1f.js",
    "revision": "fe7460b1ecae8c5cfe6e45628ee4a6ca"
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
    "url": "assets/js/15.72e78ad9.js",
    "revision": "35e70d66d5565f4c42f252788eb075df"
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
    "url": "assets/js/20.eab18825.js",
    "revision": "0c7483ec59c6c4d608b0affd786538a0"
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
    "url": "assets/js/25.c4afa7b5.js",
    "revision": "525dd033142f7884197f23243cbcaf49"
  },
  {
    "url": "assets/js/26.e279f579.js",
    "revision": "4cee2276d0a0f06ae7be05a4c42bf498"
  },
  {
    "url": "assets/js/27.e5b5c9e6.js",
    "revision": "f9da48265d40444ffe27f6c90a17b316"
  },
  {
    "url": "assets/js/28.3dee2c82.js",
    "revision": "3646c26e9fe1c9ac02af5f0fe8affc45"
  },
  {
    "url": "assets/js/29.1ac37a27.js",
    "revision": "b860d6eed8a6803aafa1e2bdf9001fbe"
  },
  {
    "url": "assets/js/3.a60118a2.js",
    "revision": "9781ae3db35e6c4f663b52146bcdf1ba"
  },
  {
    "url": "assets/js/30.37b33e6f.js",
    "revision": "ce09106e0c956b5bed091dc5e67659f7"
  },
  {
    "url": "assets/js/31.2ac67951.js",
    "revision": "36079e837e1bf725b47fc7e68d7a2683"
  },
  {
    "url": "assets/js/32.cb0d21f3.js",
    "revision": "c7fe77ec58f2e7f8195ed9bb7016eea2"
  },
  {
    "url": "assets/js/33.8052aec9.js",
    "revision": "0b944e2909f6fe9c5a550daf58df2b7d"
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
    "url": "assets/js/app.3b94c821.js",
    "revision": "e3c89b7766c5d4fe3c5a0e839093d4fb"
  },
  {
    "url": "categories/index.html",
    "revision": "7a8e48611f30343bf0a39e670c1ce31e"
  },
  {
    "url": "demo.html",
    "revision": "222472335738137bb8ba2d12affeccd2"
  },
  {
    "url": "index.html",
    "revision": "39f3078505baabdb5cceeb586acea115"
  },
  {
    "url": "philosophy/man&gad/index.html",
    "revision": "5d9954b21541ab4608bd1fd478bb8480"
  },
  {
    "url": "philosophy/man&gad/patristic-philosophy.html",
    "revision": "68bd9ebb86ca87f8b593c04d3461f1ce"
  },
  {
    "url": "philosophy/man&gad/philosophy-come-back.html",
    "revision": "23690522e50415731f70fcdcf511a381"
  },
  {
    "url": "philosophy/man&gad/scholasticism.html",
    "revision": "58db19d190eb62a97564acf3ec7d5cfa"
  },
  {
    "url": "philosophy/origin/atomism&sophists.html",
    "revision": "49a3b6cef93ab573a689ee2e05dc4e95"
  },
  {
    "url": "philosophy/origin/history-of-philosophy.html",
    "revision": "2e07c5c13074640ee47596cf658a18c1"
  },
  {
    "url": "philosophy/origin/index.html",
    "revision": "f62e3344075b28bb01e7d9f5d434a585"
  },
  {
    "url": "philosophy/origin/materialism-and-immaterialism.html",
    "revision": "90e0c002dbfe26956874f4ca5287f1d0"
  },
  {
    "url": "philosophy/origin/origin-of-philosophy.html",
    "revision": "c0860fa151b1aefb795d172bff376776"
  },
  {
    "url": "philosophy/origin/Socrates.html",
    "revision": "6fbb734646f98ba56e1b7ac14a2293a6"
  },
  {
    "url": "philosophy/rationalism&empiricism/Aristotle.html",
    "revision": "6ecb4ca76626f20a009e302e30f00e48"
  },
  {
    "url": "philosophy/rationalism&empiricism/index.html",
    "revision": "4e30e00780b17f04806c0ddae52dcf12"
  },
  {
    "url": "philosophy/reason/index.html",
    "revision": "385fc385329938e38b1bba2c23ac7f44"
  },
  {
    "url": "philosophy/reason/reformation.html",
    "revision": "eafbb2ebc83a575b7c77473db2e9eed7"
  },
  {
    "url": "philosophy/self-settle/end-of-Greek.html",
    "revision": "3222a6c713210d5bcbe5c23c10d00739"
  },
  {
    "url": "philosophy/self-settle/hedonism.html",
    "revision": "7b7f2353052c4c05185c08bebec1d1b2"
  },
  {
    "url": "philosophy/self-settle/index.html",
    "revision": "0dcf672eb825c2ad352992ed559c1de0"
  },
  {
    "url": "philosophy/self-settle/scepticism.html",
    "revision": "f3c279d7709285636e49c2a29748786e"
  },
  {
    "url": "philosophy/self-settle/stoa.html",
    "revision": "d6adad2460496f1ce358778f4abf9276"
  },
  {
    "url": "tag/index.html",
    "revision": "cca5e8d211b2cf13194df13c6bd34c33"
  },
  {
    "url": "time.jpg",
    "revision": "217a6e2c0d56f4b97415f4a2bf79f92f"
  },
  {
    "url": "timeline/index.html",
    "revision": "688e83f3f671df6dd2dd96e4c947c0c9"
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
