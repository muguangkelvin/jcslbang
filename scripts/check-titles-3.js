const fs = require('fs');
const path = require('path');

const titles = [
  "28家主流机场背景起底",
  "如何通过测速图看懂机场",
  "公网BGP中转 vs IEPL国际专线",
  "落地IP纯净度与双ISP住宅IP",
  "机场服务商运营年份",
  "机场测速与线路技术解析"
];

function scanDir(dir) {
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const full = path.join(dir, f);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      scanDir(full);
    } else {
      const text = fs.readFileSync(full, 'utf-8');
      for (const t of titles) {
        if (text.includes(t)) {
          console.log(`FOUND "${t}" in ${full}`);
        }
      }
    }
  }
}

console.log("Scanning src/ for screenshot 3 titles...");
scanDir(path.join(__dirname, '../src'));
console.log("Scan complete.");
