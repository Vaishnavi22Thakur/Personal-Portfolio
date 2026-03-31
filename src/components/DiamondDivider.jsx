import React from 'react';
import './DiamondDivider.css';

/**
 * DiamondDivider — three rotating diamond gems between sections.
 */
export default function DiamondDivider() {
  return (
    <div className="diamond-divider-wrapper">
      <div className="diamond-divider">
        <div className="gem" />
        <div className="gem" />
        <div className="gem" />
      </div>
    </div>
  );
}
