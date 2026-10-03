const fs = require('fs');
const path = require('path');

const providers = JSON.parse(fs.readFileSync(path.join(__dirname, '../src/data/providers.json'), 'utf8'));

console.log('Total providers:', providers.length);
providers.forEach(p => {
  console.log(`Rank ${p.rank}: ${p.name} (${p.slug}) -> coupon: "${p.coupon || ''}" | note: "${p.couponNote || ''}"`);
});
