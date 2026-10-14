import { Link } from 'react-router-dom';
import { costumes } from '@/data/costumes';
import { culturalTopics } from '@/data/costumes';
import { CostumeCard } from '@/components/CostumeCard';
import { HeroFigure } from '@/components/HeroFigure';

const entries = [
  { label: '服饰图鉴', desc: '七大类目，尽览唐衣', to: '/catalog', icon: '衣', accent: '#9c2a2a' },
  { label: '时代风尚', desc: '初盛中晚，流变千年', to: '/topics', icon: '时', accent: '#2f5d7c' },
  { label: '纹样图鉴', desc: '联珠团花，丝路遗珍', to: '/catalog', icon: '纹', accent: '#a8732a' },
  { label: '文化专题', desc: '胡风汉韵，盛唐气象', to: '/topics', icon: '专', accent: '#6b4a7a' },
  { label: '展馆导览', desc: '走进数字文化空间', to: '/about', icon: '馆', accent: '#8a6d1f' },
];

export function Home() {
  const featured = costumes.slice(0, 4);

  return (
    <div>
      {/* Hero */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-content animate-fade-in-up">
            <span className="hero-eyebrow">TANG DYNASTY · 618 — 907</span>
            <h1 className="hero-title">唐朝服饰大观</h1>
            <p className="hero-subtitle">
              以壁画为骨，以绢帛为衣<br />
              重现一千四百年前的衣冠之美
            </p>
            <p className="hero-desc">
              从圆领袍到齐胸襦裙，从幞头到披帛——走进这座数字展馆，
              于敦煌色彩与丝路胡风之间，窥见盛唐的雍容与开放。
            </p>
            <div className="hero-actions">
              <Link to="/catalog" className="btn btn-primary">进入图鉴</Link>
              <Link to="/about" className="btn btn-ghost">展馆导览</Link>
            </div>
          </div>
          <div className="hero-visual animate-fade-in">
            <HeroFigure className="hero-figure" />
          </div>
        </div>
      </section>

      {/* 入口导航 */}
      <section className="section-padding">
        <div className="container">
          <div className="section-heading animate-fade-in-up">
            <span className="eyebrow">EXPLORATION</span>
            <h2>展馆导览</h2>
          </div>
          <div className="entry-grid stagger">
            {entries.map((e) => (
              <Link
                key={e.label}
                to={e.to}
                className="entry-card"
                style={{ ['--entry-accent' as string]: e.accent }}
              >
                <span className="entry-icon">{e.icon}</span>
                <h3>{e.label}</h3>
                <p>{e.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 精选服饰 */}
      <section className="section-padding" style={{ background: 'rgba(154, 114, 60, 0.04)' }}>
        <div className="container">
          <div className="section-heading animate-fade-in-up">
            <span className="eyebrow">FEATURED</span>
            <h2>精选服饰</h2>
          </div>
          <div className="costume-grid stagger">
            {featured.map((c) => (
              <CostumeCard key={c.id} costume={c} />
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 'var(--space-xl)' }}>
            <Link to="/catalog" className="btn btn-ghost">查看全部服饰</Link>
          </div>
        </div>
      </section>

      {/* 文化专题 */}
      <section className="section-padding">
        <div className="container">
          <div className="section-heading animate-fade-in-up">
            <span className="eyebrow">CULTURAL TOPICS</span>
            <h2>文化专题</h2>
          </div>
          <div className="topic-list stagger">
            {culturalTopics.map((t, i) => (
              <Link
                key={t.id}
                to="/topics"
                className="topic-card"
                style={{ ['--topic-accent' as string]: t.accent }}
              >
                <div className="topic-number">{String(i + 1).padStart(2, '0')}</div>
                <h3>{t.title}</h3>
                <div className="topic-subtitle">{t.subtitle}</div>
                <p>{t.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
