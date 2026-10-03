---
title: "macOS 开启 TUN 模式与系统代理设置教程：解决终端与软件网络不走代理"
description: "解决 Mac 系统终端 iTerm2、Brew、Git 与特定软件不走 Clash 代理的问题。详细教程涵盖 macOS 权限授权、TUN 模式挂载与环境变量配置。"
pubDate: "2026-09-19"
updatedDate: "2026-09-20"
category: "客户端教程"
tags: ["macOS代理", "Mac TUN模式", "终端代理", "Mac科学上网", "客户端教程"]
keywords: ["Mac开启TUN模式", "macOS系统代理", "Mac终端走代理", "Mac HelperTool授权"]
search_synonyms: ["Mac Clash终端不走代理", "Mac代理权限设置", "macOS网络扩展"]
featured: true
---

# macOS 开启 TUN 模式与系统代理设置教程：解决终端与软件网络不走代理

在苹果 macOS 系统上使用代理软件时，许多开发者经常遇到这样一个困扰：虽然浏览器开启系统代理后能打开 Google，但在终端 (Terminal / iTerm2) 中执行 git push、brew install 或者在 Docker 中拉取镜像时，依然频繁提示 Connection refused。

这是因为 macOS 的系统代理只针对遵循 HTTP / HTTPS 代理规范的应用生效，而命令行与底层 socket 连接需要靠 **TUN 虚拟网卡** 或 **环境变量** 强制接管。

---

## 一、macOS 开启系统代理与基础设置

1. 打开 Clash Verge Rev 或 Clash Nyanpasu 的 Mac 版。
2. 开启 **System Proxy (系统代理)**。此时软件会自动在 macOS 系统设置 -> 网络 -> 代理 中勾选 HTTP 和 HTTPS 代理端口 (7890)。
3. 在 Chrome 或 Safari 浏览器中测试访问外网是否正常。

---

## 二、开启 TUN 模式接管全盘与终端流量 (推荐方案)

TUN 模式会在 macOS 内核中挂载一个 utun 虚拟网卡，把所有网卡级别的 TCP/UDP 数据包重定向给代理软件：

1. 打开 Clash 客户端设置页面，找到 **TUN Mode** 开关。
2. 点击开启时，macOS 会弹出系统提示需要管理员密码以安装 **Privileged Helper Tool (提权辅助工具)**，输入 Mac 开机密码授权。
3. **网络扩展许可**：在 macOS 13 (Ventura) 或 14 (Sonoma) 系统中，进入 系统设置 -> 隐私与安全性 -> 允许拓展加载，勾选允许代理组件运行。
4. 开启 TUN 模式后，无需对终端做任何额外配置，终端命令行与所有后台应用将自动无缝走专线代理。

---

## 三、为终端命令行临时配置环境变量 (替代方案)

如果你不希望开启全盘 TUN 模式，也可以仅在终端配置文件中加入代理环境变量，在终端执行快捷 alias 命令即可实现当前命令行窗口与代理端口的连通。
