---
title: "订阅转换 (Subconverter) 在线工具使用教程：SSR/V2Ray/Clash/Sing-box 互相转换"
description: "Subconverter 订阅转换工具全面教程。教你将 SSR、v2rayN、Shadowrocket 链接一键转换为 Clash YAML 或 Sing-box JSON 格式。"
pubDate: "2026-09-19"
updatedDate: "2026-09-20"
category: "客户端教程"
tags: ["订阅转换", "Subconverter", "Clash转换", "Sing-box", "客户端教程"]
keywords: ["Subconverter教程", "订阅转换在线", "V2Ray转Clash", "Sing-box订阅转换"]
search_synonyms: ["机场节点转换", "Clash订阅在线转换", "SSR转Clash格式"]
featured: true
---

# 订阅转换 (Subconverter) 在线工具使用教程：SSR/V2Ray/Clash/Sing-box 互相转换

不同科学上网代理客户端使用的配置文件语法存在巨大差异。例如，旧版 v2rayN 使用 Base64 编码字符串，Clash 采用 YAML 语法，而 Sing-box 则采用 JSON 结构。如果你购买的机场只提供了旧版通用链接，就需要借助 **Subconverter (订阅转换工具)** 将其转换为对应客户端能识别的格式。

本文将介绍订阅转换的技术原理、使用流程与隐私安全避坑原则。

---

## 1. 订阅转换的核心原理与语法对照

Subconverter 会拉取原始链接中的节点服务器参数（包括服务器地址、端口、密钥、传输协议），并结合预设的分流规则模板，将其重新渲染打包为目标软件的格式。

| 目标客户端 | 所需文件格式 | 关键转换配置选项 |
| :--- | :--- | :--- |
| **Clash / Clash Verge Rev** | YAML 格式 | 输出类型选择 Clash 或 Clash Meta |
| **Sing-box** | JSON 格式 | 输出类型选择 Sing-box |
| **Shadowrocket (小火箭)** | Base64 / URL | 输出类型选择 Shadowrocket |
| **Quantumult X** | Conf / Snippet | 输出类型选择 QuanX |

---

## 2. 在线订阅转换的三步实操流程

1. **获取原始订阅**：登录机场后台，复制原始的通用订阅 URL。
2. **填写转换参数**：
   * 打开可信的订阅转换前端界面（如 sub.id9.cc 或自建 Subconverter 前端）。
   * 在订阅链接输入框中粘贴原始 URL。
   * 在客户端类型下拉菜单中选择你的目标软件（如 Clash）。
   * 在远程规则集中选择预设的规则模板（如 ACL4SSR 基础版 或 默认规则）。
3. **生成并复制新链接**：点击生成订阅链接，复制新生成的转换 URL，并填入客户端中拉取节点。

---

## 3. 订阅转换隐私安全与自建托管建议

* **防范 Token 泄露**：公共订阅转换服务器的后台运营者理论上有能力获取你的订阅 Token。请勿在不知名的第三方小网站进行转换。
* **优先选择自建 Subconverter**：对隐私要求高的用户，建议利用 Docker 在本地电脑或个人 VPS 上自建 Subconverter 服务，彻底消除 Token 被盗用的风险。
