import Nav from '@/components/Nav';

export const metadata = {
  title: 'Privacy Policy — Caye Group',
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-navy-0">
      <Nav />

      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="font-sora text-4xl font-bold text-white mb-2 tracking-tight">Privacy Policy</h1>
        <p className="text-t-low text-sm mb-12">
          Last updated:{' '}
          {new Date().toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        <div className="space-y-10">

          {[
            {
              title: 'About Us',
              content: (
                <>
                  <p className="text-t-med leading-relaxed">
                    This privacy policy applies to the AI Security Risk Assessment tool operated by{' '}
                    <strong className="text-white">2456867 Ontario Inc., operating as Caye Group</strong>{' '}
                    (&quot;Caye Group&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), a corporation
                    incorporated under the laws of Ontario, Canada. Our registered office is located in Ontario, Canada.
                  </p>
                  <p className="text-t-med leading-relaxed mt-3">
                    We are committed to protecting your personal information in accordance with the Personal
                    Information Protection and Electronic Documents Act (PIPEDA) and applicable Ontario privacy legislation.
                  </p>
                </>
              ),
            },
            {
              title: 'Information We Collect',
              content: (
                <>
                  <p className="text-t-med leading-relaxed mb-3">
                    When you use our AI Security Risk Assessment tool, we collect the following information:
                  </p>
                  <ul className="space-y-2 text-t-med">
                    {[
                      ['Name', 'provided voluntarily when you request your full security report'],
                      ['Email address', 'provided voluntarily to receive your remediation plan'],
                      ['AI tools selected', 'the list of AI tools you indicate your business uses'],
                      ['Risk assessment results', 'the security risk score and report generated based on your tool selection'],
                      ['Usage data', 'standard server logs including IP address and browser type, collected automatically'],
                    ].map(([k, v]) => (
                      <li key={k} className="flex gap-2">
                        <span className="text-blue-lt mt-1 shrink-0">→</span>
                        <span><strong className="text-white">{k}</strong> — {v}</span>
                      </li>
                    ))}
                  </ul>
                </>
              ),
            },
            {
              title: 'How We Use Your Information',
              content: (
                <>
                  <p className="text-t-med leading-relaxed mb-3">We use your information for the following purposes:</p>
                  <ul className="space-y-2 text-t-med">
                    {[
                      'To generate and deliver your personalized AI security risk assessment',
                      'To send you your security remediation plan by email',
                      'To follow up with relevant AI security information and services that may be of interest to you',
                      'To improve our assessment tool and services',
                      'To comply with legal obligations',
                    ].map(item => (
                      <li key={item} className="flex gap-2">
                        <span className="text-blue-lt mt-1 shrink-0">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-t-med leading-relaxed mt-3">
                    By submitting your name and email address, you consent to receiving communications from Caye Group
                    related to your assessment results and our AI security services. You may withdraw your consent at
                    any time by contacting us at the address below.
                  </p>
                </>
              ),
            },
            {
              title: 'Third Party Services',
              content: (
                <>
                  <p className="text-t-med leading-relaxed mb-3">
                    To provide our service, we share certain information with the following third party providers:
                  </p>
                  <div className="space-y-3">
                    {[
                      ['Anthropic, Inc.', "Your selected AI tools are transmitted to Anthropic's API to generate your security assessment. Anthropic is based in the United States. Your tool selections (not your name or email) are processed by Anthropic. Anthropic's privacy policy is available at anthropic.com."],
                      ['Supabase', "Your name, email, tool selections, and risk score are stored in a Supabase database. Supabase is based in the United States. Supabase's privacy policy is available at supabase.com."],
                      ['Vercel', "Our application is hosted on Vercel's infrastructure, based in the United States. Vercel's privacy policy is available at vercel.com."],
                      ['Upstash', 'We use Upstash Redis for rate limiting. IP addresses are temporarily processed for this purpose.'],
                    ].map(([k, v]) => (
                      <div key={k} className="bg-navy-3 border border-t-hair rounded-xl p-4">
                        <p className="font-sora font-semibold text-white text-sm mb-1">{k}</p>
                        <p className="text-t-med text-sm leading-relaxed">{v}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-t-med leading-relaxed mt-3">
                    By using our service, you acknowledge that your information may be transferred to and processed
                    in the United States. We take reasonable steps to ensure these providers maintain appropriate
                    security standards.
                  </p>
                </>
              ),
            },
            {
              title: 'Data Retention',
              content: (
                <p className="text-t-med leading-relaxed">
                  We retain your personal information for as long as necessary to provide our services and fulfill
                  the purposes outlined in this policy. If you wish to have your information deleted, please contact
                  us and we will remove your data within 30 days of your request.
                </p>
              ),
            },
            {
              title: 'Your Rights',
              content: (
                <>
                  <p className="text-t-med leading-relaxed mb-3">Under PIPEDA, you have the right to:</p>
                  <ul className="space-y-2 text-t-med">
                    {[
                      'Access the personal information we hold about you',
                      'Request correction of inaccurate information',
                      'Withdraw consent to our use of your information',
                      'Request deletion of your personal information',
                      'File a complaint with the Office of the Privacy Commissioner of Canada at priv.gc.ca',
                    ].map(item => (
                      <li key={item} className="flex gap-2">
                        <span className="text-blue-lt mt-1 shrink-0">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </>
              ),
            },
            {
              title: 'Security',
              content: (
                <p className="text-t-med leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your personal information
                  against unauthorized access, alteration, disclosure, or destruction. All data is transmitted over
                  encrypted HTTPS connections. Access to stored personal information is restricted through row-level
                  security controls.
                </p>
              ),
            },
            {
              title: 'Cookies and Tracking',
              content: (
                <p className="text-t-med leading-relaxed">
                  Our tool does not use cookies for tracking or advertising purposes. Standard server logs are
                  maintained for security and operational purposes only.
                </p>
              ),
            },
            {
              title: 'Changes to This Policy',
              content: (
                <p className="text-t-med leading-relaxed">
                  We may update this privacy policy from time to time. We will notify you of material changes by
                  updating the date at the top of this page. Continued use of our service after changes constitutes
                  acceptance of the updated policy.
                </p>
              ),
            },
            {
              title: 'Contact Us',
              content: (
                <>
                  <p className="text-t-med leading-relaxed mb-4">
                    For any privacy-related questions, requests, or complaints, please contact our Privacy Officer:
                  </p>
                  <div className="bg-navy-3 border border-navy-5 rounded-xl p-5">
                    <p className="font-sora font-semibold text-white mb-1">2456867 Ontario Inc., operating as Caye Group</p>
                    <p className="text-t-med text-sm">Ontario, Canada</p>
                    <p className="text-t-med text-sm mt-1">
                      Email:{' '}
                      <a href="mailto:shelina@cayegroup.ai" className="text-blue-lt hover:text-white transition no-underline">
                        shelina@cayegroup.ai
                      </a>
                    </p>
                  </div>
                </>
              ),
            },
          ].map(section => (
            <section key={section.title}>
              <h2 className="font-sora text-xl font-semibold text-white mb-3 pb-3 border-b border-t-hair">
                {section.title}
              </h2>
              {section.content}
            </section>
          ))}

        </div>
      </div>

      {/* Footer */}
      <div className="text-center py-8 border-t border-t-hair mt-8">
        <p className="text-xs text-t-low">
          © 2026 2456867 Ontario Inc. o/a Caye Group — Ontario, Canada
        </p>
      </div>
    </main>
  );
}