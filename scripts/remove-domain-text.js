const fs = require('fs');
const path = require('path');

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let original = content;

  // Replace "" and variants
  content = content.replace(/\(jcslbang\.homes\)/g, '');
  content = content.replace(/（jcslbang\.homes）/g, '');
  content = content.replace(/机场实力榜\s*\(jcslbang\.homes\)/g, '机场实力榜');
  content = content.replace(/机场实力榜\s*（jcslbang\.homes）/g, '机场实力榜');
  content = content.replace(/机场实力榜\s*\(jcslbang\.homes\)/g, '机场实力榜');

  // Replace Footer & SEO text variants
  content = content.replace(/机场实力榜\s*\(jcslbang\.homes\)\s*-/g, '机场实力榜 -');
  content = content.replace(/© 2026 jcslbang\.homes 机场实力榜/g, '© 2026 机场实力榜');

  // Clean up any double spaces created by deletion
  content = content.replace(/机场实力榜\s{2,}/g, '机场实力榜 ');

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Cleaned  in: ${path.relative(process.cwd(), filePath)}`);
  }
}

function walkDir(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (/\.(astro|js|ts|json|md)$/.test(file)) {
      processFile(fullPath);
    }
  }
}

walkDir(path.join(process.cwd(), 'src'));
walkDir(path.join(process.cwd(), 'scripts'));

console.log('Successfully removed  across all source files and scripts!');
