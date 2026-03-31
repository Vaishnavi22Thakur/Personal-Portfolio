import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        Designed &amp; built with ♥ ·{' '}
        <span className="footer-name">Vaishnavi Thakur</span> · {new Date().getFullYear()}
      </p>
    </footer>
  );
}
