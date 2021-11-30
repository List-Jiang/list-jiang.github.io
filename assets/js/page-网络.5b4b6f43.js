(window.webpackJsonp=window.webpackJsonp||[]).push([[603],{1277:function(t,v,_){"use strict";_.r(v);var e=_(1),s=Object(e.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("p",[t._v("在小程序中使用网络相关的 API 时，需要注意下列问题，请开发者提前了解。")]),t._v(" "),_("h2",{attrs:{id:"_1-服务器域名配置"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-服务器域名配置"}},[t._v("#")]),t._v(" 1. 服务器域名配置")]),t._v(" "),_("p",[t._v("每个微信小程序需要事先设置一个通讯域名，小程序只可以跟指定的域名与进行网络通信。包括普通 HTTPS 请求("),_("code",[t._v("wx.request")]),t._v(")、上传文件("),_("code",[t._v("wx.uploadFile")]),t._v(")、下载文件("),_("code",[t._v("wx.downloadFile")]),t._v(") 和 WebSocket 通信("),_("code",[t._v("wx.connectSocket")]),t._v(")")]),t._v(" "),_("h3",{attrs:{id:"配置流程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#配置流程"}},[t._v("#")]),t._v(" 配置流程")]),t._v(" "),_("p",[t._v("服务器域名请在 「小程序后台-设置-开发设置-服务器域名」 中进行配置，配置时需要注意:")]),t._v(" "),_("ul",[_("li",[t._v("域名只支持 HTTPS ("),_("code",[t._v("wx.request")]),t._v("、"),_("code",[t._v("wx.uploadFile")]),t._v("、"),_("code",[t._v("wx.downloadFile")]),t._v(") 和 wss ("),_("code",[t._v("wx.connectSocket")]),t._v(") 协议；")]),t._v(" "),_("li",[t._v("域名不能使用 IP 地址或 localhost；")]),t._v(" "),_("li",[t._v("可以配置端口，如 "),_("code",[t._v("https://myserver.com:8080")]),t._v("，但是配置后只能向 "),_("code",[t._v("https://myserver.com:8080")]),t._v(" 发起请求。")]),t._v(" "),_("li",[t._v("如果不配置端口。如 "),_("code",[t._v("https://myserver.com")]),t._v("，那么请求的 URL 中也不能包含端口，甚至是默认的 443 端口也不可以。")]),t._v(" "),_("li",[t._v("域名必须经过 ICP 备案；")]),t._v(" "),_("li",[t._v("出于安全考虑，"),_("code",[t._v("api.weixin.qq.com")]),t._v(" 不能被配置为服务器域名，相关 API 也不能在小程序内调用。开发者应将 AppSecret 保存到后台服务器中，通过服务器使用 getAccessToken 接口获取 access_token，并调用相关 API；")])]),t._v(" "),_("p",[t._v("对于每个接口，分别可以配置最多 20 个域名。")]),t._v(" "),_("h2",{attrs:{id:"_2-网络请求"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-网络请求"}},[t._v("#")]),t._v(" 2. 网络请求")]),t._v(" "),_("h3",{attrs:{id:"超时时间"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#超时时间"}},[t._v("#")]),t._v(" 超时时间")]),t._v(" "),_("p",[t._v("默认超时时间和最大超时时间都是 60s；")]),t._v(" "),_("p",[t._v("超时时间可以在 "),_("code",[t._v("app.json")]),t._v(" 中通过 "),_("code",[t._v("networktimeout")]),t._v(" 配置。")]),t._v(" "),_("h3",{attrs:{id:"使用限制"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#使用限制"}},[t._v("#")]),t._v(" 使用限制")]),t._v(" "),_("ol",[_("li",[_("p",[t._v("网络请求的 referer header 不可设置。其格式固定为 "),_("code",[t._v("https://servicewechat.com/{appid}/{version}/page-frame.html")]),t._v("，其中 "),_("code",[t._v("{appid}")]),t._v(" 为小程序的 appid，"),_("code",[t._v("{version}")]),t._v(" 为小程序的版本号，版本号为 "),_("code",[t._v("0")]),t._v(" 表示为开发版、体验版以及审核版本，版本号为 "),_("code",[t._v("devtools")]),t._v(" 表示为开发者工具，其余为正式版本。")]),t._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),_("p",[t._v("因为小程序必定带上特定 Header，在后端的 API 处理上就可以判断 Header，检测到只有是自己小程序时才允许调用接口，否则直接拒绝访问。")])])]),t._v(" "),_("li",[_("p",[t._v("wx.request、wx.uploadFile、wx.downloadFile 的最大并发限制是 10 个；")])])]),t._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),_("p",[t._v("所以一定要避免同时发送过多的网络请求")])]),t._v(" "),_("ol",[_("li",[t._v("小程序进入后台运行后(非置顶聊天)，如果 5s 内网络请求没有结束，会回调错误信息 "),_("code",[t._v("fail interrupted")]),t._v("；在回到前台之前，网络请求接口调用都会无法调用。")])]),t._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),_("p",[t._v("所以重要请求的 "),_("code",[t._v("fail")]),t._v(" 流程一定要妥善处理，可以考莉再次进行一次或两次重试或明确提示用户请求失败让其手动重试")])]),t._v(" "),_("h3",{attrs:{id:"返回值编码"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#返回值编码"}},[t._v("#")]),t._v(" 返回值编码")]),t._v(" "),_("ol",[_("li",[_("p",[t._v("建议服务器返回值使用 UTF-8 编码。对于非 UTF-8 编码，小程序会尝试进行转换，但是会有转换失败的可能。")])]),t._v(" "),_("li",[_("p",[t._v("小程序会自动对 BOM 头进行过滤(只过滤一个 BOM 头)。")])])]),t._v(" "),_("h3",{attrs:{id:"回调函数"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#回调函数"}},[t._v("#")]),t._v(" 回调函数")]),t._v(" "),_("p",[t._v("只要成功接收到服务器返回，无论 "),_("code",[t._v("statusCode")]),t._v(" 是多少，都会进入 "),_("code",[t._v("success")]),t._v(" 回调。请开发者根据业务逻辑对返回值进行判断。")]),t._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),_("p",[t._v("所以在请求成功的时候，也要判断请求码是不是 200，并对其他状态码做合理的处理。")])]),t._v(" "),_("h2",{attrs:{id:"_3-常见问题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-常见问题"}},[t._v("#")]),t._v(" 3. 常见问题")]),t._v(" "),_("h3",{attrs:{id:"https-证书"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#https-证书"}},[t._v("#")]),t._v(" HTTPS 证书")]),t._v(" "),_("p",[t._v("小程序必须使用 HTTPS/WSS 发起网络请求。请求时系统会对服务器域名使用的 HTTPS 证书进行校验，如果校验失败，则请求不能成功发起。由于系统限制，不同平台对于证书要求的严格程度不同。为了保证小程序的兼容性，建议开发者按照最高标准进行证书配置，并使用相关工具检查现有证书是否符合要求。")]),t._v(" "),_("h3",{attrs:{id:"跳过域名校验"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#跳过域名校验"}},[t._v("#")]),t._v(" 跳过域名校验")]),t._v(" "),_("p",[t._v("在微信开发者工具中，可以临时开启 开发环境不校验请求域名、TLS 版本及 HTTPS 证书 选项，跳过服务器域名的校验。此时，在微信开发者工具中及手机开启调试模式时，不会进行服务器域名的校验。")]),t._v(" "),_("p",[t._v("在服务器域名配置成功后，建议开发者关闭此选项进行开发，并在各平台下进行测试，以确认服务器域名配置正确。")]),t._v(" "),_("p",[t._v("如果手机上出现 “打开调试模式可以发出请求，关闭调试模式无法发出请求” 的现象，请确认是否跳过了域名校验，并确认服务器域名和证书配置是否正确。")])])}),[],!1,null,null,null);v.default=s.exports}}]);