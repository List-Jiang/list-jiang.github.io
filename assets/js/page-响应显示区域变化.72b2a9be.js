(window.webpackJsonp=window.webpackJsonp||[]).push([[220],{902:function(s,t,a){"use strict";a.r(t);var n=a(1),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"显示区域尺寸"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#显示区域尺寸"}},[s._v("#")]),s._v(" 显示区域尺寸")]),s._v(" "),a("p",[s._v("显示区域指小程序界面中可以自由布局展示的区域。在默认情况下，小程序显示区域的尺寸自页面初始化起就不会发生变化。但以下两种方式都可以改变这一默认行为。")]),s._v(" "),a("h3",{attrs:{id:"在手机上启用屏幕旋转支持"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在手机上启用屏幕旋转支持"}},[s._v("#")]),s._v(" 在手机上启用屏幕旋转支持")]),s._v(" "),a("p",[s._v("从小程序基础库版本 2.4.0 开始，小程序在手机上支持屏幕旋转。使小程序中的页面支持屏幕旋转的方法是: 在 app.json 的 window 段中设置 "),a("code",[s._v('"pageOrientation": "auto"')]),s._v(" ，或在页面 json 文件中配置 "),a("code",[s._v('"pageOrientation": "auto"')]),s._v("。")]),s._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[s._v("代码示例")]),s._v(" "),a("p",[s._v("以下是在单个页面 json 文件中启用屏幕旋转的示例。")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"pageOrientation"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"auto"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("如果页面添加了上述声明，则在屏幕旋转时，这个页面将随之旋转，显示区域尺寸也会随着屏幕旋转而变化。")])]),s._v(" "),a("p",[s._v("从小程序基础库版本 2.5.0 开始， "),a("code",[s._v("pageOrientation")]),s._v(" 还可以被设置为 "),a("code",[s._v("landscape")]),s._v(" ，表示固定为横屏显示。")]),s._v(" "),a("h3",{attrs:{id:"在-ipad-上启用屏幕旋转支持"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在-ipad-上启用屏幕旋转支持"}},[s._v("#")]),s._v(" 在 iPad 上启用屏幕旋转支持")]),s._v(" "),a("p",[s._v("从小程序基础库版本 2.3.0 开始，在 iPad 上运行的小程序可以支持屏幕旋转。使小程序支持 iPad 屏幕旋转的方法是: 在 app.json 中添加 "),a("code",[s._v('"resizable": true')]),s._v(" 。")]),s._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[s._v("代码示例")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"resizable"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("如果小程序添加了上述声明，则在屏幕旋转时，小程序将随之旋转，显示区域尺寸也会随着屏幕旋转而变化。")])]),s._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),a("p",[s._v("在 iPad 上不能单独配置某个页面是否支持屏幕旋转。")])]),s._v(" "),a("h2",{attrs:{id:"media-query"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#media-query"}},[s._v("#")]),s._v(" Media Query")]),s._v(" "),a("p",[s._v("有时，对于不同尺寸的显示区域，页面的布局会有所差异。此时可以使用 media query 来解决大多数问题。")]),s._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[s._v("代码示例")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".my-class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 40px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[s._v("@media")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("min-width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 480px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*仅在 480px 或更宽的屏幕上生效的样式规则*/")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".my-class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 200px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])])]),s._v(" "),a("p",[s._v("在 WXML 中，可以使用 "),a("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/component/match-media.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("match-media"),a("OutboundLink")],1),s._v(" 组件来根据 media query 匹配状态展示、隐藏节点。")]),s._v(" "),a("p",[s._v("此外，可以在页面或者自定义组件 JS 中使用 "),a("code",[s._v("this.createMediaQueryObserver()")]),s._v(" 方法来创建一个 "),a("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/api/wxml/MediaQueryObserver.html",target:"_blank",rel:"noopener noreferrer"}},[a("code",[s._v("MediaQueryObserver")]),a("OutboundLink")],1),s._v(" 对象，用于监听指定的 media query 的匹配状态。")]),s._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://developers.weixin.qq.com/s/TtFaFjmb7aiy",target:"_blank",rel:"noopener noreferrer"}},[s._v("在开发者工具中预览效果"),a("OutboundLink")],1)])]),s._v(" "),a("h2",{attrs:{id:"屏幕旋转事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#屏幕旋转事件"}},[s._v("#")]),s._v(" 屏幕旋转事件")]),s._v(" "),a("p",[s._v("有时，仅仅使用 media query 无法控制一些精细的布局变化。此时可以使用 js 作为辅助。")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("在 js 中读取页面的显示区域尺寸，可以使用 "),a("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/api/wxml/SelectorQuery.selectViewport.html",target:"_blank",rel:"noopener noreferrer"}},[a("code",[s._v("selectorQuery.selectViewport")]),a("OutboundLink")],1),s._v(" 。")])]),s._v(" "),a("li",[a("p",[s._v("页面尺寸发生改变的事件，可以使用页面的 "),a("code",[s._v("onResize")]),s._v(" 来监听。")])]),s._v(" "),a("li",[a("p",[s._v("对于自定义组件，可以使用 "),a("code",[s._v("resize")]),s._v(" 生命周期来监听。回调函数中将返回显示区域的尺寸信息。(从基础库版本 2.4.0 开始支持。)")])])]),s._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[s._v("代码示例")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Page")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("onResize")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("res")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("size"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("windowWidth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 新的显示区域宽度")]),s._v("\n    res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("size"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("windowHeight"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 新的显示区域高度")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Component")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  pageLifetimes"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("resize")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("res")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("size"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("windowWidth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 新的显示区域宽度")]),s._v("\n      res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("size"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("windowHeight"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 新的显示区域高度")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])])]),s._v(" "),a("p",[s._v("此外，还可以使用 "),a("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/api/ui/window/wx.onWindowResize.html",target:"_blank",rel:"noopener noreferrer"}},[a("code",[s._v("wx.onWindowResize")]),a("OutboundLink")],1),s._v(" 来监听(但这不是推荐的方式)。")])])}),[],!1,null,null,null);t.default=e.exports}}]);