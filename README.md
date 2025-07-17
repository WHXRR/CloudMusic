# 🎵 网易云音乐 Web 版（React + Node.js）

这是一个基于 React 的网易云音乐 Web 实现项目，前端使用 React + Ant Design + Redux 技术栈，后端调用了 [网易云音乐 Node.js API 服务](https://github.com/WHXRR/NeteaseCloudMusicApi)，实现了搜索、播放、歌词、排行榜等核心功能。

在线预览地址 👉 [点击访问](https://whxrr.github.io/CloudMusic/)

---

## ✨ 功能特性

- 🔍 音乐搜索（关键词）
- 📻 热门推荐、排行榜
- 🎧 歌曲播放（支持进度控制）
- 📝 歌词同步滚动显示
- 👤 歌手详情页
- 📦 完整 Redux 状态管理架构

---

## 🛠 技术栈

### 前端

- **React 18 + CRA（Create React App）**
- **Ant Design** UI 框架（支持自定义主题）
- **Redux + redux-thunk + redux-immutable** 状态管理
- **craco + craco-less** 替代 eject，实现更灵活的配置
- **axios** 请求数据
- **styled-components** 样式管理
- **nprogress** 页面加载进度条
- **prop-types** 类型校验

### 后端

- [Binaryify/NeteaseCloudMusicApi](https://github.com/WHXRR/NeteaseCloudMusicApi)
  - 第三方网易云音乐 Node.js API
  - 提供登录、播放、搜索、歌单、歌词、评论等接口

---