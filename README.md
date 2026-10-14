# 唐朝服饰大观 · Tang Costume Gallery

> 以唐代壁画、敦煌色彩、绢帛肌理与传统工笔画为灵感的数字服饰文化展馆。

「唐朝服饰大观」是一座以唐代服饰文化为核心的在线数字展馆，兼具博物馆级视觉美感、历史知识深度与数字交互体验。项目以 React + TypeScript + Vite 构建，采用组件化架构、类型化数据模型与独立数据配置，前端优先、结构清晰、可运行、可测试、可持续迭代。

---

## 目录

- [项目简介](#项目简介)
- [核心功能](#核心功能)
- [技术栈](#技术栈)
- [界面设计原则](#界面设计原则)
- [环境要求](#环境要求)
- [安装依赖](#安装依赖)
- [开发启动](#开发启动)
- [生产构建](#生产构建)
- [测试命令](#测试命令)
- [目录结构](#目录结构)
- [核心组件职责](#核心组件职责)
- [服饰数据模型](#服饰数据模型)
- [数据文件的新增与修改](#数据文件的新增与修改)
- [路由组织](#路由组织)
- [样式规范](#样式规范)
- [后续扩展约定](#后续扩展约定)
- [开发约束](#开发约束)

---

## 项目简介

唐代是中国古代服饰发展的鼎盛时期，胡汉交融、色彩浓艳、形制开放。本项目通过数字展陈的方式，系统呈现唐代服饰的主要类别与文化内涵，包括：

- **圆领袍**：唐代男子最具代表性的常服
- **襦裙**：女子齐胸襦裙，盛唐飘逸之美
- **半臂**：短袖外搭，男女皆宜
- **披帛**：肩臂间的灵动织物
- **胡服**：丝绸之路传来的西域风尚
- **幞头**：男子首服，由软脚至硬脚的演变
- **配饰**：蹀躞带、步摇、云头履、璎珞等

历史内容依据公开可靠资料整理，无法确认的细节以「考辨说明」明确标注，**绝不将影视剧造型直接当作历史事实**。

## 核心功能

- **首页**：视觉冲击的主视觉 + 展馆导览入口 + 精选服饰 + 文化专题
- **服饰图鉴**：七大类目分类筛选、卡片式展陈、分页导航
- **服饰详情**：形制特征、色彩、纹样、材质、文化说明、资料来源、考辨说明、同类推荐
- **文化专题**：丝路胡风、盛唐气象、女着男装、敦煌色彩等跨类别叙事
- **展馆介绍**：项目背景、设计理念、内容立场、技术架构
- 响应式布局，适配桌面与移动端

## 技术栈

| 类别 | 选型 |
| --- | --- |
| 框架 | React 18 |
| 语言 | TypeScript 5 |
| 构建 | Vite 5 |
| 路由 | React Router 6 |
| 测试 | Vitest + React Testing Library + jsdom |
| 样式 | 原生 CSS（CSS 变量 + 分层样式表），无第三方 UI 库 |

## 界面设计原则

- **东方美学 × 现代展陈**：以唐代壁画、敦煌色彩、绢帛肌理、工笔画为视觉灵感
- **主色调**：朱砂红 `#9c2a2a`、石青 `#2f5d7c`、鎏金 `#c9a227`、温润米白 `#f5efe0`
- **字体层级**：`Ma Shan Zheng`（品牌书法）/ `ZCOOL XiaoWei`（标题）/ `Noto Serif SC`（正文）/ `Cormorant Garamond`（拉丁斜体）
- **呼吸感留白**：克制的密度，层叠式展陈卡片
- **细腻动效**：页面载入渐显、卡片悬停浮起、印章边框、联珠纹装饰
- **图片占位**：暂无真实图片时，以唐代纹样 + 印章汉字生成 SVG 占位图，保证视觉一致

## 环境要求

- Node.js >= 18
- npm >= 9（或兼容的 pnpm / yarn）

## 安装依赖

```bash
npm install
```

## 开发启动

```bash
npm run dev
```

启动后访问终端输出的本地地址（默认 `http://localhost:5173`）。

## 生产构建

```bash
npm run build
```

构建产物输出至 `dist/` 目录（已被 `.gitignore` 忽略）。

预览生产构建：

```bash
npm run preview
```

## 测试命令

```bash
# 运行全部测试（单次）
npm test

# 监听模式
npm run test:watch

# TypeScript 类型检查
npm run typecheck
```

测试覆盖范围：
- 数据完整性（id 唯一、必填字段、类别合法、专题关联有效）
- 筛选 Hook 逻辑（全量、按类别、切换回全部）
- 服饰查找工具函数
- 首页渲染（标题、入口、精选卡片）
- 图鉴页渲染与分类筛选交互
- 详情页渲染（有效 id 展示内容、无效 id 提示未找到、同类推荐）

## 目录结构

```
tang_costume/
├── index.html                  # 入口 HTML（字体引入）
├── package.json
├── vite.config.ts              # Vite + Vitest 配置
├── tsconfig.json / tsconfig.node.json
├── .gitignore
├── public/
│   └── favicon.svg
└── src/
    ├── main.tsx                # 应用入口
    ├── App.tsx                 # 路由配置
    ├── types/
    │   └── costume.ts          # 服饰数据模型 + 类别元信息
    ├── data/
    │   └── costumes.ts         # 服饰与文化专题初始数据
    ├── hooks/
    │   └── useCostumes.ts      # 分类筛选状态 + 查找工具
    ├── components/
    │   ├── Layout.tsx          # 页面骨架（Header + Footer）
    │   ├── Header.tsx          # 顶部导航
    │   ├── Footer.tsx          # 页脚
    │   ├── CostumeCard.tsx     # 服饰卡片
    │   ├── CategoryFilter.tsx  # 分类筛选器
    │   ├── ImagePlaceholder.tsx# Tang 风格 SVG 占位图
    │   └── HeroFigure.tsx      # 首页主视觉 SVG
    ├── pages/
    │   ├── Home.tsx            # 首页
    │   ├── Catalog.tsx         # 服饰图鉴
    │   ├── CostumeDetail.tsx   # 服饰详情
    │   ├── Topics.tsx          # 文化专题
    │   └── About.tsx           # 展馆介绍
    ├── styles/
    │   ├── global.css          # 设计令牌 + 基础样式 + 动画
    │   └── components.css      # 组件与页面样式
    └── test/
        ├── setup.ts            # 测试环境初始化
        ├── data.test.ts        # 数据完整性测试
        ├── hooks.test.tsx      # Hook 与工具函数测试
        └── pages.test.tsx      # 页面渲染与交互测试
```

## 核心组件职责

| 组件 | 职责 |
| --- | --- |
| `Layout` | 统一页面骨架，包裹 `Header` 与 `Footer`，所有页面均通过它渲染 |
| `Header` | 站点品牌标识 + 主导航，使用 `NavLink` 高亮当前路由 |
| `Footer` | 版权与内容立场声明 |
| `CostumeCard` | 服饰卡片，展示图片/占位图、名称、时代、人群、简介、色彩标签；支持 `compact` 模式 |
| `CategoryFilter` | 分类筛选器，以「chip」形式呈现全部类别及计数 |
| `ImagePlaceholder` | 当服饰无 `imageUrl` 时，生成唐代纹样 + 印章汉字的 SVG 占位图 |
| `HeroFigure` | 首页主视觉：工笔线描风格的唐代仕女 SVG |
| `useCostumes` | 图鉴页的本地状态：分类筛选、返回过滤结果 |
| `findCostumeById` / `findByCategory` | 详情页数据查找工具 |

## 服饰数据模型

定义于 `src/types/costume.ts`：

```ts
interface Costume {
  id: string;            // 稳定唯一标识（kebab-case）
  name: string;          // 服饰名称
  category: CostumeCategory; // 类别
  audience: string;      // 适用人群
  era: string;           // 时代背景
  features: string;      // 形制特征
  colors: string[];      // 典型色彩
  patterns: string[];    // 常见纹样
  materials: string[];   // 主要材质
  description: string;   // 文化说明
  imageUrl?: string;     // 图片资源（可选）
  source?: string;       // 资料来源
  notes?: string;        // 考辨说明（无法确认的细节）
}
```

类别枚举（`CostumeCategory`）：`yuanlingpao` | `ruqun` | `banbi` | `pibo` | `hufu` | `futou` | `accessories`。

类别元信息通过 `CATEGORY_META` 配置，包含展示名、英文副标题与主题色。

## 数据文件的新增与修改

所有初始数据集中在 `src/data/costumes.ts`：

- **新增服饰**：向 `costumes` 数组追加对象，务必：
  1. `id` 使用 kebab-case 且全局唯一，**一旦发布不可重命名**（会破坏路由与外部引用）；
  2. 填写全部必填字段；
  3. 尽量补充 `source`；存在争议或无法确认的细节写入 `notes`；
  4. 图片优先选用来源清晰、允许相应用途的素材，暂无则留空 `imageUrl`。
- **新增类别**：先在 `costume.ts` 的 `CostumeCategory` 联合类型中追加，再在 `CATEGORY_META` 中补充元信息，最后添加对应数据。
- **修改数据**：可直接编辑字段，但不要改变已发布条目的 `id`。
- **新增专题**：向 `culturalTopics` 数组追加，`relatedCostumeIds` 必须引用已存在的服饰 `id`。

## 路由组织

使用 React Router 6，路由集中配置于 `src/App.tsx`：

| 路径 | 页面 | 说明 |
| --- | --- | --- |
| `/` | `Home` | 首页 |
| `/catalog` | `Catalog` | 服饰图鉴 |
| `/costume/:id` | `CostumeDetail` | 服饰详情，`:id` 对应 `Costume.id` |
| `/topics` | `Topics` | 文化专题 |
| `/about` | `About` | 展馆介绍 |
| `*` | `NotFound` | 404 |

新增页面时：在 `src/pages/` 下创建组件，再在 `App.tsx` 的 `Routes` 中注册路由。

## 样式规范

- 样式分为两层：`global.css`（设计令牌、基础重置、通用工具类、动画）与 `components.css`（组件与页面样式）
- 颜色、字体、间距、圆角、阴影均通过 CSS 自定义属性（`--color-*`、`--font-*`、`--space-*`）统一管理
- 新增组件样式时，优先复用已有令牌，避免硬编码颜色与尺寸
- 动效统一使用 `--ease-out` / `--ease-in-out` 缓动，避免突兀
- 响应式断点：`900px`（平板）、`640px`（手机）
- 不引入第三方 CSS 框架，保持轻量与风格可控

## 后续扩展约定

项目为以下功能预留了数据结构与扩展点：

| 待扩展功能 | 预留位置 | 说明 |
| --- | --- | --- |
| 关键词检索 | `useCostumes` 中扩展 `filter` 状态与筛选逻辑 | 不影响现有 `category` 筛选 |
| 服饰对比 | `Costume` 数据结构已标准化，可直接对比字段 | 建议新增 `useCompare` hook |
| 收藏 | 可基于 `id` 持久化到 `localStorage` | 新增独立 hook，不侵入数据层 |
| 专题展览 | `culturalTopics` 已支持 `relatedCostumeIds` | 可扩展为独立路由 `/topics/:id` |
| 时代筛选 | `Costume.era` 字段已存在 | 在 `useCostumes` 中增加 era 过滤维度 |
| 材质 / 色彩筛选 | `materials` / `colors` 数组字段已存在 | 同上 |

## 开发约束

为保证后续 AI 可独立理解与迭代，避免分支间不必要耦合，约定如下：

### 可独立修改的模块

- **数据层**（`src/data/`）：仅修改数据内容，不影响组件与逻辑
- **类型层**（`src/types/`）：新增字段或类别时同步更新数据与消费方
- **样式层**（`src/styles/`）：修改视觉不影响业务逻辑
- **页面层**（`src/pages/`）：单个页面可独立重构，只要保持路由与数据契约
- **组件层**（`src/components/`）：单个组件可独立替换，只要保持 props 接口

### 需保持兼容的公共接口

- `Costume` 接口：新增字段必须设为可选（`?`），避免破坏现有数据
- `CostumeCategory` 联合类型：只追加不删除；删除会导致数据与筛选器失效
- `CATEGORY_META`：每个类别必须有对应配置
- `useCostumes` 返回值结构：`{ costumes, filtered, filter, setCategory }`，新增筛选维度时保持现有字段不变
- `findCostumeById(id): Costume | undefined`：签名保持不变
- 路由路径：`/costume/:id` 中的 `id` 即 `Costume.id`，不可改变其含义

### 避免耦合的实践

- 页面通过 `useCostumes` 等 hook 获取数据，不直接导入数据文件中的具体条目（详情页的 `findCostumeById` 除外）
- 组件不直接操作 DOM，所有状态通过 React 管理
- 筛选、检索、收藏等交互逻辑放在 `hooks/` 中，与 UI 组件分离
- 新增功能优先以「新增文件 / 新增 hook」方式实现，避免大规模修改已有文件
- 提交信息使用 `feat:` / `fix:` / `docs:` / `refactor:` / `test:` 前缀，便于追溯

---

## 截图与预览

启动开发服务器后，首页以唐代仕女主视觉为中心，搭配朱砂红印章式品牌标识；图鉴页按类别筛选，卡片悬停浮起并显示类别主题色顶边；详情页左右分栏呈现图片与结构化信息，色彩 / 纹样 / 材质以标签形式展示。

---

© Tang Costume Gallery · 以文化致敬盛唐
