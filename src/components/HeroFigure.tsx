interface HeroFigureProps {
  className?: string;
}

/**
 * 首页主视觉 —— 唐代仕女形象的装饰性 SVG。
 * 以工笔线描风格呈现襦裙、披帛与高发髻，作为无真实图片时的主视觉。
 */
export function HeroFigure({ className = '' }: HeroFigureProps) {
  return (
    <svg
      viewBox="0 0 360 520"
      className={className}
      role="img"
      aria-label="唐代仕女服饰形象"
    >
      <defs>
        <linearGradient id="dressGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#b5532a" />
          <stop offset="60%" stopColor="#9c2a2a" />
          <stop offset="100%" stopColor="#7a1f1f" />
        </linearGradient>
        <linearGradient id="piboGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#e8c98a" />
          <stop offset="100%" stopColor="#c9a227" />
        </linearGradient>
        <linearGradient id="skinGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f3dcc4" />
          <stop offset="100%" stopColor="#e6c5a3" />
        </linearGradient>
      </defs>

      {/* 高发髻 */}
      <path
        d="M130 70 Q130 30 180 28 Q230 30 230 70 Q235 90 230 100 L130 100 Q125 90 130 70 Z"
        fill="#2a2622"
      />
      <path
        d="M150 40 Q160 20 180 18 Q200 20 210 40 Q215 55 210 70 L150 70 Q145 55 150 40 Z"
        fill="#2a2622"
        opacity="0.85"
      />
      {/* 发饰 */}
      <circle cx="165" cy="50" r="3" fill="#c9a227" />
      <circle cx="195" cy="48" r="3" fill="#c9a227" />
      <path d="M180 30 L180 22 L184 26 L180 30 Z" fill="#c9a227" />

      {/* 面部 */}
      <ellipse cx="180" cy="120" rx="38" ry="46" fill="url(#skinGrad)" />
      {/* 眉 */}
      <path d="M162 108 Q170 104 176 110" stroke="#2a2622" strokeWidth="2" fill="none" />
      <path d="M184 110 Q190 104 198 108" stroke="#2a2622" strokeWidth="2" fill="none" />
      {/* 眼 */}
      <path d="M162 122 Q168 120 174 122" stroke="#2a2622" strokeWidth="1.5" fill="none" />
      <path d="M186 122 Q192 120 198 122" stroke="#2a2622" strokeWidth="1.5" fill="none" />
      {/* 嘴 */}
      <path d="M172 140 Q180 144 188 140" stroke="#9c2a2a" strokeWidth="2" fill="#b5532a" />
      {/* 腮红 */}
      <ellipse cx="158" cy="132" rx="6" ry="4" fill="#e8a0a0" opacity="0.5" />
      <ellipse cx="202" cy="132" rx="6" ry="4" fill="#e8a0a0" opacity="0.5" />

      {/* 颈部 */}
      <path d="M168 158 L168 175 L192 175 L192 158 Z" fill="url(#skinGrad)" />

      {/* 襦裙上衣 */}
      <path
        d="M140 175 Q180 165 220 175 L225 230 Q180 238 135 230 Z"
        fill="#f5efe0"
        stroke="#e0d4b8"
        strokeWidth="1"
      />
      {/* 领口 */}
      <path
        d="M155 178 Q180 195 205 178"
        stroke="#9c2a2a"
        strokeWidth="1.5"
        fill="none"
      />

      {/* 披帛 */}
      <path
        d="M125 180 Q100 240 110 320 Q120 380 140 440"
        stroke="url(#piboGrad)"
        strokeWidth="14"
        fill="none"
        strokeLinecap="round"
        opacity="0.9"
      />
      <path
        d="M235 180 Q265 250 255 330 Q245 390 225 450"
        stroke="url(#piboGrad)"
        strokeWidth="14"
        fill="none"
        strokeLinecap="round"
        opacity="0.9"
      />

      {/* 手臂 */}
      <path d="M135 185 Q115 230 120 280 L135 282 Q132 235 148 190 Z" fill="url(#skinGrad)" />
      <path d="M225 185 Q245 230 240 280 L225 282 Q228 235 212 190 Z" fill="url(#skinGrad)" />

      {/* 长裙 */}
      <path
        d="M135 230 Q180 225 225 230 L245 470 L115 470 Z"
        fill="url(#dressGrad)"
      />
      {/* 裙腰 */}
      <rect x="132" y="222" width="96" height="16" fill="#7a1f1f" />
      <rect x="132" y="222" width="96" height="16" fill="none" stroke="#e8c98a" strokeWidth="1" />
      {/* 系带 */}
      <path d="M180 238 L172 258 M180 238 L188 258" stroke="#e8c98a" strokeWidth="2" />

      {/* 裙褶 */}
      <path d="M160 250 L155 470" stroke="#7a1f1f" strokeWidth="1" opacity="0.4" />
      <path d="M180 250 L180 470" stroke="#7a1f1f" strokeWidth="1" opacity="0.4" />
      <path d="M200 250 L205 470" stroke="#7a1f1f" strokeWidth="1" opacity="0.4" />

      {/* 裙上团花纹 */}
      <g opacity="0.5">
        <circle cx="165" cy="310" r="10" fill="none" stroke="#e8c98a" strokeWidth="1" />
        <circle cx="165" cy="310" r="5" fill="#e8c98a" opacity="0.5" />
        <circle cx="195" cy="350" r="10" fill="none" stroke="#e8c98a" strokeWidth="1" />
        <circle cx="195" cy="350" r="5" fill="#e8c98a" opacity="0.5" />
        <circle cx="170" cy="400" r="10" fill="none" stroke="#e8c98a" strokeWidth="1" />
        <circle cx="170" cy="400" r="5" fill="#e8c98a" opacity="0.5" />
      </g>

      {/* 云头履 */}
      <path d="M130 470 Q125 465 135 460 L160 460 Q160 472 155 472 Z" fill="#2a2622" />
      <path d="M230 470 Q235 465 225 460 L200 460 Q200 472 205 472 Z" fill="#2a2622" />
      <path d="M130 460 Q138 452 145 460" stroke="#e8c98a" strokeWidth="1.5" fill="none" />
      <path d="M230 460 Q222 452 215 460" stroke="#e8c98a" strokeWidth="1.5" fill="none" />
    </svg>
  );
}
