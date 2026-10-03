import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const jsonPath = path.resolve(__dirname, '../src/data/providers.json');
const rawData = fs.readFileSync(jsonPath, 'utf8');
const providers = JSON.parse(rawData);

// Default metadata for provider enrichment
const defaultMetaData = {
  1: {
    name: "灵动云",
    regions: ["香港", "日本", "新加坡", "美国", "韩国"],
    aiUnlock: "全端解锁 ChatGPT / Claude / Netflix / TikTok",
    deviceLimit: "支持 5 台设备同时在线",
    packagesSummary: "20元/月 (120GB) · 38元/月 (300GB) · 8折优惠码 ld888",
    summary: "全站冠军主推，专线+BGP中转双架构，晚高峰4K拖拽秒开不缓冲，原生IP解锁全系 AI。"
  },
  2: {
    name: "暮光网络",
    regions: ["香港", "台湾", "日本", "韩国", "美国"],
    aiUnlock: "原生双ISP IP 解锁 Netflix / Disney+ / ChatGPT",
    deviceLimit: "支持 6 台设备同时在线",
    packagesSummary: "20元/月 (120GB) · 40元/月 (300GB) · 8折优惠码 mm88",
    summary: "影音流媒体大流量首选，原生IP支持4K HDR高清流畅播放，晚高峰看推特油管稳定不掉帧。"
  },
  3: {
    name: "飞猫云",
    regions: ["香港", "日本", "新加坡", "美国"],
    aiUnlock: "支持 ChatGPT 网页版与 API 解锁",
    deviceLimit: "支持 3 台设备同时在线",
    packagesSummary: "84元/年 (折合7元/月 50GB) · 25元/月 (150GB)",
    summary: "极致性价比王者，小流量年付仅84元起，IEPL专线节点配置，适合新手代步与轻量备用。"
  },
  4: {
    name: "微风网络",
    regions: ["香港", "日本", "新加坡"],
    aiUnlock: "基础 AI 工具与海外网页极速访问",
    deviceLimit: "支持 4 台设备同时在线",
    packagesSummary: "基础套餐 (100GB/月) 以官网实时结算页为准",
    summary: "稳定老牌中转机场，节点响应快，傻瓜式订阅一键导入，适合日常网页浏览与办公。"
  },
  5: {
    name: "隐形人",
    regions: ["香港", "日本", "美国", "欧洲"],
    aiUnlock: "高匿名双重加密解锁 AI",
    deviceLimit: "支持 5 台设备",
    packagesSummary: "25元/月 (180GB) · 240元/年",
    summary: "高强度暗光加密传输，保护上网轨迹与隐私安全，节点抗干扰能力极强。"
  },
  6: {
    name: "浪网 WaveNet",
    regions: ["香港", "日本", "新加坡", "美国"],
    aiUnlock: "解锁 YouTube 4K / Netflix",
    deviceLimit: "支持 5 台设备",
    packagesSummary: "22元/月 (160GB) · 210元/年",
    summary: "冲浪达人推荐，带宽给足，晚高峰播放 YouTube 4K 极速不掉帧。"
  },
  7: {
    name: "梯子云 LadderCloud",
    regions: ["香港", "日本", "新加坡", "美国", "台湾"],
    aiUnlock: "全端解锁 AI 工具与流媒体",
    deviceLimit: "不限制设备数",
    packagesSummary: "18元/月 (100GB) · 168元/年",
    summary: "不限连接设备数，极简订阅导入，非常适合多设备家庭与办公共享。"
  },
  8: {
    name: "飞V",
    regions: ["香港", "日本", "美国"],
    aiUnlock: "支持 ChatGPT 网页版解锁",
    deviceLimit: "支持 3 台设备",
    packagesSummary: "15元/月 (80GB) · 140元/年",
    summary: "极速代步老牌节点，低延迟入口，小白新手即买即用无压力。"
  }
};

const updatedProviders = providers.map((p) => {
  const meta = defaultMetaData[p.rank] || {};

  return {
    ...p,
    regions: p.regions && p.regions.length > 0 ? p.regions : (meta.regions || ["香港", "日本", "新加坡", "美国"]),
    aiUnlock: p.aiUnlock || meta.aiUnlock || "全端解锁 AI / 流媒体",
    deviceLimit: p.deviceLimit || meta.deviceLimit || "支持 3~5 台设备",
    packagesSummary: p.packagesSummary || meta.packagesSummary || `${p.priceFrom} (${p.trafficFrom})`,
    summary: meta.summary || p.summary || "优质稳健节点，极简订阅导入，适合日常上网与高清流媒体。"
  };
});

fs.writeFileSync(jsonPath, JSON.stringify(updatedProviders, null, 2), 'utf8');
console.log('Successfully enriched all 28 providers in providers.json!');
