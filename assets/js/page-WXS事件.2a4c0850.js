(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{1326:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),n("p",[t._v("此部分在初步学习小程序的时候直接略过即可。")])]),t._v(" "),n("h2",{attrs:{id:"背景"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[t._v("#")]),t._v(" 背景")]),t._v(" "),n("p",[t._v("有频繁用户交互的效果在小程序上表现是比较卡顿的，例如页面有 2 个元素 A 和 B，用户在 A 上做 "),n("code",[t._v("touchmove")]),t._v(" 手势，要求 B 也跟随移动，"),n("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/component/movable-view.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("movable-view"),n("OutboundLink")],1),t._v(" 就是一个典型的例子。一次 "),n("code",[t._v("touchmove")]),t._v(" 事件的响应过程为:")]),t._v(" "),n("ol",[n("li",[n("p",[t._v("touchmove 事件从视图层(Webview)抛到逻辑层(App Service)")])]),t._v(" "),n("li",[n("p",[t._v("逻辑层(App Service)处理 touchmove 事件，再通过 setData 来改变 B 的位置")])])]),t._v(" "),n("p",[t._v("一次 touchmove 的响应需要经过 2 次的逻辑层和渲染层的通信以及一次渲染，通信的耗时比较大。此外 "),n("code",[t._v("setData")]),t._v(" 渲染也会阻塞其它脚本执行，导致了整个用户交互的动画过程会有延迟。")]),t._v(" "),n("h2",{attrs:{id:"实现方案"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#实现方案"}},[t._v("#")]),t._v(" 实现方案")]),t._v(" "),n("p",[t._v("本方案基本的思路是减少通信的次数，让事件在视图层(Webview)响应。小程序的框架分为视图层(Webview)和逻辑层(App Service)，这样分层的目的是管控，开发者的代码只能运行在逻辑层(App Service)，而这个思路就必须要让开发者的代码运行在视图层(Webview)，如下图所示的流程:")]),t._v(" "),n("p",[n("img",{attrs:{src:a(518),alt:"流程演示"}})]),t._v(" "),n("p",[t._v("使用 WXS 函数用来响应小程序事件，目前只能响应内置组件的事件，不支持自定义组件事件。WXS 函数的除了纯逻辑的运算，还可以通过封装好的 "),n("code",[t._v("ComponentDescriptor")]),t._v(" 实例来访问以及设置组件的 class 和样式，对于交互动画，设置 style 和 class 足够了。")]),t._v(" "),n("p",[t._v("WXS 函数的例子如下:")]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("wxsFunction")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ownerInstance")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" instance "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ownerInstance"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("selectComponent")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('".classSelector"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回组件的实例")]),t._v("\n  instance"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setStyle")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"font-size"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"14px"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 支持 rpx")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  instance"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getDataset")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  instance"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setClass")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("className"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 不往上冒泡，相当于调用了同时调用了 stopPropagation 和 preventDefault")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br")])]),n("p",[t._v("其中入参 "),n("code",[t._v("event")]),t._v(" 是小程序事件对象基础上多了 "),n("code",[t._v("event.instance")]),t._v(" 来表示触发事件的组件的 "),n("code",[t._v("ComponentDescriptor")]),t._v(" 实例。"),n("code",[t._v("ownerInstance")]),t._v(" 表示的是触发事件的组件所在的组件的 "),n("code",[t._v("ComponentDescriptor")]),t._v(" 实例，如果触发事件的组件是在页面内的，"),n("code",[t._v("ownerInstance")]),t._v(" 表示的是页面实例。")]),t._v(" "),n("h2",{attrs:{id:"componentdescriptor"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#componentdescriptor"}},[t._v("#")]),t._v(" ComponentDescriptor")]),t._v(" "),n("h3",{attrs:{id:"定义"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#定义"}},[t._v("#")]),t._v(" 定义")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("方法")]),t._v(" "),n("th",[t._v("参数")]),t._v(" "),n("th",[t._v("描述")]),t._v(" "),n("th",[t._v("最低版本")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("selectComponent")]),t._v(" "),n("td",[t._v("selector 对象")]),t._v(" "),n("td",[t._v("返回组件的 ComponentDescriptor 实例。")]),t._v(" "),n("td")]),t._v(" "),n("tr",[n("td",[t._v("selectAllComponents")]),t._v(" "),n("td",[t._v("selector 对象数组")]),t._v(" "),n("td",[t._v("返回组件的 ComponentDescriptor 实例数组。")]),t._v(" "),n("td")]),t._v(" "),n("tr",[n("td",[t._v("setStyle")]),t._v(" "),n("td",[t._v("Object/string")]),t._v(" "),n("td",[t._v("设置组件样式，支持 rpx。设置的样式优先级比组件 wxml 里面定义的样式高。不能设置最顶层页面的样式。")]),t._v(" "),n("td")]),t._v(" "),n("tr",[n("td",[t._v("addClass/removeClass/ hasClass")]),t._v(" "),n("td",[t._v("string")]),t._v(" "),n("td",[t._v("设置组件的 class。设置的 class 优先级比组件 wxml 里面定义的 class 高。不能设置最顶层页面的 class。")]),t._v(" "),n("td")]),t._v(" "),n("tr",[n("td",[t._v("getDataset")]),t._v(" "),n("td",[t._v("无")]),t._v(" "),n("td",[t._v("返回当前组件/页面的 dataset 对象")]),t._v(" "),n("td")]),t._v(" "),n("tr",[n("td",[t._v("callMethod")]),t._v(" "),n("td",[t._v("(funcName:string, args:object)")]),t._v(" "),n("td",[t._v("调用当前组件/页面在逻辑层(App Service)定义的函数。funcName 表示函数名称，args 表示函数的参数。")]),t._v(" "),n("td")]),t._v(" "),n("tr",[n("td",[t._v("requestAnimationFrame")]),t._v(" "),n("td",[t._v("Function")]),t._v(" "),n("td",[t._v("和原生 requestAnimationFrame 一样。用于设置动画。")]),t._v(" "),n("td")]),t._v(" "),n("tr",[n("td",[t._v("getState")]),t._v(" "),n("td",[t._v("无")]),t._v(" "),n("td",[t._v("返回一个 object 对象，当有局部变量需要存储起来后续使用的时候用这个方法。")]),t._v(" "),n("td")]),t._v(" "),n("tr",[n("td",[t._v("triggerEvent")]),t._v(" "),n("td",[t._v("(eventName, detail)")]),t._v(" "),n("td",[t._v("和组件的 triggerEvent 一致。")]),t._v(" "),n("td")]),t._v(" "),n("tr",[n("td",[t._v("getComputedStyle")]),t._v(" "),n("td",[t._v("string[]")]),t._v(" "),n("td",[t._v("参数与 SelectorQuery 的 computedStyle 一致。")]),t._v(" "),n("td",[t._v("2.11.2")])])])]),t._v(" "),n("h3",{attrs:{id:"使用方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用方法"}},[t._v("#")]),t._v(" 使用方法")]),t._v(" "),n("p",[t._v("WXML 定义事件:")]),t._v(" "),n("div",{staticClass:"language-xml line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-xml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("wxs")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("module")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("test"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("./test.wxs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("view")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("change:")]),t._v("prop")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{{test.propObserver}}"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("prop")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{{propValue}}"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("bindtouchmove")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{{test.touchmove}}"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("movable"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br")])]),n("p",[t._v("上面的 "),n("code",[t._v("change:prop")]),t._v("(属性前面带 "),n("code",[t._v("change:")]),t._v(" 前缀)是在 prop 属性被设置的时候触发 WXS 函数，值必须用 "),n("code",[t._v("{{}}")]),t._v(" 括起来。类似 "),n("code",[t._v("Component")]),t._v(" 定义的 "),n("code",[t._v("properties")]),t._v(" 里面的 "),n("code",[t._v("observer")]),t._v(" 属性，在 "),n("code",[t._v("setData({propValue: newValue})")]),t._v(" 调用之后会触发。")]),t._v(" "),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),n("p",[t._v("WXS 函数必须用 "),n("code",[t._v("{{}}")]),t._v(" 括起来。当 "),n("code",[t._v("prop")]),t._v(" 的值被设置 WXS 函数就会触发，而不只是值发生改变，所以在页面初始化的时候会调用一次 WxsPropObserver 的函数。")])]),t._v(" "),n("p",[t._v("WXS 文件 test.wxs 里面定义并导出事件处理函数和属性改变触发的函数:")]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("module"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("touchmove")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" instance")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"log event"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringify")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("propObserver")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("newValue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" oldValue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ownerInstance"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" instance")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"prop observer"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" newValue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" oldValue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br")])]),n("p",[t._v("更多示例请 "),n("a",{attrs:{href:"https://developers.weixin.qq.com/s/L1G0Dkmc7G8a",target:"_blank",rel:"noopener noreferrer"}},[t._v("在开发者工具中预览效果"),n("OutboundLink")],1)]),t._v(" "),n("h2",{attrs:{id:"tips"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#tips"}},[t._v("#")]),t._v(" Tips")]),t._v(" "),n("ol",[n("li",[t._v("目前还不支持原生组件的事件、input 和 textarea 组件的 bindinput 事件")]),t._v(" "),n("li",[t._v("目前在 WXS 函数里面仅支持 "),n("code",[t._v("console.log")]),t._v(" 方式打日志定位问题，注意连续的重复日志会被过滤掉。")])])])}),[],!1,null,null,null);s.default=e.exports},518:function(t,s,a){t.exports=a.p+"assets/img/interative-model.c5b3113b.png"}}]);