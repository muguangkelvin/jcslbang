const fs = require('fs');
const path = require('path');
const dirs = ['clients', 'guides', 'lines', 'faq', 'ranks'];

dirs.forEach(d => {
  const dirPath = path.join(process.cwd(), 'src/content', d);
  if (!fs.existsSync(dirPath)) return;
  const files = fs.readdirSync(dirPath);
  files.forEach(f => {
    const content = fs.readFileSync(path.join(dirPath, f), 'utf-8');
    const m = content.match(/description:\s*["']?(.*?)["']?\r?\n/);
    if (m) {
      console.log(`${d}/${f}: ${m[1]}`);
    }
  });
});
