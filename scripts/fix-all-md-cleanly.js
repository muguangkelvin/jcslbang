import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const contentDir = path.resolve(__dirname, '../src/content');

const cleanHtmlBlock = `<div class="my-8 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl border border-blue-200 dark:border-slate-700 shadow-md">
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

function processDirectory(dirPath) {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      processDirectory(fullPath);
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      let content = fs.readFileSync(fullPath, 'utf8');

      if (content.includes('bg-gradient-to-br') || content.includes('4大首选自营与高稳定服务推荐')) {
        // Regex to replace everything from <div class="my-8 p-6 bg-gradient-to-br up to the next Markdown heading ##
        const regex = /<div class="my-8 p-6 bg-gradient-to-br[\s\S]*?(?=\r?\n## |\r?\n# |\r?\n$)/g;
        if (regex.test(content)) {
          content = content.replace(regex, cleanHtmlBlock + '\n');
          fs.writeFileSync(fullPath, content, 'utf8');
          console.log(`Cleaned: ${fullPath}`);
        }
      }
    }
  }
}

processDirectory(contentDir);
console.log('Finished cleaning all markdown files!');
