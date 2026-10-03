const fs = require('fs');
const path = require('path');

console.log("Generating search-index.json for client-side search...");

const contentDir = path.join(__dirname, '../src/content');
const searchIndex = [];

const collections = ['ranks', 'guides', 'clients', 'lines', 'faq', 'providers'];

collections.forEach(col => {
  const dirPath = path.join(contentDir, col);
  if (!fs.existsSync(dirPath)) return;

  const files = fs.readdirSync(dirPath);
  files.forEach(file => {
    if (!file.endsWith('.md')) return;

    const raw = fs.readFileSync(path.join(dirPath, file), 'utf-8');
    const slug = file.replace('.md', '');

    // Extract frontmatter
    const match = raw.match(/^---\n([\s\S]+?)\n---/);
    let title = slug;
    let description = '';
    let category = col;
    let tags = [];
    let keywords = [];
    let search_synonyms = [];

    if (match) {
      const fm = match[1];
      const titleMatch = fm.match(/title:\s*"([^"]+)"/);
      if (titleMatch) title = titleMatch[1];

      const descMatch = fm.match(/description:\s*"([^"]+)"/);
      if (descMatch) description = descMatch[1];

      const catMatch = fm.match(/category:\s*"([^"]+)"/);
      if (catMatch) category = catMatch[1];

      const tagsMatch = fm.match(/tags:\s*\[([^\]]+)\]/);
      if (tagsMatch) {
        tags = tagsMatch[1].split(',').map(s => s.replace(/"/g, '').trim());
      }

      const kwMatch = fm.match(/keywords:\s*\[([^\]]+)\]/);
      if (kwMatch) {
        keywords = kwMatch[1].split(',').map(s => s.replace(/"/g, '').trim());
      }

      const synMatch = fm.match(/search_synonyms:\s*\[([^\]]+)\]/);
      if (synMatch) {
        search_synonyms = synMatch[1].split(',').map(s => s.replace(/"/g, '').trim());
      }
    }

    // Clean body content for search snippet
    const body = raw.replace(/^---\n[\s\S]+?\n---/, '').replace(/<[^>]+>/g, '').replace(/#+/g, '').trim().slice(0, 300);

    const url = col === 'providers' ? `/providers/${slug}` : `/${col}/${slug}`;

    searchIndex.push({
      title,
      description,
      category,
      tags,
      keywords,
      search_synonyms,
      url,
      body
    });
  });
});

fs.mkdirSync(path.join(__dirname, '../public'), { recursive: true });
fs.writeFileSync(path.join(__dirname, '../public/search-index.json'), JSON.stringify(searchIndex, null, 2), 'utf-8');
console.log(`Generated search-index.json with ${searchIndex.length} searchable items.`);
