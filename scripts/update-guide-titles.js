import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const guidesDir = path.resolve(__dirname, '../src/content/guides');

const guideTitlesMap = {
  'scientific-internet-beginner-guide.md': {
    title: '科学上网新手入门指南：从零开始选择梯子与客户端配置',
    description: '专为零基础小白打造的科学上网新手入门全景指南。涵盖机场原理、客户端选购、订阅链接导入与极速上网避坑方案。',
    keywords: ['科学上网新手入门', '机场怎么用', '小白买梯子避坑']
  },
  'how-to-buy-ladder-without-pitfalls.md': {
    title: '小白买梯子避坑实测指南：零基础如何挑选高稳定防跑路机场',
    description: '揭秘市面上几块包年、无限流量的跑路机场陷阱。为你提供真实跑分测速、退款机制分析与防失联备用方案。',
    keywords: ['买梯子避坑', '便宜稳定机场', '防跑路机场']
  },
  'airport-subscription-link-import-tutorial.md': {
    title: '机场订阅链接获取与极速导入保姆级教程：全平台通用',
    description: '手把手教你如何复制机场订阅 URL 链接并一键导入到 Clash、Shadowrocket、Sing-box 等常用客户端。',
    keywords: ['订阅链接导入', '机场订阅获取', 'Clash订阅导入']
  },
  'clash-verge-rev-beginner-tutorial.md': {
    title: 'Clash Verge Rev 电脑端极速订阅与 TUN 模式开启教程',
    description: 'Windows 与 Mac 平台最强开源代理客户端 Clash Verge Rev 图文保姆级教程。支持一键导入与 TUN 模式设置。',
    keywords: ['Clash Verge Rev教程', 'Clash Verge配置', 'TUN模式开启']
  },
  'shadowrocket-ios-node-setup.md': {
    title: 'Shadowrocket (小火箭) iOS 最全节点导入与扫码订阅指南',
    description: 'iPhone 与 iPad 用户必备科学上网工具小火箭 Shadowrocket 的安装、美区 Apple ID 获取、节点扫码导入与规则分流方案。',
    keywords: ['Shadowrocket教程', '小火箭节点导入', 'iOS科学上网']
  },
  'sing-box-cross-platform-tutorial.md': {
    title: 'Sing-box 跨平台全自动订阅与下一代协议配置教程',
    description: '下一代通用代理通用客户端 Sing-box 全平台（iOS/Android/Windows/Mac）自动配置与 Hysteria2 / TUIC v5 协议导入指南。',
    keywords: ['Sing-box教程', 'Sing-box配置', 'Hysteria2协议']
  },
  'v2rayn-windows-node-import.md': {
    title: 'v2rayN Windows 客户端节点导入与路由分流避坑指南',
    description: 'Windows 经典代理软件 v2rayN 5.0+ 版本的最新使用指南。包含 VLESS、Trojan、Shadowsocks 节点极速导入教程。',
    keywords: ['v2rayN教程', 'v2rayN节点导入', 'Windows科学上网']
  },
  'stash-ios-mac-setup-guide.md': {
    title: 'Stash (iOS / Mac) 规则分流与极速节点配置全攻略',
    description: '适配 iOS 与 macOS 的高性能 Clash 规则代理工具 Stash 保姆级教程。支持按应用分流与游戏加速体验。',
    keywords: ['Stash教程', 'Stash配置指南', 'Mac科学上网']
  },
  'surfboard-android-setup-guide.md': {
    title: 'Surfboard (冲浪板) Android 安卓端一键导入订阅教程',
    description: '安卓手机极其推荐的冲浪板 Surfboard 客户端上手指南。界面美观、极低耗电，轻松一键导入机场节点。',
    keywords: ['Surfboard教程', '冲浪板安卓配置', 'Android科学上网']
  },
  'clash-meta-sing-box-kernel-switch.md': {
    title: 'Clash Meta (Mihomo) 内核切换与性能优化高级指南',
    description: '深入了解 Mihomo / Clash Meta 开源内核优势。解决旧版 Clash 停止维护后的内核升级与性能调优技巧。',
    keywords: ['Clash Meta内核', 'Mihomo配置', '代理性能优化']
  },
  'youtube-4k-no-frame-drop-guide.md': {
    title: 'YouTube 4K/8K 视频秒开不卡顿与丢包率优化实测方案',
    description: '解决晚高峰看油管视频频繁缓冲降画质问题。教你选择低丢包 IPLC 专线节点并调整浏览器 QUIC / UDP 参数。',
    keywords: ['YouTube 4K秒开', '油管卡顿优化', '丢包率优化']
  },
  'chatgpt-ip-blocked-solution-guide.md': {
    title: 'ChatGPT 提示 Access Denied / 1020 IP 被封终极解决方案',
    description: '详细分析 OpenAI 封锁数据中心 IP 机制。提供海外原生住宅 IP 节点推荐与 Cloudflare Turnstile 人机验证绕过技巧。',
    keywords: ['ChatGPT IP被封', 'Access Denied解决', '原生IP推荐']
  },
  'tiktok-region-lock-bypass-guide.md': {
    title: 'TikTok 拔卡限制与跨区免拔卡观看保姆级实操教程',
    description: '免拔手机 SIM 卡顺畅观看国际版 TikTok 的最新破解方法。配合 Shadowrocket 与 Quantumult X 伪装节点环境。',
    keywords: ['TikTok免拔卡', 'TikTok跨区教程', 'TikTok解封']
  },
  'browser-transparent-proxy-guide.md': {
    title: '浏览器透明代理与 SwitchyOmega 插件分流规则配置',
    description: 'Chrome / Edge 浏览器代理插件 SwitchyOmega 使用全解。配合本地代理软件实现国内外流量智能自动分流。',
    keywords: ['SwitchyOmega配置', '浏览器代理插件', '自动分流规则']
  },
  'peak-hours-twitter-youtube-lag-fix.md': {
    title: '晚高峰刷 Twitter / 看油管卡顿分析与专线加速解决技巧',
    description: '为什么晚上 8 点到 11 点科学上网特别卡？解析国内国际出口骨干网拥堵原因及 BGP / IPLC 专线解决实测。',
    keywords: ['晚高峰卡顿解决', 'Twitter图片加载慢', '专线加速机场']
  },
  'subscription-update-failed-troubleshooting.md': {
    title: '机场订阅更新失败与节点超时排查排坑手册',
    description: '当客户端提示 Subscription Update Failed 或拉取不到节点时，依次检查域名解析、系统时间、墙阻断与节点防封端口。',
    keywords: ['订阅更新失败', '节点超时排查', '机场排坑手册']
  },
  'node-timeout-high-ping-fix-guide.md': {
    title: '节点显示超时、延迟极高与 DNS 污染修复全指南',
    description: '全面解答“测速显示 -1 ms 或 9999 ms”的原因。修复系统 DNS 泄露与客户端本地代理监听端口冲突。',
    keywords: ['节点显示超时', '延迟极高修复', 'DNS污染修复']
  },
  'multiple-devices-one-subscription-share.md': {
    title: '多设备共享单订阅账号与家庭全端代理方案',
    description: '教你如何让手机、电脑、平板、TV 电视盒同时共用一个机场订阅套餐，合理利用设备连接数与月流量分配。',
    keywords: ['多设备共享订阅', '家庭科学上网', '局域网共享代理']
  },
  'airport-flow-reset-and-package-guide.md': {
    title: '机场流量重置规则、套餐周期选择与续费避坑指南',
    description: '通俗解释“自然月重置”与“账单月重置”区别，计算小流量与大流量套餐性价比，规避扣费陷阱。',
    keywords: ['机场流量重置', '套餐周期选择', '续费避坑指南']
  },
  'privacy-security-anti-correlation-guide.md': {
    title: '科学上网隐私安全与网络追踪防关联保护守则',
    description: '跨境安全防护指南：了解 ISP 运营商监测、DNS 泄露、WebRTC 泄露原理，保护科学上网账号与个人真实身份隐私。',
    keywords: ['科学上网隐私安全', '防关联保护', 'DNS泄露检测']
  }
};

function updateGuideTitles() {
  for (const [filename, info] of Object.entries(guideTitlesMap)) {
    const fullPath = path.join(guidesDir, filename);
    if (!fs.existsSync(fullPath)) continue;

    let content = fs.readFileSync(fullPath, 'utf8');

    // Replace frontmatter title, description, keywords
    content = content.replace(/title:\s*".*?"/, `title: "${info.title}"`);
    content = content.replace(/description:\s*".*?"/, `description: "${info.description}"`);
    content = content.replace(/keywords:\s*\[.*?\]/, `keywords: [${info.keywords.map(k => `"${k}"`).join(', ')}]`);

    fs.writeFileSync(fullPath, content, 'utf8');
    console.log(`Updated title for guide: ${filename}`);
  }
}

updateGuideTitles();
console.log('Guide titles translated successfully!');
