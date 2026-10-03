const fs = require('fs');
const path = require('path');

const titles = [
  "2026极具性价比机场盘点",
  "小流量年付机场避坑指南",
  "大流量影音套餐成本对比",
  "便宜机场能用吗",
  "平价机场晚高峰带宽压测",
  "Clash Verge Rev最佳适配机场推荐与一键订阅教程",
  "Sing-box与Clash双兼容机场选择与规则集优化",
  "不同设备（Windows/Mac/Android）Clash客户端全对比",
  "Clash订阅失败与节点连接不上的排查与修复指南",
  "Subconverter订阅转换安全隐患与自建转换节点方法",
  "Clash 适配与客户端配置教程",
  "性价比选购与避坑指南"
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

console.log("Scanning src/ ...");
scanDir(path.join(__dirname, '../src'));
console.log("Scan complete.");
