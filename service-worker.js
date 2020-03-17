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
    "revision": "3f11cf1822547c02d9dae12128152b46"
  },
  {
    "url": "assets/css/0.styles.f38f898a.css",
    "revision": "b27e063b2ac1ea996f7143f7581b2de3"
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
    "url": "assets/js/1.eac3cb7e.js",
    "revision": "72ad45b691816f07f974ae7150c34c0f"
  },
  {
    "url": "assets/js/10.fad1d22b.js",
    "revision": "84e9680b531f96ea2af70d702a36c63f"
  },
  {
    "url": "assets/js/11.b699e366.js",
    "revision": "bc09181d400931e9f220ddc45d640c25"
  },
  {
    "url": "assets/js/12.70d7be1f.js",
    "revision": "4a3cd69803fa3c97affcbc0b44400fc0"
  },
  {
    "url": "assets/js/13.2f762b29.js",
    "revision": "9bb450498565809cb39af1fdfb4be40f"
  },
  {
    "url": "assets/js/14.0c3bdbf6.js",
    "revision": "829a28f15e3255bf991146f8ccf978ca"
  },
  {
    "url": "assets/js/15.e127fdaa.js",
    "revision": "40428fd1b03211f4a5ac3fcf0ac3a435"
  },
  {
    "url": "assets/js/16.43f8e2d2.js",
    "revision": "30a51b0678f485cd2e23930e6ddaf65c"
  },
  {
    "url": "assets/js/17.8bddb854.js",
    "revision": "8e10f48a8fde4f27b0f5931b6edef94c"
  },
  {
    "url": "assets/js/18.8a8cedee.js",
    "revision": "c6edbb6614886269a2415f27723fdecc"
  },
  {
    "url": "assets/js/19.c1969d76.js",
    "revision": "30cd7e2e425b1c8a40a82bca3be253f7"
  },
  {
    "url": "assets/js/3.7b01cd52.js",
    "revision": "6a4ea0adfd94d4f9d5f58619c6dc2f88"
  },
  {
    "url": "assets/js/4.fe5cb08a.js",
    "revision": "81f713ff84b73d68bbaafd3a33a8e10b"
  },
  {
    "url": "assets/js/5.2ba08ba1.js",
    "revision": "57b2ff86d5d0447446a64bc8c4c9987d"
  },
  {
    "url": "assets/js/6.31e69a57.js",
    "revision": "5650b86e464b784e1a511978943e7f68"
  },
  {
    "url": "assets/js/7.6f9d8a75.js",
    "revision": "e6f678e79dfbb84ef7b9f2ce52f0ee60"
  },
  {
    "url": "assets/js/8.8d2e0302.js",
    "revision": "1e719258025ff01c18b18ca19c21d68f"
  },
  {
    "url": "assets/js/9.37c7d139.js",
    "revision": "3704283182d726ad4c0b7f6323ebcb2a"
  },
  {
    "url": "assets/js/app.6040b4bf.js",
    "revision": "c9f30dad33f7df8b88b97a8c6ded7502"
  },
  {
    "url": "categories/index.html",
    "revision": "1cf4ccee84cbd2854171e1d3279b45cc"
  },
  {
    "url": "demo.html",
    "revision": "842d2417cf45689a8bf05d6704512136"
  },
  {
    "url": "index.html",
    "revision": "5ea98d8807541fa1dd54ee6455f70eef"
  },
  {
    "url": "philosophy/origin/atomism&sophists.html",
    "revision": "bec615a38803971a3b91ab82e763a7df"
  },
  {
    "url": "philosophy/origin/history-of-philosophy.html",
    "revision": "0b461e909c05d2807b09b7b7aba8a962"
  },
  {
    "url": "philosophy/origin/index.html",
    "revision": "8136534b576121852bcd1727a0ba9548"
  },
  {
    "url": "philosophy/origin/materialism-and-immaterialism.html",
    "revision": "9a749d065db289b47ccbdc581cbefc5b"
  },
  {
    "url": "philosophy/origin/origin-of-philosophy.html",
    "revision": "21b390284abdc4962a3658137594dafb"
  },
  {
    "url": "philosophy/origin/Socrates.html",
    "revision": "b6bdc9ed9f167ad037b2f6e688f7ee83"
  },
  {
    "url": "tag/index.html",
    "revision": "dc6c08e7306612691cbd35460f97f2b0"
  },
  {
    "url": "time.jpg",
    "revision": "217a6e2c0d56f4b97415f4a2bf79f92f"
  },
  {
    "url": "timeline/index.html",
    "revision": "760cc0d8e35a7af340695f7de26de270"
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
