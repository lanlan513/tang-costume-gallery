import { renderHook, act } from '@testing-library/react';
import { useCostumes, findCostumeById, findByCategory } from '@/hooks/useCostumes';
import { costumes } from '@/data/costumes';

describe('useCostumes Hook', () => {
  it('初始返回全部服饰', () => {
    const { result } = renderHook(() => useCostumes());
    expect(result.current.filtered.length).toBe(costumes.length);
    expect(result.current.filter.category).toBe('all');
  });

  it('按类别筛选', () => {
    const { result } = renderHook(() => useCostumes());
    act(() => {
      result.current.setCategory('yuanlingpao');
    });
    const expected = costumes.filter((c) => c.category === 'yuanlingpao');
    expect(result.current.filtered.length).toBe(expected.length);
    expect(result.current.filtered.every((c) => c.category === 'yuanlingpao')).toBe(true);
  });

  it('切换回 all 显示全部', () => {
    const { result } = renderHook(() => useCostumes());
    act(() => result.current.setCategory('futou'));
    act(() => result.current.setCategory('all'));
    expect(result.current.filtered.length).toBe(costumes.length);
  });
});

describe('findCostumeById', () => {
  it('能找到存在的 id', () => {
    const found = findCostumeById(costumes[0].id);
    expect(found).toBeDefined();
    expect(found?.id).toBe(costumes[0].id);
  });

  it('不存在的 id 返回 undefined', () => {
    expect(findCostumeById('non-existent-id')).toBeUndefined();
  });
});

describe('findByCategory', () => {
  it('返回同类服饰且排除指定 id', () => {
    const target = costumes[0];
    const related = findByCategory(target.category, target.id);
    expect(related.every((c) => c.category === target.category)).toBe(true);
    expect(related.find((c) => c.id === target.id)).toBeUndefined();
  });
});
