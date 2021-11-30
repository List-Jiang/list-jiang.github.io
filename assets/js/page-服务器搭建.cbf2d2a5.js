(window.webpackJsonp=window.webpackJsonp||[]).push([[463],{1733:function(s,t,n){"use strict";n.r(t);var a=n(1),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("在远程仓库一节中，我们讲了远程仓库实际上和本地仓库没啥不同，纯粹为了 7x24 小时开机并交换大家的修改。")]),s._v(" "),n("p",[s._v("GitHub 就是一个免费托管代码的远程仓库。但是对于某些视源代码如生命的商业公司来说，不想将源代码提交给任何第三方，这种情况下，就需要搭建 Git 服务器。")]),s._v(" "),n("p",[s._v("搭建 Git 服务器需要准备一台运行 Linux 的机器，强烈推荐用 Ubuntu 或 Debian，这样，通过几条简单的 "),n("code",[s._v("apt")]),s._v(" 命令就可以完成安装。")]),s._v(" "),n("ul",[n("li",[n("p",[n("strong",[s._v("Ubuntu")]),s._v(" 或 "),n("strong",[s._v("Debian")])]),s._v(" "),n("p",[s._v("假设您已经有 sudo 权限的用户账号，下面，正式开始安装。")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("第一步，安装 git:")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])])]),s._v(" "),n("li",[n("p",[s._v("第二步，创建一个 git 用户，用来运行 git 服务:")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" adduser "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])])]),s._v(" "),n("li",[n("p",[s._v("第三步，创建证书登录:")]),s._v(" "),n("p",[s._v("收集所有需要登录的用户的公钥，就是他们自己的 "),n("code",[s._v("id_rsa.pub")]),s._v(" 文件，把所有公钥导入到 "),n("code",[s._v("/home/git/.ssh/authorized_keys")]),s._v(" 文件里，一行一个。")])]),s._v(" "),n("li",[n("p",[s._v("第四步，初始化 Git 仓库:")]),s._v(" "),n("p",[s._v("先选定一个目录作为 Git 仓库，假定是 "),n("code",[s._v("/srv/sample.git")]),s._v("，在 "),n("code",[s._v("/srv")]),s._v(" 目录下输入命令:")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" init --bare sample.git\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("Git 就会创建一个裸仓库，裸仓库没有工作区，因为服务器上的 Git 仓库纯粹是为了共享，所以不让用户直接登录到服务器上去改工作区，并且服务器上的 Git 仓库通常都以 "),n("code",[s._v(".git")]),s._v(" 结尾。然后，把 owner 改为 git:")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" -R git:git sample.git\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])])]),s._v(" "),n("li",[n("p",[s._v("第五步，禁用 shell 登录:")]),s._v(" "),n("p",[s._v("出于安全考虑，第二步创建的 git 用户不允许登录 shell，这可以通过编辑 "),n("code",[s._v("/etc/passwd")]),s._v(" 文件完成。找到类似下面的一行:")]),s._v(" "),n("div",{staticClass:"language-md line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-md"}},[n("code",[s._v("git:x:1001:1001:,,,:/home/git:/bin/bash\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("改为:")]),s._v(" "),n("div",{staticClass:"language-md line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-md"}},[n("code",[s._v("git:x:1001:1001:,,,:/home/git:/usr/bin/git-shell\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("这样，git 用户可以正常通过 ssh 使用 git，但无法登录 shell，因为我们为 git 用户指定的 git-shell 每次一登录就自动退出。")])]),s._v(" "),n("li",[n("p",[s._v("第六步，克隆远程仓库:")]),s._v(" "),n("p",[s._v("现在，可以通过 "),n("code",[s._v("git clone")]),s._v(" 命令克隆远程仓库了，在各自的电脑上运行:")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone git@server:/srv/sample.git\nCloning into "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'sample'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nwarning: You appear to have cloned an empty repository.\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("剩下的推送就简单了。")])])])]),s._v(" "),n("li",[n("p",[n("strong",[s._v("Centos")])]),s._v(" "),n("ol",[n("li",[n("p",[s._v("安装 Git")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("yum "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" curl-devel expat-devel gettext-devel openssl-devel zlib-devel perl-devel\nyum "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("接下来创建一个 git 用户组和用户，用来运行 git 服务:")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("groupadd")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("useradd")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" -g "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])])]),s._v(" "),n("li",[n("p",[s._v("创建证书登录")]),s._v(" "),n("p",[s._v("收集所有需要登录的用户的公钥，公钥位于 "),n("code",[s._v("id_rsa.pub")]),s._v(" 文件中，将公钥导入到 "),n("code",[s._v("/home/git/.ssh/authorized_keys")]),s._v(" 文件里，一行一个。")]),s._v(" "),n("p",[s._v("如果没有该文件创建它:")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /home/git/\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" .ssh\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("755")]),s._v(" .ssh\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("touch")]),s._v(" .ssh/authorized_keys\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("644")]),s._v(" .ssh/authorized_keys\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])])]),s._v(" "),n("li",[n("p",[s._v("初始化 Git 仓库")]),s._v(" "),n("p",[s._v("首先我们选定一个目录作为 Git 仓库，假定是 "),n("code",[s._v("/home/gitrepo/test.git")]),s._v("，在 "),n("code",[s._v("/home/gitrepo")]),s._v(" 目录下输入命令:")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("$ "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /home\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" gitrepo\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" git:git gitrepo/\n$ "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" gitrepo\n\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" init --bare test.git\nInitialized empty Git repository "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" /home/gitrepo/runoob.git/\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("以上命令 Git 创建一个空仓库，服务器上的 Git 仓库通常都以 "),n("code",[s._v(".git")]),s._v(" 结尾。然后，把仓库所属用户改为 git:")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" -R git:git runoob.git\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])])]),s._v(" "),n("li",[n("p",[s._v("克隆仓库")])])]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone git@192.168.45.4:/home/gitrepo/runoob.git\nCloning into "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'runoob'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nwarning: You appear to have cloned an empty repository.\nChecking connectivity"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". done.\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("192.168.45.4 为 Git 所在服务器 ip ，您需要将其修改为您自己的 Git 服务 ip。")]),s._v(" "),n("p",[s._v("这样我们的 Git 服务器安装就完成。")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);