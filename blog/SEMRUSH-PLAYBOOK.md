# SEMrush 分步操作手册（结合 jenn.ghost.io 的真实 GSC 数据）

> 现状（2026-07-06，GSC 近 3 个月）：点击 2 / 曝光 491 / CTR 0.4% / 平均排名 **21.7**（从 27 → 26.5 → 21.7，持续上升）。
> 你的钱在这里：**第一篇正在为一堆 "alternative indie / indie alternative" 词吃曝光，但卡在第 2–3 页（0 点击）。** 用 SEMrush 的目标 = 把这些词推进首页 + 为第二篇找“新站打得赢”的长尾。

---

## ⚠️ 三个开工前必须校准的点
1. **数据库改成美国（US）**。你的曝光 233 来自美国、UK 只有 76。SEMrush 左上角地区从 🇬🇧 改成 🇺🇸（第一篇受众为主）。UK 可作第二参考。地区选错，volume 和 KD 全是错的。
2. **新站的 KD 红线**：你现在几乎没有反向链接。规则——
   - **KD 0–29（Easy / Very easy）= 3 个月能打赢** → 主攻这里
   - KD 30–49 = 要时间+外链，长期备选
   - KD 50+（比如 `indie music` 是 59%）= **现在别碰**，SEMrush 自己都提示“需要 60 个引荐域名”
3. **省着用查询额度**。你这个是共享账号（海外客那种），每天 lookup 有限。**用批量（Bulk）一次查一堆，别一个一个点。**

---

## 第 1 步 · 把 GSC 查询词导出来当“种子”（最高信号）
Google 已经告诉你它认为你排什么了，这比凭空想关键词强 10 倍。
1. GSC → 效果 → **查询** 标签 → 右上 **导出** → Google 表格 / CSV。
2. 你会拿到这批种子（我从你截图先列出来）：
   `alternative indie bands` · `alternative indie artists` · `indie alternative artists` · `alternative indie` · `indie alternative` · `alternative/indie bands` · `indie alternative rock bands` · `alternative genre artists`
3. 这批就是**第 2 步的输入**。

---

## 第 2 步 · Keyword Overview（批量）给种子词做体检
一次性看清每个词的 volume / KD / 意图，判断哪些值得做。
1. SEMrush 左侧 **关键词研究 → 关键词概览（Keyword Overview）**。
2. 点 **批量分析（Bulk analysis）** 标签 → 把第 1 步那 8–20 个词**一次全粘进去** → 地区选 **US** → 查询。
3. 看三列做决策：
   - **Volume**：≥ 100 才值得，≥ 500 是好词
   - **KD%**：先挑 **< 30** 的（新站能赢的）
   - **Intent（意图）**：你的文章是 informational（信息型），只做意图=**Informational** 的；碰到 Transactional/Commercial 的先跳过
4. **产出**：在表格里标出「Volume 还行 + KD < 30 + 信息型」的词 = 你第一篇要重点优化的 on-page 目标词。
   > 预判：`alternative indie bands` 这类 KD 可能偏高（40+，红海）；真正好打的往往是更长的 `indie alternative rock bands`、`best alternative indie artists 2026` 这种长尾。以工具实测为准。

---

## 第 3 步 · Keyword Magic Tool（挖“打得赢”的长尾 + 问题词）
这是找新站能赢的词、以及 FAQ/GEO 素材的主力工具。
1. 左侧 **关键词魔法工具（Keyword Magic Tool）**。
2. **第一篇**：种子输 `indie alternative bands`（US）。
3. 左上加筛选：
   - **KD** → 选 `Easy` + `Very easy`（或手动 0–29）
   - **Volume** → ≥ 50
   - **Intent** → Informational
4. 顶部切 **Questions（问题）** 开关 → 得到一批 “what/which/best/how” 问题 → 直接变成你文章的 **H2/H3 或 FAQ**（对 GEO 尤其有用）。
5. **第二篇**：种子换 `arctic monkeys`，重复；重点找 `will arctic monkeys go back to their old sound`、`arctic monkeys albums ranked`、`arctic monkeys albums in order` 这类，看它们的 volume/KD。
6. **产出**：一张“可赢长尾词”清单，按 subtopic 分组 → 一部分补进现有两篇，一部分变成**下一篇选题**。

---

## 第 4 步 · On Page SEO Checker（把“怎么优化 on-page”直接算给你）★核心
这个工具直接回答你的问题——它抓首页前 10 名对比你，列出具体要改什么。
1. 左侧 **On Page SEO Checker**（在“站点表现/SEO”区）。
2. 新建 Project：域名填 `jenn.ghost.io`（共享账号若不让建 Project，跳到第 5、6 步，用 lookup 类工具）。
3. 添加要优化的页面 + 每页的目标关键词：
   - 页面①：`/indie-alternative-music-bands/` → 目标词填第 2 步选出的低 KD 词
   - 页面②：`/arctic-monkeys-sound-evolution/` → 目标词 `arctic monkeys sound evolution` / `will arctic monkeys go back to their old sound`
4. 跑完看它给的分类建议（**Optimization Ideas**）：
   - **Content**：该加多少字、可读性
   - **Semantic（语义词）**：竞品都提到、你没提的相关词 → **自然地补进去（别堆砌）**
   - **Backlinks**：谁给竞品发了外链 → 你的外链目标
   - **Technical / UX**：技术项
5. **产出**：每篇一份“照着改”的清单。这就是 on-page 优化的引擎。

---

## 第 5 步 · SEO Writing Assistant（边写边打分，防止堆砌）
把你的正文丢进去，实时给 SEO/可读性/语气/原创度打分。
1. 左侧 **内容创意 → SEO 写作助手（SEO Writing Assistant）** → 新建。
2. 设目标关键词（该篇 3–5 个）+ 地区 US → 把文章正文粘进去。
3. 看四项分：**SEO / 可读性 / 语气一致性 / 原创度**。
4. 它会推荐“建议包含的关键词”——**只挑读起来自然的加**，符合你“有深度、不堆砌”的原则。语气分能帮你保持第一篇那种故事感的一致性。
5. **产出**：一个可量化的“内容质量分”，改到 8/10 以上再更新上线。

---

## 第 6 步 · Position Tracking（3 个月目标的量尺）
GSC 看历史，Position Tracking 看每天排名变化，两个配合。
1. 左侧 **排名跟踪（Position Tracking）** → 域名 `jenn.ghost.io` → 地区 US。
2. 加入要盯的词（10–20 个即可）：第一篇的低 KD 目标词 + 第二篇的 arctic monkeys 长尾。
3. 每周看一次趋势：谁从第 3 页 → 第 2 页 → 首页。
4. **产出**：一条能截图的排名曲线——**这就是你将来接单/实习最有说服力的 case study 素材。**

---

## 第 7 步 ·（进阶）Keyword Gap 找竞品漏给你的词
1. 左侧 **竞品分析 → 关键词差异（Keyword Gap）**。
2. 你的域名 vs 2–3 个首页竞品域名（比如那些排在你前面的 indie/arctic 文章的站）。
3. 选 **Missing（你没有、对手有）** → 这些就是现成的选题/补充词。
4. **产出**：下一批内容选题，直接抄作业式补齐主题覆盖。

---

## 把它落到你这两篇的具体行动（别只学工具，要出结果）

**第一篇（pillar，正在吃曝光、卡第 2–3 页）——本周重点**
- 用第 2 步查清 `alternative indie bands / artists` 这批词的真实 KD。
- 对 KD < 30 的：用第 4 步 On Page Checker 拿语义词清单 → 自然补进正文；用第 5 步把内容分刷到 8+。
- 加强内链：从第二篇（Arctic Monkeys）用锚文本链回第一篇（已做）+ 未来每篇都链它。
- 这批词只要从 pos ~20 挪进前 10，**0 点击就会变成真实点击**。

**第二篇（Arctic Monkeys，太新）**
- 现在做 Position Tracking 建监控，别急着看排名。
- 用第 3 步给它找 KD < 30 的长尾（`arctic monkeys albums ranked` 之类）→ 补 1–2 个 H2 或写进结尾预告的那篇。

**下一篇（内容簇第 3 环）**
- 从第 3 步的“可赢长尾” + 第 7 步的“竞品缺口”里选一个 **KD < 25、信息型、volume ≥ 100** 的题来写。
- 结尾已预告的「best Arctic Monkeys albums ranked」是天然候选。

---

## 一句话记住优先级
**GSC 告诉你“已经在排什么” → SEMrush 告诉你“哪些值得推、怎么推、能不能赢” → On Page Checker + Writing Assistant 告诉你“具体改哪里” → Position Tracking 帮你证明“推上去了”。**
新站三个月，别跟 KD 50+ 的大词硬刚，赢在 **低 KD 长尾 + 已有曝光的词往首页挪 + 内容簇内链**。
