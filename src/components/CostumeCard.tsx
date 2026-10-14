import { Link } from 'react-router-dom';
import type { Costume } from '@/types/costume';
import { CATEGORY_META } from '@/types/costume';
import { ImagePlaceholder } from './ImagePlaceholder';

interface CostumeCardProps {
  costume: Costume;
  /** 紧凑模式（用于详情页推荐等空间有限的场景） */
  compact?: boolean;
}

export function CostumeCard({ costume, compact = false }: CostumeCardProps) {
  const meta = CATEGORY_META[costume.category];

  return (
    <Link
      to={`/costume/${costume.id}`}
      className={`costume-card ${compact ? 'is-compact' : ''}`}
      style={{ ['--card-accent' as string]: meta.accent }}
    >
      <div className="card-image">
        {costume.imageUrl ? (
          <img src={costume.imageUrl} alt={costume.name} loading="lazy" />
        ) : (
          <ImagePlaceholder
            name={costume.name}
            category={costume.category}
            subtitle={meta.subtitle}
            className="card-placeholder"
          />
        )}
        <span className="card-category-tag">{meta.label}</span>
      </div>

      <div className="card-body">
        <h3 className="card-title">{costume.name}</h3>
        {!compact && (
          <>
            <p className="card-era">{costume.era} · {costume.audience}</p>
            <p className="card-desc">{costume.description}</p>
            <div className="card-colors">
              {costume.colors.slice(0, 4).map((c) => (
                <span key={c} className="color-chip" title={c}>
                  {c}
                </span>
              ))}
            </div>
          </>
        )}
        <span className="card-link">查看详情 →</span>
      </div>
    </Link>
  );
}
