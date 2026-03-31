import React from 'react';
import './Contact.css';

const CONTACT_LINKS = [
  { icon: '✉️', label: 'Email Me',  href: 'mailto:vaaishnavi4713@gmail.com@gmail.com' },
  { icon: '🐙', label: 'GitHub',    href: 'https://github.com/Vaishnavi22Thakur' },
  { icon: '💼', label: 'LinkedIn',  href: 'https://www.linkedin.com/in/vaishnavi-thakur-9674b5381?' },
];

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="section-inner">
        <div className="contact-wrapper reveal">
          <div className="section-label" style={{ textAlign: 'center' }}>Say Hello</div>
          <h2 className="section-title" style={{ textAlign: 'center' }}>
            <span className="grad">Get In Touch</span>
          </h2>
          <p className="contact-desc">
            I'm currently open to new opportunities. Whether you have a project in mind
            or just want to connect — my inbox is always open.
          </p>
          <div className="contact-links">
            {CONTACT_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="contact-link"
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
              >
                <span className="contact-link-icon">{link.icon}</span>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}