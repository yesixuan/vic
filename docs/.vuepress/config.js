const themeConfig = require('./configs/theme/')

module.exports = {
  base: '/vic/',
  // dest: '/dist',
  title: 'vic 空间',
  description: 'vic 空间',
  markdown: {
    lineNumbers: true // 展示行号
  },
  theme: 'reco',
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
    ['@vuepress/active-header-links', {
      sidebarLinkSelector: '.sidebar-link',
      headerAnchorSelector: '.header-anchor'
    }],
    ['@vuepress/medium-zoom', {
      selector: 'img',
      options: {
        margin: 16
      }
    }],
    ['@vuepress/nprogress'],
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: {
        message: "发现新内容可用",
        buttonText: "刷新"
      }
    }],
    ['vuepress-plugin-container', {
      type: 'right',
      defaultTitle: '',
    },],
    ['container', {
      type: 'myDetails',
      before: info => `<details class="custom-block details">${info ? `<summary>${info}</summary>` : ''}\n`,
      after: () => '</details>\n',
      defaultTitle: {
        '/': 'See More',
        '/zh/': '更多'
      }
    }]
  ],
};
