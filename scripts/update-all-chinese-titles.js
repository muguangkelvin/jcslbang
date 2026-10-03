const fs = require('fs');
const path = require('path');

const contentDir = path.resolve(__dirname, '../src/content');

const chineseTitles = {
  // Guides
  'scientific-internet-beginner-guide': '科学上网新手入门指南：从零开始选择梯子与客户端配置',
  'how-to-buy-ladder-without-pitfalls': '小白买梯子避坑指南：零基础挑选稳定翻墙机场法则',
  'airport-subscription-link-import-tutorial': '机场订阅链接极速导入教程：主流客户端一键同步全解',
  'clash-verge-rev-beginner-tutorial': 'Clash Verge Rev 新手入门图文教程：从安装到 TUN 模式开启',
  'shadowrocket-ios-node-setup': 'Shadowrocket (小火箭) iOS 新手配置教程：苹果手机节点导入',
  'sing-box-cross-platform-tutorial': 'Sing-box 跨平台全自动订阅教程：下一代通用内核配置指南',
  'v2rayn-windows-node-import': 'v2rayN Windows 电脑端新手保姆级教程：从节点导入到规则分流',
  'stash-ios-mac-setup-guide': 'Stash (iOS/Mac) 新手配置教程：Clash 兼容客户端极速上手',
  'surfboard-android-setup-guide': 'Surfboard (冲浪板) 安卓配置教程：Android 极速科学上网',
  'clash-meta-sing-box-kernel-switch': 'Clash Meta 与 Sing-box 双内核切换教程：恶劣网络环境提速指南',
  'youtube-4k-no-frame-drop-guide': 'YouTube 4K/8K 视频流畅播放指南：告别卡顿与画质降级',
  'chatgpt-ip-blocked-solution-guide': 'ChatGPT IP 被封/1020 报错解决指南：切换原生 IP 突破限制',
  'tiktok-region-lock-bypass-guide': 'TikTok 换区免拔卡破解指南：全平台观看海外短视频教程',
  'browser-transparent-proxy-guide': '浏览器分流与 SwitchyOmega 配置教程：让国内流量直连国外走代理',
  'peak-hours-twitter-youtube-lag-fix': '晚高峰访问 Twitter/YouTube 频繁卡顿优化指南：IPLC 专线提速方案',
  'subscription-update-failed-troubleshooting': '机场订阅更新失败排查指南：域名污染与网络超时解决方案',
  'node-timeout-high-ping-fix-guide': '节点全部超时与延迟高排查指南：系统时间同步与 DNS 修复',
  'multiple-devices-one-subscription-share': '多设备共享一个机场订阅指南：手机/电脑/平板同时在线设置',
  'airport-flow-reset-and-package-guide': '机场流量重置时间与套餐规则详解：月付/季付/按量计费选购建议',
  'privacy-security-anti-correlation-guide': '科学上网隐私安全与防关联指南：保护个人信息与通信安全',

  // Clients
  'clash-verge-rev-complete-manual': 'Clash Verge Rev 完整使用手册：功能设置、脚本重写与内核更新',
  'clash-for-windows-migration-guide': 'Clash for Windows 停更迁移指南：无缝无痛升级至 Clash Verge Rev',
  'shadowrocket-install-shadow-id-guide': 'Shadowrocket 安装与美区 Apple ID 获取教程：正版小火箭下载',
  'sing-box-gui-windows-mac-guide': 'Sing-box GUI 桌面端配置指南：极简跨平台科学上网客户端',
  'v2rayn-v7-latest-version-guide': 'v2rayN v7 最新版本使用教程：新版界面、路由规则与 Hysteria2',
  'quantumult-x-圈X-setup-guide': 'Quantumult X (圈X) iOS 高级教程：分流规则、脚本重写与订阅',
  'stash-clash-compatible-ios-guide': 'Stash iOS 客户端进阶教程：完美兼容 Clash 配置的苹果神器',
  'surge-mac-ios-premium-setup-guide': 'Surge Mac/iOS 顶级配置教程：网络调试与高级分流全解析',
  'surfboard-android-sub-management': 'Surfboard 安卓冲浪板订阅管理指南：多机场自动分流配置',
  'clash-for-android-cfa-guide': 'Clash for Android (CFA) 保姆级教程：安卓端订阅导入与 TUN 模式',
  'v2rayng-android-client-guide': 'v2rayNG 安卓客户端入门指南：V2Ray / Trojan 节点一键导入',
  'shadowrocket-rule-script-rewrite': 'Shadowrocket 小火箭分流规则与脚本重写：去广告与智能分流',
  'sing-box-mobile-ios-android': 'Sing-box 移动端 iOS/Android 极速指南：下一代通用内核体验',
  'clash-verge-script-override-guide': 'Clash Verge Rev 扩展脚本 (Script) 配置教程：自定义规则重写',
  'mac-clash-nyanpasu-guide': 'Clash Nyanpasu Mac/Windows 教程：颜值最高的新一代代理客户端',
  'openwrt-passwall-openclash-router': 'OpenWrt 路由器插件 PassWall 与 OpenClash 配置教程：全家设备透明代理',
  'windows-tun-mode-global-proxy': 'Windows 电脑开启 TUN 虚拟网卡模式教程：接管全局应用网络流量',
  'mac-tun-mode-system-proxy-setup': 'macOS 开启 TUN 模式与系统代理设置教程：解决终端与软件网络不走代理',
  'android-tv-box-clash-setup': '安卓电视盒与电视墙安装 Clash 教程：大屏观看 Netflix / YouTube 4K',
  'clash-meta-hysteria2-protocol': 'Clash Meta 内核 Hysteria2 (Hy2) 协议配置指南：恶劣弱网强制提速',
  'proxy-client-speed-test-comparison': '全平台 8 大代理客户端性能测速对比：内存占用与传输速率实测',
  'client-sub-converter-online-guide': '订阅转换 (Subconverter) 在线工具使用教程：SSR/V2Ray/Clash/Sing-box 互相转换',
  'shadowrocket-sub-auto-update-setting': 'Shadowrocket 小火箭自动更新订阅设置教程：保持节点列表最新',
  'v2rayn-routing-rule-cn-direct': 'v2rayN 路由规则配置教程：开启 CN 域名直连与广告拦截',
  'sing-box-json-config-custom-edit': 'Sing-box JSON 配置文件手动修改指南：出站入站路由高级编辑',

  // Lines
  'iplc-dedicated-line-airport-guide': 'IPLC 国际专线机场深度科普：物理内网点对点架构与 0 丢包体验',
  'iepl-border-line-vs-iplc-guide': 'IEPL 边境专线 vs IPLC 国际专线区别全解：延迟丢包与稳定性对比',
  'bgp-transit-vs-direct-lines': 'BGP 多线中转与公网直连节点区别详解：为什么晚高峰中转不卡顿？',
  'game-acceleration-low-latency-ladder': '外服游戏低延迟加速梯子推荐：Steam/EA/Epic 联机降低丢包',
  'streaming-unlock-native-ip-guide': '100% 原生双 ISP 节点流媒体解锁指南：Netflix / Disney+ 4K 播放',
  'chatgpt-claude-ai-dedicated-lines': 'ChatGPT 与 Claude 3.5 AI 专属专线推荐：规避 Access Denied 报错',
  'hk-jp-sg-us-node-comparison': '香港/日本/新加坡/美国节点横向对比：不同业务场景节点挑选策略',
  'hy2-tuic-udp-protocol-lines': 'Hysteria2 与 TUIC v5 UDP 协议专线解析：弱网对抗与高并发提速',
  'cross-border-ecommerce-static-ip': '跨境电商亚马逊/eBay 静态独享 IP 节点推荐：防止店铺关联封号',
  'high-speed-4k-8k-video-lines': '4K/8K 极速视频专线机场推荐：高单线程带宽与流畅拖拽进度条',
  'anti-blocking-failover-backup-lines': '高抗封锁与故障自动转移 (Failover) 专线线路解析：敏感时期保障不断网',
  'low-multiplier-vs-high-multiplier': '机场节点低倍率 vs 高倍率机制详解：如何防止流量被扣坑？',
  'games-console-ps5-switch-xbox': '主机游戏 PS5 / Nintendo Switch / Xbox 代理挂载教程：畅快下载与联机',
  'financial-trading-crypto-low-ping': '加密货币金融交易低延迟专线推荐：币安/OKX 插针秒撤单极速体验',
  'enterprise-remote-work-lines': '企业跨境办公与远程协作专线推荐：GitHub/Slack/Zoom 稳定连接',

  // FAQ
  'faq-beginner-standard-for-buying': '新手买梯子四大标准：从线路选择、月付测试到备用防跑路',
  'faq-monthly-vs-annual-payment-risk': '买机场月付好还是年付好？年付大额折扣风险与避坑建议',
  'faq-iplc-bgp-difference-explained': 'IPLC 专线与 BGP 中转有什么区别？深度搞懂机场网络线路',
  'faq-clash-subscription-update-error': 'Clash 订阅更新报错提示 Format Error 或 Network Error 怎么办？',
  'faq-shadowrocket-timeout-issue-fix': '小火箭 Shadowrocket 节点全部超时/测试延迟 -1ms 解决教程',
  'faq-sing-box-config-parse-error': 'Sing-box 提示 Config Parse Error 配置文件解析失败修复方法',
  'faq-v2rayn-service-start-failed': 'v2rayN 提示服务启动失败或系统代理无法勾选排查步骤',
  'faq-peak-hours-video-buffering-fix': '为什么晚高峰看视频频繁缓冲卡顿？骨干网堵塞原因与专线破解',
  'faq-netflix-house-hold-proxy-fix': 'Netflix 提示“您似乎在使用解锁工具或代理”解决方法全解',
  'faq-chatgpt-access-denied-solution': 'ChatGPT 提示 Access Denied 或 1020 报错极速修复四步法',
  'faq-claude-app-disallowed-ip-fix': 'Claude 3.5 注册登录提示 App Disallowed IP / Region Not Supported 解决',
  'faq-tiktok-black-screen-no-content': 'TikTok 黑屏无内容/刷不出视频排查教程：SIM 卡与节点 IP 风险值',
  'faq-transparent-proxy-home-router': '硬路由/软路由部署全家透明代理教程：电视/手机/智能家居全局科学上网',
  'faq-privacy-security-isp-monitoring': '科学上网会泄露个人隐私吗？运营商监测原理与防关联安全防范',
  'faq-free-trial-airport-safety-risk': '免费试用机场与免费梯子安全风险科普：为什么天下没有免费的午餐？',
  'faq-node-traffic-reset-rule-check': '机场流量重置规则详解：按自然月重置与订阅日重置有什么区别？',
  'faq-mac-clash-permission-denied': 'Mac 苹果电脑 Clash 提示 Permission Denied 授权失败修复教程',
  'faq-android-battery-saving-kill-clash': '安卓手机后台自动杀死 Clash / Surfboard 进程防杀设置指南',
  'faq-dns-leak-check-fix-guide': 'DNS 泄漏是什么？使用 DNS 泄漏检测工具与开启 Fake-IP 修复方案',
  'faq-node-multiplier-traffic-calculation': '机场 0.1x / 1x / 5x 节点倍率流量怎么算？防止套餐流量被偷扣',
  'faq-ladder-payment-safety-alipay-wechat': '购买机场梯子用支付宝/微信支付安全吗？个人信息防追踪指南',
  'faq-ss-trojan-vmess-protocol-best': 'Shadowsocks、Trojan、Vmess 三大传统协议哪个更稳定抗封锁？',
  'faq-telegram-connection-connecting-fix': 'Telegram 电报一直显示 Connecting 连接中无法收发消息解决方法',
  'faq-switch-eshop-steam-region-change': 'Nintendo Switch eShop 与 Steam 换区联机网络配置排错指南',
  'faq-how-to-choose-standby-backup-ladder': '备用梯子怎么选？低成本双机场组合防卡顿最佳策略'
};

const categories = ['ranks', 'guides', 'clients', 'lines', 'faq'];

let count = 0;
for (const cat of categories) {
  const dirPath = path.join(contentDir, cat);
  if (!fs.existsSync(dirPath)) continue;

  const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.md'));
  for (const file of files) {
    const slug = file.replace('.md', '');
    const newTitle = chineseTitles[slug];
    if (!newTitle) continue;

    const fullPath = path.join(dirPath, file);
    let content = fs.readFileSync(fullPath, 'utf8');

    // Update title in frontmatter
    content = content.replace(/title:\s*".*?"/, `title: "${newTitle}"`);

    fs.writeFileSync(fullPath, content, 'utf8');
    count++;
  }
}

console.log(`Updated frontmatter titles to fluent Chinese for ${count} markdown files!`);
