const fs = require('fs');
const path = require('path');

const mdPath = path.join(__dirname, '../src/content/ranks/beginner-first-ladder-recommendations.md');
const mdContent = fs.readFileSync(mdPath, 'utf8');

console.log('=== MD FILE CARD BLOCK ===');
const idxMd = mdContent.indexOf('2026 机场实力榜');
console.log(mdContent.slice(idxMd, idxMd + 1500));

const htmlPath = path.join(__dirname, '../dist/ranks/beginner-first-ladder-recommendations/index.html');
if (fs.existsSync(htmlPath)) {
  const htmlContent = fs.readFileSync(htmlPath, 'utf8');
  console.log('\n=== COMPILED DIST HTML CARD BLOCK ===');
  const idxHtml = htmlContent.indexOf('2026 机场实力榜');
  console.log(htmlContent.slice(idxHtml, idxHtml + 2000));
}
