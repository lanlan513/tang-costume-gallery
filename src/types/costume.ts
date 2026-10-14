/**
 * 服饰数据模型
 *
 * 所有服饰条目共享同一套类型定义，保证图鉴、详情、检索、对比等
 * 后续功能在数据层面可以平滑扩展。每条记录必须包含稳定的 `id`，
 * 作为路由与数据关联的唯一键。
 */

/** 服饰类别枚举。新增类别时需同步更新 CATEGORY_META 与图鉴筛选。 */
export type CostumeCategory =
  | 'yuanlingpao' // 圆领袍
  | 'ruqun' // 襦裙
  | 'banbi' // 半臂
  | 'pibo' // 披帛
  | 'hufu' // 胡服
  | 'futou' // 幞头
  | 'accessories'; // 配饰

/** 类别元信息：展示名、副标题、主题色。 */
export interface CategoryMeta {
  key: CostumeCategory;
  label: string;
  subtitle: string;
  accent: string; // 用于装饰的主题色（CSS 颜色值）
}

/** 服饰主数据。 */
export interface Costume {
  /** 稳定唯一标识，使用 kebab-case，便于 URL 与数据关联。 */
  id: string;
  /** 服饰名称。 */
  name: string;
  /** 所属类别。 */
  category: CostumeCategory;
  /** 适用人群，如「男子」「女子」「宫廷贵族」等。 */
  audience: string;
  /** 时代背景，如「初唐」「盛唐」「中晚唐」。 */
  era: string;
  /** 形制特征，简要描述款式结构。 */
  features: string;
  /** 典型色彩。 */
  colors: string[];
  /** 常见纹样。 */
  patterns: string[];
  /** 主要材质。 */
  materials: string[];
  /** 文化说明：历史渊源、社会意义等。 */
  description: string;
  /** 图片资源地址；为 undefined 时由占位组件渲染。 */
  imageUrl?: string;
  /** 图片 / 资料来源说明。 */
  source?: string;
  /** 无法确认的细节标注，避免将推测当作史实。 */
  notes?: string;
}

/** 文化专题。 */
export interface CulturalTopic {
  id: string;
  title: string;
  subtitle: string;
  summary: string;
  content: string;
  relatedCostumeIds: string[];
  accent: string;
}

/** 类别元信息配置。新增类别时在此扩展。 */
export const CATEGORY_META: Record<CostumeCategory, CategoryMeta> = {
  yuanlingpao: {
    key: 'yuanlingpao',
    label: '圆领袍',
    subtitle: 'Yuanling Robe',
    accent: '#9c2a2a',
  },
  ruqun: {
    key: 'ruqun',
    label: '襦裙',
    subtitle: 'Ruqun',
    accent: '#b5532a',
  },
  banbi: {
    key: 'banbi',
    label: '半臂',
    subtitle: 'Banbi',
    accent: '#2f5d7c',
  },
  pibo: {
    key: 'pibo',
    label: '披帛',
    subtitle: 'Pibo Shawl',
    accent: '#a8732a',
  },
  hufu: {
    key: 'hufu',
    label: '胡服',
    subtitle: 'Hu-style Attire',
    accent: '#6b4a7a',
  },
  futou: {
    key: 'futou',
    label: '幞头',
    subtitle: 'Futou Headwear',
    accent: '#3a3a3a',
  },
  accessories: {
    key: 'accessories',
    label: '配饰',
    subtitle: 'Accessories',
    accent: '#8a6d1f',
  },
};
