import React from 'react';
import './Experience.css';

const EXPERIENCE_DATA = [
  {
    year: '2025',
    title: 'C++ Developer Intern',
    org: 'InternPe',
    desc: 'Worked on building games with different code structures. Gained hands-on experience with game logic, data structures, and object-oriented programming in C++.',
    accent: 'cyan',
  },
  {
    year: '2026',
    title: 'Prompt Engineering Hackathon',
    org: 'IGDTUW College Event',
    desc: 'Participated in a competitive prompt engineering hackathon, exploring AI systems, crafting effective prompts, and collaborating with peers on innovative AI-driven solutions.',
    accent: 'violet',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="section-inner">
        <div className="reveal">
          <div className="section-label">My Journey</div>
          <h2 className="section-title"><span className="grad">Experience</span></h2>
        </div>

        <div className="timeline">
          {EXPERIENCE_DATA.map((item) => (
            <div key={item.title} className="timeline-item reveal">
              <div className={`timeline-dot ${item.accent}`} />
              <div className={`timeline-year ${item.accent}`}>{item.year}</div>
              <div className="timeline-card">
                <div className="timeline-title">{item.title}</div>
                <div className="timeline-org">{item.org}</div>
                <div className="timeline-desc">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
