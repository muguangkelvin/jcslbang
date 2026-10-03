---
title: "Sing-box JSON 配置文件手动修改指南：出站入站路由高级编辑"
description: "深入剖析 Sing-box 的 JSON 配置文件四大核心结构（inbounds, outbounds, route, dns），手把手教你编写自定义路由规则与协议出站。"
pubDate: 2024-04-05
category: "clients"
tags: ["Sing-box", "JSON配置", "路由规则", "进阶教程", "客户端教程"]
---

与 Clash 的 YAML 语法不同，**Sing-box** 采用了更为严格且结构化的 **JSON 格式** 来管理其所有网络配置。对于高级玩家和自建节点用户来说，学会手写和修改 Sing-box 的 config.json 文件是实现个性化分流与防封锁的必修课。

本文将为你深度拆解 Sing-box JSON 配置文件的底层语法结构与实战修改技巧。

---

## Sing-box config.json 的四大核心顶层模块

每一个标准的 Sing-box 配置文件都由以下 4 个最基础的 JSON 对象组成：

```
config.json 顶级结构拆解：
{
  "log": { ... },       // 日志级别与输出路径
  "dns": { ... },       // 本地与远程加密 DNS 解析规则
  "inbounds": [ ... ],  // 本地监听端口 (Mixed / TUN / SOCKS5)
  "outbounds": [ ... ], // 节点服务器与选路分组 (VLESS / Hy2 / Selector)
  "route": { ... }      // 域名/IP 分流规则逻辑
}
```

---

## 模块一：inbounds 入站配置（开启 TUN 透明代理）

入站模块定义了 Sing-box 如何接收本地设备的网络流量：

```json
"inbounds": [
  {
    "type": "tun",
    "tag": "tun-in",
    "interface_name": "singbox-tun",
    "inet4_address": "172.19.0.1/30",
    "auto_route": true,
    "strict_route": true,
    "sniff": true
  }
]
```
- **auto_route: true**：自动将系统默认网关流量重定向到 Sing-box，实现全局透明代理。
- **sniff: true**：开启域名嗅探，自动从 TLS ClientHello 中提取真实域名进行规则匹配。

---

## 模块二：outbounds 出站配置与节点分组

出站定义了数据包发往哪里。以下是一个经典的智能选路出站组示例：

```json
"outbounds": [
  {
    "type": "selector",
    "tag": "节点选择",
    "outbounds": ["香港 01-IPLC", "日本 02-BGP", "自动选择"]
  },
  {
    "type": "vless",
    "tag": "香港 01-IPLC",
    "server": "hk.example.com",
    "server_port": 443,
    "uuid": "your-uuid-here",
    "tls": {
      "enabled": true,
      "server_name": "hk.example.com"
    }
  },
  {
    "type": "direct",
    "tag": "direct"
  }
]
```

---

## 模块三：route 域名与 IP 分流规则

在 route 模块中指定具体流量走哪一个出站策略：

```json
"route": {
  "rules": [
    {
      "geosite": ["private", "cn"],
      "outbound": "direct"
    },
    {
      "geosite": ["netflix", "youtube"],
      "outbound": "节点选择"
    },
    {
      "geoip": ["cn"],
      "outbound": "direct"
    }
  ],
  "auto_detect_interface": true
}
```

---

## Sing-box JSON 修改常见问题 (FAQ)

### Q1：为什么编辑 JSON 后 Sing-box 报 syntax error 错？
JSON 格式非常严谨，**最后一个元素后面绝对不能带多余的逗号**，且属性名必须用双引号包裹。建议使用 VS Code 或 JSONLint 工具进行在线语法校验。

### Q2：Sing-box v1.8+ 升级后某些旧 JSON 字段不生效了？
Sing-box 更新迭代较快。例如 v1.8 之后 geoip 和 geosite 正式废弃，推荐改用全新的 **rule_set (规则集)** 独立编译文件导入。

---

## Sing-box JSON 高级编辑总结

掌握 Sing-box 的 JSON 结构后，你便拥有了对网络流量的终极控制权。不管是自定义 Fake-IP 域名段，还是实现多机场线路负载均衡分流，都能通过精简手写 JSON 轻松做到。