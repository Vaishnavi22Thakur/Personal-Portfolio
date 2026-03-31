import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-grid" />
      <div className="hero-glow hero-glow-1" />
      <div className="hero-glow hero-glow-2" />

      <div className="hero-content">
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          Available for Opportunities
        </div>

        <h1 className="hero-name">
          Hi, I'm<br />
          <span className="hero-name-grad">Vaishnavi Thakur</span>
        </h1>

        <p className="hero-role">
          Frontend Developer &amp; <strong>Creative Thinker</strong>
        </p>

        <p className="hero-desc">
          I build sleek, modern web experiences that feel effortless to use.
          Passionate about clean code, thoughtful design, and bringing ideas to life.
        </p>

        <div className="hero-cta">
          <a href="#projects" className="hero-btn-primary">View Projects →</a>
          <a href="#contact" className="hero-btn-ghost">Get in Touch</a>
        </div>
      </div>
    </section>
  );
}
