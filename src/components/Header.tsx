import { NavLink, Link } from 'react-router-dom';

const navItems = [
  { to: '/', label: '首页', en: 'Home' },
  { to: '/catalog', label: '服饰图鉴', en: 'Catalog' },
  { to: '/topics', label: '文化专题', en: 'Topics' },
  { to: '/about', label: '展馆介绍', en: 'About' },
];

export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="brand" aria-label="唐朝服饰大观 首页">
          <span className="brand-seal">唐</span>
          <span className="brand-text">
            <span className="brand-zh">唐朝服饰大观</span>
            <span className="brand-en">Tang Costume Gallery</span>
          </span>
        </Link>

        <nav className="main-nav" aria-label="主导航">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) => `nav-item ${isActive ? 'is-active' : ''}`}
            >
              <span className="nav-zh">{item.label}</span>
              <span className="nav-en">{item.en}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
