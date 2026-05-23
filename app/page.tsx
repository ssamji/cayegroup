import Link from 'next/link';
import Nav from '@/components/Nav';

export const metadata = {
  title: 'Caye Group — AI Security for Small & Medium Business',
  description: 'Your team is already using AI tools with no visibility into what data is leaving your business. Get your free AI security risk report in 30 seconds — no technical knowledge required.',
  openGraph: {
    title: 'Is Your Team Using AI Securely? | Caye Group',
    description: 'Most small businesses are using 5+ AI tools with no visibility into what data is leaving the building. Find out where you stand — free, in 30 seconds.',
    url: 'https://www.cayegroup.ai',
    siteName: 'Caye Group',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Is Your Team Using AI Securely? | Caye Group',
    description: 'Most small businesses are using 5+ AI tools with no visibility into what data is leaving the building. Find out where you stand — free, in 30 seconds.',
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-navy-0">
      <Nav />

      {/* ── HERO ── */}
      <section className="bg-navy-1 px-[6%] pt-14 pb-16 lg:pt-24 lg:pb-28 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-center relative overflow-hidden">
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
            AI Security for Growing Businesses
          </div>

          <h1 className="font-sora text-[clamp(34px,4vw,56px)] font-bold leading-[1.1]
                         tracking-[-0.025em] text-white mb-5">
            Your Team Is Already Using AI.{' '}
            <em className="text-amber-lt not-italic">Is It Secure?</em>
          </h1>

          <p className="text-[18px] leading-[1.72] text-t-med max-w-[500px] mb-6">
            Most small businesses are already using 5+ AI tools with no visibility into
            what data is leaving the building. Find out where you stand — in 30 seconds.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            <Link href="/assess"
              className="bg-blue text-white font-sora font-bold text-[15px] px-7 py-3.5
                         rounded-lg no-underline flex items-center justify-center gap-2 hover:bg-blue-lt transition">
              Get My Free Risk Report
              <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
                <path d="M3 8h10M8.5 3.5 13 8l-4.5 4.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <a href="#about"
              className="bg-transparent text-white font-sora font-semibold text-[15px] px-6 py-3.5
                         rounded-lg no-underline border border-t-dim flex items-center justify-center gap-2
                         hover:border-white/35 hover:bg-t-hair transition">
              Book a Call
            </a>
          </div>

          <p className="text-[13px] text-t-low mb-8">
            See your risk score instantly — no email required to start.
          </p>

          <div className="flex gap-6 flex-wrap">
            {[
              'Takes 30 seconds',
              'No technical knowledge needed',
              'Built for businesses without an IT team',
            ].map(t => (
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

        {/* Hero visual */}
        <div className="relative z-10 mt-8 lg:mt-0">
          <div className="bg-navy-3 rounded-2xl border border-navy-5 overflow-hidden shadow-[0_32px_72px_rgba(0,0,0,0.5)]">
            <div className="bg-navy-4 px-6 py-5 flex justify-between items-start border-b border-t-hair">
              <div>
                <p className="text-[10px] font-bold font-sora uppercase tracking-[0.09em] text-t-low mb-1">AI Risk Report</p>
                <p className="font-sora font-bold text-white text-[16px]">Your Business</p>
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

      {/* ── FOUNDER — early trust ── */}
      <section id="about" className="bg-navy-2 border-y border-t-hair px-[6%] py-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-14 items-center">
          <div>
            <p className="text-[11px] font-bold font-sora uppercase tracking-[0.1em] text-amber mb-3">Who We Are</p>
            <h2 className="font-sora text-[clamp(24px,2.5vw,34px)] font-bold tracking-[-0.02em] leading-[1.2] text-white mb-4">
              A small business that spent 20 years securing big ones.
            </h2>
            <p className="text-[16px] text-t-med leading-[1.7]">
              Caye Group is an SMB — just like you. We know what it&apos;s like to run a lean operation
              without a dedicated security team. The difference is we spent two decades inside
              enterprise security, and we&apos;re bringing that expertise to businesses our own size.
            </p>
          </div>

          <div className="bg-navy-3 border border-navy-5 rounded-2xl p-8">
            <div className="flex items-center gap-3.5 mb-5">
              <div className="w-12 h-12 rounded-full bg-amber flex items-center justify-center
                              font-sora font-bold text-[19px] text-[#3b1500] shrink-0">CG</div>
              <div>
                <p className="font-sora font-bold text-[16px] text-white">Caye Group</p>
              </div>
            </div>
            <span className="block font-serif text-[48px] leading-[0.7] text-amber mb-3">&ldquo;</span>
            <p className="text-[16px] leading-[1.8] text-t-med">
              We spent two decades seeing security treated as an afterthought — added too late,
              only after something went wrong. That pattern is now repeating itself in small
              businesses adopting AI. We built Caye Group to break that cycle, starting with
              the businesses that need it most and have the least support to navigate it.
            </p>
          </div>
        </div>
      </section>

      {/* ── PROBLEM ── */}
      <section className="px-[6%] py-[88px]">
        <p className="text-[11px] font-bold font-sora uppercase tracking-[0.1em] text-amber mb-3">Sound Familiar?</p>
        <h2 className="font-sora text-[clamp(28px,3vw,42px)] font-bold tracking-[-0.022em] leading-[1.16] text-white mb-3">
          The risk is already inside your business.
        </h2>
        <p className="text-[17px] text-t-med max-w-[560px] leading-[1.68] mb-14">
          You don&apos;t need to be the target of an attack for AI to create a problem. Most of the risk is already there, quietly.
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
              title: 'Your team is already using AI tools you never approved',
              body: 'ChatGPT, Notion AI, Copilot — they\'re already in your business. Most owners find out only after something goes wrong.',
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
              title: 'Sensitive business data is going into AI tools with no guardrails',
              body: 'Without a clear policy, one employee can share confidential information with an AI tool — and you have no way to know it happened.',
            },
            {
              bg: 'bg-blue/10 border-blue/20',
              icon: (
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  {/* Document with eye — Copilot seeing your files */}
                  <rect x="4" y="3" width="14" height="18" rx="2" stroke="#3b82f6" strokeWidth="1.6"/>
                  <line x1="7" y1="8" x2="15" y2="8" stroke="#3b82f6" strokeWidth="1.3" strokeLinecap="round" opacity="0.5"/>
                  <line x1="7" y1="11.5" x2="15" y2="11.5" stroke="#3b82f6" strokeWidth="1.3" strokeLinecap="round" opacity="0.5"/>
                  <line x1="7" y1="15" x2="12" y2="15" stroke="#3b82f6" strokeWidth="1.3" strokeLinecap="round" opacity="0.5"/>
                  {/* Eye overlapping bottom right */}
                  <circle cx="20" cy="20" r="7" fill="#111d40" stroke="#3b82f6" strokeWidth="1.4"/>
                  <ellipse cx="20" cy="20" rx="4" ry="2.5" stroke="#3b82f6" strokeWidth="1.3"/>
                  <circle cx="20" cy="20" r="1.3" fill="#3b82f6"/>
                </svg>
              ),
              title: 'Microsoft Copilot is probably already on — and it can see more than you think',
              body: 'If your team uses Microsoft 365, Copilot may already be active. It can surface documents, emails, and internal files based on existing permissions — including permissions most businesses don\'t realize they\'ve granted.',
            },
          ].map(card => (
            <div key={card.title} className={`bg-navy-3 rounded-2xl border ${card.bg} p-8 hover:translate-y-[-2px] transition`}>
              <div className={`w-14 h-14 rounded-[14px] border flex items-center justify-center mb-5 ${card.bg}`}>
                {card.icon}
              </div>
              <h3 className="font-sora font-bold text-[17px] text-white mb-2.5 leading-[1.3]">{card.title}</h3>
              <p className="text-[15px] text-t-med leading-[1.65]">{card.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHAT YOU GET ── */}
      <section className="bg-navy-2 border-y border-t-hair px-[6%] py-[88px]">
        <p className="text-[11px] font-bold font-sora uppercase tracking-[0.1em] text-amber mb-3">What You Get</p>
        <h2 className="font-sora text-[clamp(28px,3vw,42px)] font-bold tracking-[-0.022em] leading-[1.16] text-white mb-3">
          A free risk check. A real report. A clear next step.
        </h2>
        <p className="text-[17px] text-t-med max-w-[560px] leading-[1.68] mb-14">
          Select the AI tools your team uses. Get a personalized report showing exactly where your risks are and what to do about them.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              step: '01', color: 'text-blue-lt', iconBg: 'bg-blue/10 border-blue/20',
              icon: (
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <rect x="3" y="3" width="9" height="9" rx="2" stroke="#3b82f6" strokeWidth="1.5" opacity="0.5"/>
                  <rect x="14" y="3" width="9" height="9" rx="2" stroke="#3b82f6" strokeWidth="1.5" opacity="0.5"/>
                  <rect x="3" y="14" width="9" height="9" rx="2" stroke="#3b82f6" strokeWidth="1.5" opacity="0.5"/>
                  <rect x="14" y="14" width="9" height="9" rx="2" stroke="#3b82f6" strokeWidth="1.5" opacity="0.5"/>
                  <circle cx="18.5" cy="18.5" r="6" stroke="#3b82f6" strokeWidth="1.7"/>
                  <line x1="23" y1="23" x2="26" y2="26" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              ),
              title: 'Pick your tools',
              body: 'Select the AI tools your team uses — ChatGPT, Copilot, Notion AI, and more. Takes about 30 seconds.',
            },
            {
              step: '02', color: 'text-amber-lt', iconBg: 'bg-amber/10 border-amber/20',
              icon: (
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M14 2.5 4 7V14C4 20 8.5 25.3 14 26.5C19.5 25.3 24 20 24 14V7L14 2.5Z" stroke="#f59e0b" strokeWidth="1.6" strokeLinejoin="round"/>
                  <path d="M9.5 14l3 3L18.5 11" stroke="#f59e0b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ),
              title: 'See your risk score',
              body: 'Get an instant risk score and a breakdown of the specific risks each tool creates for your business — no email needed.',
            },
            {
              step: '03', color: 'text-green', iconBg: 'bg-green/10 border-green/20',
              icon: (
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <rect x="4" y="3" width="16" height="20" rx="2" stroke="#22c55e" strokeWidth="1.6"/>
                  <path d="M8 9h8M8 13h8M8 17h5" stroke="#22c55e" strokeWidth="1.4" strokeLinecap="round"/>
                  <circle cx="21" cy="21" r="5" fill="#162248" stroke="#22c55e" strokeWidth="1.4"/>
                  <path d="m18.5 21 1.5 1.5 2.5-2.5" stroke="#22c55e" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ),
              title: 'Get your action plan',
              body: 'Unlock a step-by-step remediation plan with your email. One clear document — exactly what to fix and how.',
            },
          ].map(card => (
            <div key={card.title} className="bg-navy-3 rounded-2xl border border-t-hair p-8 hover:border-navy-5 hover:translate-y-[-2px] transition">
              <div className={`w-14 h-14 rounded-[14px] border flex items-center justify-center mb-5 ${card.iconBg}`}>
                {card.icon}
              </div>
              <p className={`text-[11px] font-bold font-sora uppercase tracking-[0.09em] mb-2 ${card.color}`}>{card.step}</p>
              <h3 className="font-sora font-bold text-[18px] text-white mb-2.5">{card.title}</h3>
              <p className="text-[15px] text-t-med leading-[1.68]">{card.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="bg-navy-1 border-t border-t-hair px-[6%] py-28 text-center">
        <p className="text-[11px] font-bold font-sora uppercase tracking-[0.1em] text-amber mb-3">Free. No Commitment.</p>
        <h2 className="font-sora text-[clamp(28px,3vw,42px)] font-bold tracking-[-0.022em] text-white mb-4">
          Find out where you stand — in 30 seconds.
        </h2>
        <p className="text-[17px] text-t-med mb-4 max-w-lg mx-auto">
          No technical knowledge required. No sales call to book first.
          Just a clear, honest look at your AI risk.
        </p>
        <p className="text-[13px] text-t-low mb-10">
          See your risk score instantly — no email required to start.
        </p>
        <Link href="/assess"
          className="bg-blue text-white font-sora font-bold text-[15px] px-8 py-4
                     rounded-xl no-underline inline-flex items-center gap-2 hover:bg-blue-lt transition">
          Get My Free Risk Report
          <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
            <path d="M3 8h10M8.5 3.5 13 8l-4.5 4.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-navy-0 border-t border-t-hair">
        <div className="max-w-6xl mx-auto px-[6%] py-16 grid grid-cols-1 sm:grid-cols-[1.5fr_1fr_1fr] gap-10">
          <div>
            <Link href="/" className="flex items-center gap-2.5 no-underline mb-3">
              <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="9" fill="#162248"/>
                <circle cx="20" cy="20" r="11" stroke="#2563eb" strokeWidth="1.5" fill="none" opacity="0.5"/>
                <circle cx="20" cy="20" r="7" stroke="#2563eb" strokeWidth="1.5" fill="#162248"/>
                <circle cx="20" cy="20" r="4.5" fill="#2563eb"/>
                <circle cx="20" cy="20" r="2" fill="#f59e0b"/>
                <circle cx="18.8" cy="18.8" r="0.7" fill="white" opacity="0.9"/>
              </svg>
              <span className="font-sora font-bold text-white text-[15px]">Caye Group</span>
            </Link>
            <p className="text-[13px] text-t-low leading-[1.6] max-w-[210px]">
              AI is already in your business. We make sure security is too.
            </p>
          </div>
          {[
            { h: 'Company', links: [{ l: 'Home', h: '/' }, { l: 'Services', h: '/services' }, { l: 'Free Risk Check', h: '/assess' }, { l: 'Book a Call', h: '#about' }] },
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
