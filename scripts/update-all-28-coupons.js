const fs = require('fs');
const path = require('path');

const couponMapping = {
  "lingdong-cloud": { coupon: "ld888", note: "8折专属优惠码" },
  "twilight": { coupon: "mm88", note: "8折限时折扣" },
  "flycat-cloud": { coupon: "flycat888", note: "新用户8折优惠" },
  "breezenet": { coupon: "breezenet888", note: "85折续费立减码" },
  "invisible": { coupon: "invisible888", note: "88折专属优惠码" },
  "wavenet": { coupon: "wavenet888", note: "88折限时折扣码" },
  "laddercloud": { coupon: "ladder888", note: "88折专属优惠码" },
  "flyv": { coupon: "flyv888", note: "85折新用户优惠" },
  "quanqiu-cloud": { coupon: "quanqiu888", note: "85折全场通用码" },
  "xingdaomeng": { coupon: "xdm888", note: "88折专属优惠码" },
  "guangsu-cloud": { coupon: "guangsu888", note: "88折限时优惠码" },
  "v2yun": { coupon: "v2yun888", note: "85折专属优惠码" },
  "u1s1": { coupon: "u1s1888", note: "88折全场通用码" },
  "jilian-cloud": { coupon: "jilian888", note: "88折立减优惠码" },
  "guangnian": { coupon: "guangnian888", note: "85折专属优惠码" },
  "sogo-cloud": { coupon: "sogo888", note: "88折限时折扣码" },
  "yuzhou-cloud": { coupon: "yuzhou888", note: "88折全场通用码" },
  "2mao-cloud": { coupon: "2mao888", note: "88折立减优惠码" },
  "1fly-cloud": { coupon: "1fly888", note: "88折专属优惠码" },
  "edgenova": { coupon: "edgenova888", note: "85折限时折扣码" },
  "kexin-cloud": { coupon: "kexin888", note: "88折全场通用码" },
  "sujie": { coupon: "sujie888", note: "88折专属优惠码" },
  "kuaili": { coupon: "kuaili888", note: "88折立减优惠码" },
  "worryfree": { coupon: "worryfree888", note: "88折专属折扣码" },
  "civet": { coupon: "civet888", note: "85折限时优惠码" },
  "flashleap": { coupon: "flash888", note: "88折专属优惠码" },
  "firefly": { coupon: "firefly888", note: "88折全场通用码" },
  "kuajie": { coupon: "kuajie888", note: "88折专属优惠码" }
};

// 1. Update src/data/providers.json
const jsonPath = path.join(__dirname, '../src/data/providers.json');
const providers = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

providers.forEach(p => {
  if (couponMapping[p.slug]) {
    p.coupon = couponMapping[p.slug].coupon;
    p.couponNote = couponMapping[p.slug].note;
    if (p.packagesSummary && p.packagesSummary.includes('优惠码')) {
      p.packagesSummary = p.packagesSummary.replace(/优惠码\s*\S+/, `优惠码 ${p.coupon}`);
    } else if (p.packagesSummary) {
      p.packagesSummary += ` · 优惠码 ${p.coupon}`;
    }
  }
});

fs.writeFileSync(jsonPath, JSON.stringify(providers, null, 2), 'utf8');
console.log('Successfully updated all 28 provider coupons in src/data/providers.json!');

// 2. Update src/content/providers/*.md frontmatter
const contentProvidersDir = path.join(__dirname, '../src/content/providers');
if (fs.existsSync(contentProvidersDir)) {
  const mdFiles = fs.readdirSync(contentProvidersDir).filter(f => f.endsWith('.md'));
  let count = 0;
  for (const f of mdFiles) {
    const slug = f.replace('.md', '');
    if (!couponMapping[slug]) continue;

    const fullPath = path.join(contentProvidersDir, f);
    let content = fs.readFileSync(fullPath, 'utf8');
    const { coupon, note } = couponMapping[slug];

    if (content.includes('coupon:')) {
      content = content.replace(/coupon:\s*".*?"/g, `coupon: "${coupon}"`);
      content = content.replace(/coupon:\s*'.*?'/g, `coupon: "${coupon}"`);
    } else {
      content = content.replace(/^---/m, `---\ncoupon: "${coupon}"`);
    }

    fs.writeFileSync(fullPath, content, 'utf8');
    count++;
  }
  console.log(`Updated frontmatter coupons for ${count} provider markdown files!`);
}
