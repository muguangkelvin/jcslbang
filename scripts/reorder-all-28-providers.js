const fs = require('fs');
const path = require('path');

const providersPath = path.join(__dirname, '../src/data/providers.json');
let providers = JSON.parse(fs.readFileSync(providersPath, 'utf-8'));

// Specified order for top 8:
// 1: 灵动云 (lingdong-cloud)
// 2: 暮光网络 (twilight)
// 3: 飞猫云 (flycat-cloud)
// 4: 微风网络 Breezenet (breezenet)
// 5: 隐形人 (invisible)
// 6: 浪网 WaveNet (wavenet)
// 7: 梯子云 LadderCloud (laddercloud)
// 8: 飞V (flyv)

const top8Slugs = [
  'lingdong-cloud',
  'twilight',
  'flycat-cloud',
  'breezenet',
  'invisible',
  'wavenet',
  'laddercloud',
  'flyv'
];

// Map by slug
const providerMap = {};
providers.forEach(p => {
  providerMap[p.slug] = p;
});

const newProviders = [];

// 1. Add top 8
top8Slugs.forEach((slug, index) => {
  if (providerMap[slug]) {
    const item = providerMap[slug];
    item.rank = index + 1;
    item.isPrimary = (index < 4);
    newProviders.push(item);
    delete providerMap[slug];
  }
});

// 2. Add remaining providers
let currentRank = 9;
providers.forEach(p => {
  if (providerMap[p.slug]) {
    const item = providerMap[p.slug];
    item.rank = currentRank++;
    item.isPrimary = false;
    newProviders.push(item);
  }
});

fs.writeFileSync(providersPath, JSON.stringify(newProviders, null, 2), 'utf-8');
console.log("Successfully updated src/data/providers.json with Top 8 order:");
newProviders.slice(0, 10).forEach(p => {
  console.log(`#${p.rank} ${p.name} (${p.slug})`);
});
