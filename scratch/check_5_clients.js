const fs = require('fs');
const path = require('path');

const files = [
  'src/content/clients/android-tv-box-clash-setup.md',
  'src/content/clients/clash-for-android-cfa-guide.md',
  'src/content/clients/clash-for-windows-migration-guide.md',
  'src/content/clients/clash-meta-hysteria2-protocol.md',
  'src/content/clients/mac-tun-mode-system-proxy-setup.md'
];

files.forEach((filePath, idx) => {
  const content = fs.readFileSync(path.resolve(__dirname, '..', filePath), 'utf8');
  const fmMatch = content.match(/^---([\s\S]*?)---/);
  const frontmatter = fmMatch ? fmMatch[1] : '';
  const titleMatch = frontmatter.match(/title:\s*["'](.*?)["']/);
  const title = titleMatch ? titleMatch[1] : 'Unknown';

  const h2s = content.match(/^##\s+.*$/gm) || [];
  const lines = content.split('\n').filter(l => l.trim().length > 0);

  console.log(`========================================`);
  console.log(`【File ${idx + 1}】: ${filePath}`);
  console.log(`标题: ${title}`);
  console.log(`H2 标题列表:`);
  h2s.forEach(h => console.log(`  - ${h}`));
  console.log(`正文前 200 字:`);
  const bodyText = content.replace(/^---[\s\S]*?---/, '').replace(/^#\s+.*$/gm, '').replace(/<[^>]+>/g, '').trim();
  console.log(bodyText.slice(0, 200).replace(/\n/g, ' '));
  console.log(``);
});
