import { useState } from 'react';
import { Link } from 'react-router-dom';
import { culturalTopics } from '@/data/costumes';
import { findCostumeById } from '@/hooks/useCostumes';

export function Topics() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = culturalTopics.find((t) => t.id === activeId) || null;

  return (
    <div className="container">
      <div className="page-header animate-fade-in-up">
        <span className="page-subtitle">CULTURAL TOPICS</span>
        <h1>文化专题</h1>
        <p className="text-muted" style={{ marginTop: 'var(--space-sm)' }}>
          以专题叙事串联服饰背后的历史、社会与审美
        </p>
      </div>

      <div className="topic-list stagger">
        {culturalTopics.map((t, i) => (
          <button
            key={t.id}
            className="topic-card"
            style={{ ['--topic-accent' as string]: t.accent, textAlign: 'left', width: '100%' }}
            onClick={() => setActiveId(t.id)}
            aria-expanded={activeId === t.id}
          >
            <div className="topic-number">{String(i + 1).padStart(2, '0')}</div>
            <h3>{t.title}</h3>
            <div className="topic-subtitle">{t.subtitle}</div>
            <p>{t.summary}</p>
          </button>
        ))}
      </div>

      {active && (
        <div
          className="topic-detail animate-fade-in-up"
          style={{ ['--topic-accent' as string]: active.accent } as React.CSSProperties}
        >
          <h2>{active.title}</h2>
          <div className="topic-subtitle">{active.subtitle}</div>
          <p className="topic-detail-content">{active.content}</p>

          {active.relatedCostumeIds.length > 0 && (
            <div>
              <h3 className="detail-section-title">相关服饰</h3>
              <div className="tag-list" style={{ marginTop: 'var(--space-sm)' }}>
                {active.relatedCostumeIds.map((cid) => {
                  const c = findCostumeById(cid);
                  if (!c) return null;
                  return (
                    <Link key={cid} to={`/costume/${cid}`}>
                      <span className="tag" style={{ cursor: 'pointer' }}>{c.name}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
