const { sidebarConfig } = require("vuepress-theme-hope");

module.exports = sidebarConfig([
  "",
  {
    title: "消息中间件",
    icon: "mq",
    prefix:"mq/",
    collapsable: false,
    children: ["kafka/", "rocketmq/", "rabbitmq/"],
  },
  {
    title: "数据库中间件",
    icon: "database",
    collapsable: false,
    prefix:"database/",
    children: [
      "sharding-sphere/",
      "mycat/"
    ],
  }
]);
