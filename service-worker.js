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
    "revision": "9682d7cee96c1c27f2531e3b52257d40"
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
    "url": "assets/js/15.4aff90f0.js",
    "revision": "3ac7fd563bc1879de9f69e6e840efb56"
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
    "url": "assets/js/app.9879319b.js",
    "revision": "1a615336da9ad41c17fce4a71aa20d83"
  },
  {
    "url": "categories/index.html",
    "revision": "beff9696460e3d4bb0eaa477946c9bab"
  },
  {
    "url": "demo.html",
    "revision": "404cfc25d98f9e9142dca32dcc0a5635"
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
    "revision": "3d15e1a58387dd15dc9c90b5132c0996"
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
    "revision": "1281e8284d0affef469fd86a85124a26"
  },
  {
    "url": "philosophy/enlightenment/enlightenment.html",
    "revision": "bbc2e7a9d4a81a387b252404378e3fb0"
  },
  {
    "url": "philosophy/enlightenment/Hume.html",
    "revision": "1e914b3c42b5e9e80bc4475f75589aa6"
  },
  {
    "url": "philosophy/enlightenment/index.html",
    "revision": "700ec45ddfcc1e77bcdd8f72e48d1896"
  },
  {
    "url": "philosophy/enlightenment/Kant.html",
    "revision": "51b88a2574ebcc5f8fe1f76e84a56d1d"
  },
  {
    "url": "philosophy/enlightenment/Locke.html",
    "revision": "4bb92a22c1f16cff5de87137b3eb61dd"
  },
  {
    "url": "philosophy/enlightenment/Rousseau.html",
    "revision": "db2acb25975cfd1889f7ca71a8eafab7"
  },
  {
    "url": "philosophy/man&gad/index.html",
    "revision": "208de3d3dc8a32e8166a9935ee3c95aa"
  },
  {
    "url": "philosophy/man&gad/patristic-philosophy.html",
    "revision": "fcbf8c0d535ee4d9a5a650fcaa5b2c62"
  },
  {
    "url": "philosophy/man&gad/philosophy-come-back.html",
    "revision": "f8d0712d5e4bbcafd51946d07a1eacfe"
  },
  {
    "url": "philosophy/man&gad/scholasticism.html",
    "revision": "d9897c1965e16a91f51a25ac91f19c84"
  },
  {
    "url": "philosophy/origin/atomism&sophists.html",
    "revision": "2ab4b1747b67e837ef86fdccb3b6f9a0"
  },
  {
    "url": "philosophy/origin/history-of-philosophy.html",
    "revision": "f4ced28cd8df2eda40b8da4750372fef"
  },
  {
    "url": "philosophy/origin/index.html",
    "revision": "6c081ab6b9a0a5c65d086912eae5a0ab"
  },
  {
    "url": "philosophy/origin/materialism-and-immaterialism.html",
    "revision": "dd6b32a155171dffe652f70b4810be05"
  },
  {
    "url": "philosophy/origin/origin-of-philosophy.html",
    "revision": "a556b6c63424809894de853444d3f95e"
  },
  {
    "url": "philosophy/origin/Socrates.html",
    "revision": "ef9221934c7ac927d7c1f818cca20f74"
  },
  {
    "url": "philosophy/rationalism&empiricism/Aristotle.html",
    "revision": "17625f4bf1c6524431d295c6f1b3e419"
  },
  {
    "url": "philosophy/rationalism&empiricism/index.html",
    "revision": "6bae20e4ac4e8b71c5d475f11b323b9a"
  },
  {
    "url": "philosophy/reason/Descartes.html",
    "revision": "1a1df14a7fb1164bb9b2075ca303fc3c"
  },
  {
    "url": "philosophy/reason/index.html",
    "revision": "af85e818e8d3eff7c7b30dc77a188cac"
  },
  {
    "url": "philosophy/reason/Leibnitz.html",
    "revision": "bf6c1246d95c9342aee429d30569b8b1"
  },
  {
    "url": "philosophy/reason/Pascal.html",
    "revision": "8ab7a3c3ec6d7b01e6639d5a46e25c53"
  },
  {
    "url": "philosophy/reason/philo-sophia.html",
    "revision": "9bdf7b5a07d1464d2b64ebfdded8902c"
  },
  {
    "url": "philosophy/reason/reformation.html",
    "revision": "93dba6328f44621705e166b77f491a90"
  },
  {
    "url": "philosophy/reason/Spinoza.html",
    "revision": "6e41811c741972e77deba98c2b62c08b"
  },
  {
    "url": "philosophy/self-settle/end-of-Greek.html",
    "revision": "746ac5ad7552844a1d531d3e2ebabeb4"
  },
  {
    "url": "philosophy/self-settle/hedonism.html",
    "revision": "c27cf98f7769d7ee7aa9cb261a10aa34"
  },
  {
    "url": "philosophy/self-settle/index.html",
    "revision": "51162695a31c90fd7f32ae120743bf7e"
  },
  {
    "url": "philosophy/self-settle/scepticism.html",
    "revision": "412d59ed5a05bd31be5530e069691301"
  },
  {
    "url": "philosophy/self-settle/stoa.html",
    "revision": "57954f9357bf41596c17bff7487179de"
  },
  {
    "url": "tag/index.html",
    "revision": "937ce0eab2f7939728b8537cec3ee118"
  },
  {
    "url": "timeline/index.html",
    "revision": "25a7ef67cbceb0389d680835ae1449dc"
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
