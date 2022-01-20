const { sidebarConfig } = require("vuepress-theme-hope");

module.exports = sidebarConfig([
  "",
  "editor",
  "vscode/",
  "chrome",
  "git/",
  {
    title: "工具软件",
    icon: "tool",
    collapsable: false,
    prefix: "tool/",
    children: [
      "",
    ],
  },
  "nginx",
]);
