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
      icon: "java",
      items: [{
          text: "基础",
          items: [{
            text: "异常机制",
            link: "/exception"
          }]
        },
        {
          text: "集合",
          items: [{
              text: "Collection ArrayList",
              link: "/array-list"
            },
            {
              text: "Map HashMap",
              link: "/hash-map"
            },
          ]
        },
        {
          text: "IO",
          items: [{
              text: "Collection ArrayList",
              link: "/array-list"
            },
            {
              text: "Map HashMap",
              link: "/hash-map"
            },
          ]
        },
        {
          text: "多线程与并发",
          items: [{
              text: "Collection ArrayList",
              link: "/array-list"
            },
            {
              text: "Map HashMap",
              link: "/hash-map"
            },
          ]
        },
        {
          text: "JVM",
          items: [{
              text: "Collection ArrayList",
              link: "/array-list"
            },
            {
              text: "Map HashMap",
              link: "/hash-map"
            },
          ]
        },
      ],
    },
    {
      text: "Spring 框架",
      icon: "spring",
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
      text: "开发入门",
      icon: "rumen",
      prefix: "/code",
      items: [{
          text: "基础常识",
          items: [{
            text: "基础常识",
            icon: "module",
            link: "/basic/"
          }, {
            text: "windows 基础",
            icon: "windows",
            link: "/windows/"
          }, {
            text: "Git Hub",
            icon: "github",
            link: "/github/"
          }]
        }, {
          text: "前端体系",
          items: [{
            text: "Web 入门",
            icon: "website",
            link: "/website/"
          }, {
            text: "Node.js",
            icon: "node",
            link: "/node-js/"
          }, {
            text: "React",
            icon: "react",
            link: "/react/"
          }]
        }, {
          text: "辅助语言",
          prefix: "/language",
          items: [{
            text: "语言入门",
            icon: "learning",
            link: "/learning/"
          }, {
            text: "TypeScript 教程",
            icon: "typescript",
            link: "/typescript/"
          }, {
            text: "Python 教程",
            icon: "python",
            link: "/python/"
          }, {
            text: "Linter 介绍",
            icon: "linter",
            link: "/linter/"
          }]
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
    {
      text: "随笔",
      icon: "software",
      link: "/note/",
      items: [{
        text: "随笔一",
        icon: "software",
        link: "",
        items: [{
            text: "随笔一",
            icon: "vscode",
            link: "note1/"
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