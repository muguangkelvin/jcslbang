const fs = require('fs');
const path = require('path');

const providersPath = path.join(__dirname, '../src/data/providers.json');
const providers = JSON.parse(fs.readFileSync(providersPath, 'utf8'));

const packagesMap = {
  'lingdong-cloud': [
    { name: '基础体验版', price: '20 元/月', traffic: '120GB/月', desc: '全节点智能分流，支持 8折码 ld888 (折后16元/月)' },
    { name: '主力进阶版', price: '38 元/月', traffic: '300GB/月', desc: '包含 IPLC 专线节点，支持 8折码 ld888 (折后30.4元/月)' },
    { name: '大流量旗舰版', price: '68 元/月', traffic: '600GB/月', desc: '全解锁 AI / 流媒体 4K，支持 8折码 ld888 (折后54.4元/月)' },
    { name: '年付超值版', price: '198 元/年', traffic: '150GB/月', desc: '折合 16.5 元/月，年付更划算，适合长久稳定使用' }
  ],
  'twilight': [
    { name: '基础版', price: '20 元/月', traffic: '120GB/月', desc: '原生 IP 全解 Netflix/TikTok，支持 8折码 mm88' },
    { name: '标准版', price: '40 元/月', traffic: '300GB/月', desc: '适合多设备及大流量视频播放，支持 8折码 mm88' },
    { name: '尊享版', price: '75 元/月', traffic: '600GB/月', desc: '包含超高画质流媒体与专线加密，支持 8折码 mm88' },
    { name: '年付专享版', price: '180 元/年', traffic: '100GB/月', desc: '折合 15 元/月，年付省心代步首选' }
  ],
  'flycat-cloud': [
    { name: '学生年付版', price: '84 元/年', traffic: '50GB/月', desc: '折合 7 元/月，小流量性价比之王，支持优惠码 flycat888' },
    { name: '星耀月付版', price: '25 元/月', traffic: '150GB/月', desc: 'IEPL 专线中转，晚高峰流畅开 4K，支持优惠码 flycat888' },
    { name: '旗舰月付版', price: '45 元/月', traffic: '350GB/月', desc: '适合高频视频与全端设备同步，支持优惠码 flycat888' },
    { name: '商业年付版', price: '220 元/年', traffic: '200GB/月', desc: '折合 18.3 元/月，稳定防封锁保姆配置' }
  ],
  'breezenet': [
    { name: '基础套餐', price: '15 元/月', traffic: '100GB/月', desc: '老牌稳健中转，极简订阅一键导入' },
    { name: '进阶套餐', price: '28 元/月', traffic: '220GB/月', desc: '包含更多海外热门节点与流媒体加速' },
    { name: '旗舰套餐', price: '50 元/月', traffic: '500GB/月', desc: '大流量适合日常重度网络使用' },
    { name: '畅享年付', price: '148 元/年', traffic: '120GB/月', desc: '折合 12.3 元/月，经济稳定代步' }
  ],
  'invisible': [
    { name: '月付体验版', price: '25 元/月', traffic: '180GB/月', desc: '支持隐形防封锁协议，多设备兼容' },
    { name: '月付畅享版', price: '45 元/月', traffic: '400GB/月', desc: '适合高清影音与跨境办公使用' },
    { name: '年付优惠版', price: '240 元/年', traffic: '200GB/月', desc: '折合 20 元/月，防失联长效保障' }
  ],
  'wavenet': [
    { name: '月付入门版', price: '22 元/月', traffic: '160GB/月', desc: '浪网 WaveNet 特色中转，低延迟节点' },
    { name: '月付大流量', price: '42 元/月', traffic: '350GB/月', desc: '支持 4K 视频秒开与 AI 工具流畅交互' },
    { name: '年付特惠版', price: '210 元/年', traffic: '180GB/月', desc: '折合 17.5 元/月，性价比拉满' }
  ],
  'laddercloud': [
    { name: '月付基础版', price: '18 元/月', traffic: '100GB/月', desc: '梯子云经典老牌节点，支持 Clash/Sing-box' },
    { name: '月付高配版', price: '35 元/月', traffic: '250GB/月', desc: '全原生 IP 支持，流媒体解锁能力强' },
    { name: '年付超值版', price: '168 元/年', traffic: '120GB/月', desc: '折合 14 元/月，省心稳定选购' }
  ],
  'flyv': [
    { name: '月付入门版', price: '15 元/月', traffic: '80GB/月', desc: '飞V轻量选择，适合新手初次使用' },
    { name: '月付进阶版', price: '28 元/月', traffic: '180GB/月', desc: '支持多终端同时在线，速度流畅' },
    { name: '年付实惠版', price: '140 元/年', traffic: '100GB/月', desc: '折合 11.6 元/月，实惠划算' }
  ],
  'quanqiu-cloud': [
    { name: '轻量版', price: '20 元/月', traffic: '120GB/月', desc: '全球云入门体验套餐' },
    { name: '进阶版', price: '40 元/月', traffic: '300GB/月', desc: '包含热门香港日本新加坡节点' },
    { name: '重度版', price: '100 元/月', traffic: '700GB/月', desc: '适合团队或大流量视频追剧' },
    { name: '年付星级版', price: '190 元/年', traffic: '150GB/月', desc: '折合 15.8 元/月，长久稳定' }
  ],
  'xingdaomeng': [
    { name: '基础月付', price: '15 元/月', traffic: '100GB/月', desc: '星岛梦高颜值客户端兼容方案' },
    { name: '进阶月付', price: '28 元/月', traffic: '220GB/月', desc: '包含 AI 专属分流与流媒体解锁' },
    { name: '年付特惠', price: '138 元/年', traffic: '120GB/月', desc: '折合 11.5 元/月，超低价格' }
  ],
  'guangsu-cloud': [
    { name: '月付标准版', price: '18 元/月', traffic: '150GB/月', desc: '光速云中转加速，连通率高' },
    { name: '月付旗舰版', price: '36 元/月', traffic: '320GB/月', desc: '包含 IEPL 专线节点体验' },
    { name: '年付专享', price: '168 元/年', traffic: '160GB/月', desc: '折合 14 元/月，性价比出众' }
  ],
  'v2yun': [
    { name: '月付基础版', price: '22 元/月', traffic: '200GB/月', desc: '唯兔云老牌 V2Ray/Trojan 方案' },
    { name: '月付进阶版', price: '42 元/月', traffic: '450GB/月', desc: '适合多台设备同时高速连接' },
    { name: '年付划算版', price: '210 元/年', traffic: '220GB/月', desc: '折合 17.5 元/月，划算实在' }
  ],
  'u1s1': [
    { name: '迷你月付', price: '12 元/月', traffic: '80GB/月', desc: 'U1S1 便宜好用，小白入门代步' },
    { name: '标准月付', price: '22 元/月', traffic: '180GB/月', desc: '覆盖主流地区节点，速度稳定' },
    { name: '年付随心享', price: '118 元/年', traffic: '90GB/月', desc: '折合 9.8 元/月，极具性价比' }
  ],
  'jilian-cloud': [
    { name: '体验月付', price: '25 元/月', traffic: '250GB/月', desc: '极连云大流量基础套餐' },
    { name: '高效月付', price: '48 元/月', traffic: '500GB/月', desc: '适合 4K 画质追剧与游戏加速' },
    { name: '尊享年付', price: '238 元/年', traffic: '280GB/月', desc: '折合 19.8 元/月，尊享品质' }
  ],
  'guangnian': [
    { name: '月付轻量', price: '19 元/月', traffic: '130GB/月', desc: '光年梯稳定节点配置' },
    { name: '月付高能', price: '38 元/月', traffic: '300GB/月', desc: '解锁 ChatGPT 与主流视频平台' },
    { name: '年付保质', price: '180 元/年', traffic: '150GB/月', desc: '折合 15 元/月，品质有保障' }
  ],
  'sogo-cloud': [
    { name: '月付入门', price: '16 元/月', traffic: '100GB/月', desc: 'Sogo云入门体验套餐' },
    { name: '月付进阶', price: '30 元/月', traffic: '220GB/月', desc: '稳定线路与全端一键导入' },
    { name: '年付特惠', price: '150 元/年', traffic: '120GB/月', desc: '折合 12.5 元/月，物美价廉' }
  ],
  'yuzhou-cloud': [
    { name: '基础版', price: '30 元/月', traffic: '400GB/月', desc: '宇宙云海量流量基础套餐' },
    { name: '旗舰版', price: '58 元/月', traffic: '800GB/月', desc: '重度流量用户与工作室首选' },
    { name: '企业年付', price: '288 元/年', traffic: '450GB/月', desc: '折合 24 元/月，企业稳定方案' }
  ],
  '2mao-cloud': [
    { name: '基础月付', price: '15 元/月', traffic: '100GB/月', desc: '二猫云实用性性价比套餐' },
    { name: '大流量月付', price: '29 元/月', traffic: '230GB/月', desc: '包含更多高速节点' },
    { name: '年付精选', price: '140 元/年', traffic: '110GB/月', desc: '折合 11.6 元/月，省钱安心' }
  ],
  '1fly-cloud': [
    { name: '标准月付', price: '18 元/月', traffic: '120GB/月', desc: '一翻云快速稳定节点' },
    { name: '高级月付', price: '34 元/月', traffic: '260GB/月', desc: '优化晚高峰丢包与延迟' },
    { name: '年付合算', price: '168 元/年', traffic: '140GB/月', desc: '折合 14 元/月，合算实惠' }
  ],
  'edgenova': [
    { name: '基础月付', price: '28 元/月', traffic: '200GB/月', desc: 'EdgeNova 边缘节点加速' },
    { name: '极速月付', price: '52 元/月', traffic: '450GB/月', desc: '专线入口，低延迟丢包少' },
    { name: '年付畅享', price: '260 元/年', traffic: '220GB/月', desc: '折合 21.6 元/月，畅享高速' }
  ],
  'kexin-cloud': [
    { name: '体验月付', price: '20 元/月', traffic: '150GB/月', desc: '可信云高可靠性线路' },
    { name: '专业月付', price: '38 元/月', traffic: '320GB/月', desc: '全原生 IP 与全端解锁' },
    { name: '年付超值', price: '188 元/年', traffic: '160GB/月', desc: '折合 15.6 元/月，性价比高' }
  ],
  'sujie': [
    { name: '基础月付', price: '24 元/月', traffic: '180GB/月', desc: '速界全中转节点体验' },
    { name: '高级月付', price: '45 元/月', traffic: '388GB/月', desc: '适合多端共享与高清音视频' },
    { name: '年付无忧', price: '228 元/年', traffic: '200GB/月', desc: '折合 19 元/月，无忧上网' }
  ],
  'kuaili': [
    { name: '微型月付', price: '14 元/月', traffic: '90GB/月', desc: '快狸便宜稳定套餐' },
    { name: '进阶月付', price: '26 元/月', traffic: '200GB/月', desc: '包含常用香港日本新加坡节点' },
    { name: '年付特惠', price: '128 元/年', traffic: '100GB/月', desc: '折合 10.6 元/月，极其便宜' }
  ],
  'worryfree': [
    { name: '实用月付', price: '17 元/月', traffic: '110GB/月', desc: '无忧链接防封锁方案' },
    { name: '畅游月付', price: '32 元/月', traffic: '240GB/月', desc: '畅游 4K 视频与社交媒体' },
    { name: '年付套餐', price: '158 元/年', traffic: '130GB/月', desc: '折合 13.1 元/月，省心选购' }
  ],
  'civet': [
    { name: '基础月付', price: '21 元/月', traffic: '160GB/月', desc: '灵猫网络稳定代步配置' },
    { name: '极速月付', price: '40 元/月', traffic: '340GB/月', desc: '支持 AI 工具与流媒体解锁' },
    { name: '年付专享', price: '198 元/年', traffic: '180GB/月', desc: '折合 16.5 元/月，稳定省心' }
  ],
  'flashleap': [
    { name: '体验月付', price: '26 元/月', traffic: '220GB/月', desc: '闪跃低延迟专线体验' },
    { name: '大流量月付', price: '49 元/月', traffic: '480GB/月', desc: '大流量高速传输保障' },
    { name: '年付特惠', price: '248 元/年', traffic: '240GB/月', desc: '折合 20.6 元/月，长久稳定' }
  ],
  'firefly': [
    { name: '基础月付', price: '19 元/月', traffic: '130GB/月', desc: '飞为经典中转节点' },
    { name: '进阶月付', price: '36 元/月', traffic: '280GB/月', desc: '优化晚高峰连接质量' },
    { name: '年付实惠', price: '178 元/年', traffic: '150GB/月', desc: '折合 14.8 元/月，实惠划算' }
  ],
  'kuajie': [
    { name: '基础月付', price: '23 元/月', traffic: '170GB/月', desc: '跨界云全节点分流方案' },
    { name: '极速月付', price: '43 元/月', traffic: '360GB/月', desc: '包含极速 4K 播放节点' },
    { name: '年付专享', price: '218 元/年', traffic: '190GB/月', desc: '折合 18.1 元/月，专享稳定' }
  ]
};

providers.forEach(p => {
  p.packages = packagesMap[p.slug] || [
    { name: '基础体验版', price: p.priceFrom || '20 元/月', traffic: p.trafficFrom || '100GB/月', desc: '适合日常网页与基础软件代步' },
    { name: '进阶主力版', price: '38 元/月', traffic: '300GB/月', desc: '适合高清视频播放与多设备同步' },
    { name: '年付优惠版', price: '180 元/年', traffic: '150GB/月', desc: '折合 15 元/月，年付更省心' }
  ];
  p.packagesSummary = p.packages.map(pkg => `${pkg.name}: ${pkg.price} (${pkg.traffic})`).join(' · ');
  if (p.coupon) {
    p.packagesSummary += ` · 优惠码 ${p.coupon}`;
  }
});

fs.writeFileSync(providersPath, JSON.stringify(providers, null, 2), 'utf8');
console.log('Successfully updated all 28 providers with detailed packages array!');
