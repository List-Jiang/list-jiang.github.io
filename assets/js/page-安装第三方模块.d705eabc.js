(window.webpackJsonp=window.webpackJsonp||[]).push([[362],{1227:function(s,a,n){"use strict";n.r(a);var t=n(1),r=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("在 Python 中，安装第三方模块，是通过包管理工具 pip 完成的。")]),s._v(" "),n("p",[s._v("如果您正在使用 Mac 或 Linux，安装 pip 本身这个步骤就可以跳过了。")]),s._v(" "),n("p",[s._v("如果您正在使用 Windows，请参考 "),n("RouterLink",{attrs:{to:"/code/language/python/intro/install.html"}},[s._v("安装 Python")]),s._v(" 一节的内容，确保安装时勾选了 "),n("code",[s._v("pip")]),s._v(" 和 "),n("code",[s._v("Add python.exe to Path")]),s._v("。")],1),s._v(" "),n("p",[s._v("在命令提示符窗口下尝试运行 pip，如果 Windows 提示未找到命令，可以重新运行安装程序添加 pip。")]),s._v(" "),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),n("p",[s._v("Mac 或 Linux 上有可能并存 Python 3.x 和 Python 2.x，因此对应的 pip 命令是 pip3。")])]),s._v(" "),n("p",[s._v("例如，我们要安装一个第三方库——Python Imaging Library，这是 Python 下非常强大的处理图像的工具库。不过，PIL 目前只支持到 Python 2.7，并且有年头没有更新了，因此，基于 PIL 的 Pillow 项目开发非常活跃，并且支持最新的 Python 3。")]),s._v(" "),n("p",[s._v("一般来说，第三方库都会在 Python 官方的 <pypi.python.org> 网站注册，要安装一个第三方库，必须先知道该库的名称，可以在官网或者 pypi 上搜索，比如 Pillow 的名称叫 "),n("a",{attrs:{href:"https://pypi.python.org/pypi/Pillow/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Pillow"),n("OutboundLink")],1),s._v("，因此，安装 Pillow 的命令就是:")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("pip "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" Pillow\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("耐心等待下载并安装后，就可以使用 Pillow 了。")]),s._v(" "),n("h2",{attrs:{id:"安装常用模块"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装常用模块"}},[s._v("#")]),s._v(" 安装常用模块")]),s._v(" "),n("p",[s._v("在使用 Python 时，我们经常需要用到很多第三方库，例如，上面提到的 Pillow，以及 MySQL 驱动程序，Web 框架 Flask，科学计算 Numpy 等。用 pip 一个一个安装费时费力，还需要考虑兼容性。我们推荐直接使用 "),n("a",{attrs:{href:"https://www.anaconda.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Anaconda"),n("OutboundLink")],1),s._v("，这是一个基于 Python 的数据处理和科学计算平台，它已经内置了许多非常有用的第三方库，我们装上 Anaconda，就相当于把数十个第三方模块自动安装好了，非常简单易用。")]),s._v(" "),n("p",[s._v("可以从 "),n("a",{attrs:{href:"https://www.anaconda.com/download/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Anaconda 官网"),n("OutboundLink")],1),s._v(" 下载 GUI 安装包，安装包有 500~600M，所以需要耐心等待下载。下载后直接安装，Anaconda 会把系统 Path 中的 python 指向自己自带的 Python，并且，Anaconda 安装的第三方模块会安装在 Anaconda 自己的路径下，不影响系统已安装的 Python 目录。")]),s._v(" "),n("p",[s._v("安装好 Anaconda 后，重新打开命令行窗口，输入 python，可以看到 Anaconda 的信息:")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('┌────────────────────────────────────────────────────────┐\n│Command Prompt - python                           - □ x │\n├────────────────────────────────────────────────────────┤\n│Microsoft Windows [Version 10.0.0]                      │\n│(c) 2015 Microsoft Corporation. All rights reserved.    │\n│                                                        │\n│C:\\> python                                             │\n│Python 3.9.2 |Anaconda, Inc.| ... on win32              │\n│Type "help", ... for more information.                  │\n│>>> import numpy                                        │\n│>>> _                                                   │\n│                                                        │\n│                                                        │\n│                                                        │\n└────────────────────────────────────────────────────────┘\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])]),n("p",[s._v("可以尝试直接 "),n("code",[s._v("import numpy")]),s._v(" 等已安装的第三方模块。")]),s._v(" "),n("h2",{attrs:{id:"模块搜索路径"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#模块搜索路径"}},[s._v("#")]),s._v(" 模块搜索路径")]),s._v(" "),n("p",[s._v("当我们试图加载一个模块时，Python 会在指定的路径下搜索对应的.py 文件，如果找不到，就会报错:")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("import")]),s._v(" mymodule\nTraceback "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("most recent call last"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":\n  File "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<stdin>"')]),s._v(", line "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(", "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("module"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nImportError: No module named mymodule\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("默认情况下，Python 解释器会搜索当前目录、所有已安装的内置模块和第三方模块，搜索路径存放在 sys 模块的 path 变量中:")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("import")]),s._v(" sys\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" sys.path\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v(", "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/Library/Frameworks/Python.framework/Versions/3.9/lib/python36.zip'")]),s._v(", "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/Library/Frameworks/Python.framework/Versions/3.9/lib/python3.9'")]),s._v(", "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("., "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/Library/Frameworks/Python.framework/Versions/3.9/lib/python3.9/site-packages'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("如果我们要添加自己的搜索目录，有两种方法:")]),s._v(" "),n("p",[s._v("一是直接修改 "),n("code",[s._v("sys.path")]),s._v("，添加要搜索的目录:")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("import")]),s._v(" sys\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" sys.path.append"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/Users/michael/my_py_scripts'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("这种方法是在运行时修改，运行结束后失效。")]),s._v(" "),n("p",[s._v("第二种方法是设置环境变量 "),n("code",[s._v("PYTHONPATH")]),s._v("，该环境变量的内容会被自动添加到模块搜索路径中。设置方式与 "),n("RouterLink",{attrs:{to:"/code/windows/add-path.html"}},[s._v("设置 Path 环境变量")]),s._v(" 类似。注意只需要添加您自己的搜索路径，Python 自己本身的搜索路径不受影响。")],1)])}),[],!1,null,null,null);a.default=r.exports}}]);