const { sidebarConfig } = require("vuepress-theme-hope");

module.exports = sidebarConfig([
  "",
  {
    title: "基础常识",
    icon: "module",
    collapsable: false,
    children: ["basic/", "windows/", "github/"],
  },
  {
    title: "前端体系",
    icon: "code",
    collapsable: false,
    children: [
      "website/",
      "node-js/",
      "react/",
    ],
  },
  {
    title: "语言",
    icon: "language",
    prefix: "language/",
    path: "language/",
    collapsable: false,
    children: [
      "learning",
      "typescript/",
      "python/",
      "linter/",
    ],
  },
]);
