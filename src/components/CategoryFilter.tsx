import { CATEGORY_META } from '@/types/costume';
import type { CostumeCategory } from '@/types/costume';

interface CategoryFilterProps {
  active: CostumeCategory | 'all';
  onChange: (category: CostumeCategory | 'all') => void;
  counts?: Record<string, number>;
}

const allOption = { key: 'all' as const, label: '全部', subtitle: 'All' };

export function CategoryFilter({ active, onChange, counts }: CategoryFilterProps) {
  const options = [allOption, ...Object.values(CATEGORY_META)];

  return (
    <div className="category-filter" role="tablist" aria-label="服饰分类筛选">
      {options.map((opt) => {
        const isActive = active === opt.key;
        const count = counts?.[opt.key];
        return (
          <button
            key={opt.key}
            role="tab"
            aria-selected={isActive}
            className={`filter-chip ${isActive ? 'is-active' : ''}`}
            onClick={() => onChange(opt.key)}
            style={isActive ? { ['--chip-accent' as string]: opt.key === 'all' ? 'var(--color-cinnabar)' : (opt as { accent?: string }).accent } : undefined}
          >
            <span className="chip-label">{opt.label}</span>
            {count !== undefined && <span className="chip-count">{count}</span>}
          </button>
        );
      })}
    </div>
  );
}
