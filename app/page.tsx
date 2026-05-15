import Link from 'next/link';
import Nav from '@/components/Nav';

export const metadata = {
  title: 'Caye Group — AI Security for Small & Medium Business',
  description: 'AI is already in your business. We make sure security is too.',
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-navy-0">
      <Nav />

      {/* ── HERO ── */}
      <section className="bg-navy-1 px-[6%] pt-24 pb-28 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center relative overflow-hidden">
        <div className="absolute top-[-120px] right-[-120px] w-[520px] h-[520px] rounded-full
                        bg-[radial-gradient(circle,rgba(37,99,235,0.14)_0%,transparent_68%)] pointer-events-none" />
        <div className="absolute bottom-[-80px] left-[30%] w-[300px] h-[300px] rounded-full
                        bg-[radial-gradient(circle,rgba(245,158,11,0.06)_0%,transparent_70%)] pointer-events-none" />

        <div className="relative z-10">
          <div className="inline-flex items-center gap-1.5 bg-amber/10 border border-amber/25
                          text-amber-lt text-[11px] font-bold font-sora px-4 py-1.5 rounded-full
                          uppercase tracking-[0.09em] mb-6">
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
              <path d="M5.5 1 1 3.25V6C1 8.25 3.025 10.35 5.5 11 7.975 10.35 10 8.25 10 6V3.25L5.5 1Z" fill="#fbbf24"/>
            </svg>
            AI Security for Small &amp; Medium Business
          </div>

          <h1 className="font-sora text-[clamp(34px,4vw,56px)] font-bold leading-[1.1]
                         tracking-[-0.025em] text-white mb-5">
            Your Team Is Already Using AI.{' '}
            <em className="text-amber-lt not-italic">Is It Secure?</em>
          </h1>

          <p className="text-[17px] leading-[1.72] text-t-med max-w-[500px] mb-10">
            Most small businesses are using 5+ AI tools with no security policy, no governance,
            and no idea what data is leaving their building. Caye Group changes that —
            without slowing you down.
          </p>

          <div className="flex gap-3 flex-wrap mb-10">
            <Link href="/assess"
              className="bg-blue text-white font-sora font-bold text-[15px] px-7 py-3.5
                         rounded-lg no-underline flex items-center gap-2 hover:bg-blue-lt transition">
              Get Your Free Assessment
              <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
                <path d="M3 8h10M8.5 3.5 13 8l-4.5 4.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <a href="#contact"
              className="bg-transparent text-white font-sora font-semibold text-[15px] px-6 py-3.5
                         rounded-lg no-underline border border-t-dim flex items-center gap-2
                         hover:border-white/35 hover:bg-t-hair transition">
              Book a Call
            </a>
          </div>

          <div className="flex gap-6 flex-wrap">
            {['30-second assessment', 'No technical knowledge required', 'Built on OWASP LLM Top 10'].map(t => (
              <div key={t} className="flex items-center gap-1.5 text-[13px] text-t-low font-medium">
                <svg width="15" height="15" fill="none" viewBox="0 0 15 15">
                  <circle cx="7.5" cy="7.5" r="6" stroke="#22c55e" strokeWidth="1.4"/>
                  <path d="m4.5 7.5 2 2 4-4" stroke="#22c55e" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {t}
              </div>
            ))}
          </div>
        </div>

        {/* Hero visual — mock report card */}
        <div className="relative z-10 hidden lg:block">
          <div className="bg-navy-3 rounded-2xl border border-navy-5 overflow-hidden shadow-[0_32px_72px_rgba(0,0,0,0.5)]">
            <div className="bg-navy-4 px-6 py-5 flex justify-between items-start border-b border-t-hair">
              <div>
                <p className="text-[10px] font-bold font-sora uppercase tracking-[0.09em] text-t-low mb-1">AI Risk Report</p>
                <p className="font-sora font-bold text-white text-[16px]">Acme Law Group</p>
              </div>
              <span className="bg-red/15 border border-red/35 text-red-300 text-[10px] font-bold font-sora px-2.5 py-1 rounded-md tracking-[0.05em]">HIGH RISK</span>
            </div>
            <div className="px-6 py-5">
              <p className="text-[10px] font-bold font-sora uppercase tracking-[0.07em] text-t-low mb-2">Overall Risk Score</p>
              <div className="bg-navy-5 h-1.5 rounded-full mb-1.5">
                <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-amber to-red" />
              </div>
              <p className="text-[12px] text-red font-semibold mb-4">78 / 100 — Action Required</p>

              <div className="flex flex-col gap-1.5 mb-4">
                {[
                  { id: 'LLM01', name: 'Prompt Injection', sev: 'HIGH', c: 'text-red-300 bg-red/15 border-red/30' },
                  { id: 'LLM06', name: 'Sensitive Data Disclosure', sev: 'HIGH', c: 'text-red-300 bg-red/15 border-red/30' },
                  { id: 'LLM02', name: 'Insecure Output Handling', sev: 'MED', c: 'text-amber-lt bg-amber/15 border-amber/30' },
                ].map(r => (
                  <div key={r.id} className="bg-navy-4 border border-t-hair rounded-lg px-3 py-2.5 flex justify-between items-center">
                    <span className="font-sora font-semibold text-[12px] text-t-high">{r.id} · {r.name}</span>
                    <span className={`text-[10px] font-bold font-sora px-2 py-0.5 rounded border ${r.c}`}>{r.sev}</span>
                  </div>
                ))}
              </div>

              <p className="text-[10px] font-bold font-sora uppercase tracking-[0.07em] text-t-low mb-1.5">Tools Assessed</p>
              <div className="flex gap-1.5 flex-wrap">
                {['ChatGPT', 'Copilot', 'Notion AI', '+3 more'].map(t => (
                  <span key={t} className="bg-blue/15 text-blue-lt border border-blue/25 text-[11px] font-medium px-2.5 py-0.5 rounded-full">{t}</span>
                ))}
              </div>

              <div className="mt-4 pt-3 border-t border-t-hair flex items-center gap-2 text-[12px] font-semibold text-green">
                <svg width="14" height="14" fill="none" viewBox="0 0 14 14">
                  <circle cx="7" cy="7" r="5.5" stroke="#22c55e" strokeWidth="1.4"/>
                  <path d="m4 7 2 2 4-4" stroke="#22c55e" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Report delivered in 5 business days
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OWASP BAND ── */}
      <div className="bg-blue px-[6%] py-[18px] flex items-center justify-center gap-3">
        <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
          <path d="M8 1.5 2 4v5C2 12 4.8 14.8 8 15.5 11.2 14.8 14 12 14 9V4L8 1.5Z" fill="#fbbf24" fillOpacity="0.85"/>
        </svg>
        <p className="text-white text-[14px] font-medium text-center">
          Built on <strong className="text-amber-lt">OWASP LLM Top 10</strong> — the industry-standard AI risk framework used by enterprise security teams, now accessible for your business.
        </p>
      </div>

      {/* ── PROBLEM ── */}
      <section className="bg-navy-2 border-y border-t-hair px-[6%] py-[88px]">
        <p className="text-[11px] font-bold font-sora uppercase tracking-[0.1em] text-amber mb-3">The Problem</p>
        <h2 className="font-sora text-[clamp(28px,3vw,42px)] font-bold tracking-[-0.022em] leading-[1.16] text-white mb-3">
          The Risk Is Already Inside Your Business
        </h2>
        <p className="text-[17px] text-t-med max-w-[560px] leading-[1.68] mb-14">
          Shadow AI doesn&apos;t announce itself. By the time most businesses notice, data has already been exposed.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              bg: 'bg-amber/10 border-amber/20',
              icon: (
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M14 4C9.58 4 6 7.58 6 12v8l3-2.5 2.5 2 2.5-2 2.5 2 2.5-2 3 2.5V12C22 7.58 18.42 4 14 4Z" stroke="#f59e0b" strokeWidth="1.6" strokeLinejoin="round"/>
                  <circle cx="10.5" cy="12" r="1.2" fill="#f59e0b"/>
                  <circle cx="17.5" cy="12" r="1.2" fill="#f59e0b"/>
                  <line x1="4" y1="4" x2="24" y2="24" stroke="#f59e0b" strokeWidth="1.4" strokeLinecap="round" opacity="0.35"/>
                </svg>
              ),
              title: 'Shadow AI',
              body: "Your team is using ChatGPT, Notion AI, and Copilot whether you approved it or not. You just don't know what data they're sharing.",
            },
            {
              bg: 'bg-red/10 border-red/20',
              icon: (
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <rect x="5" y="3" width="14" height="18" rx="2" stroke="#ef4444" strokeWidth="1.6"/>
                  <line x1="8" y1="8" x2="16" y2="8" stroke="#ef4444" strokeWidth="1.3" strokeLinecap="round" opacity="0.5"/>
                  <line x1="8" y1="11.5" x2="16" y2="11.5" stroke="#ef4444" strokeWidth="1.3" strokeLinecap="round" opacity="0.5"/>
                  <line x1="8" y1="15" x2="13" y2="15" stroke="#ef4444" strokeWidth="1.3" strokeLinecap="round" opacity="0.5"/>
                  <circle cx="19" cy="19" r="6" fill="#162248" stroke="#ef4444" strokeWidth="1.4"/>
                  <line x1="19" y1="16.5" x2="19" y2="19.5" stroke="#ef4444" strokeWidth="1.6" strokeLinecap="round"/>
                  <circle cx="19" cy="21.5" r="0.9" fill="#ef4444"/>
                </svg>
              ),
              title: 'No Policy, No Protection',
              body: 'Without an AI acceptable use policy, one employee can expose client data, trade secrets, or confidential information — with no recourse.',
            },
            {
              bg: 'bg-blue/10 border-blue/20',
              icon: (
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M5 5h9l9 9-9 9-9-9V5Z" stroke="#3b82f6" strokeWidth="1.6" strokeLinejoin="round"/>
                  <circle cx="10" cy="10" r="1.5" fill="#3b82f6"/>
                  <line x1="14" y1="12" x2="14" y2="18" stroke="#3b82f6" strokeWidth="1.4" strokeLinecap="round"/>
                  <path d="M12 13.5c0-.83.67-1.5 1.5-1.5h1a1.5 1.5 0 0 1 0 3h-1a1.5 1.5 0 0 0 0 3h1c.83 0 1.5-.67 1.5-1.5" stroke="#3b82f6" strokeWidth="1.3" strokeLinecap="round"/>
                </svg>
              ),
              title: 'Security Feels Expensive',
              body: 'Enterprise security tools cost $30,000/year and require a dedicated team. Most SMBs give up before they start.',
            },
          ].map(card => (
            <div key={card.title} className={`bg-navy-3 rounded-2xl border ${card.bg} p-8 hover:translate-y-[-2px] transition`}>
              <div className={`w-14 h-14 rounded-[14px] border flex items-center justify-center mb-5 ${card.bg}`}>
                {card.icon}
              </div>
              <h3 className="font-sora font-bold text-[17px] text-white mb-2.5">{card.title}</h3>
              <p className="text-[15px] text-t-med leading-[1.65]">{card.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── APPROACH ── */}
      <section className="px-[6%] py-[88px]">
        <p className="text-[11px] font-bold font-sora uppercase tracking-[0.1em] text-amber mb-3">Our Approach</p>
        <h2 className="font-sora text-[clamp(28px,3vw,42px)] font-bold tracking-[-0.022em] leading-[1.16] text-white mb-3">
          Security that moves with your business.
        </h2>
        <p className="text-[17px] text-t-med max-w-[560px] leading-[1.68] mb-14">
          No jargon. No fear tactics. Three clear steps from exposure to protected.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              num: '01', color: 'text-blue-lt', iconBg: 'bg-blue/10 border-blue/20',
              icon: (
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <rect x="4" y="4" width="9" height="9" rx="2" stroke="#3b82f6" strokeWidth="1.5" opacity="0.45"/>
                  <rect x="15" y="4" width="9" height="9" rx="2" stroke="#3b82f6" strokeWidth="1.5" opacity="0.45"/>
                  <rect x="4" y="15" width="9" height="9" rx="2" stroke="#3b82f6" strokeWidth="1.5" opacity="0.45"/>
                  <rect x="15" y="15" width="9" height="9" rx="2" stroke="#3b82f6" strokeWidth="1.5" opacity="0.45"/>
                  <circle cx="19.5" cy="19.5" r="7" stroke="#3b82f6" strokeWidth="1.8"/>
                  <line x1="24.5" y1="24.5" x2="28" y2="28" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="19.5" y1="15.5" x2="19.5" y2="23.5" stroke="#3b82f6" strokeWidth="1.3" strokeLinecap="round" opacity="0.6"/>
                  <line x1="15.5" y1="19.5" x2="23.5" y2="19.5" stroke="#3b82f6" strokeWidth="1.3" strokeLinecap="round" opacity="0.6"/>
                </svg>
              ),
              title: 'Identify',
              body: "We assess every AI tool your team uses and map the real risks in plain language. A written risk report with your actual exposure — not a laundry list of hypotheticals.",
            },
            {
              num: '02', color: 'text-amber-lt', iconBg: 'bg-amber/10 border-amber/20',
              icon: (
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M16 3 5 7.5V16C5 22.5 9.8 28.2 16 29.5C22.2 28.2 27 22.5 27 16V7.5L16 3Z" stroke="#f59e0b" strokeWidth="1.7" strokeLinejoin="round"/>
                  <path d="M11 16l3.5 3.5L21 12" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ),
              title: 'Implement',
              body: "The right policies and controls, put in place fast. AI acceptable use policy, vendor-specific guidance, and employee guidelines your team will actually follow.",
            },
            {
              num: '03', color: 'text-green', iconBg: 'bg-green/10 border-green/20',
              icon: (
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <circle cx="16" cy="16" r="12" stroke="#22c55e" strokeWidth="1.3" opacity="0.2"/>
                  <circle cx="16" cy="16" r="8" stroke="#22c55e" strokeWidth="1.3" opacity="0.35"/>
                  <circle cx="16" cy="16" r="4" stroke="#22c55e" strokeWidth="1.4" opacity="0.55"/>
                  <circle cx="16" cy="16" r="1.8" fill="#22c55e"/>
                  <line x1="16" y1="16" x2="26" y2="8" stroke="#22c55e" strokeWidth="1.6" strokeLinecap="round" opacity="0.8"/>
                  <circle cx="23" cy="10" r="1.8" fill="#22c55e" opacity="0.9"/>
                </svg>
              ),
              title: 'Stay Ahead',
              body: "Monthly reviews, policy updates as new tools emerge, and on-call advisory when something changes. Always protected, never scrambling.",
            },
          ].map(card => (
            <div key={card.title} className="bg-navy-3 rounded-2xl border border-t-hair p-8 hover:border-navy-5 hover:translate-y-[-2px] transition">
              <div className={`w-14 h-14 rounded-[14px] border flex items-center justify-center mb-5 ${card.iconBg}`}>
                {card.icon}
              </div>
              <p className={`text-[11px] font-bold font-sora uppercase tracking-[0.09em] mb-2 ${card.color}`}>{card.num}</p>
              <h3 className="font-sora font-bold text-[18px] text-white mb-2.5">{card.title}</h3>
              <p className="text-[15px] text-t-med leading-[1.68]">{card.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── METRICS ── */}
      <div className="bg-navy-1 border-y border-t-hair px-[6%] py-14 flex items-center justify-around gap-6 flex-wrap">
        {[
          { n: '20+', l: 'Years of enterprise AppSec & DevSecOps' },
          { n: '5 days', l: 'From assessment to delivered report' },
          { n: 'OWASP', l: 'LLM Top 10 — built in, not bolted on' },
          { n: '5+', l: 'AI tools the average SMB runs without a policy' },
        ].map((m, i) => (
          <div key={i} className="text-center">
            <p className="font-sora font-bold text-[46px] text-amber-lt tracking-[-0.03em] leading-none mb-2">{m.n}</p>
            <p className="text-[14px] text-t-low font-medium max-w-[160px] leading-[1.4]">{m.l}</p>
          </div>
        ))}
      </div>

      {/* ── SERVICES ── */}
      <section className="bg-navy-2 border-b border-t-hair px-[6%] py-[88px]">
        <p className="text-[11px] font-bold font-sora uppercase tracking-[0.1em] text-amber mb-3">Services</p>
        <h2 className="font-sora text-[clamp(28px,3vw,42px)] font-bold tracking-[-0.022em] leading-[1.16] text-white mb-3">
          How We Work With You
        </h2>
        <p className="text-[17px] text-t-med max-w-[560px] leading-[1.68] mb-14">
          Three engagement models — from a one-time snapshot to a full ongoing partnership.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              title: 'AI Risk Assessment',
              body: 'A complete assessment of your AI tool stack, written risk report, and AI acceptable use policy. Delivered in 5 business days.',
              cta: 'Start with a free assessment', href: '/assess',
            },
            {
              title: 'AI Security Advisory',
              body: 'Ongoing partnership. Monthly reviews, policy updates, employee training, and on-call advisory. Your AI security team — without the overhead.',
              cta: 'Book a discovery call', href: '#contact',
            },
            {
              title: 'AI Governance Program',
              body: 'Full implementation. Risk framework, policy suite, vendor assessment, employee training program, and board-level reporting.',
              cta: 'Talk to Shelina', href: '#contact',
            },
          ].map(s => (
            <div key={s.title} className="bg-navy-3 rounded-2xl border border-t-hair p-8 flex flex-col hover:border-navy-5 transition">
              <div className="w-12 h-12 rounded-xl bg-blue/10 border border-blue/20 flex items-center justify-center mb-5">
                <svg width="22" height="22" fill="none" viewBox="0 0 22 22">
                  <rect x="4" y="2" width="14" height="18" rx="2" stroke="#3b82f6" strokeWidth="1.75"/>
                  <path d="M8 7h6M8 11h6M8 15h4" stroke="#3b82f6" strokeWidth="1.75" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="font-sora font-bold text-[18px] text-white mb-2.5">{s.title}</h3>
              <p className="text-[15px] text-t-med leading-[1.68] flex-1">{s.body}</p>
              <Link href={s.href}
                className="mt-5 pt-4 border-t border-t-hair flex items-center gap-2
                           text-[13px] font-semibold text-blue-lt no-underline hover:text-white transition group">
                {s.cta}
                <svg width="14" height="14" fill="none" viewBox="0 0 14 14" className="group-hover:translate-x-1 transition">
                  <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ── FOUNDER ── */}
      <section className="px-[6%] py-[88px] grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-[72px] items-center">
        <div>
          <p className="text-[11px] font-bold font-sora uppercase tracking-[0.1em] text-amber mb-3">Why Caye Group</p>
          <h2 className="font-sora text-[clamp(28px,3vw,38px)] font-bold tracking-[-0.022em] leading-[1.18] text-white mb-3">
            20+ years of enterprise AppSec and DevSecOps, built for businesses like yours.
          </h2>
          <p className="text-[16px] text-t-med leading-[1.7]">
            Deep security expertise shouldn&apos;t be reserved for companies with a CISO and a $500k budget.
          </p>
          <div className="flex gap-10 mt-9 flex-wrap">
            {[{ n: '20+', l: 'Years enterprise security' }, { n: '5 days', l: 'Assessment to report' }, { n: 'OWASP', l: 'LLM Top 10' }].map(s => (
              <div key={s.n}>
                <p className="font-sora font-bold text-[28px] text-amber-lt leading-none mb-1">{s.n}</p>
                <p className="text-[13px] text-t-low">{s.l}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-navy-3 border border-navy-5 rounded-2xl p-9">
          <div className="flex items-center gap-3.5 mb-5">
            <div className="w-12 h-12 rounded-full bg-amber flex items-center justify-center
                            font-sora font-bold text-[19px] text-[#3b1500] shrink-0">S</div>
            <div>
              <p className="font-sora font-bold text-[16px] text-white">Shelina</p>
              <p className="text-[13px] text-t-low mt-0.5">Founder, Caye Group</p>
            </div>
          </div>
          <span className="block font-serif text-[52px] leading-[0.7] text-amber mb-3">&ldquo;</span>
          <p className="text-[16px] leading-[1.8] text-t-med">
            I spent two decades integrating security into some of the world&apos;s most complex technology pipelines.
            The pattern I kept seeing — security as an afterthought, added too late, caught only after something
            went wrong — is now playing out in small businesses with AI. I built Caye Group to change that.
          </p>
        </div>
      </section>

      {/* ── TRUST STRIP ── */}
      <div className="bg-navy-2 border-t border-t-hair px-[6%] py-5 flex items-center justify-center gap-9 flex-wrap">
        {[
          { icon: '🛡️', text: 'Deep enterprise security background' },
          { icon: '✓', text: 'No jargon, no fear tactics' },
          { icon: '✓', text: 'Built for businesses without a security team' },
          { icon: '✓', text: 'Ontario, Canada — North America' },
        ].map(p => (
          <div key={p.text} className="flex items-center gap-2 text-[13px] text-t-low font-medium">
            <svg width="15" height="15" fill="none" viewBox="0 0 15 15">
              <circle cx="7.5" cy="7.5" r="6" stroke="#22c55e" strokeWidth="1.4"/>
              <path d="m4.5 7.5 2 2 4-4" stroke="#22c55e" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {p.text}
          </div>
        ))}
      </div>

      {/* ── FINAL CTA ── */}
      <section className="bg-navy-1 border-t border-t-hair px-[6%] py-28 text-center">
        <p className="text-[11px] font-bold font-sora uppercase tracking-[0.1em] text-amber mb-3">Get Started</p>
        <h2 className="font-sora text-[clamp(28px,3vw,42px)] font-bold tracking-[-0.022em] text-white mb-3">
          Find Out Where You Stand — Free
        </h2>
        <p className="text-[17px] text-t-med mb-10">
          Run your free AI security assessment in 30 seconds. No technical knowledge required.
        </p>
        <Link href="/assess"
          className="bg-blue text-white font-sora font-bold text-[15px] px-8 py-4
                     rounded-xl no-underline inline-flex items-center gap-2 hover:bg-blue-lt transition">
          Get Your Free Assessment
          <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
            <path d="M3 8h10M8.5 3.5 13 8l-4.5 4.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-navy-0 border-t border-t-hair">
        <div className="max-w-6xl mx-auto px-[6%] py-16 grid grid-cols-1 sm:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10">
          <div>
            <Link href="/" className="flex items-center gap-2.5 no-underline mb-3">
              <div className="w-8 h-8 bg-blue rounded-lg flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                  <path d="M10 2L3 5.5V10.5C3 14.5 6.1 18.2 10 19C13.9 18.2 17 14.5 17 10.5V5.5L10 2Z" fill="white" fillOpacity="0.92"/>
                </svg>
              </div>
              <span className="font-sora font-bold text-white text-[15px]">Caye Group</span>
            </Link>
            <p className="text-[13px] text-t-low leading-[1.6] max-w-[210px]">
              AI is already in your business. We make sure security is too.
            </p>
          </div>
          {[
            { h: 'Services', links: [{ l: 'AI Risk Assessment', h: '/assess' }, { l: 'AI Security Advisory', h: '#' }, { l: 'AI Governance Program', h: '#' }] },
            { h: 'Company', links: [{ l: 'Home', h: '/' }, { l: 'Free Assessment', h: '/assess' }, { l: 'Book a Call', h: '#' }] },
            { h: 'Legal', links: [{ l: 'Privacy Policy', h: '/privacy' }] },
          ].map(col => (
            <div key={col.h}>
              <h4 className="font-sora text-[11px] font-bold uppercase tracking-[0.09em] text-t-low mb-4">{col.h}</h4>
              <ul className="list-none p-0 m-0 flex flex-col gap-2.5">
                {col.links.map(link => (
                  <li key={link.l}>
                    <Link href={link.h} className="text-[14px] text-t-med no-underline hover:text-white transition">{link.l}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-t-hair px-[6%] py-5 flex items-center justify-between flex-wrap gap-3
                        text-[13px] text-t-low max-w-6xl mx-auto">
          <span>© 2026 2456867 Ontario Inc. o/a Caye Group — Ontario, Canada</span>
          <span>AI is already in your business. We make sure security is too.</span>
        </div>
      </footer>
    </main>
  );
}