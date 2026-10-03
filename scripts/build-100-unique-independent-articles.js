const fs = require('fs');
const path = require('path');

const contentDir = path.resolve(__dirname, '../src/content');

// Helper to build 4 provider card block (starts at col 0, unindented HTML)
function build4CardBlock(customSubtitle = '经过编辑部真实网络多时段测速与晚高峰压力测试，以下 4 家机场在连通率、节点速度、4K画质播放与客服响应上表现最卓越：') {
  return `<div class="my-8 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl border border-blue-200 dark:border-slate-700 shadow-md not-prose">
<h3 class="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
<span class="text-blue-600">🏆</span> 2026 机场实力榜 · 4大首选自营与高稳定服务推荐
</h3>
<p class="text-sm text-slate-600 dark:text-slate-300 mb-6">
${customSubtitle}
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
}

// Internal links block (starts at col 0, unindented HTML)
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
<a href="/ranks/annual-plan-discount-airport-ranks" class="flex items-start gap-1.5 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 leading-relaxed font-medium transition-colors">
<span class="text-blue-500 font-bold shrink-0">•</span>
<span class="line-clamp-2">年付高折扣高保真机场实力榜：买一年送半年的便宜稳定梯子</span>
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

console.log("Loaded core blocks for 100-article generator.");
