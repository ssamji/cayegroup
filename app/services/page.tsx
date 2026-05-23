import Link from 'next/link';
import Nav from '@/components/Nav';

export const metadata = {
  title: 'Services — AI Security for Small Business | Caye Group',
  description: 'Full AI Security Assessment, Microsoft Copilot & Workspace AI Review, and AI Governance Starter Kit. Practical AI security services built for small and medium businesses.',
  openGraph: {
    title: 'AI Security Services for Small Business | Caye Group',
    description: 'Three ways to get control of AI in your business — from a one-time assessment to a full governance framework. No technical background required.',
    url: 'https://www.cayegroup.ai/services',
    siteName: 'Caye Group',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Security Services for Small Business | Caye Group',
    description: 'Three ways to get control of AI in your business — from a one-time assessment to a full governance framework.',
  },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-navy-0">
      <Nav />

      {/* ── HERO ── */}
      <section className="bg-navy-1 px-[6%] pt-20 pb-20 border-b border-t-hair">
        <div className="max-w-3xl">
          <p className="text-[11px] font-bold font-sora uppercase tracking-[0.1em] text-amber mb-4">Services</p>
          <h1 className="font-sora text-[clamp(32px,4vw,52px)] font-bold tracking-[-0.025em] leading-[1.1] text-white mb-5">
            Three ways we help you get control of AI in your business.
          </h1>
          <p className="text-[18px] text-t-med leading-[1.7] max-w-2xl">
            Whether you need a one-time snapshot or ongoing support, we meet you where you are —
            without overcomplicating it.
          </p>
        </div>
      </section>

      {/* ── SERVICE 1: FULL AI SECURITY ASSESSMENT ── */}
      <section className="px-[6%] py-16 border-b border-t-hair">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 items-start">
          <div>
            <h2 className="font-sora text-[clamp(24px,3vw,34px)] font-bold tracking-[-0.02em] leading-[1.2] text-white mb-4">
              Full AI Security Assessment
            </h2>
            <p className="text-[16px] text-t-med leading-[1.75] mb-6">
              The free risk check gives you your score and top vulnerabilities in 30 seconds.
              The Full AI Security Assessment is what comes next — a complete engagement where
              we go deep into your environment, interview your team, and map every tool and
              data flow your business relies on.
            </p>
            <p className="text-[16px] text-t-med leading-[1.75]">
              You get a comprehensive report you can actually act on — and a clear picture of
              where your business stands. Most businesses are surprised by what comes back.
            </p>
          </div>

          <div className="bg-navy-3 border border-t-hair rounded-2xl p-8">
            <p className="text-[11px] font-bold font-sora uppercase tracking-[0.09em] text-t-low mb-5">What you get</p>
            <ul className="space-y-4 mb-8">
              {[
                'Full inventory of AI tools in use across your business — including ones you didn\'t approve',
                'Risk rating for each tool, mapped to real-world exposure — not hypothetical threats',
                'Team interviews to surface shadow AI and undocumented workflows',
                'Comprehensive written report in plain language, built for business owners not security teams',
                'Prioritized action list — what to fix first, and how',
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-[15px] text-t-med leading-[1.6]">
                  <span className="text-blue-lt font-bold font-sora shrink-0 mt-0.5">→</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="pt-6 border-t border-t-hair">
              <Link href="/assess"
                className="bg-blue text-white font-sora font-bold text-[14px] px-6 py-3
                           rounded-lg no-underline flex items-center justify-center gap-2 hover:bg-blue-lt transition w-full sm:w-auto">
                Start with the free check
                <svg width="14" height="14" fill="none" viewBox="0 0 14 14">
                  <path d="M2 7h10M7.5 2.5 12 7l-4.5 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICE 2: COPILOT REVIEW ── */}
      <section className="bg-navy-2 border-b border-t-hair px-[6%] py-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 items-start">
          <div>
            <h2 className="font-sora text-[clamp(24px,3vw,34px)] font-bold tracking-[-0.02em] leading-[1.2] text-white mb-4">
              Microsoft Copilot &amp; Workspace AI Review
            </h2>
            <p className="text-[16px] text-t-med leading-[1.75] mb-6">
              If your business uses Microsoft 365, Copilot may already be active in your environment.
              It can surface documents, emails, and internal files based on existing permissions —
              including permissions most businesses don&apos;t realize they&apos;ve granted.
            </p>
            <p className="text-[16px] text-t-med leading-[1.75]">
              This review is focused specifically on your Microsoft environment. We look at what
              Copilot can access, what it&apos;s been doing, and what needs to be locked down before
              it becomes a problem.
            </p>
          </div>

          <div className="bg-navy-3 border border-t-hair rounded-2xl p-8">
            <p className="text-[11px] font-bold font-sora uppercase tracking-[0.09em] text-t-low mb-5">What you get</p>
            <ul className="space-y-4 mb-8">
              {[
                'Copilot activation status and scope — what it can currently see and access',
                'Permission mapping — identifying files, folders, and data exposed beyond intent',
                'SharePoint and OneDrive access review — where oversharing exists',
                'Google Workspace AI review included if applicable',
                'Remediation steps written for your IT contact or managed service provider',
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-[15px] text-t-med leading-[1.6]">
                  <span className="text-amber-lt font-bold font-sora shrink-0 mt-0.5">→</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="pt-6 border-t border-t-hair">
              <Link href="#contact"
                className="text-amber-lt font-sora font-semibold text-[14px] no-underline
                           flex items-center gap-2 hover:text-white transition">
                Book a call to get started
                <svg width="14" height="14" fill="none" viewBox="0 0 14 14">
                  <path d="M2 7h10M7.5 2.5 12 7l-4.5 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICE 3: GOVERNANCE STARTER KIT ── */}
      <section className="px-[6%] py-16 border-b border-t-hair">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 items-start">
          <div>
            <h2 className="font-sora text-[clamp(24px,3vw,34px)] font-bold tracking-[-0.02em] leading-[1.2] text-white mb-4">
              AI Governance Starter Kit
            </h2>
            <p className="text-[16px] text-t-med leading-[1.75] mb-6">
              Once you know your risks, the next step is making sure your team knows what to do —
              and what not to do. The Governance Starter Kit gives you a practical framework your
              business can actually use, without the overhead of an enterprise compliance program.
            </p>
            <p className="text-[16px] text-t-med leading-[1.75]">
              Built on the findings from your risk assessment, so it reflects your actual situation —
              not a generic template.
            </p>
          </div>

          <div className="bg-navy-3 border border-t-hair rounded-2xl p-8">
            <p className="text-[11px] font-bold font-sora uppercase tracking-[0.09em] text-t-low mb-5">What you get</p>
            <ul className="space-y-4 mb-8">
              {[
                'AI acceptable use policy — written for your team, in plain language',
                'Approved and restricted tools list, with guidance on each',
                'Data handling guidelines for AI — what can go in, what can\'t',
                'One-page employee reference card your team will actually keep',
                'Implementation call with Caye Group to walk your team through it',
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-[15px] text-t-med leading-[1.6]">
                  <span className="text-green font-bold font-sora shrink-0 mt-0.5">→</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="pt-6 border-t border-t-hair">
              <Link href="#contact"
                className="text-green font-sora font-semibold text-[14px] no-underline
                           flex items-center gap-2 hover:text-white transition">
                Book a call to get started
                <svg width="14" height="14" fill="none" viewBox="0 0 14 14">
                  <path d="M2 7h10M7.5 2.5 12 7l-4.5 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="bg-navy-2 border-b border-t-hair px-[6%] py-16">
        <div className="max-w-5xl mx-auto">
          <p className="text-[11px] font-bold font-sora uppercase tracking-[0.1em] text-amber mb-3">How it works</p>
          <h2 className="font-sora text-[clamp(24px,3vw,34px)] font-bold tracking-[-0.02em] leading-[1.2] text-white mb-12">
            Services that build on each other.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                num: '01',
                color: 'text-blue-lt',
                title: 'Start with the free check',
                body: 'The free risk check gives you your score and top vulnerabilities instantly. When you\'re ready to go deeper, the Full AI Security Assessment maps everything — tools, teams, and data flows.',
              },
              {
                num: '02',
                color: 'text-amber-lt',
                title: 'Add the Copilot review if needed',
                body: 'If you use Microsoft 365, the Copilot review is often the highest-priority next step. Specific, fast, and addresses the most active risk in most businesses.',
              },
              {
                num: '03',
                color: 'text-green',
                title: 'Lock it in with governance',
                body: 'The starter kit turns your findings into something your team can follow. Policies, guidelines, and a reference card — practical, not bureaucratic.',
              },
            ].map(step => (
              <div key={step.num} className="bg-navy-3 rounded-2xl border border-t-hair p-7 flex flex-col">
                <p className={`text-[11px] font-bold font-sora uppercase tracking-[0.09em] mb-4 ${step.color}`}>{step.num}</p>
                <h3 className="font-sora font-bold text-[17px] text-white mb-3 leading-[1.3]">{step.title}</h3>
                <p className="text-[15px] text-t-med leading-[1.65]">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="bg-navy-1 px-[6%] py-24 text-center">
        <p className="text-[11px] font-bold font-sora uppercase tracking-[0.1em] text-amber mb-3">Not sure where to start?</p>
        <h2 className="font-sora text-[clamp(26px,3vw,38px)] font-bold tracking-[-0.022em] text-white mb-4">
          The free assessment takes 30 seconds.
        </h2>
        <p className="text-[17px] text-t-med mb-4 max-w-lg mx-auto">
          No technical knowledge required. See your risk score instantly — no email needed to start.
        </p>
        <p className="text-[13px] text-t-low mb-10">
          Or book a call if you&apos;d rather talk it through first.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/assess"
            className="bg-blue text-white font-sora font-bold text-[15px] px-8 py-4
                       rounded-xl no-underline inline-flex items-center justify-center gap-2 hover:bg-blue-lt transition">
            Get My Free Risk Report
            <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
              <path d="M3 8h10M8.5 3.5 13 8l-4.5 4.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <Link href="#contact"
            className="bg-transparent text-white font-sora font-semibold text-[15px] px-8 py-4
                       rounded-xl no-underline inline-flex items-center justify-center gap-2
                       border border-t-dim hover:border-white/35 hover:bg-t-hair transition">
            Book a Call
          </Link>
        </div>
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
            { h: 'Company', links: [{ l: 'Home', h: '/' }, { l: 'Services', h: '/services' }, { l: 'Free Assessment', h: '/assess' }] },
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