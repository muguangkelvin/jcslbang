---
title: "Sing-box GUI 桌面端配置指南：极简跨平台科学上网客户端"
description: "全面系统地讲解 Sing-box 图形化桌面客户端 (GUI.for.Sing-Box / Sing-Box Launcher) 在 Windows 与 macOS 上的安装、订阅导入及 TUN 模式设置。"
pubDate: 2024-04-04
category: "clients"
tags: ["Sing-box", "GUI客户端", "Windows代理", "Mac代理", "客户端教程"]
---

随着内核功能的日益强大，很多用户希望能像使用 Clash 那样在电脑桌面端直观地通过**图形界面 (GUI)** 来操作 Sing-box。社区推出了诸如 **GUI.for.Sing-Box** 与 **Sing-Box Launcher** 等高颜值图形化工具。

本文将为你详细演示如何在 Windows 和 macOS 电脑上安装部署 Sing-box GUI 桌面端，并导入订阅开启极速代理。

---

## 主流 Sing-box 桌面 GUI 客户端选型对比

目前支持 Windows 与 macOS 的主流 Sing-box 图形客户端对比：

| 客户端名称 | 界面风格 | 软件内核 | 内存占用 | 核心优势特点 |
| :--- | :--- | :--- | :--- | :--- |
| **GUI.for.Sing-Box** | Vue3 现代化 UI | Sing-box 原生内核 | 约 60 MB | 支持可控节点分组、手动规则选择与仪表盘 |
| **Sing-Box Launcher** | 极简原生控制台 | Sing-box 原生内核 | 约 30 MB | 极致轻量，启动极快，纯命令行风格扩展 |
| **Electron-Sing-Box** | 跨平台 Electron | Sing-box 外挂内核 | 约 120 MB | 支持全可视化系统托盘图标控制 |

---

## 步骤一：下载与安装图形界面程序

1. 访问 GitHub 官方 Release 页面下载对应的安装包：
   - **Windows 用户**：下载 .exe 安装程序或解压即用的 .zip 便携包。
   - **macOS 用户**：下载支持 Apple Silicon (M1/M2/M3) 或 Intel 芯片的 .dmg 镜像文件。
2. 安装后打开软件，系统若弹窗提示 **“防火墙安全拦截”** 或 **“网络访问授权”**，请务必全选允许。

---

## 步骤二：导入机场 Sing-box 订阅与配置

```mermaid
flowchart LR
    A[复制机场 Sing-box 订阅 URL] --> B[打开 GUI 客户端配置中心]
    B --> C[添加远程 Profiles 配置]
    C --> D[粘贴 URL 并设置自动更新周期]
    D --> E[拉取配置成功并更新出站节点]
```

1. 在机场后台复制 **Sing-box 格式的 JSON 订阅链接**（若机场仅提供 Clash 链接，可以先通过在线转换服务转为 Sing-box 格式）。
2. 打开 GUI.for.Sing-Box，点击左侧边栏的 **“配置” (Profiles)**。
3. 点击右上角 **“新建配置”**，类型选择 **Remote (远程)**。
4. 粘贴你的 Sing-box 订阅地址，并开启“24 小时定时更新”选项，点击保存并下载。

---

## 步骤三：开启 TUN 透明代理模式

为了让电脑上的全部软件（包含终端命令行、电竞游戏及 UWP 应用）都能自动走代理：

1. 在软件首页面板中，找到 **“运行模式” (Run Mode)**。
2. 勾选切换为 **TUN 模式**。
3. 点击 **“启动代理” (Start Proxy)** 主开关。
4. 首次在 Mac 上开启 TUN 模式时，macOS 会要求输入锁屏管理员密码授权创建虚拟网卡。

---

## Sing-box 桌面 GUI 常见问题 (FAQ)

### Q1：为什么 GUI 客户端启动后右下角没有显示节点 Ping 值？
因为 Sing-box 默认不自动后台持续 Ping 节点。在主页节点列表顶部点击 **“批量测试延迟” (Delay Test)** 按钮，即可刷新当前选中节点的 TCP/ICMP 延迟。

### Q2：开启 TUN 模式后电脑无法解析局域网打印机怎么办？
在软件【设置 -> DNS】中，将局域网私网地址段（如 192.168.0.0/16 及 10.0.0.0/8）添加至 **Direct (直连)** 路由规则中即可绕过 TUN 网卡。

---

## Sing-box 桌面 GUI 配置总结

通过配置 GUI.for.Sing-Box 等图形客户端，Windows 与 macOS 用户可以摆脱复杂的 JSON 命令行操作，以最直观的方式享受 Sing-box 内核带来的低延迟与极速分流体验。