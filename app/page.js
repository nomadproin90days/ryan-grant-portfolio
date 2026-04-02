import styles from './page.module.css'
import { ClientPage } from './ClientPage'

const stats = [
  { number: '10', label: 'Months at StoneSystems' },
  { number: '156+', label: 'Active clients managed' },
  { number: '12', label: 'AI agents built' },
  { number: '12+', label: 'Team members managed' },
  { number: '0%', label: 'Churn rate (best in class)' },
  { number: '73K+', label: 'Client leads generated' },
]

const contributions = [
  {
    date: 'June 2, 2025',
    title: 'Day One: Mock Calls with Michael',
    tag: 'The Beginning',
    description: 'First day at StoneSystems. Started with a Fathom demo, then immediately into mock onboarding calls with Michael Vanhoutte. Coached on confidence, Lead Connector setup, review funnels, and the art of appearing prepared while learning on the fly.',
    details: [
      'First ever Fathom recording: June 2, 2025',
      'Mock onboarding calls with Michael coaching in real-time',
      '"Confidence and appearing prepared are crucial during client calls"',
    ],
  },
  {
    date: 'June 9 - 30, 2025',
    title: 'First Live Clients and Rapid Ramp',
    tag: 'Onboarding',
    description: 'One week after mock calls, taking live client onboarding calls. First real client: Chris Mitchell, Noble Ridge Roofing. By month end, handling multiple daily calls across roofing, HVAC, lawn care, tile, plumbing, cleaning, and more.',
    details: [
      'First live call: Chris Mitchell, Noble Ridge Roofing (June 9)',
      'GBP setup, domain access collection, customer list exports',
      'By June 30: daily launch calls across 10+ industries',
    ],
  },
  {
    date: 'July 30, 2025',
    title: 'The 1:1 That Changed Everything',
    tag: 'Growth',
    description: 'Candid 1:1 with Michael. Two clients had escalated over incomplete domain redirects, slow communication, and perceived lack of technical knowledge. Michael coached on email filters, GHL conversation management, and the importance of writing down unknowns rather than guessing. This became the catalyst for systematic self-improvement.',
    details: [
      'Gaps identified: email management, response time, domain/redirect knowledge',
      'Michael coached on bottom-to-top GHL conversation method',
      '"If you don\'t know something, say I\'ll find out. Never bluff the client."',
    ],
  },
  {
    date: 'August - September 2025',
    title: 'Closing Every Gap',
    tag: 'Skill Development',
    description: 'Two months of deliberate technical mastery. Domains, redirects, GoDaddy delegation, A2P messaging compliance, GHL workflows. Call volume increased. Started handling support calls alongside onboarding, showing range beyond new client setup.',
    details: [
      'Mastered domain management across all major registrars',
      'A2P 10DLC compliance, GHL calendar/SMS/email workflows',
      'Support calls added: troubleshooting live client issues in real-time',
    ],
  },
  {
    date: 'October - November 2025',
    title: 'Emerging as a Leader',
    tag: 'Leadership Emergence',
    description: 'Portfolio past 80+ clients. Started naturally mentoring other CSMs. Running informal 1:1s, helping navigate difficult clients and GHL workflows. Training Andres through live call practice with real clients and real stakes.',
    details: [
      'Portfolio grew past 80+ active clients',
      'Assigned Andres live launch calls as training exercise',
      'Developed pre-call strategy technique adopted by the team',
    ],
  },
  {
    date: 'November 17, 2025',
    title: 'Pay Raise: $875 to $1,000 Biweekly',
    tag: 'Milestone',
    description: 'Mercury records show the pay bump from $875 to $1,000 biweekly on November 17. This was the real promotion moment, before the formal title came months later. The raise came as Ryan was running daily 1:1s with 5+ team members while maintaining a full client call schedule.',
    details: [
      'Verified via Mercury payment records in Gmail',
      '$875 biweekly (Jun-Oct) to $1,000 biweekly (Nov+)',
      'Peak paycheck: $1,230 in February 2026 with bonuses',
    ],
  },
  {
    date: 'December 2025',
    title: 'Daily 1:1s with Five Team Members',
    tag: 'Team Management',
    description: 'The inflection point from individual contributor to people manager. Daily 1:1s with Maria, Charlie, Brian, Henry, and Andres. Simultaneously maintaining 6+ client calls per day. Some days: three 1:1s and three client calls back-to-back.',
    details: [
      'Maria: daily sessions (Dec 2-23, nearly every day)',
      'Charlie: 3x/week, Brian: daily, Henry: 2x/week, Andres: weekly',
      '6+ client calls AND 3+ team 1:1s on the same day, repeatedly',
    ],
  },
  {
    date: 'January 2026',
    title: 'Company Restructuring',
    tag: 'Transformation',
    description: 'Michael and Eric announced major changes: leaderboard, bonus structure, Eric as Head of CS. Ryan was already running the processes the company was now formalizing. Sold a $1,000 website buyout that Michael cited as an example to the entire team.',
    details: [
      'Leaderboard launched: churn %, upsells, response time, task completion',
      'Already doing 1:1s and mentoring before it was formally required',
      '$1,000 website buyout sale cited by Michael as example to team',
    ],
  },
  {
    date: 'February 2026',
    title: 'CS Platform Command Center',
    tag: 'Engineering',
    description: 'Co-built the CS Platform: Next.js 16, Supabase, real-time GHL sync. Action Queue with weighted prioritization. The Task Dashboard became the single source of truth, replacing ClickUp and all manual tracking company-wide.',
    details: [
      'Weighted lead formula: total_leads = contacts + (opportunities x 2)',
      'Action Queue: Technical Failures (100W), Milestone Stalls (80W), Routine Nudges (50W)',
      'Real-time sync engine with 100ms throttle for GHL rate limits',
    ],
  },
  {
    date: 'Early March 2026',
    title: 'GBP and SEO Automation at Scale',
    tag: 'Automation',
    description: 'The domain knowledge Michael flagged as a gap in July 2025 was now being deployed at scale through browser automation. GBP profiles, verification flows, GSC meta tags across 77/78 client websites.',
    details: [
      'Automated GBP creation for 100+ profiles',
      '77/78 client websites with meta tags deployed',
      'Oscar\'s 6-step SEO methodology codified into automation',
    ],
  },
  {
    date: 'March 14, 2026',
    title: 'Promoted to Co-CSM Team Lead',
    tag: 'Promotion',
    description: 'Nine months after Michael identified communication and technical gaps, Ryan was promoted to Co-CSM Team Lead alongside Ben Zazueta. Authored a 7-section SOP review adopted by leadership. Proposed splitting onboarding and support into separate departments.',
    details: [
      'Co-Team Lead with Ben Zazueta, reporting to Michael Vanhoutte',
      'Authored CSM Training Feedback: 7-section SOP review adopted by leadership',
      'Proposed onboarding vs. support department split (April 1)',
    ],
  },
  {
    date: 'March 14, 2026',
    title: 'The 12 Ryans: AI Agent System',
    tag: 'Innovation',
    description: 'Architected 12 autonomous AI agents that replicate CSM operations at scale. Each agent owns a domain. Tiered model strategy (Haiku/Sonnet/Opus) optimizes cost while maximizing output.',
    details: [
      'ryan-intel, call-prep, post-call, churn-shield, upsell, gbp',
      'ryan-onboarding, outreach, team-lead, compliance',
      'ryan-aegis: adversarial stress-testing layer',
      'oscar-followup: SEO, citations, client saves',
    ],
  },
  {
    date: 'March 16, 2026',
    title: 'Google Ads Mass Rollout',
    tag: 'Revenue',
    description: '48 accounts created and 39 campaigns built in a single sprint. The same client management skills learned call-by-call in June 2025, now deployed programmatically at scale.',
    details: [
      '48 Google Ads accounts created programmatically',
      '39 campaigns built at $30/day with optimized targeting',
      'Knowledge base deployed: 702 pgvector chunks',
    ],
  },
  {
    date: 'March 22, 2026',
    title: '$5K Income Playbook',
    tag: 'Strategy',
    description: 'Systematic income scaling from $2,050 to $5,000/month. Clients managed one-by-one since June 2025 organized into waves of testimonials, referrals, and upsells with personalized outreach based on months of relationship building.',
    details: [
      '4-wave strategy: testimonials, referrals, upsells, client fixes',
      'Personalized outreach for 30+ clients (440 to 73,256 leads)',
      'CLI tools: 40% context savings, 50x cost reduction',
    ],
  },
  {
    date: 'April 2026',
    title: 'Full Circle',
    tag: 'The Present',
    description: 'Ten months after mock calls with Michael, Ryan runs a team of 12, manages 156+ clients at 0% churn, has built 12 AI agents, 48 Google Ads accounts, and automated pipelines. The CSM who struggled with email filters now builds the systems the entire company runs on.',
    details: [
      '0% churn rate, best on entire team',
      '156+ active clients with automated systems',
      'Proposing CSM role specialization to leadership',
      'Mentoring Oscar as company SEO expert',
      '$1,050/month churn bonus from retention excellence',
    ],
  },
]

const payHistory = [
  { date: 'Jun 16', amount: 875, label: '' },
  { date: 'Jul 2', amount: 875, label: '' },
  { date: 'Jul 16', amount: 875, label: '' },
  { date: 'Aug 1', amount: 1750, label: 'Back-pay' },
  { date: 'Sep 2', amount: 950, label: '' },
  { date: 'Sep 16', amount: 875, label: '' },
  { date: 'Oct 1', amount: 875, label: '' },
  { date: 'Oct 16', amount: 875, label: 'Last $875' },
  { date: 'Nov 17', amount: 1000, label: 'RAISE' },
  { date: 'Dec 1', amount: 1000, label: '' },
  { date: 'Dec 16', amount: 1000, label: '' },
  { date: 'Dec 30', amount: 1100, label: 'Bonus' },
  { date: 'Jan 15', amount: 1000, label: '' },
  { date: 'Feb 2', amount: 1050, label: '' },
  { date: 'Feb 17', amount: 1230, label: 'Peak' },
  { date: 'Mar 2', amount: 1000, label: '' },
  { date: 'Mar 16', amount: 1000, label: '' },
  { date: 'Apr 1', amount: 1000, label: '' },
]

const recentCalls = [
  { date: 'Apr 2', title: 'Ryan & Oscar 1-1 Client Meeting', summary: 'Defined new SEO strategy. Aaron Salas selected as case study. Andre\'s neglected clients identified for reassignment.', actions: 9 },
  { date: 'Apr 1', title: 'Ryan & Oscar 1-1 Client Meeting', summary: 'Proposed CSM role specialization to Eric. Ryan handles launches, Oscar handles optimization.', actions: 4 },
  { date: 'Mar 31', title: 'Ryan - Jose 1-1 Client Meeting', summary: 'Mentoring session with Jose on client management and GHL platform navigation.', actions: 3 },
  { date: 'Mar 30', title: 'Michael Cummings - Launch Call', summary: 'New client onboarding. Full launch walkthrough including GBP, GHL setup, expectations.', actions: 7 },
  { date: 'Mar 30', title: 'Darren Hicks - Launch Call', summary: 'Subdomain resolution for Defense Builders. C-Panel redirect configuration.', actions: 5 },
  { date: 'Mar 30', title: 'Ryan & Oscar 1-1 Training', summary: 'Training on SEO methodology, client follow-up techniques, and tool mastery.', actions: 6 },
]

const timeline = [
  { date: 'Jun 2, 2025', event: 'Day 1: Fathom demo and mock onboarding calls with Michael' },
  { date: 'Jun 9, 2025', event: 'First live client call: Chris Mitchell, Noble Ridge Roofing' },
  { date: 'Jul 30, 2025', event: 'Pivotal 1:1 with Michael. Gaps identified. Growth plan set.' },
  { date: 'Aug - Sep', event: 'Technical mastery sprint: domains, A2P, GHL workflows' },
  { date: 'Oct - Nov', event: 'Portfolio past 80+. Mentoring new CSMs with live call training.' },
  { date: 'Nov 17, 2025', event: 'Pay raise from $875 to $1,000 biweekly via Mercury.' },
  { date: 'Dec 2025', event: 'Daily 1:1s with 5 team members. 6+ calls per day.' },
  { date: 'Jan 2026', event: 'Company restructuring. Ryan already doing what they formalized.' },
  { date: 'Feb 2026', event: 'CS Platform Command Center built. Task Dashboard live.' },
  { date: 'Mar 14, 2026', event: 'Promoted to Co-CSM Team Lead. 12 AI agents deployed.' },
  { date: 'Mar 16, 2026', event: 'Google Ads mass rollout: 48 accounts, 39 campaigns.' },
  { date: 'Apr 2026', event: '156+ clients, 0% churn, 12 agents, 12 team members.' },
]

export default function Home() {
  return <ClientPage
    stats={stats}
    contributions={contributions}
    payHistory={payHistory}
    recentCalls={recentCalls}
    timeline={timeline}
  />
}
