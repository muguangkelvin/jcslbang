---
title: "Clash Verge Rev 扩展脚本 (Script) 配置教程：自定义规则重写"
description: "教你使用 Clash Verge Rev 的扩展脚本 (Script Profile) 功能。利用 JavaScript 动态修改配置、添加自定义节点组与屏蔽广告域名。"
pubDate: "2026-09-19"
updatedDate: "2026-09-20"
category: "客户端教程"
tags: ["Clash Verge", "扩展脚本", "JavaScript重写", "自定义规则", "客户端教程"]
keywords: ["Clash Verge脚本教程", "Verge Script配置", "Clash规则重写", "JavaScript预处理"]
search_synonyms: ["Verge怎么加自定义规则", "Clash Verge预处理脚本", "Verge合并配置"]
featured: true
---

# Clash Verge Rev 扩展脚本 (Script) 配置教程：自定义规则重写

每次机场更新订阅时，原有的配置文件都会被全新拉取的 YAML 文件覆盖，导致用户之前手动添加的自定义直连规则、广告拦截域名或本地节点全部丢失。为了解决这一痛点，Clash Verge Rev 引入了 **扩展脚本 (Script Override)** 功能。

扩展脚本允许用户通过编写极简的 JavaScript 代码，在订阅解析时自动把自定义配置“注入”到最终生效的文件中。

---

## 1. 扩展脚本的工作机制

扩展脚本相当于一个位于“订阅下载”与“软件加载”之间的中转过滤器。只要脚本存在，不论机场订阅如何频繁刷新，你的个人定制规则都会始终稳固生效。

---

## 2. 实用扩展脚本编写范例

进入 Clash Verge Rev 的 订阅 (Profiles) -> 扩展脚本 菜单，点击新建脚本，粘贴常用逻辑：

### 示例：注入自定义直连与代理规则
在脚本函数中，通过定义包含规则数组的 myRules 变量，并使用展开运算符 concat 将自定义规则插入在 config.rules 数组最前端，确保个人规则获得最高优先级解析。

---

## 3. 绑定脚本与测试生效

1. 脚本编写完成后，点击保存。
2. 回到订阅列表，在对应的机场订阅卡片上点击右键，选择右键菜单中的规则与脚本控制，勾选刚才创建的脚本。
3. 点击订阅卡片右侧的刷新图标。成功刷新后，可在代理页面看到注入的自定义规则已经精准生效。
