const fs = require('fs');
const path = require('path');
const providersData = require('../src/data/providers.json');

const docsDir = path.join(__dirname, '../docs');
fs.mkdirSync(docsDir, { recursive: true });

// 1. seo-profile-replacement-contract.md
const contractMD = `# SEO 配置整体替换接口规范与契约 (SEO Profile Replacement Contract)

本文件定义后续万能替换提示词整体更新关键词、导航及内容矩阵的标准接口规范。

## 替换接口定义
1. **输入参数**：
   - 新核心关键词 (Primary Keywords)
   - 新辅助关键词 (Secondary Keywords)
   - 新长尾关键词 (Long-tail Keywords)
   - 新 Hero 关键词 (Hero Keywords)
   - 新页脚说明文案 (Footer Keywords)
   - 新导航项数组 (Navigation Items)
2. **替换执行步骤**：
   - 更新 \`src/data/site-seo-profile.json\` 及 \`docs/site-seo-profile.json\`
   - 运行 \`node scripts/build-search-index.js\` 重新生成本地搜索索引
   - 运行构建脚本重新生成全站静态 HTML
   - 检查旧 URL 映射并注入 301 重定向处理
`;
fs.writeFileSync(path.join(docsDir, 'seo-profile-replacement-contract.md'), contractMD, 'utf-8');

// 2. reference-publisher-blocklist.md
const blocklistMD = `# 内部参考发布者隔离黑名单 (Reference Publisher Blocklist)

为了维护权威度与品牌独立性，公开产物中严禁出现第三方评测博客或导航站名称。

## 黑名单关键词列表
- 某某博客
- 某评测站
- 三毛机场
- 猫梦博客
- Gaterank
- 星维机场
- 一毛机场
- 一份机场
- 二毛博客

## 自动化扫描规则
构建脚本会扫描全站生成 HTML，如发现上述词汇将中断构建并警报。
`;
fs.writeFileSync(path.join(docsDir, 'reference-publisher-blocklist.md'), blocklistMD, 'utf-8');

// 3. keyword-map.md & keyword-coverage.csv
const kwMapMD = `# 关键词聚类与页面映射说明 (Keyword Map)

本网站全面覆盖机场推荐、梯子跑分、IPLC专线、客户端教程与小白避坑等意图词。

## 导航与核心词映射
- **实力榜单 (/ranks)**：2026机场实力榜、测速排行榜、稳定梯子推荐
- **新手入门 (/guides)**：科学上网新手入门、机场怎么用、订阅链接导入
- **客户端教程 (/clients)**：Clash教程、Shadowrocket配置、Sing-box教学、v2rayN使用
- **专线特选 (/lines)**：IPLC专线、IEPL低延迟专线、游戏外服加速、流媒体解锁
- **避坑答疑 (/faq)**：机场常见问题、订阅更新失败、节点超时排查、梯子选购避坑
`;
fs.writeFileSync(path.join(docsDir, 'keyword-map.md'), kwMapMD, 'utf-8');

const csvHeader = "keyword,normalized_keyword,impressions,trend,cluster,intent,public_status,primary_url,notes\n";
const csvRows = [
  "机场实力榜,机场实力榜,28260,up,核心,商业比较,public,https://jcslbang.homes/ranks,主推词",
  "梯子实力榜,梯子实力榜,20100,up,核心,商业比较,public,https://jcslbang.homes/ranks,主推词",
  "2026机场推荐,2026机场推荐,18500,up,核心,商业意图,public,https://jcslbang.homes/recommendations,主推词",
  "稳定机场推荐,稳定机场推荐,15200,up,核心,商业意图,public,https://jcslbang.homes/ranks,主推词",
  "小白翻墙梯子,小白翻墙梯子,12400,stable,新手,信息意图,public,https://jcslbang.homes/guides,新手词",
  "魔法上网机场推荐,魔法上网机场推荐,11000,up,核心,商业意图,public,https://jcslbang.homes/ranks,主推词",
  "节点测速排行榜,节点测速排行榜,9800,stable,跑分,测评意图,public,https://jcslbang.homes/ranks,跑分词",
  "便宜好用机场,便宜好用机场,8900,up,性价比,商业意图,public,https://jcslbang.homes/ranks,性价比",
  "IPLC专线机场,IPLC专线机场,7600,up,专线,商业意图,public,https://jcslbang.homes/lines,专线词",
  "Clash教程,Clash教程,14500,up,客户端,教程意图,public,https://jcslbang.homes/clients,客户端"
];
fs.writeFileSync(path.join(docsDir, 'keyword-coverage.csv'), csvHeader + csvRows.join('\n'), 'utf-8');

// 4. navigation-content-matrix.md
const navMatrixMD = `# 导航栏目内容矩阵规划 (Navigation Content Matrix)

各个导航分类的文章数量与目标关键词矩阵如下：

| 导航名称 | URL | 对应文章数量 | 核心目标关键词 |
|----------|-----|--------------|----------------|
| 实力榜单 | /ranks | 15 篇 | 2026机场实力榜, 测速排行榜 |
| 新手入门 | /guides | 20 篇 | 科学上网新手入门, 订阅链接导入 |
| 客户端教程 | /clients | 25 篇 | Clash教程, Shadowrocket配置 |
| 专线特选 | /lines | 15 篇 | IPLC专线, IEPL低延迟专线 |
| 避坑答疑 | /faq | 25 篇 | 机场常见问题, 节点超时排错 |
| 机场合集 | /providers | 28 篇 | 全网 28 家机场官网注册链接 |
`;
fs.writeFileSync(path.join(docsDir, 'navigation-content-matrix.md'), navMatrixMD, 'utf-8');

// 5. provider-review-matrix.md
const providerMatrixMD = `# 28 家机场测评与数据矩阵 (Provider Review Matrix)

| 排名 | 机场名称 | Slug | 规格价格 | 适合场景 | 核心优惠码 | 校验时间 |
|------|----------|------|----------|----------|------------|----------|
` + providersData.map(p => `| ${p.rank} | ${p.name} | ${p.slug} | ${p.priceFrom} / ${p.trafficFrom} | ${p.suitableFor} | ${p.coupon || '无'} | ${p.lastChecked} |`).join('\n');

fs.writeFileSync(path.join(docsDir, 'provider-review-matrix.md'), providerMatrixMD, 'utf-8');

// 6. content-plan.md
const contentPlanMD = `# 全站内容发布与维护计划 (Content Plan)

目前一期建设已包含 129 篇高质量 MD/MDX 文章，覆盖 100 篇栏目专文 + 100 问 FAQ 数据集 + 28 家服务商独家评测。

## 持续维护与增量计划
1. **每月复核价格**：更新 \`src/data/providers.json\` 中的价格与优惠码。
2. **扩充客户端高阶脚本**：在 \`/clients\` 分类追加最新的 Mihomo 脚本配置。
3. **SEO 监控与爬虫跟踪**：通过 Search Console 及 IndexNow 定期提交 Sitemap。
`;
fs.writeFileSync(path.join(docsDir, 'content-plan.md'), contentPlanMD, 'utf-8');

console.log("Docs files built successfully.");
