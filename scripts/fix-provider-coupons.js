const fs = require('fs');
const path = require('path');

const providersPath = path.join(__dirname, '../src/data/providers.json');
const providers = JSON.parse(fs.readFileSync(providersPath, 'utf8'));

providers.forEach(p => {
  if (p.slug === 'lingdong-cloud') {
    p.coupon = 'ld888';
    p.couponNote = '8折专属优惠码';
  } else if (p.slug === 'twilight') {
    p.coupon = 'mm88';
    p.couponNote = '8折限时折扣';
  } else if (p.slug === 'flycat-cloud') {
    p.coupon = 'flycat888';
    p.couponNote = '新用户8折优惠';
  } else if (p.slug === 'quanqiu-cloud') {
    p.coupon = '暂无';
    p.couponNote = '';
  } else if (!p.coupon || p.coupon === 'ld888') {
    p.coupon = '暂无';
    p.couponNote = '';
  }

  // Update packagesSummary string to match
  if (p.packages && p.packages.length > 0) {
    p.packagesSummary = p.packages.map(pkg => `${pkg.name}: ${pkg.price} (${pkg.traffic})`).join(' · ');
    if (p.coupon && p.coupon !== '暂无' && p.coupon !== '免码直达') {
      p.packagesSummary += ` · 优惠码 ${p.coupon}`;
    }
  }
});

fs.writeFileSync(providersPath, JSON.stringify(providers, null, 2), 'utf8');
console.log('Successfully corrected provider coupons in providers.json!');
