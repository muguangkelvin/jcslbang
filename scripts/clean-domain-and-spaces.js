const fs = require('fs');
const path = require('path');

function walkAndClean(dir) {
  let count = 0;
  for (const f of fs.readdirSync(dir)) {
    if (f === 'node_modules' || f === '.git' || f === '.astro' || f === 'dist') continue;
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      count += walkAndClean(full);
    } else if (/\.(astro|md|json|js|ts|html)$/.test(f)) {
      let content = fs.readFileSync(full, 'utf8');
      let original = content;

      // Clean domain patterns and parentheses
      content = content.replace(/\(jichangdian\.xyz\)/gi, '');
      content = content.replace(/jichangdian\.xyz/gi, '');
      content = content.replace(/\(jcslbang\.homes\)/gi, '');
      content = content.replace(/机场实力榜\s{2,}/g, '机场实力榜 ');
      content = content.replace(/机场实力榜\s+</g, '机场实力榜<');
      content = content.replace(/机场实力榜\s+\)/g, '机场实力榜)');
      content = content.replace(/机场实力榜\s+”/g, '机场实力榜”');
      content = content.replace(/机场实力榜\s+$/gm, '机场实力榜');

      if (content !== original) {
        fs.writeFileSync(full, content, 'utf8');
        console.log('Cleaned domain/text in:', full);
        count++;
      }
    }
  }
  return count;
}

const cleanedCount = walkAndClean(path.resolve(__dirname, '../src'));
console.log(`Successfully cleaned ${cleanedCount} files in src/!`);
