import ScrollAnimations from './components/ScrollAnimations'

export default function Home() {
  return (
    <>
      <ScrollAnimations />

      {/* NAV */}
      <nav>
        <a href="#" className="nav-logo">
          All<span>Activity</span>
        </a>
        <ul className="nav-links">
          <li><a href="#problem">The Problem</a></li>
          <li><a href="#work-record">Work Record</a></li>
          <li><a href="#visibility">Visibility</a></li>
          <li><a href="#intelligence">Intelligence</a></li>
          <li><a href="#cta" className="nav-cta">Get Early Access</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <section id="hero">
        <div className="hero-accent" aria-hidden="true">
          <div className="hero-accent-inner"></div>
          <div className="hero-grid"></div>
        </div>
        <div className="hero-inner">
          <p className="hero-kicker">The system of record for human work</p>
          <h1>
            Make your<br />work <em>visible.</em>
          </h1>
          <p className="hero-sub">
            AllActivity automatically records your work and turns it into a personal work record —
            private by design, shareable when needed.
          </p>
          <div className="hero-actions">
            <a href="#cta" className="btn-primary">Get early access</a>
            <a href="#problem" className="btn-ghost">See how it works</a>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* PROBLEM */}
      <section id="problem">
        <div className="problem-inner">
          <div>
            <p className="section-label">The problem</p>
            <h2>
              Work itself is largely <em>invisible.</em>
            </h2>
            <p className="body-text">
              You work all day across tools, files, messages, and calls. Documents exist. Emails
              exist. Code exists. But the actual work in between disappears.
            </p>
            <p className="body-text" style={{ marginTop: '20px' }}>
              We have systems for everything except the work itself. Today, we measure time. Not
              work.
            </p>
            <div className="problem-stat">
              <div className="big-number">0</div>
              <p className="big-number-label">
                Systems that record the work itself.
                <br />
                Until now.
              </p>
            </div>
          </div>
          <div>
            <p style={{ fontSize: '15px', color: 'var(--ink-soft)', marginBottom: '8px', letterSpacing: '0.04em' }}>
              What disappears every day:
            </p>
            <ul className="invisible-work-list">
              {[
                'Research and deep reading',
                'Drafting, revising, refining',
                'Reviewing documents and contracts',
                'Coordinating across tools and people',
                'Preparing and structuring information',
                'Problem-solving and decision-making',
                'Context switching and flow recovery',
                'Everything between the deliverables',
              ].map((item) => (
                <li key={item}>
                  <span className="invisible-dot"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SHIFT */}
      <section id="shift">
        <div className="shift-inner">
          <p className="section-label">The shift</p>
          <h2>
            AllActivity
            <br />
            changes this.
          </h2>
          <p className="body-text">
            It turns everything you do into a structured work record. Not a time log. Not a
            dashboard. A record of the work itself.
          </p>

          <div className="shift-contrast">
            <div className="shift-col">
              <p className="shift-col-label">Before</p>
              <h3>Work disappears as it happens</h3>
              <ul className="shift-items">
                <li>Manual time tracking — start, stop, forget</li>
                <li>Reconstructing work at end of day</li>
                <li>No record of what actually happened</li>
                <li>Billing and reporting based on guesswork</li>
                <li>Invisible effort, invisible patterns</li>
              </ul>
            </div>
            <div className="shift-col dark">
              <p className="shift-col-label">With AllActivity</p>
              <h3>Work is recorded as it happens</h3>
              <ul className="shift-items">
                <li>Automatic recording — nothing to start or stop</li>
                <li>Work record builds itself throughout the day</li>
                <li>Every activity captured and structured</li>
                <li>Billing and reporting backed by real data</li>
                <li>Visible effort, visible patterns, visible work</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WORK RECORD */}
      <section id="work-record">
        <div className="work-record-inner">
          <p className="section-label">Your work record</p>
          <h2>
            The record belongs
            <br />
            to <em>you.</em>
          </h2>
          <p className="body-text">
            AllActivity is built from the user outward. Your work record is yours first. What
            becomes visible to others is your choice, not a default.
          </p>

          <div className="three-col">
            <div className="record-card">
              <p className="record-card-num">01</p>
              <h3>You see everything first</h3>
              <p>All raw activity is visible to you and only you. The full record of your day is yours, completely.</p>
            </div>
            <div className="record-card">
              <p className="record-card-num">02</p>
              <h3>You assign to projects</h3>
              <p>Through project assignment, work becomes visible to your team. You decide what enters the shared record.</p>
            </div>
            <div className="record-card">
              <p className="record-card-num">03</p>
              <h3>Nothing is shared automatically</h3>
              <p>No timeline. No behavior tracking. No automatic exposure. Visibility is granted, not taken.</p>
            </div>
          </div>
        </div>
      </section>

      {/* VISIBILITY */}
      <section id="visibility">
        <div className="visibility-inner">
          <p className="section-label">Visibility without surveillance</p>
          <h2>
            Teams see <em>project work.</em>
            <br />
            Not people.
          </h2>
          <p className="body-text">
            AllActivity creates reliable project visibility for your team without turning the
            workplace into a monitoring environment. This is the defining distinction.
          </p>

          <div className="visibility-split">
            <div>
              <span className="visibility-badge badge-user">You see</span>
              <div className="visibility-panel">
                <h3 style={{ fontSize: '20px', marginBottom: '4px' }}>Your complete work record</h3>
                <p style={{ fontSize: '13px', color: 'var(--ink-soft)' }}>Everything, always private to you</p>
                <ul className="vis-list">
                  <li><span className="check">✓</span> Full activity timeline</li>
                  <li><span className="check">✓</span> All apps, documents, and windows</li>
                  <li><span className="check">✓</span> Personal workflow patterns</li>
                  <li><span className="check">✓</span> Work across all projects</li>
                  <li><span className="check">✓</span> Personal insights and AI tips</li>
                  <li><span className="check">✓</span> Private account activities</li>
                </ul>
              </div>
            </div>

            <div>
              <span className="visibility-badge badge-team">Your manager sees</span>
              <div className="visibility-panel" style={{ borderColor: 'var(--line)' }}>
                <h3 style={{ fontSize: '20px', marginBottom: '4px' }}>Project contributions only</h3>
                <p style={{ fontSize: '13px', color: 'var(--ink-soft)' }}>Transparent on work, blind on behavior</p>
                <ul className="vis-list">
                  <li><span className="check">✓</span> Which projects you contributed to</li>
                  <li><span className="check">✓</span> Time allocated per project</li>
                  <li><span className="check">✓</span> Billable vs non-billable split</li>
                  <li><span className="cross">✗</span> Your daily timeline or schedule</li>
                  <li><span className="cross">✗</span> Breaks or personal patterns</li>
                  <li><span className="cross">✗</span> Private account activity</li>
                </ul>
              </div>
            </div>
          </div>

          <div style={{
            marginTop: '52px',
            padding: '36px 48px',
            background: 'var(--paper-warm)',
            borderLeft: '3px solid var(--accent)',
          }}>
            <p style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '22px',
              fontWeight: 300,
              fontStyle: 'italic',
              color: 'var(--ink)',
              lineHeight: 1.5,
            }}>
              "No screenshots. No keystrokes. No content. No behavioral timelines. AllActivity
              captures metadata, not surveillance."
            </p>
          </div>
        </div>
      </section>

      {/* INTELLIGENCE */}
      <section id="intelligence">
        <div className="intelligence-inner">
          <p className="section-label">From record to intelligence</p>
          <h2>
            Raw activity becomes
            <br />
            <em>structured insight.</em>
          </h2>
          <p className="body-text">
            Once work is recorded, it can be understood. Patterns emerge. Workflows become visible.
            Improvements become possible. This is workflow intelligence.
          </p>

          <div className="layers">
            {[
              { num: '01', title: 'Raw Activity', desc: 'App, window title, timestamp, duration — automatically captured.' },
              { num: '02', title: 'Work Objects', desc: 'Documents, emails, files — inferred from activity signals.' },
              { num: '03', title: 'Task Types', desc: 'Research, drafting, review, coordination — categorized and structured.' },
              { num: '04', title: 'Workflow Stages', desc: 'Scoping, drafting, negotiating, closing — project phases made visible.' },
              { num: '05', title: 'Intelligence', desc: 'Patterns, inefficiencies, and opportunities — identified and surfaced.' },
            ].map((layer) => (
              <div className="layer" key={layer.num}>
                <p className="layer-num">{layer.num}</p>
                <p className="layer-title">{layer.title}</p>
                <p className="layer-desc">{layer.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT PROOF */}
      <section id="product">
        <div className="product-inner">
          <p className="section-label">Your work record</p>
          <h2>
            This is what work
            <br />
            looks like <em>recorded.</em>
          </h2>
          <p className="body-text">
            Not a time tracker. Not a productivity dashboard. A structured record of work — the
            tools you used, the projects you worked on, the effort you put in.
          </p>

          <div className="mock-screen">
            <div className="mock-bar">
              <div className="mock-dot" style={{ background: '#ff5f57' }}></div>
              <div className="mock-dot" style={{ background: '#febc2e' }}></div>
              <div className="mock-dot" style={{ background: '#28c840' }}></div>
              <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.25)', marginLeft: '16px' }}>
                allactivity — My Timesheet
              </span>
            </div>
            <div className="mock-content">
              <div className="mock-sidebar">
                <p className="mock-nav-label">My Time</p>
                <div className="mock-nav-item active">⏱ Timesheet</div>
                <div className="mock-nav-item">📊 My Insights</div>
                <p className="mock-nav-label">Team</p>
                <div className="mock-nav-item">📋 Timesheets</div>
                <div className="mock-nav-item">📈 Team Insights</div>
                <p className="mock-nav-label">Business</p>
                <div className="mock-nav-item">📁 Projects</div>
                <div className="mock-nav-item">👥 Clients</div>
                <div className="mock-nav-item">🧾 Invoices</div>
              </div>
              <div>
                <div className="mock-main-header">
                  <p className="mock-title">My Timesheet</p>
                  <p className="mock-sub">Your personal work record — Feb 04 – Feb 11, 2026</p>
                </div>
                <div style={{ display: 'flex', gap: '24px', marginBottom: '32px' }}>
                  {[
                    { label: 'BILLABLE', value: '7h 40m' },
                    { label: 'NON-BILLABLE', value: '5h 23m' },
                    { label: 'TOTAL', value: '14h 51m' },
                  ].map((stat) => (
                    <div key={stat.label} style={{
                      padding: '16px 24px',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.06)',
                    }}>
                      <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)', marginBottom: '4px' }}>
                        {stat.label}
                      </p>
                      <p style={{ fontSize: '20px', color: 'rgba(255,255,255,0.85)', fontFamily: 'var(--font-serif)' }}>
                        {stat.value}
                      </p>
                    </div>
                  ))}
                </div>
                {[
                  { color: '#0078d4', name: 'Microsoft Outlook — Correspondence', width: '80%', time: '6h 18m' },
                  { color: '#4285f4', name: 'Google Chrome — Research & Browsing', width: '60%', time: '3h 37m' },
                  { color: '#d83b01', name: 'Microsoft Word — Drafting', width: '45%', time: '1h 48m' },
                  { color: '#2ecc71', name: 'AllActivity — Work Record Review', width: '20%', time: '0h 52m' },
                ].map((row) => (
                  <div className="mock-row" key={row.name}>
                    <div className="mock-app-icon" style={{ background: row.color }}></div>
                    <span className="mock-row-name">{row.name}</span>
                    <div className="mock-row-bar-wrap">
                      <div className="mock-row-bar" style={{ width: row.width, background: row.color, opacity: 0.6 }}></div>
                    </div>
                    <span className="mock-row-time">{row.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* POSITIONING */}
      <section id="positioning">
        <div className="positioning-inner">
          <p className="section-label" style={{ justifyContent: 'center' }}>
            What AllActivity is not
          </p>
          <h2>
            We do not build
            <br />
            surveillance tools.
          </h2>

          <div className="not-box">
            {['Time tracker', 'Employee monitoring', 'Productivity scorer', 'Behavior analyzer', 'Screenshot tool', 'Generic AI dashboard'].map(
              (tag) => (
                <span className="not-tag" key={tag}>{tag}</span>
              )
            )}
          </div>

          <div className="is-statement">
            <p>
              AllActivity builds a work record. It belongs to the person doing the work. Visibility
              is granted, not taken. That is the product. That is the principle.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta">
        <div className="cta-inner">
          <p className="section-label" style={{ justifyContent: 'center', color: 'rgba(250,248,244,0.3)' }}>
            Ready to begin
          </p>
          <h2>
            Make your work
            <br />
            <em>visible today.</em>
          </h2>
          <p className="body-text">
            Join the knowledge workers, legal teams, consultants, and agencies already building
            their work record with AllActivity.
          </p>
          <div className="cta-actions">
            <a href="#" className="btn-primary-inv">Get early access</a>
            <a href="#" className="btn-ghost-inv">See how it works</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <span className="footer-logo">
          All<span>Activity</span>
        </span>
        <span className="footer-copy">The system of record for human work. Privacy by design.</span>
      </footer>
    </>
  )
}
