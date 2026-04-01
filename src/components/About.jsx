import React from 'react';
import './About.css';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="section-inner">
        <div className="about-grid">

          {/* Visual card */}
          <div className="about-visual">
            <div className="about-orbit orbit-1" />
            <div className="about-orbit orbit-2" />
            <div className="about-card">
              <div className="about-avatar">VT</div>
              <div className="about-card-name">Vaishnavi Thakur</div>
              <div className="about-card-role">Student . Ghaziabad, India</div>
              <div className="about-card-tags">
                <span className="tag">React</span>
                <span className="tag">HTML/CSS</span>
                <span className="tag">JS</span>
                <span className="tag">Node.js/Express.js</span>
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="about-content reveal">
            <div className="section-label">About Me</div>
            <h2 className="section-title"><span className="grad">Who I Am</span></h2>
            <p>
              I'm a passionate frontend developer with a knack for crafting beautiful,
              responsive interfaces. My journey began with curiosity and grew into a love
              for turning design into code that truly works.
            </p>
            <p>
              I thrive at the intersection of design and development — whether it's building
              an intuitive app, optimizing performance, or perfecting a pixel. I believe
              great software is felt, not just used.
            </p>
            <p>
              Currently exploring prompt engineering and AI-powered tools to push the
              boundaries of what's possible on the web.
            </p>
            <div className="about-stats">
              <div className="stat">
                <span className="stat-num">3+</span>
                <span className="stat-label">Projects Built</span>
              </div>
              <div className="stat">
                <span className="stat-num">2+</span>
                <span className="stat-label">Certifications</span>
              </div>
              <div className="stat">
                <span className="stat-num">1</span>
                <span className="stat-label">Hackathon</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
