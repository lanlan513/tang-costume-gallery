export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="brand-seal small">唐</span>
          <span>唐朝服饰大观</span>
        </div>
        <p className="footer-note">
          本项目为唐代服饰文化的数字展陈，历史内容依据公开资料整理，
          <br />
          无法确认之处已标注说明，不将影视剧造型作为史实依据。
        </p>
        <p className="footer-copy">
          © {new Date().getFullYear()} Tang Costume Gallery · 以文化致敬盛唐
        </p>
      </div>
    </footer>
  );
}
