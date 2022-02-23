const { sidebarConfig } = require("vuepress-theme-hope");
const spring = require("./spring");

module.exports = {
  zh: sidebarConfig({
    "/software/vscode/": require("./software/vscode"),

    "/software/git/": require("./software/git"),

    "/software/": require("./software"),

    "/note/innenu/": ["", "yaml", "tag-list", "get-started"],

    "/code/linux/": require("./linux"),

    "/code/windows/": [
      "",
      "shortcut-key",
      "hidden-file",
      "add-path",
      "cmd",
      "notepad",
    ],

    "/code/website/jquery/": require("./website/jquery"),

    "/code/website/html/": require("./website/html"),

    "/code/website/css/": require("./website/css"),

    "/code/website/": require("./website"),

    "/code/node-js/": [
      "",
      "intro",
      "install",
      "environment",
      "program",
      "module",
    ],

    "/code/language/python/": require("./language/python"),

    "/code/language/typescript/": require("./language/typescript"),

    "/code/language/markdown/": require("./language/markdown"),

    "/code/language/": require("./language"),

    "/code/github/": require("./github"),

    "/code/Android/": ["", "intro", "base", "resource"],

    "/code/": require("./code"),

    "/middleware/": require("./middleware/middleware"),

    "/about/": ["", "site"],

    // fallback
    "/": ["", "note/", "code/", "spring/","software/"],

    "/spring": require("./spring")
  }),

  en: sidebarConfig({
    "/en/note/": [""],

    "/en/code/": [""],

    "/en/about/": ["", "site"],

    // fallback
    "/en/": ["", "code/", "about/"],
  }),
};
