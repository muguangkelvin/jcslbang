const fs = require('fs');
const path = require('path');

function getAll(dir) {
  let res = [];
  fs.readdirSync(dir).forEach(f => {
    let p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) res = res.concat(getAll(p));
    else if (f.endsWith('.md') || f.endsWith('.mdx')) res.push(p);
  });
  return res;
}

const contentDir = path.resolve(__dirname, '../src/content');
const files = getAll(contentDir);

const inventory = files.map(filePath => {
  const relPath = path.relative(contentDir, filePath).replace(/\\/g, '/');
  const category = relPath.split('/')[0];
  const slug = path.basename(filePath, path.extname(filePath));
  const raw = fs.readFileSync(filePath, 'utf8');
  
  let title = slug;
  const titleMatch = raw.match(/title:\s*["']?(.*?)["']?\r?\n/);
  if (titleMatch) {
    title = titleMatch[1].replace(/^["']|["']$/g, '').trim();
  }

  return { category, slug, title, filePath: relPath };
});

fs.writeFileSync(path.resolve(__dirname, 'all-129-inventory.json'), JSON.stringify(inventory, null, 2), 'utf8');
console.log('Successfully created all-129-inventory.json with', inventory.length, 'articles!');
