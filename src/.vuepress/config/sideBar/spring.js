const { sidebarConfig } = require("vuepress-theme-hope");

module.exports = sidebarConfig([
  "",
  {
    title: "Spring Framework",
    collapsable: false,
    prefix: "framework/",
    children: [
      "",
    ]
  },
  {
    title: "Spring Boot",
    collapsable: false,
    prefix: "boot/",
    children: [
      "",
    ]
  },
  {
    title: "Spring Cloud",
    icon: "actions",
    collapsable: false,
    prefix: "cloud/",
    children: [
      "",
      "square",
    ]
  }
]);
