export function About() {
  return (
    <div className="container">
      <div className="page-header animate-fade-in-up">
        <span className="page-subtitle">ABOUT THE GALLERY</span>
        <h1>展馆介绍</h1>
      </div>

      <div className="about-content animate-fade-in-up">
        <div className="about-quote">
          「衣冠上国，礼仪之邦」<br />
          —— 重现盛唐衣冠之美
        </div>

        <h2>关于本项目</h2>
        <p>
          「唐朝服饰大观」是一座以唐代服饰文化为核心的数字展馆。
          我们以唐代壁画、敦煌色彩、绢帛肌理与传统工笔画为视觉灵感，
          通过圆领袍、襦裙、半臂、披帛、胡服、幞头及典型配饰等类目，
          带领观者走进一千四百年前的衣冠世界。
        </p>

        <h2>设计理念</h2>
        <p>
          展馆整体采用东方美学与现代数字展陈相结合的设计语言。主色调取自
          朱砂红、石青、鎏金与温润米白，配以精致的字体层级、富有呼吸感的留白、
          层叠式展陈卡片与细腻的动态效果，营造博物馆级的沉浸观感，
          力求避免模板化的管理后台风格。
        </p>

        <h2>内容立场</h2>
        <p>
          历史内容尽可能依据可靠资料整理，主要参考孙机《中国古舆服论丛》、
          沈从文《中国古代服饰研究》、《新唐书·车服志》以及唐代墓葬壁画与出土实物。
          对于无法确认的细节，我们在每条数据中以「考辨说明」明确标注，
          <strong>绝不将影视剧造型直接当作历史事实</strong>。
        </p>

        <h2>图片资源</h2>
        <p>
          本项目优先选用来源清晰且允许相应用途的素材。对于暂无可靠图片的条目，
          我们以唐代壁画、敦煌纹样与印章为灵感，设计了具有文化气息的 SVG 占位图，
          保证视觉一致性，避免空白或通用占位图的突兀感。
        </p>

        <h2>技术架构</h2>
        <p>
          前端以 React + TypeScript + Vite 构建，采用组件化架构与类型化数据模型，
          独立的数据配置文件管理初始内容，以轻量级本地状态实现分类筛选与导航，
          使用 React Router 组织页面。视觉组件、服饰数据、页面布局与业务逻辑相互分离，
          便于后续扩展检索、对比、收藏与专题展览等功能。
        </p>

        <h2>主要类目</h2>
        <ul>
          <li><strong>圆领袍</strong> —— 唐代男子最具代表性的常服</li>
          <li><strong>襦裙</strong> —— 女子齐胸襦裙，盛唐飘逸之美</li>
          <li><strong>半臂</strong> —— 短袖外搭，男女皆宜</li>
          <li><strong>披帛</strong> —— 肩臂间的灵动织物</li>
          <li><strong>胡服</strong> —— 丝路传来的西域风尚</li>
          <li><strong>幞头</strong> —— 男子首服，由软至硬</li>
          <li><strong>配饰</strong> —— 蹀躞带、步摇、云头履等</li>
        </ul>
      </div>
    </div>
  );
}
