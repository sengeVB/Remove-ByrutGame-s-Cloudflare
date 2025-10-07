# ByrutGame URL Fixer 浏览器插件

备注作者：森哥科技

## 功能说明

这个Edge浏览器插件用于自动修复访问`https://byrutgame.org./`开头的URL，将其重定向到正确的`https://byrutgame.org/`，同时保留URL后面的所有内容。

## 安装方法

1. 在Edge浏览器中打开扩展页面：`edge://extensions/`
2. 打开右上角的"开发者模式"
3. 点击"加载已解压的扩展程序"
4. 选择包含本插件文件的文件夹

## 工作原理

插件会监听浏览器的导航事件，当检测到URL以`https://byrutgame.org./`开头时，会自动将其重定向到`https://byrutgame.org/`，同时保留URL后面的所有路径和参数。

例如：
- `https://byrutgame.org./` 会被重定向到 `https://byrutgame.org/`
- `https://byrutgame.org./hcc/ll/xxxxxxx` 会被重定向到 `https://byrutgame.org/hcc/ll/xxxxxxx`

## 文件说明

- `manifest.json`：插件的配置文件
- `background.js`：实现URL检测和重定向的核心逻辑
- `README.md`：插件说明文档