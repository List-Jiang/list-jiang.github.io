const {
  navbarConfig
} = require("vuepress-theme-hope");

module.exports = {
  zh: navbarConfig([{
      text: "主页",
      icon: "home",
      link: "/"
    },
    {
      text: "Java",
      icon: "spring-gb",
      items: [{
          text: "基础",
          items: [
            {
              text:"异常机制",
              link:"/exception"
            }
          ]
        },
        {
          text: "集合",
          items: [
            {
              text:"Collection ArrayList",
              link:"/array-list"
            },
            {
              text:"Map HashMap",
              link:"/hash-map"
            },
          ]
        },
        {
          text: "IO",
          items: [
            {
              text:"Collection ArrayList",
              link:"/array-list"
            },
            {
              text:"Map HashMap",
              link:"/hash-map"
            },
          ]
        },
        {
          text: "多线程与并发",
          items: [
            {
              text:"Collection ArrayList",
              link:"/array-list"
            },
            {
              text:"Map HashMap",
              link:"/hash-map"
            },
          ]
        },
        {
          text: "JVM",
          items: [
            {
              text:"Collection ArrayList",
              link:"/array-list"
            },
            {
              text:"Map HashMap",
              link:"/hash-map"
            },
          ]
        },
      ],
    },
    {
      text: "Spring 框架",
      icon: "spring-gb",
      items: [{
          text: "Spring Framework",
          link: "/framework/"
        },
        {
          text: "Spring Boot",
          link: "/boot/"
        },
        {
          text: "Spring Security",
          link: "/security/"
        },
        {
          text: "Spring Cloud",
          link: "/cloud/"
        },
      ],
    },
    {
      text: "代码笔记",
      icon: "code",
      items: [{
          text: "代码笔记",
          icon: "code",
          link: "/code/"
        },
        {
          text: "产品设计",
          items: [{
            text: "设计教程",
            icon: "skin",
            link: "/design/"
          }],
        },
        {
          text: "后端运维",
          items: [{
            text: "Linux 教程",
            icon: "linux",
            link: "/linux/"
          }],
        },
      ],
    },
    {
      text: "软件教程",
      icon: "software",
      prefix: "/software/",
      items: [{
        text: "软件教程",
        icon: "software",
        link: "",
        items: [{
            text: "VS Code",
            icon: "vscode",
            link: "vscode/"
          },
          {
            text: "Git",
            icon: "git",
            link: "git/"
          },
        ],
      }, ],
    },
  ]),

  en: navbarConfig([{
      text: "Home",
      link: "/en/",
      icon: "home"
    },
    {
      text: "Note",
      link: "/en/note/",
      icon: "note"
    },
    {
      text: "Code Note",
      icon: "code",
      items: [{
        text: "Code Note",
        icon: "code",
        link: "/en/code/"
      }],
    },
    {
      text: "Software",
      icon: "software",
      link: "/en/software/",
    },
  ]),
};