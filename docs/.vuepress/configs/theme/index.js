const themeReco = require('./themeReco.js')

const sidebar = require('../sidebar/')
// const locales = require('../locales/')
const nav = require('../nav')
module.exports = Object.assign({}, themeReco, {
  sidebar,
  // locales,
  nav,
  themeColor: {
    blue: "#2196f3",
    red: "#f26d6d",
    green: "#3eaf7c",
    orange: "#fb9b5f",
  },
  pwa: '发现新内容可用',
})
