# 下一站，心动 · 小楠与阿雨

中文双人恋爱剧情小游戏。左边是小楠，右边是阿雨。五章故事、十次选择、三种结局、心动互动、浏览器自动存档和纪念票下载。

在线游戏：[下一站，心动](https://xb0000.github.io/next-stop-love/)

角色脸部直接使用用户提供的原照，未重绘或替换。所有图片、字体回退、游戏代码均无需外部运行依赖。

## GitHub Pages 发布

- 发布分支：`codex/pages`
- 发布目录：仓库根目录 `/`
- 入口文件：`index.html`
- `.nojekyll` 保证直接发布已有的 HTML、CSS、JavaScript 和原照素材。
- 无需数据库、环境变量或服务器进程。

本地预览：`python -m http.server 4173 --directory .`。

原始 `dist` 布局保留在 `codex/render` 分支，其他静态托管服务可使用该分支。

## 存档

存档保存在当前浏览器的 localStorage。更换域名或浏览器后，原地址中的进度不会自动转移。
