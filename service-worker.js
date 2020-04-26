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
    "revision": "97d64fbeab6da5e18a4ff2bc1ac9283a"
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
    "url": "assets/js/15.07426f4d.js",
    "revision": "e1cbc99d49f2a3882605d29abdf0e043"
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
    "url": "assets/js/app.f59b462b.js",
    "revision": "a467fa0d89a5526273592c049225459e"
  },
  {
    "url": "categories/index.html",
    "revision": "8f866c7f4bbef32a48c65dbe3e08c11c"
  },
  {
    "url": "demo.html",
    "revision": "b9fd746002ac46f27388d812b84267f0"
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
    "revision": "230a0b37a8d2f3036cc922888f3e925d"
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
    "revision": "71c38d59721a9d3cb6a917c4cc9b9639"
  },
  {
    "url": "philosophy/enlightenment/enlightenment.html",
    "revision": "377f4546b9b3df166a7f92668924750f"
  },
  {
    "url": "philosophy/enlightenment/Hume.html",
    "revision": "1e3eb98c1af7b7a6082fcacdc36887a0"
  },
  {
    "url": "philosophy/enlightenment/index.html",
    "revision": "9d92dd643f94ff9bb5c6af451a9654a4"
  },
  {
    "url": "philosophy/enlightenment/Kant.html",
    "revision": "cc7804f1c2fb88396a18d7966efcc78b"
  },
  {
    "url": "philosophy/enlightenment/Locke.html",
    "revision": "26f058159bfa3d67fc2d3a46b9b2cfb1"
  },
  {
    "url": "philosophy/enlightenment/Rousseau.html",
    "revision": "a373e41ec2b0b0fd3a43309c5f6e9684"
  },
  {
    "url": "philosophy/man&gad/index.html",
    "revision": "e54c7d1b0b713a8ccf5b1ddc137f3e3f"
  },
  {
    "url": "philosophy/man&gad/patristic-philosophy.html",
    "revision": "12c31e415d8b7fa3d8c820c29e3f605c"
  },
  {
    "url": "philosophy/man&gad/philosophy-come-back.html",
    "revision": "6ce4f67eb31bf282f8dd5a029a54ffb9"
  },
  {
    "url": "philosophy/man&gad/scholasticism.html",
    "revision": "e76fb1e370e6555cfe59d5f815f84105"
  },
  {
    "url": "philosophy/origin/atomism&sophists.html",
    "revision": "07b58b707fc6486a89cac5ad0d4d9aa3"
  },
  {
    "url": "philosophy/origin/history-of-philosophy.html",
    "revision": "ff052702160b8c86cfc543734ab94e5d"
  },
  {
    "url": "philosophy/origin/index.html",
    "revision": "c0a5067712a4bf87ff27e7d89e3eb22b"
  },
  {
    "url": "philosophy/origin/materialism-and-immaterialism.html",
    "revision": "99c3d97d4410acd356e411425c4a1b18"
  },
  {
    "url": "philosophy/origin/origin-of-philosophy.html",
    "revision": "15cb8d1d529e7031f12e4c4468939dc2"
  },
  {
    "url": "philosophy/origin/Socrates.html",
    "revision": "a3487014106f2d2f3dadb0b7649292d7"
  },
  {
    "url": "philosophy/rationalism&empiricism/Aristotle.html",
    "revision": "6f1205b7d5a696cb6ec451e9e19ace6b"
  },
  {
    "url": "philosophy/rationalism&empiricism/index.html",
    "revision": "83bdfb1a9dc6f6c6884ca486fc932be1"
  },
  {
    "url": "philosophy/reason/Descartes.html",
    "revision": "05e3fd17a075890d91af9f69ba5dfd4e"
  },
  {
    "url": "philosophy/reason/index.html",
    "revision": "77acdd14945ce259b18b650e212d6c6c"
  },
  {
    "url": "philosophy/reason/Leibnitz.html",
    "revision": "7a40b0c3f6186763fac6193e293a62da"
  },
  {
    "url": "philosophy/reason/Pascal.html",
    "revision": "d824bad2c7f1eed75cfe11a31396db44"
  },
  {
    "url": "philosophy/reason/philo-sophia.html",
    "revision": "097943551bf14803f7c71b968ca11c7b"
  },
  {
    "url": "philosophy/reason/reformation.html",
    "revision": "fc53bca268752ef01cfae8b6139b1cdd"
  },
  {
    "url": "philosophy/reason/Spinoza.html",
    "revision": "8f349228ca51b3e2020dc7c2cd5241b2"
  },
  {
    "url": "philosophy/self-settle/end-of-Greek.html",
    "revision": "8a53f42130f048bc6cb51315f7adc596"
  },
  {
    "url": "philosophy/self-settle/hedonism.html",
    "revision": "4a3ad3b75ef21318f117169d1ae4775e"
  },
  {
    "url": "philosophy/self-settle/index.html",
    "revision": "1623d33a3dc8c76dc0275422ad2a51ce"
  },
  {
    "url": "philosophy/self-settle/scepticism.html",
    "revision": "edaa2ff6575cd43307198f354d28c044"
  },
  {
    "url": "philosophy/self-settle/stoa.html",
    "revision": "60ce01ee7d36de86a420b878a54a2da2"
  },
  {
    "url": "tag/index.html",
    "revision": "e13064c859d106ece42c86aa380d04e5"
  },
  {
    "url": "timeline/index.html",
    "revision": "8a5d4de4ebe5b2cfcac4d1f6402b1ee4"
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
