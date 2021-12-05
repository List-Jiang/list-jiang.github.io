(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{1305:function(t,e,n){"use strict";n.r(e);var a=n(1),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[t._v("注册小程序。接受一个 Object 参数，其指定小程序的生命周期回调等。 "),n("Badge",{attrs:{text:"重要",type:"error"}})],1),t._v(" "),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),n("p",[t._v("App() 必须在 app.js 中调用，必须调用且只能调用一次。不然会出现无法预期的后果。")])]),t._v(" "),n("h2",{attrs:{id:"参数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[t._v("#")]),t._v(" 参数")]),t._v(" "),n("h3",{attrs:{id:"object-object"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#object-object"}},[t._v("#")]),t._v(" Object object")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("属性")]),t._v(" "),n("th",[t._v("类型")]),t._v(" "),n("th",[t._v("默认值")]),t._v(" "),n("th",[t._v("必填")]),t._v(" "),n("th",[t._v("说明")]),t._v(" "),n("th",[t._v("最低版本")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("onLaunch")]),t._v(" "),n("td",[t._v("function")]),t._v(" "),n("td"),t._v(" "),n("td",[t._v("否")]),t._v(" "),n("td",[t._v("生命周期回调——监听小程序初始化。")]),t._v(" "),n("td")]),t._v(" "),n("tr",[n("td",[t._v("onShow")]),t._v(" "),n("td",[t._v("function")]),t._v(" "),n("td"),t._v(" "),n("td",[t._v("否")]),t._v(" "),n("td",[t._v("生命周期回调——监听小程序启动或切前台。")]),t._v(" "),n("td")]),t._v(" "),n("tr",[n("td",[t._v("onHide")]),t._v(" "),n("td",[t._v("function")]),t._v(" "),n("td"),t._v(" "),n("td",[t._v("否")]),t._v(" "),n("td",[t._v("生命周期回调——监听小程序切后台。")]),t._v(" "),n("td")]),t._v(" "),n("tr",[n("td",[t._v("onError")]),t._v(" "),n("td",[t._v("function")]),t._v(" "),n("td"),t._v(" "),n("td",[t._v("否")]),t._v(" "),n("td",[t._v("错误监听函数。")]),t._v(" "),n("td")]),t._v(" "),n("tr",[n("td",[t._v("onPageNotFound")]),t._v(" "),n("td",[t._v("function")]),t._v(" "),n("td"),t._v(" "),n("td",[t._v("否")]),t._v(" "),n("td",[t._v("页面不存在监听函数。")]),t._v(" "),n("td",[t._v("1.9.90")])]),t._v(" "),n("tr",[n("td",[t._v("onUnhandledRejection")]),t._v(" "),n("td",[t._v("function")]),t._v(" "),n("td"),t._v(" "),n("td",[t._v("否")]),t._v(" "),n("td",[t._v("未处理的 Promise 拒绝事件监听函数。")]),t._v(" "),n("td",[t._v("2.10.0")])]),t._v(" "),n("tr",[n("td",[t._v("onThemeChange")]),t._v(" "),n("td",[t._v("function")]),t._v(" "),n("td"),t._v(" "),n("td",[t._v("否")]),t._v(" "),n("td",[t._v("监听系统主题变化")]),t._v(" "),n("td",[t._v("2.11.0")])])])]),t._v(" "),n("p",[t._v("| 其他 | any | | 否 | 开发者可以添加任意的函数或数据变量到 "),n("code",[t._v("Object")]),t._v(" 参数中，用 "),n("code",[t._v("this")]),t._v(" 可以访问 |")]),t._v(" "),n("p",[t._v("关于小程序前后台的定义和小程序的运行机制，请参考 "),n("RouterLink",{attrs:{to:"/code/mini-app/guide/service/run.html"}},[t._v("运行机制")]),t._v("。")],1),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("App")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("onLaunch")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("options")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Do something initial when launch.")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("onShow")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("options")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Do something when show.")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("onHide")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Do something when hide.")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("onError")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("msg")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("msg"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  globalData"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"I am global data"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br")])]),n("h3",{attrs:{id:"onlaunch-object-object"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#onlaunch-object-object"}},[t._v("#")]),t._v(" onLaunch(Object object)")]),t._v(" "),n("p",[t._v("小程序初始化完成时触发，全局只触发一次。参数也可以使用 "),n("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/life-cycle/wx.getLaunchOptionsSync.html",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("wx.getLaunchOptionsSync")]),n("OutboundLink")],1),t._v(" 获取。")]),t._v(" "),n("p",[t._v("参数: 与 "),n("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/life-cycle/wx.getLaunchOptionsSync.html",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("wx.getLaunchOptionsSync")]),n("OutboundLink")],1),t._v(" 一致")]),t._v(" "),n("h3",{attrs:{id:"onshow-object-object"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#onshow-object-object"}},[t._v("#")]),t._v(" onShow(Object object)")]),t._v(" "),n("p",[t._v("小程序启动，或从后台进入前台显示时触发。也可以使用 "),n("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onAppShow.html",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("wx.onAppShow")]),n("OutboundLink")],1),t._v(" 绑定监听。")]),t._v(" "),n("p",[t._v("参数: 与 "),n("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onAppShow.html",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("wx.onAppShow")]),n("OutboundLink")],1),t._v(" 一致")]),t._v(" "),n("h2",{attrs:{id:"onhide"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#onhide"}},[t._v("#")]),t._v(" onHide()")]),t._v(" "),n("p",[t._v("小程序从前台进入后台时触发。也可以使用 "),n("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onAppHide.html",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("wx.onAppHide")]),n("OutboundLink")],1),t._v(" 绑定监听。")]),t._v(" "),n("h2",{attrs:{id:"onerror-string-error"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#onerror-string-error"}},[t._v("#")]),t._v(" onError(String error)")]),t._v(" "),n("p",[t._v("小程序发生脚本错误或 API 调用报错时触发。也可以使用 "),n("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onError.html",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("wx.onError")]),n("OutboundLink")],1),t._v(" 绑定监听。")]),t._v(" "),n("p",[t._v("参数: 与 "),n("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onError.html",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("wx.onError")]),n("OutboundLink")],1),t._v(" 一致")]),t._v(" "),n("h2",{attrs:{id:"onpagenotfound-object-object"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#onpagenotfound-object-object"}},[t._v("#")]),t._v(" onPageNotFound(Object object)")]),t._v(" "),n("p",[t._v("小程序要打开的页面不存在时触发。也可以使用 "),n("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onPageNotFound.html",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("wx.onPageNotFound")]),n("OutboundLink")],1),t._v(" 绑定监听。注意事项请参考 "),n("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onPageNotFound.html",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("wx.onPageNotFound")]),n("OutboundLink")],1),t._v("。")]),t._v(" "),n("p",[t._v("参数: 与 "),n("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onPageNotFound.html",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("wx.onPageNotFound")]),n("OutboundLink")],1),t._v(" 一致")]),t._v(" "),n("p",[t._v("示例代码:")]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("App")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("onPageNotFound")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    wx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("redirectTo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      url"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pages/..."')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果是 tabbar 页面，请使用 wx.switchTab")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br")])]),n("h2",{attrs:{id:"onunhandledrejection-object-object"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#onunhandledrejection-object-object"}},[t._v("#")]),t._v(" onUnhandledRejection(Object object)")]),t._v(" "),n("blockquote",[n("p",[t._v("基础库 2.10.0 开始支持")])]),t._v(" "),n("p",[t._v("小程序有未处理的 Promise 拒绝时触发。也可以使用 "),n("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onUnhandledRejection.html",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("wx.onUnhandledRejection")]),n("OutboundLink")],1),t._v(" 绑定监听。注意事项请参考 "),n("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onUnhandledRejection.html",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("wx.onUnhandledRejection")]),n("OutboundLink")],1),t._v("。")]),t._v(" "),n("p",[t._v("参数: 与 "),n("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onUnhandledRejection.html",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("wx.onUnhandledRejection")]),n("OutboundLink")],1),t._v(" 一致")]),t._v(" "),n("h2",{attrs:{id:"onthemechange-object-object"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#onthemechange-object-object"}},[t._v("#")]),t._v(" onThemeChange(Object object)")]),t._v(" "),n("blockquote",[n("p",[t._v("基础库 2.11.0 开始支持")])]),t._v(" "),n("p",[t._v("系统切换主题时触发。也可以使用 "),n("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onThemeChange.html",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("wx.onThemeChange")]),n("OutboundLink")],1),t._v(" 绑定监听。")]),t._v(" "),n("p",[t._v("参数: 与 "),n("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onThemeChange.html",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("wx.onThemeChange")]),n("OutboundLink")],1),t._v(" 一致")]),t._v(" "),n("h2",{attrs:{id:"appobject-getapp-object-object"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#appobject-getapp-object-object"}},[t._v("#")]),t._v(" AppObject getApp(Object object)")]),t._v(" "),n("p",[t._v("获取到小程序全局唯一的 App 实例。")]),t._v(" "),n("h3",{attrs:{id:"getapp-参数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#getapp-参数"}},[t._v("#")]),t._v(" getApp 参数")]),t._v(" "),n("p",[t._v("Object object")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("属性")]),t._v(" "),n("th",[t._v("类型")]),t._v(" "),n("th",[t._v("默认值")]),t._v(" "),n("th",[t._v("必填")]),t._v(" "),n("th",[t._v("说明")]),t._v(" "),n("th",[t._v("最低版本")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("allowDefault")]),t._v(" "),n("td",[t._v("boolean")]),t._v(" "),n("td",[t._v("false")]),t._v(" "),n("td",[t._v("否")]),t._v(" "),n("td",[t._v("在 "),n("code",[t._v("App")]),t._v(" 未定义时返回默认实现。当 "),n("code",[t._v("App")]),t._v(" 被调用时，默认实现中定义的属性会被覆盖合并到 App 中。一般用于独立分包")]),t._v(" "),n("td",[t._v("2.2.4")])])])]),t._v(" "),n("p",[t._v("示例代码:")]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// other.js")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" appInstance "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getApp")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("appInstance"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("globalData"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// I am global data")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br")])]),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),n("ul",[n("li",[t._v("不要在定义于 "),n("code",[t._v("App()")]),t._v(" 内的函数中，或调用 "),n("code",[t._v("App")]),t._v(" 前调用 "),n("code",[t._v("getApp()")]),t._v(" ，使用 "),n("code",[t._v("this")]),t._v(" 就可以拿到 app 实例。")]),t._v(" "),n("li",[t._v("通过 "),n("code",[t._v("getApp()")]),t._v(" 获取实例之后，不要私自调用生命周期函数。")])])])])}),[],!1,null,null,null);e.default=s.exports}}]);