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
    "revision": "90744c9afd0902dfe668a861c49210aa"
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
    "url": "assets/js/10.9e2d6b2a.js",
    "revision": "2d5562a0fbf3b7ec3bd6107c3ab168f5"
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
    "url": "assets/js/13.9f24ed17.js",
    "revision": "105e9c0ae460ae369cfc1479db26c686"
  },
  {
    "url": "assets/js/14.afdb3d26.js",
    "revision": "bf03a4205e07bf26b9c98faaa61ff0d6"
  },
  {
    "url": "assets/js/15.2c89825a.js",
    "revision": "35a1d9f7f60ef0fedf1775a9e4c7f053"
  },
  {
    "url": "assets/js/16.3a16556a.js",
    "revision": "001f7e103313dd5480ecb269ac7e78cc"
  },
  {
    "url": "assets/js/17.eb678bfe.js",
    "revision": "01d4aa08ed8e1b979e1d6d62052f7ae5"
  },
  {
    "url": "assets/js/18.186e993c.js",
    "revision": "4eef3ba37ec94c9be4ad447a6000267c"
  },
  {
    "url": "assets/js/19.e0ca3357.js",
    "revision": "14e35ea0db071134b8d4565ff8b2f976"
  },
  {
    "url": "assets/js/20.743004d7.js",
    "revision": "16a33aa798c20a90d52abe08a278fc0c"
  },
  {
    "url": "assets/js/21.ddec3739.js",
    "revision": "2784a5a4c56f7c6c2fd85519941d1025"
  },
  {
    "url": "assets/js/22.d5bbf0b4.js",
    "revision": "1898366183f4913df57266b14d81fd9b"
  },
  {
    "url": "assets/js/23.b646ff1f.js",
    "revision": "1ad587f41ed78f513b1dd70029ad4ba9"
  },
  {
    "url": "assets/js/24.52c880a5.js",
    "revision": "c0a8ac8179dfc43bb2c3de8539235b81"
  },
  {
    "url": "assets/js/25.e7b03857.js",
    "revision": "20a3b7700883331ae6b7a3539de95f71"
  },
  {
    "url": "assets/js/26.9f7a88dd.js",
    "revision": "361e8446ef7da461eb85912e45102858"
  },
  {
    "url": "assets/js/27.bca18db9.js",
    "revision": "d8d037bba928255c0ee4782d68aa62c4"
  },
  {
    "url": "assets/js/28.84e1d743.js",
    "revision": "0909f858bf7ba44f9e61d3e1c8831fcd"
  },
  {
    "url": "assets/js/29.b36d3f5f.js",
    "revision": "c0f5f0a52ea7c011219241c8ea1a1431"
  },
  {
    "url": "assets/js/3.75e219d3.js",
    "revision": "0f0213030ee8836fb5cce5449e5510f3"
  },
  {
    "url": "assets/js/30.1f2a9541.js",
    "revision": "584bc052301c09bfe536076a7d8c63a7"
  },
  {
    "url": "assets/js/31.55380782.js",
    "revision": "21da17ca6c4e09f0ebf9ed5633d11073"
  },
  {
    "url": "assets/js/32.cdbea796.js",
    "revision": "d65a7affe2b3a96505b52b903fc1754f"
  },
  {
    "url": "assets/js/33.5af407a3.js",
    "revision": "e6be3a77f54f89a2b2918537aea2b8a2"
  },
  {
    "url": "assets/js/34.9bd36953.js",
    "revision": "8714a5890b6dd0983e8aa7302e1cab54"
  },
  {
    "url": "assets/js/35.891845af.js",
    "revision": "03856501ea2a9af9eea632de7b4e7ae9"
  },
  {
    "url": "assets/js/36.9d2a057c.js",
    "revision": "07c860479351aad4249a9f46abc81e8a"
  },
  {
    "url": "assets/js/37.ca76ba1a.js",
    "revision": "a7d5c52150f8cc1457cc8744cbe6ce14"
  },
  {
    "url": "assets/js/38.fbf17d18.js",
    "revision": "2580a9d2729dbae7d5155223a0d1d9eb"
  },
  {
    "url": "assets/js/39.74625a01.js",
    "revision": "b9117d00b294f990872fa79e28b43c91"
  },
  {
    "url": "assets/js/4.11c9680f.js",
    "revision": "4b41647476ea562a2c38a6255314372a"
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
    "url": "assets/js/app.a26fe5d2.js",
    "revision": "c7577bdcb056b213960e65a8d54c2f65"
  },
  {
    "url": "categories/index.html",
    "revision": "341e6dc9ec281c992da0b240cd71316d"
  },
  {
    "url": "demo.html",
    "revision": "a6357f105a8b155075aa51202321959f"
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
    "revision": "6cbb7f631247abd9e75bec9f866e3e99"
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
    "revision": "cd853eff18be71d82dc27eb468acfc1f"
  },
  {
    "url": "philosophy/man&gad/index.html",
    "revision": "92431073f22cdea8534b6145edba13d1"
  },
  {
    "url": "philosophy/man&gad/patristic-philosophy.html",
    "revision": "975f3a9392f9bb57bbad868e11c5ffaa"
  },
  {
    "url": "philosophy/man&gad/philosophy-come-back.html",
    "revision": "275c042998393f09d5fbfcf1c3b0364c"
  },
  {
    "url": "philosophy/man&gad/scholasticism.html",
    "revision": "e0d474a910aa15c62bc453312f9ddcb1"
  },
  {
    "url": "philosophy/origin/atomism&sophists.html",
    "revision": "e1142e718aba6dd31436bb3b323442eb"
  },
  {
    "url": "philosophy/origin/history-of-philosophy.html",
    "revision": "092b6be2eaf64ab48db90529e7f4d7a0"
  },
  {
    "url": "philosophy/origin/index.html",
    "revision": "38c0f6346fe4730afdabe7361d362e18"
  },
  {
    "url": "philosophy/origin/materialism-and-immaterialism.html",
    "revision": "e50b07da4c46e12655df7d2ff698018a"
  },
  {
    "url": "philosophy/origin/origin-of-philosophy.html",
    "revision": "42ce3a5f2489cf0778635f1e291189ac"
  },
  {
    "url": "philosophy/origin/Socrates.html",
    "revision": "fd599ccf3c104bdcee44b6089852d07b"
  },
  {
    "url": "philosophy/rationalism&empiricism/Aristotle.html",
    "revision": "0bdd08bc29a69f75f8c2e2e381da756c"
  },
  {
    "url": "philosophy/rationalism&empiricism/index.html",
    "revision": "5434485b3854341686787385c4c614cd"
  },
  {
    "url": "philosophy/reason/Descartes.html",
    "revision": "60aacafd47caa039a2db0212ca5ed937"
  },
  {
    "url": "philosophy/reason/index.html",
    "revision": "962b8ee21329368bc53b029b71fc16d7"
  },
  {
    "url": "philosophy/reason/Leibnitz.html",
    "revision": "367135780e71bef28d7827cdecfbd4fc"
  },
  {
    "url": "philosophy/reason/Pascal.html",
    "revision": "d16e50c7cf0bb8879452163d6d04148e"
  },
  {
    "url": "philosophy/reason/philo-sophia.html",
    "revision": "3507b7c92d62b33508b2df2aaa4b48d6"
  },
  {
    "url": "philosophy/reason/reformation.html",
    "revision": "3b99ec5d90a22eb4369886e84e85f968"
  },
  {
    "url": "philosophy/reason/Spinoza.html",
    "revision": "a0e67451393af03861756daafc87d6ce"
  },
  {
    "url": "philosophy/self-settle/end-of-Greek.html",
    "revision": "a431b730d8376c3032f57b9f486ebeda"
  },
  {
    "url": "philosophy/self-settle/hedonism.html",
    "revision": "cf82bc7b5f427209ea9300dcb93eb4a4"
  },
  {
    "url": "philosophy/self-settle/index.html",
    "revision": "1cb7c0c17e37dffd23943dff2eeb362a"
  },
  {
    "url": "philosophy/self-settle/scepticism.html",
    "revision": "0c46f17f1940589608da5547fa38e08e"
  },
  {
    "url": "philosophy/self-settle/stoa.html",
    "revision": "5112041e64826d7a5356b2eeb56f3b73"
  },
  {
    "url": "tag/index.html",
    "revision": "b75a5f2adff4ed0d2e746f6d4ae20841"
  },
  {
    "url": "timeline/index.html",
    "revision": "821519c957a678d981af7bc1b66dd0fd"
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
