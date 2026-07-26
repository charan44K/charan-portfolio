import React, { useEffect } from 'react';
import './App.css';
import NodeField from './NodeField';

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
      <NodeField />
      <div className="grid-bg"></div>

      <nav className="nav">
        <div className="nav-inner">
          <div className="nav-id"><span className="dot"></span>Sai Charan Kummetha</div>
          <div className="nav-links">
            <a href="#summary">Summary</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
            <a href="#achievements">Achievements</a>
            <a href="#transmissions">Writing</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <header className="hero">
        <div className="wrap hero-grid">
          <div className="hero-content">
            <div className="hero-tag">Builder · AI Native Product Experiences</div>
            <h1>Sai Charan Kummetha</h1>
            <div className="hero-role">I lead and build <span>the next generation of human-computer interaction</span> at scale — using what LLMs make possible to create AI products that actually work, solving real problems for users while driving net-positive outcomes for the business.</div>

            <div className="status-grid">
              <div className="status-item">
                <div className="status-label">ROLE</div>
                <div className="status-value">PM II — PAYTM</div>
              </div>
              <div className="status-item">
                <div className="status-label">FOCUS</div>
                <div className="status-value">NEXT-GEN HCI, AT SCALE</div>
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
              <a className="link-chip primary" href="https://www.linkedin.com/in/sai-charan-k/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
              <a className="link-chip" href="https://saicharankummetha.medium.com" target="_blank" rel="noopener noreferrer">Blog ↗</a>
              <a className="link-chip" href="https://github.com/charan44k" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
              <a className="link-chip" href="mailto:saicharankummetha@gmail.com">Email ↗</a>
            </div>
          </div>

          <div className="hero-photo">
            <div className="hero-photo-frame">
              <img src={process.env.PUBLIC_URL + '/images/headshot.png'} alt="Sai Charan Kummetha" />
            </div>
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
            A builder first — more than 5 years across Product Management, Software Engineering, and Applied AI,
            leading and shipping 0→1 and growth-stage products that solve real problems, not just manage roadmaps.
            Built and scaled products spanning AI platforms, large-scale consumer applications, marketplaces, supply
            chain, and financial workflows — combining strong product execution with deep technical grounding in
            distributed systems, LLMs, conversational and agentic interfaces, developer platforms, and data-driven experimentation to drive
            outcomes that are net-positive for users and the business alike. Long-term, I'm working toward building
            a technology company of my own — at the convergence of AI, consumer tech, and AEC.
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
                <span className="entry-role">Product Manager II, AI Native Experiences</span>
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
              <p className="entry-story">Working at a hypergrowth startup meant learning and executing at an exceptional pace — building and scaling products across AI, marketplaces, supply chain intelligence, and financial workflows, with first-hand exposure to strategy, GTM, finance, and data-driven decision-making. More than anything, I learned to navigate ambiguity: operating at the intersection of product and engineering, using data, customer insight, and cross-functional collaboration to build products that solved real business problems.</p>
              <ul>
                <li>Led 0→1 development of Vegrow's AI Voice Platform, scaling it from prototype to 30,000+ conversations/month across NPS, profiling, slot booking, and ops workflows.</li>
                <li>Improved task completion from 40% to 70% through conversation redesign, latency optimization, and interruption handling; raised NPS from 30 to 65 via structured feedback capture and sentiment analysis.</li>
                <li>Built pluggable STT/TTS/LLM orchestration and AI platforms that accelerated experimentation and cut manual effort, positioning AI as a core layer across product and operations.</li>
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
              <p className="entry-story">Progressing from SDE-I to leading an 8-member team in under two years, during Vegrow's 5× revenue growth, taught me as much about team dynamics and execution as it did about distributed systems — Golang, Kafka, event-driven architecture, and scaling infrastructure for hypergrowth. It was my first time leading engineers — and the same period I was invited to Google's Foobar Challenge.</p>
              <ul>
                <li>Progressed from SDE-I to leading an 8-member team during Vegrow's scale from ₹100 Cr to ₹500 Cr+ revenue.</li>
                <li>Led development of QR-based inventory traceability platforms in Golang, Kafka, and MongoDB, digitizing supply-chain operations for end-to-end tracking of perishable goods.</li>
                <li>Built scalable authentication services and internal frameworks, improving platform reliability and observability; migrated core infrastructure from AWS ECS to EKS with CI/CD automation.</li>
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
              <p className="entry-story">This role laid the foundation for my engineering career. I spent all my time learning backend systems, databases, and scalable architecture simply because I loved it — excited to see technology solving real problems in the construction industry. Watching code I wrote in India power products used by customers across the world remains one of the most rewarding parts of the journey.</p>
              <ul>
                <li>Built and scaled backend systems for a B2B AEC AI SaaS platform serving Western and Southeast Asian markets using Node.js, PostgreSQL, and AWS, growing from 0 to $0.5M ARR.</li>
                <li>Delivered end-to-end features from design to deployment and optimized core workflows using state-machine orchestration to improve performance and scalability.</li>
                <li>Designed event-driven notification systems (AWS, FCM, SES) and built RBAC and auditing frameworks for enterprise workflows.</li>
              </ul>
            </div>

            <div className="entry">
              <span className="tag research">RESEARCH</span>
              <div className="entry-top">
                <span className="entry-role">Computational Design Intern</span>
                <span className="entry-org">Arth Design Build</span>
                <span className="entry-dates">JAN 2020 — JUN 2020</span>
              </div>
              <p className="entry-story">Working on BIM automation and generative design with genetic algorithms — before the rise of LLMs — was my first real exposure to AI-driven problem-solving, and to what's possible at the convergence of AI and traditional industries like AEC. Coming from a top technical institute, I felt positioned to solve those problems — which is what led me to consciously pivot into software engineering: to understand real-world systems, and what it actually takes to build a technology company.</p>
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
            <div className="ach-card">
              <div className="ach-year">2018</div>
              <div className="ach-title">Special Mention — HOSMAC HHAC</div>
              <div className="ach-desc">Special Mention in the 3rd edition of the All India Architectural Student Competition (HHAC) for designing a Children's Hospital and Research Centre, conducted by HOSMAC.</div>
            </div>
            <div className="ach-card">
              <div className="ach-year">2017</div>
              <div className="ach-title">Runner-Up — Vertical Design Problem</div>
              <div className="ach-desc">Second position for team submission in a vertical design problem competition, conducted by Arth Design Build.</div>
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
          <div className="edu-entry edu-entry-photo">
            <div className="edu-entry-text">
              <div className="edu-school">Indian Institute of Technology, Kharagpur</div>
              <div className="edu-detail">Bachelor's (Honours), Architecture · 2016 — 2021 · 7.6 CGPA</div>
              <div className="edu-note">Chose architecture drawn by a fascination with geometry, mechanics, and spatial design, and pursued it with a passion to study emerging technology that can shape future built environments. Gained strong exposure to Computational Design, Technology, Architecture, and AI.</div>
            </div>
            <img className="edu-photo" src={process.env.PUBLIC_URL + '/images/iit-convocation.png'} alt="Convocation at IIT Kharagpur" />
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
          <div className="footer-meta">© SAI CHARAN KUMMETHA · BENGALURU, IN · SYSTEM NOMINAL</div>
        </div>
      </footer>
    </>
  );
}

export default App;
