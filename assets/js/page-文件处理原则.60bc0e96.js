(window.webpackJsonp=window.webpackJsonp||[]).push([[444],{1349:function(t,a,s){"use strict";s.r(a);var n=s(1),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"index-文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#index-文件"}},[t._v("#")]),t._v(" Index 文件")]),t._v(" "),s("p",[s("code",[t._v("public/index.html")]),t._v(" 文件是一个会被处理的模板。在构建过程中，资源链接会被自动注入。另外，Vue CLI 也会自动注入打包好的 JavaScript 和 CSS 文件的资源链接。它会最终成为 Vue 应用的页面。")]),t._v(" "),s("h2",{attrs:{id:"处理静态资源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#处理静态资源"}},[t._v("#")]),t._v(" 处理静态资源")]),t._v(" "),s("p",[t._v("静态资源可以通过两种方式进行处理:")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("在 JavaScript 被导入或在 template/CSS 中通过相对路径被引用。这类引用会被 webpack 处理。")])]),t._v(" "),s("li",[s("p",[t._v("放置在 "),s("code",[t._v("public")]),t._v(" 目录下或通过绝对路径被引用。这类资源将会直接被拷贝，而不会经过 webpack 的处理。")])])]),t._v(" "),s("h3",{attrs:{id:"从相对路径导入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#从相对路径导入"}},[t._v("#")]),t._v(" 从相对路径导入")]),t._v(" "),s("p",[t._v("当您在 JavaScript、CSS 或 "),s("code",[t._v("*.vue")]),t._v(" 文件中使用相对路径 (必须以 "),s("code",[t._v(".")]),t._v(" 开头) 引用一个静态资源时，该资源将会被包含进入 webpack 的依赖图中。在其编译过程中，所有诸如 "),s("code",[t._v('<img src="...">')]),t._v("、"),s("code",[t._v("background: url(...)")]),t._v(" 和 CSS "),s("code",[t._v("@import")]),t._v(" 的资源 URL "),s("strong",[t._v("都会被解析为一个模块依赖")]),t._v("。")]),t._v(" "),s("p",[t._v("例如，"),s("code",[t._v("url(./image.png)")]),t._v(" 会被翻译为 "),s("code",[t._v("require('./image.png')")]),t._v("，而:")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("./image.png"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("将会被编译到:")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("h")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"img"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" attrs"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" src"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./image.png"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h3",{attrs:{id:"url-转换规则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#url-转换规则"}},[t._v("#")]),t._v(" URL 转换规则")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("如果 URL 是一个绝对路径 (例如 "),s("code",[t._v("/images/foo.png")]),t._v(")，它将会被保留不变。")])]),t._v(" "),s("li",[s("p",[t._v("如果 URL 以 "),s("code",[t._v(".")]),t._v(" 开头，它会作为一个相对模块请求被解释且基于您的文件系统中的目录结构进行解析。")])]),t._v(" "),s("li",[s("p",[t._v("如果 URL 以 "),s("code",[t._v("~")]),t._v(" 开头，其后的任何内容都会作为一个模块请求被解析。这意味着您甚至可以引用 Node.js 模块中的资源:")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("~some-npm-package/foo.png"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])]),t._v(" "),s("li",[s("p",[t._v("如果 URL 以 "),s("code",[t._v("@")]),t._v(" 开头，它也会作为一个模块请求被解析。它的用处在于 Vue CLI 默认会设置一个指向 "),s("code",[t._v("<projectRoot>/src")]),t._v(" 的别名 "),s("code",[t._v("@")]),t._v("。"),s("strong",[t._v("(仅作用于模版中)")])])])]),t._v(" "),s("h3",{attrs:{id:"public-文件夹"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#public-文件夹"}},[t._v("#")]),t._v(" "),s("code",[t._v("public")]),t._v(" 文件夹")]),t._v(" "),s("p",[t._v("任何放置在 "),s("code",[t._v("public")]),t._v(" 文件夹的静态资源都会被简单的复制，而不经过 webpack。您需要通过绝对路径来引用它们。")]),t._v(" "),s("p",[t._v("注意我们推荐将资源作为您的模块依赖图的一部分导入，这样它们会通过 webpack 的处理并获得如下好处:")]),t._v(" "),s("ul",[s("li",[t._v("脚本和样式表会被压缩且打包在一起，从而避免额外的网络请求。")]),t._v(" "),s("li",[t._v("文件丢失会直接在编译时报错，而不是到了用户端才产生 404 错误。")]),t._v(" "),s("li",[t._v("最终生成的文件名包含了内容哈希，因此您不必担心浏览器会缓存它们的老版本。")])]),t._v(" "),s("p",[s("code",[t._v("public")]),t._v(" 目录提供的是一个"),s("strong",[t._v("应急手段")]),t._v("，当您通过绝对路径引用它时，留意应用将会部署到哪里。如果您的应用没有部署在域名的根部，那么您需要为您的 URL 配置 publicPath 前缀:")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("在 "),s("code",[t._v("public/index.html")]),t._v(" 或其它通过 "),s("code",[t._v("html-webpack-plugin")]),t._v(" 用作模板的 HTML 文件中，您需要通过 "),s("code",[t._v("<%= BASE_URL %>")]),t._v(" 设置链接前缀:")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("icon"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("<%= BASE_URL %>favicon.ico"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])]),t._v(" "),s("li",[s("p",[t._v("在模板中，您首先需要向您的组件传入基础 URL:")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    publicPath"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" process"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("BASE_URL")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("p",[t._v("然后:")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("`${publicPath}my-image.png`"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])])]),t._v(" "),s("h3",{attrs:{id:"何时使用-public-文件夹"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#何时使用-public-文件夹"}},[t._v("#")]),t._v(" 何时使用 "),s("code",[t._v("public")]),t._v(" 文件夹")]),t._v(" "),s("ul",[s("li",[t._v("您需要在构建输出中指定一个文件的名字。")]),t._v(" "),s("li",[t._v("您有上千个图片，需要动态引用它们的路径。")]),t._v(" "),s("li",[t._v("有些库可能和 webpack 不兼容，这时您除了将其用一个独立的 "),s("code",[t._v("<script>")]),t._v(" 标签引入没有别的选择。")])])])}),[],!1,null,null,null);a.default=e.exports}}]);