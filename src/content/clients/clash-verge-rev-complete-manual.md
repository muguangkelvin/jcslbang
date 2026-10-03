---
title: "Clash Verge Rev 完整使用手册：功能设置、脚本重写与内核更新"
description: "Clash Verge Rev 全面功能调优使用手册。涵括系统代理开关、TUN 模式挂载、Mihomo 内核切换、自定义 Script 拓展与日常维护。"
pubDate: "2026-09-19"
updatedDate: "2026-09-20"
category: "客户端教程"
tags: ["Clash Verge Rev", "使用手册", "Mihomo", "TUN模式", "客户端教程"]
keywords: ["Clash Verge Rev使用教程", "Verge功能设置", "Mihomo内核升级", "Clash Verge调优"]
search_synonyms: ["Clash Verge怎么设置", "Verge Rev完整手册", "Clash Verge参数说明"]
featured: true
---

# Clash Verge Rev 完整使用手册：功能设置、脚本重写与内核更新

Clash Verge Rev 是目前 Windows、macOS 与 Linux 平台上最受欢迎的现代化代理客户端。它不仅继承了直观的 GUI 界面，还深度整合了 Mihomo 内核的高级分流特性。

本手册将从基础操作到进阶配置，为你全面拆解这款软件的核心功能模块。

---

## 一、主界面核心菜单与基础配置

1. **代理 (Proxies)**：
   * **运行模式**：提供了 Rule (规则分流)、Global (全局代理) 与 Direct (直接连接) 三种模式。
   * **延迟测试**：点击右上角闪电图标可一键对当前配置下的所有节点发起 HTTP 延迟测速。
2. **订阅 (Profiles)**：
   * 支持通过远程 URL 导入或本地 YAML 拖入添加配置。
   * 鼠标右键点击订阅卡片，可设置自动定时更新周期（建议设置为 24 小时）。

---

## 二、系统代理与 TUN 模式极速切换

* **系统代理 (System Proxy)**：开启后软件会自动写入 Windows 系统的网络代理设置，接管浏览器和大部分常见软件的网页访问。
* **TUN 模式 (TUN Mode)**：对于命令行、Git 终端、Steam 客户端等不遵循系统代理的应用，须在设置中安装服务模式并开启 TUN 模式。TUN 模式将挂载 Wintun 虚拟网卡，实现全盘数据包级的接管。

---

## 三、扩展脚本 (Merge Script) 进阶规则重写

Clash Verge Rev 允许用户在不直接修改机场原订阅 YAML 的情况下，通过内建的 JavaScript 脚本对规则进行无缝重写：

1. 进入 订阅 (Profiles) 页面，选择顶部的 扩展脚本 (Scripts)。
2. 点击新建脚本，选择自定义 JS 逻辑：将个人自定义直连和代理规则注入在机场原始规则最前端。
3. 将脚本绑定至对应的机场订阅，每次拉取更新时系统会自动应用该拓展规则。

---

## 四、内核更新与常见故障自检

进入设置页面，可以检查并升级底层的 Mihomo (Clash Meta) 内核。遇到节点无法连接或启动报错时，建议先检查端口 7890 是否被其他代理软件占用，或尝试在系统服务管理中重启 clash_verge_service 服务。
