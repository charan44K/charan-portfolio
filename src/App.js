import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    const navLinks = document.querySelectorAll('.nav-links a');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            navLinks.forEach((link) => {
              link.classList.toggle('active', link.getAttribute('href') === '#' + id);
            });
          }
        });
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    );

    document.querySelectorAll('section.module[id], footer[id]').forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="grid-bg"></div>

      <nav className="nav">
        <div className="nav-inner">
          <div className="nav-id"><span className="dot"></span>SCK // SESSION ACTIVE</div>
          <div className="nav-links">
            <a href="#summary">00 SUMMARY</a>
            <a href="#experience">01 EXPERIENCE</a>
            <a href="#skills">02 SKILLS</a>
            <a href="#achievements">03 ACHIEVEMENTS</a>
            <a href="#transmissions">04 TRANSMISSIONS</a>
            <a href="#education">05 EDUCATION</a>
            <a href="#contact">06 CONTACT</a>
          </div>
        </div>
      </nav>

      <header className="hero">
        <div className="wrap">
          <div className="hero-tag">{'// PRODUCT MANAGER · APPLIED AI'}</div>
          <h1>Kummetha Sai Charan</h1>
          <div className="hero-role">Building <span>AI-native experiences</span> — voice agents, agentic UX, and the systems behind them.</div>

          <div className="status-grid">
            <div className="status-item">
              <div className="status-label">ROLE</div>
              <div className="status-value">PM II — PAYTM</div>
            </div>
            <div className="status-item">
              <div className="status-label">FOCUS</div>
              <div className="status-value">CONSUMER + MERCHANT AI</div>
            </div>
            <div className="status-item">
              <div className="status-label">LOCATION</div>
              <div className="status-value">BENGALURU, IN</div>
            </div>
            <div className="status-item">
              <div className="status-label">STATUS</div>
              <div className="status-value live">● ACTIVE</div>
            </div>
          </div>

          <div className="hero-links">
            <a className="link-chip" href="https://www.linkedin.com/in/sai-charan-k/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
            <a className="link-chip" href="https://saicharankummetha.medium.com" target="_blank" rel="noopener noreferrer">Blog ↗</a>
            <a className="link-chip" href="https://github.com/charan44k" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
            <a className="link-chip" href="mailto:saicharankummetha@gmail.com">Email ↗</a>
          </div>
        </div>
      </header>

      <main className="wrap">
        <section className="module" id="summary">
          <div className="module-head">
            <span className="module-index">00</span>
            <span className="module-title">Summary</span>
            <span className="module-rule"></span>
          </div>
          <p className="summary-text">
            Technical Product Manager with 5 years across Product Management, Software Engineering, and Applied AI.
            Built and scaled 0→1 and growth-stage products spanning AI platforms, large-scale consumer applications,
            marketplaces, supply chain, and financial workflows — combining strong product execution with deep
            technical grounding in distributed systems, LLMs, voice agents, developer platforms, and data-driven
            experimentation.
          </p>
        </section>

        <section className="module" id="experience">
          <div className="module-head">
            <span className="module-index">01</span>
            <span className="module-title">Experience Log</span>
            <span className="module-rule"></span>
          </div>

          <div className="timeline">
            <div className="entry active">
              <span className="tag ai">AI · PRODUCT</span>
              <div className="entry-top">
                <span className="entry-role">Product Manager II</span>
                <span className="entry-org">Paytm</span>
                <span className="entry-dates">FEB 2026 — PRESENT</span>
              </div>
              <ul>
                <li>Leading strategy and execution for AI-native experiences across Paytm's consumer and merchant applications.</li>
                <li>Building voice-driven and agentic interactions that let users complete tasks through guided, conversational flows.</li>
                <li>Operating across multiple apps and surfaces, turning emerging agentic AI capability into everyday, trustworthy product experience.</li>
              </ul>
            </div>

            <div className="entry">
              <span className="tag ai">AI · PRODUCT</span>
              <div className="entry-top">
                <span className="entry-role">Product Manager, AI &amp; Automation</span>
                <span className="entry-org">Vegrow</span>
                <span className="entry-dates">JUL 2024 — FEB 2026</span>
              </div>
              <ul>
                <li>Built and scaled Vegrow's AI Voice Platform from prototype to 30,000+ conversations/month across NPS, profiling, slot booking, and ops workflows.</li>
                <li>Improved task completion from 40% to 70% through conversation redesign, latency optimization, and interruption handling.</li>
                <li>Raised NPS from 30 to 65 via structured feedback capture, sentiment analysis, and automated stakeholder reporting.</li>
                <li>Built pluggable STT/TTS/LLM orchestration with evaluation and observability systems for rapid experimentation.</li>
                <li>Delivered supply chain &amp; finance products supporting ₹70 Cr+ GMV, plus a Procure-to-Pay platform cutting approval turnaround by 40%.</li>
              </ul>
            </div>

            <div className="entry">
              <span className="tag eng">ENGINEERING</span>
              <div className="entry-top">
                <span className="entry-role">SDE-II / Tech Lead</span>
                <span className="entry-org">Vegrow</span>
                <span className="entry-dates">OCT 2022 — JUN 2024</span>
              </div>
              <ul>
                <li>Progressed from SDE-I to leading an 8-member team during Vegrow's scale from ₹100 Cr to ₹500 Cr+ revenue.</li>
                <li>Architected QR-based inventory traceability infrastructure in Golang, Kafka, and MongoDB.</li>
                <li>Migrated core infrastructure from AWS ECS to EKS and built out CI/CD automation.</li>
                <li>Contributed LiDAR + stereo-capture pipelines to the Velens computer vision initiative.</li>
              </ul>
            </div>

            <div className="entry">
              <span className="tag eng">ENGINEERING</span>
              <div className="entry-top">
                <span className="entry-role">Software Engineer</span>
                <span className="entry-org">LivSYT</span>
                <span className="entry-dates">MAY 2021 — OCT 2022</span>
              </div>
              <ul>
                <li>Built backend systems for a B2B construction-tech SaaS platform scaling from 0 to $0.5M ARR.</li>
                <li>Designed state-machine-based workflow orchestration and event-driven notification systems.</li>
                <li>Built RBAC and auditing frameworks for enterprise workflows.</li>
              </ul>
            </div>

            <div className="entry">
              <span className="tag design">DESIGN</span>
              <div className="entry-top">
                <span className="entry-role">Computational Design Intern</span>
                <span className="entry-org">Arth Design Build</span>
                <span className="entry-dates">JAN 2020 — JUN 2020</span>
              </div>
              <ul>
                <li>Built generative design workflows using NSGA-II optimization for parking layouts and tower orientation studies.</li>
                <li>Automated BIM processes with Revit Dynamo, Python, and Revit APIs.</li>
                <li>First real exposure to algorithmic problem-solving — the spark for the later shift into engineering.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="module" id="skills">
          <div className="module-head">
            <span className="module-index">02</span>
            <span className="module-title">Skill Matrix</span>
            <span className="module-rule"></span>
          </div>

          <div className="skill-lane product">
            <div className="skill-lane-head">
              <span className="signal"><span></span><span></span><span></span></span>
              <span className="skill-lane-label">Product</span>
            </div>
            <div className="skill-tags">
              {['Product Strategy','Product Discovery','Roadmapping','GTM','User Research','UX Design','Experimentation','A/B Testing','Product Analytics','Platform Products','Stakeholder Management'].map(s => <span key={s}>{s}</span>)}
            </div>
          </div>

          <div className="skill-lane ai">
            <div className="skill-lane-head">
              <span className="signal"><span></span><span></span><span></span></span>
              <span className="skill-lane-label">AI Systems</span>
            </div>
            <div className="skill-tags">
              {['LLMs','Voice Agents','Browser Agents','Multi-Agent Systems','STT / TTS','AI Evaluation','Observability','RAG','MCP'].map(s => <span key={s}>{s}</span>)}
            </div>
          </div>

          <div className="skill-lane eng">
            <div className="skill-lane-head">
              <span className="signal"><span></span><span></span><span></span></span>
              <span className="skill-lane-label">Engineering</span>
            </div>
            <div className="skill-tags">
              {['Golang','Python','TypeScript','Node.js','Distributed Systems','Kafka','Microservices','SQL / NoSQL','Kubernetes','Docker','AWS','WebRTC','WebSockets','MQTT'].map(s => <span key={s}>{s}</span>)}
            </div>
          </div>
        </section>

        <section className="module" id="achievements">
          <div className="module-head">
            <span className="module-index">03</span>
            <span className="module-title">Achievements</span>
            <span className="module-rule"></span>
          </div>
          <div className="ach-grid">
            <div className="ach-card">
              <div className="ach-year">2026</div>
              <div className="ach-title">Rising Star — Paytm</div>
              <div className="ach-desc">Recognized among early high-performing hires for driving AI-powered voice experiences across consumer and merchant applications.</div>
            </div>
            <div className="ach-card">
              <div className="ach-year">2025</div>
              <div className="ach-title">Excellence Award — Vegrow</div>
              <div className="ach-desc">Recognized for building and scaling Vegrow's AI Voice Platform from prototype to production.</div>
            </div>
            <div className="ach-card">
              <div className="ach-year">2024</div>
              <div className="ach-title">Hackathon Leadership</div>
              <div className="ach-desc">Organized and led a company-wide hackathon at Vegrow with 95%+ participation.</div>
            </div>
            <div className="ach-card">
              <div className="ach-year">2023</div>
              <div className="ach-title">Google Foobar Invitee</div>
              <div className="ach-desc">Invited to Google's invitation-only algorithmic problem-solving challenge.</div>
            </div>
          </div>
        </section>

        <section className="module" id="transmissions">
          <div className="module-head">
            <span className="module-index">04</span>
            <span className="module-title">Transmissions</span>
            <span className="module-rule"></span>
          </div>
          <div className="post-list">
            {[
              { title: 'The Anatomy of an AI Agent', desc: 'Breaks down how AI agents actually think, decide, and act.', date: 'JUN 2026', url: 'https://saicharankummetha.medium.com/ai-agents-explained-simply-from-thinking-to-taking-action-b95de2216529' },
              { title: 'Why MCP When We Already Have Tool Calling?', desc: 'What Model Context Protocol adds beyond simple function calls.', date: 'FEB 2026', url: 'https://saicharankummetha.medium.com/why-mcp-when-we-already-have-tool-calling-f563cfcf1e39' },
              { title: 'LLMs Are Stateless. Context Is the Product.', desc: 'Why context engineering matters more than the model itself.', date: 'DEC 2025', url: 'https://saicharankummetha.medium.com/llms-are-stateless-context-is-the-product-336c50ae637c' },
              { title: 'User Experience: The Real Differentiator in the Age of AI', desc: 'Why UX craft matters more, not less, as AI commoditizes capability.', date: 'DEC 2025', url: 'https://saicharankummetha.medium.com/user-experience-the-real-differentiator-in-the-age-of-ai-7bf0e9b5611d' },
              { title: 'High-Stakes Decisions, Incomplete Information', desc: 'On making calls in ambiguity, without waiting for certainty.', date: 'JUN 2026', url: 'https://saicharankummetha.medium.com/high-stakes-decisions-incomplete-information-ee366074b8c1' },
              { title: 'From Blueprints to Code', desc: 'His own pivot from architecture into software engineering.', date: 'JAN 2024', url: 'https://saicharankummetha.medium.com/from-blueprints-to-code-a-journey-from-architecture-to-software-development-53f35c42f915' },
            ].map(post => (
              <a className="post" key={post.url} href={post.url} target="_blank" rel="noopener noreferrer">
                <div className="post-main">
                  <div className="post-title">{post.title}</div>
                  <div className="post-desc">{post.desc}</div>
                </div>
                <div className="post-date">{post.date}</div>
              </a>
            ))}
          </div>
        </section>

        <section className="module" id="education">
          <div className="module-head">
            <span className="module-index">05</span>
            <span className="module-title">Education</span>
            <span className="module-rule"></span>
          </div>
          <div className="edu-entry">
            <div className="edu-school">Indian Institute of Technology, Kharagpur</div>
            <div className="edu-detail">Bachelor's (Honours), Architecture · 2016 — 2021</div>
            <div className="edu-note">Relevant coursework: Programming &amp; Data Structures, AI Foundations &amp; Applications, Mathematics, CAD &amp; Simulation, Engineering Design Process, Product Development.</div>
          </div>
          <div className="edu-entry">
            <div className="edu-school">Narayana Institute</div>
            <div className="edu-detail">Intermediate (MPC) · 2014 — 2016 · 97%</div>
          </div>
          <div className="edu-entry">
            <div className="edu-school">Dr. KKR's Gowtham School</div>
            <div className="edu-detail">SSC · 2014 · 9.7 CGPA</div>
          </div>
        </section>
      </main>

      <footer className="footer" id="contact">
        <div className="wrap">
          <div className="module-head" style={{ justifyContent: 'center' }}>
            <span className="module-index">06</span>
            <span className="module-title">Contact</span>
            <span className="module-rule"></span>
          </div>
          <div className="footer-cta">Open a channel.</div>
          <div className="footer-links">
            <a className="link-chip" href="mailto:saicharankummetha@gmail.com">saicharankummetha@gmail.com ↗</a>
            <a className="link-chip" href="https://www.linkedin.com/in/sai-charan-k/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
            <a className="link-chip" href="https://saicharankummetha.medium.com" target="_blank" rel="noopener noreferrer">Blog ↗</a>
            <a className="link-chip" href="https://github.com/charan44k" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
          </div>
          <div className="footer-meta">© KUMMETHA SAI CHARAN · BENGALURU, IN · SYSTEM NOMINAL</div>
        </div>
      </footer>
    </>
  );
}

export default App;
