import React from 'react';
import './Projects.css';

const PROJECTS_DATA = [
  {
    emoji: '✈️',
    thumbClass: 'thumb-1',
    tags: ['HTML', 'CSS', 'JS'],
    title: 'Travel Platform',
    desc: 'An interactive and responsive travel platform that helps users explore destinations effortlessly. Features include curated travel packages, high-quality imagery, and a seamless user experience across devices to inspire and guide every journey.',
    liveUrl: 'https://vaishnavi22thakur.github.io/Travel-Agency-Website/',
    githubUrl: 'https://github.com/Vaishnavi22Thakur/Travel-Agency-Website',
  },
  {
    emoji: '🌤️',
    thumbClass: 'thumb-2',
    tags: ['HTML','CSS','JS','API'],
    title: 'Weather App',
    desc: 'A sleek, real-time weather application providing accurate updates for temperature, conditions, and location with an intuitive interface.',
    liveUrl: 'https://vaishnavi22thakur.github.io/Weather-App/',
    githubUrl: 'https://github.com/Vaishnavi22Thakur/Weather-App',
  },
  {
    emoji: '✅',
    thumbClass: 'thumb-3',
    tags: ['HTML', 'CSS','JS'],
    title: 'Task Manager',
    desc: 'An intuitive task management app allowing users to add, delete, and mark tasks as complete. Clean design meets practical functionality.',
    liveUrl: 'https://vaishnavi22thakur.github.io/To-do-list/',
    githubUrl: 'https://github.com/Vaishnavi22Thakur/To-do-list',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="section-inner">
        <div className="reveal">
          <div className="section-label">What I've Built</div>
          <h2 className="section-title"><span className="grad">Projects</span></h2>
        </div>

        <div className="projects-grid">
          {PROJECTS_DATA.map((project) => (
            <div key={project.title} className="project-card reveal">
              <div className={`project-thumb ${project.thumbClass}`}>
                {project.emoji}
              </div>
              <div className="project-body">
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
                <div className="project-title">{project.title}</div>
                <div className="project-desc">{project.desc}</div>
              </div>
              <div className="project-footer">
                <a href={project.liveUrl} className="project-link">Live →</a>
                <a href={project.githubUrl} className="project-link">GitHub →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
