(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{1062:function(t,s,v){"use strict";v.r(s);var a=v(1),_=Object(a.a)({},(function(){var t=this,s=t.$createElement,v=t._self._c||s;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("p",[t._v("在 GitHub Actions 的仓库中自动化、自定义和执行软件开发工作流程。")]),t._v(" "),v("p",[t._v("您可以发现、创建和共享操作以执行您喜欢的任何作业 (包括 CI/CD) ，并将操作合并到完全自定义的工作流程中。")]),t._v(" "),v("h2",{attrs:{id:"特点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#特点"}},[t._v("#")]),t._v(" 特点")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("GitHub 把组成持续集成的操作称为 actions。")])]),t._v(" "),v("li",[v("p",[t._v("GitHub 允许开发者把每个操作写成独立的脚本文件，存放到代码仓库，使得其他开发者可以引用。")])]),t._v(" "),v("li",[v("p",[t._v("如果您需要某个 action，不必自己写复杂的脚本，直接引用他人写好的 action 即可，整个持续集成过程，就变成了一个 actions 的组合。这就是 GitHub Actions 最特别的地方。")])]),t._v(" "),v("li",[v("p",[t._v("GitHub 做了一个官方市场，可以搜索到他人提交的 actions。另外， "),v("a",{attrs:{href:"https://github.com/sdras/awesome-actions",target:"_blank",rel:"noopener noreferrer"}},[t._v("awesome actions"),v("OutboundLink")],1),t._v(" 仓库收集了很多有用的 actions。")])])]),t._v(" "),v("div",{staticClass:"custom-block info"},[v("p",{staticClass:"custom-block-title"},[t._v("持续集成")]),t._v(" "),v("p",[t._v("关于持续集成 (CI) 的概念与介绍，详见 "),v("RouterLink",{attrs:{to:"/code/basic/ci.html"}},[t._v("基础 → 持续集成")])],1)]),t._v(" "),v("h2",{attrs:{id:"简介"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),v("p",[t._v("GitHub Actions 帮助您自动完成软件开发周期内的任务。 GitHub Actions 是事件驱动的，意味着您可以在指定事件发生后运行一系列命令。 例如，每次有人为仓库创建拉取请求时，您都可以自动运行命令来执行软件测试脚本。")]),t._v(" "),v("h2",{attrs:{id:"组件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#组件"}},[t._v("#")]),t._v(" 组件")]),t._v(" "),v("p",[t._v("下面是一起运行作业的多个 GitHub Actions 组件列表。 您可以查看这些组件如何相互作用。")]),t._v(" "),v("h3",{attrs:{id:"workflow"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#workflow"}},[t._v("#")]),t._v(" workflow")]),t._v(" "),v("p",[t._v("工作流程 (workflow) 是您添加到仓库的自动化过程。 工作流程由一项或多项作业组成，可以计划或由事件触发。 工作流程可用于在 GitHub 上构建、测试、打包、发布或部署项目。")]),t._v(" "),v("p",[t._v("持续集成一次运行的过程，就是一个 workflow。")]),t._v(" "),v("h3",{attrs:{id:"event"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#event"}},[t._v("#")]),t._v(" event")]),t._v(" "),v("p",[t._v("事件 (event) 是触发工作流程的特定活动。 例如，当有推送提交到仓库或者创建议题或拉取请求时，GitHub 就可能产生活动。")]),t._v(" "),v("p",[t._v("您还可以使用仓库的 web hook 在发生外部事件时触发工作流程。")]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),v("p",[t._v("事件是 workflow 执行的判定。可以通过配置工作流程，来决定在哪些事件被触发执行。")]),t._v(" "),v("p",[t._v("同时工作流也可以读取触发事件的相关信息，以在不同情况下执行不同的任务。")])]),t._v(" "),v("h3",{attrs:{id:"jobs"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#jobs"}},[t._v("#")]),t._v(" Jobs")]),t._v(" "),v("p",[t._v("作业 (job) 是在同一运行服务器上执行的一组步骤。")]),t._v(" "),v("p",[t._v("默认情况下，包含多个作业的工作流程将同时运行这些作业。")]),t._v(" "),v("p",[t._v("您也可以配置工作流程按顺序运行作业。例如，工作流程可以有两个连续的任务来构建和测试代码，其中测试作业取决于构建作业的状态。如果构建作业失败，测试作业将不会运行。")]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),v("p",[t._v("作业是工作流程中一个完整任务的封装。")]),t._v(" "),v("p",[t._v("一个 workflow 由一个或多个 jobs 构成，一次持续集成的运行，可以完成多个作业，对应多个任务。")])]),t._v(" "),v("h3",{attrs:{id:"steps"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#steps"}},[t._v("#")]),t._v(" Steps")]),t._v(" "),v("p",[t._v("步骤 (step) 是可以在作业中运行命令的单个任务。步骤可以是操作或 shell 命令。")]),t._v(" "),v("p",[t._v("作业中的每个步骤在同一运行器上执行，可让该作业中的操作互相共享数据。")]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),v("p",[t._v("每个 job 由多个 step 构成，一步步完成。")])]),t._v(" "),v("h3",{attrs:{id:"action"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#action"}},[t._v("#")]),t._v(" Action")]),t._v(" "),v("p",[t._v("操作 (Action) 是独立命令，它们组合到步骤以创建作业。")]),t._v(" "),v("p",[t._v("操作是工作流程最小的便携式构建块。 您可以创建自己的操作，也可以使用 GitHub 社区创建的操作。要在工作流程中使用操作，必须将其作为一个步骤。")]),t._v(" "),v("h3",{attrs:{id:"server"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#server"}},[t._v("#")]),t._v(" Server")]),t._v(" "),v("p",[t._v("运行器 (Server) 是安装了 GitHub Actions 运行器应用程序的服务器。")]),t._v(" "),v("p",[t._v("您可以使用 GitHub 托管的运行器或托管您自己的运行器。运行器将侦听可用的作业，每次运行一个作业，并将进度、日志和结果报告回 GitHub。")]),t._v(" "),v("p",[t._v("对于 GitHub 托管的运行器，工作流程中的每项作业都会在一个新的虚拟环境中运行。")]),t._v(" "),v("p",[t._v("GitHub 托管的运行器基于 Ubuntu Linux、Microsoft Windows 和 macOS。")])])}),[],!1,null,null,null);s.default=_.exports}}]);