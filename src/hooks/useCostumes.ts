import { useMemo, useState } from 'react';
import { costumes } from '@/data/costumes';
import type { Costume, CostumeCategory } from '@/types/costume';

export type FilterState = {
  category: CostumeCategory | 'all';
};

/**
 * 服饰图鉴的本地状态管理：分类筛选。
 *
 * 当前仅实现分类筛选；后续若新增关键词检索、时代筛选、
 * 材质筛选等，可在此 Hook 内扩展，不影响调用方。
 */
export function useCostumes() {
  const [filter, setFilter] = useState<FilterState>({ category: 'all' });

  const filtered: Costume[] = useMemo(() => {
    if (filter.category === 'all') return costumes;
    return costumes.filter((c) => c.category === filter.category);
  }, [filter.category]);

  const setCategory = (category: CostumeCategory | 'all') =>
    setFilter((f) => ({ ...f, category }));

  return { costumes, filtered, filter, setCategory };
}

/** 按 id 查找单条服饰记录。 */
export function findCostumeById(id: string): Costume | undefined {
  return costumes.find((c) => c.id === id);
}

/** 按类别查找服饰，用于详情页的「同类推荐」。 */
export function findByCategory(category: CostumeCategory, excludeId?: string): Costume[] {
  return costumes.filter((c) => c.category === category && c.id !== excludeId);
}
