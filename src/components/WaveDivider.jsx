import React from 'react';

const COLORS = {
  bg: '#080d1a',
  bg2: '#0c1220',
};

function resolveColor(color) {
  if (color === 'var(--bg)') return COLORS.bg;
  if (color === 'var(--bg2)') return COLORS.bg2;
  return color;
}

export default function WaveDivider({ fromColor, toColor, flip = false }) {
  const from = resolveColor(fromColor);
  const to = resolveColor(toColor);

  return (
    <div style={{ background: from, lineHeight: 0, display: 'block', fontSize: 0 }}>
      <svg
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        style={{
          display: 'block',
          height: '60px',
          width: '100%',
          transform: flip ? 'scaleX(-1)' : 'none',
        }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill={to} d="M0,20 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" />
      </svg>
    </div>
  );
}
