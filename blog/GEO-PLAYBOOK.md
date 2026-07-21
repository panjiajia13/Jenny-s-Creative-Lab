# GEO 操作手册 · Generative Engine Optimization Playbook

> 用途：给一个品牌做 GEO（让它出现在 AI 搜索结果 / AI Overviews / ChatGPT / Perplexity 的答案里）的完整方法论 + 可复用模板。
> 既是学习笔记，也是接单时的 SOP（standard operating procedure）和作品集素材。
> 配套：`SEMRUSH-PLAYBOOK.md`（传统 SEO）、`GSC-ANALYSIS-*.md`（数据）。

---

## 0. 一句话定位

**SEO** = 在搜索结果页排到第 1 个蓝链。
**GEO** = 让你的品牌**出现在 AI 生成的那段答案里**，最好是被**推荐**的那个。
成功的单位从「position #1」变成「被写进答案 / 被引用 / 被推荐」。

---

## 1. 底层逻辑：AI 为什么会「提到」一个品牌

AI 把你的品牌吐出来，只有两条途径，所有动作都围绕这两条：

1. **训练知识（parametric）** — 模型训练时「记住」的 = 全网对你品牌的提及。被提到越多、越一致、越权威 → 模型「脑子里」越有你。
2. **实时检索（retrieval / RAG）** — AI 回答时**当场去网上抓**的内容（Google AI Overviews 用 Google 索引；Perplexity / ChatGPT search 现抓网页）。→ 你的**页面结构 + 第三方来源**决定它抓不抓得到、引不引用你。

**AI 的内容偏好（记住这一句）**：偏爱**结构清晰、可直接引用、有事实/数据、被多个独立来源印证**的内容。
→ 所以 GEO = 让你「**好被抓取 + 好被引用 + 被多方背书**」。

---

## 2. GEO 五阶段方法论（帮一个品牌做 GEO 的可执行流程）

### 阶段 1 · 基线审计（先量，才知道差多少）
- 用真实买家 prompt 去测各大 AI，模板：
  - `best [品类] for [人群]`
  - `[品牌A] vs [品牌B]`
  - `is [品牌] good? / is [品牌] worth it?`
  - `what is the best [品类] brand in 2026?`
- 每条记录三件事：
  1. AI 提没提到你？（提及 / 引用 / 推荐是三个不同层级）
  2. 引用了哪些**来源网站**？
  3. **反而出现的是哪些竞品**、它们凭什么被引用？
- 工具：SEMrush 的 **AI 可见度 / AI Toolkit**（账号里找 AI visibility 相关模块）+ **手动 prompt 测试**（永远不能省，这是交付给客户的第一份诊断）。
- 产出：一份「AI 可见度诊断」——目前 0 提及 / 部分提及、竞品谁在赢、赢在哪些来源。

### 阶段 2 · 把品牌做成清晰的「实体（Entity）」
- 全网品牌信息一致：官网、LinkedIn、Crunchbase、行业目录、评价平台（G2 / Trustpilot / Capterra；DTC 则是媒体报道 + 电商评价）——名称、描述、关键事实统一。
- 争取 **Wikipedia / Wikidata / 权威目录**收录 → 模型判断「你是不是真实、可信实体」的强信号。

### 阶段 3 · 让内容「可被提取、可被引用」（on-page GEO）
最能立刻上手、也最体现专业度：
- **答案前置**：每段/每篇开头先给一句**能被直接摘走的结论**，再展开。
- **标题用问句**（贴合对话式提问）：`What is the most sustainable denim brand?`
- **每个论断自带事实**：数据、年份、来源、引用 → GEO 研究显示，加入统计/引用/来源会**显著提高被 AI 收录概率**。
- **结构化数据**：FAQPage / Article / Product / Organization schema，让机器好解析。
- **可摘取模块**：对比表、定义、TL;DR、FAQ。
- **新鲜度**：带更新日期、内容保持当前——AI 明显偏好最新信息。
- **E-E-A-T**：作者署名、资历、第一手经验。

### 阶段 4 · 站外 / 数字 PR（外链和 GEO 的交汇点）
- 让品牌出现在 **AI 爱引用的来源**里：**Reddit、Quora、YouTube**（AI Overviews / ChatGPT search 大量引用）、行业媒体、评测站、「best of」榜单。
- **打进「best X」榜单** = DTC 品牌 GEO 的头号杠杆（用户问「best sustainable jeans」时，AI 就是去读这些榜单）。
- 手段：数字 PR、HARO / 记者征稿、测评博主 / KOL 合作、真实用户 UGC。
- ⚠️ 这与 **link building 是同一套动作**：一次权威引用 = 一条 backlink（传统 SEO）+ 一个 AI 引用来源（GEO）。

### 阶段 5 · 持续监测 + 迭代
- 定期重测 prompt，跟踪「AI 提及份额 / share of voice」变化。
- 哪条内容进了引用、哪条没进 → 反推优化。

---

## 3. 品牌案例走一遍（可持续牛仔裤 DTC 小品牌）

**目标**：有人问 ChatGPT「best sustainable denim brands」时被提到。

1. **审计** — 问「best sustainable denim brands 2026」→ 答案全是 Nudie / MUD Jeans / Patagonia，来源是几篇时尚媒体榜单 + Reddit。你的品牌 0 提及。**诊断：不是产品不行，是 AI 读的那几个来源里没有你。**
2. **实体** — 补齐 Wikidata；把 GOTS 认证、成立年份、工厂透明度等事实在官网 + Crunchbase + LinkedIn 写一致。
3. **On-page GEO** — 官网建一篇 *"Is [Brand] Really Sustainable? Our Materials & Certifications, Explained"*：开头一句可摘取结论（"Yes — every pair is GOTS-certified organic cotton, made with ~X% less water…"），配数据来源、FAQ schema、conventional vs organic 对比表。
4. **数字 PR / 外链** — pitch「best sustainable denim」榜单编辑争取被收录；Reddit 相关话题做真实有价值的参与（非硬广）；找可持续时尚 YouTuber 测评。**目标：把品牌塞进 AI 会去读的那几个来源。**
5. **复测** — 一两个月后再问同一 prompt，看有没有开始被提及/引用 → 出报告。

→ 这一整套 = 你能写进 Upwork gig、写进简历、对客户讲的「GEO 服务」。

---

## 4. 客户交付物清单（接单时照着给）
- [ ] AI 可见度诊断报告（现状 + 竞品 share of voice + 引用来源分析）
- [ ] 优先级关键词 / prompt 清单
- [ ] On-page GEO 改造方案（答案前置 + schema + FAQ + 对比表）
- [ ] 数字 PR / 榜单收录目标清单
- [ ] 复测报告（优化前 vs 优化后 AI 提及对比）← **最有说服力的成果**

---

## 5. 诚实边界（对客户别越界承诺）
GEO 还很新、衡量工具不成熟。**不要保证「一定进 AI 答案」。**
你提供的是：**一套可复现的方法 + 诊断 + 持续优化**。这个定位既专业又诚实，也最好卖。

---

## 6. 在自己博客上练手（把方法变成作品）
1. 拿 Ghost 两篇（indie 音乐 / Arctic Monkeys）走阶段 1 审计：问 `best indie rock bands to listen to` / `did Arctic Monkeys change their sound`，看 AI 引不引用你、引用了谁 → 截图存证。
2. 挑一篇做**答案前置改写 + FAQ schema**（Arctic Monkeys 那篇已有 JSON-LD，正好演示），一两周后复测。
3. 「优化前 AI 不提 → 优化后被引用」的对比 = 杀手级 case study。

---

## 7. 术语速查
- **GEO** — Generative Engine Optimization，让品牌出现在 AI 生成答案里。
- **AI Overviews / AI Mode** — Google 搜索顶部的 AI 摘要。
- **RAG** — Retrieval-Augmented Generation，AI 实时抓网页再作答。
- **Share of voice** — 在一组 prompt 里，你 vs 竞品被提及的份额。
- **E-E-A-T** — Experience, Expertise, Authoritativeness, Trust。
- **数字 PR / Digital PR** — 通过内容/关系赢得权威媒体的报道与引用（喂养外链 + GEO）。
