import React from 'react';
import './Achievements.css';

const ACHIEVEMENTS_DATA = [
  {
    icon: '🏅',
    accent: 'cyan',
    title: 'Hackathon Participant',
    sub: 'IGDTUW Prompt Engineering Hackathon',
  },
  {
    icon: '🐍',
    accent: 'violet',
    title: 'Python (Basic) Certification',
    sub: 'Online Course by HackerRank',
  },
  {
    icon: '📊',
    accent: 'pink',
    title: 'Intro to Data Science Certification',
    sub: 'Online Course by Infosys',
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="achievements-section">
      <div className="section-inner">
        <div className="reveal">
          <div className="section-label">Recognition</div>
          <h2 className="section-title"><span className="grad">Achievements &amp; Certifications</span></h2>
        </div>

        <div className="ach-grid">
          {ACHIEVEMENTS_DATA.map((item) => (
            <div key={item.title} className="ach-card reveal">
              <div className={`ach-icon ${item.accent}`}>{item.icon}</div>
              <div className="ach-title">{item.title}</div>
              <div className="ach-sub">{item.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
