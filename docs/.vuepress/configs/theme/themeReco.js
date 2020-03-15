module.exports = {
  type: 'HomePageOne',
  // logo: '/icon_vuepress_reco.png',
  // 搜索设置
  search: true,
  searchMaxSuggestions: 10,
  // 自动形成侧边导航
  sidebar: 'auto',
  // 侧边栏深度
  sidebarDepth: 1,
  // 最后更新时间
  lastUpdated: false, // string | boolean
  // 作者
  author: 'Vic',
  // authorAvatar: '/head.png',
  // 备案号
  // record: '京ICP备17067634号-1',
  // 项目开始时间
  startYear: '2020',
  // valine 设置
  valineConfig: {
    appId: 'qzRJLh5LsoyF7JVRq2GNMKNG-gzGzoHsz',
    appKey: 'hjy7b4GtbJRi17plRztNPVU8',
    placeholder: '填写邮箱可以收到回复提醒哦！',
    notify: true,
    recordIP: true
  },
  // vssueConfig: {
  //   platform: 'github',
  //   owner: 'yesixuan',
  //   repo: 'vic',
  //   clientId: '43a8e5d8ab5db4be4c93',
  //   clientSecret: 'c1bb3d31de3b99540a2705b081c073dfc4191979'
  // },
  // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
  repo: 'https://www.github.com/yesixuan/vic',
  // // 假如文档不是放在仓库的根目录下：
  docsDir: 'gh-pages',
  // // 假如文档放在一个特定的分支下：
  docsBranch: 'master',
  // // 默认是 false, 设置为 true 来启用
  editLinks: false,
}

// github issue 评论
// vssueConfig: {
//   platform: 'github',
//   owner: 'yesixuan',
//   repo: 'vic',
//   clientId: '43a8e5d8ab5db4be4c93',
//   clientSecret: 'c1bb3d31de3b99540a2705b081c073dfc4191979'
// },
