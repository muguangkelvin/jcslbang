---
title: "Quantumult X (圈X) iOS 高级教程：分流规则、脚本重写与订阅"
description: "iOS 端顶级代理软件 Quantumult X (圈X) 高级图文教程。演示节点订阅添加、Rewrite 脚本注入、MITM 证书安装与规则重写。"
pubDate: "2026-09-19"
updatedDate: "2026-09-20"
category: "客户端教程"
tags: ["Quantumult X", "圈X教程", "iOS代理", "Rewrite脚本", "客户端教程"]
keywords: ["Quantumult X教程", "圈X使用指南", "QuanX订阅导入", "QuanX Rewrite脚本"]
search_synonyms: ["圈X怎么导入节点", "Quantumult X证书安装", "iOS圈X配置"]
featured: true
---

# Quantumult X (圈X) iOS 高级教程：分流规则、脚本重写与订阅

在 Apple iOS 平台上，**Quantumult X (简称 圈X)** 凭借其强大的网络重写 (Rewrite) 能力、极其灵活的自定义策略组以及优异的吞吐性能，被誉为 iOS 代理软件的“终极神器”。

本文将演示 Quantumult X 的节点导入、MITM 证书安装与规则配置全流程。

---

## 一、添加节点订阅与策略组配置

1. 打开 Quantumult X，点击右下角 **小风车图标** 进入设置菜单。
2. 找到 **节点 (Server) -> 引用 (Resource)**，点击右上角加号 (+)。
3. 在 URL 框中粘贴机场提供的 Quantumult X 专用订阅链接，填写别名后点击保存。
4. 回到首页，按住中间的展开按钮，可以手动在不同节点与自定义策略组之间自由切换。

---

## 二、配置 MITM 根证书与 Rewrite 脚本重写

要使用圈X去除应用广告或自动执行脚本，必须开启 **MITM (中间人解密)** 权限：

1. 在设置中找到 **MITM** 菜单，点击 **生成证书 (Generate Certificate)**。
2. 点击 **安装证书**，系统会自动跳转至 iOS 设置，在 通用 -> 关于本机 -> 证书信任设置 中，找到 Quantumult X 根证书并开启“完全信任”。
3. 在 **Rewrite (重写)** 菜单中添加远程规则集，即可实现针对复杂网页与 App 流量的精准过滤。
