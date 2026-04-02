import styles from './page.module.css'

const stats = [
  { number: '156+', label: 'Active Clients Managed' },
  { number: '12', label: 'AI Agents Built' },
  { number: '48', label: 'Google Ads Accounts Created' },
  { number: '0%', label: 'Churn Rate (Best in Class)' },
  { number: '73K+', label: 'Client Leads Generated' },
  { number: '702', label: 'Knowledge Base Chunks' },
]

const contributions = [
  {
    date: 'January 2026',
    title: 'Joined StoneSystems as Customer Success Manager',
    tag: 'FOUNDATION',
    description: 'Onboarded as a CSM managing a growing portfolio of local service businesses. Immediately began building systems to scale client management beyond what manual processes could handle. Established zero-churn as a personal standard from day one.',
    details: [
      'Took ownership of initial client portfolio',
      'Identified gaps in existing tooling and processes',
      'Began learning the GoHighLevel ecosystem and StoneSystems operations',
      'Set target: maintain 0% churn rate across entire book of business',
    ],
  },
  {
    date: 'February 2026',
    title: 'CS Platform Command Center',
    tag: 'PLATFORM ENGINEERING',
    description: 'Co-built the StoneSystems CS Platform, a Next.js 16/Supabase application serving as the company-wide command center for 1,300+ GoHighLevel sub-accounts. Features include the 150-Day Horizon Playbook, Action Queue with weighted prioritization, Risk Radar, and real-time GHL sync engine.',
    details: [
      'Weighted lead generation formula: total_leads = lead_contacts + (opportunities x 2)',
      'Action Queue with priority weights: Technical Failures (100W), Milestone Stalls (80W), Routine Nudges (50W)',
      'Real-time sync engine with 100ms throttle for GHL rate limit compliance',
      'Industrial Forge design system with CRT textures and Framer Motion orchestration',
    ],
  },
  {
    date: 'Early March 2026',
    title: 'GBP Automation at Scale',
    tag: 'AUTOMATION',
    description: 'Built and deployed automated Google Business Profile management across the entire client portfolio. Browser automation for profile creation, verification flows, weekly audits, and optimization. Handled verification for complex cases including video verification and postcard flows.',
    details: [
      'Automated GBP profile creation with Playwright browser automation',
      'Batch verification tracking across 5+ simultaneous verifications',
      'Weekly audit pipeline for profile completeness and optimization',
      'GBP Manager org-level operations for 100+ profiles',
      'Primestar Home Services GBP suspension appeal and evidence compilation',
    ],
  },
  {
    date: 'Early March 2026',
    title: 'GSC and SEO Pipeline',
    tag: 'SEO INFRASTRUCTURE',
    description: 'Established Google Search Console verification and sitemap submission at scale. Completed meta tag deployment across 77/78 client websites. Built Oscar\'s SEO methodology into automated playbooks covering keyword research, meta optimization, NAP citations, image optimization, and GBP completeness.',
    details: [
      '77/78 client websites with meta tags deployed',
      'Oscar\'s 6-step SEO fix methodology codified into automation',
      'NAP citation consistency enforcement (verbatim matching)',
      'Long-tail regex hack for GSC keyword opportunity discovery',
      'GHL SEO panel integration with custom values API',
    ],
  },
  {
    date: 'March 14, 2026',
    title: 'Promoted to Co-CSM Team Lead',
    tag: 'LEADERSHIP',
    description: 'Promoted to Co-CSM Team Lead alongside Ben Zazueta, managing a team of 12+ VAs and CSMs. Runs weekly 1:1 training sessions (recorded via Fathom), conducts role-plays, reviews client calls, and mentors team members on client retention strategies. Authored a comprehensive SOP review for Michael that identified 7 priority updates across task management, domain access, DNS, A2P, LSA, pricing, and verification workflows.',
    details: [
      'Team of 12+ including Maria, Charlie, Andres, Brian, Oscar, Juan, Sidney, Michael S.',
      'Sydney, Jose Hernandez, Sergio onboarded in March 2026',
      'Weekly cadence: Monday projections, mid-week role-plays, Friday wrap-up',
      'Regular 1:1 training sessions with Oscar and team members (Fathom-recorded)',
      'Authored CSM Training Feedback document with 7 section reviews for leadership',
      'Advocated for splitting onboarding vs. follow-up into separate departments',
      'New commission structure advocacy: churn prevention, upsells, referrals, testimonials',
    ],
  },
  {
    date: 'March 14, 2026',
    title: 'CSM Training Overhaul and SOP Documentation',
    tag: 'TRAINING & PROCESS',
    description: 'Authored a comprehensive review of all CSM onboarding and operations SOPs, identifying gaps and proposing fixes across 7 critical areas. Pushed to retire ClickUp and manual tracking in favor of the CS Platform Task Dashboard as single source of truth. Established 1:1 mentorship cadence with team members including Oscar Corral, focusing on client follow-up techniques, GHL mastery, and proactive client engagement.',
    details: [
      'Full SOP review: task management, domain access, DNS, A2P, LSA, pricing, verification',
      'Pushed to retire ClickUp in favor of CS Platform as single source of truth',
      'Created domain delegation walkthroughs for GoDaddy, Namecheap, Squarespace',
      'Established "never request passwords, always request delegation" policy enforcement',
      'Updated LSA pricing SOPs: $500/month management + separate ad spend line item',
      'Mentored Oscar on client follow-up techniques: "all they want is the attention"',
      'Identified need for onboarding vs. follow-up department split',
    ],
  },
  {
    date: 'March 14, 2026',
    title: 'The 12 Ryans: Autonomous AI Agent System',
    tag: 'AI INNOVATION',
    description: 'Architected and deployed 12 autonomous AI agents that replicate and scale CSM operations. Each agent owns a domain: intel gathering, call prep, post-call processing, churn prevention, upsell identification, GBP management, team leadership, compliance, client onboarding, outreach, and adversarial stress-testing. The system runs on a tiered model strategy (Haiku/Sonnet/Opus) to optimize cost while maximizing output.',
    details: [
      'ryan-intel: Daily portfolio scans, morning briefs, priority surfacing',
      'ryan-call-prep: Pre-call intelligence briefs with full client context',
      'ryan-post-call: Automatic action item extraction and follow-up drafting',
      'ryan-churn-shield: At-risk client detection and save strategy generation',
      'ryan-upsell: Upsell opportunity identification and pitch drafting',
      'ryan-gbp: Google Business Profile creation, verification, and audits',
      'ryan-onboarding: Full new client pipeline (GBP/GSC/GHL/Ads)',
      'ryan-outreach: Proactive GHL messaging and relationship maintenance',
      'ryan-team-lead: CSM team management and performance tracking',
      'ryan-compliance: Standards enforcement and quality assurance',
      'ryan-aegis: Devil\'s advocate adversarial layer for stress-testing',
      'oscar-followup: SEO optimization, citation building, client saves',
    ],
  },
  {
    date: 'March 14, 2026',
    title: 'Knowledge Base and Operational Intelligence',
    tag: 'KNOWLEDGE ENGINEERING',
    description: 'Built a searchable knowledge base using Supabase pgvector with 702 embedded chunks across operational playbooks, platform documentation, and Supabase reference docs. Local embeddings via @xenova/transformers (384 dimensions) with zero external API dependency.',
    details: [
      '702 chunks across 3 sources: playbooks (21), cs-platform (9), supabase (672)',
      'Local embedding generation with @xenova/transformers',
      'Semantic search via match_knowledge RPC function',
      'API endpoint for real-time knowledge queries',
      'Zero external API dependency for embeddings',
    ],
  },
  {
    date: 'March 16, 2026',
    title: 'Google Ads Mass Rollout',
    tag: 'REVENUE OPERATIONS',
    description: 'Led the mass deployment of Google Ads campaigns across the entire client portfolio. Created 48 accounts and built 39 campaigns in a single sprint, each configured at $30/day with industry-optimized keywords and ad copy. Upgraded the MCP server to v20 and deployed to Railway for production reliability.',
    details: [
      '48 Google Ads accounts created programmatically',
      '39 campaigns built with optimized targeting and budgets',
      '83 additional clients queued pending Standard Access approval',
      'MCP server upgraded to v20, deployed to Railway, connected to Cowork',
      'Pre-flight checks, automated ad copy generation, and campaign configuration',
    ],
  },
  {
    date: 'March 22, 2026',
    title: '$5K Income Playbook and Revenue Architecture',
    tag: 'STRATEGY',
    description: 'Designed a systematic income scaling playbook targeting $5,000/month through diversified revenue streams: base pay, churn bonuses, referrals, testimonials, upsells, and competitive prizes. Created personalized outreach templates for 30+ top-performing clients with specific value propositions.',
    details: [
      '4-wave execution strategy: testimonials, referrals, upsells, client fixes',
      'Personalized outreach for clients generating 440 to 73,256 leads',
      'Upsell strategies mapped to client profiles (LSA, SEO, Google Ads, AI SEO)',
      'Weekly cadence: Monday testimonials, Tuesday referrals, Wednesday upsells',
      'Competitive bonus strategy targeting $1,450/month prize pool',
    ],
  },
  {
    date: 'March 24, 2026',
    title: 'CLI Tooling and Cost Optimization',
    tag: 'DEVELOPER TOOLING',
    description: 'Built CLI tools that replace MCP servers, saving ~40% context window per operation. Custom CLIs for GHL contact/conversation management, Fathom call recordings, and Google Ads campaign operations. Implemented MiniMax M2.5 integration via OpenRouter for 50x cost reduction on routine agent work. Deployed Ruflo orchestration layer.',
    details: [
      'GHL CLI: contacts, conversations, calendars, SMS operations',
      'Fathom CLI: call recordings, transcripts, summaries',
      'Google Ads CLI: campaigns, keywords, reporting',
      'MiniMax M2.5 integration: 50x cheaper than Opus for routine work',
      'Tiered model strategy: Haiku for data pulls, Sonnet for judgment, Opus for orchestration',
      'Ruflo orchestration layer for batched multi-agent workflows',
    ],
  },
  {
    date: 'March 26 - April 2026',
    title: 'Zero-Churn Client Retention and Scaling',
    tag: 'CLIENT SUCCESS',
    description: 'Achieved and maintained a 0% churn rate across a portfolio of 156+ active clients, the best performance metric on the team. Full operational system live: 12 VAs, 12 AI agents, automated pipelines. Targeting $5K/month through systematic revenue diversification.',
    details: [
      '0% churn rate maintained consistently, best on team',
      'Proactive churn detection via daily portfolio scans',
      'Save strategies auto-generated for at-risk clients',
      '$1,050/month churn bonus earned through retention excellence',
      'Flywheel approach: fix foundation, harvest referrals, compound growth',
      '156+ active clients managed with automated systems',
    ],
  },
]

const recentCalls = [
  { date: 'Apr 2', title: 'Ryan & Oscar 1-1 Client Meeting', summary: 'Defined new SEO strategy with Oscar as company SEO expert. Aaron Salas account selected as case study. Andre\'s neglected clients identified for reassignment. Resolved SMS and GBP issues for Rigo Guzman.', actions: 9 },
  { date: 'Apr 1', title: 'Ryan & Oscar 1-1 Client Meeting', summary: 'Proposed CSM role specialization to Eric: Onboarding/Launch vs Support/Optimization. Ryan handles launches, Oscar handles ongoing optimization. Brian Pennington GBP recreation timeline set.', actions: 4 },
  { date: 'Mar 31', title: 'Ryan - Jose 1-1 Client Meeting', summary: 'Mentoring session with Jose on client management processes and GHL platform navigation.', actions: 3 },
  { date: 'Mar 31', title: 'Ryan & Oscar 1-1 Client Meeting', summary: 'Client review session covering active cases and follow-up priorities.', actions: 3 },
  { date: 'Mar 30', title: 'Michael Cummings - Launch Call', summary: 'New client onboarding. Full launch walkthrough including GBP, GHL setup, and expectations setting.', actions: 7 },
  { date: 'Mar 30', title: 'Darren Hicks - Launch Call', summary: 'Client launch call. Subdomain resolution for Defense Builders, C-Panel redirect configuration.', actions: 5 },
  { date: 'Mar 30', title: 'Ryan - Michael Scott 1-1', summary: 'Team member 1:1 session. Performance review and client assignment coordination.', actions: 4 },
  { date: 'Mar 30', title: 'Ryan & Oscar 1-1 Training', summary: 'Training session covering SEO methodology, client follow-up techniques, and tool mastery.', actions: 6 },
]

const timeline = [
  { date: 'Jan 2026', event: 'Joined StoneSystems as Customer Success Manager' },
  { date: 'Feb 2026', event: 'Built CS Platform Command Center (Next.js 16 + Supabase)' },
  { date: 'Mar 1', event: 'Deployed 150-Day Horizon Playbook and Action Queue' },
  { date: 'Mar 14', event: 'Promoted to Co-CSM Team Lead. Built the 12 Ryans AI Agent System.' },
  { date: 'Mar 14', event: 'Knowledge base deployed: 702 pgvector chunks, zero API dependency' },
  { date: 'Mar 16', event: 'Google Ads mass rollout: 48 accounts, 39 campaigns in one sprint' },
  { date: 'Mar 18', event: 'Windsor.ai integration for unified marketing analytics' },
  { date: 'Mar 24', event: 'Zero-LLM scripts and Ruflo orchestration layer deployed' },
  { date: 'Mar 26', event: 'Full team operational: 12 VAs, 12 AI agents, 156+ clients' },
  { date: 'Apr 2026', event: 'Scaling operations, targeting $5K/month, 0% churn maintained' },
]

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.badge}>STONESYSTEMS</div>
          <h1 className={styles.heroTitle}>Ryan Grant</h1>
          <p className={styles.heroSubtitle}>CSM Team Lead / AI Operations Architect</p>
          <p className={styles.heroDescription}>
            Building the future of customer success through autonomous AI agents,
            scalable automation, and zero-churn client management. Managing 156+ active clients
            with 12 AI agents and a team of 12.
          </p>
          <div className={styles.heroCTA}>
            <a href="mailto:ryan@stonesystems.io" className={styles.primaryButton}>Contact Ryan</a>
            <a href="#contributions" className={styles.secondaryButton}>View Contributions</a>
          </div>
        </div>
        <div className={styles.heroVisual}>
          <div className={styles.terminalWindow}>
            <div className={styles.terminalHeader}>
              <span className={styles.dot} style={{background: '#ff5f57'}}></span>
              <span className={styles.dot} style={{background: '#ffbd2e'}}></span>
              <span className={styles.dot} style={{background: '#28ca42'}}></span>
              <span className={styles.terminalTitle}>ryan-ops</span>
            </div>
            <div className={styles.terminalBody}>
              <p><span className={styles.prompt}>$</span> ryan-intel --morning-brief</p>
              <p className={styles.output}>Portfolio: 156 active | 0 churned | 12 agents online</p>
              <p className={styles.output}>Escalations: 0 critical | 2 pending</p>
              <p className={styles.output}>Google Ads: 39 campaigns live | $30/day each</p>
              <p><span className={styles.prompt}>$</span> ryan-aegis --stress-test</p>
              <p className={styles.output}>All systems nominal. No vulnerabilities detected.</p>
              <p><span className={styles.prompt}>$</span> <span className={styles.cursor}>_</span></p>
            </div>
          </div>
        </div>
      </header>

      <section className={styles.statsSection}>
        <div className={styles.statsGrid}>
          {stats.map((stat) => (
            <div key={stat.label} className={styles.statCard}>
              <div className={styles.statNumber}>{stat.number}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="contributions" className={styles.contributionsSection}>
        <h2 className={styles.sectionTitle}>Key Contributions</h2>
        <p className={styles.sectionSubtitle}>
          A comprehensive look at what Ryan has built, shipped, and scaled at StoneSystems
        </p>
        <div className={styles.contributionsGrid}>
          {contributions.map((item) => (
            <div key={item.title} className={styles.contributionCard}>
              <div className={styles.contributionDate}>{item.date}</div>
              <div className={styles.contributionTag}>{item.tag}</div>
              <h3 className={styles.contributionTitle}>{item.title}</h3>
              <p className={styles.contributionDescription}>{item.description}</p>
              <ul className={styles.detailsList}>
                {item.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.callsSection}>
        <h2 className={styles.sectionTitle}>Recent Calls and Meetings</h2>
        <p className={styles.sectionSubtitle}>Live from Fathom AI - Ryan's recent client calls, 1:1s, and training sessions</p>
        <div className={styles.callsGrid}>
          {recentCalls.map((call, i) => (
            <div key={i} className={styles.callCard}>
              <div className={styles.callHeader}>
                <span className={styles.callDate}>{call.date}</span>
                <span className={styles.callActions}>{call.actions} action items</span>
              </div>
              <h3 className={styles.callTitle}>{call.title}</h3>
              <p className={styles.callSummary}>{call.summary}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.timelineSection}>
        <h2 className={styles.sectionTitle}>Timeline</h2>
        <p className={styles.sectionSubtitle}>From CSM to Team Lead to AI Operations Architect</p>
        <div className={styles.timeline}>
          {timeline.map((item, i) => (
            <div key={i} className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineDate}>{item.date}</div>
              <div className={styles.timelineEvent}>{item.event}</div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.philosophySection}>
        <h2 className={styles.sectionTitle}>Operating Philosophy</h2>
        <div className={styles.philosophyGrid}>
          <div className={styles.philosophyCard}>
            <h3>FRAME</h3>
            <p>Does this move the needle toward scaling, or is it maintenance noise?</p>
          </div>
          <div className={styles.philosophyCard}>
            <h3>FLOOR</h3>
            <p>Is this above the minimum threshold of impact worth attention?</p>
          </div>
          <div className={styles.philosophyCard}>
            <h3>FOCUS</h3>
            <p>Is this the single highest-signal action right now?</p>
          </div>
        </div>
        <blockquote className={styles.quote}>
          "Execute first, report results. Don't ask permission for non-destructive actions.
          Pick the best option and run it. Chain actions: if step 1 reveals step 2 is needed, do both before responding."
        </blockquote>
      </section>

      <section className={styles.techSection}>
        <h2 className={styles.sectionTitle}>Tech Stack</h2>
        <div className={styles.techGrid}>
          {['Next.js 16', 'Supabase', 'GoHighLevel API', 'Claude AI (Opus/Sonnet/Haiku)', 'Playwright', 'pgvector', 'MiniMax M2.5', 'Google Ads API v20', 'Google Search Console', 'Google Business Profile', 'Fathom AI', 'Vercel', 'Railway', 'OpenRouter', 'Node.js CLI Tools', 'Ruflo Orchestration'].map((tech) => (
            <span key={tech} className={styles.techBadge}>{tech}</span>
          ))}
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p>Ryan Grant - StoneSystems</p>
          <p>ryan@stonesystems.io</p>
          <p className={styles.footerNote}>Built with Next.js. Deployed on Vercel. Powered by the 12 Ryans.</p>
        </div>
      </footer>
    </div>
  )
}
