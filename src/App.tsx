import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Home } from '@/pages/Home';
import { Catalog } from '@/pages/Catalog';
import { CostumeDetail } from '@/pages/CostumeDetail';
import { Topics } from '@/pages/Topics';
import { About } from '@/pages/About';

function NotFound() {
  return (
    <div className="container" style={{ padding: 'var(--space-3xl) 0', textAlign: 'center' }}>
      <h1 className="text-cinnabar" style={{ marginBottom: 'var(--space-md)' }}>404</h1>
      <p className="text-muted" style={{ marginBottom: 'var(--space-xl)' }}>
        您访问的页面不存在。
      </p>
      <a href="/" className="btn btn-primary">返回首页</a>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/costume/:id" element={<CostumeDetail />} />
          <Route path="/topics" element={<Topics />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
