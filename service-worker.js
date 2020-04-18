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
    "revision": "b5e89b08bf1b8ab29c2a8bc443e29635"
  },
  {
    "url": "assets/css/0.styles.5be8d092.css",
    "revision": "2501ee2d2f4675a2ce497db22c656d69"
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
    "url": "assets/js/1.8bfed15a.js",
    "revision": "ef3f0cd828ed8fd3fa14653a633ddd86"
  },
  {
    "url": "assets/js/10.dcc27aa9.js",
    "revision": "7b644c5c273b56ad748107ca6b2b8936"
  },
  {
    "url": "assets/js/11.913c7e7d.js",
    "revision": "7ef0083a2d9c144f8ec665cedf068210"
  },
  {
    "url": "assets/js/12.059e77dd.js",
    "revision": "a916f1c8f355f6422075f23556812be3"
  },
  {
    "url": "assets/js/13.eaa75b6a.js",
    "revision": "dc40c8075350a8d2cc3105a98a164b83"
  },
  {
    "url": "assets/js/14.14e9df07.js",
    "revision": "e363874be7fc607c80665731c9eadd22"
  },
  {
    "url": "assets/js/15.dbf82423.js",
    "revision": "8de508985e95878adcc7eec8e8421eaf"
  },
  {
    "url": "assets/js/16.78829553.js",
    "revision": "f48928035393477e80359a0de10dcbf8"
  },
  {
    "url": "assets/js/17.3b331b18.js",
    "revision": "b4833c842a481f7a9ea87ffffbebc1b1"
  },
  {
    "url": "assets/js/18.560a98bf.js",
    "revision": "9282300d8cafd0266057e0d9ca281984"
  },
  {
    "url": "assets/js/19.b0c488f1.js",
    "revision": "83bae0998433ba7c7d7d5d4824806709"
  },
  {
    "url": "assets/js/20.09eb1d79.js",
    "revision": "bb88b04729503fa1ae819f4e33bec08b"
  },
  {
    "url": "assets/js/21.1a04bb42.js",
    "revision": "646405cdc9a08fe0a6b416992228ec0a"
  },
  {
    "url": "assets/js/22.028f653e.js",
    "revision": "b78b25c9aa62568b749a31a36daa3253"
  },
  {
    "url": "assets/js/23.f3dd2849.js",
    "revision": "6741d7880694088d1b608c8d1088b1a6"
  },
  {
    "url": "assets/js/24.a708f9c0.js",
    "revision": "45585508d065039cbff5b4468b469299"
  },
  {
    "url": "assets/js/25.ecab9eb1.js",
    "revision": "8df0f556d009ea027c55617a2a17a46f"
  },
  {
    "url": "assets/js/26.4e0f5bc2.js",
    "revision": "4eee780111009adc0c3db7d25d118da9"
  },
  {
    "url": "assets/js/27.356e4ced.js",
    "revision": "ec0a016d97d6342fa65bd71cf17a7732"
  },
  {
    "url": "assets/js/28.a70ae4dd.js",
    "revision": "5fa64ad72cd9fc85c639ebf772fa7321"
  },
  {
    "url": "assets/js/29.d06fb24b.js",
    "revision": "fc70e4af43892af827e4be1dc5ba2f44"
  },
  {
    "url": "assets/js/3.75e219d3.js",
    "revision": "0f0213030ee8836fb5cce5449e5510f3"
  },
  {
    "url": "assets/js/30.e80e2c17.js",
    "revision": "7e9c650d8074ace4783822e6770e16f8"
  },
  {
    "url": "assets/js/31.f44d7d9d.js",
    "revision": "22cda09330a243f694bd02cb7ad8f69d"
  },
  {
    "url": "assets/js/32.d8ddc256.js",
    "revision": "f023b9ece5a972b336bd905a4cf57ab6"
  },
  {
    "url": "assets/js/33.4b6905fd.js",
    "revision": "06acde84b40647397a321af252c8a421"
  },
  {
    "url": "assets/js/34.dc97e1c9.js",
    "revision": "c7fb9d0e60999c892b694d6679efad81"
  },
  {
    "url": "assets/js/35.4a51977f.js",
    "revision": "4389294c8e3f4fe8bdef72e85ce58d1d"
  },
  {
    "url": "assets/js/36.181423fd.js",
    "revision": "6624ff0ddb9daceb8020550e6cfa3af1"
  },
  {
    "url": "assets/js/37.21502569.js",
    "revision": "ec72e865b1411549544fb57148fd10d0"
  },
  {
    "url": "assets/js/38.ad48ea71.js",
    "revision": "0962390b129444b3a00a59adfd33fc4e"
  },
  {
    "url": "assets/js/39.f84987fa.js",
    "revision": "15c24d87a66e3968f254969d3673a61a"
  },
  {
    "url": "assets/js/4.11c9680f.js",
    "revision": "4b41647476ea562a2c38a6255314372a"
  },
  {
    "url": "assets/js/40.cb09187b.js",
    "revision": "9b063215103fdbfa197a8a926c63f09a"
  },
  {
    "url": "assets/js/5.b608bf35.js",
    "revision": "79d5f3cf252f4ce51879ce2a2274505f"
  },
  {
    "url": "assets/js/6.7be5447f.js",
    "revision": "7d10d1b6a31a99f2fea0ca9223ae8aaf"
  },
  {
    "url": "assets/js/7.04991c46.js",
    "revision": "08bec252a3d5300814ee11b5b8ef308e"
  },
  {
    "url": "assets/js/8.57e28a80.js",
    "revision": "98ca603a4de9a6c8a2d9249c10aeeefe"
  },
  {
    "url": "assets/js/9.c6d8e784.js",
    "revision": "f24f9a350e312be2b3cb264315f65371"
  },
  {
    "url": "assets/js/app.085963f6.js",
    "revision": "89af756366852f6178d53901160c7022"
  },
  {
    "url": "categories/index.html",
    "revision": "364dbadfc2efaf5d481fcbef1b5f8105"
  },
  {
    "url": "demo.html",
    "revision": "e3b32a18e9cef658d5a077d0ab456e89"
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
    "revision": "a0d7b79a4ddd3304282a94c2d0764e0e"
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
    "url": "philosophy/enlightenment/index.html",
    "revision": "9c7766ca8609d4ab8cde5f7efc5436ce"
  },
  {
    "url": "philosophy/enlightenment/Locke.html",
    "revision": "a956dc75481aa415c28dae4c55a85a02"
  },
  {
    "url": "philosophy/man&gad/index.html",
    "revision": "53562a8e2173c9edd80baa3205726618"
  },
  {
    "url": "philosophy/man&gad/patristic-philosophy.html",
    "revision": "52aa4e52c714755f38ce1dd5c66eb3df"
  },
  {
    "url": "philosophy/man&gad/philosophy-come-back.html",
    "revision": "7e6f6f24a7e760a9d2b7a26a7e88d885"
  },
  {
    "url": "philosophy/man&gad/scholasticism.html",
    "revision": "ea302bc4585b74285c8023200d3d10c0"
  },
  {
    "url": "philosophy/origin/atomism&sophists.html",
    "revision": "a2c2ef093ecab44d51e116c2ca1014ab"
  },
  {
    "url": "philosophy/origin/history-of-philosophy.html",
    "revision": "98901b589f1480bcb8bac0105ed0deb7"
  },
  {
    "url": "philosophy/origin/index.html",
    "revision": "8c40aa8f16f4c5cdf7560ac539e8c8f1"
  },
  {
    "url": "philosophy/origin/materialism-and-immaterialism.html",
    "revision": "b8a275f3cf9a8adf79b271889031ce0c"
  },
  {
    "url": "philosophy/origin/origin-of-philosophy.html",
    "revision": "952212efb27d95c0aba4676ef772063e"
  },
  {
    "url": "philosophy/origin/Socrates.html",
    "revision": "df3bb54d7c82423a11fc4045a788ba0a"
  },
  {
    "url": "philosophy/rationalism&empiricism/Aristotle.html",
    "revision": "7a7c9b7f57bb3a634f0d1c534239baea"
  },
  {
    "url": "philosophy/rationalism&empiricism/index.html",
    "revision": "83826d860476f2d1f4999c6637b50bb4"
  },
  {
    "url": "philosophy/reason/Descartes.html",
    "revision": "867a705650a170ad1be426f87996435e"
  },
  {
    "url": "philosophy/reason/index.html",
    "revision": "87427b6dd83e603e3e5d02663584d525"
  },
  {
    "url": "philosophy/reason/Leibnitz.html",
    "revision": "f398bfc24e25832e04ed7e94e06326c9"
  },
  {
    "url": "philosophy/reason/Pascal.html",
    "revision": "47ccdfad45c9ef2602e609ff7a73c62c"
  },
  {
    "url": "philosophy/reason/philo-sophia.html",
    "revision": "03c407b247d9890ae6d57e4986571f52"
  },
  {
    "url": "philosophy/reason/reformation.html",
    "revision": "51765ddc8a4fec31096703578af39466"
  },
  {
    "url": "philosophy/reason/Spinoza.html",
    "revision": "266a05191b0cd60c2d9716e7f2794f3c"
  },
  {
    "url": "philosophy/self-settle/end-of-Greek.html",
    "revision": "63aa9ecf627c3656b2072baca2874147"
  },
  {
    "url": "philosophy/self-settle/hedonism.html",
    "revision": "ac7fb754f48f6263dbf719630343f000"
  },
  {
    "url": "philosophy/self-settle/index.html",
    "revision": "2ed71cfada311b323cabeec0b4cd3d00"
  },
  {
    "url": "philosophy/self-settle/scepticism.html",
    "revision": "8ff5ba5cd34bed0793899b88c9122446"
  },
  {
    "url": "philosophy/self-settle/stoa.html",
    "revision": "bbd9d2a39dbef5bfe79b77fa7d39f4ef"
  },
  {
    "url": "tag/index.html",
    "revision": "1e810f5c6b4ac0862227a49ddb1e3dcc"
  },
  {
    "url": "timeline/index.html",
    "revision": "4523cb3810006dc4f50ff0b3bde8c366"
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
