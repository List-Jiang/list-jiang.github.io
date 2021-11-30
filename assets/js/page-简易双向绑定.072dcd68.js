(window.webpackJsonp=window.webpackJsonp||[]).push([[579],{1320:function(a,t,s){"use strict";s.r(t);var n=s(1),e=Object(n.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("blockquote",[s("p",[a._v("基础库 2.9.3 开始支持")])]),a._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("提示")]),a._v(" "),s("p",[a._v("此部分在初步学习小程序的时候直接略过即可。")])]),a._v(" "),s("h2",{attrs:{id:"语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[a._v("#")]),a._v(" 语法")]),a._v(" "),s("p",[a._v("在 WXML 中，普通的属性的绑定是单向的。例如:")]),a._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("input")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("value")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("{{value}}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("/>")])]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("如果使用 "),s("code",[a._v("this.setData({ value: 'leaf' })")]),a._v(" 来更新 value ，"),s("code",[a._v("this.data.value")]),a._v(" 和输入框的中显示的值都会被更新为 "),s("code",[a._v("leaf")]),a._v(" ；但如果用户修改了输入框里的值，却不会同时改变 "),s("code",[a._v("this.data.value")]),a._v(" 。")]),a._v(" "),s("p",[a._v("如果需要在用户输入的同时改变 "),s("code",[a._v("this.data.value")]),a._v(" ，需要借助简易双向绑定机制。此时，可以在对应项目之前加入 "),s("code",[a._v("model:")]),a._v(" 前缀:")]),a._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("input")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("model:")]),a._v("value")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("{{value}}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("/>")])]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("这样，如果输入框的值被改变了， "),s("code",[a._v("this.data.value")]),a._v(" 也会同时改变。同时， WXML 中所有绑定了 value 的位置也会被一同更新， 数据监听器 也会被正常触发。")]),a._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:"https://developers.weixin.qq.com/s/8jXvobmV7vcj",target:"_blank",rel:"noopener noreferrer"}},[a._v("在开发者工具中预览效果"),s("OutboundLink")],1)])]),a._v(" "),s("h2",{attrs:{id:"限制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#限制"}},[a._v("#")]),a._v(" 限制")]),a._v(" "),s("p",[a._v("用于双向绑定的表达式有如下限制:")]),a._v(" "),s("ol",[s("li",[s("p",[a._v("只能是一个单一字段的绑定，如")]),a._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("input")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("model:")]),a._v("value")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("值为 {{value}}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("/>")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("input")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("model:")]),a._v("value")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("{{ a + b }}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("/>")])]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("p",[a._v("都是非法的；")])]),a._v(" "),s("li",[s("p",[a._v("目前，尚不能 "),s("code",[a._v("data")]),a._v(" 路径，如")]),a._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("input")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("model:")]),a._v("value")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("{{ a.b }}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("/>")])]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("这样的表达式目前暂不支持。")])])]),a._v(" "),s("h2",{attrs:{id:"在自定义组件中使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在自定义组件中使用"}},[a._v("#")]),a._v(" 在自定义组件中使用")]),a._v(" "),s("h3",{attrs:{id:"传递双向绑定"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#传递双向绑定"}},[a._v("#")]),a._v(" 传递双向绑定")]),a._v(" "),s("p",[a._v("双向绑定同样可以使用在自定义组件上。")]),a._v(" "),s("p",[a._v("如下的自定义组件:")]),a._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// custom-component.js")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("Component")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  properties"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    myValue"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" String"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br")])]),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("\x3c!-- custom-component.wxml --\x3e")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("input")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("model:")]),a._v("value")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("{{myValue}}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("/>")])]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("p",[a._v("这个自定义组件将自身的 "),s("code",[a._v("myValue")]),a._v(" 属性双向绑定到了组件内输入框的 "),s("code",[a._v("value")]),a._v(" 属性上。这样，如果页面这样使用这个组件:")]),a._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("custom-component")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("model:")]),a._v("my-value")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("{{pageValue}}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("/>")])]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("当输入框的值变更时，自定义组件的 "),s("code",[a._v("myValue")]),a._v(" 属性会同时变更，这样，页面的 "),s("code",[a._v("this.data.pageValue")]),a._v(" 也会同时变更，页面 WXML 中所有绑定了 "),s("code",[a._v("pageValue")]),a._v(" 的位置也会被一同更新。")]),a._v(" "),s("h3",{attrs:{id:"触发双向绑定更新"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#触发双向绑定更新"}},[a._v("#")]),a._v(" 触发双向绑定更新")]),a._v(" "),s("p",[a._v("自定义组件还可以自己触发双向绑定更新，做法就是: 使用 "),s("code",[a._v("setData")]),a._v(" 设置自身的属性。例如:")]),a._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// custom-component.js")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("Component")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  properties"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    myValue"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" String"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  methods"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("update")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 更新 myValue")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("setData")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        myValue"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"leaf"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br")])]),s("p",[a._v("如果页面这样使用这个组件:")]),a._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("custom-component")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("model:")]),a._v("my-value")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("{{pageValue}}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("/>")])]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("当组件使用 "),s("code",[a._v("setData")]),a._v(" 更新 "),s("code",[a._v("myValue")]),a._v(" 时，页面的 "),s("code",[a._v("this.data.pageValue")]),a._v(" 也会同时变更，页面 WXML 中所有绑定了 "),s("code",[a._v("pageValue")]),a._v(" 的位置也会被一同更新。")])])}),[],!1,null,null,null);t.default=e.exports}}]);