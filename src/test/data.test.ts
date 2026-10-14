import { costumes, culturalTopics } from '@/data/costumes';
import type { CostumeCategory } from '@/types/costume';
import { CATEGORY_META } from '@/types/costume';

describe('服饰数据完整性', () => {
  it('所有服饰 id 唯一', () => {
    const ids = costumes.map((c) => c.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('每条服饰包含全部必填字段', () => {
    costumes.forEach((c) => {
      expect(c.id).toBeTruthy();
      expect(c.name).toBeTruthy();
      expect(c.category).toBeTruthy();
      expect(c.audience).toBeTruthy();
      expect(c.era).toBeTruthy();
      expect(c.features).toBeTruthy();
      expect(c.description).toBeTruthy();
      expect(Array.isArray(c.colors)).toBe(true);
      expect(c.colors.length).toBeGreaterThan(0);
      expect(Array.isArray(c.patterns)).toBe(true);
      expect(c.patterns.length).toBeGreaterThan(0);
      expect(Array.isArray(c.materials)).toBe(true);
      expect(c.materials.length).toBeGreaterThan(0);
    });
  });

  it('所有服饰类别均在 CATEGORY_META 中定义', () => {
    const validCategories = Object.keys(CATEGORY_META) as CostumeCategory[];
    costumes.forEach((c) => {
      expect(validCategories).toContain(c.category);
    });
  });

  it('每个类别至少包含一条服饰数据', () => {
    const categories = new Set(costumes.map((c) => c.category));
    expect(categories.size).toBe(Object.keys(CATEGORY_META).length);
  });
});

describe('文化专题数据', () => {
  it('专题 id 唯一', () => {
    const ids = culturalTopics.map((t) => t.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('专题关联的服饰 id 均存在', () => {
    const costumeIds = new Set(costumes.map((c) => c.id));
    culturalTopics.forEach((t) => {
      t.relatedCostumeIds.forEach((rid) => {
        expect(costumeIds.has(rid)).toBe(true);
      });
    });
  });
});
