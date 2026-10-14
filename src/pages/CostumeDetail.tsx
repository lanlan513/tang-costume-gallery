import { Link, useParams } from 'react-router-dom';
import { findCostumeById, findByCategory } from '@/hooks/useCostumes';
import { CATEGORY_META } from '@/types/costume';
import { ImagePlaceholder } from '@/components/ImagePlaceholder';
import { CostumeCard } from '@/components/CostumeCard';

export function CostumeDetail() {
  const { id } = useParams<{ id: string }>();
  const costume = id ? findCostumeById(id) : undefined;

  if (!costume) {
    return (
      <div className="container" style={{ padding: 'var(--space-3xl) 0', textAlign: 'center' }}>
        <h1 className="text-cinnabar" style={{ marginBottom: 'var(--space-md)' }}>未找到该服饰</h1>
        <p className="text-muted" style={{ marginBottom: 'var(--space-xl)' }}>
          您访问的服饰条目不存在或已被移除。
        </p>
        <Link to="/catalog" className="btn btn-primary">返回图鉴</Link>
      </div>
    );
  }

  const meta = CATEGORY_META[costume.category];
  const related = findByCategory(costume.category, costume.id).slice(0, 3);

  return (
    <div className="container">
      <div className="detail-layout">
        {/* 图片区 */}
        <div className="detail-image-wrap animate-fade-in">
          <div className="detail-image">
            {costume.imageUrl ? (
              <img src={costume.imageUrl} alt={costume.name} />
            ) : (
              <ImagePlaceholder
                name={costume.name}
                category={costume.category}
                subtitle={meta.subtitle}
                className="detail-placeholder"
              />
            )}
          </div>
        </div>

        {/* 内容区 */}
        <div className="detail-content animate-fade-in-up">
          <div className="detail-breadcrumb">
            <Link to="/">首页</Link> / <Link to="/catalog">服饰图鉴</Link> /{' '}
            <span>{costume.name}</span>
          </div>

          <h1 className="detail-title">{costume.name}</h1>
          <p className="detail-era-audience">
            {costume.era} · {costume.audience}
          </p>

          <div className="detail-section">
            <h3 className="detail-section-title">形制特征</h3>
            <p>{costume.features}</p>
          </div>

          <div className="detail-section">
            <h3 className="detail-section-title">文化说明</h3>
            <p>{costume.description}</p>
          </div>

          <div className="detail-section">
            <h3 className="detail-section-title">色彩</h3>
            <div className="tag-list">
              {costume.colors.map((c) => (
                <span key={c} className="tag">{c}</span>
              ))}
            </div>
          </div>

          <div className="detail-section">
            <h3 className="detail-section-title">纹样</h3>
            <div className="tag-list">
              {costume.patterns.map((p) => (
                <span key={p} className="tag">{p}</span>
              ))}
            </div>
          </div>

          <div className="detail-section">
            <h3 className="detail-section-title">材质</h3>
            <div className="tag-list">
              {costume.materials.map((m) => (
                <span key={m} className="tag">{m}</span>
              ))}
            </div>
          </div>

          {costume.notes && (
            <div className="detail-note" style={{ marginBottom: 'var(--space-lg)' }}>
              <strong>考辨说明：</strong>{costume.notes}
            </div>
          )}

          {costume.source && (
            <p className="detail-source">资料来源：{costume.source}</p>
          )}
        </div>
      </div>

      {/* 同类推荐 */}
      {related.length > 0 && (
        <div className="detail-related">
          <h3>同类服饰</h3>
          <div className="costume-grid stagger">
            {related.map((c) => (
              <CostumeCard key={c.id} costume={c} compact />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
