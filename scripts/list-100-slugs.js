const fs = require('fs');
const path = require('path');

const dirs = ['clients', 'faq', 'guides', 'lines', 'ranks'];
const allArticles = [];

for (const d of dirs) {
  const p = path.join(__dirname, '../src/content', d);
  if (fs.existsSync(p)) {
    for (const f of fs.readdirSync(p)) {
      if (!f.endsWith('.md')) continue;
      const full = path.join(p, f);
      const content = fs.readFileSync(full, 'utf8');
      const titleMatch = content.match(/title:\s*["'](.*?)["']/);
      const title = titleMatch ? titleMatch[1] : f;
      allArticles.push({ category: d, slug: f.replace('.md', ''), title });
    }
  }
}

console.log(`Total target articles: ${allArticles.length}`);
fs.writeFileSync(path.join(__dirname, 'all-100-articles.json'), JSON.stringify(allArticles, null, 2));
console.log('Saved to scripts/all-100-articles.json');
