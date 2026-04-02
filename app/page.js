import styles from './page.module.css'

const stats = [
  { number: '10', label: 'Months at StoneSystems' },
  { number: '156+', label: 'Active Clients Managed' },
  { number: '12', label: 'AI Agents Built' },
  { number: '12+', label: 'Team Members Managed' },
  { number: '0%', label: 'Churn Rate (Best in Class)' },
  { number: '73K+', label: 'Client Leads Generated' },
]

const contributions = [
  // ===== PHASE 1: THE BEGINNING (June 2025) =====
  {
    date: 'June 2, 2025',
    title: 'Day One: Fathom Demo and Mock Calls',
    tag: 'THE BEGINNING',
    description: 'First day at StoneSystems. Started with a Fathom demo to learn call recording workflows, then immediately jumped into mock onboarding calls with Michael Vanhoutte. Michael coached on presentation skills, client confidence, and the importance of appearing prepared even when learning on the fly.',
    details: [
      'First ever Fathom recording: June 2, 2025',
      'Mock onboarding calls with Michael - practiced full client walkthrough',
      'Coached on Lead Connector app setup, review funnels, and marketing forms',
      'Key feedback: "Confidence and appearing prepared are crucial during client calls"',
      'Assigned to learn GoHighLevel ecosystem, Google My Business, and Zapier integrations',
    ],
  },
  {
    date: 'June 9 - June 30, 2025',
    title: 'First Client Calls and Rapid Ramp-Up',
    tag: 'ONBOARDING',
    description: 'Within one week of mock calls, started taking live client onboarding calls. First real client: Chris Mitchell of Noble Ridge Roofing & Siding on June 9. By end of June, was handling multiple onboarding and launch calls daily across roofing, lawn care, tile, plumbing, cleaning, and more.',
    details: [
      'First live client call: Chris Mitchell, Noble Ridge Roofing (June 9)',
      'Set up Google Business Profiles, collected domain access, exported customer lists',
      'Learned domain redirects, name server changes, and GoDaddy delegation on the job',
      'Handled clients across 10+ industries in the first month',
      'By June 30: launch calls for Randy Sheehan, Anthony Saadatirad, Milovan Jankovic, Brock McBride',
    ],
  },
  // ===== PHASE 2: GROWING PAINS (July - August 2025) =====
  {
    date: 'July 2025',
    title: 'First 1:1 with Michael - Real Talk on Growth Areas',
    tag: 'GROWTH',
    description: 'July 30 marked a pivotal moment: a candid 1:1 with Michael where real gaps were identified. Two clients (Sunlight Sprinkler, Concrete Charleston) had escalated directly to Michael over incomplete domain redirects, slow communication, and perceived lack of technical knowledge. This call became the catalyst for systematic self-improvement.',
    details: [
      'Identified gaps: email management, response time, technical knowledge on domains/redirects',
      'Michael coached on email filters, GHL conversation management (bottom-to-top method)',
      'Scheduling issues: double/triple bookings needed process fix',
      'Action: write down unknown questions, bring to Michael rather than guessing on calls',
      'Takeaway: "If you don\'t know something, say I\'ll find out - never bluff the client"',
      'First CSM team meeting attended - learning GHL best practices from peers',
    ],
  },
  {
    date: 'August - September 2025',
    title: 'Technical Skill Building and Client Volume Growth',
    tag: 'SKILL DEVELOPMENT',
    description: 'Spent two months closing every technical gap Michael identified. Mastered domain redirects, GoDaddy delegation, A2P messaging compliance, and GHL conversation workflows. Call volume increased steadily as the portfolio grew. Started handling support calls alongside onboarding, showing range beyond new client setup.',
    details: [
      'Mastered domain management: redirects, name servers, delegation across registrars',
      'A2P 10DLC compliance: learned to never send forms to clients, complete live on calls',
      'GHL mastery: conversation management, calendar integration, SMS/email workflows',
      'Support calls added to workload: troubleshooting live client issues in real-time',
      'August clients: Young Shin, Jason Craine, Kyle Gilmore, Alessandra Coutinho',
      'September clients: Terence McBride, Mark Carter, Clint Berardi, Kyle and Lori Hessler',
    ],
  },
  // ===== PHASE 3: STEPPING UP (October - November 2025) =====
  {
    date: 'October - November 2025',
    title: 'Emerging as a Leader - Mentoring Peers',
    tag: 'LEADERSHIP EMERGENCE',
    description: 'As the portfolio grew past 80+ clients, started naturally mentoring other CSMs. Began running informal 1:1s with team members, helping them navigate difficult clients and GHL workflows. Handled increasingly complex client situations including cancellation saves, chargebacks, and multi-step technical setups.',
    details: [
      'Portfolio grew past 80+ active clients',
      'Started mentoring: Andres 1:1s, helping with onboarding technique',
      'Handling complex cases: Shannon Liccion ($500 buyout), client escalations',
      'Launch calls becoming routine: Danny Dale, Scott McCutchen, Bryan Heath, Damir Pajazetovic',
      'November: first referral and upsell conversations with high-performing clients',
      'Learning to balance onboarding volume with support quality',
    ],
  },
  {
    date: 'Late November 2025',
    title: 'Training Andres - Live Call Mentorship',
    tag: 'MENTORSHIP',
    description: 'Began formally training new CSMs through live call practice. Assigned Andres two live launch calls (Felipe Santos, Sergio Duarte) for immediate hands-on experience. Developed a pre-call strategy technique that Andres adopted: confirming availability and gathering critical info (domain, GMB) before the call to prevent delays.',
    details: [
      'Assigned Andres live launch calls as training exercise',
      'Taught pre-call strategy: confirm availability, gather domain/GMB info in advance',
      'Live coaching during calls - real clients, real stakes',
      'Andres successfully completed both calls independently',
      'Pattern established: pair new CSMs with live calls early, coach in real-time',
    ],
  },
  // ===== PHASE 4: DAILY 1:1s AND TEAM BUILDING (December 2025) =====
  {
    date: 'December 2025',
    title: 'Daily 1:1s with Maria, Charlie, Brian, Henry, Andres',
    tag: 'TEAM MANAGEMENT',
    description: 'December was the inflection point where Ryan went from individual contributor to people manager. Running daily 1:1s with 5+ team members: Maria (daily), Charlie (3x/week), Brian (daily), Henry (2x/week), and Andres (weekly). Simultaneously maintaining a full client call schedule with onboarding, launch, and support calls every single day.',
    details: [
      'Maria 1:1s: daily sessions throughout December (Dec 2-23, nearly every day)',
      'Charlie 1:1s: 3x/week coaching sessions on client retention',
      'Brian 1:1s: daily meetings covering client handoffs and process alignment',
      'Henry 1:1s: 2x/week sessions on technical skill development',
      'Andres 1:1s: weekly strategic reviews and client assignment coordination',
      'Simultaneous client calls: Greg Markham, Elite Tech Roof, Tom Katsaros, Omar Torres, and more',
      'December highlight: 6+ client calls AND 3+ team 1:1s on the same day, repeatedly',
    ],
  },
  // ===== PHASE 5: TEAM LEAD ERA (January - February 2026) =====
  {
    date: 'January 2026',
    title: 'CSM Team Meeting: The Restructuring',
    tag: 'COMPANY TRANSFORMATION',
    description: 'Participated in the pivotal company-wide CSM meeting where Michael and Eric announced major changes: leaderboard system, bonus structure tied to churn/upsells/response time, Eric as Head of Customer Success, and twice-weekly 1:1s for all CSMs. Ryan emerged as a voice of experience in the room, already running processes that the company was now formalizing.',
    details: [
      'Leaderboard announced: churn %, upsells, response time, task completion',
      'Bonus structure: 1-3% commission on managed revenue based on churn rate',
      'Eric Shirk elevated to Head of Customer Success',
      'Michael committed to more active management and training investment',
      'Ryan already running 1:1s and mentoring before it was formalized',
      'Sold website buyout to client for $1,000 (earning $100 commission) - cited by Michael as example',
      'Charlie voiced frustrations about difficult clients - Ryan understood from experience',
    ],
  },
  {
    date: 'February 2026',
    title: 'CS Platform Command Center',
    tag: 'PLATFORM ENGINEERING',
    description: 'Co-built the StoneSystems CS Platform, a Next.js 16/Supabase application serving as the company-wide command center for 1,300+ GoHighLevel sub-accounts. The platform Ryan helped build became the system Michael announced the entire team would use - replacing ClickUp and manual tracking.',
    details: [
      'Weighted lead generation formula: total_leads = lead_contacts + (opportunities x 2)',
      'Action Queue with priority weights: Technical Failures (100W), Milestone Stalls (80W), Routine Nudges (50W)',
      'Real-time sync engine with 100ms throttle for GHL rate limit compliance',
      'Task Dashboard became single source of truth - replacing all manual tracking',
    ],
  },
  // ===== PHASE 6: EXPLOSION (March 2026) =====
  {
    date: 'Early March 2026',
    title: 'GBP and SEO Automation at Scale',
    tag: 'AUTOMATION',
    description: 'Automated Google Business Profile management and Google Search Console verification across the entire portfolio. The domain knowledge that Michael flagged as a gap in July 2025 was now being deployed at scale through browser automation. Meta tags across 77/78 client websites.',
    details: [
      'Automated GBP profile creation with browser automation for 100+ profiles',
      'Batch verification tracking across 5+ simultaneous verifications',
      'GSC meta tags deployed on 77/78 client websites',
      'Oscar\'s 6-step SEO methodology codified into automated playbooks',
      'NAP citation consistency enforcement (verbatim matching across all directories)',
      'Primestar Home Services GBP suspension appeal and evidence compilation',
    ],
  },
  {
    date: 'March 14, 2026',
    title: 'Promoted to Co-CSM Team Lead',
    tag: 'PROMOTION',
    description: 'Nine months after a 1:1 where Michael identified communication and technical gaps, Ryan was promoted to Co-CSM Team Lead alongside Ben Zazueta. Now managing 12+ team members, running the same kind of coaching sessions Michael once ran with him. Authored a comprehensive SOP review identifying 7 priority updates that leadership adopted.',
    details: [
      'Co-Team Lead with Ben Zazueta, reporting to Michael Vanhoutte',
      'Team of 12+: Maria, Charlie, Andres, Brian, Oscar, Juan, Sidney, Michael S., Sydney, Jose, Sergio',
      'Weekly cadence: Monday projections, mid-week role-plays, Friday wrap-up',
      'Authored CSM Training Feedback: 7-section SOP review adopted by leadership',
      'Advocated for onboarding vs. follow-up department split (proposed to Eric April 1)',
      'Pushed to retire ClickUp in favor of CS Platform as single source of truth',
    ],
  },
  {
    date: 'March 14, 2026',
    title: 'The 12 Ryans: Autonomous AI Agent System',
    tag: 'AI INNOVATION',
    description: 'Architected 12 autonomous AI agents that replicate CSM operations at scale. Each agent owns a domain. The system runs on a tiered model strategy (Haiku/Sonnet/Opus) - the same kind of systematic thinking that turned early struggles into scalable processes.',
    details: [
      'ryan-intel: Daily portfolio scans, morning briefs, priority surfacing',
      'ryan-call-prep / ryan-post-call: Pre and post-call intelligence automation',
      'ryan-churn-shield: At-risk client detection and save strategies',
      'ryan-upsell: Opportunity identification and pitch drafting',
      'ryan-gbp / ryan-onboarding: Full client pipeline automation',
      'ryan-outreach / ryan-team-lead / ryan-compliance: Operations at scale',
      'ryan-aegis: Devil\'s advocate adversarial layer for stress-testing decisions',
      'oscar-followup: SEO optimization, citation building, client saves',
    ],
  },
  {
    date: 'March 16, 2026',
    title: 'Google Ads Mass Rollout',
    tag: 'REVENUE OPERATIONS',
    description: 'Led the mass deployment of Google Ads campaigns: 48 accounts created and 39 campaigns built in a single sprint. The same client management skills learned call-by-call in June 2025 were now being deployed programmatically at scale.',
    details: [
      '48 Google Ads accounts created programmatically',
      '39 campaigns built with optimized targeting at $30/day each',
      '83 additional clients queued pending Standard Access approval',
      'MCP server upgraded to v20, deployed to Railway',
      'Knowledge base deployed: 702 pgvector chunks, zero API dependency',
    ],
  },
  {
    date: 'March 22, 2026',
    title: '$5K Income Playbook and Revenue Strategy',
    tag: 'STRATEGY',
    description: 'Designed a systematic income scaling playbook from $2,050 to $5,000/month. The same clients Ryan had been managing one-by-one since June 2025 were now organized into waves of testimonials, referrals, and upsells - each with personalized outreach based on months of relationship building.',
    details: [
      '4-wave strategy: testimonials, referrals, upsells, client foundation fixes',
      'Personalized outreach for 30+ clients generating 440 to 73,256 leads',
      'Upsell strategies mapped to client profiles (LSA, SEO, Google Ads, AI SEO)',
      'Competitive bonus strategy targeting $1,450/month prize pool',
      'CLI tools built: 40% context savings, 50x cost reduction via MiniMax M2.5',
    ],
  },
  // ===== PHASE 7: THE PRESENT (April 2026) =====
  {
    date: 'March 26 - April 2026',
    title: 'Full Circle: From New Hire to Operations Architect',
    tag: 'THE PRESENT',
    description: '10 months after mock calls with Michael, Ryan runs a team of 12, manages 156+ clients at 0% churn, has built 12 AI agents, 48 Google Ads accounts, automated GBP/GSC/SEO pipelines, and is proposing organizational restructuring to leadership. The CSM who once struggled with email filters now builds the systems the entire company runs on.',
    details: [
      '0% churn rate maintained consistently - best on entire team',
      '156+ active clients managed with automated systems',
      '12 AI agents running daily operations autonomously',
      'Proposing CSM role specialization: Onboarding/Launch vs Support/Optimization',
      'Mentoring Oscar as company SEO expert with case study methodology',
      'Daily 1:1s with Jose, Oscar, Michael S. - same coaching Michael gave him',
      'Building SEO case studies to prove value and expand service offerings',
      '$1,050/month churn bonus earned through retention excellence',
    ],
  },
]

const payHistory = [
  { date: 'Jun 16', amount: 875, label: 'First paycheck' },
  { date: 'Jul 2', amount: 875, label: '' },
  { date: 'Jul 16', amount: 875, label: '' },
  { date: 'Aug 1', amount: 1750, label: 'Back-pay/bonus' },
  { date: 'Sep 2', amount: 950, label: '' },
  { date: 'Sep 16', amount: 875, label: '' },
  { date: 'Oct 1', amount: 875, label: '' },
  { date: 'Oct 16', amount: 875, label: 'Last $875' },
  { date: 'Nov 17', amount: 1000, label: 'RAISE' },
  { date: 'Dec 1', amount: 1000, label: '' },
  { date: 'Dec 16', amount: 1000, label: '' },
  { date: 'Dec 30', amount: 1100, label: 'Bonus' },
  { date: 'Jan 15', amount: 1000, label: '' },
  { date: 'Feb 2', amount: 1050, label: 'Churn bonus' },
  { date: 'Feb 17', amount: 1230, label: 'Highest yet' },
  { date: 'Mar 2', amount: 1000, label: '' },
  { date: 'Mar 16', amount: 1000, label: '' },
  { date: 'Apr 1', amount: 1000, label: '' },
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
  { date: 'Jun 2, 2025', event: 'Day 1: Fathom demo and mock onboarding calls with Michael' },
  { date: 'Jun 5, 2025', event: 'First mock calls. Michael coaches on confidence and preparation.' },
  { date: 'Jun 9, 2025', event: 'First live client call: Chris Mitchell, Noble Ridge Roofing' },
  { date: 'Jun 30, 2025', event: 'Completing multiple onboarding and launch calls daily across 10+ industries' },
  { date: 'Jul 30, 2025', event: 'Pivotal 1:1 with Michael. Gaps identified. Growth plan set.' },
  { date: 'Aug-Sep 2025', event: 'Technical mastery sprint: domains, A2P, GHL workflows, support calls' },
  { date: 'Oct-Nov 2025', event: 'Portfolio past 80+ clients. Started mentoring Andres, training new CSMs.' },
  { date: 'Dec 2025', event: 'Running daily 1:1s with Maria, Charlie, Brian, Henry, Andres. 6+ calls/day.' },
  { date: 'Jan 2026', event: 'CSM restructuring announced. Ryan already doing what the company formalized.' },
  { date: 'Feb 2026', event: 'CS Platform Command Center built. Task Dashboard replaces ClickUp.' },
  { date: 'Mar 1, 2026', event: 'GBP automation at scale. SEO pipeline. 77/78 meta tags deployed.' },
  { date: 'Mar 14, 2026', event: 'Promoted to Co-CSM Team Lead. 12 AI agents deployed. Knowledge base live.' },
  { date: 'Mar 16, 2026', event: 'Google Ads mass rollout: 48 accounts, 39 campaigns in one sprint.' },
  { date: 'Apr 2026', event: '156+ clients, 0% churn, 12 agents, 12 team members. Proposing org restructuring.' },
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
            From mock calls on day one to managing 156+ clients, 12 AI agents, and a team of 12
            in 10 months. This is the story of what happens when you take every piece of feedback,
            close every gap, and build systems where others build excuses.
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

      <section className={styles.paySection}>
        <h2 className={styles.sectionTitle}>Compensation Growth</h2>
        <p className={styles.sectionSubtitle}>Mercury payment history: $875 biweekly to $1,000+ with bonuses. Verified from Gmail.</p>
        <div className={styles.payChart}>
          {payHistory.map((pay, i) => {
            const maxAmount = 1750
            const height = Math.max((pay.amount / maxAmount) * 200, 20)
            const isRaise = pay.label === 'RAISE'
            const isSpecial = pay.label && pay.label !== ''
            return (
              <div key={i} className={styles.payBar}>
                <div className={styles.payAmount}>${pay.amount.toLocaleString()}</div>
                <div
                  className={`${styles.payBarFill} ${isRaise ? styles.payBarRaise : ''}`}
                  style={{ height: `${height}px` }}
                />
                <div className={styles.payDate}>{pay.date}</div>
                {isSpecial && <div className={`${styles.payLabel} ${isRaise ? styles.payLabelRaise : ''}`}>{pay.label}</div>}
              </div>
            )
          })}
        </div>
        <div className={styles.payAnnotation}>
          <div className={styles.payAnnotationLine}></div>
          <p>$875/biweekly (Jun-Oct 2025) &#8594; $1,000/biweekly (Nov 2025+) &#8594; $1,230 peak with bonuses (Feb 2026)</p>
        </div>
      </section>

      <section id="contributions" className={styles.contributionsSection}>
        <h2 className={styles.sectionTitle}>The Full Story</h2>
        <p className={styles.sectionSubtitle}>
          10 months of growth, from new hire to team lead to operations architect
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
