(window.webpackJsonp=window.webpackJsonp||[]).push([[501],{1558:function(s,a,t){"use strict";t.r(a);var n=t(1),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"环境变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#环境变量"}},[s._v("#")]),s._v(" 环境变量")]),s._v(" "),t("h2",{attrs:{id:"变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#变量"}},[s._v("#")]),s._v(" 变量")]),s._v(" "),t("p",[s._v("变量是计算机系统用于保存可变值的数据类型，我们可以直接通过变量名称来提取到对应的变量值。在 Linux 系统中，环境变量是用来定义系统运行环境的一些参数，比如每个用户不同的家目录 (HOME)、邮件存放位置 (MAIL)等。\n值得一提的是，Linux 系统中环境变量的名称一般都是大写的，这是一种约定俗成的规范。")]),s._v(" "),t("p",[s._v("我们可以使用 env 命令来查看到 Linux 系统中所有的环境变量，执行命令如下:")]),s._v(" "),t("div",{staticClass:"language-shell-session line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell-session"}},[t("code",[t("span",{pre:!0,attrs:{class:"token command"}},[t("span",{pre:!0,attrs:{class:"token info punctuation"}},[t("span",{pre:!0,attrs:{class:"token user"}},[s._v("[root@localhost ~]")])]),t("span",{pre:!0,attrs:{class:"token shell-symbol important"}},[s._v("#")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token bash language-bash"}},[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("env")])])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token output"}},[s._v("ORBIT_SOCKETDIR=/tmp/orbit-root\nHOSTNAME=livecd.centos\nGIO_LAUNCHED_DESKTOP_FILE_PID=2065\nTERM=xterm\nSHELL=/bin/bash\n......\n")])])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("Linux 系统能够正常运行并且为用户提供服务，需要数百个环境变量来协同工作，但是，我们没有必要逐一学习每个变量。常见变量见下表:")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("环境变量名称")]),s._v(" "),t("th",[s._v("作用")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("HOME")]),s._v(" "),t("td",[s._v("用户的主目录(也称家目录)")])]),s._v(" "),t("tr",[t("td",[s._v("SHELL")]),s._v(" "),t("td",[s._v("用户使用的 Shell 解释器名称")])]),s._v(" "),t("tr",[t("td",[s._v("PATH")]),s._v(" "),t("td",[s._v("定义命令行解释器搜索用户执行命令的路径")])]),s._v(" "),t("tr",[t("td",[s._v("EDITOR")]),s._v(" "),t("td",[s._v("用户默认的文本解释器")])]),s._v(" "),t("tr",[t("td",[s._v("RANDOM")]),s._v(" "),t("td",[s._v("生成一个随机数字")])]),s._v(" "),t("tr",[t("td",[s._v("LANG")]),s._v(" "),t("td",[s._v("系统语言、语系名称")])]),s._v(" "),t("tr",[t("td",[s._v("HISTSIZE")]),s._v(" "),t("td",[s._v("输出的历史命令记录条数")])]),s._v(" "),t("tr",[t("td",[s._v("HISTFILESIZE")]),s._v(" "),t("td",[s._v("保存的历史命令记录条数")])]),s._v(" "),t("tr",[t("td",[s._v("PS1")]),s._v(" "),t("td",[s._v("Bash 解释器的提示符")])]),s._v(" "),t("tr",[t("td",[s._v("MAIL")]),s._v(" "),t("td",[s._v("邮件保存路径")])])])]),s._v(" "),t("p",[s._v("Linux 作为一个多用户多任务的操作系统，能够为每个用户提供独立的、合适的工作运行环境，因此，一个相同的环境变量会因为用户身份的不同而具有不同的值。")]),s._v(" "),t("p",[s._v("例如，使用下述命令来查看 "),t("code",[s._v("HOME")]),s._v(" 变量在不同用户身份下都有哪些值:")]),s._v(" "),t("div",{staticClass:"language-shell-session line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell-session"}},[t("code",[t("span",{pre:!0,attrs:{class:"token command"}},[t("span",{pre:!0,attrs:{class:"token info punctuation"}},[t("span",{pre:!0,attrs:{class:"token user"}},[s._v("[root@localhost ~]")])]),t("span",{pre:!0,attrs:{class:"token shell-symbol important"}},[s._v("#")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token bash language-bash"}},[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")])])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token output"}},[s._v("/root\n")]),t("span",{pre:!0,attrs:{class:"token command"}},[t("span",{pre:!0,attrs:{class:"token info punctuation"}},[t("span",{pre:!0,attrs:{class:"token user"}},[s._v("[root@localhost ~]")])]),t("span",{pre:!0,attrs:{class:"token shell-symbol important"}},[s._v("#")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token bash language-bash"}},[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("su")]),s._v(" - user1  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("--切换到 user1 用户身份")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token command"}},[t("span",{pre:!0,attrs:{class:"token info punctuation"}},[t("span",{pre:!0,attrs:{class:"token user"}},[s._v("[user1@localhost ~]")])]),t("span",{pre:!0,attrs:{class:"token shell-symbol important"}},[s._v("$")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token bash language-bash"}},[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")])])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token output"}},[s._v("/home/user1\n")])])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("这里的 "),t("code",[s._v("su")]),s._v(" 命令可以临时切换用户身份，此命令的具体用法会在后续章节做详细介绍。")]),s._v(" "),t("p",[s._v("其实，环境变量是由固定的变量名与用户或系统设置的变量值两部分组成的，我们完全可以自行创建环境变量来满足工作需求。例如，设置一个名称为 "),t("code",[s._v("WORKDIR")]),s._v(" 的环境变量，方便用户更轻松地进入一个层次较深的目录，执行命令如下:")]),s._v(" "),t("div",{staticClass:"language-shell-session line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell-session"}},[t("code",[t("span",{pre:!0,attrs:{class:"token command"}},[t("span",{pre:!0,attrs:{class:"token info punctuation"}},[t("span",{pre:!0,attrs:{class:"token user"}},[s._v("[root@localhost ~]")])]),t("span",{pre:!0,attrs:{class:"token shell-symbol important"}},[s._v("#")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token bash language-bash"}},[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" /home/work1")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token command"}},[t("span",{pre:!0,attrs:{class:"token info punctuation"}},[t("span",{pre:!0,attrs:{class:"token user"}},[s._v("[root@localhost ~]")])]),t("span",{pre:!0,attrs:{class:"token shell-symbol important"}},[s._v("#")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token bash language-bash"}},[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("WORKDIR")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/home/work1")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token command"}},[t("span",{pre:!0,attrs:{class:"token info punctuation"}},[t("span",{pre:!0,attrs:{class:"token user"}},[s._v("[root@localhost ~]")])]),t("span",{pre:!0,attrs:{class:"token shell-symbol important"}},[s._v("#")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token bash language-bash"}},[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$WORKDIR")])])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token command"}},[t("span",{pre:!0,attrs:{class:"token info punctuation"}},[t("span",{pre:!0,attrs:{class:"token user"}},[s._v("[root@localhost work1]")])]),t("span",{pre:!0,attrs:{class:"token shell-symbol important"}},[s._v("#")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token bash language-bash"}},[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("pwd")])])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token output"}},[s._v("/home/work1\n")])])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("但是，这样的环境变量不具有全局性，作用范围也有限，默认情况下不能被其他用户使用。如果工作需要，可以使用 "),t("code",[s._v("export")]),s._v(" 命令将其提升为全局环境变量，这样其他用户就可以使用它了:")]),s._v(" "),t("div",{staticClass:"language-shell-session line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell-session"}},[t("code",[t("span",{pre:!0,attrs:{class:"token command"}},[t("span",{pre:!0,attrs:{class:"token info punctuation"}},[t("span",{pre:!0,attrs:{class:"token user"}},[s._v("[root@localhost work1]")])]),t("span",{pre:!0,attrs:{class:"token shell-symbol important"}},[s._v("#")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token bash language-bash"}},[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("su")]),s._v(" user1  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("-- 切换到 user1，发现无法使用 WORKDIR 自定义变量")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token command"}},[t("span",{pre:!0,attrs:{class:"token info punctuation"}},[t("span",{pre:!0,attrs:{class:"token user"}},[s._v("[user1@localhost ~]")])]),t("span",{pre:!0,attrs:{class:"token shell-symbol important"}},[s._v("$")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token bash language-bash"}},[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$WORKDIR")])])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token command"}},[t("span",{pre:!0,attrs:{class:"token info punctuation"}},[t("span",{pre:!0,attrs:{class:"token user"}},[s._v("[user1@localhost ~]")])]),t("span",{pre:!0,attrs:{class:"token shell-symbol important"}},[s._v("$")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token bash language-bash"}},[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$WORKDIR")])])]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token command"}},[t("span",{pre:!0,attrs:{class:"token info punctuation"}},[t("span",{pre:!0,attrs:{class:"token user"}},[s._v("[user1@localhost ~]")])]),t("span",{pre:!0,attrs:{class:"token shell-symbol important"}},[s._v("$")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token bash language-bash"}},[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("--退出user1身份")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token command"}},[t("span",{pre:!0,attrs:{class:"token info punctuation"}},[t("span",{pre:!0,attrs:{class:"token user"}},[s._v("[root@localhost work1]")])]),t("span",{pre:!0,attrs:{class:"token shell-symbol important"}},[s._v("#")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token bash language-bash"}},[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" WORKDIR")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token command"}},[t("span",{pre:!0,attrs:{class:"token info punctuation"}},[t("span",{pre:!0,attrs:{class:"token user"}},[s._v("[root@localhost work1]")])]),t("span",{pre:!0,attrs:{class:"token shell-symbol important"}},[s._v("#")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token bash language-bash"}},[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("su")]),s._v(" user1")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token command"}},[t("span",{pre:!0,attrs:{class:"token info punctuation"}},[t("span",{pre:!0,attrs:{class:"token user"}},[s._v("[user1@localhost ~]")])]),t("span",{pre:!0,attrs:{class:"token shell-symbol important"}},[s._v("$")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token bash language-bash"}},[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$WORKDIR")])])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token command"}},[t("span",{pre:!0,attrs:{class:"token info punctuation"}},[t("span",{pre:!0,attrs:{class:"token user"}},[s._v("[user1@localhost work1]")])]),t("span",{pre:!0,attrs:{class:"token shell-symbol important"}},[s._v("$")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token bash language-bash"}},[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("pwd")])])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token output"}},[s._v("/home/work1\n")])])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("h2",{attrs:{id:"path"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#path"}},[s._v("#")]),s._v(" path")]),s._v(" "),t("p",[s._v("在讲解 PATH 环境变量之前，首先介绍一下 "),t("code",[s._v("which")]),s._v(" 命令，它用于查找某个命令所在的绝对路径。例如:")]),s._v(" "),t("div",{staticClass:"language-shell-session line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell-session"}},[t("code",[t("span",{pre:!0,attrs:{class:"token command"}},[t("span",{pre:!0,attrs:{class:"token info punctuation"}},[t("span",{pre:!0,attrs:{class:"token user"}},[s._v("[root@localhost ~]")])]),t("span",{pre:!0,attrs:{class:"token shell-symbol important"}},[s._v("#")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token bash language-bash"}},[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("which")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")])])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token output"}},[s._v("/bin/rm\n")]),t("span",{pre:!0,attrs:{class:"token command"}},[t("span",{pre:!0,attrs:{class:"token info punctuation"}},[t("span",{pre:!0,attrs:{class:"token user"}},[s._v("[root@localhost ~]")])]),t("span",{pre:!0,attrs:{class:"token shell-symbol important"}},[s._v("#")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token bash language-bash"}},[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("which")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rmdir")])])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token output"}},[s._v("/bin/rmdir\n")]),t("span",{pre:!0,attrs:{class:"token command"}},[t("span",{pre:!0,attrs:{class:"token info punctuation"}},[t("span",{pre:!0,attrs:{class:"token user"}},[s._v("[root@localhost ~]")])]),t("span",{pre:!0,attrs:{class:"token shell-symbol important"}},[s._v("#")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token bash language-bash"}},[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("which")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")])])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token output"}},[s._v("alias ls='ls --color=auto'\n        /bin/ls\n")])])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("注意，"),t("code",[s._v("ls")]),s._v(" 是一个相对特殊的命令，它使用 alias 命令做了别名，也就是说，我们常用的 "),t("code",[s._v("ls")]),s._v(" 实际上执行的是 "),t("code",[s._v("ls --color=auto")]),s._v("。")]),s._v(" "),t("p",[s._v("通过使用 "),t("code",[s._v("which")]),s._v(" 命令，可以查找各个外部命令(和 Shell 内置命令相对)所在的绝对路径。学到这里，读者是否有这样一个疑问，为什么前面在使用 "),t("code",[s._v("rm")]),s._v("、"),t("code",[s._v("rmdir")]),s._v("、"),t("code",[s._v("ls")]),s._v(" 等命令时，无论当前位于哪个目录，都可以直接使用，而无需指明命令的执行文件所在的位置 (绝对路径) 呢? 其实，这是 PATH 环境变量在起作用。")]),s._v(" "),t("p",[s._v("首先，执行如下命令:")]),s._v(" "),t("div",{staticClass:"language-shell-session line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell-session"}},[t("code",[t("span",{pre:!0,attrs:{class:"token command"}},[t("span",{pre:!0,attrs:{class:"token info punctuation"}},[t("span",{pre:!0,attrs:{class:"token user"}},[s._v("[root@localhost ~]")])]),t("span",{pre:!0,attrs:{class:"token shell-symbol important"}},[s._v("#")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token bash language-bash"}},[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")])])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token output"}},[s._v("/usr/local/sbin:/usr/sbin:/sbin:/usr/local/bin:/usr/bin:/bin:/root/bin\n")])])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("这里的 "),t("code",[s._v("echo")]),s._v(" 命令用来输出 PATH 环境变量的值(这里的 "),t("code",[s._v("$")]),s._v(" 是 PATH 的前缀符号)，PATH 环境变量的内容是由一堆目录组成的，各目录之间用冒号 "),t("code",[s._v(":")]),s._v(" 隔开。当执行某个命令时，Linux 会依照 PATH 中包含的目录依次搜寻该命令的可执行文件，一旦找到，即正常执行；反之，则提示无法找到该命令。\n如果在 PATH 包含的目录中，有多个目录都包含某命令的可执行文件，那么会执行先搜索到的可执行文件。")]),s._v(" "),t("p",[s._v("从执行结果中可以看到，"),t("code",[s._v("/bin")]),s._v(" 目录已经包含在 PATH 环境变量中，因此在使用类似 "),t("code",[s._v("rm")]),s._v("、"),t("code",[s._v("rmdir")]),s._v("、"),t("code",[s._v("ls")]),s._v(" 等命令时，即便直接使用其命令名，Linux 也可以找到该命令。")]),s._v(" "),t("p",[s._v("为了印证以上观点，下面举个反例，如果我们将 "),t("code",[s._v("ls")]),s._v(" 命令移动到 "),t("code",[s._v("/root")]),s._v(" 目录下，由于 PATH 环境变量中没有包含此目录，所有当直接使用 "),t("code",[s._v("ls")]),s._v(" 命令名执行时，Linux 将无法找到此命令的可执行文件，并提示 "),t("code",[s._v("No such file or directory")]),s._v("，示例命令如下:")]),s._v(" "),t("div",{staticClass:"language-shell-session line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell-session"}},[t("code",[t("span",{pre:!0,attrs:{class:"token command"}},[t("span",{pre:!0,attrs:{class:"token info punctuation"}},[t("span",{pre:!0,attrs:{class:"token user"}},[s._v("[root@localhost ~]")])]),t("span",{pre:!0,attrs:{class:"token shell-symbol important"}},[s._v("#")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token bash language-bash"}},[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" /bin/ls /root")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token command"}},[t("span",{pre:!0,attrs:{class:"token info punctuation"}},[t("span",{pre:!0,attrs:{class:"token user"}},[s._v("[root@localhost ~]")])]),t("span",{pre:!0,attrs:{class:"token shell-symbol important"}},[s._v("#")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token bash language-bash"}},[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")])])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token output"}},[s._v("bash: /bin/ls: No such file or directory\n")])])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("此时，如果仍想使用 "),t("code",[s._v("ls")]),s._v(" 命令，有 2 种方法，一种是直接将 "),t("code",[s._v("/root")]),s._v(" 添加到 PATH 环境变量中，例如:")]),s._v(" "),t("div",{staticClass:"language-shell-session line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell-session"}},[t("code",[t("span",{pre:!0,attrs:{class:"token command"}},[t("span",{pre:!0,attrs:{class:"token info punctuation"}},[t("span",{pre:!0,attrs:{class:"token user"}},[s._v("[root@localhost ~]")])]),t("span",{pre:!0,attrs:{class:"token shell-symbol important"}},[s._v("#")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token bash language-bash"}},[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v(":/root")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token command"}},[t("span",{pre:!0,attrs:{class:"token info punctuation"}},[t("span",{pre:!0,attrs:{class:"token user"}},[s._v("[root@localhost ~]")])]),t("span",{pre:!0,attrs:{class:"token shell-symbol important"}},[s._v("#")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token bash language-bash"}},[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")])])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token output"}},[s._v("/usr/local/sbin:/usr/sbin:/usr/local/bin:/usr/bin:/bin:/root/bin:/root\n")]),t("span",{pre:!0,attrs:{class:"token command"}},[t("span",{pre:!0,attrs:{class:"token info punctuation"}},[t("span",{pre:!0,attrs:{class:"token user"}},[s._v("[root@localhost ~]")])]),t("span",{pre:!0,attrs:{class:"token shell-symbol important"}},[s._v("#")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token bash language-bash"}},[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")])])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token output"}},[s._v("Desktop    Downloads    Music    post-install     Public    Videos\nDocuments  ls           Pictures post-install.org Templates\n")])])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("注意，这种方式只是临时有效，一旦退出下次再登陆的时候，"),t("code",[s._v("$PATH")]),s._v(" 就恢复成了默认值。")]),s._v(" "),t("p",[s._v("另一种方法是以绝对路径的方式使用此命令，例如:")]),s._v(" "),t("div",{staticClass:"language-shell-session line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell-session"}},[t("code",[t("span",{pre:!0,attrs:{class:"token command"}},[t("span",{pre:!0,attrs:{class:"token info punctuation"}},[t("span",{pre:!0,attrs:{class:"token user"}},[s._v("[root@localhost ~]")])]),t("span",{pre:!0,attrs:{class:"token shell-symbol important"}},[s._v("#")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token bash language-bash"}},[s._v("/root/ls")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token output"}},[s._v("Desktop    Downloads    Music    post-install     Public    Videos\nDocuments  ls           Pictures post-install.org Templates\n")])])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("为了不影响系统的正常使用，强烈建议大家将移动后的 "),t("code",[s._v("ls")]),s._v(" 文件还原，命令如下:")]),s._v(" "),t("div",{staticClass:"language-shell-session line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell-session"}},[t("code",[t("span",{pre:!0,attrs:{class:"token command"}},[t("span",{pre:!0,attrs:{class:"token info punctuation"}},[t("span",{pre:!0,attrs:{class:"token user"}},[s._v("[root@localhost ~]")])]),t("span",{pre:!0,attrs:{class:"token shell-symbol important"}},[s._v("#")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token bash language-bash"}},[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" /root/ls /bin")])]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);