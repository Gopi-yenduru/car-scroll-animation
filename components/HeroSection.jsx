import { useEffect, useRef } from 'react'

const stats = [
  { number: '58%', label: 'Increase in pick-up point use' },
  { number: '23%', label: 'Decreased in customer phone calls' },
  { number: '27%', label: 'Increase in pick-up point use' },
  { number: '40%', label: 'Decreased in customer phone calls' },
]

const headline = 'ITZFIZZ'

export default function HeroSection() {
  const carRef = useRef(null)
  const sectionRef = useRef(null)

  useEffect(() => {
    let gsap, ScrollTrigger

    const initGSAP = async () => {
      const gsapModule = await import('gsap')
      const scrollTriggerModule = await import('gsap/ScrollTrigger')
      gsap = gsapModule.gsap
      ScrollTrigger = scrollTriggerModule.ScrollTrigger
      gsap.registerPlugin(ScrollTrigger)

      // ── INTRO ANIMATIONS ──────────────────────────────────────────
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      // Nav
      tl.to('.nav', { opacity: 1, y: 0, duration: 0.8 }, 0.2)

      // Car entrance
      tl.to('.car-image', {
        opacity: 1,
        scale: 1,
        rotate: 0,
        duration: 1.4,
        ease: 'power4.out',
      }, 0.3)

      // Headline letters stagger
      tl.to('.headline span', {
        opacity: 1,
        y: 0,
        stagger: 0.05,
        duration: 0.7,
        ease: 'back.out(1.5)',
      }, 0.6)

      // Dividers
      tl.to('.stat-divider', {
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
      }, 1.2)

      // Stats
      tl.to('.stat-item', {
        opacity: 1,
        y: 0,
        stagger: 0.12,
        duration: 0.7,
        ease: 'power3.out',
      }, 1.3)

      // Scroll indicator
      tl.to('.scroll-indicator', {
        opacity: 1,
        duration: 0.6,
      }, 1.8)

      // ── SCROLL ANIMATION ──────────────────────────────────────────
      const car = carRef.current
      const section = sectionRef.current

      if (!car || !section) return

      // Car moves right + scales down + rotates as user scrolls
      gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.2,
        },
      })
        .to(car, {
          x: '35vw',
          y: '-5vh',
          scale: 0.75,
          rotate: 8,
          ease: 'none',
        })
        .to('.headline-container', { y: '-20vh', opacity: 0.2, ease: 'none' }, 0)
        .to('.stats-container', { y: '8vh', opacity: 0, ease: 'none' }, 0)

      // ── BELOW-FOLD SCROLL REVEALS ─────────────────────────────────
      gsap.utils.toArray('.section-label').forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          duration: 0.6,
          scrollTrigger: { trigger: el, start: 'top 85%' },
        })
      })

      gsap.utils.toArray('.section-title').forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 85%' },
        })
      })

      gsap.utils.toArray('.section-body').forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 85%' },
        })
      })

      gsap.utils.toArray('.feature-card').forEach((el, i) => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          delay: i * 0.1,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%' },
        })
      })
    }

    initGSAP()

    return () => {
      // Cleanup ScrollTrigger on unmount
      import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
        ScrollTrigger.getAll().forEach((t) => t.kill())
      })
    }
  }, [])

  return (
    <>
      <div className="noise-overlay" aria-hidden="true" />

      {/* Navigation */}
      <nav className="nav" style={{ transform: 'translateY(-10px)' }}>
        <div className="nav-logo">ITZFIZZ</div>
        <ul className="nav-links">
          {['Platform', 'Solutions', 'Pricing', 'Contact'].map((link) => (
            <li key={link}>
              <a href="#">{link}</a>
            </li>
          ))}
        </ul>
      </nav>

      {/* ── HERO SECTION ── */}
      <section className="hero-section" ref={sectionRef}>
        <div className="hero-bg-gradient" />
        <div className="hero-accent-line" />

        {/* Car */}
        <div className="car-container">
          <img
            ref={carRef}
            className="car-image"
            src="/car-scroll-animation/car.svg"
            alt="McLaren 720S top view"
          />
        </div>

        {/* Headline */}
        <div className="headline-container">
          <h1 className="headline" aria-label={`WELCOME ${headline}`}>
            {'WELCOME\u00A0'.split('').map((char, i) => (
              <span key={`w-${i}`} style={{ display: 'inline-block' }}>
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
            <br />
            {headline.split('').map((char, i) => (
              <span key={`h-${i}`} style={{ display: 'inline-block' }}>
                {char}
              </span>
            ))}
          </h1>
        </div>

        {/* Stats */}
        <div className="stats-container">
          {stats.map((stat, i) => (
            <>
              {i > 0 && <div className="stat-divider" key={`div-${i}`} />}
              <div className="stat-item" key={stat.number + i}>
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            </>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="scroll-indicator" aria-hidden="true">
          <div className="scroll-indicator-line" />
          <span className="scroll-indicator-text">Scroll</span>
        </div>
      </section>

      {/* ── BELOW-FOLD CONTENT ── */}
      <div className="below-fold">
        <div className="section-content">
          <p className="section-label">Platform Overview</p>
          <h2 className="section-title">REDEFINING LAST-MILE DELIVERY</h2>
          <p className="section-body">
            ITZFIZZ is a smart logistics platform built to reduce friction between
            businesses and their customers. Our pick-up point network cuts costs,
            eliminates missed deliveries, and gives customers the control they expect.
          </p>

          {/* Feature cards */}
          <div className="feature-grid">
            {[
              { n: '01', title: 'Smart Routing', desc: 'AI-optimised routes that adapt in real time to traffic, demand, and fleet availability.' },
              { n: '02', title: 'Pick-Up Network', desc: 'Over 2,400 partner pick-up points nationwide — open early to late, seven days a week.' },
              { n: '03', title: 'Live Tracking', desc: 'End-to-end visibility for both merchants and recipients. No more "where is my order?" calls.' },
              { n: '04', title: 'Analytics Suite', desc: 'Actionable dashboards that surface trends before they become costly operational surprises.' },
            ].map((f) => (
              <div className="feature-card" key={f.n}>
                <div className="feature-number">{f.n}</div>
                <div className="feature-title">{f.title}</div>
                <p className="feature-desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="footer">
          <span className="footer-text">© 2024 ITZFIZZ — All rights reserved</span>
          <span className="footer-text">Built with Next.js · GSAP · Tailwind</span>
        </footer>
      </div>
    </>
  )
}
