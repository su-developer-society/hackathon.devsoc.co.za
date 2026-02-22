import Link from "next/link";
import {
  AlertTriangle,
  ArrowLeft,
  Bot,
  CalendarDays,
  Cog,
  Compass,
  ExternalLink,
  FileCheck,
  FileText,
  Gavel,
  Gift,
  Globe,
  Lightbulb,
  Lock,
  Mail,
  Palette,
  Scale,
  Send,
  Server,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Target,
  Trophy,
  Users,
} from "lucide-react";

export const metadata = {
  title: "Rulebook | Div & Conquer Hackathon 2026",
  description:
    "Official rules, judging criteria, and code of conduct for the Div & Conquer Hackathon 2026.",
};

export default function RulebookPage() {
  return (
    <div className="bg rulebook-bg">
      <div className="rulebook-scroll">
        <div className="rulebook-container">
          <header className="rb-header">
            <Link href="/" className="rb-back">
              <ArrowLeft size={14} /> Back to Home
            </Link>
            <h1 className="rb-title">Official Rulebook</h1>
            <p className="rb-subtitle">Div &amp; Conquer Hackathon 2026</p>
            <div className="rb-edition">
              <span>Organised by the Stellenbosch University Developer Society (DevSoc)</span>
              <span>Version 1.0 - Published 22 February 2026</span>
            </div>
          </header>

          <section className="rb-hero-task" id="task">
            <div className="rb-section-header">
              <Target size={20} />
              <h2>01 - The Task</h2>
            </div>
            <div className="rb-hero-task-inner">
              <span className="rb-hero-label">Your Mission</span>
              <h3 className="rb-hero-heading">
                Redesign the Stellenbosch University Computer Science Department Website
              </h3>
              <p className="rb-hero-url">
                Current site:{" "}
                <a href="https://cs.sun.ac.za/" target="_blank" rel="noopener noreferrer">
                  cs.sun.ac.za <ExternalLink size={14} />
                </a>
              </p>
              <p className="rb-hero-desc">
                Build a complete, modern, and functional website from scratch that reimagines what
                a world-class university CS department&rsquo;s web presence should look like.
              </p>
            </div>
          </section>

          <nav className="rb-toc" id="toc">
            <div className="rb-toc-label">Contents</div>
            <div className="rb-toc-grid">
              <a href="#task" className="rb-toc-item">
                <span className="rb-toc-num">01</span>The Task
              </a>
              <a href="#eligibility" className="rb-toc-item">
                <span className="rb-toc-num">02</span>Eligibility &amp; Teams
              </a>
              <a href="#content" className="rb-toc-item">
                <span className="rb-toc-num">03</span>Required Content
              </a>
              <a href="#timeline" className="rb-toc-item">
                <span className="rb-toc-num">04</span>Timeline
              </a>
              <a href="#platforms" className="rb-toc-item">
                <span className="rb-toc-num">05</span>Hosting Platforms
              </a>
              <a href="#wp-drupal" className="rb-toc-item">
                <span className="rb-toc-num">06</span>WordPress &amp; Drupal
              </a>
              <a href="#submissions" className="rb-toc-item">
                <span className="rb-toc-num">07</span>Submissions
              </a>
              <a href="#ai" className="rb-toc-item">
                <span className="rb-toc-num">08</span>AI Policy
              </a>
              <a href="#conduct" className="rb-toc-item">
                <span className="rb-toc-num">09</span>Code of Conduct
              </a>
              <a href="#judging" className="rb-toc-item">
                <span className="rb-toc-num">10</span>Judging
              </a>
              <a href="#prizes" className="rb-toc-item">
                <span className="rb-toc-num">11</span>Prizes
              </a>
              <a href="#disputes" className="rb-toc-item">
                <span className="rb-toc-num">12</span>Disputes
              </a>
              <a href="#amendments" className="rb-toc-item">
                <span className="rb-toc-num">13</span>Final Authority
              </a>
              <a href="#acceptance" className="rb-toc-item">
                <span className="rb-toc-num">14</span>Acceptance
              </a>
              <a href="#changes-to-rules" className="rb-toc-item">
                <span className="rb-toc-num">15</span>Changes to Rules
              </a>
            </div>
          </nav>

          <section className="rb-section" id="eligibility">
            <div className="rb-section-header">
              <Users size={20} />
              <h2>02 - Eligibility &amp; Team Formation</h2>
            </div>

            <h3 className="rb-sub">2.1 Who Can Participate</h3>
            <ul className="rb-list">
              <li>
                The hackathon is open to <strong>all currently registered students at any tertiary
                institution</strong> (university, university of technology, college, etc.).
              </li>
              <li>There are no restrictions on faculty, year of study, or degree programme.</li>
              <li>Both undergraduate and postgraduate students may participate.</li>
            </ul>

            <h3 className="rb-sub">2.2 Team Size &amp; Composition</h3>
            <ul className="rb-list">
              <li>Teams may consist of <strong>1 - 4 members</strong>.</li>
              <li>Solo entries are allowed.</li>
              <li>
                Teams <strong>may be a mix of students from different institutions</strong> -
                cross-institution collaboration is welcome.
              </li>
              <li>Every team member must be individually eligible (see 2.1).</li>
            </ul>
          </section>

          <section className="rb-section" id="content">
            <div className="rb-section-header">
              <FileCheck size={20} />
              <h2>03 - Required Content</h2>
            </div>
            <p>
              A strong submission should address <strong>at least</strong> the following areas.
            </p>
            <ol className="rb-numbered-grid">
              <li>Department overview &amp; welcome / about page</li>
              <li>Academic staff &amp; faculty profiles</li>
              <li>Professor &amp; researcher publications / research output</li>
              <li>Undergraduate &amp; postgraduate programme information</li>
              <li>Course catalogue / module listings per year of study</li>
              <li>Research groups, labs, and centres of excellence</li>
              <li>News, announcements, and press releases</li>
              <li>Events &amp; seminars calendar</li>
              <li>Student resources - FAQs, forms, useful links</li>
              <li>Contact information, location, and directions</li>
            </ol>
            <div className="rb-info-box">
              <Lightbulb size={16} />
              <div>
                We strongly recommend alignment with Stellenbosch University brand identity where possible.
                Use the{" "}
                <a href="https://www.su.ac.za/en/about/brand-identity" target="_blank" rel="noopener noreferrer">
                  Stellenbosch branding site
                </a>{" "}
                and the{" "}
                <a href="https://stellenbosch.sharepoint.com/sites/BrandIdentity" target="_blank" rel="noopener noreferrer">
                  SharePoint brand portal
                </a>
                .
              </div>
            </div>
          </section>

          <section className="rb-section" id="timeline">
            <div className="rb-section-header">
              <CalendarDays size={20} />
              <h2>04 - Timeline &amp; Key Dates</h2>
            </div>
            <p className="rb-note">All times are South African Standard Time (SAST / UTC+2).</p>
            <div className="rb-timeline">
              <div className="rb-timeline-row">
                <div className="rb-timeline-event">Opening ceremony</div>
                <div className="rb-timeline-date">Fri, 27 February 2026 @ 17:30</div>
              </div>
              <div className="rb-timeline-row rb-timeline-highlight">
                <div className="rb-timeline-event">Submission deadline</div>
                <div className="rb-timeline-date">Tue, 3 March 2026 @ 23:59</div>
              </div>
            </div>
          </section>

          <section className="rb-section" id="platforms">
            <div className="rb-section-header">
              <Globe size={20} />
              <h2>05 - Allowed Hosting Platforms</h2>
            </div>
            <div className="rb-platform-grid">
              <div className="rb-platform"><strong>GitHub Pages</strong></div>
              <div className="rb-platform"><strong>Cloudflare Pages</strong><span>Any framework</span></div>
              <div className="rb-platform"><strong>Vercel</strong><span>Any framework</span></div>
              <div className="rb-platform"><strong>WordPress</strong></div>
              <div className="rb-platform rb-platform-bonus"><strong>Drupal</strong> (bonus points)</div>
            </div>
          </section>

          <section className="rb-section rb-section-accent" id="wp-drupal">
            <div className="rb-section-header">
              <Server size={20} />
              <h2>06 - Free WordPress &amp; Drupal Instances</h2>
            </div>
            <p>
              DevSoc provides free WordPress and Drupal instances on shared infrastructure for teams
              who want a managed CMS environment instead of self-hosting.
            </p>

            <h3 className="rb-sub">6.1 How It Works</h3>
            <div className="rb-option-grid">
              <div className="rb-option">
                <span className="rb-option-label">Option A - Opening Event</span>
                <p>
                  Attend the opening ceremony and request your instance in person. We will issue your
                  credentials and setup details directly at the event.
                </p>
              </div>
              <div className="rb-option">
                <span className="rb-option-label">Option B - Email Request</span>
                <p>
                  Email <a href="mailto:devsoc@sun.ac.za">devsoc@sun.ac.za</a> by <strong>Saturday,
                  28 February 2026 at 23:59 (11:59 PM)</strong> to request an instance.
                </p>
              </div>
            </div>

            <p className="rb-note">
              In your email, include team name, team members, preferred CMS (WordPress or Drupal), and
              a preferred site name/subdomain.
            </p>

            <h3 className="rb-sub">6.2 Usage Rules</h3>
            <ul className="rb-list">
              <li>Use only your own instance and credentials.</li>
              <li>Do not attempt to access, modify, or inspect other teams&rsquo; instances or data.</li>
              <li>Do not run malicious scripts, scans, crypto miners, or abusive traffic.</li>
              <li>Do not upload illegal content or anything that violates institutional policy/law.</li>
              <li>Keep usage reasonable on shared server resources (CPU, RAM, storage).</li>
            </ul>

            <div className="rb-warn-box">
              <AlertTriangle size={18} />
              <div>
                Breaking these rules may result in immediate instance suspension, disqualification,
                and a ban from future DevSoc events.
              </div>
            </div>
          </section>

          <section className="rb-section" id="submissions">
            <div className="rb-section-header">
              <Send size={20} />
              <h2>07 - Submission Requirements</h2>
            </div>
            <div className="rb-deadline">
              <div className="rb-deadline-top">Submissions Close</div>
              <div className="rb-deadline-main">Tuesday, 3 March 2026 - 23:59 SAST</div>
              <div className="rb-deadline-bottom">No late submissions. No exceptions.</div>
            </div>
            <p>
              Email your submission to <a href="mailto:devsoc@sun.ac.za"><strong>devsoc@sun.ac.za</strong></a> with:
            </p>
            <p>
              You are required to submit the <strong>Submission Form PDF</strong> to{" "}
              <a href="mailto:devsoc@sun.ac.za"><strong>devsoc@sun.ac.za</strong></a>. See the{" "}
              <Link href="/submissions"><strong>Submissions page</strong></Link> for the form and instructions.
            </p>
            <ol className="rb-checklist">
              <li>Team name and members</li>
              <li>Live URL</li>
              <li>Source code repository link</li>
              <li>Hosting platform used</li>
            </ol>
          </section>

          <section className="rb-section" id="ai">
            <div className="rb-section-header">
              <Bot size={20} />
              <h2>08 - AI Usage Policy</h2>
            </div>
            <p>
              AI tools are <strong>fully allowed</strong> in this hackathon. You may use AI for
              coding, design, content generation, debugging, and ideation.
            </p>
            <p>
              You <strong>do not need to declare</strong> which AI tools you used. There is no
              mandatory disclosure requirement; judging focuses on the quality of your final
              submitted website.
            </p>
            <p>
              We recommend using GitHub Copilot via GitHub Education, where eligible students can
              access Copilot Pro/Premium benefits for free through the Student Developer Pack.
              See{" "}
              <a href="https://education.github.com/pack" target="_blank" rel="noopener noreferrer">
                GitHub Education
              </a>{" "}
              and{" "}
              <a href="https://github.com/features/copilot" target="_blank" rel="noopener noreferrer">
                GitHub Copilot
              </a>
              .
            </p>
          </section>

          <section className="rb-section" id="conduct">
            <div className="rb-section-header">
              <ShieldCheck size={20} />
              <h2>09 - Code of Conduct &amp; Fair Play</h2>
            </div>
            <ul className="rb-list">
              <li>No plagiarism or theft of another team&rsquo;s work.</li>
              <li>No sabotage, harassment, discrimination, or abuse.</li>
              <li>Respect all participants, judges, and organisers.</li>
            </ul>
          </section>

          <section className="rb-section" id="judging">
            <div className="rb-section-header">
              <Scale size={20} />
              <h2>10 - Judging Panel &amp; Criteria</h2>
            </div>
            <div className="rb-criteria">
              <div className="rb-criterion-card"><Palette size={20} /><strong>Design</strong></div>
              <div className="rb-criterion-card"><Cog size={20} /><strong>Functionality</strong></div>
              <div className="rb-criterion-card"><FileCheck size={20} /><strong>Completeness</strong></div>
              <div className="rb-criterion-card"><Smartphone size={20} /><strong>Responsiveness</strong></div>
              <div className="rb-criterion-card"><Compass size={20} /><strong>Usability</strong></div>
              <div className="rb-criterion-card"><Sparkles size={20} /><strong>Creativity</strong></div>
            </div>
            <div className="rb-info-box">
              <Gift size={16} />
              <div>Drupal submissions receive bonus points. Stellenbosch University currently uses Drupal.</div>
            </div>
          </section>

          <section className="rb-section" id="prizes">
            <div className="rb-section-header">
              <Trophy size={20} />
              <h2>11 - Prizes</h2>
            </div>
            <div className="rb-prize-grid">
              <div className="rb-prize rb-prize-1">
                <span className="rb-prize-rank">1st Place</span>
                <span className="rb-prize-value">R5,000 cash</span>
                <span className="rb-prize-note">Cash prize</span>
              </div>
              <div className="rb-prize rb-prize-2">
                <span className="rb-prize-rank">2nd Place</span>
                <span className="rb-prize-value">R2,000 cash</span>
                <span className="rb-prize-note">Cash prize</span>
              </div>
              <div className="rb-prize rb-prize-3">
                <span className="rb-prize-rank">3rd Place</span>
                <span className="rb-prize-value">R1,000 cash</span>
                <span className="rb-prize-note">Cash prize</span>
              </div>
            </div>
            <p>
              There may also be additional runner-up prizes such as sponsored merchandise,
              vouchers, partner giveaways, or other sponsor-supported rewards.
            </p>
          </section>

          <section className="rb-section" id="disputes">
            <div className="rb-section-header">
              <Gavel size={20} />
              <h2>12 - Disputes &amp; Disqualification</h2>
            </div>
            <p>
              All dispute reports must be submitted to <a href="mailto:devsoc@sun.ac.za">devsoc@sun.ac.za</a>
              with clear evidence (screenshots, links, timestamps, or logs where applicable).
            </p>
            <ul className="rb-list">
              <li>Only written reports sent to the official email address will be considered.</li>
              <li>DevSoc may request additional information from involved teams before ruling.</li>
              <li>Teams found to be in breach of rules may be warned, suspended, or disqualified.</li>
              <li>For severe misconduct, DevSoc may apply a ban from future events.</li>
            </ul>
            <p>
              DevSoc rulings are final and binding.
            </p>
          </section>

          <section className="rb-section" id="amendments">
            <div className="rb-section-header">
              <Lock size={20} />
              <h2>13 - Amendments &amp; Final Authority</h2>
            </div>
            <p>
              DevSoc may amend, clarify, or expand these rules at any time where required for fairness,
              operational constraints, safety, or compliance.
            </p>
            <ul className="rb-list">
              <li>Updates become effective once published on official DevSoc channels.</li>
              <li>Any scenario not explicitly covered in this rulebook is resolved at DevSoc discretion.</li>
              <li>Interpretation of all rules remains the sole authority of DevSoc organisers.</li>
            </ul>
          </section>

          <section className="rb-section rb-section-accept" id="acceptance">
            <div className="rb-section-header">
              <FileText size={20} />
              <h2>14 - Acceptance of Rules</h2>
            </div>
            <p>
              By submitting, your team confirms acceptance of this entire rulebook and all final decisions made by DevSoc.
            </p>
            <p>
              Teams are responsible for ensuring that every team member has read and agreed to these rules.
            </p>
          </section>

          <section className="rb-section" id="changes-to-rules">
            <div className="rb-section-header">
              <FileText size={20} />
              <h2>15 - Changes to Rules</h2>
            </div>
            <p>
              Any updates to rules will be announced through official DevSoc channels and are considered
              part of this rulebook once communicated.
            </p>
            <p>
              Continued participation after a rules update constitutes acceptance of the updated rules.
            </p>
          </section>

          <footer className="rb-footer">
            <Link href="/" className="rb-back">
              <ArrowLeft size={14} /> Back to Home
            </Link>
            <div className="rb-footer-links">
              <a href="mailto:devsoc@sun.ac.za">
                <Mail size={14} /> devsoc@sun.ac.za
              </a>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
