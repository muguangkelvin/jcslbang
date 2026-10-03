const fs = require('fs');
const path = require('path');

const dirs = ['clients', 'faq', 'guides', 'lines', 'ranks'];
const files = [];
for (const d of dirs) {
  const p = path.join(__dirname, '../src/content', d);
  if (fs.existsSync(p)) {
    for (const f of fs.readdirSync(p)) {
      if (f.endsWith('.md')) files.push(path.join(p, f));
    }
  }
}

console.log('Total target article files:', files.length);

const intros = new Map();
const h2s = new Map();
let duplicateIntros = 0;

for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split('\n');
  let intro = '';
  let h2 = '';
  let inFm = false;
  let fmCount = 0;
  for (const l of lines) {
    if (l.trim() === '---') {
      fmCount++;
      if (fmCount === 1) inFm = true;
      if (fmCount === 2) inFm = false;
      continue;
    }
    if (!inFm && fmCount >= 2) {
      if (!intro && l.trim() && !l.startsWith('#')) intro = l.trim();
      if (!h2 && l.startsWith('## ')) h2 = l.trim();
    }
  }

  if (intros.has(intro)) {
    duplicateIntros++;
    console.log('DUPLICATE INTRO found in:', path.basename(file), 'matches', path.basename(intros.get(intro)));
  } else {
    intros.set(intro, file);
  }
}

console.log('Unique intros:', intros.size, '/', files.length);
console.log('Duplicate intros count:', duplicateIntros);
