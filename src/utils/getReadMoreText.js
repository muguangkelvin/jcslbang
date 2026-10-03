/**
 * Dynamic Read More Text matcher based on post frontmatter, category, tags, and title
 */
export function getReadMoreText(post) {
  // 1. 自定义覆盖 (Priority 1)
  if (post?.data?.readMoreText) {
    const custom = post.data.readMoreText.trim().replace(/\s*→\s*$/, '');
    return `${custom} →`;
  }

  // 2. 提取标签与分类集合 (Priority 2)
  const tags = post?.data?.tags || [];
  const category = post?.data?.category || '';
  const title = post?.data?.title || '';
  const metaString = [category, ...tags, title].join(' ');

  // 3. 关键词匹配规则
  if (/折扣|优惠|省钱|年付|活动/.test(metaString)) return '获取优惠方案 →';
  if (/新手|小白|入门|基础/.test(metaString)) return '新手快速上手 →';
  if (/榜单|测速|排行|实力/.test(metaString)) return '查阅完整榜单 →';
  if (/教程|配置|指南|搭建|手册/.test(metaString)) return '查看详细指南 →';

  // 4. 默认兜底 (Fallback)
  return '阅读全文 →';
}
