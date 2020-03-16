const themeReco = require('./themeReco.js')

const sidebar = require('../sidebar/')
// const locales = require('../locales/')
const nav = require('../nav')
module.exports = Object.assign({}, themeReco, {
  head: [
    ['link', { rel: 'icon', href: '/vic/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
    ['link', { rel: 'manifest', href: '/vic/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#42b983' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
  ],
  sidebar,
  // locales,
  nav,
})
