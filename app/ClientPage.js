'use client'
import styles from './page.module.css'
import { FadeIn, SlideIn, TextReveal, StaggerContainer, StaggerItem, HoverTilt, Divider, ParallaxSection } from './components/Motion'

export function ClientPage({ stats, contributions, payHistory, recentCalls, timeline }) {
  return (
    <div className={styles.container}>
      {/* NAV */}
      <nav className={styles.nav}>
        <span className={styles.navName}>Ryan Grant</span>
        <div className={styles.navLinks}>
          <a href="#story" className={styles.navLink}>Story</a>
          <a href="#calls" className={styles.navLink}>Calls</a>
          <a href="#timeline" className={styles.navLink}>Timeline</a>
          <a href="mailto:ryan@stonesystems.io" className={styles.navLink}>Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <header className={styles.hero}>
        <FadeIn delay={0.2}>
          <p className={styles.heroLabel}>StoneSystems / Customer Success</p>
        </FadeIn>
        <TextReveal>
          <h1 className={styles.heroTitle}>
            From mock calls on day one to managing 156 clients, 12 AI agents, and a team of 12
            in <span className={styles.heroTitleAccent}>ten months.</span>
          </h1>
        </TextReveal>
        <FadeIn delay={0.6}>
          <div className={styles.heroMeta}>
            <div className={styles.heroMetaItem}>
              <span className={styles.heroMetaLabel}>Role</span>
              <span className={styles.heroMetaValue}>CSM Team Lead</span>
            </div>
            <div className={styles.heroMetaItem}>
              <span className={styles.heroMetaLabel}>Period</span>
              <span className={styles.heroMetaValue}>June 2025 - Present</span>
            </div>
            <div className={styles.heroMetaItem}>
              <span className={styles.heroMetaLabel}>Reports to</span>
              <span className={styles.heroMetaValue}>Michael Vanhoutte</span>
            </div>
            <div className={styles.heroMetaItem}>
              <span className={styles.heroMetaLabel}>Churn rate</span>
              <span className={styles.heroMetaValue}>0%</span>
            </div>
          </div>
        </FadeIn>
      </header>

      {/* STATS */}
      <section className={styles.statsSection}>
        <FadeIn>
          <p className={styles.sectionLabel}>#Numbers</p>
        </FadeIn>
        <StaggerContainer className={styles.statsGrid} stagger={0.08}>
          {stats.map((stat) => (
            <StaggerItem key={stat.label} className={styles.statCard}>
              <div className={styles.statNumber}>{stat.number}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* PAY */}
      <section className={styles.paySection}>
        <FadeIn>
          <p className={styles.sectionLabel}>#Compensation</p>
          <h2 className={styles.sectionTitle}>Pay progression, verified from Mercury via Gmail.</h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className={styles.payChart}>
            {payHistory.map((pay, i) => {
              const maxAmount = 1750
              const height = Math.max((pay.amount / maxAmount) * 180, 16)
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
            <p>$875/biweekly (Jun-Oct 2025) &#8594; $1,000/biweekly (Nov 2025+) &#8594; $1,230 peak with bonuses (Feb 2026)</p>
          </div>
        </FadeIn>
      </section>

      {/* STORY */}
      <section id="story" className={styles.contributionsSection}>
        <FadeIn>
          <p className={styles.sectionLabel}>#Story</p>
          <h2 className={styles.sectionTitle}>Ten months of growth, told chronologically.</h2>
        </FadeIn>
        <div className={styles.contributionsGrid}>
          {contributions.map((item, idx) => (
            <HoverTilt key={item.title}>
              <FadeIn delay={0.05}>
                <div className={styles.contributionCard}>
                  <div className={styles.contributionLeft}>
                    <div className={styles.contributionDate}>{item.date}</div>
                    <div className={styles.contributionTag}>{item.tag}</div>
                  </div>
                  <div className={styles.contributionRight}>
                    <h3 className={styles.contributionTitle}>{item.title}</h3>
                    <p className={styles.contributionDescription}>{item.description}</p>
                    <ul className={styles.detailsList}>
                      {item.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>
            </HoverTilt>
          ))}
        </div>
      </section>

      {/* CALLS */}
      <section id="calls" className={styles.callsSection}>
        <FadeIn>
          <p className={styles.sectionLabel}>#Recent Calls</p>
          <h2 className={styles.sectionTitle}>Live from Fathom AI.</h2>
        </FadeIn>
        <StaggerContainer className={styles.callsGrid} stagger={0.06}>
          {recentCalls.map((call, i) => (
            <StaggerItem key={i} className={styles.callCard}>
              <div className={styles.callHeader}>
                <span className={styles.callDate}>{call.date}</span>
                <span className={styles.callActions}>{call.actions} actions</span>
              </div>
              <h3 className={styles.callTitle}>{call.title}</h3>
              <p className={styles.callSummary}>{call.summary}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* TIMELINE */}
      <section id="timeline" className={styles.timelineSection}>
        <FadeIn>
          <p className={styles.sectionLabel}>#Timeline</p>
          <h2 className={styles.sectionTitle}>From CSM to Team Lead to Operations Architect.</h2>
        </FadeIn>
        <div className={styles.timeline}>
          {timeline.map((item, i) => (
            <FadeIn key={i} delay={i * 0.05} y={20}>
              <div className={styles.timelineItem}>
                <div className={styles.timelineDot}></div>
                <div className={styles.timelineDate}>{item.date}</div>
                <div className={styles.timelineEvent}>{item.event}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className={styles.philosophySection}>
        <FadeIn>
          <p className={styles.sectionLabel}>#Philosophy</p>
          <h2 className={styles.sectionTitle}>Science of Scaling.</h2>
        </FadeIn>
        <StaggerContainer className={styles.philosophyGrid} stagger={0.1}>
          <StaggerItem className={styles.philosophyCard}>
            <h3>Frame</h3>
            <p>Does this move the needle toward scaling, or is it maintenance noise?</p>
          </StaggerItem>
          <StaggerItem className={styles.philosophyCard}>
            <h3>Floor</h3>
            <p>Is this above the minimum threshold of impact worth attention?</p>
          </StaggerItem>
          <StaggerItem className={styles.philosophyCard}>
            <h3>Focus</h3>
            <p>Is this the single highest-signal action right now?</p>
          </StaggerItem>
        </StaggerContainer>
        <FadeIn>
          <blockquote className={styles.quote}>
            "Execute first, report results. Don't ask permission for non-destructive actions.
            Pick the best option and run it. Chain actions: if step 1 reveals step 2 is needed, do both before responding."
          </blockquote>
        </FadeIn>
      </section>

      {/* TECH */}
      <section className={styles.techSection}>
        <FadeIn>
          <p className={styles.sectionLabel}>#Stack</p>
        </FadeIn>
        <StaggerContainer className={styles.techGrid} stagger={0.03}>
          {['Next.js 16', 'Supabase', 'GoHighLevel API', 'Claude AI', 'Playwright', 'pgvector', 'MiniMax M2.5', 'Google Ads API v20', 'Google Search Console', 'Google Business Profile', 'Fathom AI', 'Vercel', 'Railway', 'OpenRouter', 'Node.js CLI', 'Ruflo'].map((tech) => (
            <StaggerItem key={tech}>
              <span className={styles.techBadge}>{tech}</span>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div className={styles.footerLeft}>
          <p>Ryan Grant</p>
          <p>ryan@stonesystems.io</p>
        </div>
        <div className={styles.footerRight}>
          Design inspired by Millls / Pixasquare. Built with Next.js + Motion. Deployed on Vercel.
        </div>
      </footer>
    </div>
  )
}
