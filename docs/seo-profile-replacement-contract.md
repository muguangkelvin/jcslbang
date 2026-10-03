# SEO 配置整体替换接口规范与契约 (SEO Profile Replacement Contract)

本文件定义后续万能替换提示词整体更新关键词、导航及内容矩阵的标准接口规范。

## 替换接口定义
1. **输入参数**：
   - 新核心关键词 (Primary Keywords)
   - 新辅助关键词 (Secondary Keywords)
   - 新长尾关键词 (Long-tail Keywords)
   - 新 Hero 关键词 (Hero Keywords)
   - 新页脚说明文案 (Footer Keywords)
   - 新导航项数组 (Navigation Items)
2. **替换执行步骤**：
   - 更新 `src/data/site-seo-profile.json` 及 `docs/site-seo-profile.json`
   - 运行 `node scripts/build-search-index.js` 重新生成本地搜索索引
   - 运行构建脚本重新生成全站静态 HTML
   - 检查旧 URL 映射并注入 301 重定向处理
