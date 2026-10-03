---
title: "浏览器分流与 SwitchyOmega 配置教程：让国内流量直连国外走代理"
description: "使用 ZeroOmega (SwitchyOmega) 拓展实现浏览器精准分流。配置 SOCKS5/HTTP 本地代理端口，结合 GFWList 规则实现国内域名直连国外走代理。"
pubDate: "2026-09-19"
updatedDate: "2026-09-20"
category: "新手指南"
tags: ["SwitchyOmega", "浏览器分流", "SOCKS5代理", "ZeroOmega", "新手指南"]
keywords: ["SwitchyOmega配置教程", "浏览器代理分流", "SOCKS5 7890", "ZeroOmega扩展"]
search_synonyms: ["Chrome怎么设置代理", "浏览器单独走梯子", "SwitchyOmega导入规则"]
featured: true
---

# 浏览器分流与 SwitchyOmega 配置教程：让国内流量直连国外走代理

在日常办公与网购时，如果全局开启代理，会导致访问国内网站（如百度、淘宝、网易云音乐）速度变慢甚至显示异地登录异常。虽然 Clash 等客户端支持系统级规则分流，但在浏览器层面配合 **ZeroOmega (原 SwitchyOmega)** 拓展，能够实现更灵活的按域名精准分流。

本文将详细教你如何在 Chrome 或 Edge 浏览器中配置这款强大的代理分流插件。

---

## 1. 了解核心组件与工作原理

* **客户端本地端口 (Local Port)**：代理软件（如 Clash Verge Rev、v2rayN）在你的电脑后台开启了本地代理服务，默认端口通常为 7890 (HTTP) 或 7897 (SOCKS5)。
* **ZeroOmega 拓展**：接管浏览器的网络请求。通过匹配访问的 URL 域名，自动决定该请求是直接连接（Direct）还是将数据打包发送给 127.0.0.1:7890 本地代理端口。

---

## 2. 插件安装与本地 SOCKS5/HTTP 情景模式配置

### 第一步：获取插件扩展
* **Edge 浏览器**：直接在 Edge 扩展商店搜索 **ZeroOmega** 并点击安装。
* **Chrome 浏览器**：在 Chrome Web Store 安装 ZeroOmega；若无法访问商店，可下载离线 .crx 文件拖入扩展管理页面。

### 第二步：新建代理情景模式 (Proxy Profile)
1. 点击插件图标，进入 **选项 (Options)** 页面。
2. 在左侧菜单点击 **新建情景模式 (New Profile)**。
3. 输入名称（例如：Clash本地代理），类型选择 **代理情景模式 (Proxy Profile)**。
4. **填写代理服务器参数**：
   * **协议 (Scheme)**：选择 HTTP 或 SOCKS5。
   * **代理服务器 (Server)**：填写 127.0.0.1。
   * **端口 (Port)**：填写你的客户端监听端口（Clash 默认为 7890 或 7897；v2rayN 默认为 10809 或 10808）。
5. 点击左侧 **保存变更 (Apply Changes)**。

---

## 3. 配置自动切换 (Auto Switch) 与 GFWList 规则

为了实现“访问国外网站才走代理，国内网站自动直连”，需要配置自动切换情景模式：

1. 点击左侧 **新建情景模式**，名称填 自动分流，类型选择 **自动切换情景模式 (Switch Profile)**。
2. **添加在线规则列表 (Rule List)**：
   * 点击 **添加规则列表 (Add rule list)**。
   * 规则列表格式选择 **AutoProxy**。
   * 规则列表网址粘贴公开的 GFWList 地址。
   * 将该规则列表对应的情景模式设置为刚才新建的 **Clash本地代理**。
3. **设置默认规则**：将底部的“默认情景模式 (Default)”设置为 **[直接连接] (Direct)**。
4. 点击 **保存变更**，并在插件右上角点击 **立即更新列表**。

---

## 4. 日常使用与域名单线切换

设置完成后，点击浏览器右上角的 ZeroOmega 圆形图标，将其模式选择为 **自动分流**。

* 当你打开 baidu.com 时，插件判断属于国内域名，图标显示为绿色（直连）。
* 当你打开 google.com 时，插件匹配到 GFWList 规则，自动将请求转发给本地 Clash，图标显示为蓝色（代理）。
* **手动添加规则**：如果遇到某个未被收录的国外冷门网站无法打开，点击插件图标，在当前域名后直接将其切换为“Clash本地代理”即可永久记住设置。
