(window.webpackJsonp=window.webpackJsonp||[]).push([[260],{874:function(t,a,s){"use strict";s.r(a);var n=s(1),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"前台-后台状态"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前台-后台状态"}},[t._v("#")]),t._v(" 前台/后台状态")]),t._v(" "),s("p",[t._v("小程序启动后，界面被展示给用户，此时小程序处于前台状态。")]),t._v(" "),s("p",[t._v("当用户点击右上角胶囊按钮关闭小程序，或者按了设备 Home 键离开微信时，小程序并没有完全终止运行，而是进入了后台状态，小程序还可以运行一小段时间。")]),t._v(" "),s("p",[t._v("当用户再次进入微信或再次打开小程序，小程序又会从后台进入前台。但如果用户很久没有再进入小程序，或者系统资源紧张，小程序可能被销毁，即完全终止运行。")]),t._v(" "),s("h2",{attrs:{id:"小程序启动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#小程序启动"}},[t._v("#")]),t._v(" 小程序启动")]),t._v(" "),s("p",[t._v("这样，小程序启动可以分为两种情况，一种是冷启动，一种是热启动。")]),t._v(" "),s("ul",[s("li",[t._v("冷启动: 如果用户首次打开，或小程序销毁后被用户再次打开，此时小程序需要重新加载启动，即冷启动。")]),t._v(" "),s("li",[t._v("热启动: 如果用户已经打开过某小程序，然后在一定时间内再次打开该小程序，此时小程序并未被销毁，只是从后台状态进入前台状态，这个过程就是热启动。")])]),t._v(" "),s("h2",{attrs:{id:"小程序销毁时机"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#小程序销毁时机"}},[t._v("#")]),t._v(" 小程序销毁时机")]),t._v(" "),s("p",[t._v("通常，只有当小程序进入后台一定时间，或者系统资源占用过高，才会被销毁。具体而言包括以下几种情形:")]),t._v(" "),s("ul",[s("li",[t._v("当小程序进入后台，可以维持一小段时间的运行状态，如果这段时间内都未进入前台，小程序会被销毁。")]),t._v(" "),s("li",[t._v("当小程序占用系统资源过高，可能会被系统销毁或被微信客户端主动回收。\n"),s("ul",[s("li",[t._v("在 iOS 上，当微信客户端在一定时间间隔内连续收到系统内存告警时，会根据一定的策略，主动销毁小程序，并提示用户 「运行内存不足，请重新打开该小程序」。具体策略会持续进行调整优化。")]),t._v(" "),s("li",[t._v("建议小程序在必要时使用 wx.onMemoryWarning 监听内存告警事件，进行必要的内存清理。")])])])]),t._v(" "),s("h2",{attrs:{id:"启动场景分类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启动场景分类"}},[t._v("#")]),t._v(" 启动场景分类")]),t._v(" "),s("p",[t._v("用户打开小程序时，场景可分为以下 A、B 两类:")]),t._v(" "),s("p",[t._v("A. 保留上次的浏览状态。场景值有以下几项:")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("场景值 ID")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("1001")]),t._v(" "),s("td",[t._v("发现栏小程序主入口，「最近使用」列表(基础库 2.2.4 版本起包含「我的小程序」列表)")])]),t._v(" "),s("tr",[s("td",[t._v("1003")]),t._v(" "),s("td",[t._v("星标小程序列表")])]),t._v(" "),s("tr",[s("td",[t._v("1023")]),t._v(" "),s("td",[t._v("系统桌面小图标打开小程序")])]),t._v(" "),s("tr",[s("td",[t._v("1038")]),t._v(" "),s("td",[t._v("从其他小程序返回小程序")])]),t._v(" "),s("tr",[s("td",[t._v("1056")]),t._v(" "),s("td",[t._v("聊天顶部音乐播放器右上角菜单，打开小程序")])]),t._v(" "),s("tr",[s("td",[t._v("1080")]),t._v(" "),s("td",[t._v("客服会话菜单小程序入口，打开小程序")])]),t._v(" "),s("tr",[s("td",[t._v("1083")]),t._v(" "),s("td",[t._v("公众号会话菜单小程序入口 ，打开小程序(只有腾讯客服小程序有)")])]),t._v(" "),s("tr",[s("td",[t._v("1089")]),t._v(" "),s("td",[t._v("聊天主界面下拉，打开小程序/微信聊天主界面下拉，「最近使用」栏(基础库 2.2.4 版本起包含「我的小程序」栏)")])]),t._v(" "),s("tr",[s("td",[t._v("1090")]),t._v(" "),s("td",[t._v("长按小程序右上角菜单，打开小程序")])]),t._v(" "),s("tr",[s("td",[t._v("1103")]),t._v(" "),s("td",[t._v("发现-小程序主入口我的小程序，打开小程序")])]),t._v(" "),s("tr",[s("td",[t._v("1104")]),t._v(" "),s("td",[t._v("聊天主界面下拉，从我的小程序，打开小程序")])]),t._v(" "),s("tr",[s("td",[t._v("1113")]),t._v(" "),s("td",[t._v("安卓手机负一屏，打开小程序")])]),t._v(" "),s("tr",[s("td",[t._v("1114")]),t._v(" "),s("td",[t._v("安卓手机侧边栏，打开小程序")])]),t._v(" "),s("tr",[s("td",[t._v("1117")]),t._v(" "),s("td",[t._v("后台运行小程序的管理页中，打开小程序")])])])]),t._v(" "),s("ul",[s("li",[t._v("若进入的场景中带有 path，则每次打开小程序时都进入对应的 path 页面")]),t._v(" "),s("li",[t._v("若进入的场景中不带 path:")]),t._v(" "),s("li",[t._v("若小程序是热启动，则保留原来状态")]),t._v(" "),s("li",[t._v("若小程序是冷启动，则遵循下一节的重启策略，可能是首页或上次退出的页面")])]),t._v(" "),s("p",[t._v("B. relaunch 到指定页或首页")]),t._v(" "),s("p",[t._v("包括除 A 类外的其他场景")]),t._v(" "),s("ul",[s("li",[t._v("若进入的场景中带有 path，则每次点击时都进入对应的 path 页面")]),t._v(" "),s("li",[t._v("若进入的场景中不带 path，则每次进入都打开首页")])]),t._v(" "),s("h2",{attrs:{id:"a-类场景的重新启动策略"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#a-类场景的重新启动策略"}},[t._v("#")]),t._v(" A 类场景的重新启动策略")]),t._v(" "),s("blockquote",[s("p",[t._v("基础库 2.8.0 开始支持")])]),t._v(" "),s("p",[t._v("小程序被销毁后，下次冷启动如果属于 B 类场景，将会进入特定的页面。")]),t._v(" "),s("p",[t._v("下次冷启动如果属于 A 类场景，默认情况下将会进入小程序的首页。在页面对应的 json 文件中(也可以全局配置在 app.json 的 "),s("code",[t._v("window")]),t._v(" 段中)，指定 "),s("code",[t._v("restartStrategy")]),t._v(" 配置项可以改变这个默认的行为，使得从某个页面退出后，下次 A 类场景的冷启动可以回到这个页面。")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("代码示例")]),t._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"restartStrategy"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"homePage"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])])]),t._v(" "),s("p",[s("code",[t._v("restartStrategy")]),t._v(" 可选值:")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("可选值")]),t._v(" "),s("th",[t._v("含义")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("homePage")]),t._v(" "),s("td",[t._v("(默认值)如果从这个页面退出小程序，下次将从首页冷启动")])]),t._v(" "),s("tr",[s("td",[t._v("homePageAndLatestPage")]),t._v(" "),s("td",[t._v("如果从这个页面退出小程序，下次冷启动后立刻加载这个页面，页面的参数保持不变(不可用于 tab 页)")])])])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("即使不配置为 homePage ，小程序如果退出过久(当前默认一天时间，可以使用退出状态来调整)，下次冷启动时也将不再遵循 "),s("code",[t._v("restartStrategy")]),t._v(" 的配置，而是直接从首页冷启动。")])]),t._v(" "),s("p",[t._v("无论如何，页面中的状态并不会被保留，如输入框中的文本内容、 checkbox 的勾选状态等都不会还原。如果需要还原或部分还原，需要利用退出状态。")]),t._v(" "),s("h2",{attrs:{id:"退出状态"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#退出状态"}},[t._v("#")]),t._v(" 退出状态")]),t._v(" "),s("p",[t._v("每当小程序可能被销毁之前，页面回调函数 "),s("code",[t._v("onSaveExitState")]),t._v(" 会被调用。如果想保留页面中的状态，可以在这个回调函数中“保存”一些数据，下次启动时可以通过 "),s("code",[t._v("exitState")]),t._v(" 获得这些已保存数据。")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("代码示例")]),t._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"restartStrategy"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"homePageAndLatestPage"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Page")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onLoad")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" prevExitState "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exitState"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 尝试获得上一次退出前 onSaveExitState 保存的数据")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("prevExitState "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果是根据 restartStrategy 配置进行的冷启动，就可以获取到")]),t._v("\n      prevExitState"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("myDataField "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"myData"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onSaveExitState")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" exitState "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" myDataField"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"myData"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 需要保存的数据")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      data"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" exitState"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      expireTimeStamp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Date"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("now")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("24")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 超时时刻")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br")])])]),t._v(" "),s("p",[s("code",[t._v("onSaveExitState")]),t._v(" 返回值可以包含两项:")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("字段名")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("含义")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("data")]),t._v(" "),s("td",[t._v("Any")]),t._v(" "),s("td",[t._v("需要保存的数据(只能是 JSON 兼容的数据)")])]),t._v(" "),s("tr",[s("td",[t._v("expireTimeStamp")]),t._v(" "),s("td",[t._v("Number")]),t._v(" "),s("td",[t._v("超时时刻，在这个时刻后，保存的数据保证一定被丢弃，默认为 (当前时刻 + 1 天)")])])])]),t._v(" "),s("p",[t._v("一个更完整的示例: "),s("a",{attrs:{href:"https://developers.weixin.qq.com/s/ELP5uTmN7E8l",target:"_blank",rel:"noopener noreferrer"}},[t._v("在开发者工具中预览效果"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("ul",[s("li",[t._v("如果超过 "),s("code",[t._v("expireTimeStamp")]),t._v(" ，保存的数据将被丢弃，且冷启动时不遵循 "),s("code",[t._v("restartStrategy")]),t._v(" 的配置，而是直接从首页冷启动。")]),t._v(" "),s("li",[s("code",[t._v("expireTimeStamp")]),t._v(" 有可能被自动提前，如微信客户端需要清理数据的时候。")]),t._v(" "),s("li",[t._v("在小程序存活期间， "),s("code",[t._v("onSaveExitState")]),t._v(" 可能会被多次调用，此时以最后一次的调用结果作为最终结果。")]),t._v(" "),s("li",[t._v("在某些特殊情况下(如微信客户端直接被系统杀死)，这个方法将不会被调用，下次冷启动也不遵循 "),s("code",[t._v("restartStrategy")]),t._v(" 的配置，而是直接从首页冷启动。")])])])])}),[],!1,null,null,null);a.default=e.exports},892:function(t,a,s){"use strict";s.r(a);var n=s(1),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"小程序启动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#小程序启动"}},[t._v("#")]),t._v(" 小程序启动")]),t._v(" "),s("p",[t._v("小程序启动会有两种情况，一种是「冷启动」，一种是「热启动」。")]),t._v(" "),s("ul",[s("li",[t._v("热启动: 假如用户已经打开过某小程序，然后在一定时间内再次打开该小程序，此时无需重新启动，只需将后台态的小程序切换到前台，这个过程就是热启动；")]),t._v(" "),s("li",[t._v("冷启动: 用户首次打开或小程序被微信主动销毁后再次打开的情况，此时小程序需要重新加载启动，即冷启动。")])]),t._v(" "),s("p",[t._v("小程序没有重启的概念。")]),t._v(" "),s("h2",{attrs:{id:"前台-后台状态"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前台-后台状态"}},[t._v("#")]),t._v(" 前台/后台状态")]),t._v(" "),s("p",[t._v("当用户点击右上角胶囊按钮关闭小程序，或者按了设备 Home 键离开微信时，小程序并没有直接销毁，而是进入了"),s("strong",[t._v("后台")]),t._v("状态；")]),t._v(" "),s("p",[t._v("当用户再次进入微信或再次打开小程序，小程序又会从后台进入"),s("strong",[t._v("前台")]),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"小程序销毁"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#小程序销毁"}},[t._v("#")]),t._v(" 小程序销毁")]),t._v(" "),s("p",[t._v("需要注意的是: 只有当小程序进入后台一定时间，或者系统资源占用过高，才会被真正的销毁。")]),t._v(" "),s("ul",[s("li",[t._v("当小程序进入后台，客户端会维持一段时间的运行状态，超过一定时间后(目前是 5 分钟)小程序会被微信主动销毁。")]),t._v(" "),s("li",[t._v("当小程序占用系统资源过高，可能会被系统销毁或被微信客户端主动回收。\n"),s("ul",[s("li",[t._v("在 iOS 上，当微信客户端在一定时间间隔内(目前是 5 秒)连续收到两次及以上系统内存告警时，会主动进行小程序的销毁，并提示用户 「该小程序可能导致微信响应变慢被终止」。")]),t._v(" "),s("li",[t._v("建议小程序在必要时使用 "),s("code",[t._v("wx.onMemoryWarning")]),t._v(" 监听内存告警事件，进行必要的内存清理。")])])])])])}),[],!1,null,null,null);a.default=e.exports}}]);