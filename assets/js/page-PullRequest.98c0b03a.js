(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{1067:function(A,t,e){"use strict";e.r(t);var r=e(1),s=Object(r.a)({},(function(){var A=this,t=A.$createElement,r=A._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":A.$parent.slotKey}},[r("h2",{attrs:{id:"简介"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[A._v("#")]),A._v(" 简介")]),A._v(" "),r("p",[A._v("对于一个用户的公开仓库，在默认情况下虽然其他用户可以拉取该库的代码，但是他们并不能够直接向这个库进行推送。")]),A._v(" "),r("p",[A._v("GitHub 是一个代码社区，这意味着鼓励大家互相提交与贡献代码。所以这就是 Fork 和 Pull Request 出现的意义。没有人会给一个陌生人添加访问自己仓库的权限，所以我们需要一种方式，能够让大家向仓库所有者发起贡献代码的请求。这就是 pull request 的由来。")]),A._v(" "),r("h2",{attrs:{id:"提交自己贡献的代码"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#提交自己贡献的代码"}},[A._v("#")]),A._v(" 提交自己贡献的代码")]),A._v(" "),r("p",[A._v("对于代码贡献者来说，他需要用一种方法将自己贡献的代码推送到远程库上，以便发起请求，最好的办法就是 fork 原仓库。")]),A._v(" "),r("p",[r("img",{attrs:{src:e(499),alt:"Fork 仓库"}})]),A._v(" "),r("div",{staticClass:"custom-block info"},[r("p",{staticClass:"custom-block-title"},[A._v("相关信息")]),A._v(" "),r("p",[A._v("相关介绍，请见 "),r("RouterLink",{attrs:{to:"/code/github/intro.html#fork"}},[A._v("GitHub 简介 → fork")])],1)]),A._v(" "),r("p",[A._v("这样，贡献者在自己的账号上获得一个和原仓库完全相同的副本。")]),A._v(" "),r("p",[A._v("既然副本已经创建在自己的账号上，贡献者自然可以:")]),A._v(" "),r("ol",[r("li",[A._v("克隆这个项目到本地")]),A._v(" "),r("li",[A._v("在这个项目上贡献自己的代码")]),A._v(" "),r("li",[A._v("将贡献的代码推送到这个副本上")])]),A._v(" "),r("h2",{attrs:{id:"发送请求"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#发送请求"}},[A._v("#")]),A._v(" 发送请求")]),A._v(" "),r("p",[A._v("pull request 是请求仓库所有者拉取指定仓库分支代码的请求。")]),A._v(" "),r("p",[A._v("在贡献自己的代码并推送到自己的 fork 仓库后，贡献者即可到原仓库去选择自己仓库的对应分支发送这个拉取请求。仓库所有者随时可以批准这个更改，使其自动添加到自己的库中，或是拒绝这个请求。")]),A._v(" "),r("p",[r("img",{attrs:{src:e(500),alt:"Pull request"}})]),A._v(" "),r("blockquote",[r("p",[A._v("这个仓库我已经删了所以显示 "),r("code",[A._v("unknown repository")]),A._v("，原为 "),r("code",[A._v("Mister-Hope:master")])])]),A._v(" "),r("p",[A._v("这个页面允许所有人在主要对话线上交换自己的意见。")]),A._v(" "),r("p",[A._v("在 Pull request 里，一旦请求被创建，仓库所有者应该可以直观地看到哪些文件发生了怎样的改变。")]),A._v(" "),r("p",[r("img",{attrs:{src:e(501),alt:"文件改动"}})]),A._v(" "),r("p",[A._v("同时，他们也可以对贡献者的代码进行审查，对特定行或片段标注，并陈述自己的意见，同时将这个意见根据程度标注为“探讨”、“改进”或者“必须更改”，以便贡献者进行交流讨论与完善修改。")]),A._v(" "),r("p",[r("img",{attrs:{src:e(502),alt:"代码审查"}})]),A._v(" "),r("p",[A._v("同时，对于一个大型库来说，仓库所有者应该可以看到贡献的代码是否通过了所有测试。")]),A._v(" "),r("p",[r("img",{attrs:{src:e(503),alt:"测试通过情况"}})]),A._v(" "),r("p",[A._v("如果审查者认为没有问题，他可能就会通过这个拉取请求，拉取对应的代码到自己的仓库上。这样您就完成了对这个仓库的贡献。")]),A._v(" "),r("h2",{attrs:{id:"同步原仓库"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#同步原仓库"}},[A._v("#")]),A._v(" 同步原仓库")]),A._v(" "),r("p",[A._v("需要注意的是，fork 创建的是一个时刻副本，也就是自己 fork 产生的仓库，会保持 fork 时的状态，原仓库的任何变动都不会自动同步到 fork 的仓库上。")]),A._v(" "),r("p",[A._v("有些时候，在自己 fork 原仓库、自己编写代码并提交的这段时间里，原仓库已经进行了很多提交。这时，我们就需要同步原仓库的更新到自己的副本上，以确保自己贡献的代码并未和新增代码发生冲突、可以正常工作。")]),A._v(" "),r("p",[A._v("这个时候只需反向拉取，在自己的仓库创建原仓库特定分支到自己仓库特定分支的 Pull request，并批准这个 pull request。这样即可很方便的将原仓库特定分支的更新同步到自己的副本上。")]),A._v(" "),r("p",[A._v("您当然可以在本地添加原仓库的远程库，将最新的更改直接 fetch 到本地，在本地测试通过并完成合并后，由本地推送至自己的 fork 仓库。")])])}),[],!1,null,null,null);t.default=s.exports},499:function(A,t){A.exports="data:image/png;base64,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"},500:function(A,t,e){A.exports=e.p+"assets/img/pull-request.3980a6e7.png"},501:function(A,t,e){A.exports=e.p+"assets/img/file-changes.13e5cb1a.png"},502:function(A,t,e){A.exports=e.p+"assets/img/pull-request-review.bf067c6b.png"},503:function(A,t,e){A.exports=e.p+"assets/img/pull-request-check.0e067b12.png"}}]);