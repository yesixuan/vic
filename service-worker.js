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
    "revision": "e38c8d249aa22903137a01915a188b57"
  },
  {
    "url": "assets/css/0.styles.2a6a7a2b.css",
    "revision": "f8ab8636fee0bfdf57766864005453a3"
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
    "url": "assets/js/1.f1cd049c.js",
    "revision": "85c4d16f0ad5cb7fbce00032963992c2"
  },
  {
    "url": "assets/js/10.14702e3d.js",
    "revision": "c7282f2a86b54005908f8d730f417de2"
  },
  {
    "url": "assets/js/11.064c3158.js",
    "revision": "145d9d3ec02104b74984102c9525c309"
  },
  {
    "url": "assets/js/12.7e687f57.js",
    "revision": "5d3bbc46f71a9d601a5279683aa68909"
  },
  {
    "url": "assets/js/13.9468eaa1.js",
    "revision": "c396f4b10f42fe11934b9259d29a5606"
  },
  {
    "url": "assets/js/14.7840838c.js",
    "revision": "5ddeaf5bd83e8d0bc151368358422489"
  },
  {
    "url": "assets/js/15.fe0d389e.js",
    "revision": "eb8631831a84a1c8c66da16d9fdbc5e9"
  },
  {
    "url": "assets/js/16.cac9b660.js",
    "revision": "bf21ae6380bd4391c3faf0e9baaa1524"
  },
  {
    "url": "assets/js/17.c3789459.js",
    "revision": "3d227fa11766b567f916bd9921e88563"
  },
  {
    "url": "assets/js/18.84638776.js",
    "revision": "e13fb5bc79273e9343eeacd0ed530017"
  },
  {
    "url": "assets/js/19.7e1aebfe.js",
    "revision": "2be879eacc844514a3b17cca90f3dd00"
  },
  {
    "url": "assets/js/20.7adf54af.js",
    "revision": "4c59e37084fe4a9d8760c83570ed9619"
  },
  {
    "url": "assets/js/21.3a7b0556.js",
    "revision": "380bf6a72b0a922427d9ce341dd85fb4"
  },
  {
    "url": "assets/js/22.f9319080.js",
    "revision": "d5541ed89e5f9339d1586ee416172946"
  },
  {
    "url": "assets/js/23.9ce05711.js",
    "revision": "5a7c5aeb1ca95aa3c1d105a34c024190"
  },
  {
    "url": "assets/js/24.c81781ab.js",
    "revision": "a378795422ddcd0c5eee2254ff0d5b73"
  },
  {
    "url": "assets/js/25.89e9fb59.js",
    "revision": "87599dcff4e3ea49940564e5da8260d3"
  },
  {
    "url": "assets/js/26.3c9af401.js",
    "revision": "645fbabbf5d82691356d7c63ed9d5cb1"
  },
  {
    "url": "assets/js/27.2f2195dd.js",
    "revision": "5249f51fbf348751793067441358f8c1"
  },
  {
    "url": "assets/js/28.f53ff23b.js",
    "revision": "4800ff94338d3d395491c28fdc27cc8c"
  },
  {
    "url": "assets/js/29.a8600a99.js",
    "revision": "e0dec04a94766e7b0cdc99a9769791b7"
  },
  {
    "url": "assets/js/3.d9fe1332.js",
    "revision": "ee8071252441688b38a4fda831b396fa"
  },
  {
    "url": "assets/js/30.20086bc3.js",
    "revision": "6b3a890c095b8191aa9e26ff2662b788"
  },
  {
    "url": "assets/js/31.fce65f78.js",
    "revision": "4093cac764d3cb836797e984dd09a50f"
  },
  {
    "url": "assets/js/32.218c4224.js",
    "revision": "790c832a47e2d171c231028a76822f55"
  },
  {
    "url": "assets/js/33.22978e5e.js",
    "revision": "c7c47f4e40e619fc97bd0585962ceece"
  },
  {
    "url": "assets/js/34.100009b4.js",
    "revision": "9cd509897a2cb1ec65ac6fc2d4375767"
  },
  {
    "url": "assets/js/35.72a755a7.js",
    "revision": "b55de89dcf922e4183df9b8a27420c22"
  },
  {
    "url": "assets/js/36.20e9874e.js",
    "revision": "237793ff3f398e416d4a98ab420b1744"
  },
  {
    "url": "assets/js/37.42c25ec9.js",
    "revision": "6ba28e37aa1e16270788bf7d23c684e4"
  },
  {
    "url": "assets/js/38.630b8c3c.js",
    "revision": "78326634cd6e7c808573ba60db8f96e0"
  },
  {
    "url": "assets/js/39.90b90d16.js",
    "revision": "1bec4ff55564f6bd68027e3b38d211f3"
  },
  {
    "url": "assets/js/4.1581da55.js",
    "revision": "d97e4166785e06fc412361eaed784655"
  },
  {
    "url": "assets/js/40.68cd55a7.js",
    "revision": "52fea82603ec03de5ac06a0a464bd729"
  },
  {
    "url": "assets/js/41.0485dce7.js",
    "revision": "ec6de76c6273f7c8212861616e94e40f"
  },
  {
    "url": "assets/js/42.972b94fd.js",
    "revision": "3d21876f79e43cf5cdf081ec3ca56e69"
  },
  {
    "url": "assets/js/43.23effe29.js",
    "revision": "f85f3dbeacd5232425901631781ebce3"
  },
  {
    "url": "assets/js/44.c9577e0d.js",
    "revision": "83502aae61b0c0f10e6153fad071c8f2"
  },
  {
    "url": "assets/js/45.eb7e5595.js",
    "revision": "ad97a284fea2f59ad903c7afe71d8e4e"
  },
  {
    "url": "assets/js/46.4e2bd86c.js",
    "revision": "7312426e211ab15e567c234f4eceb79d"
  },
  {
    "url": "assets/js/47.04ead9dd.js",
    "revision": "185542ed0513eec04692dc3215f9d35d"
  },
  {
    "url": "assets/js/48.7721ea3d.js",
    "revision": "1297622f8c6ad54885c49f4a5044b099"
  },
  {
    "url": "assets/js/49.c783d971.js",
    "revision": "d83d9b5ee043c9f2df99a8383c450b49"
  },
  {
    "url": "assets/js/5.63542295.js",
    "revision": "aef2a1e39bf8e11490ee5a4698a02f5a"
  },
  {
    "url": "assets/js/50.b3557c6e.js",
    "revision": "1506979d09cb4e9edf15a7d1d4af50a9"
  },
  {
    "url": "assets/js/51.54d31e0b.js",
    "revision": "357111b12bebc0fdbc41ff888cd8b23a"
  },
  {
    "url": "assets/js/52.a2403b20.js",
    "revision": "e0001c1c5c3c44fe229af752644489ff"
  },
  {
    "url": "assets/js/53.e99395dc.js",
    "revision": "33d8eb9c117ea0d84fc653bd35bf25a5"
  },
  {
    "url": "assets/js/6.cf6c226d.js",
    "revision": "c622364b098ccd1f589cd4c81d285a43"
  },
  {
    "url": "assets/js/7.69ca89df.js",
    "revision": "42979384fa0c197e4320d7ed839e920b"
  },
  {
    "url": "assets/js/8.e8bef48c.js",
    "revision": "43a9e768948ed59c20d2a75063d45a13"
  },
  {
    "url": "assets/js/9.9af896eb.js",
    "revision": "238fbc27bd1508fc5c0dcdff0eecdd7a"
  },
  {
    "url": "assets/js/app.1f74f5e4.js",
    "revision": "dfa4e5bd674a2da1ee9f20520dda5eac"
  },
  {
    "url": "categories/index.html",
    "revision": "65bb4688c075aaaaf05abdfa27e08dc8"
  },
  {
    "url": "demo.html",
    "revision": "7b1b568663736bd685c12e902319342c"
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
    "revision": "79781ea0063360f5ffed23d98954359f"
  },
  {
    "url": "index.html",
    "revision": "aec4988c7e0914a43eed3cd187e639d9"
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
    "revision": "bdbe5bdc4cc264938c8b15179f89021a"
  },
  {
    "url": "philosophy/enlightenment/enlightenment.html",
    "revision": "25766f4c7002677cd3f9a7732eea34d3"
  },
  {
    "url": "philosophy/enlightenment/GermanIdealism.html",
    "revision": "3f9dd73158b3b5679589018114889e49"
  },
  {
    "url": "philosophy/enlightenment/Hume.html",
    "revision": "eaec9de0d69eb84156561f2d9f6dbb9b"
  },
  {
    "url": "philosophy/enlightenment/index.html",
    "revision": "1b9cf6c14fb76eb3f95bb11f3d0ef921"
  },
  {
    "url": "philosophy/enlightenment/Kant.html",
    "revision": "3a5a73147d36a744ccaace220ed40421"
  },
  {
    "url": "philosophy/enlightenment/Locke.html",
    "revision": "7b1f478b5b58c190274c45ca2a841488"
  },
  {
    "url": "philosophy/enlightenment/Marx.html",
    "revision": "27684abcc0dd6cb545cb0ae1305670f5"
  },
  {
    "url": "philosophy/enlightenment/pessimism.html",
    "revision": "4bc3169a0e051645b7b960125e49cc5f"
  },
  {
    "url": "philosophy/enlightenment/Rousseau.html",
    "revision": "f5bb788af21c26f8f9a9b16c47b41e26"
  },
  {
    "url": "philosophy/enlightenment/value.html",
    "revision": "8d8dd501c5d1262bce642ac4d29d80e6"
  },
  {
    "url": "philosophy/ethics/index.html",
    "revision": "4684220b74e823b0c9788b173b789711"
  },
  {
    "url": "philosophy/ethics/simpleEthics.html",
    "revision": "36ddf918f77f1cd3dbc71a505f2d626a"
  },
  {
    "url": "philosophy/existentialism/existentialism.html",
    "revision": "a2aa0c40811c1048eb67dcc381de0a39"
  },
  {
    "url": "philosophy/existentialism/index.html",
    "revision": "1343f1f4da40a02f58aff256730e6f8f"
  },
  {
    "url": "philosophy/existentialism/Kierkegaard.html",
    "revision": "37a419e3fde41a637146db9a56242eb1"
  },
  {
    "url": "philosophy/man&gad/index.html",
    "revision": "ad492f545d4a1673f2e801130c2b972c"
  },
  {
    "url": "philosophy/man&gad/patristic-philosophy.html",
    "revision": "e990533506d8832d8c04330fe5ef97dd"
  },
  {
    "url": "philosophy/man&gad/philosophy-come-back.html",
    "revision": "56a0143e9f7eadbaaddc20062130d2d4"
  },
  {
    "url": "philosophy/man&gad/scholasticism.html",
    "revision": "59325065c48de4b14fe0e215513549e3"
  },
  {
    "url": "philosophy/origin/atomism&sophists.html",
    "revision": "1274d52e52114e66b83e9bb83f98d437"
  },
  {
    "url": "philosophy/origin/history-of-philosophy.html",
    "revision": "48cf9aee733d3384f71264e7188c763a"
  },
  {
    "url": "philosophy/origin/index.html",
    "revision": "8f2a08c7356f1ef7337519df52cd3f24"
  },
  {
    "url": "philosophy/origin/materialism-and-immaterialism.html",
    "revision": "06163f75eb711f89770dce4c8a23ce37"
  },
  {
    "url": "philosophy/origin/origin-of-philosophy.html",
    "revision": "227ade5aa4e5ca64dc2e2f5543f5c760"
  },
  {
    "url": "philosophy/origin/Socrates.html",
    "revision": "3ecd8c467c606c7f7d4a9e192d4dc0a3"
  },
  {
    "url": "philosophy/rationalism&empiricism/Aristotle.html",
    "revision": "f88076a4fa21706610bb6fca5ec6381f"
  },
  {
    "url": "philosophy/rationalism&empiricism/index.html",
    "revision": "d46e326c670d6a97765325fa63275eca"
  },
  {
    "url": "philosophy/reason/Descartes.html",
    "revision": "da44254c599292b47c86b7a5b17e1124"
  },
  {
    "url": "philosophy/reason/index.html",
    "revision": "1772cca312e6894677eb48aa41faf303"
  },
  {
    "url": "philosophy/reason/Leibnitz.html",
    "revision": "9879eeabc8bc9875114577122722e841"
  },
  {
    "url": "philosophy/reason/Pascal.html",
    "revision": "0b63cfe7e9bd6ffdd2a5919908700b37"
  },
  {
    "url": "philosophy/reason/philo-sophia.html",
    "revision": "df917587c161808c673376433ac17de3"
  },
  {
    "url": "philosophy/reason/reformation.html",
    "revision": "2f4070775fc328b804694feef3e3969e"
  },
  {
    "url": "philosophy/reason/Spinoza.html",
    "revision": "10901fb89d6f0146e4b9c304c88853ee"
  },
  {
    "url": "philosophy/self-settle/end-of-Greek.html",
    "revision": "bcf17abcd91c0b3e0a27c1bfc009c890"
  },
  {
    "url": "philosophy/self-settle/hedonism.html",
    "revision": "0fe3aed571cd23d7afd4ebe3834fdbbe"
  },
  {
    "url": "philosophy/self-settle/index.html",
    "revision": "d28fa3578d0fea24ca487582a4b4bcc6"
  },
  {
    "url": "philosophy/self-settle/scepticism.html",
    "revision": "f7c27e05ca7bc3017d8057469f7abd1e"
  },
  {
    "url": "philosophy/self-settle/stoa.html",
    "revision": "2ff2d026cfc996e8dc5f35bf11adfa6d"
  },
  {
    "url": "tag/index.html",
    "revision": "71e99c13ecafef36f7a70e4565301d06"
  },
  {
    "url": "timeline/index.html",
    "revision": "8792e404aee898ac737b4d0ef2882972"
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
