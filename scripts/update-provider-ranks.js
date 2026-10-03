const fs = require('fs');
const path = require('path');

const providersPath = path.join(__dirname, '../src/data/providers.json');
let providers = JSON.parse(fs.readFileSync(providersPath, 'utf-8'));

// New requested order:
// 1: 灵动云 (lingdong-cloud)
// 2: 暮光网络 (twilight)
// 3: 飞猫云 (flycat-cloud)
// 4: 微风网络 Breezenet (breezenet)

providers.forEach(p => {
  if (p.slug === 'lingdong-cloud') {
    p.rank = 1;
    p.isPrimary = true;
    p.coupon = 'ld888';
    p.couponNote = '8折专属优惠码，适用于月付/年付套餐';
    p.priceFrom = '20 元/月';
    p.trafficFrom = '120GB/月';
    p.summary = '全站第一推荐，多国家和地区节点，智能分流及灵活套餐，全端解锁 AI。';
  } else if (p.slug === 'twilight') {
    p.rank = 2;
    p.isPrimary = true;
  } else if (p.slug === 'flycat-cloud') {
    p.rank = 3;
    p.isPrimary = true;
  } else if (p.slug === 'breezenet') {
    p.rank = 4;
    p.isPrimary = true;
  } else if (p.slug === 'quanqiu-cloud') {
    p.rank = 5;
    p.isPrimary = false;
  }
});

// Sort by rank
providers.sort((a, b) => a.rank - b.rank);

// Re-index ranks 5 to 28
let r = 5;
providers.forEach(p => {
  if (!p.isPrimary) {
    p.rank = r++;
  }
});

fs.writeFileSync(providersPath, JSON.stringify(providers, null, 2), 'utf-8');
console.log("Updated src/data/providers.json with new Top 4 order: 灵动云 #1, 暮光网络 #2, 飞猫云 #3, 微风网络 #4.");
