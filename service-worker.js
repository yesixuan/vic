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
    "url": "assets/js/10.c357478d.js",
    "revision": "6acf19355ebcd319c392c5699e4a109a"
  },
  {
    "url": "assets/js/11.93445289.js",
    "revision": "ac663f2f8ac3ce4526021b8418b54c8f"
  },
  {
    "url": "assets/js/12.1c2395a6.js",
    "revision": "e398aaa222a484d671a00531be74d169"
  },
  {
    "url": "assets/js/13.941ab324.js",
    "revision": "158847cede70b98168ccc13fea435998"
  },
  {
    "url": "assets/js/14.e571b9f8.js",
    "revision": "478a0b3728b6f8ebc718dd2a5b110da2"
  },
  {
    "url": "assets/js/15.a73d8eda.js",
    "revision": "3d6cd3d5b6114c302a89bacaecaff02c"
  },
  {
    "url": "assets/js/16.f6bf6ef8.js",
    "revision": "52a9e1cc8e12d5b75dca7f0f7ea3f1c2"
  },
  {
    "url": "assets/js/17.78fe3a2e.js",
    "revision": "c247e28971f5f258e6540672d51ac739"
  },
  {
    "url": "assets/js/18.c1e5668d.js",
    "revision": "190cfdce9298aa2e076245065a8cb3e3"
  },
  {
    "url": "assets/js/19.dd283c19.js",
    "revision": "d45018e26d0e5f204f6e2b879627609a"
  },
  {
    "url": "assets/js/20.cca4aaac.js",
    "revision": "f43cb35ae84197d2bc3d7abd5cca0789"
  },
  {
    "url": "assets/js/21.0dad07a6.js",
    "revision": "95fbae6cb47c99934c668b52a7778cee"
  },
  {
    "url": "assets/js/22.f8a04411.js",
    "revision": "2b9ee46d2ce231372a01913c63a391dd"
  },
  {
    "url": "assets/js/23.07541177.js",
    "revision": "a03c92fd45ae7689839f88da1737ed83"
  },
  {
    "url": "assets/js/24.5b1f3b7b.js",
    "revision": "f98d178058d4f8daa963b198fa5d3505"
  },
  {
    "url": "assets/js/25.2efcdd46.js",
    "revision": "152a45788f7fd4551441c896234c9f3a"
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
    "url": "assets/js/app.0ccfacc1.js",
    "revision": "d4315413e5ab18f9e2a3e7a81c10a421"
  },
  {
    "url": "categories/index.html",
    "revision": "e03e78bf4e22315b54cdb3f3a7c94710"
  },
  {
    "url": "demo.html",
    "revision": "8af32b19806889043caf56696454fe3b"
  },
  {
    "url": "index.html",
    "revision": "6b5b1c8f6dcceab846dccc15b89f17b1"
  },
  {
    "url": "philosophy/origin/atomism&sophists.html",
    "revision": "c4c48f8dcf5b1c1b76aa7558082c7213"
  },
  {
    "url": "philosophy/origin/history-of-philosophy.html",
    "revision": "4150584642d35e01a8298da8165dbd96"
  },
  {
    "url": "philosophy/origin/index.html",
    "revision": "d6e3a94e9df44fcd6d419079d9eda8c1"
  },
  {
    "url": "philosophy/origin/materialism-and-immaterialism.html",
    "revision": "a2afb31d7f8ccffe8f830c7b6eb53bbe"
  },
  {
    "url": "philosophy/origin/origin-of-philosophy.html",
    "revision": "5c6eb7d3a18c0f8f05862c9c84b2e5f8"
  },
  {
    "url": "philosophy/origin/Socrates.html",
    "revision": "3593bd9613402fb2e207c555278bae06"
  },
  {
    "url": "philosophy/rationalism&empiricism/Aristotle.html",
    "revision": "8acd7100d82ab61c6efa286ae6e9af5c"
  },
  {
    "url": "philosophy/rationalism&empiricism/index.html",
    "revision": "4b8695148d5e38ba51796b6363936fb3"
  },
  {
    "url": "philosophy/self-settle/hedonism.html",
    "revision": "aef4693243b688ff0f8e4142338f759f"
  },
  {
    "url": "philosophy/self-settle/index.html",
    "revision": "cab4c0bc97c52a7ec5993374dc146c5d"
  },
  {
    "url": "philosophy/self-settle/scepticism.html",
    "revision": "d73aaf252be4ffcee6aaf64873f01409"
  },
  {
    "url": "tag/index.html",
    "revision": "39bf9edc3832f4d71aec9cd64f71ce11"
  },
  {
    "url": "time.jpg",
    "revision": "217a6e2c0d56f4b97415f4a2bf79f92f"
  },
  {
    "url": "timeline/index.html",
    "revision": "8fca455f81c5d1ee16d99f01489c00b8"
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
