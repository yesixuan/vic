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
    "revision": "a5b6031ad2b6d66f086b4f7284425ae9"
  },
  {
    "url": "assets/css/0.styles.69283bfb.css",
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
    "url": "assets/js/1.63f98290.js",
    "revision": "ea072eea7e8979ea068df6bf3557d1b3"
  },
  {
    "url": "assets/js/10.8981e4d3.js",
    "revision": "772ef6b9af7442a283c2b6d849120941"
  },
  {
    "url": "assets/js/11.18ea4158.js",
    "revision": "45f10c01d6e30b889cd34cacd29b9b80"
  },
  {
    "url": "assets/js/12.7104aae8.js",
    "revision": "f8c5d3da7285e88f391988852d14e5c0"
  },
  {
    "url": "assets/js/13.db8e075a.js",
    "revision": "c80e1a387e4641312de95da1bd4d16b1"
  },
  {
    "url": "assets/js/14.fd10f2b9.js",
    "revision": "e2e48bff1531b8548cb2d83dbf59dd62"
  },
  {
    "url": "assets/js/15.27b34452.js",
    "revision": "8d9053a93c04ab3bd38e47844ac166d3"
  },
  {
    "url": "assets/js/16.e489010a.js",
    "revision": "3dd03213c2794dd9fc28c0c6d1ce457f"
  },
  {
    "url": "assets/js/17.a5d80dc1.js",
    "revision": "abce44de77aa86ebda3aab4beb6bb882"
  },
  {
    "url": "assets/js/18.56ac569e.js",
    "revision": "c7a2957bb51874f4eada601cbf9b3089"
  },
  {
    "url": "assets/js/19.7a3ccb8e.js",
    "revision": "bb1f4304b3ca5eaae48a31fd66f553ce"
  },
  {
    "url": "assets/js/20.83d3e1b4.js",
    "revision": "622f7d037f90ab6ba99d8f1833a42e6a"
  },
  {
    "url": "assets/js/21.5cebaf3d.js",
    "revision": "59063a95ba7328c6d5c450e7830a1e9e"
  },
  {
    "url": "assets/js/22.0ad5332b.js",
    "revision": "dea7990cc73d4d867767c983d71ef1d6"
  },
  {
    "url": "assets/js/23.85cefb59.js",
    "revision": "87b40eabe8bc8ea29347c48e470bee01"
  },
  {
    "url": "assets/js/24.9d3ebfe3.js",
    "revision": "b87fe89be5a88798dcd28c6ea5a2cb04"
  },
  {
    "url": "assets/js/25.e98142f4.js",
    "revision": "a988999b7106aa146489415397c7bde6"
  },
  {
    "url": "assets/js/26.932e8d09.js",
    "revision": "0135155aedff2ed972abb699a5b2fb86"
  },
  {
    "url": "assets/js/27.50efeccf.js",
    "revision": "c8511adb09b2ee2542e9c566274e9f17"
  },
  {
    "url": "assets/js/28.94180ee5.js",
    "revision": "8cc9898bba84bbe1f10d96805c826565"
  },
  {
    "url": "assets/js/29.10cc7e31.js",
    "revision": "e984ba326e1deb1dda813aae9c5e0478"
  },
  {
    "url": "assets/js/3.e495a9a4.js",
    "revision": "f97b61bdd6d21ad28ea30d7b67db2361"
  },
  {
    "url": "assets/js/30.bd5e3ed8.js",
    "revision": "fb35d37646d01cdf9de3ad0252b05f99"
  },
  {
    "url": "assets/js/31.349bacbf.js",
    "revision": "46faac8849d88274fbc8a2a7ab955a67"
  },
  {
    "url": "assets/js/32.a3fff20b.js",
    "revision": "6c16b302f09403f30535db946b04854c"
  },
  {
    "url": "assets/js/33.561ae136.js",
    "revision": "229ab1a8345fb87d74a1313f07e68ebe"
  },
  {
    "url": "assets/js/34.3f68ffd7.js",
    "revision": "8124617c576e945126bc3da4c28835d9"
  },
  {
    "url": "assets/js/35.84855acd.js",
    "revision": "db6815eb37b50b9f3effd4378bbe6b5c"
  },
  {
    "url": "assets/js/36.df04a6ae.js",
    "revision": "f54a2e8c8d5f32136b8d221ef94b951a"
  },
  {
    "url": "assets/js/37.19cdf319.js",
    "revision": "0a33ffec02224fd70d83168035d308f7"
  },
  {
    "url": "assets/js/38.33ac220c.js",
    "revision": "626d43df67297a2bbc2037e78e9e7e1c"
  },
  {
    "url": "assets/js/39.fee72558.js",
    "revision": "7104e0e0367b84b27bd432998a03882e"
  },
  {
    "url": "assets/js/4.811f41b3.js",
    "revision": "b1b7e56740f5fc2c1360655842a75db8"
  },
  {
    "url": "assets/js/40.ac9dc962.js",
    "revision": "67e5c732a4effdf2c393c7359c623e24"
  },
  {
    "url": "assets/js/41.7d095559.js",
    "revision": "5e31ced18e0a2f6bb3fac2a0b5cf96c6"
  },
  {
    "url": "assets/js/42.bfd680a9.js",
    "revision": "a11f8c59a7071324e52e1b792d9c93c4"
  },
  {
    "url": "assets/js/43.8dc40664.js",
    "revision": "2c4ea0c2c972ac5fab615f2a2e917b21"
  },
  {
    "url": "assets/js/44.ab4307be.js",
    "revision": "d1d8d237ed4fc1adb44366394190b2c8"
  },
  {
    "url": "assets/js/45.e6eedbdc.js",
    "revision": "e820d2f528de32720e71ffdf452a1074"
  },
  {
    "url": "assets/js/5.9adb7a44.js",
    "revision": "4cf8fa64a4d42c66aa157da82e2c0660"
  },
  {
    "url": "assets/js/6.47cae887.js",
    "revision": "ae888caf9ce0aedeaffaf12121b149a1"
  },
  {
    "url": "assets/js/7.f24fab21.js",
    "revision": "14dbf9bcc19aefb439a1a96691301f26"
  },
  {
    "url": "assets/js/8.4eba1cb6.js",
    "revision": "d5d5fd8bdf1f48e8ee9b3ecd1a9692f2"
  },
  {
    "url": "assets/js/9.bf80550f.js",
    "revision": "63a26484ef27dc6f55e2bd97bb8cf4e2"
  },
  {
    "url": "assets/js/app.2cfb913e.js",
    "revision": "dddd557612545d4bcd1db86762202a5d"
  },
  {
    "url": "categories/index.html",
    "revision": "b42c58578547b6962c1368190391766b"
  },
  {
    "url": "demo.html",
    "revision": "0939a263d289b31ff6032995df88e0ea"
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
    "revision": "d99f7a1d7bdcc8b8342311020b3668f8"
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
    "revision": "39ff0edcb05952957986f1a5d91e8eb6"
  },
  {
    "url": "philosophy/enlightenment/enlightenment.html",
    "revision": "bbe2eba5b1679ff4f7c89c0f5d59dfc3"
  },
  {
    "url": "philosophy/enlightenment/Hume.html",
    "revision": "941f9041ef9fc008ce22ecd795d30121"
  },
  {
    "url": "philosophy/enlightenment/index.html",
    "revision": "f681a2d7bb1ab507c75a137d05c46966"
  },
  {
    "url": "philosophy/enlightenment/Kant.html",
    "revision": "feb2e9a9574174289e01fba78b52ed06"
  },
  {
    "url": "philosophy/enlightenment/Locke.html",
    "revision": "ae662a1138b382a698dceb51860efcdb"
  },
  {
    "url": "philosophy/enlightenment/Rousseau.html",
    "revision": "1ad73308c84f28fc77fa182687fdd167"
  },
  {
    "url": "philosophy/man&gad/index.html",
    "revision": "17869d5d9536a256f0be308a222318c4"
  },
  {
    "url": "philosophy/man&gad/patristic-philosophy.html",
    "revision": "f5e672a5680769b6e1a3b4dc808889a4"
  },
  {
    "url": "philosophy/man&gad/philosophy-come-back.html",
    "revision": "2d891038b0ef8be26ca33d0ffc0f9710"
  },
  {
    "url": "philosophy/man&gad/scholasticism.html",
    "revision": "49724bff921fc16f302063538f5abf3d"
  },
  {
    "url": "philosophy/origin/atomism&sophists.html",
    "revision": "9d1336cc2dc3c5f1066b9883101dbbfb"
  },
  {
    "url": "philosophy/origin/history-of-philosophy.html",
    "revision": "0b7d8e5ab92183e4ddcfa4e81ecd10aa"
  },
  {
    "url": "philosophy/origin/index.html",
    "revision": "8bd6f3026cb08cddac1fec52435d6ad0"
  },
  {
    "url": "philosophy/origin/materialism-and-immaterialism.html",
    "revision": "dba8b66a6d182da9f7130c67d94c61f9"
  },
  {
    "url": "philosophy/origin/origin-of-philosophy.html",
    "revision": "a3139e6813e3f438b4da857fae04f949"
  },
  {
    "url": "philosophy/origin/Socrates.html",
    "revision": "125568d8c09a477ac5bef2f79eecba85"
  },
  {
    "url": "philosophy/rationalism&empiricism/Aristotle.html",
    "revision": "87b9146a3a6105e7602f4535a6127ffd"
  },
  {
    "url": "philosophy/rationalism&empiricism/index.html",
    "revision": "fd5faa4867584b8c34719d68b62407e6"
  },
  {
    "url": "philosophy/reason/Descartes.html",
    "revision": "c3102138e9c0bac42b83b137fd56691d"
  },
  {
    "url": "philosophy/reason/index.html",
    "revision": "772eea319c8bf828bda28f7a78f1d9c0"
  },
  {
    "url": "philosophy/reason/Leibnitz.html",
    "revision": "70450213752ae0e5d858d8402004c834"
  },
  {
    "url": "philosophy/reason/Pascal.html",
    "revision": "b2d408738071d35777f365b7668f85bc"
  },
  {
    "url": "philosophy/reason/philo-sophia.html",
    "revision": "22804942d097314a38089350d814d8b8"
  },
  {
    "url": "philosophy/reason/reformation.html",
    "revision": "41b783d662413dedf7e334fc2d140a40"
  },
  {
    "url": "philosophy/reason/Spinoza.html",
    "revision": "a0866ed9f6259b1998467593eddd7293"
  },
  {
    "url": "philosophy/self-settle/end-of-Greek.html",
    "revision": "8b2261eae5dd05875fa5bea68838527e"
  },
  {
    "url": "philosophy/self-settle/hedonism.html",
    "revision": "14f0e8199ba6d06a632534bdd408a0db"
  },
  {
    "url": "philosophy/self-settle/index.html",
    "revision": "a56f0b680baff7196bfd64ec22837e63"
  },
  {
    "url": "philosophy/self-settle/scepticism.html",
    "revision": "5eaf0b34f9b382929523b1cc24b3f8c8"
  },
  {
    "url": "philosophy/self-settle/stoa.html",
    "revision": "65679dfd22f464d5e0abb3b3c48924fc"
  },
  {
    "url": "tag/index.html",
    "revision": "368a7d7b1a28d2a65f29b642fa009abd"
  },
  {
    "url": "timeline/index.html",
    "revision": "e004b80eaed24e9b8481d0939fd18b3d"
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
