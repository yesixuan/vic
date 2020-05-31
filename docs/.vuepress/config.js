const resolve = require('vuepress-theme-hope/resolve')
const themeConfig = require('./configs/theme/')

module.exports = resolve({
  base: '/vic/',
  // dest: '/dist',
  title: 'vic 空间',
  description: 'vic 空间',
  markdown: {
    lineNumbers: true // 展示行号
  },
  // theme: 'reco',
  themeConfig,
  head: [
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1,user-scalable=no'
      }
    ],
    [
      'link',
      {
        rel: 'shortcut icon ',
        type: 'images/x-icon',
        href: '/logo/favicon.ico'
      }
    ],
    [
      'link',
      {
        rel: 'manifest',
        href: '/manifest.json'
      }
    ]
  ],
  configureWebpack: {
    resolve: {
      alias: {
        '@img': './images'
      }
    }
  },
  plugins: [
    ['container', {
      type: 'tip',
      defaultTitle: ''
    }],
    ['container', {
      type: 'warning',
      defaultTitle: ''
    }],
    ['container', {
      type: 'danger',
      defaultTitle: ''
    }],
    ['container', {
      type: 'right',
      defaultTitle: ''
    }],
    ['container', {
      type: 'details',
      before: info => `<details class="custom-block details">${info ? `<summary>${info}</summary>` : ''}\n`,
      after: () => '</details>\n',
      defaultTitle: {
        '/': 'See More',
        '/zh/': '更多'
      }
    }]
  ],
});
