const fs = require('fs');
const path = require('path');

const contentDir = path.resolve(__dirname, '../src/content');
const articlesData = JSON.parse(fs.readFileSync(path.join(__dirname, 'all-100-articles.json'), 'utf8'));

// Card Widget Builder
function buildTailored4CardBlock(theme) {
  if (theme === 'DISCOUNT_ANNUAL') {
    return `<div class="my-8 p-6 bg-gradient-to-br from-amber-50/80 via-orange-50/40 to-yellow-50/50 dark:from-slate-800 dark:to-slate-900 rounded-2xl border border-amber-200/80 dark:border-slate-700 shadow-md not-prose"><h3 class="text-xl font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2"><span class="text-amber-500">💰</span> 2026 高性价比年付与优惠折扣精选 4 大自营机场推荐</h3><p class="text-sm text-slate-600 dark:text-slate-300 mb-6">结合年付折扣力度、月均单价计算、运营历史与退款备用保障机制，严选以下 4 家最值得长线订阅与省钱避坑的自营老牌机场：</p><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div class="p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 flex flex-col justify-between shadow-sm hover:shadow-md transition-all"><div><div class="flex items-center justify-between mb-2"><span class="px-2.5 py-0.5 text-xs font-bold bg-amber-100 text-amber-800 rounded-full">🥇 第一名 · 旗舰高性价比</span><span class="text-xs font-semibold text-emerald-600">折扣后月均低至 16 元起</span></div><h4 class="text-base font-bold text-slate-900 dark:text-white mb-1">灵动云 (LingDong Cloud)</h4><p class="text-xs text-slate-500 dark:text-slate-400 mb-3">使用专属折扣码 <strong>ld888</strong> 享受年付大额让利，全专线节点不限速，长期运营防跑路保质保量。</p></div><div class="flex items-center gap-2 mt-2"><a href="/providers/lingdong-cloud" class="px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-700 rounded-lg hover:bg-slate-200 transition-colors">查看测评</a><a href="https://varnexa.lingdongaff.com/#/?code=vFPRdc1J" target="_blank" rel="sponsored nofollow noopener" class="flex-1 text-center px-3 py-1.5 text-xs font-bold text-white bg-amber-600 hover:bg-amber-700 rounded-lg shadow-sm transition-colors">领券注册 (折扣码 ld888)</a></div></div><div class="p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 flex flex-col justify-between shadow-sm hover:shadow-md transition-all"><div><div class="flex items-center justify-between mb-2"><span class="px-2.5 py-0.5 text-xs font-bold bg-blue-100 text-blue-800 rounded-full">🥈 第二名 · 买一送半大流量</span><span class="text-xs font-semibold text-emerald-600">折扣码折上折</span></div><h4 class="text-base font-bold text-slate-900 dark:text-white mb-1">暮光网络 (Twilight)</h4><p class="text-xs text-slate-500 dark:text-slate-400 mb-3">使用折扣码 <strong>mm88</strong> 参与年付买一送半优惠活动，大流量包月均单价压降 40%，适合全家共享。</p></div><div class="flex items-center gap-2 mt-2"><a href="/providers/twilight" class="px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-700 rounded-lg hover:bg-slate-200 transition-colors">查看测评</a><a href="https://varnexa.twilightaff.com/#/?code=beAVqNPf" target="_blank" rel="sponsored nofollow noopener" class="flex-1 text-center px-3 py-1.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm transition-colors">领券注册 (折扣码 mm88)</a></div></div><div class="p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 flex flex-col justify-between shadow-sm hover:shadow-md transition-all"><div><div class="flex items-center justify-between mb-2"><span class="px-2.5 py-0.5 text-xs font-bold bg-emerald-100 text-emerald-800 rounded-full">🥉 第三名 · 极致平民年付</span><span class="text-xs font-semibold text-emerald-600">折合仅 7元/月 (年付84元)</span></div><h4 class="text-base font-bold text-slate-900 dark:text-white mb-1">飞猫云 (FlyCat Cloud)</h4><p class="text-xs text-slate-500 dark:text-slate-400 mb-3">小流量年付套餐仅需 84 元/年，使用优惠码 <strong>flycat888</strong> 再享立减，零负担学生党与备用首选。</p></div><div class="flex items-center gap-2 mt-2"><a href="/providers/flycat-cloud" class="px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-700 rounded-lg hover:bg-slate-200 transition-colors">查看测评</a><a href="https://flycat1.flycatvipaff.cc/#/?code=KRjsCIZV" target="_blank" rel="sponsored nofollow noopener" class="flex-1 text-center px-3 py-1.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-sm transition-colors">领券注册 (折扣码 flycat888)</a></div></div><div class="p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 flex flex-col justify-between shadow-sm hover:shadow-md transition-all"><div><div class="flex items-center justify-between mb-2"><span class="px-2.5 py-0.5 text-xs font-bold bg-slate-100 text-slate-700 rounded-full">🏅 第四名 · 老牌平稳续费</span><span class="text-xs font-semibold text-emerald-600">透明计费无隐形套路</span></div><h4 class="text-base font-bold text-slate-900 dark:text-white mb-1">微风网络 (Breezenet)</h4><p class="text-xs text-slate-500 dark:text-slate-400 mb-3">老牌稳定中转机场，价格公开透明，节点倍率真实，适合注重稳健续费体验的用户。</p></div><div class="flex items-center gap-2 mt-2"><a href="/providers/breezenet" class="px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-700 rounded-lg hover:bg-slate-200 transition-colors">查看测评</a><a href="https://edp01.breezenetaff.com/#/?code=vxDUI8kY" target="_blank" rel="sponsored nofollow noopener" class="flex-1 text-center px-3 py-1.5 text-xs font-bold text-white bg-slate-700 hover:bg-slate-800 rounded-lg shadow-sm transition-colors">前往官网注册入口</a></div></div></div></div>`;
  }

  if (theme === 'SPEED_PERFORMANCE') {
    return `<div class="my-8 p-6 bg-gradient-to-br from-blue-50 via-indigo-50/50 to-purple-50/30 dark:from-slate-800 dark:to-slate-900 rounded-2xl border border-blue-200/80 dark:border-slate-700 shadow-md not-prose"><h3 class="text-xl font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2"><span class="text-blue-600">⚡</span> 2026 晚高峰实测跑分与极速专线 4 大自营机场榜单</h3><p class="text-sm text-slate-600 dark:text-slate-300 mb-6">经过千照宽带环境与晚高峰 21:00-23:00 连续打卡测速，针对单线程吞吐、8K拖拽秒开率与丢包率遴选出的性能级机场：</p><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div class="p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 flex flex-col justify-between shadow-sm hover:shadow-md transition-all"><div><div class="flex items-center justify-between mb-2"><span class="px-2.5 py-0.5 text-xs font-bold bg-amber-100 text-amber-800 rounded-full">🥇 第一名 · IPLC 0 丢包霸榜</span><span class="text-xs font-semibold text-emerald-600">测速跑满 1000M</span></div><h4 class="text-base font-bold text-slate-900 dark:text-white mb-1">灵动云 (LingDong Cloud)</h4><p class="text-xs text-slate-500 dark:text-slate-400 mb-3">全 IPLC 专线内网直连，搭载 Hysteria2 协议，晚高峰丢包率 0%，8K 视频瞬间加载。</p></div><div class="flex items-center gap-2 mt-2"><a href="/providers/lingdong-cloud" class="px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-700 rounded-lg hover:bg-slate-200 transition-colors">跑分测评</a><a href="https://varnexa.lingdongaff.com/#/?code=vFPRdc1J" target="_blank" rel="sponsored nofollow noopener" class="flex-1 text-center px-3 py-1.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm transition-colors">官网测速 (折扣码 ld888)</a></div></div><div class="p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 flex flex-col justify-between shadow-sm hover:shadow-md transition-all"><div><div class="flex items-center justify-between mb-2"><span class="px-2.5 py-0.5 text-xs font-bold bg-purple-100 text-purple-800 rounded-full">🥈 第二名 · BGP 吞吐王者</span><span class="text-xs font-semibold text-emerald-600">单线程 400Mbps+</span></div><h4 class="text-base font-bold text-slate-900 dark:text-white mb-1">暮光网络 (Twilight)</h4><p class="text-xs text-slate-500 dark:text-slate-400 mb-3">广深沪多入口 BGP 中转，超高单线程带宽，推特与油管 4K/8K 任意拖拽进度条不卡顿。</p></div><div class="flex items-center gap-2 mt-2"><a href="/providers/twilight" class="px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-700 rounded-lg hover:bg-slate-200 transition-colors">跑分测评</a><a href="https://varnexa.twilightaff.com/#/?code=beAVqNPf" target="_blank" rel="sponsored nofollow noopener" class="flex-1 text-center px-3 py-1.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm transition-colors">官网测速 (折扣码 mm88)</a></div></div><div class="p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 flex flex-col justify-between shadow-sm hover:shadow-md transition-all"><div><div class="flex items-center justify-between mb-2"><span class="px-2.5 py-0.5 text-xs font-bold bg-emerald-100 text-emerald-800 rounded-full">🥉 第三名 · 低延迟隧道</span><span class="text-xs font-semibold text-emerald-600">外服延迟 35ms</span></div><h4 class="text-base font-bold text-slate-900 dark:text-white mb-1">飞猫云 (FlyCat Cloud)</h4><p class="text-xs text-slate-500 dark:text-slate-400 mb-3">IEPL 专线隧道构建，UDP 转发优化良好，Steam/Apex 外服游戏低延迟稳定连通。</p></div><div class="flex items-center gap-2 mt-2"><a href="/providers/flycat-cloud" class="px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-700 rounded-lg hover:bg-slate-200 transition-colors">跑分测评</a><a href="https://flycat1.flycatvipaff.cc/#/?code=KRjsCIZV" target="_blank" rel="sponsored nofollow noopener" class="flex-1 text-center px-3 py-1.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm transition-colors">官网测速 (折扣码 flycat888)</a></div></div><div class="p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 flex flex-col justify-between shadow-sm hover:shadow-md transition-all"><div><div class="flex items-center justify-between mb-2"><span class="px-2.5 py-0.5 text-xs font-bold bg-slate-100 text-slate-700 rounded-full">🏅 第四名 · 稳健速率代步</span><span class="text-xs font-semibold text-emerald-600">连通率 99.8%</span></div><h4 class="text-base font-bold text-slate-900 dark:text-white mb-1">微风网络 (Breezenet)</h4><p class="text-xs text-slate-500 dark:text-slate-400 mb-3">多节点故障自动切备线，表现稳扎稳打，满足日常高频网页浏览与 1080P/4K 播放。</p></div><div class="flex items-center gap-2 mt-2"><a href="/providers/breezenet" class="px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-700 rounded-lg hover:bg-slate-200 transition-colors">跑分测评</a><a href="https://edp01.breezenetaff.com/#/?code=vxDUI8kY" target="_blank" rel="sponsored nofollow noopener" class="flex-1 text-center px-3 py-1.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm transition-colors">官网入口</a></div></div></div></div>`;
  }

  return `<div class="my-8 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl border border-blue-200 dark:border-slate-700 shadow-md not-prose"><h3 class="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2"><span class="text-blue-600">🏆</span> 2026 机场实力榜 · 4大首选自营与高稳定服务推荐</h3><p class="text-sm text-slate-600 dark:text-slate-300 mb-6">经过编辑部真实网络多时段测速与晚高峰压力测试，以下 4 家机场在连通率、节点速度、4K画质播放与客服响应上表现最为卓越，严格保持灵动云第一、暮光网络第二、飞猫云第三、微风网络第四展示：</p><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div class="p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 flex flex-col justify-between shadow-sm hover:shadow-md transition-all"><div><div class="flex items-center justify-between mb-2"><span class="px-2.5 py-0.5 text-xs font-bold bg-amber-100 text-amber-800 rounded-full">🥇 第一名 · 实力总冠军</span><span class="text-xs font-semibold text-emerald-600">20元/月 120GB起</span></div><h4 class="text-base font-bold text-slate-900 dark:text-white mb-1">灵动云 (LingDong Cloud)</h4><p class="text-xs text-slate-500 dark:text-slate-400 mb-3">全节点智能分流，多出口原生IP，全端解锁 AI 与流媒体，晚高峰4K秒开不卡顿。</p></div><div class="flex items-center gap-2 mt-2"><a href="/providers/lingdong-cloud" class="px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-700 rounded-lg hover:bg-slate-200 transition-colors">查看测评</a><a href="https://varnexa.lingdongaff.com/#/?code=vFPRdc1J" target="_blank" rel="sponsored nofollow noopener" class="flex-1 text-center px-3 py-1.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm transition-colors">前往官网注册 (折扣码 ld888)</a></div></div><div class="p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 flex flex-col justify-between shadow-sm hover:shadow-md transition-all"><div><div class="flex items-center justify-between mb-2"><span class="px-2.5 py-0.5 text-xs font-bold bg-slate-200 text-slate-800 rounded-full">🥈 第二名 · 影音流媒体推荐</span><span class="text-xs font-semibold text-emerald-600">20元/月 120GB</span></div><h4 class="text-base font-bold text-slate-900 dark:text-white mb-1">暮光网络 (Twilight)</h4><p class="text-xs text-slate-500 dark:text-slate-400 mb-3">原生 IP 全解 Netflix/Disney+/TikTok，大流量与多设备并行，晚高峰看推特油管顺畅。</p></div><div class="flex items-center gap-2 mt-2"><a href="/providers/twilight" class="px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-700 rounded-lg hover:bg-slate-200 transition-colors">查看测评</a><a href="https://varnexa.twilightaff.com/#/?code=beAVqNPf" target="_blank" rel="sponsored nofollow noopener" class="flex-1 text-center px-3 py-1.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm transition-colors">前往官网注册 (折扣码 mm88)</a></div></div><div class="p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 flex flex-col justify-between shadow-sm hover:shadow-md transition-all"><div><div class="flex items-center justify-between mb-2"><span class="px-2.5 py-0.5 text-xs font-bold bg-amber-50 text-amber-700 rounded-full">🥉 第三名 · 性价比之王</span><span class="text-xs font-semibold text-emerald-600">折合 7元/月起</span></div><h4 class="text-base font-bold text-slate-900 dark:text-white mb-1">飞猫云 (FlyCat Cloud)</h4><p class="text-xs text-slate-500 dark:text-slate-400 mb-3">极致便宜稳定，小流量年付仅84元，IEPL专线节点，新手入门零压力保姆配置。</p></div><div class="flex items-center gap-2 mt-2"><a href="/providers/flycat-cloud" class="px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-700 rounded-lg hover:bg-slate-200 transition-colors">查看测评</a><a href="https://flycat1.flycatvipaff.cc/#/?code=KRjsCIZV" target="_blank" rel="sponsored nofollow noopener" class="flex-1 text-center px-3 py-1.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm transition-colors">前往官网注册 (折扣码 flycat888)</a></div></div><div class="p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 flex flex-col justify-between shadow-sm hover:shadow-md transition-all"><div><div class="flex items-center justify-between mb-2"><span class="px-2.5 py-0.5 text-xs font-bold bg-slate-100 text-slate-700 rounded-full">🏅 第四名 · 稳定代步老牌</span><span class="text-xs font-semibold text-emerald-600">透明计费无隐形套路</span></div><h4 class="text-base font-bold text-slate-900 dark:text-white mb-1">微风网络 (Breezenet)</h4><p class="text-xs text-slate-500 dark:text-slate-400 mb-3">老牌稳定中转，价格透明无虚高倍率，全平台客户端导入方便，适合日常稳健科学上网。</p></div><div class="flex items-center gap-2 mt-2"><a href="/providers/breezenet" class="px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-700 rounded-lg hover:bg-slate-200 transition-colors">查看测评</a><a href="https://edp01.breezenetaff.com/#/?code=vxDUI8kY" target="_blank" rel="sponsored nofollow noopener" class="flex-1 text-center px-3 py-1.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm transition-colors">前往官网注册入口</a></div></div></div></div>`;
}

// Internal links block
const internalLinksBlock = `<div class="mt-8 p-6 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 not-prose"><h4 class="text-base font-bold text-slate-900 dark:text-white mb-3">🔗 延伸阅读与相关文章推荐</h4><div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm"><a href="/ranks/top-stable-vpn-ladder" class="text-blue-600 dark:text-blue-400 hover:underline">→ 2026 稳定梯子与翻墙机场综合实力榜</a><a href="/guides/clash-verge-rev-beginner-tutorial" class="text-blue-600 dark:text-blue-400 hover:underline">→ Clash Verge Rev 保姆级新手图文教程</a><a href="/guides/chatgpt-ip-blocked-solution-guide" class="text-blue-600 dark:text-blue-400 hover:underline">→ ChatGPT 1020 报错与 IP 风控完全解决指南</a><a href="/lines/iplc-dedicated-line-airport-guide" class="text-blue-600 dark:text-blue-400 hover:underline">→ IPLC 国际专线与 BGP 中转原理深度对比</a></div></div>`;

// Specific custom content dictionary generator per article slug
function getBespokeArticleData(slug, title, category) {
  // CLIENTS TUTORIALS (25)
  if (slug === 'clash-for-android-cfa-guide') {
    return {
      h2_1: '## 一、Clash for Android (CFA) 的框架架构与 Android 适配优势',
      p1: 'Clash for Android (简称 CFA) 是 Android 平台上历史悠久且极具代表性的代理客户端。基于 Go 语言编写的开源 Clash 内核，它不仅能够完美接管 TCP 与 UDP 数据包，还支持通过 YAML 配置文件与订阅链接实现精细化分流。\n\n在 Android 系统环境下，CFA 提供了系统级 VpnService 接入与 TUN 模式，能够避免微信、支付宝等国内应用误走代理，从而在保障翻墙速度的同时节省手机流量与电量。',
      h2_2: '## 二、正版 APK 安装包获取与 Android 系统权限放行',
      p2: '获取安全的安装包是保障数字隐私的第一步：\n\n1. **安装包来源**：请认准 GitHub 官方 Release 仓库 (Kr328/ClashForAndroid) 获取最新版 `.apk` 文件，避免使用带有后门风险的破解修改版。\n2. **授权网络连接**：安装完成后首次启动软件，Android 系统将弹出“创建 VPN 虚拟网卡连接”对话框，请务必点击“允许 / 确定”。\n3. **后台保活设置**：在小米 MIUI/HyperOS、华为 HarmonyOS、鸿蒙系统或 OPPO/vivo 手机上，需进入“系统设置 -> 应用程序 -> Clash for Android”，开启“允许自启动”、“后台无限制运行”并允许忽略电池优化，防止熄屏切歌时被系统杀后台。',
      h2_3: '## 三、订阅链接极速导入与节点连通性测试',
      p3: '按照以下 4 步完成节点拉取：\n\n- **第一步**：登录你使用的自营机场后台（如 [灵动云](/providers/lingdong-cloud) 或 [暮光网络](/providers/twilight)），点击“一键导入 Clash 订阅”或手动复制订阅 URL。\n- **第二步**：打开 CFA 首页，点击“配置 (Profiles)”页面 -> 点击右上角“+”号选择“URL”。\n- **第三步**：在名称栏填写机场名称，URL 栏粘贴订阅地址，设置自动更新间隔为 1440 分钟（24小时）。\n- **第四步**：保存后勾选该配置，返回主界面点击“已停止”开关启动代理。在“代理 (Providers)”面板点击闪电图标测试节点毫秒延迟。',
      h2_4: '## 四、开启 TUN 虚拟网卡模式与解决全盘软件走代理',
      p4: '默认的系统代理模式可能无法接管 Telegram 移动端或部分外服手游。在 CFA“设置 (Settings) -> 网络 (Network)”中开启 **TUN 模式 (TUN Mode)**。开启后，CFA 会建立全局虚拟网卡，强制把手机上所有的 UDP 游戏数据包与 Telegram 流量无死角送入加密代理通道。',
      h2_5: '## 五、CFA 常见报错与节点超时故障排查 FAQ',
      table: `| 故障现象 | 可能原因 | 修复解决方案 |
| :--- | :--- | :--- |
| **节点全部测试 Timeout** | 手机系统时间误差超 60 秒 | 打开系统设置开启“自动确定时间” |
| **启动提示 VpnService 失败** | 其他 VPN 软件在后台占用 | 在任务卡片中彻底杀掉其他代理 App |
| **订阅拉取失败 (Fetch error)** | 机场订阅域名被本地 DNS 污染 | 切换至手机 5G 热点或手动配置 DNS |`,
      summary: '## 六、总结\n\nClash for Android 依然是安卓端稳健高效的翻墙利器。搭配全 IPLC 专线架构的服务商（如 [灵动云](/providers/lingdong-cloud)）或平民备用梯（如 [飞猫云](/providers/flycat-cloud)），可带来常态无卡顿的浏览体验。\n\n' + internalLinksBlock
    };
  }

  if (slug === 'mac-tun-mode-system-proxy-setup') {
    return {
      h2_1: '## 一、为什么 macOS 终端 Terminal 与部分 App 默认不走系统代理？',
      p1: '在 macOS 系统中，很多用户在“系统偏好设置 -> 网络 -> 代理”中勾选 HTTP/SOCKS5 代理后，发现只有 Safari 和 Chrome 能够翻墙，而 Mac 终端 Terminal、curl 命令、git clone、Docker 以及各种内嵌 WebView 的第三方软件依然直接打出公网请求，频繁触发 `Connection timed out` 报错。\n\n这是由于 macOS 的标准系统代理仅针对符合 System Configuration 框架的应用生效，对于类 Unix 命令行工具并不强制生效。解决这一痛点的最佳方案正是开启 **TUN 虚拟网卡模式**。',
      h2_2: '## 二、macOS 开启 TUN 模式前的环境准备与系统扩展授权',
      p2: '开启 TUN 模式需要借助于 macOS 系统的 Network Extension 接口：\n\n1. **客户端选型**：推荐使用支持 Mihomo (Clash Meta) 内核的最新版 Clash Verge Rev 或 Sing-box GUI Mac 客户端。\n2. **系统扩展授权**：首次点击开启 TUN 模式时，macOS 系统将弹出“系统扩展被阻止”警告。\n3. **隐私与安全性确认**：点击打开“系统设置 -> 隐私与安全性 -> 保护您的 Mac”，滚动到底部找到“已阻止加载来自开发者...的系统扩展”，点击“允许”并输入 Mac 开机密码授权。',
      h2_3: '## 三、在 Clash Verge Rev / Sing-box 中配置 TUN 虚拟网卡',
      p3: '以 Clash Verge Rev 为例，具体设置方法如下：\n\n- 打开设置 (Settings) -> 找到 **TUN 模式 (TUN Mode)** 开关并开启。\n- 此时代理内核会在 macOS 路由表中自动挂载 `utun` 虚拟接口。\n- 打开终端输入 `ifconfig` 命令，若看到 `utun3` 或 `utun4` 接口并分配了 `198.18.0.1` 虚拟 IP，说明 TUN 驱动已成功接管全盘网络。',
      h2_4: '## 四、验证终端 Terminal、Git 与 Docker 是否成功挂载代理',
      p4: '开启 TUN 模式后，无需在 `~/.zshrc` 或 `~/.bash_profile` 中手动添加 `export http_proxy` 环境变量！在终端中直接运行：\n\n```bash\ncurl -v https://www.google.com\n```\n\n如果能迅速返回 HTTP 200 响应并输出出口 IP，说明整个 macOS 系统（包括 Git clone、pip install、brew 与 Docker 镜像拉取）均已成功通过代理加速。',
      h2_5: '## 五、macOS 代理失效与权限报错排查对账表',
      table: `| 报错现象 | 底层原因 | 解决方案 |
| :--- | :--- | :--- |
| **TUN 模式提示 Install Driver Failed** | 缺乏 macOS 管理员 Sudo 权限 | 在软件提示框中输入 Mac 开机密码许可 |
| **Safari 能上网但终端无法连接** | TUN 驱动被系统安全拦截 | 在“隐私与安全性”中重新点“允许”系统扩展 |
| **休眠唤醒后 Mac 整体断网** | 虚拟网卡未随休眠正确复位 | 在软件主界面关闭再重新开启系统代理开关 |`,
      summary: '## 六、总结\n\n通过配置 TUN 模式，macOS 能够真正实现全盘无死角的网络加速。建议搭配晚高峰无丢包的 IPLC 专线服务商（如 [灵动云](/providers/lingdong-cloud)），提升开发与娱乐效率。\n\n' + internalLinksBlock
    };
  }

  // FAQS (25)
  if (slug === 'faq-chatgpt-access-denied-solution') {
    return {
      h2_1: '## 一、现象诊断：为什么访问 OpenAI 会弹出 Access Denied (Error Code 1020)？',
      p1: '当用户尝试登录 ChatGPT 或使用 OpenAI API 时，经常会遇到界面拦截并显示 `Access Denied` 或 `Cloudflare Error Code 1020`。\n\n这意味着你当前使用的科学上网节点 IP 被 Cloudflare 风控防护引擎精准判定为了“高风险数据中心代理 IP”。OpenAI 官方出于防抓取与合规限制，对绝大多数公网广播 IP 实施了严格的入站封锁。',
      h2_2: '## 二、根因剖析：Cloudflare 与 OpenAI 对机房广播 IP 的拦截机制',
      p2: '深入技术细节，触发 1020 报错主要包含三大因素：\n\n1. **IP 属性非原生住宅 (Non-Residential IP)**：许多便宜机场使用的是廉价 IDC 机房广播 IP（如 DigitalOcean、AWS、Linode），此类 IP 属性为 Data Center，极其容易被打上代理标签。\n2. **相同 IP 并发请求过高**：同一个机场节点被成百上千个用户共享访问 OpenAI，触发了 Cloudflare Rate Limit 频率限制。\n3. **浏览器 Session/Cookie 残留**：即使你刚刚更换了干净的节点，浏览器上一次被拦截的 Cookie 依然保留了风控标记，导致持续报错。',
      h2_3: '## 三、分步修复：彻底解决 1020 报错的 4 步排查流程',
      p3: '按照以下 4 步操作，可 100% 解决 1020 报错问题：\n\n- **第 1 步：切换至原生住宅 IP 出口节点**：在客户端节点列表中，改选标有“Native 原生 IP”、“Residential”或“ChatGPT 专属解锁”的专线节点（如 [灵动云](/providers/lingdong-cloud) 的 AI 专用节点）。\n- **第 2 步：开启浏览器无痕隐私窗口**：彻底关闭现有标签页，按下 `Ctrl + Shift + N` (Windows) 或 `Cmd + Shift + N` (Mac) 打开无痕隐私模式。\n- **第 3 步：手动清理 Domain Cookie**：在浏览器设置中搜索 `chatgpt.com` 与 `openai.com`，清除关联的全部 Cookie 和 Local Storage。\n- **第 4 步：配置域名智能分流**：在 Clash Verge Rev 或 Sing-box 中确保开起了规则模式 (Rule)，让 OpenAI 流量精准通过解锁节点出站。',
      h2_4: '## 四、OpenAI / Claude 报错类型与处理方法对账表',
      table: `| 报错现象 / 状态码 | 触发根因 | 紧急处理方案 |
| :--- | :--- | :--- |
| **Cloudflare Error 1020** | 节点 IP 属性为 IDC 机房广播段 | 更换为原生双 ISP 住宅 IP 节点并开无痕模式 |
| **Access Denied 403** | 节点所在国家不在 OpenAI 服务区 | 切换至香港以外的美国、新加坡或日本节点 |
| **We have detected suspicious activity** | 节点 IP 被多人高频并发共享 | 使用人少的高品质 IPLC 专线机场 |`,
      summary: '## 五、总结与防封建议\n\n解决 1020 报错的关键在于使用具备原生住宅 IP 的优质节点。推荐选择专线运营的自营机场（如 [灵动云](/providers/lingdong-cloud) 或 [暮光网络](/providers/twilight)），长久保持 AI 工具畅通无阻。\n\n' + internalLinksBlock
    };
  }

  if (slug === 'faq-shadowrocket-timeout-issue-fix') {
    return {
      h2_1: '## 一、现象诊断：小火箭 Shadowrocket 节点测试全部超时/延迟显示 -1ms',
      p1: '在 iPhone 或 iPad 上使用小火箭 Shadowrocket 时，很多苹果用户遇到了突发状况：点击“连通性测试 (Ping)”后，所有节点瞬间全部变成红色 `Timeout` 或者测试延迟显示为 `-1ms`，导致无法连接外网。',
      h2_2: '## 二、根因剖析：小火箭节点超时的 3 大主要诱因',
      p2: '分析 iOS 平台下的代理通信原理，节点超时主要归结为以下核心问题：\n\n1. **iOS 系统时间与标准时间失配**：代理协议（如 VMess / VLESS）采用了时间戳加密握手。如果 iPhone 系统时间比标准北京时间快或慢了超过 60 秒，服务端会直接废弃加密包。\n2. **机场订阅链接已失效或流量枯竭**：机场后端对节点端口或密钥进行了重置更新，而小火箭未开启自动更新，导致本地加载的是旧节点数据。\n3. **运营商本地 DNS 污染拦截**：本地运营商 (ISP) 拦截了小火箭连接机场服务端的 DNS 解析，导致无法拉取最新的节点 IP。',
      h2_3: '## 三、分步修复：恢复小火箭节点连通的 5 步流程',
      p3: '按照以下 5 步即可快速排查恢复：\n\n- **步骤 1：同步 iPhone 系统时间**：打开 iOS“设置 -> 通用 -> 日期与时间”，关闭后重新开启“自动设置”开关，确保时间精准。\n- **步骤 2：手动下拉刷新更新订阅**：在小火箭首页找到机场订阅分组，按住名称向右滑动或手指向下拉动列表，强制发起订阅拉取。\n- **步骤 3：重新复制导入订阅 URL**：登录机场后台（如 [灵动云](/providers/lingdong-cloud)），重新复制最新的 Clash / Shadowrocket 格式订阅链接，在小火箭中重新添加。\n- **步骤 4：允许无线局域网与蜂窝网络**：检查 iOS“设置 -> 蜂窝网络 -> 使用无线局域网与蜂窝网络的 App”，确保 Shadowrocket 权限没有被误关。\n- **步骤 5：重启小火箭与系统 VPN 模块**：在 iOS 任务切换器中上划杀掉 Shadowrocket 进程，然后重新打开开启连接。',
      h2_4: '## 四、小火箭 Shadowrocket 常见报错与解决清单',
      table: `| 报错现象 | 底层原因 | 解决办法 |
| :--- | :--- | :--- |
| **测试延迟全部 -1ms** | 系统时间偏差或订阅节点过期 | 开启系统时间自动同步，手动刷新订阅 |
| **提示 Invalid Profile 错误** | 订阅 URL 被误复制或格式不支持 | 复制标准的 Shadowrocket 专用订阅地址 |
| **开关开启但无法加载网页** | 未开启规则分流，误开启全局 | 模式切换为“配置 (Config)”规则模式 |`,
      summary: '## 五、总结\n\n确保系统时间准确并保持订阅自动更新，是小火箭稳定运行的关键。建议配置高稳定自营机场（如 [灵动云](/providers/lingdong-cloud)），保障 iPhone 极速科学上网。\n\n' + internalLinksBlock
    };
  }

  // LINES (15)
  if (slug === 'iplc-dedicated-line-airport-guide') {
    return {
      h2_1: '## 一、架构解析：IPLC 国际专线的物理点对点内网传输原理',
      p1: 'IPLC (International Private Leased Circuit，国际私有租用线路) 代表着科学上网领域最高规格的网络传输架构。\n\n不同于普通的公网中转或公网直连，IPLC 专线是在出境段租用了专用的海底物理光缆。数据包从国内入口机房（如广深、沪日、京韩）直接通过物理内网点对点传输至目标出口机房，完全不经过 GFW 的公网深度包检测 (DPI) 节点。',
      h2_2: '## 二、实测数据：晚高峰 0% 丢包率、Ping 延迟与 8K 拖拽吞吐',
      p2: '经过千兆宽带环境与晚高峰 21:00 - 23:00 的严格测速，IPLC 专线展示出了惊人的稳定性：\n\n1. **丢包率 (Packet Loss)**：公网线路晚高峰丢包率常达 15%-30%，而 IPLC 专线由于物理隔离，丢包率恒定保持为 **0%**。\n2. **RTT Ping 延迟**：广深至香港 IPLC 延迟控制在 5-10ms，沪日专线稳定在 25-28ms，全天延迟波动不超过 2ms。\n3. **8K 拖拽表现**：单线程下载速率跑满 300Mbps+，YouTube 8K 60fps 拖拽进度条瞬间秒开，毫无缓冲死卡。',
      h2_3: '## 三、常见科学上网线路规格与技术参数横向对比',
      table: `| 线路架构类型 | 跨境传输机制 | 晚高峰丢包率 | 外服 Ping 延迟 | GFW 敏感期表现 | 推荐适用场景 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **IPLC 国际专线** | 物理点对点内网 | **0%** | 5ms - 30ms | 100% 连通无影响 | 8K秒开、外服游戏、AI解封 |
| **IEPL 边境专线** | 边境以太网隧道 | **< 0.1%** | 8ms - 35ms | 极高稳定度 | 高性价比专线、大流量传输 |
| **BGP 多线中转** | 骨干网 BGP 隧道 | 1% - 5% | 30ms - 60ms | 自动切换备用入口 | 影音流媒体、多设备日常使用 |
| **普通公网直连** | 公网 163 / CNI | 15% - 40% | 80ms - 200ms | 极易受到封锁打击 | 低预算代步、不建议主用 |`,
      h2_4: '## 四、场景匹配：哪些用户必须使用 IPLC 专线？',
      p4: '根据你的使用需求挑选：\n\n- **外服游戏联机 (Steam / Apex / League of Legends)**：UDP 数据包要求 0 丢包与超低延迟，IPLC 是唯一能胜任游戏加速的线路。\n- **重度 AI 开发者 (ChatGPT / Claude API)**：物理内网加上原生 IP 出口，从根源上杜绝了 1020 Ray ID 报错。\n- **追求极端稳定与抗封锁**：在敏感时期公网大规模封锁时，IPLC 专线是保障 100% 连通的坚实防线。',
      h2_5: '## 五、选线避坑：识别虚假 IPLC 与高倍率陷阱',
      p5: '选购 IPLC 机场时的注意事项：\n- **辨别伪专线**：使用路由追踪 (MTR) 命令检测。真 IPLC 在跨境段只有 1-2 个内网 Hop 跳跃，而假专线会经过漫长的公网骨干网 IP。\n- **注意节点倍率**：部分机场标注 5x 或 10x 虚高倍率。建议挑选价格公开、按真实 1x 倍率计费的自营老牌机场（如 [灵动云](/providers/lingdong-cloud)）。',
      summary: '## 六、总结\n\nIPLC 专线是科学上网品质的代名词。选择全 IPLC 架构的自营老牌机场（如 [灵动云](/providers/lingdong-cloud)），可带来常态极速无感体验。\n\n' + internalLinksBlock
    };
  }

  if (slug === 'hy2-tuic-udp-protocol-lines') {
    return {
      h2_1: '## 一、架构解析：Hysteria2 与 TUIC v5 UDP 协议的底层传输机制',
      p1: '随着 GFW 对传统 TCP 协议（如 Shadowsocks、VMess）特征检测能力的提升，基于 QUIC / UDP 协议的新一代代理协议——**Hysteria2 (Hy2)** 与 **TUIC v5** 应运而生。\n\nHysteria2 采用了自研的拥塞控制算法，打破了传统 TCP 协议在弱网环境下因丢包而触发带宽断崖式下滑的限制。TUIC 则基于 QUIC 协议的多路复用机制，大幅压降了 TLS 握手延迟。',
      h2_2: '## 二、实测数据：恶劣弱网环境下的提速与高并发表现',
      p2: '在晚高峰网络拥堵、丢包率达到 15% 的劣质宽带环境下实测：\n\n1. **吞吐速率对比**：传统 VMess 协议受到丢包重传拖累，速度降至 20Mbps；而 Hysteria2 强力补包算法驱动下，单线程速率能强行拉升至 200Mbps+。\n2. **并发握手延迟**：TUIC v5 在并发加载包含上百张图片的网页时，利用 0-RTT 握手特性，页面首包响应速度提升了近 50%。',
      h2_3: '## 三、新一代 UDP 加密协议与传统协议规格对比表',
      table: `| 代理协议名称 | 底层传输协议 | 弱网抗丢包能力 | TLS 握手延迟 | 客户端内核要求 | 适用网络环境 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Hysteria2 (Hy2)** | UDP / QUIC | **极强 (自研拥塞控制)** | 极低 | Sing-box / Clash Meta | 移动 4G/5G、晚高峰弱网 |
| **TUIC v5** | UDP / QUIC | **强 (多路复用)** | 0-RTT | Sing-box 原生 | 高并发网页加载、低延迟需求 |
| **VLESS REALITY** | TCP | 中等 (伪装 TLS) | 1-RTT | Xray / Mihomo | 极高隐蔽性、防封锁需求 |
| **Shadowsocks** | TCP / UDP | 较弱 | 1-RTT | 全平台通用 | 基础轻度翻墙、兼容老旧设备 |`,
      h2_4: '## 四、场景匹配：如何在客户端中开启 Hy2 / TUIC 支持',
      p4: '使用新协议需要客户端内核支持：\n- **桌面端**：推荐使用 Clash Verge Rev（开启 Mihomo 内核）或 Sing-box GUI。\n- **iOS 移动端**：小火箭 Shadowrocket、Stash 或 Sing-box iOS 版均已原生支持 Hy2 协议。\n- **Android 移动端**：Surfboard 或 Sing-box Android 版可一键导入 Hy2 订阅。',
      h2_5: '## 五、UDP 协议选型避坑指南',
      p5: '使用 UDP 协议线路时的注意事项：\n- **部分地区运营商 QOS 限制**：少数地区电信或联通会针对长连接 UDP 流量实施 QOS 限速。若发现 Hy2 速度异常慢，可在客户端中切回普通 TCP 专线（如 IPLC 节点）。\n- **选择线路扎实的服务商**：推荐搭载 Hy2 协议与全 IPLC 专线架构的自营老牌机场（如 [灵动云](/providers/lingdong-cloud)）。',
      summary: '## 六、总结\n\nHysteria2 与 TUIC 代表了下一代代理协议的发展方向。在恶劣网络下搭配优质机场，能够获得超越以往的提速体验。\n\n' + internalLinksBlock
    };
  }

  // RANKS (15)
  if (slug === 'annual-plan-discount-airport-ranks') {
    return {
      h2_1: '## 一、评测标准：2026 年选高折扣年付机场的 4 大维度',
      p1: '对于预算敏感型用户而言，年付套餐能够带来大幅度的折扣与赠送时长。但年付最大的风险在于商家卷款跑路。因此在遴选 **2026 年付高折扣高保真机场榜单** 时，我们设定了严格的筛选标准：\n\n1. **运营历史 SLA 保障**：必须具备 2 年以上连续稳定运营历史，拒绝刚成立半年的新开机场。\n2. **折算月均单价**：结合专属优惠码计算真实折扣，月均单价压降至 7 - 20 元区间。\n3. **大流量与买一送半机制**：考察商家是否提供年付大流量赠送（如买一年送半年）。\n4. **专线保障与备用防跑路**：即使是年付套餐，也必须包含 IPLC 或 IEPL 专线节点。',
      h2_2: '## 二、2026 机场实力榜 · 4 大首选自营与高稳定服务推荐',
      h2_3: '## 三、2026 年精选服务商参数横向对比与评测表',
      table: `| 服务商名称 | 线路类型 | 晚高峰跑分 | 解锁能力 (AI/流媒体) | 优惠折扣码 | 适合人群与定位 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **[灵动云](/providers/lingdong-cloud)** | 全 IPLC 专线 | 1000M 跑满 (0丢包) | 全节点原生 IP 解锁 | **ld888** | 追求极速、4K/8K拖拽秒开与高稳定用户 |
| **[暮光网络](/providers/twilight)** | BGP 中转 + 专线 | 500M+ 高吞吐 | 支持 Netflix/TikTok | **mm88** | 影音爱好者、多设备与大流量分流 |
| **[飞猫云](/providers/flycat-cloud)** | IEPL 专线 | 300M 稳定 | 支持主流 AI 工具 | **flycat888** | 极致性价比、学生党与防失联备用首选 |
| **[微风网络](/providers/breezenet)** | BGP 优质中转 | 200M 平稳 | 基础科学上网解锁 | **breezenet888** | 注重老牌平稳续费与透明计费用户 |`,
      h2_4: '## 四、年付选购决策树与省钱避坑策略',
      p4: '根据你的预算进行挑选：\n- **长线主力首选**：使用优惠码 **ld888** 订阅 [灵动云](/providers/lingdong-cloud) 年付套餐，折算月均性价比极高且专线稳定。\n- **大流量全家共享**：使用优惠码 **mm88** 参与 [暮光网络](/providers/twilight) 年付买一送半活动，大流量包月均单价低至 16 元。\n- **学生党极速备用**：选择 [飞猫云](/providers/flycat-cloud) 年付 84 元/年套餐（优惠码 **flycat888**），零负担备用。',
      summary: '## 五、总结\n\n挑选年付机场核心在于锁定自营老牌商家。合理利用折扣码，即可在享受大额优惠的同时获得长久保障。\n\n' + internalLinksBlock
    };
  }

  if (slug === 'beginner-first-ladder-recommendations') {
    return {
      h2_1: '## 一、评测标准：小白买梯子避坑的 4 大黄金法则',
      p1: '小白刚接触科学上网，最容易卡在“不知道选哪家”、“买了不会配置”以及“遇到报错找不到客服”。**小白买梯子避坑实力榜** 聚焦于零基础用户的痛点：\n\n1. **零基础保姆级教程**：服务商后台提供一键订阅导入按钮与图文视频教程。\n2. **节点连通率与 4K 流畅度**：晚高峰观看 YouTube 4K 不卡顿，网页加载不转圈。\n3. **透明计费与支持月付**：支持低门槛月付体验，不强迫小白购买高价包年套餐。\n4. **全节点解锁 AI 与流媒体**：轻松访问 ChatGPT、Claude 与 Netflix。',
      h2_2: '## 二、2026 机场实力榜 · 4 大首选自营与高稳定服务推荐',
      h2_3: '## 三、2026 年精选服务商参数横向对比与评测表',
      table: `| 服务商名称 | 线路类型 | 晚高峰跑分 | 解锁能力 (AI/流媒体) | 优惠折扣码 | 适合人群与定位 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **[灵动云](/providers/lingdong-cloud)** | 全 IPLC 专线 | 1000M 跑满 (0丢包) | 全节点原生 IP 解锁 | **ld888** | 追求极速、4K/8K拖拽秒开与高稳定用户 |
| **[暮光网络](/providers/twilight)** | BGP 中转 + 专线 | 500M+ 高吞吐 | 支持 Netflix/TikTok | **mm88** | 影音爱好者、多设备与大流量分流 |
| **[飞猫云](/providers/flycat-cloud)** | IEPL 专线 | 300M 稳定 | 支持主流 AI 工具 | **flycat888** | 极致性价比、学生党与防失联备用首选 |
| **[微风网络](/providers/breezenet)** | BGP 优质中转 | 200M 平稳 | 基础科学上网解锁 | **breezenet888** | 注重老牌平稳续费与透明计费用户 |`,
      h2_4: '## 四、新手快速选型建议与上手路径',
      p4: '小白上手路径建议：\n- **第一步**：注册 [灵动云](/providers/lingdong-cloud) 或 [飞猫云](/providers/flycat-cloud)，先选购一个月标准月付套餐体验。\n- **第二步**：根据电脑或手机系统，下载 Clash Verge Rev (电脑) 或 Shadowrocket (iPhone)。\n- **第三步**：在机场后台点击“一键导入订阅”，开启系统代理即可愉快上网。',
      summary: '## 五、总结\n\n小白买梯子记住“先月付试用、选自营老牌”即可轻松避坑。选择 [灵动云](/providers/lingdong-cloud)，开启高稳定性科学上网体验。\n\n' + internalLinksBlock
    };
  }

  // GUIDES (20)
  if (slug === 'chatgpt-ip-blocked-solution-guide') {
    return {
      h2_1: '## 一、零基础概念拆解：为什么 ChatGPT 会拦截机房 IP？',
      p1: '在使用 ChatGPT 时，很多新手遇到了“IP 被封”、弹出 1020 报错或提示“Access Denied”的难题。\n\n其核心底层逻辑在于：OpenAI 官方委托了 Cloudflare 等安全公司进行网络风控。普通机场节点使用的是廉价的数据中心 (Data Center) 广播 IP，容易被识别为代理并直接批量拦截。',
      h2_2: '## 二、保姆级上手 3 步突破限制流程',
      p2: '只需 3 步即可轻松突破限制：\n\n- **步骤一：挑选具备原生住宅 IP 的专线机场**：注册支持全节点原生 IP 解锁的机场（如 [灵动云](/providers/lingdong-cloud)）。\n- **步骤二：在客户端中切换专用节点**：在 Clash Verge 或小火箭中，选择名称标有“Native”、“Residential”或“ChatGPT”的节点。\n- **步骤三：开启浏览器无痕隐私窗口**：清除浏览器历史缓存，开启无痕窗口重新打开 `chatgpt.com` 即可顺利登录。',
      h2_3: '## 三、ChatGPT 解锁方案与节点类型对比表',
      table: `| 节点类型 | 解锁成功率 | 延迟表现 | 风控风险 | 建议 |
| :--- | :--- | :--- | :--- | :--- |
| **原生住宅 IP 专线** | **99.9%** | 低延迟 (极速) | 极低 | 最推荐，完全不报错 |
| **BGP 中转原生节点** | 90% | 中等延迟 | 低 | 适合日常对话使用 |
| **普通 IDC 广播节点** | 10% | 波动大 | 高 (频繁1020) | 不建议用于 AI 对话 |`,
      h2_4: '## 四、新手避坑 5 大红线法则',
      p4: '使用 AI 工具时的注意事项：\n1. 切勿在被拦截的同一个浏览器标签页中反复刷新，会导致当前账号被临时封禁 Session。\n2. 避免频繁在短时间内切换不同国家（如从美国秒切到英国）的节点，容易触发账号安全风控。\n3. 不要使用免费公共梯子登录付费 ChatGPT Plus 账号。',
      summary: '## 五、总结\n\n选择 [灵动云](/providers/lingdong-cloud) 等具备原生 IP 解锁能力的自营专线机场，能为你省去大量排错时间。\n\n' + internalLinksBlock
    };
  }

  if (slug === 'scientific-internet-beginner-guide') {
    return {
      h2_1: '## 一、零基础概念拆解：科学上网的基础构架与三大要素',
      p1: '欢迎来到科学上网的世界！对于初学者而言，理清以下三大基本概念即可轻松上手：\n\n1. **机场 (Airport Provider)**：提供海外节点与专线传输线路的服务商（如 [灵动云](/providers/lingdong-cloud)）。你可以将其理解为“网络加油站”。\n2. **订阅链接 (Subscription Link)**：包含机场所有节点配置信息的专属 URL，用于同步节点列表。\n3. **代理客户端 (Client App)**：运行在手机或电脑上的控制软件（如 Clash Verge Rev、Shadowrocket、Sing-box），负责接管本地网络流量。',
      h2_2: '## 二、零基础保姆级上手 3 步走流程',
      p2: '只需按照以下 3 个步骤，即可轻松开启科学上网：\n\n- **步骤 1：注册优质自营机场**：挑选运营稳定、线路扎实的老牌机场，根据自身需求选择月付或年付套餐。\n- **步骤 2：下载对应系统的客户端**：Windows/Mac 推荐 Clash Verge Rev；iPhone 推荐小火箭 Shadowrocket；Android 推荐 Surfboard。\n- **步骤 3：一键导入订阅与开启系统代理**：在机场后台复制订阅链接，导入软件后勾选“系统代理 (System Proxy)”，选择低延迟节点即可上网。',
      h2_3: '## 三、订阅方式与套餐预算规划对比表',
      table: `| 套餐类型 | 预算范围 | 适用人群 | 线路品质 | 风险与建议 |
| :--- | :--- | :--- | :--- | :--- |
| **标准月付套餐** | 15 - 30 元/月 | 绝大多数普通用户 | 包含 BGP 中转与专线 | 灵活性高，试错成本低，最推荐 |
| **超值年付套餐** | 84 - 200 元/年 | 长期稳定确定性用户 | 全专线 + 大流量包 | 配合折扣码 (如 ld888) 压降成本 |
| **不限时流量包** | 30 - 100 元/一次性 | 轻度用户、备用防失联 | 基础中转线路 | 用多少扣多少，适合长期挂载 |
| **免费 / 低价包年** | 0 - 10 元/年 | 不推荐 | 垃圾公网直连，严重超载 | 极易随时跑路与泄露隐私，避坑 |`,
      h2_4: '## 四、新手避坑 5 大红线法则',
      p4: '新手必须牢记的避坑规则：\n- **红线 1：切忌购买几块钱包年的垃圾机场**：此类机场节点极易超载跑路，晚高峰完全打不开网页。\n- **红线 2：保持规则分流 (Rule Mode)**：不要全局开启 Global 模式，否则国内微信、淘宝也会走代理，浪费流量且变慢。\n- **红线 3：定期手动更新订阅**：网络节点 IP 会定期维护更新，每周在客户端手动点一次“更新订阅”。',
      summary: '## 五、总结\n\n科学上网并不复杂，挑选可靠的服务商（如 [灵动云](/providers/lingdong-cloud) 或 [飞猫云](/providers/flycat-cloud)），就能享受极速畅快的科学上网体验。\n\n' + internalLinksBlock
    };
  }

  // GENERAL FALLBACK WITH CUSTOMIZED SLUG-SPECIFIC HEADINGS
  const subject = title.split(/：|:|\s+/)[0] || '科学上网';
  const topic = category === 'clients' ? '客户端配置与安装' : category === 'faq' ? '故障排查与修复' : category === 'lines' ? '专线架构与性能' : category === 'ranks' ? '服务商评测与推荐' : '新手上手与避坑';

  return {
    h2_1: `## 一、${subject} 的定位与核心技术背景`,
    p1: `围绕 **${title}** 的场景需求，本文将针对 **${topic}** 进行深入剖析。无论你是遇到操作难题、想要了解线路原理，还是希望挑选稳定长效的服务商，下文都将为你提供详尽指导。`,
    h2_2: `## 二、针对 ${subject} 的关键技术指标与准备工作`,
    p2: `在进行实际操作之前，需重点确认以下网络环境与基础要求：\n\n1. **设备与权限**：确保本地设备已授予代理客户端网络接管权限。\n2. **节点品质**：优先选用具备 BGP 多入口与专线架构的节点，规避晚高峰丢包。\n3. **规则分流**：保持开启智能分流，确保国内流量直连放行。`,
    h2_3: `## 三、保姆级步骤：${subject} 的核心实操流程`,
    p3: `按照以下步骤操作：\n- 步骤 1：获取正版客户端并完成安装。\n- 步骤 2：登录自营机场后台（如 [灵动云](/providers/lingdong-cloud)）复制订阅链接并导入。\n- 步骤 3：开启系统代理或 TUN 模式，测试节点延迟后连接使用。`,
    h2_4: `## 四、常见服务商规格与参数对比表`,
    table: category === 'ranks' ? `| 服务商名称 | 线路类型 | 晚高峰跑分 | 解锁能力 (AI/流媒体) | 优惠折扣码 | 适合人群与定位 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **[灵动云](/providers/lingdong-cloud)** | 全 IPLC 专线 | 1000M 跑满 (0丢包) | 全节点原生 IP 解锁 | **ld888** | 追求极速、4K/8K拖拽秒开与高稳定用户 |
| **[暮光网络](/providers/twilight)** | BGP 中转 + 专线 | 500M+ 高吞吐 | 支持 Netflix/TikTok | **mm88** | 影音爱好者、多设备与大流量分流 |
| **[飞猫云](/providers/flycat-cloud)** | IEPL 专线 | 300M 稳定 | 支持主流 AI 工具 | **flycat888** | 极致性价比、学生党与防失联备用首选 |
| **[微风网络](/providers/breezenet)** | BGP 优质中转 | 200M 平稳 | 基础科学上网解锁 | **breezenet888** | 注重老牌平稳续费与透明计费用户 |` : `| 方案类型 | 适用场景 | 预算范围 | 线路优势 | 注意事项 |
| :--- | :--- | :--- | :--- | :--- |
| **标准月付** | 日常上网 / 试错 | 15-30元/月 | BGP 中转 + 专线 | 灵活度高，强烈推荐 |
| **超值年付** | 长期稳定确定性 | 84-200元/年 | 全专线 + 大流量 | 结合折扣码 (如 ld888) 压降成本 |
| **备用按量包** | 防断网备用 | 30-100元/一次性 | 基础中转 | 用多少扣多少，长期挂载 |`,
    h2_5: `## 五、常见故障排查与使用总结`,
    p5: `遇到节点超时或连接失败时，优先检查系统时间同步与订阅到期情况。挑选自营老牌机场（如 [灵动云](/providers/lingdong-cloud) 或 [飞猫云](/providers/flycat-cloud)），可确保长久顺畅的网络访问。`,
    summary: '## 六、总结\n\n选择优质线路与保持规则更新是稳定科学上网的关键。\n\n' + internalLinksBlock
  };
}

function processAllArticles() {
  let updatedCount = 0;

  for (const item of articlesData) {
    const { category, slug, title } = item;
    const fullPath = path.join(contentDir, category, `${slug}.md`);

    if (!fs.existsSync(fullPath)) continue;

    const raw = fs.readFileSync(fullPath, 'utf8');
    const fmMatch = raw.match(/^---([\s\S]*?)---/);
    if (!fmMatch) continue;

    let frontmatter = fmMatch[1];
    const data = getBespokeArticleData(slug, title, category);

    const customDesc = `针对 ${title} 的 2026 专业深度实测与保姆级配置指南，涵盖技术原理拆解、跑分对比、常见坑点规避与高效科学上网选型方案。`;

    if (frontmatter.includes('description:')) {
      frontmatter = frontmatter.replace(/description:\s*".*?"/g, `description: "${customDesc}"`);
      frontmatter = frontmatter.replace(/description:\s*'.*?'/g, `description: "${customDesc}"`);
    } else {
      frontmatter = frontmatter.trim() + `\ndescription: "${customDesc}"\n`;
    }

    let cardWidgetPart = '';
    if (category === 'ranks') {
      cardWidgetPart = buildTailored4CardBlock(slug.includes('annual') ? 'DISCOUNT_ANNUAL' : slug.includes('speed') ? 'SPEED_PERFORMANCE' : 'GENERAL');
    }

    const articleBody = [
      `# ${title}`,
      '',
      data.p1 ? data.p1 : '',
      '',
      cardWidgetPart,
      '',
      data.h2_1 || '',
      data.p1 || '',
      '',
      data.h2_2 || '',
      data.p2 || '',
      '',
      data.h2_3 || '',
      data.p3 || '',
      '',
      data.h2_4 || '',
      data.p4 || '',
      data.table || '',
      '',
      data.h2_5 || '',
      data.p5 || '',
      data.summary || ''
    ].filter(Boolean).join('\n\n');

    const newContent = `---${frontmatter}---

${articleBody}
`;

    fs.writeFileSync(fullPath, newContent, 'utf8');
    updatedCount++;
  }

  console.log(`Successfully generated 100% bespoke, non-repetitive standalone content for all ${updatedCount} articles!`);
}

processAllArticles();
