import type { CostumeCategory } from '@/types/costume';
import { CATEGORY_META } from '@/types/costume';

interface ImagePlaceholderProps {
  name: string;
  category: CostumeCategory;
  /** 可选副标题，如类别英文名 */
  subtitle?: string;
  className?: string;
}

/**
 * 服饰图片占位组件。
 *
 * 以唐代壁画、敦煌纹样与印章为灵感，使用内联 SVG 生成具有
 * 设计感的占位图，避免空白或通用占位图带来的突兀感。
 * 当数据中存在 `imageUrl` 时，由调用方自行渲染 <img>。
 */
export function ImagePlaceholder({
  name,
  category,
  subtitle,
  className = '',
}: ImagePlaceholderProps) {
  const meta = CATEGORY_META[category];
  const accent = meta.accent;

  return (
    <svg
      viewBox="0 0 400 500"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      role="img"
      aria-label={`${name} 占位图`}
    >
      <defs>
        <linearGradient id={`bg-${category}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fbf7ee" />
          <stop offset="100%" stopColor="#ede4d0" />
        </linearGradient>
        <pattern
          id={`cloud-${category}`}
          x="0"
          y="0"
          width="60"
          height="60"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M10 30 Q20 15 30 30 Q40 15 50 30"
            fill="none"
            stroke={accent}
            strokeWidth="1"
            opacity="0.18"
          />
          <path
            d="M0 45 Q10 30 20 45 Q30 30 40 45"
            fill="none"
            stroke={accent}
            strokeWidth="1"
            opacity="0.12"
          />
        </pattern>
      </defs>

      {/* 背景 */}
      <rect width="400" height="500" fill={`url(#bg-${category})`} />
      <rect width="400" height="500" fill={`url(#cloud-${category})`} />

      {/* 边框装饰 */}
      <rect
        x="16"
        y="16"
        width="368"
        height="468"
        fill="none"
        stroke={accent}
        strokeWidth="1"
        opacity="0.3"
      />
      <rect
        x="24"
        y="24"
        width="352"
        height="452"
        fill="none"
        stroke={accent}
        strokeWidth="0.5"
        opacity="0.2"
      />

      {/* 中心装饰圆 */}
      <circle cx="200" cy="230" r="110" fill="none" stroke={accent} strokeWidth="1" opacity="0.25" />
      <circle cx="200" cy="230" r="90" fill="none" stroke={accent} strokeWidth="0.5" opacity="0.35" />

      {/* 联珠纹边框 */}
      {Array.from({ length: 36 }).map((_, i) => {
        const angle = (i / 36) * Math.PI * 2;
        const r = 100;
        const cx = 200 + Math.cos(angle) * r;
        const cy = 230 + Math.sin(angle) * r;
        return (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r="3"
            fill={accent}
            opacity="0.4"
          />
        );
      })}

      {/* 中央印章风格汉字 */}
      <rect x="160" y="190" width="80" height="80" fill={accent} opacity="0.9" rx="2" />
      <text
        x="200"
        y="248"
        textAnchor="middle"
        fontFamily="'STKaiti', 'KaiTi', serif"
        fontSize="56"
        fill="#fbf7ee"
        fontWeight="bold"
      >
        {name.slice(0, 1)}
      </text>

      {/* 名称 */}
      <text
        x="200"
        y="370"
        textAnchor="middle"
        fontFamily="'ZCOOL XiaoWei', serif"
        fontSize="30"
        fill={accent}
      >
        {name}
      </text>
      {subtitle && (
        <text
          x="200"
          y="400"
          textAnchor="middle"
          fontFamily="'Cormorant Garamond', serif"
          fontStyle="italic"
          fontSize="16"
          fill={accent}
          opacity="0.6"
        >
          {subtitle}
        </text>
      )}

      {/* 底部署名 */}
      <text
        x="200"
        y="450"
        textAnchor="middle"
        fontFamily="'Noto Serif SC', serif"
        fontSize="11"
        fill={accent}
        opacity="0.4"
        letterSpacing="2"
      >
        唐 朝 服 饰 大 观
      </text>
    </svg>
  );
}
