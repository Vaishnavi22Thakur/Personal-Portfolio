import React, { useEffect, useRef } from 'react';
import './Skills.css';

const SKILLS_DATA = [
  {
    title: 'Languages',
    icon: '</>', 
    accent: 'cyan',
    items: [
      { name: 'HTML', pct: 90 },
      { name: 'CSS', pct: 90 },
      { name: 'JavaScript', pct: 80 },
      { name: 'C++', pct: 90 },
      { name: 'C', pct: 90 },
      { name: 'Python', pct: 90 },
    ],
  },
  {
    title: 'Frameworks',
    icon: '⚛',
    accent: 'violet',
    items: [
      { name: 'React', pct: 80 },
      { name: 'Tailwind CSS', pct: 85 },
    ],
  },
  {
    title: 'Tools',
    icon: '🛠',
    accent: 'pink',
    items: [
      { name: 'Git / GitHub', pct: 85 },
      { name: 'VS Code', pct: 85 },
    ],
  },
  {
  title: 'Core Skills',
  icon: '🧠',
  accent: 'green',
    items: [
      { name: 'DSA', pct: 70 },
      { name: 'OOP Concepts', pct: 85 },
    ],
  },
];

export default function Skills() {
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll('.skill-bar-fill')
              .forEach((bar) => bar.classList.add('animated'));
          }
        });
      },
      { threshold: 0.3 }
    );
    cardRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="skills-section">
      <div className="section-inner">
        <div className="reveal">
          <div className="section-label">What I Know</div>
          <h2 className="section-title"><span className="grad">Skills</span></h2>
        </div>

        <div className="skills-grid">
          {SKILLS_DATA.map((group, i) => (
            <div
              key={group.title}
              className="skill-card reveal"
              ref={(el) => (cardRefs.current[i] = el)}
            >
              <div className="skill-card-header">
                <div className={`skill-icon ${group.accent}`}>{group.icon}</div>
                <span className="skill-card-title">{group.title}</span>
              </div>

              {group.items.map((item) => (
                <div key={item.name} className="skill-item">
                  <div className="skill-item-header">
                    <span className="skill-item-name">{item.name}</span>
                    <span className={`skill-item-pct ${group.accent}`}>{item.pct}%</span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className={`skill-bar-fill ${group.accent}`}
                      style={{ '--target-width': `${item.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}