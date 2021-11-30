(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{1723:function(t,s,a){"use strict";a.r(s);var e=a(1),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("什么是仓库呢? 英文名"),a("strong",[t._v("repository")]),t._v("，您可以简单理解成一个目录，这个目录里面的所有文件都可以被 Git 管理起来，每个文件的修改、删除， Git 都能跟踪，以便任何时刻都可以追踪历史，或者在将来某个时刻可以“还原”。")]),t._v(" "),a("h2",{attrs:{id:"初始化仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#初始化仓库"}},[t._v("#")]),t._v(" 初始化仓库")]),t._v(" "),a("p",[t._v("创建一个仓库非常简单，首先，选择一个合适的地方，创建一个空目录:")]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# open shell (PowerShell on Windows) in a proper directory")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" learngit\n$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" learngit\n$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("pwd")]),t._v("\n/users/hope-studio/learngit\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[a("code",[t._v("pwd")]),t._v(" 命令用于显示当前目录。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("ul",[a("li",[t._v("使用 Windows 系统时，为了避免遇到各种莫名其妙的问题，请确保目录名(包括父目录)不包含中文。")]),t._v(" "),a("li",[t._v("为了确保能够执行跨平台的命令，请在 Windows 上安装 PowerShell 并设置为 VS Code 的默认终端。")])])]),t._v(" "),a("p",[t._v("第二步，通过 "),a("code",[t._v("git init")]),t._v(" 命令把这个目录变成 Git 可以管理的仓库:")]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" init\nInitialized empty Git repository "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" /users/hope-studio/learngit/.git/\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("瞬间 Git 就把仓库建好了，而且告诉您是一个空的仓库(empty Git repository)，可以发现当前目录下多了一个.git 的目录，这个目录是 Git 来跟踪管理仓库的，如果这个目录里面的文件破坏了，Git 仓库也破坏了。")]),t._v(" "),a("p",[t._v("如果您没有看到 .git 目录，那是因为这个目录默认是隐藏的，用 "),a("code",[t._v("ls -ah")]),t._v(" 命令就可以看见。")]),t._v(" "),a("p",[t._v("也不一定必须在空目录下创建 Git 仓库，选择一个已经有东西的目录也是可以的。")]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("警告")]),t._v(" "),a("p",[t._v("请不要用已经在使用的项目练习 Git!")])]),t._v(" "),a("h2",{attrs:{id:"把文件添加到仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#把文件添加到仓库"}},[t._v("#")]),t._v(" 把文件添加到仓库")]),t._v(" "),a("p",[t._v("首先这里再明确一下，所有的版本控制系统，其实只能跟踪文本文件的改动，比如 TXT 文件，网页，所有的程序代码等等，Git 也不例外。版本控制系统可以告诉您每次的改动，比如在第 5 行加了一个单词“Linux”，在第 8 行删了一个单词“Windows”。而图片、视频这些二进制文件，虽然也能由版本控制系统管理，但没法跟踪文件的变化，只能把二进制文件每次改动串起来，也就是只知道图片从 100KB 改成了 120KB，但到底改了啥，版本控制系统不知道，也没法知道。(Microsoft 的 Word 格式是二进制格式，所以很不幸) 所以要使用版本控制系统，就要以纯文本方式编写文件。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("因为文本是有编码的，比如中文有常用的 GBK 编码，日文有 Shift_JIS 编码，如果没有历史遗留问题，强烈建议使用标准的 UTF-8 编码，所有语言使用同一种编码，既没有冲突，又被所有平台所支持。")]),t._v(" "),a("ul",[a("li",[t._v("具体详情请见 "),a("RouterLink",{attrs:{to:"/code/basic/encoding.html"}},[t._v("文件编码")])],1)])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("千万不要使用 Windows 自带的记事本编辑任何文本文件。")]),t._v(" "),a("ul",[a("li",[t._v("具体详情请见 "),a("RouterLink",{attrs:{to:"/code/windows/notepad.html"}},[t._v("记事本遗留问题")])],1)])]),t._v(" "),a("p",[t._v("现在编写一个 readme.txt 文件，内容如下:")]),t._v(" "),a("div",{staticClass:"language-md line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[t._v("Git is a version control system.\nGit is free software.\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("一定要放到 "),a("code",[t._v("learngit")]),t._v(" 目录下(子目录也行)，因为这是一个 Git 仓库，放到其他地方 Git 再厉害也找不到这个文件。")]),t._v(" "),a("p",[t._v("把一个文件放到 Git 仓库只需要两步:")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("用命令 "),a("code",[t._v("git add")]),t._v(" 告诉 Git，把文件添加到仓库:")]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" readme.txt\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("执行上面的命令，没有任何显示，这就对了，Unix 的哲学是“没有消息就是好消息”，说明添加成功。")])]),t._v(" "),a("li",[a("p",[t._v("用命令 "),a("code",[t._v("git commit")]),t._v(" 告诉 Git，把文件提交到仓库:")]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"wrote a readme file"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("master "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root-commit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" eaadf4e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" wrote a readme "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" changed, "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" insertions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("+"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n create mode "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100644")]),t._v(" readme.txt\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[a("code",[t._v("git commit")]),t._v(" 命令，"),a("code",[t._v("-m")]),t._v(" 后面输入的是本次提交的说明，这样您就能从历史记录里方便地找到改动记录。")]),t._v(" "),a("p",[a("code",[t._v("git commit")]),t._v(" 命令执行成功后会告诉您，"),a("code",[t._v("1 file changed")]),t._v(": 1 个文件被改动(我们新添加的 readme.txt 文件)；"),a("code",[t._v("2 insertions")]),t._v(": 插入了两行内容(readme.txt 有两行内容)。")])])]),t._v(" "),a("p",[t._v("为什么 Git 添加文件需要 "),a("code",[t._v("add")]),t._v("，"),a("code",[t._v("commit")]),t._v(" 一共两步呢? 因为 "),a("code",[t._v("commit")]),t._v(" 可以一次提交很多文件，所以您可以多次 "),a("code",[t._v("add")]),t._v(" 不同的文件，比如:")]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" file1.txt\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" file2.txt file3.txt\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"add 3 files."')]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("h2",{attrs:{id:"小结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[t._v("#")]),t._v(" 小结")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("初始化一个 Git 仓库，使用 "),a("code",[t._v("git init")]),t._v(" 命令。")])]),t._v(" "),a("li",[a("p",[t._v("添加文件到 Git 仓库，分两步:")]),t._v(" "),a("ol",[a("li",[t._v("使用命令 "),a("code",[t._v("git add <file>")]),t._v("，可反复多次使用，添加多个文件；")]),t._v(" "),a("li",[t._v("使用命令 "),a("code",[t._v("git commit -m <message>")]),t._v("，完成。")])])])])])}),[],!1,null,null,null);s.default=n.exports}}]);