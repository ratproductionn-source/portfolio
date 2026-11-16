import { useEffect, useState } from 'react'
import { content } from './content.js'

const shell = 'mx-auto w-full max-w-[1296px] px-5 sm:px-8 xl:px-12'
const telegram = 'https://t.me/Ratofficer'
const email = 'mailto:naratoffice@gmail.com'
const navTargets = ['#about', '#approach', '#work', '#contact']
const primaryButton = 'inline-flex min-h-13 items-center justify-center gap-4 rounded-lg bg-gold px-6 font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-[#e7ba52]'
const outlineButton = 'inline-flex min-h-13 items-center justify-center gap-4 rounded-lg border border-line-strong bg-ink/60 px-6 font-semibold text-warm transition hover:-translate-y-0.5 hover:border-gold hover:bg-gold/10'

function ArrowRight({ className = 'size-5' }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" /></svg>
}

function ArrowUpRight({ className = 'size-5' }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m7 17 10-10M8 7h9v9" /></svg>
}

function Pin() {
  return <svg className="size-4 shrink-0 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></svg>
}

function TelegramIcon() {
  return <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" aria-hidden="true"><path d="m21 3-3.2 17-5.4-4-3 2-1-5.2L3 11 21 3Z" /><path d="m8.4 12.8 9-7-5 10.2" /></svg>
}

function Lotus() {
  return <svg className="mx-auto size-12 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true"><path d="M12 3 C15 7.5 15 12.5 12 17 C9 12.5 9 7.5 12 3 Z" /><path d="M12 17 C8 16.5 5 13.5 3.5 9 C7.5 9.5 10.5 12.5 12 17 Z" /><path d="M12 17 C16 16.5 19 13.5 20.5 9 C16.5 9.5 13.5 12.5 12 17 Z" /><path d="M6 20.5 H18" /></svg>
}

function AngkorLine() {
  return (
    <svg className="angkor-line" viewBox="0 0 240 100" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M106 96 L106 65 Q106 26 120 8 Q134 26 134 65 L134 96" /><path d="M108 55 H132 M111 42 H129 M114 30 H126" />
      <path d="M77 96 L77 73 Q77 43 88 30 Q99 43 99 73 L99 96" /><path d="M79 64 H97 M82 52 H94" />
      <path d="M141 96 L141 73 Q141 43 152 30 Q163 43 163 73 L163 96" /><path d="M143 64 H161 M146 52 H158" />
      <path d="M49 96 L49 79 Q49 56 58 46 Q67 56 67 79 L67 96" /><path d="M51 70 H65" />
      <path d="M173 96 L173 79 Q173 56 182 46 Q191 56 191 79 L191 96" /><path d="M175 70 H189" />
      <path d="M24 88 H49 M67 88 H77 M99 88 H106 M134 88 H141 M163 88 H173 M191 88 H216" /><path d="M10 96 H230" />
    </svg>
  )
}

function SectionIndex({ number, label }) {
  return (
    <div className="flex items-center gap-3 text-muted">
      <span className="font-khmer text-[22px] leading-[1.3] text-gold">{number}</span>
      <span className="h-px w-7 bg-gold" aria-hidden="true" />
      <span lang="en" className="font-code text-[11px] tracking-[.09em]">{label}</span>
    </div>
  )
}

function SectionTitle({ id, lines, locale, className = '' }) {
  return (
    <h2 id={id} className={`mt-6 ${locale === 'km' ? 'font-khmer font-normal leading-[1.35]' : 'font-heading font-bold leading-[1.17] tracking-[-.055em]'} text-[clamp(43px,4.5vw,64px)] [overflow-wrap:anywhere] ${className}`}>
      <span className="block">{lines[0]}</span>
      <span className="block text-gold">{lines[1]}</span>
    </h2>
  )
}

function ApproachIcon({ index }) {
  const paths = [
    <><circle cx="24" cy="24" r="15" /><circle cx="24" cy="24" r="5" /><path d="M24 3v9m0 24v9M3 24h9m24 0h9" /></>,
    <path d="m17 14-11 10 11 10m14-20 11 10-11 10M28 8l-8 32" />,
    <><path d="M7 30a18 18 0 1 0 4-17M7 10v9h9" /><path d="m18 25 5 5 9-11" /></>,
  ]
  return <svg className="size-11 text-gold" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.15" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[index]}</svg>
}

function ProjectVisual({ index }) {
  return (
    <div className={`project-visual ${index === 0 ? 'project-visual-one' : 'project-visual-two'}`} aria-hidden="true">
      {index === 0 ? (
        <div className="mock-browser">
          <div className="mock-browser-top"><span className="mock-dots"><i /><i /><i /></span><span>your-project.dev</span><span>↗</span></div>
          <div className="mock-browser-content">
            <div className="mock-small">YOUR NEXT IDEA STARTS HERE</div>
            <div className="mock-display">01<span>.</span></div>
            <div className="mock-bars"><i /><i /><i /></div>
            <div className="mock-button" />
          </div>
        </div>
      ) : (
        <div className="mock-poster">
          <div className="mock-poster-head"><span>CREATIVE / DIGITAL</span><span>✳</span></div>
          <div className="mock-poster-graphic"><div className="poster-circle circle-a" /><div className="poster-circle circle-b" /><div className="poster-circle circle-c" /><span>02</span></div>
          <div className="mock-poster-foot"><span>MAKE SOMETHING<br />MEANINGFUL.</span><span>↗</span></div>
        </div>
      )}
      <span className="visual-corner">0{index + 1} — 02</span>
    </div>
  )
}

function App() {
  const [locale, setLocale] = useState(() => {
    try { return localStorage.getItem('portfolio-language') === 'en' ? 'en' : 'km' }
    catch { return 'km' }
  })
  const [menuOpen, setMenuOpen] = useState(false)
  const t = content[locale]

  useEffect(() => {
    document.documentElement.lang = locale
    document.title = locale === 'km'
      ? 'Chheak Narat — និស្សិតអ្នកអភិវឌ្ឍន៍នៅកម្ពុជា'
      : 'Chheak Narat — Student Developer in Cambodia'
    try { localStorage.setItem('portfolio-language', locale) } catch { /* Storage may be unavailable. */ }
  }, [locale])

  useEffect(() => {
    if (!menuOpen) return
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [menuOpen])

  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')
    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'))
      return
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' })
    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only fixed top-3 left-3 z-50 rounded bg-gold px-4 py-2 text-ink">{locale === 'km' ? 'រំលងទៅមាតិកា' : 'Skip to content'}</a>
      <header id="top" className="relative z-20 border-b border-line-soft bg-ink">
        <div className={`${shell} flex min-h-18 items-center justify-between gap-6 lg:min-h-22`}>
          <a href="#top" className="flex shrink-0 items-center gap-3" aria-label="Chheak Narat — home">
            <span className="grid size-10 place-items-center rounded-[9px] bg-gold font-khmer text-[27px] leading-[1.5] text-ink sm:size-11" aria-hidden="true">ន</span>
            <span lang="en" className="font-heading text-[13px] leading-[1.05] font-bold sm:text-sm">CHHEAK<br />NARAT<span className="text-gold">.</span></span>
          </a>
          <nav className="ml-auto hidden items-center gap-5 lg:flex xl:gap-9" aria-label="Main navigation">
            {t.nav.map((label, index) => (
              <a key={navTargets[index]} href={navTargets[index]} className="text-sm font-medium text-secondary transition hover:text-gold">{label}</a>
            ))}
          </nav>
          <div className="flex items-center gap-2 lg:gap-4">
            <button
              type="button"
              onClick={() => setLocale(locale === 'km' ? 'en' : 'km')}
              className="min-h-11 whitespace-nowrap px-1 text-[13px] font-semibold"
              aria-label={locale === 'km' ? 'Switch to English' : 'ប្តូរទៅភាសាខ្មែរ'}
              title="Switch language"
            >
              <span className={locale === 'km' ? 'text-warm' : 'text-muted'}>ខ្មែរ</span>
              <span className="mx-2 text-[#65635e]">/</span>
              <span className={locale === 'en' ? 'text-warm' : 'text-muted'} lang="en">EN</span>
            </button>
            <a href={telegram} target="_blank" rel="noopener noreferrer" className="hidden min-h-11 items-center gap-4 rounded-lg bg-gold px-4 text-sm font-bold text-ink transition hover:-translate-y-0.5 hover:bg-[#e7ba52] lg:inline-flex">
              {t.talk}<ArrowRight className="size-4" />
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex size-11 flex-col items-center justify-center gap-1.5 rounded-lg border border-line-strong bg-card lg:hidden"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobileNav"
            >
              <span className={`h-0.5 w-5 bg-warm transition ${menuOpen ? 'translate-y-1 rotate-45' : ''}`} />
              <span className={`h-0.5 w-5 bg-warm transition ${menuOpen ? '-translate-y-1 -rotate-45' : ''}`} />
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav id="mobileNav" className="mobile-nav-enter absolute inset-x-0 top-full flex flex-col border-b border-line-strong bg-ink px-5 pb-5 shadow-2xl sm:px-8 lg:hidden" aria-label="Mobile navigation">
            {t.nav.map((label, index) => (
              <a key={navTargets[index]} href={navTargets[index]} onClick={() => setMenuOpen(false)} className="border-b border-line-soft py-3 text-base hover:text-gold">{label}</a>
            ))}
          </nav>
        )}
      </header>

      <main id="main">
        <section className="relative overflow-hidden" aria-labelledby="hero-title">
          <div className="hero-texture absolute inset-0 pointer-events-none" aria-hidden="true" />
          <div className={`${shell} relative grid items-center gap-7 lg:min-h-[680px] lg:grid-cols-[minmax(0,1.15fr)_minmax(360px,.85fr)]`}>
            <div className="hero-intro relative z-10 pt-14 pb-8 sm:pt-18 lg:py-18">
              <div className={`flex items-center gap-3 text-xs text-gold ${locale === 'en' ? 'font-code tracking-wider' : ''}`}>
                <span className="h-px w-7 bg-gold" aria-hidden="true" />
                <span>{t.heroTag}</span><span className="text-lg" aria-hidden="true">✳</span>
              </div>
              <h1 id="hero-title" className="mt-5 [overflow-wrap:anywhere]">
                <span className={`block ${locale === 'km' ? 'font-khmer text-[clamp(48px,5.6vw,78px)] leading-[1.31]' : 'font-heading text-[clamp(29px,3.1vw,41px)] leading-[1.35] font-medium tracking-[-.04em]'}`}>{t.hello}</span>
                <span className="mt-1 block whitespace-nowrap font-heading text-[clamp(70px,13vw,108px)] leading-[.98] font-bold tracking-[-.075em] lg:text-[clamp(75px,8.2vw,116px)]" lang="en">Chheak<br />Narat<span className="text-gold">.</span></span>
              </h1>
              <p className={`mt-7 text-[clamp(20px,2vw,24px)] font-semibold ${locale === 'km' ? 'leading-[1.9]' : 'font-heading leading-[1.5]'}`}>
                {t.heroStatement[0]}<br className="hidden sm:block" /> {t.heroStatement[1]}
              </p>
              <p className="mt-1 max-w-[520px] font-heading text-base leading-[1.65] text-muted" lang="en">{t.heroDescription}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#work" className={primaryButton}>{t.viewWork}<ArrowRight /></a>
                <a href={telegram} target="_blank" rel="noopener noreferrer" className={outlineButton}>{t.sayHello}<ArrowUpRight /></a>
              </div>
              <div className="mt-11 flex flex-wrap items-center gap-2.5 text-xs text-muted">
                <Pin /><span>{t.location}</span><span className="mx-1 size-[3px] rounded-full bg-muted" aria-hidden="true" /><span className="font-code text-[11px]" lang="en">GMT +7</span>
              </div>
            </div>

            <div className="hero-art hero-portrait relative mx-auto h-[455px] w-full max-w-[490px] sm:h-[520px] lg:h-[600px]">
              <div className="art-orbit art-orbit-one" aria-hidden="true" />
              <div className="art-orbit art-orbit-two" aria-hidden="true" />
              <span className="art-caption art-caption-top" aria-hidden="true" lang="en">01 / AN INTRODUCTION</span>
              <div className="portrait-frame">
                <img src="/images/narat-portrait.webp" alt="Portrait of Chheak Narat" width="1122" height="1402" fetchPriority="high" decoding="async" className="h-full w-full object-cover saturate-[.87]" />
                <div className="portrait-shade" aria-hidden="true" />
                <AngkorLine />
              </div>
              <div className="code-card" aria-hidden="true">
                <div className="code-head"><span className="code-dots"><i /><i /><i /></span><span>hello.js</span><span className="text-sm">⌘</span></div>
                <div className="code-body"><span className="code-purple">const</span> developer = {'{'}<br />&nbsp;&nbsp;name: <span className="code-gold">"Chheak Narat"</span>,<br />&nbsp;&nbsp;home: <span className="code-gold">"Cambodia"</span>,<br />&nbsp;&nbsp;mindset: <span className="code-gold">"keep learning"</span><br />{'}'};<span className="code-cursor" /></div>
              </div>
              <span className="art-caption art-caption-bottom" aria-hidden="true" lang="en">MADE WITH CURIOSITY <span className="ml-2 text-base text-gold">↗</span></span>
            </div>
          </div>
          <div className={`${shell} hero-bottom-enter relative mt-3 flex items-center gap-5 pb-6 font-code text-[10px] tracking-wider text-muted sm:text-[11px] lg:mt-0`} lang="en">
            <span>SCROLL TO EXPLORE</span><span className="mr-auto h-px w-12 bg-line-strong sm:w-28" aria-hidden="true" /><span>PORTFOLIO / {new Date().getFullYear()}</span>
          </div>
        </section>

        <div className="border-y border-line bg-panel">
          <div className={`${shell} reveal grid sm:grid-cols-3`}>
            {t.facts.map(([title, subtitle], index) => (
              <div key={index} className="flex min-h-20 items-center gap-5 border-b border-line py-4 sm:min-h-27 sm:gap-3 sm:border-b-0 sm:border-l sm:px-4 xl:gap-5 xl:px-7 sm:last:border-r">
                <span className="self-start pt-1 font-code text-[11px] text-gold">0{index + 1}</span>
                <div className="flex flex-col"><strong className="font-semibold leading-[1.7]">{title}</strong><span lang="en" className="font-heading text-xs leading-normal text-muted">{subtitle}</span></div>
              </div>
            ))}
          </div>
        </div>

        <section id="about" aria-labelledby="about-title" className="scroll-mt-20 border-b border-line-soft py-20 md:py-28 xl:py-32">
          <div className={`${shell} reveal grid gap-8 md:grid-cols-2 md:gap-12 xl:gap-28`}>
            <div>
              <SectionIndex number="០១" label="ABOUT ME" />
              <SectionTitle id="about-title" lines={t.aboutTitle} locale={locale} />
              <span className="mt-7 hidden text-[90px] leading-none text-gold/20 md:block" aria-hidden="true">✳</span>
            </div>
            <div className="max-w-[590px] md:pt-11">
              <p className="text-[clamp(19px,2vw,23px)] leading-[1.9] font-medium">
                {t.aboutLeadStart} <span lang="en">NARAT CHHEAK</span>{locale === 'km' ? '។' : '.'} {t.aboutLeadEnd}
              </p>
              <p className="mt-5 leading-[1.95] text-muted">
                {t.aboutBodyStart} <a href={telegram} target="_blank" rel="noopener noreferrer" className="text-gold underline decoration-gold/50 underline-offset-4 transition-colors hover:text-[#e7ba52]">Telegram</a>{locale === 'km' ? '។' : '.'} {t.aboutBodyEnd}
              </p>
              <div className="mt-8 flex items-center gap-4">
                <span className="h-px w-9 bg-gold" aria-hidden="true" />
                <div className="flex flex-col" lang="en"><strong className="font-heading text-[17px] font-semibold">Narat Chheak</strong><span className="font-heading text-xs text-muted">Student developer · Cambodia</span></div>
              </div>
            </div>
          </div>
        </section>

        <section id="approach" aria-labelledby="approach-title" className="scroll-mt-20 border-b border-line-soft bg-panel py-20 md:py-28 xl:py-32">
          <div className={shell}>
            <div className="reveal flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div><SectionIndex number="០២" label="THE APPROACH" /><SectionTitle id="approach-title" lines={t.approachTitle} locale={locale} /></div>
              <p className="mb-3 font-heading text-[15px] leading-[1.6] text-muted" lang="en">A simple mindset for building<br />something meaningful.</p>
            </div>
            <div className="mt-10 grid gap-3 md:grid-cols-3 lg:mt-12">
              {t.approach.map((item, index) => (
                <article key={index} className="approach-card reveal flex min-h-[260px] flex-col justify-between rounded-xl border border-line-strong bg-card p-6 hover:border-gold/40 md:min-h-[310px]" style={{ transitionDelay: `${index * 90}ms` }}>
                  <div className="flex items-start justify-between text-gold"><span className="font-code text-[11px]">0{index + 1} / 03</span><ApproachIcon index={index} /></div>
                  <div>
                    <h3 className={`${locale === 'km' ? 'font-khmer text-[31px] leading-[1.4]' : 'font-heading text-[30px] leading-[1.3] font-semibold tracking-tight'}`}>{item.title}</h3>
                    <span className="mt-1 block font-code text-[10px] tracking-widest text-gold" lang="en">{item.english}</span>
                    <p className="mt-3 text-sm leading-[1.85] text-muted">{item.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="work" aria-labelledby="work-title" className="scroll-mt-20 border-b border-line-soft py-20 md:py-28 xl:py-32">
          <div className={shell}>
            <div className="reveal flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div><SectionIndex number="០៣" label="SELECTED WORK" /><SectionTitle id="work-title" lines={t.workTitle} locale={locale} /></div>
              <p className="mb-3 max-w-[275px] text-[15px] leading-[1.8] text-muted">{t.workIntro}</p>
            </div>
            <div className="mt-10 grid gap-9 md:grid-cols-2 md:gap-6 lg:mt-12">
              {t.projects.map((project, index) => (
                <article key={index} className="project-card reveal min-w-0" style={{ transitionDelay: `${index * 110}ms` }}>
                  <ProjectVisual index={index} />
                  <div className="flex justify-between gap-4 pt-6">
                    <div>
                      <span className="font-code text-[10px] tracking-wider text-gold" lang="en">PROJECT PLACEHOLDER / 0{index + 1}</span>
                      <h3 className={`mt-2 ${locale === 'km' ? 'font-khmer text-[28px] leading-[1.45]' : 'font-heading text-[28px] font-semibold tracking-tight'}`}>{project.title}</h3>
                      <p className="mt-1 text-sm leading-[1.75] text-muted">{project.body}</p>
                    </div>
                    <span className="font-heading text-2xl text-gold" aria-hidden="true">↗</span>
                  </div>
                </article>
              ))}
            </div>
            <p className="mt-8 text-[13px] text-muted"><span className="mr-2 text-gold" aria-hidden="true">✳</span>{t.projectNote}</p>
          </div>
        </section>

        <section id="contact" aria-labelledby="contact-title" className="relative scroll-mt-20 overflow-hidden border-b border-line-soft bg-panel py-24 text-center md:py-28">
          <div className="contact-glow" aria-hidden="true" />
          <div className={`${shell} reveal relative`}>
            <Lotus />
            <p className="mt-4 font-code text-[11px] tracking-wider text-gold" lang="en">HAVE SOMETHING IN MIND?</p>
            <SectionTitle id="contact-title" lines={t.contactTitle} locale={locale} className="contact-title" />
            <p className="mx-auto mt-4 max-w-[530px] leading-[1.9] text-muted">{t.contactBody}</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a href={telegram} target="_blank" rel="noopener noreferrer" className={`${primaryButton} min-w-[177px]`}><TelegramIcon />Telegram<span className="ml-2 font-heading text-xl">↗</span></a>
              <a href={email} className={`${outlineButton} min-w-[177px]`}>{t.emailMe}<span className="ml-2 font-heading text-xl">↗</span></a>
            </div>
            <a href={email} className="mt-6 inline-block font-heading text-sm text-muted underline decoration-line-strong underline-offset-5 hover:text-gold" lang="en">naratoffice@gmail.com</a>
          </div>
        </section>
      </main>

      <footer className="bg-ink">
        <div className={`${shell} flex min-h-27 flex-wrap items-center justify-between gap-5 py-6`}>
          <div className="flex items-center gap-2.5 whitespace-nowrap font-heading text-[13px] font-bold" lang="en">
            <span className="grid size-8 place-items-center rounded-md bg-gold font-khmer text-xl leading-normal text-ink" aria-hidden="true">ន</span>
            CHHEAK NARAT<span className="-ml-2 text-gold">.</span>
          </div>
          <p className="order-3 w-full text-[13px] text-muted md:order-0 md:w-auto">{t.footer}</p>
          <div className="flex items-center gap-4 whitespace-nowrap font-code text-[10px] text-muted" lang="en">
            <span>© {new Date().getFullYear()} CHHEAK NARAT</span>
            <a href="#top" className="grid size-9 place-items-center rounded-md border border-line-strong font-heading text-lg text-warm transition hover:border-gold hover:text-gold" aria-label="Back to top">↑</a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
