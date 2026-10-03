import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const contentDir = path.resolve(__dirname, '../src/content');

const allTitlesMap = {
  // Clients (25 files)
  'clients/clash-verge-rev-complete-manual.md': {
    title: 'Clash Verge Rev 电脑端全功能保姆级配置手册',
    description: 'Windows / macOS 最强开源代理软件 Clash Verge Rev 图文使用指南。涵盖一键订阅导入、TUN 模式开启与预脚本分流。',
    keywords: ['Clash Verge Rev手册', 'Clash Verge配置', 'Windows科学上网']
  },
  'clients/clash-for-windows-migration-guide.md': {
    title: 'Clash for Windows 停更后无缝迁移至 Clash Verge Rev 迁移指南',
    description: 'CFW 停止维护后的最佳替代方案。手把手教你如何将节点订阅与自定义规则无损迁移至 Clash Verge Rev。',
    keywords: ['Clash for Windows迁移', 'CFW替代软件', 'Clash Verge Rev']
  },
  'clients/clash-for-android-cfa-guide.md': {
    title: 'Clash for Android (CFA) 安卓端订阅导入与路由配置',
    description: 'Android 手机经典代理客户端 CFA 指南。解决后台被杀进程、一键获取订阅与应用分流过滤。',
    keywords: ['Clash for Android', 'CFA安卓教程', 'Android代理客户端']
  },
  'clients/clash-meta-hysteria2-protocol.md': {
    title: 'Clash Meta (Mihomo) 内核支持 Hysteria2 / TUIC 高级协议配置',
    description: '深度解析 Mihomo (Clash Meta) 内核新特性。教你如何在 Clash 中开启 Hy2 与 TUIC v5 抗封锁极速协议。',
    keywords: ['Clash Meta内核', 'Hysteria2协议', 'Mihomo配置']
  },
  'clients/clash-verge-script-override-guide.md': {
    title: 'Clash Verge Rev 预脚本 Override 重写与自动分流指南',
    description: '教你利用 Clash Verge Rev 的扩展脚本功能实现多机场混合分流、广告拦截与特定域名强行直连。',
    keywords: ['Clash Verge脚本', 'Override重写', '自动分流规则']
  },
  'clients/client-sub-converter-online-guide.md': {
    title: '在线订阅转换工具 Subconverter 使用与节点链接安全防护',
    description: '教你如何安全高效地将 SS / Trojan / V2Ray 订阅转换为 Clash 或 Sing-box 格式，避免订阅地址泄露风险。',
    keywords: ['订阅转换Subconverter', 'Clash订阅转换', '节点链接安全']
  },
  'clients/mac-clash-nyanpasu-guide.md': {
    title: 'macOS 平台 Clash Nyanpasu 与 Clash Verge 安装配置教程',
    description: '苹果 Mac (Apple Silicon M1/M2/M3/M4) 电脑最强代理软件推荐。图文解答权限允许与 TUN 网卡部署。',
    keywords: ['Mac Clash教程', 'Clash Nyanpasu', 'macOS科学上网']
  },
  'clients/mac-tun-mode-system-proxy-setup.md': {
    title: 'Mac 电脑 TUN 虚拟网卡模式与系统代理开启避坑指南',
    description: '解决 Mac 终端 Terminal、Git、Docker 等命令行无法走代理的问题。完美配置 TUN 模式全局加速。',
    keywords: ['Mac TUN模式', 'Mac终端代理', 'macOS代理避坑']
  },
  'clients/android-tv-box-clash-setup.md': {
    title: 'Android TV 电视盒子与小米盒子 Clash 极速配置指南',
    description: '智能电视与 TV 盒子看 YouTube 4K、Netflix 必备配置方案。遥控器傻瓜式操作与开机自启代理设置。',
    keywords: ['Android TV Clash', '电视盒子科学上网', '小米盒子梯子']
  },
  'clients/openwrt-passwall-openclash-router.md': {
    title: 'OpenWrt 软路由 OpenClash 与 PassWall 旁路由部署教程',
    description: '全家设备免配置科学上网！软路由 OpenWrt 部署 OpenClash 与 PassWall 混合双中转全网透明代理。',
    keywords: ['OpenWrt软路由', 'OpenClash配置', 'PassWall旁路由']
  },
  'clients/proxy-client-speed-test-comparison.md': {
    title: '全平台科学上网代理客户端性能、内存占用与跑分横向对比',
    description: '对比 Clash Verge、Sing-box、Shadowrocket、Surfboard、v2rayN 在低配设备上的 CPU 与内存开销。',
    keywords: ['代理客户端对比', 'Clash vs Sing-box', '客户端性能测速']
  },
  'clients/quantumult-x-圈x-setup-guide.md': {
    title: 'Quantumult X (圈X) iOS 规则重写、节点导入与图标美化',
    description: 'iOS 平台功能最强尊享代理软件圈 X 入门手册。掌握本地重写、MITM 证书安装与第三方精美规则订阅。',
    keywords: ['Quantumult X教程', '圈X配置指南', 'iOS尊享代理']
  },
  'clients/shadowrocket-install-shadow-id-guide.md': {
    title: 'Shadowrocket (小火箭) 美区 Apple ID 注册与安装下载',
    description: '手把手教你免费注册美区 Apple ID 并安全下载正版小火箭 Shadowrocket，规避盗版共享账号风险。',
    keywords: ['美区Apple ID注册', '小火箭下载', 'Shadowrocket安装']
  },
  'clients/shadowrocket-rule-script-rewrite.md': {
    title: 'Shadowrocket 规则分流、脚本重写与广告拦截配置',
    description: '让小火箭更听话！导入分流规则文件，自动识别国内直连与海外代理，屏蔽网页与 APP 弹窗广告。',
    keywords: ['Shadowrocket规则分流', '小火箭脚本重写', '广告拦截配置']
  },
  'clients/shadowrocket-sub-auto-update-setting.md': {
    title: 'Shadowrocket 自动更新订阅、防封锁与节点检测技巧',
    description: '设置小火箭打开时自动拉取最新节点订阅，开启 UDP 转发与延迟测速过滤失效节点。',
    keywords: ['小火箭自动更新', 'Shadowrocket订阅', '节点超时检测']
  },
  'clients/sing-box-gui-windows-mac-guide.md': {
    title: 'Sing-box GUI 图形界面客户端 Windows/Mac 极速教程',
    description: '通用代理引擎 Sing-box 官方 GUI 图形界面新手使用教程。完美兼容独立配置文件与远程订阅。',
    keywords: ['Sing-box GUI', 'Sing-box桌面版', '通用代理客户端']
  },
  'clients/sing-box-json-config-custom-edit.md': {
    title: 'Sing-box JSON 配置文件自定义修改与节点分流规则',
    description: '进阶玩家必看：编写与修改 Sing-box json 配置文件，灵活配置 inbounds、outbounds 与 route 规则。',
    keywords: ['Sing-box json配置', 'Sing-box路由规则', '通用代理进阶']
  },
  'clients/sing-box-mobile-ios-android.md': {
    title: 'Sing-box 移动端（iOS / Android）一键导入与后台常驻',
    description: '在手机上免费体验 Sing-box！苹果 iOS 与安卓 Android 极简导入订阅与省电后台常驻指南。',
    keywords: ['Sing-box移动端', 'Sing-box iOS', 'Sing-box Android']
  },
  'clients/stash-clash-compatible-ios-guide.md': {
    title: 'Stash (iOS) 兼容 Clash 配置与游戏加速模式指南',
    description: 'iOS 平台完美替代 Clash 的高颜值软件 Stash 入门。支持按按应用独立代理与外服游戏按组加速。',
    keywords: ['Stash iOS教程', 'Stash游戏加速', 'Clash兼容客户端']
  },
  'clients/surfboard-android-sub-management.md': {
    title: 'Surfboard (冲浪板) 安卓端多机场订阅合并管理',
    description: '安卓手机最清爽代理客户端 Surfboard 使用教程。支持合并多个机场订阅与节点按延迟排序。',
    keywords: ['Surfboard安卓教程', '冲浪板订阅合并', 'Android机场软件']
  },
  'clients/surge-mac-ios-premium-setup-guide.md': {
    title: 'Surge (Mac / iOS) 顶级代理工具规则配置与网关代理',
    description: '苹果生态顶级网络调试工具 Surge 5 深度上手全解。接管全局网络、抓包调试与家庭网关代理。',
    keywords: ['Surge教程', 'Surge Mac配置', 'Surge网关代理']
  },
  'clients/v2rayn-routing-rule-cn-direct.md': {
    title: 'v2rayN 路由规则设置：大陆直连与海外代理智能分流',
    description: '解决访问国内网站缓慢问题！配置 v2rayN 路由规则，强制百度、淘宝、微信走本地直连，海外流量走代理。',
    keywords: ['v2rayN路由规则', '大陆直连海外代理', '智能分流设置']
  },
  'clients/v2rayn-v7-latest-version-guide.md': {
    title: 'v2rayN v7 最新版界面使用、Sing-box 内核切换指南',
    description: 'v2rayN 重磅升级 7.0 版本指南。体验现代化 UI 界面、自适应内核切换与一键批量测网速。',
    keywords: ['v2rayN v7教程', 'v2rayN最新版', 'v2rayN内核切换']
  },
  'clients/v2rayng-android-client-guide.md': {
    title: 'v2rayNG Android 安卓端 VLESS / Trojan 节点导入教程',
    description: '安卓老牌稳定软件 v2rayNG 保姆级教程。手把手教你剪贴板导入节点、扫码订阅与分应用代理。',
    keywords: ['v2rayNG安卓教程', 'v2rayNG节点导入', 'Android VLESS']
  },
  'clients/windows-tun-mode-global-proxy.md': {
    title: 'Windows 系统 TUN 模式开启与 UWP 应用联网代理解除',
    description: '解决 Windows 微软商店、Xbox 应用与 CMD 命令行不走代理的难题。一键开启 TUN 虚拟网卡代理。',
    keywords: ['Windows TUN模式', 'UWP代理解除', '全局虚拟网卡']
  },

  // Lines (15 files)
  'lines/iplc-dedicated-line-airport-guide.md': {
    title: 'IPLC 国际专线机场详解：晚高峰0丢包与低延迟实测',
    description: '硬核解析 IPLC (International Private Leased Circuit) 国际点对点专线。为什么专线不过公网防火墙？',
    keywords: ['IPLC专线机场', '晚高峰0丢包', '国际点对点专线']
  },
  'lines/iepl-border-line-vs-iplc-guide.md': {
    title: 'IEPL 陆路专线与 IPLC 海缆专线区别及选购指南',
    description: '对比 IEPL 乙太专线与 IPLC 物理专线在抗封锁、延迟稳定性与节点成本上的优劣势，教你理性挑选。',
    keywords: ['IEPL专线', 'IPLC与IEPL区别', '专线机场推荐']
  },
  'lines/bgp-transit-vs-direct-lines.md': {
    title: 'BGP 多线中转与公网直连节点对比：如何挑选不掉帧线路',
    description: '揭秘机场节点底座：公网直连、普通单线中转与 BGP 多线入口在晚高峰压力测试下的速度差距。',
    keywords: ['BGP中转机场', '公网直连节点', '晚高峰不掉帧']
  },
  'lines/chatgpt-claude-ai-dedicated-lines.md': {
    title: 'ChatGPT / Claude AI 工具专用原生 IP 线路推荐',
    description: '专门针对 OpenAI、Anthropic 风险控制机制优化的节点推荐。使用海外原生 Residential 双ISP IP 规避封号。',
    keywords: ['ChatGPT专用线路', 'Claude原生IP', 'AI解锁机场']
  },
  'lines/streaming-unlock-native-ip-guide.md': {
    title: 'Netflix / Disney+ / TikTok 4K 原生 IP 解锁线路精选',
    description: '追剧党必备：精选能够完整解锁 Netflix 自制剧、Disney+ 4K HDR、TikTok 海外直播的原生 IP 节点。',
    keywords: ['Netflix解锁线路', 'Disney+原生IP', '流媒体加速机场']
  },
  'lines/game-acceleration-low-latency-ladder.md': {
    title: '外服游戏加速专线：Steam / EA / Riot 低延迟梯子推荐',
    description: '玩英雄联盟外服、Apex、绝地求生、CS2 总是卡顿？推荐具备游戏专用 UDP 转发与超低 Ping 延时节点。',
    keywords: ['游戏加速梯子', 'Steam低延迟节点', '外服游戏专线']
  },
  'lines/games-console-ps5-switch-xbox.md': {
    title: '主机游戏（PS5 / Switch / Xbox）软路由加速与专线中转',
    description: '解决主机商店下载慢、联机 NAT 类型受限问题。通过软路由或 PC 局域网共享联机专线。',
    keywords: ['PS5加速节点', 'Switch eShop加速', 'Xbox联机专线']
  },
  'lines/high-speed-4k-8k-video-lines.md': {
    title: '4K / 8K 极速视频加速线路：YouTube 拖拽秒开节点推荐',
    description: '专为高码率视频打造的大带宽节点。实测晚高峰 YouTube 跑分突破 200,000 Kbps，秒开 4K 拖拽无缓冲。',
    keywords: ['4K秒开线路', '8K极速视频节点', 'YouTube跑分测试']
  },
  'lines/hk-jp-sg-us-node-comparison.md': {
    title: '香港、日本、新加坡、美国热门节点延迟与用途对比',
    description: '科学上网节点怎么选？详细分析香港低延迟、日本游戏加速、新加坡 AI 解锁与美国大流量节点的最佳用途。',
    keywords: ['香港日本节点对比', '新加坡节点用途', '节点选择指南']
  },
  'lines/hy2-tuic-udp-protocol-lines.md': {
    title: 'Hysteria2 与 TUIC v5 新一代 UDP 协议专线抗封锁分析',
    description: '深度解析基于 QUIC / UDP 协议的新一代穿透技术。为什么 Hy2 可以在劣质网络与弱网环境下大幅提速？',
    keywords: ['Hysteria2协议', 'TUIC v5专线', 'UDP抗封锁技术']
  },
  'lines/low-multiplier-vs-high-multiplier.md': {
    title: '机场 0.1x 低倍率与 5x 高倍率节点流量扣费陷阱解析',
    description: '为什么看了一会儿视频流量就扣光了？详解机场节点倍率计算规则，教你用低倍率节点省流量。',
    keywords: ['机场节点倍率', '流量扣费陷阱', '0.1x低倍率节点']
  },  'lines/cross-border-ecommerce-static-ip.md': {
    title: '跨境电商与 TikTok 运营专用静态独享 IP 线路方案',
    description: 'Amazon、eBay、Shopee 店铺防关联与 TikTok 运营专用长效静态纯净 IP 节点挑选策略。',
    keywords: ['跨境电商静态IP', 'TikTok运营节点', '防关联独享IP']
  },
  'lines/enterprise-remote-work-lines.md': {
    title: '企业远程办公与 GitHub / Docker 开发加速专线推荐',
    description: '程序员与外贸企业必备：解决 GitHub clone 失败、Docker pull 镜像超时与 Google Workspace 访问慢。',
    keywords: ['GitHub开发加速', '企业远程办公专线', 'Docker镜像加速']
  },
  'lines/financial-trading-crypto-low-ping.md': {
    title: '加密货币交易（Binance/OKX）与外汇低延迟专线',
    description: '币圈与外汇交易党专属：精选低延迟、0 丢包、绝对安全的独享交易专线，防止插针行情断连失误。',
    keywords: ['Binance交易专线', '加密货币低延迟', 'OKX加速节点']
  },
  'lines/anti-blocking-failover-backup-lines.md': {
    title: '敏感时期防封锁自动故障转移与双专线备用架构',
    description: '每年敏感时期节点全红怎么办？搭建双机场主备自动切换规则，保障 365 天网络永不中断。',
    keywords: ['防封锁故障转移', '双机场备用架构', '敏感时期科学上网']
  },

  // FAQ (25 files)
  'faq/faq-beginner-standard-for-buying.md': {
    title: '小白第一次买梯子怎么选？新手选购机场标准与避坑清单',
    description: '总结 10 条零基础小白买梯子避坑守则。从价格区间、线路架构、退款条款到试用体验全解析。',
    keywords: ['买梯子怎么选', '新手选购标准', '小白买梯子避坑']
  },
  'faq/faq-chatgpt-access-denied-solution.md': {
    title: 'ChatGPT 提示 Access Denied / 1020 报错怎么解决？',
    description: '一步步教你解除 OpenAI 访问限制。清空浏览器缓存、切换原生住宅 IP 节点并开启 TUN 全局代理。',
    keywords: ['ChatGPT Access Denied', 'ChatGPT 1020报错', 'OpenAI IP解封']
  },
  'faq/faq-clash-subscription-update-error.md': {
    title: 'Clash 提示 Subscription Update Failed 解决办法',
    description: '常见 Clash 无法拉取节点故障排查：检查本地系统时间同步、域名 DNS 解析与订阅链接合法性。',
    keywords: ['Clash订阅更新失败', 'Subscription Failed', 'Clash故障排查']
  },
  'faq/faq-claude-app-disallowed-ip-fix.md': {
    title: 'Claude / Anthropic 提示 App Disallowed IP 解封技巧',
    description: 'Claude 3.5 对 IP 节点防关联要求极高。教你挑选可以通过 Anthropic 严苛风控的安全 IP 线路。',
    keywords: ['Claude IP解封', 'App Disallowed IP', 'Anthropic风控规避']
  },
  'faq/faq-dns-leak-check-fix-guide.md': {
    title: '如何检测并修复 DNS 泄露？防止隐私泄露与真实 IP 暴露',
    description: '使用 dnsleaktest 工具测试本地网络隐私安全。在 Clash / Sing-box 中配置 DoH (DNS over HTTPS)。',
    keywords: ['DNS泄露检测', '防止真实IP暴露', 'DoH加密配置']
  },
  'faq/faq-free-trial-airport-safety-risk.md': {
    title: '免费梯子与白嫖机场安全吗？解析隐私防关联与跑路风险',
    description: '天下没有免费的午餐！深度剖析免费 VPN / 免费机场收集用户浏览日志与出售隐私信息的潜在威胁。',
    keywords: ['免费梯子安全吗', '白嫖机场风险', '免费VPN隐私泄露']
  },
  'faq/faq-how-to-choose-standby-backup-ladder.md': {
    title: '为什么一定要准备备用机场？低成本双机场组合搭法',
    description: '单机场难免遇到主干网故障或临时维护。教你如何用 7 元/月的便宜机场搭建高可靠双重保险。',
    keywords: ['备用机场推荐', '低成本双机场', '防失联科学上网']
  },
  'faq/faq-iplc-bgp-difference-explained.md': {
    title: '什么是 IPLC 专线与 BGP 中转？两者有什么本质区别？',
    description: '通俗易懂拆解网络架构：IPLC 物理专线相当于“高铁直达通道”，BGP 中转相当于“高速公路优化入口”。',
    keywords: ['IPLC与BGP区别', '专线原理科普', '机场线路架构']
  },
  'faq/faq-ladder-payment-safety-alipay-wechat.md': {
    title: '购买机场使用微信支付宝付款安全吗？如何保护隐私？',
    description: '分析第三方代收支付渠道安全性。建议使用非实名临时账户或 USDT 加密货币支付提升隐私安全。',
    keywords: ['支付宝买机场安全吗', '微信付款隐私', '机场支付方式']
  },  'faq/faq-mac-clash-permission-denied.md': {
    title: 'Mac 电脑开启 Clash 提示 Permission Denied 解决办法',
    description: 'Mac 用户常见报错修复：给予 Clash 辅助守护进程 Helper 权限，并在终端修复执行文件 chmod 权限。',
    keywords: ['Mac Clash权限报错', 'Permission Denied修复', 'Mac辅助进程']
  },
  'faq/faq-monthly-vs-annual-payment-risk.md': {
    title: '机场买月付还是买年付？对比跑路风险与折扣性价比',
    description: '手把手算账：年付虽然有 8 折优惠但承担跑路风险；月付虽然单价略高但资金绝对安全。建议新手月付。',
    keywords: ['机场买月付还是年付', '年付跑路风险', '月付性价比分析']
  },
  'faq/faq-netflix-house-hold-proxy-fix.md': {
    title: 'Netflix 提示“同户装置/同户发包”限制代理解锁方法',
    description: '解决 2026 Netflix 最新同户限制策略。选择支持解锁 Netflix 完整自制剧的原生 Residential 节点。',
    keywords: ['Netflix同户限制', 'Netflix解锁失败', '原生IP解除限制']
  },
  'faq/faq-node-multiplier-traffic-calculation.md': {
    title: '机场节点倍率（0.5x / 1.5x / 3x）流量怎么计算？',
    description: '节点倍率表示使用 1GB 实际流量在后台扣除的额度。用 0.5x 节点实际只扣 500MB，用 3x 节点扣 3GB。',
    keywords: ['节点倍率计算', '流量扣除规则', '0.5x低倍率节点']
  },
  'faq/faq-node-traffic-reset-rule-check.md': {
    title: '机场流量是按自然月还是账单月重置？如何查询余额？',
    description: '详解机场后台两种重置方式：“自然月（每月1号）”与“账单月（按购买日推算）”，防止月中突然断网。',
    keywords: ['机场流量重置', '账单月与自然月', '流量余额查询']
  },
  'faq/faq-peak-hours-video-buffering-fix.md': {
    title: '为什么晚高峰看视频特别卡？丢包率与节点选择建议',
    description: '晚上 8 点至 11 点国内出口公网拥堵严重。推荐选择 IPLC 专线节点或开启 Hysteria2 强提速协议。',
    keywords: ['晚高峰视频卡顿', '丢包率升高原因', 'IPLC专线解决']
  },
  'faq/faq-privacy-security-isp-monitoring.md': {
    title: '国内运营商能检测到我在科学上网吗？防关联安全防护',
    description: '科普运营商流量特征识别（DPI 深度包检测）原理。使用 Shadowsocks-2022、VLESS Vision 加密防检测。',
    keywords: ['运营商DPI检测', '科学上网安全防范', '加密协议推荐']
  },
  'faq/faq-shadowrocket-timeout-issue-fix.md': {
    title: '小火箭 Shadowrocket 显示节点超时/延迟-1ms修复',
    description: '小火箭所有节点测速全红显示 -1ms？依次检查系统时间、节点订阅更新与美区 ID 软件版本授权。',
    keywords: ['小火箭节点超时', 'Shadowrocket -1ms', '小火箭故障排查']
  },
  'faq/faq-sing-box-config-parse-error.md': {
    title: 'Sing-box 提示 Config Parse Error 格式报错修复',
    description: '解析 Sing-box 客户端常见 JSON 语法错误，教你使用在线工具检查格式并重新拉取合法配置。',
    keywords: ['Sing-box Parse Error', 'Sing-box配置报错', 'JSON语法修复']
  },
  'faq/faq-ss-trojan-vmess-protocol-best.md': {
    title: 'Shadowsocks、Trojan、VLESS 哪种协议速度最快最稳定？',
    description: '对比 2026 年主流科学上网协议：Shadowsocks 经典高兼容、Trojan 伪装性强、VLESS Vision 速度极快。',
    keywords: ['科学上网协议对比', 'Trojan vs VLESS', 'Shadowsocks速度']
  },
  'faq/faq-switch-eshop-steam-region-change.md': {
    title: 'Steam 与 Switch eShop 商店跨区代理与支付避坑',
    description: '教你如何安全切换 Steam 港区/美区/阿根廷区，以及 Nintendo Switch eShop 购买低价数字版游戏。',
    keywords: ['Steam跨区代理', 'Switch eShop加速', '游戏商店跨区']
  },
  'faq/faq-telegram-connection-connecting-fix.md': {
    title: 'Telegram (TG) 一直显示 Connecting / 转圈连接不上',
    description: '解决电报 TG 无法连通问题：在软件设置中添加内置 MTProto 代理或开启 Clash / 小火箭全局代理。',
    keywords: ['Telegram连接不上', 'TG一直Connecting', 'MTProto代理设置']
  },
  'faq/faq-tiktok-black-screen-no-content.md': {
    title: 'TikTok 黑屏刷不出视频、无网络连接问题终极修复',
    description: '排查 TikTok 识别中国大陆 SIM 卡封锁原因，使用免拔卡节点与位置伪装脚本完美流畅刷短视频。',
    keywords: ['TikTok黑屏修复', 'TikTok无网络连接', 'TikTok免拔卡刷视频']
  },
  'faq/faq-transparent-proxy-home-router.md': {
    title: '家庭路由器部署旁路由透明代理需要注意什么？',
    description: '解决旁路由网络打卡超时与 DNS 环路问题。配置网关网段、DHCP 选项与开启 IP 动态伪装。',
    keywords: ['旁路由透明代理', '家庭网关配置', 'DNS环路排查']
  },
  'faq/faq-v2rayn-service-start-failed.md': {
    title: 'v2rayN 提示 Service Start Failed 服务启动失败修复',
    description: '修复 v2rayN 核心服务崩溃问题：更新 Xray / v2fly 核心文件，解除 10808 本地监听端口占用。',
    keywords: ['v2rayN服务启动失败', 'Service Start Failed', 'v2rayN核心修复']
  },
  'faq/faq-android-battery-saving-kill-clash.md': {
    title: '安卓手机后台自动杀掉 Clash / v2rayNG 进程怎么解决？',
    description: '小米 MIUI/HyperOS、华为 HarmonyOS、OPPO/vivo 手机关闭省电策略，允许科学上网软件后台常驻。',
    keywords: ['安卓后台杀Clash', 'v2rayNG后台被杀', '安卓省电策略关闭']
  }
};

function updateAllTitles() {
  for (const [relPath, info] of Object.entries(allTitlesMap)) {
    const fullPath = path.join(contentDir, relPath);
    if (!fs.existsSync(fullPath)) {
      console.warn(`File not found: ${fullPath}`);
      continue;
    }

    let content = fs.readFileSync(fullPath, 'utf8');

    // Replace frontmatter title, description, keywords
    content = content.replace(/title:\s*".*?"/, `title: "${info.title}"`);
    content = content.replace(/description:\s*".*?"/, `description: "${info.description}"`);
    if (content.includes('keywords:')) {
      content = content.replace(/keywords:\s*\[.*?\]/, `keywords: [${info.keywords.map(k => `"${k}"`).join(', ')}]`);
    }

    fs.writeFileSync(fullPath, content, 'utf8');
    console.log(`Updated title for: ${relPath}`);
  }
}

updateAllTitles();
console.log('All titles updated to Chinese successfully!');
