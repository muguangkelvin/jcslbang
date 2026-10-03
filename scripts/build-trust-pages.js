const fs = require('fs');
const path = require('path');

const trustPages = [
  {
    slug: 'about',
    title: '关于我们',
    desc: '关于机场实力榜 的编辑定位、测速准则与服务宗旨。',
    content: `
# 关于我们：机场实力榜 **机场实力榜 ** 是专为零基础小白用户打造的网络隐私、远程办公与科学上网梯子评测平台。

## 我们的使命
在信息爆炸的时代，小白用户面临着虚假宣传、炸弹机场和个人隐私泄露等多重风险。本站通过长期真实跑分测速、链路丢包率追踪以及原生 IP 解锁测试，为用户筛选出最具性价比与高稳定性的机场服务。

## 核心特色
1. **客观实测**：拒绝未经测试的虚假第一，所有推荐均带最后核验日期。
2. **小白优先**：提供 Clash Verge Rev、Shadowrocket (小火箭) 及 Sing-box 的保姆级一键导入教程。
3. **双重保障**：首推全球云、飞猫云、暮光网络与微风网络，并建议用户配置备用机场防失联。
`
  },
  {
    slug: 'contact',
    title: '联系我们',
    desc: '联系机场实力榜编辑部，提交资料纠错与合作咨询。',
    content: `
# 联系我们

如有资料纠错、价格更正或合作询问，欢迎通过以下渠道联系编辑部：

- **官方 TG 频道 / 联系**：[https://t.me/+rGDXqHbxorZjN2Jl](https://t.me/+rGDXqHbxorZjN2Jl)
- **客服与反馈**：欢迎进入 Telegram 官方频道留言获取实时帮助。
`
  },
  {
    slug: 'editorial-policy',
    title: '编辑原则',
    desc: '机场实力榜的选题、证据、更新与利益冲突说明。',
    content: `
# 机场实力榜编辑原则

1. **客观独立**：编辑部基于网络传输物理延时、丢包率与4K秒开体验做出测评判断。
2. **事实求是**：价格与流量套餐变动频繁，全站标注最后核验日期，并以第三方服务结算页为准。
3. **透明披露**：站内部分按钮包含推荐或邀请代码，合作收益用于维持服务器与测速节点开支。
`
  },
  {
    slug: 'methodology',
    title: '评测方法',
    desc: '机场实力榜的数据测试方法、变量与网络跑分阅读方式。',
    content: `
# 评测方法与跑分标准

1. **晚高峰压力测试**：在每日 20:00 - 22:00 流量高峰期测试香港、日本、新加坡及美国节点的丢包率与 RTT 延迟。
2. **4K 拖拽测速**：测试 YouTube 4K 视频缓冲码率（目标值 > 15,000 Kbps）。
3. **AI 与流媒体解锁**：测试节点对 ChatGPT (OpenAI)、Claude 与 Netflix 住宅 IP 解锁连通率。
`
  },
  {
    slug: 'corrections',
    title: '纠错与更新政策',
    desc: '说明如何提交纠错、修改记录与更新规则。',
    content: `
# 纠错与更新政策

我们非常重视资料的准确性。若你发现某个机场的节点、套餐价格或优惠码已失效，请联系 Telegram 频道 [https://t.me/+rGDXqHbxorZjN2Jl](https://t.me/+rGDXqHbxorZjN2Jl)，编辑部将在 24 小时内复核并完成公开页面更新。
`
  },
  {
    slug: 'affiliate-disclosure',
    title: '联盟与邀请链接披露',
    desc: '说明邀请链接收益、合作关系与编辑独立性。',
    content: `
# 联盟与邀请链接披露

本站部分按钮为合作或邀请链接 (` + '`rel="sponsored nofollow noopener"`' + `)。当读者通过这些链接购买第三方套餐时，本站可能获得少许佣金。这不会增加读者的购买成本，同时有助于本站维持持续运营。
`
  },
  {
    slug: 'privacy',
    title: '隐私政策',
    desc: '机场实力榜的隐私保护与数据收集规范。',
    content: `
# 隐私政策

本站为纯静态输出博客，不强制要求用户注册登录，不收集用户的敏感个人身份信息。全站采用 HTTPS 加密传输，保障访问安全。
`
  },
  {
    slug: 'terms',
    title: '服务条款',
    desc: '使用机场实力榜的服务条款与法律声明。',
    content: `
# 服务条款

本站内容仅用于网络隐私保护、远程办公、学术科研与公开服务横向比较。用户在使用第三方服务时须遵守所在地区法律法规。
`
  },
  {
    slug: 'disclaimer',
    title: '免责声明',
    desc: '机场实力榜的免责条款与第三方服务提示。',
    content: `
# 免责声明

本站提供的第三方机场测评与链接仅供参考。第三方机场的服务质量、节点在线率及价格政策完全由该服务商自行控制，本站不承诺无条件第一或永久可用保证。
`
  }
];

trustPages.forEach(p => {
  const code = `---
import BaseLayout from '../layouts/BaseLayout.astro';
import Breadcrumbs from '../components/Breadcrumbs.astro';
---

<BaseLayout title="${p.title} - 机场实力榜 | jcslbang.homes" description="${p.desc}">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <Breadcrumbs items={[{ label: '${p.title}' }]} />

    <article class="prose prose-slate dark:prose-invert max-w-none bg-white dark:bg-slate-900 p-6 sm:p-10 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
      ${p.content}
    </article>
  </div>
</BaseLayout>
`;
  fs.writeFileSync(path.join(__dirname, `../src/pages/${p.slug}.astro`), code, 'utf-8');
});

// Write robots.txt.ts
const robotsCode = `import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const robots = \`User-agent: *
Allow: /

Sitemap: https://jcslbang.homes/sitemap-index.xml
\`;
  return new Response(robots, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8'
    }
  });
};
`;
fs.writeFileSync(path.join(__dirname, '../src/pages/robots.txt.ts'), robotsCode, 'utf-8');

// Write 404.astro
const code404 = `---
import BaseLayout from '../layouts/BaseLayout.astro';
---

<BaseLayout title="404 页面未找到 - 机场实力榜">
  <div class="max-w-xl mx-auto text-center py-20 px-4 space-y-6">
    <div class="text-6xl font-black text-blue-600">404</div>
    <h1 class="text-2xl font-bold text-slate-900 dark:text-white">抱歉，你访问的页面不存在或已被移除</h1>
    <p class="text-sm text-slate-500">你可以返回首页或搜索相关机场评测与客户端教程。</p>
    <div class="flex justify-center gap-4 pt-4">
      <a href="/" class="px-5 py-2.5 bg-blue-600 text-white font-bold rounded-xl shadow">返回首页</a>
      <a href="/providers" class="px-5 py-2.5 bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold rounded-xl">查看全部机场</a>
    </div>
  </div>
</BaseLayout>
`;
fs.writeFileSync(path.join(__dirname, '../src/pages/404.astro'), code404, 'utf-8');

console.log("Trust pages & system routes generated.");
