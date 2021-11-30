(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{1066:function(t,v,s){"use strict";s.r(v);var a=s(1),_=Object(a.a)({},(function(){var t=this,v=t.$createElement,s=t._self._c||v;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("GitHub Pages 是静态站点托管服务，可直接从 GitHub 上的存储库中获取 HTML，CSS 和 JavaScript 文件，还可以选择在构建过程中运行这些文件并发布网站。")]),t._v(" "),s("p",[t._v("您可以将站点托管在 GitHub 的 "),s("code",[t._v("github.io")]),t._v(" 域名或您自己的自定义域名上。")]),t._v(" "),s("h2",{attrs:{id:"简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),s("p",[t._v("GitHub Pages 站点共有三种类型: 项目，用户和组织。")]),t._v(" "),s("p",[t._v("项目站点连接到 GitHub 上托管的特定项目，而用户和组织站点已连接到特定的 GitHub 帐户。")]),t._v(" "),s("ul",[s("li",[t._v("要发布用户站点，您必须创建一个名为的用户帐户拥有的存储库 "),s("code",[t._v("<username>.github.io")]),t._v("。")]),t._v(" "),s("li",[t._v("要发布组织站点，您必须创建一个名为的组织所拥有的存储库 "),s("code",[t._v("<organization>.github.io")]),t._v("。")])]),t._v(" "),s("p",[t._v("除非您使用自定义域名，否则用户站点和组织站点均位于 "),s("code",[t._v("http(s)://<username>.github.io")]),t._v(" 或 "),s("code",[t._v("http(s)://<organization>.github.io")]),t._v("。")]),t._v(" "),s("p",[t._v("项目站点的源文件与其项目存储在同一存储库中。除非您使用自定义域，否则项目站点可在 "),s("code",[t._v("http(s)://<username>.github.io/<repository>")]),t._v(" 或 "),s("code",[t._v("http(s)://<organization>.github.io/<repository>")]),t._v(" 访问。")]),t._v(" "),s("p",[t._v("虽然您只能在 GitHub 上为每个帐户创建一个用户或组织站点。但无论是组织还是用户帐户拥有的项目站点都是无限的。")]),t._v(" "),s("h2",{attrs:{id:"发布源文件到-github-pages"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#发布源文件到-github-pages"}},[t._v("#")]),t._v(" 发布源文件到 GitHub Pages")]),t._v(" "),s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"custom-block-title"},[t._v("警告")]),t._v(" "),s("p",[t._v("GitHub Pages 站点 默认在互联网上公开，即使站点的仓库是私有的。")])]),t._v(" "),s("p",[t._v("如果您的存储库中存在默认发布源，则 GitHub Pages 将自动从该源发布网站。用户和组织站点的默认发布源是存储库的默认分支的根目录。项目站点的默认发布源是 gh-pages 分支的根目录。")]),t._v(" "),s("p",[t._v("您需要跳转到 Settings (设置) 选项卡，下来找到 GitHub Pages 的配置部分。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("您只能在根目录 ("),s("code",[t._v("/")]),t._v(") 和 文档目录 ("),s("code",[t._v("/docs")]),t._v(") 之间进行选择，而不能将仓库内的任意文件夹作为发布源。")])]),t._v(" "),s("h3",{attrs:{id:"静态站点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#静态站点"}},[t._v("#")]),t._v(" 静态站点")]),t._v(" "),s("p",[t._v("GitHub Pages 发布您推送到存储库的所有静态文件，这意味它不支持服务器端语言，例如 PHP，Ruby 或 Python。也就是您只能通过 GitHub Pages 发布 “无后端” 的纯静态站点。")]),t._v(" "),s("h3",{attrs:{id:"限制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#限制"}},[t._v("#")]),t._v(" 限制")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("GitHub Pages 网站不得超过 1 GB。")])]),t._v(" "),s("li",[s("p",[t._v("GitHub Pages 站点的带宽限制为每月 100GB。")])]),t._v(" "),s("li",[s("p",[t._v("GitHub Pages 站点限制为每小时最多构建 10 次。")])])]),t._v(" "),s("h3",{attrs:{id:"子模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#子模块"}},[t._v("#")]),t._v(" 子模块")]),t._v(" "),s("p",[t._v("如果 GitHub Pages 站点的仓库包含子模块，则在构建站点时会自动拉取其内容。")]),t._v(" "),s("p",[t._v("只能使用指向公共仓库的子模块，因为 GitHub Pages 服务器无法访问私有仓库。")]),t._v(" "),s("p",[t._v("对子模块 (包括嵌套子模块) 使用 "),s("code",[t._v("https://")]),t._v(" 只读 URL。 您可以在 .gitmodules 文件中进行此更改。")]),t._v(" "),s("h2",{attrs:{id:"取消发布"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#取消发布"}},[t._v("#")]),t._v(" 取消发布")]),t._v(" "),s("h3",{attrs:{id:"取消发布项目站点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#取消发布项目站点"}},[t._v("#")]),t._v(" 取消发布项目站点")]),t._v(" "),s("ol",[s("li",[t._v("在 GitHub 上，导航到仓库的主页面。")]),t._v(" "),s("li",[t._v("如果仓库中存在 gh-pages 分支，请删除 gh-pages 分支。")]),t._v(" "),s("li",[t._v("在仓库名称下，单击 Settings (设置) 。")]),t._v(" "),s("li",[t._v("在“ GitHub Pages”下，使用 Source (源) 下拉菜单并选择 None (无) 。")])]),t._v(" "),s("h3",{attrs:{id:"取消发布用户或组织站点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#取消发布用户或组织站点"}},[t._v("#")]),t._v(" 取消发布用户或组织站点")]),t._v(" "),s("ol",[s("li",[t._v("在 GitHub 上，导航到仓库的主页面。")]),t._v(" "),s("li",[t._v("删除用作发布源的分支，或删除整个仓库。")])]),t._v(" "),s("h2",{attrs:{id:"自定义域名"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自定义域名"}},[t._v("#")]),t._v(" 自定义域名")]),t._v(" "),s("p",[t._v("您可以在对应仓库的 Settings (设置) 选项卡设置自定义域名，同时您需要将自定义域名的 CNAME 记录指向 "),s("code",[t._v("<用户名>.github.io")]),t._v("。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("自定义域名的控制是由发布源文件夹下的 CNAME 文件控制的，您可以直接创建这个文件写入链接。")]),t._v(" "),s("p",[t._v("同时，GitHub Pages 要求这个文件一直存在，否则自定义域名会失效。")])])])}),[],!1,null,null,null);v.default=_.exports}}]);