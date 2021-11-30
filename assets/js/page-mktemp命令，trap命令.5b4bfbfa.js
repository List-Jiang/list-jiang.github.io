(window.webpackJsonp=window.webpackJsonp||[]).push([[211],{1538:function(s,a,t){"use strict";t.r(a);var n=t(1),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("Bash 脚本有时需要创建临时文件或临时目录。常见的做法是，在 "),t("code",[s._v("/tmp")]),s._v(" 目录里面创建文件或目录，这样做有很多弊端，使用 "),t("code",[s._v("mktemp")]),s._v(" 命令是最安全的做法。")]),s._v(" "),t("h2",{attrs:{id:"临时文件的安全问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#临时文件的安全问题"}},[s._v("#")]),s._v(" 临时文件的安全问题")]),s._v(" "),t("p",[s._v("直接创建临时文件，尤其在 "),t("code",[s._v("/tmp")]),s._v(" 目录里面，往往会导致安全问题。")]),s._v(" "),t("p",[s._v("首先，"),t("code",[s._v("/tmp")]),s._v(" 目录是所有人可读写的，任何用户都可以往该目录里面写文件。创建的临时文件也是所有人可读的。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("touch")]),s._v(" /tmp/info.txt\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" -l /tmp/info.txt\n-rw-r--r-- "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" ruanyf ruanyf "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v("月 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("28")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),s._v(":12 /tmp/info.txt\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("上面命令在 "),t("code",[s._v("/tmp")]),s._v(" 目录直接创建文件，该文件默认是所有人可读的。")]),s._v(" "),t("p",[s._v("其次，如果攻击者知道临时文件的文件名，他可以创建符号链接，链接到临时文件，可能导致系统运行异常。攻击者也可能向脚本提供一些恶意数据。因此，临时文件最好使用不可预测、每次都不一样的文件名，防止被利用。")]),s._v(" "),t("p",[s._v("最后，临时文件使用完毕，应该删除。但是，脚本意外退出时，往往会忽略清理临时文件。")]),s._v(" "),t("p",[s._v("生成临时文件应该遵循下面的规则。")]),s._v(" "),t("blockquote",[t("ul",[t("li",[s._v("创建前检查文件是否已经存在。")]),s._v(" "),t("li",[s._v("确保临时文件已成功创建。")]),s._v(" "),t("li",[s._v("临时文件必须有权限的限制。")]),s._v(" "),t("li",[s._v("临时文件要使用不可预测的文件名。")]),s._v(" "),t("li",[s._v("脚本退出时，要删除临时文件(使用 "),t("code",[s._v("trap")]),s._v(" 命令)。")])])]),s._v(" "),t("h2",{attrs:{id:"mktemp-命令的用法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mktemp-命令的用法"}},[s._v("#")]),s._v(" mktemp 命令的用法")]),s._v(" "),t("p",[t("code",[s._v("mktemp")]),s._v(" 命令就是为安全创建临时文件而设计的。虽然在创建临时文件之前，它不会检查临时文件是否存在，但是它支持唯一文件名和清除机制，因此可以减轻安全攻击的风险。")]),s._v(" "),t("p",[s._v("直接运行 "),t("code",[s._v("mktemp")]),s._v(" 命令，就能生成一个临时文件。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ mktemp\n/tmp/tmp.4GcsWSG4vj\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" -l /tmp/tmp.4GcsWSG4vj\n-rw------- "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" ruanyf ruanyf "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v("月 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("28")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(":49 /tmp/tmp.4GcsWSG4vj\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("上面命令中，"),t("code",[s._v("mktemp")]),s._v(" 命令生成的临时文件名是随机的，而且权限是只有用户本人可读写。")]),s._v(" "),t("p",[s._v("Bash 脚本使用 "),t("code",[s._v("mktemp")]),s._v(" 命令的用法如下。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("TMPFILE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("mktemp"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Our temp file is '),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$TMPFILE")]),s._v('"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("为了确保临时文件创建成功，"),t("code",[s._v("mktemp")]),s._v(" 命令后面最好使用 OR 运算符 ("),t("code",[s._v("||")]),s._v(")，保证创建失败时退出脚本。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("TMPFILE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("mktemp"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Our temp file is '),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$TMPFILE")]),s._v('"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("为了保证脚本退出时临时文件被删除，可以使用 "),t("code",[s._v("trap")]),s._v(" 命令指定退出时的清除操作。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("trap")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'rm -f \"$TMPFILE\"'")]),s._v(" EXIT\n\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("TMPFILE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("mktemp"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Our temp file is '),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$TMPFILE")]),s._v('"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h2",{attrs:{id:"mktemp-命令的参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mktemp-命令的参数"}},[s._v("#")]),s._v(" mktemp 命令的参数")]),s._v(" "),t("p",[t("code",[s._v("-d")]),s._v(" 参数可以创建一个临时目录。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ mktemp -d\n/tmp/tmp.Wcau5UjmN6\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[t("code",[s._v("-p")]),s._v(" 参数可以指定临时文件所在的目录。默认是使用 "),t("code",[s._v("$TMPDIR")]),s._v(" 环境变量指定的目录，如果这个变量没设置，那么使用 "),t("code",[s._v("/tmp")]),s._v(" 目录。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ mktemp -p /home/ruanyf/\n/home/ruanyf/tmp.FOKEtvs2H3\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[t("code",[s._v("-t")]),s._v(" 参数可以指定临时文件的文件名模板，模板的末尾必须至少包含三个连续的 "),t("code",[s._v("X")]),s._v(" 字符，表示随机字符，建议至少使用六个 "),t("code",[s._v("X")]),s._v("。默认的文件名模板是 "),t("code",[s._v("tmp.")]),s._v(" 后接十个随机字符。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ mktemp -t mytemp.XXXXXXX\n/tmp/mytemp.yZ1HgZV\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"trap-命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#trap-命令"}},[s._v("#")]),s._v(" trap 命令")]),s._v(" "),t("p",[t("code",[s._v("trap")]),s._v(" 命令用来在 Bash 脚本中响应系统信号。")]),s._v(" "),t("p",[s._v("最常见的系统信号就是 SIGINT(中断)，即按 "),t("code",[s._v("Ctrl + C")]),s._v(" 所产生的信号。"),t("code",[s._v("trap")]),s._v(" 命令的 "),t("code",[s._v("-l")]),s._v(" 参数，可以列出所有的系统信号。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("trap")]),s._v(" -l\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGHUP  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGINT  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGQUIT  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGILL  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGTRAP\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGABRT  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGBUS  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGFPE  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGKILL "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGUSR1\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGSEGV "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGUSR2 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGPIPE "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGALRM "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGTERM\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGSTKFLT "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGCHLD "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGCONT "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGSTOP "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGTSTP\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("21")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGTTIN "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGTTOU "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("23")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGURG "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("24")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGXCPU "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("25")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGXFSZ\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("26")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGVTALRM "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("27")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGPROF "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("28")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGWINCH "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("29")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGIO "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGPWR\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("31")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGSYS "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("34")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGRTMIN "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("35")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGRTMIN+1 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("36")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGRTMIN+2 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("37")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGRTMIN+3\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("38")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGRTMIN+4 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("39")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGRTMIN+5 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("40")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGRTMIN+6 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("41")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGRTMIN+7 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("42")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGRTMIN+8\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("43")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGRTMIN+9 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("44")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGRTMIN+10 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("45")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGRTMIN+11 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("46")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGRTMIN+12 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("47")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGRTMIN+13\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("48")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGRTMIN+14 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("49")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGRTMIN+15 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("50")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGRTMAX-14 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("51")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGRTMAX-13 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("52")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGRTMAX-12\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("53")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGRTMAX-11 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("54")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGRTMAX-10 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("55")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGRTMAX-9 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("56")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGRTMAX-8 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("57")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGRTMAX-7\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("58")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGRTMAX-6 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("59")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGRTMAX-5 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("60")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGRTMAX-4 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("61")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGRTMAX-3 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("62")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGRTMAX-2\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("63")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGRTMAX-1 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SIGRTMAX\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("p",[t("code",[s._v("trap")]),s._v(" 的命令格式如下。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("trap")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("动作"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("信号1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("信号2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("上面代码中，“动作”是一个 Bash 命令，“信号”常用的有以下几个。")]),s._v(" "),t("blockquote",[t("ul",[t("li",[s._v("HUP: 编号 1，脚本与所在的终端脱离联系。")]),s._v(" "),t("li",[s._v("INT: 编号 2，用户按下 Ctrl + C，意图让脚本中止运行。")]),s._v(" "),t("li",[s._v("QUIT: 编号 3，用户按下 Ctrl + 斜杠，意图退出脚本。")]),s._v(" "),t("li",[s._v("KILL: 编号 9，该信号用于杀死进程。")]),s._v(" "),t("li",[s._v("TERM: 编号 15，这是 "),t("code",[s._v("kill")]),s._v(" 命令发出的默认信号。")]),s._v(" "),t("li",[s._v("EXIT: 编号 0，这不是系统信号，而是 Bash 脚本特有的信号，不管什么情况，只要退出脚本就会产生。")])])]),s._v(" "),t("p",[t("code",[s._v("trap")]),s._v(" 命令响应 "),t("code",[s._v("EXIT")]),s._v(" 信号的写法如下。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("trap")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'rm -f \"$TMPFILE\"'")]),s._v(" EXIT\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("上面命令中，脚本遇到 "),t("code",[s._v("EXIT")]),s._v(" 信号时，就会执行 "),t("code",[s._v('rm -f "$TMPFILE"')]),s._v("。")]),s._v(" "),t("p",[s._v("trap 命令的常见使用场景，就是在 Bash 脚本中指定退出时执行的清理命令。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("trap")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'rm -f \"$TMPFILE\"'")]),s._v(" EXIT\n\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("TMPFILE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("mktemp"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" /etc "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$TMPFILE")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -qi "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"kernel"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$TMPFILE")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'find'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[s._v("上面代码中，不管是脚本正常执行结束，还是用户按 "),t("code",[s._v("Ctrl + C")]),s._v(" 终止，都会产生 "),t("code",[s._v("EXIT")]),s._v(" 信号，从而触发删除临时文件。")]),s._v(" "),t("p",[s._v("注意，"),t("code",[s._v("trap")]),s._v(" 命令必须放在脚本的开头。否则，它上方的任何命令导致脚本退出，都不会被它捕获。")]),s._v(" "),t("p",[s._v("如果 "),t("code",[s._v("trap")]),s._v(" 需要触发多条命令，可以封装一个 Bash 函数。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("egress")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  command1\n  command2\n  command3\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("trap")]),s._v(" egress EXIT\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("h2",{attrs:{id:"参考链接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考链接"}},[s._v("#")]),s._v(" 参考链接")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://www.putorius.net/working-with-temporary-files.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Working with Temporary Files and Directories in Shell Scripts"),t("OutboundLink")],1),s._v(", Steven Vona")]),s._v(" "),t("li",[t("a",{attrs:{href:"https://www.putorius.net/using-trap-to-exit-bash-scripts-cleanly.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Using Trap to Exit Bash Scripts Cleanly"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://mywiki.wooledge.org/SignalTrap",target:"_blank",rel:"noopener noreferrer"}},[s._v("Sending and Trapping Signals"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=e.exports}}]);