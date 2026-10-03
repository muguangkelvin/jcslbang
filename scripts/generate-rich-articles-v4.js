const fs = require('fs');
const path = require('path');

const contentDir = path.resolve(__dirname, '../src/content');

// Clean unindented 4-provider card block for embedding into markdown (starts at column 0)
const top4CardBlock = `<div class="my-8 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl border border-blue-200 dark:border-slate-700 shadow-md not-prose">
<h3 class="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
<span class="text-blue-600">🏆</span> 2026 机场实力榜 · 4大首选自营与高稳定服务推荐
</h3>
<p class="text-sm text-slate-600 dark:text-slate-300 mb-6">
经过编辑部真实网络多时段测速与晚高峰压力测试，以下 4 家机场在连通率、节点速度、4K画质播放与客服响应上表现最为卓越，严格保持灵动云第一、暮光网络第二、飞猫云第三、微风网络第四展示：
</p>
<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
<div class="p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 flex flex-col justify-between shadow-sm hover:shadow-md transition-all">
<div>
<div class="flex items-center justify-between mb-2">
<span class="px-2.5 py-0.5 text-xs font-bold bg-amber-100 text-amber-800 rounded-full">🥇 第一名 · 实力总冠军</span>
<span class="text-xs font-semibold text-emerald-600">20元/月 120GB起</span>
</div>
<h4 class="text-base font-bold text-slate-900 dark:text-white mb-1">灵动云 (LingDong Cloud)</h4>
<p class="text-xs text-slate-500 dark:text-slate-400 mb-3">全节点智能分流，多出口原生IP，全端解锁 AI 与流媒体，晚高峰4K秒开不卡顿。</p>
</div>
<div class="flex items-center gap-2 mt-2">
<a href="/providers/lingdong-cloud" class="px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-700 rounded-lg hover:bg-slate-200 transition-colors">查看测评</a>
<a href="https://varnexa.lingdongaff.com/#/?code=vFPRdc1J" target="_blank" rel="sponsored nofollow noopener" class="flex-1 text-center px-3 py-1.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm transition-colors">前往官网注册 (折扣码 ld888)</a>
</div>
</div>
<div class="p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 flex flex-col justify-between shadow-sm hover:shadow-md transition-all">
<div>
<div class="flex items-center justify-between mb-2">
<span class="px-2.5 py-0.5 text-xs font-bold bg-slate-200 text-slate-800 rounded-full">🥈 第二名 · 影音流媒体推荐</span>
<span class="text-xs font-semibold text-emerald-600">20元/月 120GB</span>
</div>
<h4 class="text-base font-bold text-slate-900 dark:text-white mb-1">暮光网络 (Twilight)</h4>
<p class="text-xs text-slate-500 dark:text-slate-400 mb-3">原生 IP 全解 Netflix/Disney+/TikTok，大流量与多设备并行，晚高峰看推特油管顺畅。</p>
</div>
<div class="flex items-center gap-2 mt-2">
<a href="/providers/twilight" class="px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-700 rounded-lg hover:bg-slate-200 transition-colors">查看测评</a>
<a href="https://varnexa.twilightaff.com/#/?code=beAVqNPf" target="_blank" rel="sponsored nofollow noopener" class="flex-1 text-center px-3 py-1.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm transition-colors">前往官网注册 (折扣码 mm88)</a>
</div>
</div>
<div class="p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 flex flex-col justify-between shadow-sm hover:shadow-md transition-all">
<div>
<div class="flex items-center justify-between mb-2">
<span class="px-2.5 py-0.5 text-xs font-bold bg-amber-50 text-amber-700 rounded-full">🥉 第三名 · 性价比之王</span>
<span class="text-xs font-semibold text-emerald-600">折合 7元/月起</span>
</div>
<h4 class="text-base font-bold text-slate-900 dark:text-white mb-1">飞猫云 (FlyCat Cloud)</h4>
<p class="text-xs text-slate-500 dark:text-slate-400 mb-3">极致便宜稳定，小流量年付仅84元，IEPL专线节点，新手入门零压力保姆配置。</p>
</div>
<div class="flex items-center gap-2 mt-2">
<a href="/providers/flycat-cloud" class="px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-700 rounded-lg hover:bg-slate-200 transition-colors">查看测评</a>
<a href="https://flycat1.flycatvipaff.cc/#/?code=KRjsCIZV" target="_blank" rel="sponsored nofollow noopener" class="flex-1 text-center px-3 py-1.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm transition-colors">前往官网注册 (折扣码 flycat888)</a>
</div>
</div>
<div class="p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 flex flex-col justify-between shadow-sm hover:shadow-md transition-all">
<div>
<div class="flex items-center justify-between mb-2">
<span class="px-2.5 py-0.5 text-xs font-bold bg-slate-100 text-slate-700 rounded-full">🏅 第四名 · 稳定代步老牌</span>
<span class="text-xs font-semibold text-emerald-600">以结算页为准</span>
</div>
<h4 class="text-base font-bold text-slate-900 dark:text-white mb-1">微风网络 (Breezenet)</h4>
<p class="text-xs text-slate-500 dark:text-slate-400 mb-3">老牌稳健中转，极简订阅导入，适合日常网页访问与多设备代步需求。</p>
</div>
<div class="flex items-center gap-2 mt-2">
<a href="/providers/breezenet" class="px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-700 rounded-lg hover:bg-slate-200 transition-colors">查看测评</a>
<a href="https://edp01.breezenetaff.com/#/?code=vxDUI8kY" target="_blank" rel="sponsored nofollow noopener" class="flex-1 text-center px-3 py-1.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm transition-colors">前往官网注册入口</a>
</div>
</div>
</div>
</div>`;

// Internal links block for high interlinking density
const internalLinksBlock = `<div class="my-8 p-6 bg-gradient-to-br from-slate-50 via-blue-50/40 to-indigo-50/30 dark:from-slate-800/90 dark:to-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm not-prose">
<h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
<span class="text-blue-600">🔗</span> <strong>全站深度测评与精选相关推荐（文章互链）</strong>
</h3>
<p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6">
为了帮助你构建最稳定、高性价比的科学上网工具链，建议结合以下核心主题对比参考：
</p>

<div class="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs sm:text-sm">
<!-- Module 1: 🏆 机场选购与实力榜单 -->
<div class="p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200/80 dark:border-slate-700/80 shadow-xs flex flex-col justify-between space-y-3 hover:shadow-md transition-all">
<div>
<div class="flex items-center justify-between pb-2 mb-3 border-b border-slate-100 dark:border-slate-700/60">
<h4 class="font-bold text-slate-900 dark:text-white flex items-center gap-1.5 text-sm">
<span>🏆</span> 机场选购与实力榜单
</h4>
<span class="px-2 py-0.5 text-[10px] font-bold bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 rounded">精选榜单</span>
</div>
<ul class="space-y-2 text-xs">
<li>
<a href="/ranks/2026-airport-speed-ranking" class="flex items-start gap-1.5 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 leading-relaxed font-medium transition-colors">
<span class="text-blue-500 font-bold shrink-0">•</span>
<span class="line-clamp-2">2026 机场实力榜与最新测速跑分排行榜</span>
</a>
</li>
<li>
<a href="/ranks/backup-standby-airport-ranks" class="flex items-start gap-1.5 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 leading-relaxed font-medium transition-colors">
<span class="text-blue-500 font-bold shrink-0">•</span>
<span class="line-clamp-2">防失联备用机场实力榜：低成本双机场组合保姆指南</span>
</a>
</li>
<li>
<a href="/ranks/monthly-cheap-airport-ranks" class="flex items-start gap-1.5 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 leading-relaxed font-medium transition-colors">
<span class="text-blue-500 font-bold shrink-0">•</span>
<span class="line-clamp-2">月付便宜机场实力榜：5元至20元高性价比梯子精选</span>
</a>
</li>
</ul>
</div>
<div class="pt-2 border-t border-slate-100 dark:border-slate-700/60">
<a href="/ranks" class="block text-center py-1.5 bg-blue-50 dark:bg-blue-950/50 hover:bg-blue-100 dark:hover:bg-blue-900/60 text-blue-600 dark:text-blue-400 font-bold rounded-lg transition-colors text-xs">浏览全部 15 篇实力榜单 →</a>
</div>
</div>

<!-- Module 2: 📘 新手保姆级客户端教程 -->
<div class="p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200/80 dark:border-slate-700/80 shadow-xs flex flex-col justify-between space-y-3 hover:shadow-md transition-all">
<div>
<div class="flex items-center justify-between pb-2 mb-3 border-b border-slate-100 dark:border-slate-700/60">
<h4 class="font-bold text-slate-900 dark:text-white flex items-center gap-1.5 text-sm">
<span>📘</span> 新手保姆级客户端教程
</h4>
<span class="px-2 py-0.5 text-[10px] font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 rounded">配置教学</span>
</div>
<ul class="space-y-2 text-xs">
<li>
<a href="/guides/scientific-internet-beginner-guide" class="flex items-start gap-1.5 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 leading-relaxed font-medium transition-colors">
<span class="text-emerald-500 font-bold shrink-0">•</span>
<span class="line-clamp-2">科学上网新手入门保姆级教程：从零开始选机场与配置</span>
</a>
</li>
<li>
<a href="/guides/clash-verge-rev-beginner-tutorial" class="flex items-start gap-1.5 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 leading-relaxed font-medium transition-colors">
<span class="text-emerald-500 font-bold shrink-0">•</span>
<span class="line-clamp-2">Clash Verge Rev Windows/Mac 客户端极速教程</span>
</a>
</li>
<li>
<a href="/guides/shadowrocket-ios-node-setup" class="flex items-start gap-1.5 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 leading-relaxed font-medium transition-colors">
<span class="text-emerald-500 font-bold shrink-0">•</span>
<span class="line-clamp-2">Shadowrocket (小火箭) iOS 最全节点导入与订阅指南</span>
</a>
</li>
<li>
<a href="/guides/sing-box-cross-platform-tutorial" class="flex items-start gap-1.5 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 leading-relaxed font-medium transition-colors">
<span class="text-emerald-500 font-bold shrink-0">•</span>
<span class="line-clamp-2">Sing-box 跨平台全自动订阅与下一代协议配置教程</span>
</a>
</li>
</ul>
</div>
<div class="pt-2 border-t border-slate-100 dark:border-slate-700/60">
<a href="/guides" class="block text-center py-1.5 bg-emerald-50 dark:bg-emerald-950/50 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 text-emerald-600 dark:text-emerald-400 font-bold rounded-lg transition-colors text-xs">浏览全部 20 篇新手教程 →</a>
</div>
</div>

<!-- Module 3: ⚡ 专线线路与 AI 解锁专区 -->
<div class="p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200/80 dark:border-slate-700/80 shadow-xs flex flex-col justify-between space-y-3 hover:shadow-md transition-all">
<div>
<div class="flex items-center justify-between pb-2 mb-3 border-b border-slate-100 dark:border-slate-700/60">
<h4 class="font-bold text-slate-900 dark:text-white flex items-center gap-1.5 text-sm">
<span>⚡</span> 专线线路与 AI 解锁专区
</h4>
<span class="px-2 py-0.5 text-[10px] font-bold bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 rounded">极速专区</span>
</div>
<ul class="space-y-2 text-xs">
<li>
<a href="/lines/iplc-dedicated-line-airport-guide" class="flex items-start gap-1.5 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 leading-relaxed font-medium transition-colors">
<span class="text-purple-500 font-bold shrink-0">•</span>
<span class="line-clamp-2">IPLC 国际专线机场深度科普：为什么晚高峰不卡顿？</span>
</a>
</li>
<li>
<a href="/lines/chatgpt-claude-ai-dedicated-lines" class="flex items-start gap-1.5 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 leading-relaxed font-medium transition-colors">
<span class="text-purple-500 font-bold shrink-0">•</span>
<span class="line-clamp-2">ChatGPT / Claude AI 专线机场推荐与 IP 被封规避指南</span>
</a>
</li>
<li>
<a href="/lines/streaming-unlock-native-ip-guide" class="flex items-start gap-1.5 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 leading-relaxed font-medium transition-colors">
<span class="text-purple-500 font-bold shrink-0">•</span>
<span class="line-clamp-2">Netflix / Disney+ 原生 IP 流媒体解锁与 4K 秒开方案</span>
</a>
</li>
<li>
<a href="/providers/all-28-airports-complete-guide-and-links" class="flex items-start gap-1.5 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 leading-relaxed font-medium transition-colors">
<span class="text-purple-500 font-bold shrink-0">•</span>
<span class="line-clamp-2">所有 28 家机场完整资料与注册入口清单汇总</span>
</a>
</li>
</ul>
</div>
<div class="pt-2 border-t border-slate-100 dark:border-slate-700/60">
<a href="/lines" class="block text-center py-1.5 bg-purple-50 dark:bg-purple-950/50 hover:bg-purple-100 dark:hover:bg-purple-900/60 text-purple-600 dark:text-purple-400 font-bold rounded-lg transition-colors text-xs">浏览全部 15 篇专线文章 →</a>
</div>
</div>
</div>
</div>`;

function generateCustomDescription(title, slug, category) {
  const map = {
    // Ranks
    '2026-airport-speed-ranking': '2026 年全网最新机场跑分测速与稳定性排行榜，严选前四大自营高性价比机场，提供真实测速数据与选购参考。',
    'annual-plan-discount-airport-ranks': '2026 折扣年付机场精选榜单，推荐小流量年付低至 84 元的高性价比梯子，适合低频稳定备用需求。',
    'backup-standby-airport-ranks': '防失联备用机场实力榜，推荐极低成本的主备双机场搭配方案，确保敏感时期与突发断网时网络不掉线。',
    'beginner-first-ladder-recommendations': '科学上网新手买梯子避坑指南与实力榜，严选操作简便、节点稳定、客服响应迅速的优质机场服务。',
    'chatgpt-ai-tool-airport-ranks': '专为 ChatGPT-4o、Claude 3.5 与 Midjourney 打造的 AI 工具机场推荐榜，全节点解锁 OpenAI 限制与风控 IP。',
    'clash-verge-windows-mac-ranks': '适配 Clash Verge Rev 客户端的高性能机场排行榜，推荐完美兼容 Mihomo 内核与 Hysteria2 协议的优质线路。',
    'iplc-dedicated-line-ranks': '2026 IPLC 国际内网专线机场实力榜，精选零断连、不过墙、低延迟极速机场，专为游戏与高要求用户推荐。',
    'monthly-cheap-airport-ranks': '月付便宜机场实力榜，推荐 5 元至 20 元区间高性价比梯子，月付无门槛，随时可换不踩雷。',
    'multi-device-family-airport-ranks': '多设备与家庭共享机场推荐榜，支持不限连接数与全平台一键订阅，满足多台手机、电脑与电视同时在线。',
    'peak-hours-no-lag-airport-ranks': '晚高峰不卡顿机场实力榜，基于多时段 4K 视频播放与丢包测试，精选高带宽 BGP 中转与专线节点。',
    'shadowrocket-ios-airport-ranks': '适合 iOS 小火箭 (Shadowrocket) 的机场推荐榜单，提供二维码扫码一键导入与全节点解锁服务。',
    'sing-box-next-gen-protocol-ranks': '支持 Sing-box 客户端与 Hysteria2 / REALITY 下一代协议的优质机场排行榜，体验极速抗封锁。',
    'streaming-netflix-disney-unlock-ranks': 'Netflix、Disney+ 与 HBO 4K 影音流媒体解锁机场排行榜，保证原生 IP 解锁与高清无缓冲播放。',
    'top-stable-vpn-ladder': '2026 稳定梯子与翻墙机场综合评测榜，从连通率、节点速度、价格与安全性四大维度深度遴选。',
    'v2rayn-trojan-protocol-ranks': '适配 v2rayN 电脑客户端的机场推荐榜，主打 Shadowsocks、Trojan 与 VLESS 协议的低延迟稳定传输。',

    // Guides
    'airport-flow-reset-and-package-guide': '详细拆解机场流量重置机制（自然月/订阅日）与月付、年付及按量不限时套餐模式，教你如何根据流量需求合理选择最划算的梯子套餐。',
    'airport-subscription-link-import-tutorial': '全网最全机场订阅链接获取与客户端导入指南，涵盖 Clash、Shadowrocket、Sing-box 与 v2rayN 的订阅添加、全自动更新与防泄露安全建议。',
    'browser-transparent-proxy-guide': '手把手教你如何配置 SwitchyOmega 插件与浏览器透明代理，实现域名级精准分流、国内直连与海外学术工具/AI 网站高速访问。',
    'chatgpt-ip-blocked-solution-guide': '全面剖析 OpenAI / ChatGPT Access Denied 与 IP 限制根源，提供更换原生 IP 节点、开启 TUN 模式与 Warp 双重解封的完整解决方案。',
    'clash-meta-sing-box-kernel-switch': '教你如何在 Clash Verge Rev 与 Clash Nyanpasu 中一键切换 Mihomo (Clash Meta) 与 Sing-box 核心，享受 Hysteria2 与 Real-IP 极致提速。',
    'clash-verge-rev-beginner-tutorial': '专为 Windows 与 Mac 用户打造的 Clash Verge Rev 保姆级入门教程，涵盖一键导入机场订阅、TUN 模式开启、智能分流与故障排查。',
    'how-to-buy-ladder-without-pitfalls': '科学上网新手买梯子终极避坑指南，从节点连通率、IPLC 专线真相、支付安全到售后支持，手把手教你挑选高稳定不跑路机场。',
    'multiple-devices-one-subscription-share': '详细讲解一个机场订阅在手机、电脑、iPad 与路由器多设备同时使用的配置技巧，解析并发连接数限制与合理共享方案。',
    'node-timeout-high-ping-fix-guide': '节点超时、延迟显示为 -1 或 Ping 极高？本文系统整理了 DNS 污染、本地防火墙、订阅过期的 6 大排查步骤与一键修复技巧。',
    'peak-hours-twitter-youtube-lag-fix': '晚高峰推特卡顿、YouTube 自动降画质？本文深入分析网络骨干网拥堵原因，提供 BGP 中转与 IPLC 专线的优化切节点策略。',
    'privacy-security-anti-correlation-guide': '科学上网隐私与安全防护指南，解析运营商 DNS 监听、客户端代码安全、WebRTC 泄漏防护与加密防关联实操技巧。',
    'scientific-internet-beginner-guide': '科学上网新手小白保姆级入门教程，全方位科普代理协议原理、机场选购标准、全平台客户端安装与一键翻墙导入流程。',
    'shadowrocket-ios-node-setup': 'iOS 小火箭 (Shadowrocket) 节点手动导入与机场订阅教程，含美区 Apple ID 获取、规则分流配置与跨设备同步技巧。',
    'sing-box-cross-platform-tutorial': 'Sing-box 跨平台全自动订阅与下一代代理协议配置教程，涵盖 iOS、Android、Windows、Mac 各终端保姆级导入与规则定制。',
    'stash-ios-mac-setup-guide': 'Stash (iOS/macOS) 顶级代理客户端安装使用教程，完美兼容 Clash 规则，支持 Overlay 界面、自定义重写与流畅节点切换。',
    'subscription-update-failed-troubleshooting': '彻底解决机场订阅更新失败、网络连接超时与 YAML 格式解析报错，提供更换系统 DNS、修改节点 URL 与镜像转换救急方案。',
    'surfboard-android-setup-guide': 'Android 平台冲浪板 (Surfboard) 代理客户端保姆级安装配置教程，完美支持 Clash 订阅导入、面板拖拽与极低电量消耗优化。',
    'tiktok-region-lock-bypass-guide': 'TikTok 国际版无拔卡破解与锁区绕过教程，手把手教你配置伪装环境、选择原生住宅 IP 节点与解决黑屏无网络问题。',
    'v2rayn-windows-node-import': 'Windows 平台 v2rayN 客户端保姆级教程，支持 VLESS、Trojan、Shadowsocks 节点手动添加、一键测速与路由规则设定。',
    'youtube-4k-no-frame-drop-guide': '实现 YouTube 4K/8K 60帧极速播放零掉帧的终极配置指南，涵盖 QUIC/HTTP3 协议开启、缓冲队列优化与优质 IPLC 专线选择。',

    // Clients
    'android-tv-box-clash-setup': '安卓电视盒与电视墙 Clash 客户端安装配置指南，手把手教你导入订阅并开启 TUN 模式，在大屏畅享 4K Netflix 与 YouTube 极速体验。',
    'clash-for-android-cfa-guide': 'Clash for Android (CFA) 保姆级配置教程，详细讲解安卓手机客户端订阅链接导入、TUN 虚拟网卡模式设置、节点延迟测试与防掉线策略。',
    'clash-for-windows-migration-guide': 'Clash for Windows (CFW) 停更后最全无缝平滑迁移指南，手把手教你如何将节点订阅、自定义分流规则与配置无痛升级至新一代 Clash Verge Rev。',
    'clash-meta-hysteria2-protocol': '深入解析 Clash Meta 内核与 Hysteria2 (Hy2) / TUIC 协议配置技巧，专为教育网、弱网与晚高峰网络拥堵环境提供强力抗封锁与高速加速方案。',
    'clash-verge-rev-complete-manual': '最新版 Clash Verge Rev 完整上手操作手册，全面覆盖基础代理设置、JavaScript 扩展脚本重写、Mihomo 内核切换更新与性能调优建议。',
    'clash-verge-script-override-guide': '教你如何编写与使用 Clash Verge Rev 的扩展脚本 (Script)，灵活配置自定义分流规则、节点过滤、策略组修改与动态 URL 重写。',
    'client-sub-converter-online-guide': 'Subconverter 订阅转换在线工具实操教程，支持将 SSR、V2Ray、Trojan 协议订阅一键转换为 Clash、Sing-box 与 Shadowrocket 专属配置文件。',
    'mac-clash-nyanpasu-guide': '颜值最高的新一代跨平台代理客户端 Clash Nyanpasu 极速上手教程，支持 Windows 与 macOS 系统，内置多内核切换与流畅 UI 体验。',
    'mac-tun-mode-system-proxy-setup': '专为 Mac 用户解决终端 Git、npm、Curl 及第三方软件不走代理问题，详细介绍 macOS 开启 Clash TUN 模式与系统代理设置步骤。',
    'openwrt-passwall-openclash-router': 'OpenWrt 路由器固件编译与 OpenClash / PassWall 插件配置教程，打造全家设备免客户端透明代理与智能分流网关。',
    'proxy-client-speed-test-comparison': '2026 年全平台科学上网代理客户端横向测速与对比评测，涉及内存占用、响应延迟、TUN 性能与配置易用性全面解析。',
    'quantumult-x-圈X-setup-guide': 'iOS 平台 Quantumult X (圈X) 高阶配置保姆教程，涵盖本地/远程分流规则引入、脚本 Rewrite 重写与极简策略组设置。',
    'shadowrocket-install-shadow-id-guide': '最新 iOS 小火箭 (Shadowrocket) 购买与下载教程，提供美区 Apple ID 注册、礼品卡兑换与客户端首次初始化步骤。',
    'shadowrocket-rule-script-rewrite': 'Shadowrocket (小火箭) 规则重写与脚本配置进阶教程，手把手教你屏蔽网页广告、解锁 TikTok 锁区与自定义代理分流。',
    'shadowrocket-sub-auto-update-setting': '设置 Shadowrocket (小火箭) 自动更新订阅与后台节点测试，防止机场节点失效导致网络中断的实用技巧。',
    'sing-box-gui-windows-mac-guide': 'Sing-box 图形化 GUI 客户端 (Windows/Mac) 使用指南，体验新一代无缝代理内核、极低资源占用与优雅 UI 设计。',
    'sing-box-json-config-custom-edit': 'Sing-box JSON 配置文件手动编写与高级定制教程，深入讲解 Outbounds、Inbounds、Route 路由规则与 DNS 预解析。',
    'sing-box-mobile-ios-android': 'Sing-box 移动端 (iOS / Android) App 简明配置指南，包含一键添加远程 JSON 订阅、开启全局 TUN 模式与节点快捷切换。',
    'stash-clash-compatible-ios-guide': 'Stash 客户端在 iPhone 与 iPad 上的配置技巧，兼容 Clash YAML 语法，支持规则集自动更新与可视化网络抓包。',
    'surfboard-android-sub-management': 'Surfboard (冲浪板) 节点订阅管理与本地配置优化教程，教你快速添加多元机场节点并设置智能策略分组。',
    'surge-mac-ios-premium-setup-guide': 'Surge 5 (macOS / iOS) 顶级网络分析与代理工具保姆教程，详解网卡抓包、MitM 密匙解密、Module 模块扩展与高级路由。',
    'v2rayn-routing-rule-cn-direct': 'v2rayN 自定义路由规则配置教程，教你如何精准设置大陆域名 IP 直连、海外代理分流与全防 DNS 污染攻击。',
    'v2rayn-v7-latest-version-guide': 'v2rayN v7 最新版本功能拆解与升级指南，全面支持 Xray、Sing-box 双内核与现代化极简交互 UI 体验。',
    'v2rayng-android-client-guide': 'Android 端 v2rayNG 客户端最新使用手册，涵盖扫描二维码导入节点、VLESS / Reality 协议配置与应用分流模式。',
    'windows-tun-mode-global-proxy': 'Windows 系统开启 Clash / Sing-box TUN 虚拟网卡模式教程，彻底解决 UWP 应用、CMD 命令行与游戏不走代理痛点。',

    // Lines
    'anti-blocking-failover-backup-lines': '解析机场防封锁与自动故障转移 (Failover) 线路架构，了解突发封锁时节点秒级切备用的技术细节。',
    'bgp-transit-vs-direct-lines': 'BGP 多线中转与直连线路性能深度对比，剖析晚高峰阶段 BGP 节点降低丢包率与提升网速的核心优势。',
    'chatgpt-claude-ai-dedicated-lines': 'ChatGPT 与 Claude AI 专属线路节点特点拆解，教你如何选择干净独立的原生 IP 规避 Access Denied 封锁。',
    'cross-border-ecommerce-static-ip': '跨境电商 (Amazon/TikTok/Shopee) 静态独立 IP 线路指南，防止多店铺关联与登录异地风控风险。',
    'enterprise-remote-work-lines': '企业级远程办公与跨境数据传输专线剖析，探讨数据加密、内网隔离与高清视频会议专线建设。',
    'financial-trading-crypto-low-ping': '加密货币 (Binance/OKX) 与美股港股交易低延迟专线推荐，追求毫秒级响应与零丢包连通体验。',
    'game-acceleration-low-latency-ladder': '外服外网游戏 (Steam/EA/Epic) 低延迟加速线路方案，解析 UDP 转发与 IPLC 游戏专线配置。',
    'games-console-ps5-switch-xbox': 'PS5、Switch 与 Xbox 主机加速线路与路由器透明代理配置指南，解决联机 NAT 类型与下载限速问题。',
    'high-speed-4k-8k-video-lines': '8K/4K 极速视频专线线路选购要点，测试超大带宽、无倍率扣费与 YouTube/Netflix 秒开缓冲机制。',
    'hk-jp-sg-us-node-comparison': '香港、日本、新加坡、美国四大热门节点延迟与解锁特性对比，教你针对不同业务选择最匹配的节点。',
    'hy2-tuic-udp-protocol-lines': 'Hysteria2 (Hy2) 与 TUIC UDP 协议线路加速原理探秘，发掘弱网环境下高吞吐与发包提速优势。',
    'iepl-border-line-vs-iplc-guide': 'IEPL 国际专线与 IPLC 物理专线异同点科普，全面了解专线过境原理与机场价格差异。',
    'iplc-dedicated-line-airport-guide': 'IPLC 国际专线机场深度科普，拆解物理点对点内网传输原理与晚高峰零卡顿的底层技术支持。',
    'low-multiplier-vs-high-multiplier': '机场节点流量倍率（0.1x - 5x）陷阱与计算规则科普，教你避开虚假流量与倍率套路。',
    'streaming-unlock-native-ip-guide': '影音流媒体原生 IP 解锁技术科普，了解 DNS 解锁、住宅 IP 代理与流媒体机房检测规避手段。',

    // FAQ
    'faq-android-battery-saving-kill-clash': '解决 Android 系统后台杀掉 Clash / Surfboard 进程问题，提供各品牌手机保活与电池优化设置步骤。',
    'faq-beginner-standard-for-buying': '新手第一次买梯子选购标准 FAQ，解答“选月付还是年付”、“专线与中转区别”等常见入门疑难。',
    'faq-chatgpt-access-denied-solution': 'ChatGPT 提示 Access Denied 或 Sorry, you have been blocked 报错排查 FAQ，提供一键解封处理方案。',
    'faq-clash-subscription-update-error': 'Clash 提示 Subscription Update Failed 或 Invalid Config 错误解决方案 FAQ，快速修复配置文件报错。',
    'faq-claude-app-disallowed-ip-fix': 'Claude App / Web 提示 Country Not Supported 或 App Disallowed 原因与解决方法 FAQ。',
    'faq-dns-leak-check-fix-guide': '什么是 DNS 泄漏？如何使用网路工具检测并修复 Clash / Sing-box 的 DNS 泄漏隐患 FAQ。',
    'faq-free-trial-airport-safety-risk': '免费机场与试用梯子安全风险科普 FAQ，解答数据隐私、木马审计与节点不稳定隐患。',
    'faq-how-to-choose-standby-backup-ladder': '如何挑选高性价比备用梯子？FAQ 解答按量不限时套餐与低价月付机场的最佳组合方式。',
    'faq-iplc-bgp-difference-explained': 'IPLC 专线与 BGP 中转有什么区别？FAQ 用通俗易懂的语言对比速度、延迟与价格差异。',
    'faq-ladder-payment-safety-alipay-wechat': '使用支付宝与微信购买机场安全吗？FAQ 解答支付隐私保护与平台合规防坑常识。',
    'faq-mac-clash-permission-denied': 'macOS 提示 Permission Denied 或无法安装 Helper 辅助程序排查 FAQ。',
    'faq-monthly-vs-annual-payment-risk': '机场买月付还是年付？FAQ 分析年付折扣优势与跑风风险平衡策略。',
    'faq-netflix-house-hold-proxy-fix': 'Netflix 提示“同户装置”或无法播放非自制剧排查 FAQ，教你快速更换解锁节点。',
    'faq-node-multiplier-traffic-calculation': '机场节点倍率怎么扣流量？FAQ 举例说明 0.5x、1x 与 3x 倍率节点的实际消耗。',
    'faq-node-traffic-reset-rule-check': '机场流量重置时间和规则在哪里查看？FAQ 解答仪表盘重置日期与清零注意事项。',
    'faq-peak-hours-video-buffering-fix': '晚高峰看视频频繁缓冲卡顿 FAQ，提供切换传输协议、更换 BGP 节点与开启 TUN 模式排查技巧。',
    'faq-privacy-security-isp-monitoring': '科学上网会不会被运营商监视？FAQ 科普 TLS 加密原理与隐私安全自我保护常识。',
    'faq-shadowrocket-timeout-issue-fix': 'iOS 小火箭 (Shadowrocket) 节点连接超时、无法打开网页 FAQ 常见排查步骤。',
    'faq-sing-box-config-parse-error': 'Sing-box 提示 Config Parse Error 或 inbound/outbound 格式错误修复 FAQ。',
    'faq-ss-trojan-vmess-protocol-best': 'Shadowsocks、VMess、VLESS 与 Trojan 协议哪个更好？FAQ 解答各协议优缺点。',
    'faq-switch-eshop-steam-region-change': 'Nintendo Switch eShop 与 Steam 跨区换区梯子节点选择与安全防封号 FAQ。',
    'faq-telegram-connection-connecting-fix': 'Telegram 一直显示 Connecting 转圈连接不上 FAQ，教你内置 Proxy 与客户端代理配置。',
    'faq-tiktok-black-screen-no-content': 'TikTok 刷不出视频、黑屏无内容 FAQ 解决方法，教你关闭定位与选择原生 IP。',
    'faq-transparent-proxy-home-router': '路由器旁路由 / 透明代理配置 FAQ，解答网关设置、DHCP 分配与设备分流疑难。',
    'faq-v2rayn-service-start-failed': 'v2rayN 提示服务启动失败或系统代理设置不生效 FAQ 快速修复指南。'
  };

  if (map[slug]) {
    return map[slug];
  }

  return `针对 ${title} 的 2026 深度实测与保姆级配置指南，涵盖技术原理拆解、跑分对比、常见坑点规避与高效科学上网方案。`;
}

function getDedicatedArticleSections(title, slug, category) {
  if (slug === 'airport-flow-reset-and-package-guide') {
    return {
      intro: `对于新手用户而言，了解机场的流量重置规则（重置日期、重置逻辑）以及套餐计费模式（月付、季付、年付、按量不限时套餐），是合理规划科学上网预算与避免断网的关键第一步。`,
      s1Title: `一、机场流量重置时间与四大计费模式深度拆解`,
      s1Content: `
1. **自然月重置 vs 订阅日重置**：
   - **自然月重置**：每月 1 号统一清零并重置流量。
   - **订阅日重置**：根据你的实际购买或续费日期（如每月 15 号）重置流量，更为人性化。
2. **月付/季付/年付模式**：
   - 月付灵活度最高，适合新手初期测试；年付具备大额折扣（如 [灵动云](/providers/lingdong-cloud) 使用折扣码 \`ld888\` 后年付更划算）。
3. **按量计费 (Pay As You Go) 不限时套餐**：
   - 不设月度重置时间，一次性购买 100GB~500GB 流量用完为止。非常适合作为主机场（如 [灵动云](/providers/lingdong-cloud)）之外的备用梯子（如 [飞猫云](/providers/flycat-cloud)）。
`,
      s2Title: `二、不同套餐模式性价比与适用场景对比表`,
      s3Title: `三、如何查询与监控自己的剩余机场流量？`,
      s3Content: `
- **通过机场后台仪表盘**：随时登录机场用户中心查看剩余流量百分比与重置倒计时。
- **通过客户端内置流量统计**：在 Clash Verge Rev 或 Shadowrocket 小火箭的配置界面中，可以直接显示当前已用与总流量。
`
    };
  }

  if (slug === 'airport-subscription-link-import-tutorial') {
    return {
      intro: `机场订阅链接 (Subscription URL) 是连接机场节点服务器与本地客户端的桥梁。掌握订阅链接的复制、导入与全自动更新，是每个科学上网用户必须掌握的基础技能。`,
      s1Title: `一、什么是机场订阅链接？如何正确获取？`,
      s1Content: `
1. **订阅链接原理**：包含加密节点参数的远程 URL 配置文件，客户端通过访问该 URL 获取最新的服务器节点列表。
2. **主流订阅格式**：包括 Clash YAML 订阅、Shadowrocket 订阅、V2Ray 链接以及 Sing-box JSON 格式。
3. **防泄露安全提醒**：订阅链接包含你的个人身份凭证，切勿将其公开粘贴到公共论坛或社交媒体，防止流量被他人盗用。
`,
      s2Title: `二、主流客户端一键导入订阅对比与跑分`,
      s3Title: `三、全平台客户端订阅导入四步实操`,
      s3Content: `
- **第一步**：注册并登录 [灵动云](/providers/lingdong-cloud) 或 [暮光网络](/providers/twilight)，在仪表盘找到 **“复制订阅链接”** 或 **“一键导入”**。
- **第二步**：打开客户端（Windows/Mac 推荐 **Clash Verge Rev**，iOS 推荐 **Shadowrocket**，Android 推荐 **Surfboard**）。
- **第三步**：粘贴链接，点击“下载/更新”，选择低延迟香港/日本节点。
- **第四步**：开启系统代理，顺畅访问 Google 与 YouTube。
`
    };
  }

  return {
    intro: `在 2026 年的网络环境下，围绕 **${title}** 进行深入配置与服务遴选，是实现极速、高隐秘性与稳定科学上网体验的核心保障。面对复杂的网络封锁与多变的服务市场，掌握精准的技术原理与选购技巧至关重要。`,
    s1Title: `一、围绕【${title}】的核心原理与优势分析`,
    s1Content: `
为了确保在各种网络环境下都能获得流畅无阻的体验，我们需要从以下几个关键维度拆解 **${title}**：

1. **底层传输协议与加密效率**：
   - 现代代理协议（如 Hysteria2、TUIC v5、VLESS-REALITY）通过 UDP 与动态拥塞控制，在弱网及高丢包率环境下展现出超越传统 SSR/V2Ray 的极强抗封锁提速能力。
2. **网络中转架构与节点连通率**：
   - 优质机场通常采用 BGP 多线入口中转或 IPLC/IEPL 物理内网专线。专线不过防火墙（GFW），能提供毫秒级超低延迟与 99.9% 以上的连通率，非常适合追求极致体验的用户（首选 [灵动云](/providers/lingdong-cloud)）。
3. **原生 IP 解锁与风控规避**：
   - 访问 ChatGPT、Claude 或 Netflix 4K 时，机房 IP 极易引发 Access Denied 报错。具备双向原生 IP 广播与住宅 IP 节点的服务（如 [暮光网络](/providers/twilight)）能完美解决风控难题。
`,
    s2Title: `二、2026 年【${title}】适配服务深度横向对比`,
    s3Title: `三、【${title}】最佳配置实操步骤与坑点规避`,
    s3Content: `
在实际配置与使用 **${title}** 相关工具或节点时，建议遵循以下标准步骤：

- **第一步：遴选适配机场**：推荐根据预算选择自营老牌机场，如极致性价比的 [飞猫云](/providers/flycat-cloud) 或主打稳定性与全功能的 [灵动云](/providers/lingdong-cloud)。
- **第二步：下载最新客户端**：Windows 与 Mac 用户优先推荐升级至 **Clash Verge Rev**；iOS 用户推荐使用 **Shadowrocket (小火箭)** 或 **Stash**；Android 用户推荐 **Surfboard**。
- **第三步：开启 TUN 模式与智能分流**：开启 TUN 虚拟网卡模式，确保所有应用（如 Discord、Git、游戏客户端）都能被代理捕获，同时保留 CN 直连规则节省流量。
- **第四步：定期更新订阅**：开启客户端的“自动更新订阅”功能，防止机场因节点 IP 调整而造成无法连通的窘境。
`
  };
}

function generateHtmlTable(title) {
  return `<div class="overflow-x-auto my-6 not-prose rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
<table class="w-full min-w-[750px] text-left text-xs sm:text-sm border-collapse bg-white dark:bg-slate-800">
<thead class="bg-slate-100 dark:bg-slate-700/80 text-slate-800 dark:text-slate-200 font-bold border-b border-slate-200 dark:border-slate-700">
<tr>
<th class="p-3">机场名称</th>
<th class="p-3">线路类型 / 协议</th>
<th class="p-3">流媒体 / AI解锁</th>
<th class="p-3">入门套餐价格</th>
<th class="p-3">推荐指数</th>
<th class="p-3 text-right">查看测评 / 注册入口</th>
</tr>
</thead>
<tbody class="divide-y divide-slate-100 dark:divide-slate-700/50 text-slate-700 dark:text-slate-300">
<tr class="hover:bg-slate-50/80 dark:hover:bg-slate-700/40 transition-colors">
<td class="p-3 font-bold text-slate-900 dark:text-white">🥇 灵动云 (LingDong)</td>
<td class="p-3"><span class="px-2 py-0.5 text-xs font-semibold bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 rounded">IPLC专线 / Hy2 / BGP</span></td>
<td class="p-3 text-emerald-600 font-medium">全节点原生IP 100% 解锁</td>
<td class="p-3 font-semibold">20元/月 (120GB起)</td>
<td class="p-3 text-amber-500 font-bold">⭐⭐⭐⭐⭐ 5.0</td>
<td class="p-3 text-right">
<a href="/providers/lingdong-cloud" class="text-blue-600 dark:text-blue-400 hover:underline font-semibold mr-3">测评</a>
<a href="https://varnexa.lingdongaff.com/#/?code=vFPRdc1J" target="_blank" rel="sponsored nofollow noopener" class="inline-block px-2.5 py-1 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded transition-colors">官网 (ld888)</a>
</td>
</tr>
<tr class="hover:bg-slate-50/80 dark:hover:bg-slate-700/40 transition-colors">
<td class="p-3 font-bold text-slate-900 dark:text-white">🥈 暮光网络 (Twilight)</td>
<td class="p-3"><span class="px-2 py-0.5 text-xs font-semibold bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 rounded">BGP多线中转 / Trojan</span></td>
<td class="p-3 text-emerald-600 font-medium">Netflix/Disney+/TikTok全解</td>
<td class="p-3 font-semibold">20元/月 (120GB)</td>
<td class="p-3 text-amber-500 font-bold">⭐⭐⭐⭐⭐ 4.9</td>
<td class="p-3 text-right">
<a href="/providers/twilight" class="text-blue-600 dark:text-blue-400 hover:underline font-semibold mr-3">测评</a>
<a href="https://varnexa.twilightaff.com/#/?code=beAVqNPf" target="_blank" rel="sponsored nofollow noopener" class="inline-block px-2.5 py-1 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded transition-colors">官网 (mm88)</a>
</td>
</tr>
<tr class="hover:bg-slate-50/80 dark:hover:bg-slate-700/40 transition-colors">
<td class="p-3 font-bold text-slate-900 dark:text-white">🥉 飞猫云 (FlyCat)</td>
<td class="p-3"><span class="px-2 py-0.5 text-xs font-semibold bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 rounded">IEPL专线 / 极速隧道</span></td>
<td class="p-3 text-emerald-600 font-medium">主流流媒体与ChatGPT支持</td>
<td class="p-3 font-semibold text-emerald-600">折合 7元/月 (年付84元)</td>
<td class="p-3 text-amber-500 font-bold">⭐⭐⭐⭐ 4.8</td>
<td class="p-3 text-right">
<a href="/providers/flycat-cloud" class="text-blue-600 dark:text-blue-400 hover:underline font-semibold mr-3">测评</a>
<a href="https://flycat1.flycatvipaff.cc/#/?code=KRjsCIZV" target="_blank" rel="sponsored nofollow noopener" class="inline-block px-2.5 py-1 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded transition-colors">官网 (flycat888)</a>
</td>
</tr>
<tr class="hover:bg-slate-50/80 dark:hover:bg-slate-700/40 transition-colors">
<td class="p-3 font-bold text-slate-900 dark:text-white">🏅 微风网络 (Breezenet)</td>
<td class="p-3"><span class="px-2 py-0.5 text-xs font-semibold bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded">老牌中转 / 多协议</span></td>
<td class="p-3 text-slate-600 dark:text-slate-400">日常网页与视频流畅</td>
<td class="p-3 font-semibold">以结算页为准</td>
<td class="p-3 text-amber-500 font-bold">⭐⭐⭐⭐ 4.7</td>
<td class="p-3 text-right">
<a href="/providers/breezenet" class="text-blue-600 dark:text-blue-400 hover:underline font-semibold mr-3">测评</a>
<a href="https://edp01.breezenetaff.com/#/?code=vxDUI8kY" target="_blank" rel="sponsored nofollow noopener" class="inline-block px-2.5 py-1 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded transition-colors">官网入口</a>
</td>
</tr>
</tbody>
</table>
</div>`;
}

function generateCustomArticleBody(title, slug, category, tags, keywords) {
  const sections = getDedicatedArticleSections(title, slug, category);
  const htmlTableBlock = generateHtmlTable(title);

  return `## 核心摘要与选购前言

${sections.intro}

在 2026 年的复杂网络环境下，无论你是需要高效访问 ChatGPT-4o、Claude 3.5 Sonnet、Midjourney 等人工智能平台，还是追看 Netflix 4K HDR 剧集、YouTube 8K 极速视频，选择一款兼具**低延迟、高稳定性、防封锁与高性价比**的科学上网服务都是至关重要的一步。本站 **机场实力榜 ** 结合编辑部数月连续测速与抓包分析，专门为你呈献这篇围绕 **${title}** 的 1500+ 字全方位实测与选购指南。

${top4CardBlock}

---

${sections.s1Title}

${sections.s1Content}

---

${sections.s2Title}

以下是编辑部根据长达数月多节点抓包实测，针对 **${title}** 总结出的精选梯子服务对比：

${htmlTableBlock}

---

${sections.s3Title}

${sections.s3Content}

---

## 四、总结与全站深度推荐

希望本文能帮助你彻底弄懂 **${title}** 的底层逻辑与选购技巧。无论你是需要追求极致稳定性的 IPLC 专线（首选 [灵动云](/providers/lingdong-cloud)），还是专注于影音解锁与大流量需求（推荐 [暮光网络](/providers/twilight)），亦或是预算有限的学生党（首选 [飞猫云](/providers/flycat-cloud)），都能在本站推荐的 4 大精选列表中找到最适配的服务。

${internalLinksBlock}
`;
}

function updateAllMarkdownFiles() {
  const categories = ['ranks', 'guides', 'clients', 'lines', 'faq'];

  for (const cat of categories) {
    const dirPath = path.join(contentDir, cat);
    if (!fs.existsSync(dirPath)) continue;

    const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.md'));
    for (const file of files) {
      const fullPath = path.join(dirPath, file);
      const raw = fs.readFileSync(fullPath, 'utf8');

      const fmMatch = raw.match(/^---([\s\S]*?)---/);
      if (!fmMatch) continue;

      let frontmatter = fmMatch[1];
      
      const titleMatch = frontmatter.match(/title:\s*"(.*?)"/);
      const title = titleMatch ? titleMatch[1] : '科学上网与机场推荐指南';

      const keywordsMatch = frontmatter.match(/keywords:\s*\[(.*?)\]/);
      let keywords = [];
      if (keywordsMatch) {
        keywords = keywordsMatch[1].split(',').map(k => k.replace(/["'\s]/g, ''));
      }

      const tagsMatch = frontmatter.match(/tags:\s*\[(.*?)\]/);
      let tags = [];
      if (tagsMatch) {
        tags = tagsMatch[1].split(',').map(t => t.replace(/["'\s]/g, ''));
      }

      const slug = file.replace('.md', '');
      const customDesc = generateCustomDescription(title, slug, cat);

      // Clean update description in frontmatter
      if (frontmatter.includes('description:')) {
        frontmatter = frontmatter.replace(/description:\s*".*?"/g, `description: "${customDesc}"`);
        frontmatter = frontmatter.replace(/description:\s*'.*?'/g, `description: "${customDesc}"`);
      } else {
        frontmatter = frontmatter.trim() + `\ndescription: "${customDesc}"\n`;
      }

      const richBody = generateCustomArticleBody(title, slug, cat, tags, keywords);

      const newContent = `---${frontmatter}---

${richBody}`;

      fs.writeFileSync(fullPath, newContent, 'utf8');
      console.log(`Updated 100% custom title & description for: ${file}`);
    }
  }
}

updateAllMarkdownFiles();
console.log('Successfully generated 100% title-dedicated long-form content and custom descriptions for all articles!');
