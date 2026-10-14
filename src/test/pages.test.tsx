import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { Home } from '@/pages/Home';
import { Catalog } from '@/pages/Catalog';
import { CostumeDetail } from '@/pages/CostumeDetail';
import { costumes } from '@/data/costumes';

function renderWithRouter(ui: React.ReactNode, route = '/') {
  return render(<MemoryRouter initialEntries={[route]}>{ui}</MemoryRouter>);
}

/** 在带参数的路由中渲染 CostumeDetail，使 useParams 能取到 id */
function renderCostumeDetail(id: string) {
  return render(
    <MemoryRouter initialEntries={[`/costume/${id}`]}>
      <Routes>
        <Route path="/costume/:id" element={<CostumeDetail />} />
      </Routes>
    </MemoryRouter>,
  );
}

describe('Home 页面', () => {
  it('渲染主标题与入口', () => {
    renderWithRouter(<Home />);
    expect(screen.getByText('唐朝服饰大观')).toBeInTheDocument();
    // 入口卡片与专题区均含「文化专题」，使用 getAllByText 断言至少存在
    expect(screen.getAllByText('文化专题').length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText('服饰图鉴')).toBeInTheDocument();
  });

  it('展示精选服饰卡片', () => {
    renderWithRouter(<Home />);
    // 首页展示 4 件精选服饰
    const links = screen.getAllByRole('link').filter((l) => l.getAttribute('href')?.startsWith('/costume/'));
    expect(links.length).toBeGreaterThanOrEqual(4);
  });
});

describe('Catalog 页面', () => {
  it('渲染图鉴标题与全部类别', () => {
    renderWithRouter(<Catalog />);
    expect(screen.getByText('服饰图鉴')).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: /全部/ })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: /圆领袍/ })).toBeInTheDocument();
  });

  it('默认显示全部服饰', () => {
    renderWithRouter(<Catalog />);
    // 每页 6 件，总数 >= 6 时显示 6 件
    const cardLinks = screen.getAllByRole('link').filter((l) => l.getAttribute('href')?.startsWith('/costume/'));
    expect(cardLinks.length).toBe(Math.min(6, costumes.length));
  });

  it('点击类别后筛选并更新计数', async () => {
    const user = userEvent.setup();
    renderWithRouter(<Catalog />);

    const futouTab = screen.getByRole('tab', { name: /幞头/ });
    await user.click(futouTab);

    const expected = costumes.filter((c) => c.category === 'futou').length;
    const cardLinks = screen.getAllByRole('link').filter((l) => l.getAttribute('href')?.startsWith('/costume/'));
    expect(cardLinks.length).toBe(expected);
  });
});

describe('CostumeDetail 页面', () => {
  it('无效 id 展示未找到提示', () => {
    renderCostumeDetail('non-existent-id');
    expect(screen.getByText('未找到该服饰')).toBeInTheDocument();
  });
});

// 详情页渲染测试：通过路由 + params
describe('CostumeDetail via router', () => {
  it('展示名称与形制特征', () => {
    const c = costumes[0];
    renderCostumeDetail(c.id);
    // 名称同时出现在标题与 SVG 占位图中，以 heading 角色精确匹配
    expect(screen.getByRole('heading', { name: c.name })).toBeInTheDocument();
    expect(screen.getByText('形制特征')).toBeInTheDocument();
    expect(screen.getByText(c.features)).toBeInTheDocument();
  });

  it('展示资料来源与考辨说明（若有）', () => {
    const c = costumes.find((x) => x.source && x.notes)!;
    renderCostumeDetail(c.id);
    expect(screen.getByText(/资料来源/)).toBeInTheDocument();
    expect(screen.getByText(/考辨说明/)).toBeInTheDocument();
  });

  it('渲染同类推荐卡片', () => {
    const c = costumes.find((x) => costumes.filter((y) => y.category === x.category).length > 1)!;
    renderCostumeDetail(c.id);
    expect(screen.getByText('同类服饰')).toBeInTheDocument();
  });
});
