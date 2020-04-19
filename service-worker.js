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
    "revision": "2eeeb82cdaa95ab6f60de3025c5bf749"
  },
  {
    "url": "assets/css/0.styles.b406834e.css",
    "revision": "e8f515ce2d7065a489ce8a13d45266b7"
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
    "url": "assets/js/10.9d61bdba.js",
    "revision": "67852cd37c7032aa9da060cd941bd208"
  },
  {
    "url": "assets/js/11.8ce87827.js",
    "revision": "45f10c01d6e30b889cd34cacd29b9b80"
  },
  {
    "url": "assets/js/12.0adc1c19.js",
    "revision": "f8c5d3da7285e88f391988852d14e5c0"
  },
  {
    "url": "assets/js/13.5db71d02.js",
    "revision": "70a110751a1ba0ae409929c93661559f"
  },
  {
    "url": "assets/js/14.7f844528.js",
    "revision": "1c9c89958d61302a169162192e610504"
  },
  {
    "url": "assets/js/15.1799f75a.js",
    "revision": "67bfb307fddd752ec950b0acfdf88c2b"
  },
  {
    "url": "assets/js/16.634c072b.js",
    "revision": "f19d2e2393dd77bcb569ecc141982e74"
  },
  {
    "url": "assets/js/17.b4dcf27c.js",
    "revision": "607c67d52592198b69566a7e2dd45306"
  },
  {
    "url": "assets/js/18.51231924.js",
    "revision": "53abe3e8fa23e6fbc38bd35d321d2eca"
  },
  {
    "url": "assets/js/19.324f3fff.js",
    "revision": "c2dbef652b5fa3d608df2bcf226c147c"
  },
  {
    "url": "assets/js/20.c5969607.js",
    "revision": "092d8d1ca9e798a77fa5096536366272"
  },
  {
    "url": "assets/js/21.f1dbe754.js",
    "revision": "2e7da587bcb21d7d3452879eb57efb93"
  },
  {
    "url": "assets/js/22.99d56ccb.js",
    "revision": "a434501b1137f7ce550c4a8445d2a414"
  },
  {
    "url": "assets/js/23.50b68119.js",
    "revision": "898e5853e808bf992546b67da7a4adac"
  },
  {
    "url": "assets/js/24.a7b961a5.js",
    "revision": "8449e274c3bedc5dddfc5b9857f3da25"
  },
  {
    "url": "assets/js/25.e1e57be2.js",
    "revision": "11d7feb5ff5b9a44a08ed463c02dd5df"
  },
  {
    "url": "assets/js/26.b1e8fcff.js",
    "revision": "3c1ab3b544d49a9244f6a164e4e310ce"
  },
  {
    "url": "assets/js/27.22fb4484.js",
    "revision": "6b5f79d1b2b8c5f63139f38537b35a2b"
  },
  {
    "url": "assets/js/28.dda228e3.js",
    "revision": "689421bf8178d1d88c3cb6ab26755649"
  },
  {
    "url": "assets/js/29.4f5754d6.js",
    "revision": "5d8fb5a3eb1b98e85106ded79d708f31"
  },
  {
    "url": "assets/js/3.38757f37.js",
    "revision": "15321c1b62abb954c2b71a2a69037914"
  },
  {
    "url": "assets/js/30.db978cbc.js",
    "revision": "17c9d54f8af90274a2f3cf955c9ad24c"
  },
  {
    "url": "assets/js/31.3cf03d54.js",
    "revision": "5e3c5fe5bd6bd35b087a81e540c86bf8"
  },
  {
    "url": "assets/js/32.7858c2f6.js",
    "revision": "acadbf7329c8583c28ae6b1bb7d69cbb"
  },
  {
    "url": "assets/js/33.dea5d6a2.js",
    "revision": "69ba4c7ed9fe1bc604920704f5a1c17d"
  },
  {
    "url": "assets/js/34.e80bae6c.js",
    "revision": "0347e0fabc85309b16b3b668614913b6"
  },
  {
    "url": "assets/js/35.9a28a168.js",
    "revision": "c3491ed792d6eb269a17e8908773ac68"
  },
  {
    "url": "assets/js/36.cebc6374.js",
    "revision": "d96d2223d690750a424a3783960c78ae"
  },
  {
    "url": "assets/js/37.618c5703.js",
    "revision": "d98a9570e7b7e065b7ddc4247119692b"
  },
  {
    "url": "assets/js/38.b16ef64c.js",
    "revision": "84993c6aadcf6804e9b669517c70575f"
  },
  {
    "url": "assets/js/39.fc35c6a5.js",
    "revision": "8be6c23958cf6b75f508442bc73fe654"
  },
  {
    "url": "assets/js/4.5bb36fa4.js",
    "revision": "b1b7e56740f5fc2c1360655842a75db8"
  },
  {
    "url": "assets/js/40.ec077887.js",
    "revision": "6a5800c6c98a23725c66aa2f34bfd4c1"
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
    "url": "assets/js/app.842b2def.js",
    "revision": "b0114e10d80bbe66009e2d0bb045e095"
  },
  {
    "url": "categories/index.html",
    "revision": "9a116013dfb4441b59f492392f37eda0"
  },
  {
    "url": "demo.html",
    "revision": "a32f4816935261d7ef5440d4a7436dd3"
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
    "revision": "5245dada9322430a68cda35405eb10ab"
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
    "revision": "84ff4d6b51a34766e00b6695406d3389"
  },
  {
    "url": "philosophy/enlightenment/Locke.html",
    "revision": "98c92e9f75357d3ba0929ae27920ee66"
  },
  {
    "url": "philosophy/man&gad/index.html",
    "revision": "b54b2abb57e7deef6a3634becd64d0d9"
  },
  {
    "url": "philosophy/man&gad/patristic-philosophy.html",
    "revision": "ee0233ca1c7f6260857a6c3099658092"
  },
  {
    "url": "philosophy/man&gad/philosophy-come-back.html",
    "revision": "3bd3ef88f8f869723492588ee1f14782"
  },
  {
    "url": "philosophy/man&gad/scholasticism.html",
    "revision": "1efd76ee4be11214439d8c74210e73d1"
  },
  {
    "url": "philosophy/origin/atomism&sophists.html",
    "revision": "c65bec1356cbc2bb4dec07a0ba82009e"
  },
  {
    "url": "philosophy/origin/history-of-philosophy.html",
    "revision": "ad710d8c9536fdcd8d033aaac8d14d06"
  },
  {
    "url": "philosophy/origin/index.html",
    "revision": "bba1f06cf72d73a0a44ac6e9943df3fb"
  },
  {
    "url": "philosophy/origin/materialism-and-immaterialism.html",
    "revision": "104fe12903106fcb1a6305d969d1072a"
  },
  {
    "url": "philosophy/origin/origin-of-philosophy.html",
    "revision": "f9954ff339a67c73d8c578fce16587fa"
  },
  {
    "url": "philosophy/origin/Socrates.html",
    "revision": "47e13aa04efb2dbf6d62112f7626dd1e"
  },
  {
    "url": "philosophy/rationalism&empiricism/Aristotle.html",
    "revision": "4976f101a7a142ed79c754aa509e5622"
  },
  {
    "url": "philosophy/rationalism&empiricism/index.html",
    "revision": "26c7cac4eb086cda133cd950a9462d2e"
  },
  {
    "url": "philosophy/reason/Descartes.html",
    "revision": "37984eda3a6093141faa64659bc905fa"
  },
  {
    "url": "philosophy/reason/index.html",
    "revision": "2de3f08aaad4f91d9cd35be5133e48db"
  },
  {
    "url": "philosophy/reason/Leibnitz.html",
    "revision": "032d7fad7fb8e76bbe973a77209fc23e"
  },
  {
    "url": "philosophy/reason/Pascal.html",
    "revision": "c8eaa1dd7680e4a71c4357986125be59"
  },
  {
    "url": "philosophy/reason/philo-sophia.html",
    "revision": "c83b3573781e6c49ae1c91f952ee5e90"
  },
  {
    "url": "philosophy/reason/reformation.html",
    "revision": "0bc7c406bda3a8cac1ffa340893865fe"
  },
  {
    "url": "philosophy/reason/Spinoza.html",
    "revision": "4c5f9ef7deb714af409914dccec8b10f"
  },
  {
    "url": "philosophy/self-settle/end-of-Greek.html",
    "revision": "5caefa7d5bfdd0449c3698c9f57e8899"
  },
  {
    "url": "philosophy/self-settle/hedonism.html",
    "revision": "a5f1c88e042dc9336927ef4335272902"
  },
  {
    "url": "philosophy/self-settle/index.html",
    "revision": "752908c7b0664dab6f0e9bc76ee4651d"
  },
  {
    "url": "philosophy/self-settle/scepticism.html",
    "revision": "0b3eae610926f2b5262bd8d79349976d"
  },
  {
    "url": "philosophy/self-settle/stoa.html",
    "revision": "ca4d1e7ec79ea28018ecd598d322153f"
  },
  {
    "url": "tag/index.html",
    "revision": "0efe77973713642b8e2381aedb7e424d"
  },
  {
    "url": "timeline/index.html",
    "revision": "7cf19bced4d75aced7aec6adc49af5db"
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
