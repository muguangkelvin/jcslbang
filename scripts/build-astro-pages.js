const fs = require('fs');
const path = require('path');

const sections = [
  { slug: 'ranks', title: '实力榜单', desc: '2026机场实力榜、测速排行榜与稳定梯子推荐。包含 15 篇深度跑分测速文章。' },
  { slug: 'guides', title: '新手入门', desc: '科学上网新手入门指南、机场怎么用及订阅链接导入技巧。包含 20 篇保姆级教程。' },
  { slug: 'clients', title: '客户端教程', desc: 'Clash Verge Rev、Shadowrocket (小火箭)、Sing-box 及 v2rayN 保姆级使用教学。包含 25 篇配置图解。' },
  { slug: 'lines', title: '专线特选', desc: 'IPLC 专线、IEPL 低延迟专线、游戏外服加速及流媒体原生 IP 解锁。包含 15 篇硬核评测。' },
  { slug: 'faq', title: '避坑答疑', desc: '机场常见问题排查、订阅更新失败解决、节点超时与选购避坑总结。包含 25 篇专题解答。' }
];

function makeSectionIndexPage(sec) {
  return `---
import BaseLayout from '../../layouts/BaseLayout.astro';
import Breadcrumbs from '../../components/Breadcrumbs.astro';
import ArticleCard from '../../components/ArticleCard.astro';
import { getCollection } from 'astro:content';

const articles = await getCollection('${sec.slug}');
---

<BaseLayout title="${sec.title} - 机场实力榜 | jcslbang.homes" description="${sec.desc}">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
    <Breadcrumbs items={[{ label: '${sec.title}' }]} />

    <div class="border-b border-slate-200 dark:border-slate-800 pb-6 space-y-2">
      <h1 class="text-3xl font-black text-slate-900 dark:text-white flex items-center gap-2">
        <span>📁</span>
        <span>${sec.title}</span>
      </h1>
      <p class="text-slate-600 dark:text-slate-300 text-sm">
        ${sec.desc}
      </p>
    </div>

    <!-- Article Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map(a => (
        <ArticleCard post={a} categorySlug="${sec.slug}" defaultCategoryLabel="${sec.title}" />
      ))}
    </div>
  </div>
</BaseLayout>
`;
}

function makeSectionSlugPage(sec) {
  return `---
import BaseLayout from '../../layouts/BaseLayout.astro';
import Breadcrumbs from '../../components/Breadcrumbs.astro';
import { getCollection, render } from 'astro:content';

export async function getStaticPaths() {
  const articles = await getCollection('${sec.slug}');
  return articles.map(entry => ({
    params: { slug: entry.id },
    props: { entry }
  }));
}

const { entry } = Astro.props;
const { Content } = await render(entry);
---

<BaseLayout title={\`\${entry.data.title} - 机场实力榜 | jcslbang.homes\`} description={entry.data.description}>
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <Breadcrumbs items={[{ label: '${sec.title}', url: '/${sec.slug}' }, { label: entry.data.title }]} />

    <article class="prose prose-slate dark:prose-invert max-w-none bg-white dark:bg-slate-900 p-6 sm:p-10 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
      <header class="border-b border-slate-200 dark:border-slate-800 pb-6 mb-8 not-prose space-y-4">
        <div class="flex items-center gap-2">
          <span class="px-3 py-1 text-xs font-bold bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-lg">
            ${sec.title}
          </span>
          <span class="text-xs text-slate-400">更新时间：{entry.data.updatedDate || entry.data.pubDate}</span>
        </div>
        <h1 class="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white leading-tight">
          {entry.data.title}
        </h1>
        <p class="text-slate-600 dark:text-slate-300 text-sm leading-relaxed bg-slate-50 dark:bg-slate-800 p-4 rounded-xl border border-slate-200/80 dark:border-slate-700/80">
          💡 <strong>核心提要</strong>：{entry.data.description}
        </p>
      </header>

      <div class="content space-y-6">
        <Content />
      </div>
    </article>
  </div>
</BaseLayout>
`;
}

sections.forEach(sec => {
  const dirPath = path.join(process.cwd(), 'src/pages', sec.slug);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  const indexPath = path.join(dirPath, 'index.astro');
  fs.writeFileSync(indexPath, makeSectionIndexPage(sec), 'utf-8');

  const slugPath = path.join(dirPath, '[slug].astro');
  fs.writeFileSync(slugPath, makeSectionSlugPage(sec), 'utf-8');

  console.log(`Generated Astro pages for section: ${sec.slug}`);
});

console.log('Successfully generated all section Astro pages with ArticleCard component!');
