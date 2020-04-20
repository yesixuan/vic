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
    "revision": "59fe726da7d1d5b44d235d521a5cbd06"
  },
  {
    "url": "assets/css/0.styles.17e2a850.css",
    "revision": "2987fa0be4e1231a78ad2e146778f0c3"
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
    "url": "assets/js/1.6717655a.js",
    "revision": "ea072eea7e8979ea068df6bf3557d1b3"
  },
  {
    "url": "assets/js/10.6505234e.js",
    "revision": "cad853a11e7147b2d5872d9394859563"
  },
  {
    "url": "assets/js/11.a4c476f2.js",
    "revision": "1f962f5fbb6583dbcc6e0f64f615e082"
  },
  {
    "url": "assets/js/12.0adc1c19.js",
    "revision": "f8c5d3da7285e88f391988852d14e5c0"
  },
  {
    "url": "assets/js/13.ebd44456.js",
    "revision": "84d3ac4ed68c98db7a997ec5508256b4"
  },
  {
    "url": "assets/js/14.45e16201.js",
    "revision": "b3bad338aa77fcb8ab243b1e670c16ce"
  },
  {
    "url": "assets/js/15.dcf781fd.js",
    "revision": "17b694750b65639b8b28eb4e592bdf96"
  },
  {
    "url": "assets/js/16.387cd23a.js",
    "revision": "88859ef05bb25e7580cf2dc8d9c4dc84"
  },
  {
    "url": "assets/js/17.1ab67a9b.js",
    "revision": "ed7a2a387ee0e2b6344e9dfd1920163d"
  },
  {
    "url": "assets/js/18.4d286d81.js",
    "revision": "f2a1e391aed7a280ed235355ea8e55f4"
  },
  {
    "url": "assets/js/19.3629ebbc.js",
    "revision": "7b2fbb764c1563fa98490d130dade2b6"
  },
  {
    "url": "assets/js/20.e354310f.js",
    "revision": "6556cf047184a1f0d7d547154f700b89"
  },
  {
    "url": "assets/js/21.ffbb1e38.js",
    "revision": "2c14443994469da8966bc7d472507731"
  },
  {
    "url": "assets/js/22.ff0a98da.js",
    "revision": "c15a0ff95236cf877973503d6a2f9f76"
  },
  {
    "url": "assets/js/23.e04d1d04.js",
    "revision": "ff53b73e954fd7b522bc69f51e03d50f"
  },
  {
    "url": "assets/js/24.f681465e.js",
    "revision": "323ef4188de9913e6ad4c71fa2fb943a"
  },
  {
    "url": "assets/js/25.cb03a24a.js",
    "revision": "0cc69d5cbd973beaaffd986b90f3db3c"
  },
  {
    "url": "assets/js/26.fcb18421.js",
    "revision": "5d68637ec7eb0def6b43212fa7253273"
  },
  {
    "url": "assets/js/27.aecda01c.js",
    "revision": "3ef167bffaf87c2cd752d2e38f230313"
  },
  {
    "url": "assets/js/28.07d3f3e0.js",
    "revision": "17e1e9e8d6b8a7aa9056d70c68b7d01f"
  },
  {
    "url": "assets/js/29.181f7e52.js",
    "revision": "12b56fbca2f7ddaee51df10c652fc0a1"
  },
  {
    "url": "assets/js/3.dc6bd04e.js",
    "revision": "f97b61bdd6d21ad28ea30d7b67db2361"
  },
  {
    "url": "assets/js/30.b0593c91.js",
    "revision": "4d534736a06455041a2734b0a3696219"
  },
  {
    "url": "assets/js/31.9fcd30b1.js",
    "revision": "59731220560a053da020a87b4335b688"
  },
  {
    "url": "assets/js/32.f9044316.js",
    "revision": "dd5c3f362c484d79eb90aab1cf76931e"
  },
  {
    "url": "assets/js/33.a6792d6a.js",
    "revision": "e7a3c2d7d574ae302c6d8541479f4cb5"
  },
  {
    "url": "assets/js/34.0bfb2943.js",
    "revision": "9e3d0a761b47d32c6754e5cf947894f3"
  },
  {
    "url": "assets/js/35.9220540d.js",
    "revision": "e5964f073084ba2558710fbd94ded5cc"
  },
  {
    "url": "assets/js/36.473756e0.js",
    "revision": "a1151b085c7b5028cba6d00d8a3fef9f"
  },
  {
    "url": "assets/js/37.9405b723.js",
    "revision": "1d1e880723384b371115fb13039264ac"
  },
  {
    "url": "assets/js/38.080e05e9.js",
    "revision": "4a446c24ce9724886240963b795cfc63"
  },
  {
    "url": "assets/js/39.4ade7733.js",
    "revision": "bc051418b6e012361576693da02006a8"
  },
  {
    "url": "assets/js/4.5bb36fa4.js",
    "revision": "b1b7e56740f5fc2c1360655842a75db8"
  },
  {
    "url": "assets/js/40.2f593691.js",
    "revision": "80677c4ba59a7572e9fb2d9ea68d17ea"
  },
  {
    "url": "assets/js/41.9e8ddbb1.js",
    "revision": "5ef76cce1f470148f9d53025bc18299a"
  },
  {
    "url": "assets/js/42.a2611acd.js",
    "revision": "211843cbc7f89a6165244a683a0402ef"
  },
  {
    "url": "assets/js/5.edf4a22d.js",
    "revision": "4cf8fa64a4d42c66aa157da82e2c0660"
  },
  {
    "url": "assets/js/6.98a80d1b.js",
    "revision": "ae888caf9ce0aedeaffaf12121b149a1"
  },
  {
    "url": "assets/js/7.fde623e2.js",
    "revision": "14dbf9bcc19aefb439a1a96691301f26"
  },
  {
    "url": "assets/js/8.c6a151f6.js",
    "revision": "d5d5fd8bdf1f48e8ee9b3ecd1a9692f2"
  },
  {
    "url": "assets/js/9.1877b4ec.js",
    "revision": "42b93f3cee0e5a0cd72b19f09671c190"
  },
  {
    "url": "assets/js/app.f2b67e9e.js",
    "revision": "05b5ba78796dc1782ee4b2a4ebdfea34"
  },
  {
    "url": "categories/index.html",
    "revision": "f3e26891d99dee0bca7901ce6ffe7497"
  },
  {
    "url": "demo.html",
    "revision": "1cb9f4e48d1c74a4834da4a6b2fe2544"
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
    "revision": "1da28eb8b049a686b67729ec6474561a"
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
    "url": "philosophy/enlightenment/Berkeley.html",
    "revision": "8591677c49ac980e333ab7117ac24477"
  },
  {
    "url": "philosophy/enlightenment/Hume.html",
    "revision": "e84aa5a84780b39df50a5fe97bd8bb38"
  },
  {
    "url": "philosophy/enlightenment/index.html",
    "revision": "4c9bd883a00c35a55d3677ed4421a33b"
  },
  {
    "url": "philosophy/enlightenment/Locke.html",
    "revision": "b4e3010ba4f229bf0776a99b082d6ffa"
  },
  {
    "url": "philosophy/man&gad/index.html",
    "revision": "0bd0dda28a96d0acd9cf9b2b9f0a40b7"
  },
  {
    "url": "philosophy/man&gad/patristic-philosophy.html",
    "revision": "7fc421d351545ada385c8e96e5234079"
  },
  {
    "url": "philosophy/man&gad/philosophy-come-back.html",
    "revision": "7c88cb63e7d5a2048ad431f0685cb69a"
  },
  {
    "url": "philosophy/man&gad/scholasticism.html",
    "revision": "2bc03f056f0cbf87c031928387b76c8e"
  },
  {
    "url": "philosophy/origin/atomism&sophists.html",
    "revision": "008c3acc653e4392e2cb61f435c7187a"
  },
  {
    "url": "philosophy/origin/history-of-philosophy.html",
    "revision": "c0c915781c950f8596a7cd46f96289ae"
  },
  {
    "url": "philosophy/origin/index.html",
    "revision": "322f9500bf1016e47565cbd141e8cc00"
  },
  {
    "url": "philosophy/origin/materialism-and-immaterialism.html",
    "revision": "7d19fc37964c954e84ee8125d40a6460"
  },
  {
    "url": "philosophy/origin/origin-of-philosophy.html",
    "revision": "169880173bea18d598fa64720e6758cb"
  },
  {
    "url": "philosophy/origin/Socrates.html",
    "revision": "2b09f8caf6e158a91380f9bea59f1ccc"
  },
  {
    "url": "philosophy/rationalism&empiricism/Aristotle.html",
    "revision": "0531dfb45f6ee16020d51690c06c38f0"
  },
  {
    "url": "philosophy/rationalism&empiricism/index.html",
    "revision": "c6f62f8f2d544d7bcbfed3cf3081a615"
  },
  {
    "url": "philosophy/reason/Descartes.html",
    "revision": "89fb78d34d98c6921e577bae88ee7511"
  },
  {
    "url": "philosophy/reason/index.html",
    "revision": "823b8054999be2aea99db26453eaef0d"
  },
  {
    "url": "philosophy/reason/Leibnitz.html",
    "revision": "fd48fd5428785d7b4e56edd06e0bbf9a"
  },
  {
    "url": "philosophy/reason/Pascal.html",
    "revision": "4d9016ef19a20f539b25195588ca2804"
  },
  {
    "url": "philosophy/reason/philo-sophia.html",
    "revision": "d64b68b4047af16db8f052893b6647fa"
  },
  {
    "url": "philosophy/reason/reformation.html",
    "revision": "83655a482022c3f2f881ac798bb534c6"
  },
  {
    "url": "philosophy/reason/Spinoza.html",
    "revision": "64f9b6905bc7669c279ce0fdf2c19779"
  },
  {
    "url": "philosophy/self-settle/end-of-Greek.html",
    "revision": "3277573dd2b8bfe0d112e82a4a37cfba"
  },
  {
    "url": "philosophy/self-settle/hedonism.html",
    "revision": "c4065a25142519975aff9e0a6df59472"
  },
  {
    "url": "philosophy/self-settle/index.html",
    "revision": "1d4ec3e41d86f06a9b64a282b6df3546"
  },
  {
    "url": "philosophy/self-settle/scepticism.html",
    "revision": "dfeed1f674a5e1ed41bb30987bcf8d0a"
  },
  {
    "url": "philosophy/self-settle/stoa.html",
    "revision": "aa2d8e45fca032ca8d67c2982fc8b49c"
  },
  {
    "url": "tag/index.html",
    "revision": "090e7705f1c66bc4b0c5dac50412e14b"
  },
  {
    "url": "timeline/index.html",
    "revision": "f39059f5e8bee0b825c5107cd1b83e56"
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
