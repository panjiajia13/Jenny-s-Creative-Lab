# 信息图「可嵌入 + 自动带署名回链」使用说明

这是这个赛道最实在的**白帽 dofollow 外链**抓手:别人把这张图放到自己网站,就自动带一条指向你文章的**可传权重的链接**(和 Reddit 的 nofollow 不同)。

本文件夹里三个文件：
- `arctic-monkeys-discography-timeline.png` — 图（底部已含 `jenn.ghost.io` 水印，扒图也带你域名）
- `embed-snippet.html` — **别人**复制到他们网站的嵌入代码
- `embed-box.html` — **你**放进文章里的「Use this graphic」盒子（内含可一键复制的代码）

---

## 接上去只需 2 步

### 第 1 步 · 拿到图片在 Ghost 上的公开 URL
1. 在第二篇文章里，把 `arctic-monkeys-discography-timeline.png` 作为正文配图上传（放在 H2「From Garage Rock to Art Rock」下方）。
2. 发布/更新后，打开线上文章 → 右键那张图 → **复制图片地址**。
   URL 形如：`https://jenn.ghost.io/content/images/2026/07/arctic-monkeys-discography-timeline.png`

### 第 2 步 · 放「Use this graphic」盒子
1. 在文章底部（结尾预告那句之前）插入一个 **HTML card**。
2. 把 `embed-box.html` 的**全部内容**粘进去。
3. 把里面的占位符 **`REPLACE_WITH_YOUR_GHOST_IMAGE_URL`** 替换成第 1 步复制的真实图片 URL。
4. 点 **Update**。

完成后，访客会看到一个可一键复制的代码框；谁复制去用，就自动给你回一条 dofollow 链接。

---

## 为什么有效（和 Reddit 的区别）
- 署名链接是**普通 dofollow**（没有 nofollow）→ **传递 SEO 权重**。
- 锚文本用了 `Arctic Monkeys' sound evolution`（关键词相关）+ `Jenny's Creative Lab`（品牌）→ 自然、不过度优化。
- 图内水印 `jenn.ghost.io` → 即使有人扒图不留代码，品牌仍随图传播。

## 怎么让人真的来嵌（不然它只是躺着）
1. **主动出击**：看到有人写 Arctic Monkeys（博客、小媒体、newsletter），友好地说"我做了张声音演变时间线，欢迎自取带署名"，附 embed 代码。
2. **图片 SEO**：图片文件名有意义、alt 填好 → 有机会进 Google 图片搜索，被写手找到。
3. **Pinterest / 音乐向社区**：信息图天生适合 Pin，能带发现流量。
4. 之后每写一篇乐队长文，都配一张这种原创信息图 → 积累一批"外链诱饵"。

> 一句话：Reddit 帖 = 流量/曝光/GEO；这张可嵌入信息图 = 真正能传权重的外链。两条腿一起走。
