import { useMemo, useState } from 'react';
import { useCostumes } from '@/hooks/useCostumes';
import { CategoryFilter } from '@/components/CategoryFilter';
import { CostumeCard } from '@/components/CostumeCard';
import { CATEGORY_META } from '@/types/costume';

const PAGE_SIZE = 6;

export function Catalog() {
  const { filtered, filter, setCategory, costumes } = useCostumes();
  const [page, setPage] = useState(1);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);

  const pageItems = useMemo(
    () => filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE),
    [filtered, currentPage],
  );

  // 每个类别的计数
  const counts = useMemo(() => {
    const map: Record<string, number> = { all: costumes.length };
    for (const c of costumes) {
      map[c.category] = (map[c.category] || 0) + 1;
    }
    return map;
  }, [costumes]);

  const handleCategoryChange = (cat: typeof filter.category) => {
    setCategory(cat);
    setPage(1);
  };

  return (
    <div className="container">
      <div className="page-header animate-fade-in-up">
        <span className="page-subtitle">COSTUME CATALOG</span>
        <h1>服饰图鉴</h1>
        <p className="text-muted" style={{ marginTop: 'var(--space-sm)' }}>
          共收录 {costumes.length} 件唐代服饰，涵盖 {Object.keys(CATEGORY_META).length} 个类别
        </p>
      </div>

      <div className="catalog-toolbar animate-fade-in">
        <CategoryFilter
          active={filter.category}
          onChange={handleCategoryChange}
          counts={counts}
        />
        <span className="catalog-count">
          显示 {pageItems.length} / {filtered.length} 件
        </span>
      </div>

      {pageItems.length > 0 ? (
        <div className="costume-grid stagger">
          {pageItems.map((c) => (
            <CostumeCard key={c.id} costume={c} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <p>该类别下暂无服饰记录。</p>
        </div>
      )}

      {totalPages > 1 && (
        <nav
          className="pagination"
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 'var(--space-sm)',
            marginTop: 'var(--space-2xl)',
          }}
          aria-label="分页导航"
        >
          <button
            className="btn btn-ghost"
            style={{ padding: '8px 16px', fontSize: '0.9rem' }}
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
          >
            上一页
          </button>
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              aria-current={currentPage === i + 1 ? 'page' : undefined}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                border: '1px solid var(--color-line)',
                background: currentPage === i + 1 ? 'var(--color-cinnabar)' : 'transparent',
                color: currentPage === i + 1 ? '#fff' : 'var(--color-text)',
                fontFamily: 'var(--font-heading)',
                transition: 'all 0.3s ease',
              }}
            >
              {i + 1}
            </button>
          ))}
          <button
            className="btn btn-ghost"
            style={{ padding: '8px 16px', fontSize: '0.9rem' }}
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
          >
            下一页
          </button>
        </nav>
      )}
    </div>
  );
}
