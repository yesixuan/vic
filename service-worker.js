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
    "url": "assets/js/10.9904310c.js",
    "revision": "67497283a05f9cf73b34093d973d3a7b"
  },
  {
    "url": "assets/js/11.e9582092.js",
    "revision": "54a735d499bdd40973f8cf06bc523740"
  },
  {
    "url": "assets/js/12.1d0ffa9f.js",
    "revision": "5154eecf4df0c73a8e9e483f97206682"
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
    "url": "assets/js/23.d28b6ce6.js",
    "revision": "bd8fa721cb819ec636cb723b4b68e500"
  },
  {
    "url": "assets/js/24.f5036fd8.js",
    "revision": "438aa24e6e872d503c30c67ef32769af"
  },
  {
    "url": "assets/js/25.2bfd9f1c.js",
    "revision": "35c8dffcded6b30a490e2079b8c53220"
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
    "url": "assets/js/app.073548e5.js",
    "revision": "8fa3560302057e345579ec051ab68a86"
  },
  {
    "url": "categories/index.html",
    "revision": "639b2e43d4a6aa8effca668c5211cb28"
  },
  {
    "url": "demo.html",
    "revision": "5ccb0f788d23b79069248a1cb22c4ce0"
  },
  {
    "url": "index.html",
    "revision": "b01c2b4195b4655a9d423c3ac9e40deb"
  },
  {
    "url": "philosophy/man&gad/index.html",
    "revision": "191d15b20fde4c590124317a495d805e"
  },
  {
    "url": "philosophy/man&gad/patristic-philosophy.html",
    "revision": "3cc0fb8d2576fc8bb91dc3f692b0aebe"
  },
  {
    "url": "philosophy/man&gad/philosophy-come-back.html",
    "revision": "a65826e4a4e28ad1bc0686a2e93694a9"
  },
  {
    "url": "philosophy/man&gad/scholasticism.html",
    "revision": "caa1cbac2488793dd77ffc4693454d97"
  },
  {
    "url": "philosophy/origin/atomism&sophists.html",
    "revision": "43668d44187fd3925b096f295f5224e7"
  },
  {
    "url": "philosophy/origin/history-of-philosophy.html",
    "revision": "3aa8df3ac0bccb6bd4c9df7441f31649"
  },
  {
    "url": "philosophy/origin/index.html",
    "revision": "b255b9c30299d7972c3aca2f32b3fd07"
  },
  {
    "url": "philosophy/origin/materialism-and-immaterialism.html",
    "revision": "550805ec6a7959163d9c46bf94666d43"
  },
  {
    "url": "philosophy/origin/origin-of-philosophy.html",
    "revision": "d6384fadd3dac198e4c3251c84f1194f"
  },
  {
    "url": "philosophy/origin/Socrates.html",
    "revision": "b06856c88b54571a14731f23e5db5972"
  },
  {
    "url": "philosophy/rationalism&empiricism/Aristotle.html",
    "revision": "d0fde011afe0a331d40a78c9088154a2"
  },
  {
    "url": "philosophy/rationalism&empiricism/index.html",
    "revision": "806b492d83247becca083e175f69e4cf"
  },
  {
    "url": "philosophy/self-settle/end-of-Greek.html",
    "revision": "677b8b3ddf362c21f2566153f2f6d9a0"
  },
  {
    "url": "philosophy/self-settle/hedonism.html",
    "revision": "671567dd3489066ebff927865c9bc9ea"
  },
  {
    "url": "philosophy/self-settle/index.html",
    "revision": "63b5e5900a919d470a6a21c0c8b0abf9"
  },
  {
    "url": "philosophy/self-settle/scepticism.html",
    "revision": "d6aabb35117b5eed4c93e67c93ed1b67"
  },
  {
    "url": "philosophy/self-settle/stoa.html",
    "revision": "500a9d8bb0b20015c3e0750fb95c0672"
  },
  {
    "url": "tag/index.html",
    "revision": "ddfbe36a31ada6165104d5a96b6b9729"
  },
  {
    "url": "time.jpg",
    "revision": "217a6e2c0d56f4b97415f4a2bf79f92f"
  },
  {
    "url": "timeline/index.html",
    "revision": "7416b31bb8fb17d4d28b534820980c6d"
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
