# 第二篇发布操作手册（你在自己浏览器里执行）

> 我（Claude）在云端环境里无法连上 jenn.ghost.io，也拿不到你的登录态，所以**最后的“导入 + 点发布”这几步需要你在自己已登录的浏览器里完成**。
> 我已经把整篇文章打包成一个 **Ghost 导入文件**，你只要上传一次，文章（含正文、标题层级、Tags、Excerpt、Meta、两处内链）就会**整篇自动建好**——不用手动粘贴正文、也不用一项项手填设置。

本文件夹内的三个文件：
- `arctic-monkeys-import.json` —— 一键导入 Ghost 的文件（**主用**）
- `arctic-monkeys-feature.png` —— 封面图（1600×900，奶油色复古黑胶风，需你手动上传）
- `arctic-monkeys-article.md` —— 纯文本版文章（**备用**：万一你想手动粘贴而不用导入时使用）

---

## 第 1 步 · 导入文章（一键建好整篇）

1. 浏览器打开 **https://jenn.ghost.io/ghost/#/settings/migration**
   （或：左下 **Settings → 往下找 “Import / Migration / Import content”**）
2. 点 **Import content / Universal import**，选择本文件夹里的 **`arctic-monkeys-import.json`**
3. 等待提示导入成功 → 去 **Posts → Drafts**，会看到一篇草稿：
   **“Will Arctic Monkeys Ever Go Back to Their Old Sound?”**

导入文件里**已经替你填好**的内容（无需再手填）：
- 正文全文（H1 标题 + H2×6 + H3×9 + FAQ + 两处指向第一篇的内链）
- Slug：`arctic-monkeys-sound-evolution`
- Tags：`arctic monkeys`、`indie rock`、`music recommendations`（后两个复用第一篇已有的 tag）
- Excerpt（摘要）
- Meta title / Meta description
- 状态：**草稿（draft）**——故意留作草稿，方便你加封面图、过一遍检查清单后再亲手点 Publish

> 作者会自动显示为你本人（Jenny，导入时用的就是你的账号），与第一篇一致。

---

## 第 2 步 · 打开草稿，补封面图 + 核对

打开那篇草稿进入编辑器后：

**① 上传封面图（Feature image）**
- 点文章顶部的 **Add feature image** → 上传本文件夹里的 **`arctic-monkeys-feature.png`**
- 设置 **Alt 文本**（封面图右上角设置/或图片 alt 字段）：
  ```
  A vinyl record collection representing Arctic Monkeys' two-decade discography evolution
  ```

**② 核对 Post settings（点右上角齿轮 ⚙ Settings）**——这些导入时已填，确认即可：
- Post URL（slug）：`arctic-monkeys-sound-evolution`
- Tags：`arctic monkeys`, `indie rock`, `music recommendations`
- Excerpt：
  ```
  An honest look at Arctic Monkeys' 20-year sound evolution — from Sheffield garage rock to art-rock reinvention, and whether a return to their old sound is actually coming.
  ```
- Meta data → Meta title：
  ```
  Will Arctic Monkeys Go Back to Their Old Sound? (2026)
  ```
- Meta data → Meta description：
  ```
  Tracing Arctic Monkeys' sound from Whatever People Say I Am to The Car — and answering the question fans keep asking: will they ever go back to rock?
  ```
- Authors：确认是 **Jenny**
- **Featured：保持关闭**（与第一篇一致）

**③ 核对正文（用编辑器滚一遍）**
- 文章主标题（H1）= “Will Arctic Monkeys Ever Go Back to Their Old Sound?”
- H2 共 6 个；H3 共 9 个（各专辑时期 / 各小节）
- 专辑名、人名、FAQ 问题的 **加粗 / 斜体** 是否正常
- **两处内链是否可点（带下划线/链接色）**，都指向第一篇 `https://jenn.ghost.io/indie-alternative-music-bands/`：
  1. Intro 第 4 段：“…they topped **my list of indie alternative bands worth hearing** — but their own story…”
  2. 结尾段：“…**the full list of indie alternative bands worth your time** is where to go next.”
- 全文无 `**`、`[]()` 等 markdown 残留（导入是结构化的，不会有残留，但顺手扫一眼）
- 无空的 Toggle 折叠卡片、无彩色高亮块、段间距与第一篇一致

---

## 第 3 步 · 发布前最终检查清单

- [ ] H1 / H2×6 / H3×9 层级正确
- [ ] 无 markdown 语法残留
- [ ] Slug / Meta title / Meta description / Excerpt / Tags 全部就位
- [ ] 封面图已上传 + Alt 文本已填
- [ ] 指向第一篇的两处链接可点击
- [ ] Featured 关闭、作者为 Jenny

全部 ✅ 后，点右上角 **Publish → Set it live now（Now）→ Publish**。
发布后记下正式地址（应为）：**https://jenn.ghost.io/arctic-monkeys-sound-evolution/**

---

## 第 4 步 · 回到第一篇，补“反向链接”（指向第二篇）

> ⚠️ 第一篇是已发布线上文章，**只新增一句话 + 一个链接，不要改动/删除任何原有文字、图片或 Spotify 嵌入**。

1. 打开第一篇编辑器：
   **https://jenn.ghost.io/ghost/#/editor/post/6a1c31e360087c000194b884**
2. 找到 **H2 “The Most Popular Alternative Indie Bands — Start Here”** 章节里**介绍 Arctic Monkeys 的那一段**。
   该段当前结尾是：
   > …Start with **AM (2013)**, then go back to Whatever People Say I Am (2006).
3. 在这段**末尾**，紧接着新增一句（不要另起标题，就接在同一段或紧随其后）：
   ```
   Their sound has changed enough times that I wrote a whole piece untangling it — read it here.
   ```
4. 选中其中的 **“read it here”** → 点编辑器链接图标（或按 Ctrl/Cmd+K）→ 粘贴：
   ```
   https://jenn.ghost.io/arctic-monkeys-sound-evolution/
   ```
5. 右上角点 **Update**（**不是重新 Publish**），保存对已发布文章的修改。

---

## 第 5 步 · 双向内链确认

- 打开第二篇，点 Intro 与结尾两处链接 → 都能跳到第一篇 ✅
- 打开第一篇 Arctic Monkeys 段落，点 “read it here” → 能跳到第二篇 ✅
- 双向内链打通完成。

---

### 备用方案（不想用导入文件时）
直接在 Ghost 里 **Posts → New post**，把 `arctic-monkeys-article.md` 全文复制粘贴进编辑器；Ghost 会自动把 markdown 转成对应格式。粘贴后重点检查：H1 是否变成文章标题、两处 `[]()` 链接是否变成可点链接（若变纯文字，手动选中→链接图标→粘贴 URL）。其余设置按第 2 步手动填。
