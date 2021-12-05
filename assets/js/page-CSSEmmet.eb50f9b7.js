(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{972:function(v,_,e){"use strict";e.r(_);var t=e(1),a=Object(t.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("p",[v._v("对于 CSS 语法，Emmet 为属性提供了许多预定义的代码段。")]),v._v(" "),e("h2",{attrs:{id:"添加属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#添加属性"}},[v._v("#")]),v._v(" 添加属性")]),v._v(" "),e("p",[v._v("您可以使用缩写来生成 CSS 属性。如 "),e("code",[v._v("m")]),v._v(" 会生成 "),e("code",[v._v("margin: ;")]),v._v("，同时光标会自动置于值处。")]),v._v(" "),e("h2",{attrs:{id:"同时添加属性与值值"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#同时添加属性与值值"}},[v._v("#")]),v._v(" 同时添加属性与值值")]),v._v(" "),e("p",[v._v("您可以将值直接输入缩写的后面，如果有多个值，您需要用 "),e("code",[v._v("-")]),v._v(" 将它们分开，多余的 "),e("code",[v._v("-")]),v._v(" 将会被理解为负值。")]),v._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[v._v("案例")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("m10")]),v._v(": "),e("code",[v._v("margin: 10px;")])]),v._v(" "),e("li",[e("code",[v._v("m10-20")]),v._v(": "),e("code",[v._v("margin: 10px 20px;")])]),v._v(" "),e("li",[e("code",[v._v("m-10--20")]),v._v(": "),e("code",[v._v("margin: -10px -20px;")])])])]),v._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[v._v("注意")]),v._v(" "),e("p",[v._v("请只有在必要(不添加会产生歧义)的情况下添加 "),e("code",[v._v("-")]),v._v(" 分隔符，否则 Emmet 可能会错误的理解它。")])]),v._v(" "),e("h2",{attrs:{id:"值的单位"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#值的单位"}},[v._v("#")]),v._v(" 值的单位")]),v._v(" "),e("p",[v._v("使用整数值扩展缩写时，Emmet 会以 px 单位输出: "),e("code",[v._v("m10")]),v._v(" → "),e("code",[v._v("margin: 10px;")]),v._v("。")]),v._v(" "),e("p",[v._v("使用浮点值扩展缩写时，会以 em 单位输出: "),e("code",[v._v("m1.5")]),v._v(" → "),e("code",[v._v("margin: 1.5em;")]),v._v("。")]),v._v(" "),e("p",[v._v("您也可以在值后面紧跟任何字母字符，来显式提供单位名称: "),e("code",[v._v("m1.5ex")]),v._v(" → "),e("code",[v._v("margin: 1.5ex;")]),v._v("，"),e("code",[v._v("m10foo")]),v._v(" → "),e("code",[v._v("margin: 10foo;")]),v._v("。")]),v._v(" "),e("p",[v._v("明确定义单位后，不再需要使用连字符来分隔值: "),e("code",[v._v("m10ex20em")]),v._v(" → "),e("code",[v._v("margin: 10ex 20em;")]),v._v("，"),e("code",[v._v("m10ex-5")]),v._v(" → "),e("code",[v._v("margin: 10ex -5px;")]),v._v("。")]),v._v(" "),e("h2",{attrs:{id:"值别名"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#值别名"}},[v._v("#")]),v._v(" 值别名")]),v._v(" "),e("p",[v._v("Emmet 具有一些常用值的别名:")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("p")]),v._v(" → "),e("code",[v._v("%")])]),v._v(" "),e("li",[e("code",[v._v("e")]),v._v(" → "),e("code",[v._v("em")])]),v._v(" "),e("li",[e("code",[v._v("x")]),v._v(" → "),e("code",[v._v("ex")])])]),v._v(" "),e("p",[v._v("您可以使用别名代替完整的单位:")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("w100p")]),v._v(" → "),e("code",[v._v("width: 100%")])]),v._v(" "),e("li",[e("code",[v._v("m10p30e5x")]),v._v(" → "),e("code",[v._v("margin: 10% 30em 5ex")])])]),v._v(" "),e("h2",{attrs:{id:"颜色值"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#颜色值"}},[v._v("#")]),v._v(" 颜色值")]),v._v(" "),e("p",[v._v("Emmet 支持十六进制颜色值。"),e("code",[v._v("#")]),v._v(" 将自动作为分隔符，所以针对颜色变量，将不再需要 "),e("code",[v._v("-")]),v._v("。")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("c#3")]),v._v(" → "),e("code",[v._v("color: #333;")])]),v._v(" "),e("li",[e("code",[v._v("bd5#0s")]),v._v(" → "),e("code",[v._v("border: 5px #000 solid")]),v._v("。("),e("code",[v._v("#")]),v._v(" 符号可将颜色与 "),e("code",[v._v("5")]),v._v(" 分隔开，并且 "),e("code",[v._v("s")]),v._v("(别名为 "),e("code",[v._v("solid")]),v._v(")不是十六进制字符，因此省略了 "),e("code",[v._v("-")]),v._v("。")])]),v._v(" "),e("p",[v._v("颜色变量支持 1-3 位的缩写，表现如下:")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("#1")]),v._v(" → "),e("code",[v._v("#111111")])]),v._v(" "),e("li",[e("code",[v._v("#e0")]),v._v(" → "),e("code",[v._v("#e0e0e0")])]),v._v(" "),e("li",[e("code",[v._v("#fc0")]),v._v(" → "),e("code",[v._v("#ffcc00")])])]),v._v(" "),e("h2",{attrs:{id:"无单元属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#无单元属性"}},[v._v("#")]),v._v(" 无单元属性")]),v._v(" "),e("p",[v._v("一些 CSS 属性默认为无单位输出:")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("lh2")]),v._v("→ "),e("code",[v._v("line-height: 2;")])]),v._v(" "),e("li",[e("code",[v._v("fw400")]),v._v("→ "),e("code",[v._v("font-weight: 400")]),v._v("。")])]),v._v(" "),e("p",[v._v("这些值是: "),e("code",[v._v("z-index")]),v._v("，"),e("code",[v._v("line-height")]),v._v("，"),e("code",[v._v("opacity")]),v._v(" 和 "),e("code",[v._v("font-weight")])]),v._v(" "),e("h2",{attrs:{id:"重要修饰符"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#重要修饰符"}},[v._v("#")]),v._v(" 重要修饰符")]),v._v(" "),e("p",[v._v("您可以在任何 CSS 缩写的末尾添加 "),e("code",[v._v("!")]),v._v(" 后缀来添加 "),e("code",[v._v("!important")])]),v._v(" "),e("p",[e("code",[v._v("p!+m10e!")]),v._v(":")]),v._v(" "),e("div",{staticClass:"language-css line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token property"}},[v._v("padding")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(":")]),v._v(" "),e("span",{pre:!0,attrs:{class:"token important"}},[v._v("!important")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(";")]),v._v("\n"),e("span",{pre:!0,attrs:{class:"token property"}},[v._v("margin")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(":")]),v._v(" 10em "),e("span",{pre:!0,attrs:{class:"token important"}},[v._v("!important")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(";")]),v._v("\n")])]),v._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[v._v("1")]),e("br"),e("span",{staticClass:"line-number"},[v._v("2")]),e("br")])]),e("h2",{attrs:{id:"输出多个属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#输出多个属性"}},[v._v("#")]),v._v(" 输出多个属性")]),v._v(" "),e("p",[v._v("正如上方演示，您可以利用 "),e("code",[v._v("+")]),v._v(" 同时输出多个 CSS 属性。")]),v._v(" "),e("div",{staticClass:"custom-block info"},[e("p",{staticClass:"custom-block-title"},[v._v("Snippets")]),v._v(" "),e("p",[v._v("完整的 CSS snippets 请见 "),e("a",{attrs:{href:"https://github.com/emmetio/emmet/blob/master/snippets/css.json",target:"_blank",rel:"noopener noreferrer"}},[v._v("Emmet Repo"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);_.default=a.exports}}]);