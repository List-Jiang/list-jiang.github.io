(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{881:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("小程序开发框架提供丰富的微信原生 API，可以方便的调起微信提供的能力，如获取用户信息，本地存储，支付功能等。详细介绍请参考 "),a("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/api/",target:"_blank",rel:"noopener noreferrer"}},[t._v("API 文档"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("p",[t._v("通常，在小程序 API 有以下几种类型:")]),t._v(" "),a("h2",{attrs:{id:"事件监听-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件监听-api"}},[t._v("#")]),t._v(" 事件监听 API")]),t._v(" "),a("p",[t._v("我们约定，以 on 开头的 API 用来监听某个事件是否触发，如: "),a("code",[t._v("wx.onSocketOpen")]),t._v(", "),a("code",[t._v("wx.onCompassChange")]),t._v(" 等。")]),t._v(" "),a("p",[t._v("这类 API 接受一个回调函数作为参数，当事件触发时会调用这个回调函数，并将相关数据以参数形式传入。")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("wx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("onCompassChange")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("direction"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("h2",{attrs:{id:"同步-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#同步-api"}},[t._v("#")]),t._v(" 同步 API")]),t._v(" "),a("p",[t._v("我们约定，以 "),a("code",[t._v("Sync")]),t._v(" 结尾的 API 都是同步 API， 如 "),a("code",[t._v("wx.setStorageSync")]),t._v("，"),a("code",[t._v("wx.getSystemInfoSync")]),t._v(" 等。此外，也有一些其他的同步 API，如 "),a("code",[t._v("wx.createWorker")]),t._v(", "),a("code",[t._v("wx.getBackgroundAudioManager")]),t._v(" 等，详情参见 API 文档中的说明。")]),t._v(" "),a("p",[t._v("同步 API 的执行结果可以通过函数返回值直接获取，如果执行出错会抛出异常。")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  wx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setStorageSync")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"key"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"value"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("h2",{attrs:{id:"异步-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#异步-api"}},[t._v("#")]),t._v(" 异步 API")]),t._v(" "),a("p",[t._v("大多数 API 都是异步 API，如 "),a("code",[t._v("wx.request")]),t._v("，"),a("code",[t._v("wx.login")]),t._v(" 等。这类 API 接口通常都接受一个 "),a("code",[t._v("Object")]),t._v(" 类型的参数，这个参数都支持按需指定以下字段来接收接口调用结果:")]),t._v(" "),a("h3",{attrs:{id:"object-参数说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#object-参数说明"}},[t._v("#")]),t._v(" Object 参数说明")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("参数名")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("必填")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("success")]),t._v(" "),a("td",[t._v("function")]),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v("接口调用成功的回调函数")])]),t._v(" "),a("tr",[a("td",[t._v("fail")]),t._v(" "),a("td",[t._v("function")]),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v("接口调用失败的回调函数")])]),t._v(" "),a("tr",[a("td",[t._v("complete")]),t._v(" "),a("td",[t._v("function")]),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v("接口调用结束的回调函数(调用成功、失败都会执行)")])]),t._v(" "),a("tr",[a("td",[t._v("其他")]),t._v(" "),a("td",[t._v("Any")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("接口定义的其他参数")])])])]),t._v(" "),a("h3",{attrs:{id:"回调函数的参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#回调函数的参数"}},[t._v("#")]),t._v(" 回调函数的参数")]),t._v(" "),a("p",[a("code",[t._v("success")]),t._v(", "),a("code",[t._v("fail")]),t._v(", "),a("code",[t._v("complete")]),t._v(" 函数调用时会传入一个 "),a("code",[t._v("Object")]),t._v(" 类型参数，包含以下字段:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("属性")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("errMsg")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("错误信息，如果调用成功返回 "),a("code",[t._v("${apiName}:ok")])])]),t._v(" "),a("tr",[a("td",[t._v("errCode")]),t._v(" "),a("td",[t._v("number")]),t._v(" "),a("td",[t._v("错误码，仅部分 API 支持，具体含义请参考对应 API 文档，成功时为 0。")])]),t._v(" "),a("tr",[a("td",[t._v("其他")]),t._v(" "),a("td",[t._v("Any")]),t._v(" "),a("td",[t._v("接口返回的其他数据")])])])]),t._v(" "),a("p",[t._v("异步 API 的执行结果需要通过 "),a("code",[t._v("Object")]),t._v(" 类型的参数中传入的对应回调函数获取。部分异步 API 也会有返回值，可以用来实现更丰富的功能，如 "),a("code",[t._v("wx.request")]),t._v(", "),a("code",[t._v("wx.connectSocke")]),t._v("t` 等。")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("wx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("login")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("success")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("code"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("异步函数会在异步动作进行完之后，触发对应设置好的回调函数，所以此时的函数执行已经脱离了正常 js 的执行上下文。")]),t._v(" "),a("p",[t._v("如果对上面的话不理解，请务必查阅"),a("strong",[t._v("什么是同步/异步函数")]),t._v("。")])]),t._v(" "),a("h2",{attrs:{id:"常见-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见-api"}},[t._v("#")]),t._v(" 常见 API")]),t._v(" "),a("ul",[a("li",[a("p",[a("RouterLink",{attrs:{to:"/code/mini-app/guide/service/api/route.html"}},[t._v("路由")])],1)]),t._v(" "),a("li",[a("p",[a("RouterLink",{attrs:{to:"/code/mini-app/guide/service/api/storage.html"}},[t._v("数据缓存")])],1)]),t._v(" "),a("li",[a("p",[a("RouterLink",{attrs:{to:"/code/mini-app/guide/service/api/interact.html"}},[t._v("交互")])],1)]),t._v(" "),a("li",[a("p",[a("RouterLink",{attrs:{to:"/code/mini-app/guide/service/api/network.html"}},[t._v("网络")])],1)]),t._v(" "),a("li",[a("p",[a("RouterLink",{attrs:{to:"/code/mini-app/guide/service/api/system.html"}},[t._v("系统信息")])],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);