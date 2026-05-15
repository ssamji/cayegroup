export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-sm font-bold">CG</span>
            </div>
            <span className="font-bold text-gray-900">Caye Group</span>
          </div>
          <a href="/" className="text-sm text-blue-600 hover:underline">
            ← Back to Assessment
          </a>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
        <p className="text-gray-500 text-sm mb-8">
          Last updated: {new Date().toLocaleDateString('en-CA', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </p>

        <div className="prose prose-gray max-w-none space-y-8">

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">About Us</h2>
            <p className="text-gray-600 leading-relaxed">
              This privacy policy applies to the AI Security Risk Assessment tool 
              operated by <strong>2456867 Ontario Inc., operating as Caye Group</strong> 
              (&quot;Caye Group&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), 
              a corporation incorporated under the laws of Ontario, Canada. Our 
              registered office is located in Ontario, Canada.
            </p>
            <p className="text-gray-600 leading-relaxed mt-3">
              We are committed to protecting your personal information in accordance 
              with the Personal Information Protection and Electronic Documents Act 
              (PIPEDA) and applicable Ontario privacy legislation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Information We Collect
            </h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              When you use our AI Security Risk Assessment tool, we collect the 
              following information:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>
                <strong>Name</strong> — provided voluntarily when you request 
                your full security report
              </li>
              <li>
                <strong>Email address</strong> — provided voluntarily to receive 
                your remediation plan
              </li>
              <li>
                <strong>AI tools selected</strong> — the list of AI tools you 
                indicate your business uses
              </li>
              <li>
                <strong>Risk assessment results</strong> — the security risk score 
                and report generated based on your tool selection
              </li>
              <li>
                <strong>Usage data</strong> — standard server logs including IP 
                address and browser type, collected automatically
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              How We Use Your Information
            </h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              We use your information for the following purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>
                To generate and deliver your personalized AI security risk assessment
              </li>
              <li>
                To send you your security remediation plan by email
              </li>
              <li>
                To follow up with relevant AI security information and services 
                that may be of interest to you
              </li>
              <li>
                To improve our assessment tool and services
              </li>
              <li>
                To comply with legal obligations
              </li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-3">
              By submitting your name and email address, you consent to receiving 
              communications from Caye Group related to your assessment results 
              and our AI security services. You may withdraw your consent at any 
              time by contacting us at the address below.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Third Party Services
            </h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              To provide our service, we share certain information with the 
              following third party providers:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>
                <strong>Anthropic, Inc.</strong> — your selected AI tools are 
                transmitted to Anthropic&apos;s API to generate your security 
                assessment. Anthropic is based in the United States. Your tool 
                selections (not your name or email) are processed by Anthropic. 
                Anthropic&apos;s privacy policy is available at anthropic.com.
              </li>
              <li>
                <strong>Supabase</strong> — your name, email, tool selections, 
                and risk score are stored in a Supabase database. Supabase is 
                based in the United States. Supabase&apos;s privacy policy is 
                available at supabase.com.
              </li>
              <li>
                <strong>Vercel</strong> — our application is hosted on Vercel&apos;s 
                infrastructure, based in the United States. Vercel&apos;s privacy 
                policy is available at vercel.com.
              </li>
              <li>
                <strong>Upstash</strong> — we use Upstash Redis for rate limiting. 
                IP addresses are temporarily processed for this purpose.
              </li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-3">
              By using our service, you acknowledge that your information may be 
              transferred to and processed in the United States. We take reasonable 
              steps to ensure these providers maintain appropriate security standards.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Data Retention
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We retain your personal information for as long as necessary to 
              provide our services and fulfill the purposes outlined in this policy. 
              If you wish to have your information deleted, please contact us and 
              we will remove your data within 30 days of your request.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Your Rights
            </h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              Under PIPEDA, you have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Withdraw consent to our use of your information</li>
              <li>Request deletion of your personal information</li>
              <li>
                File a complaint with the Office of the Privacy Commissioner 
                of Canada at priv.gc.ca
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Security
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We implement appropriate technical and organizational measures to 
              protect your personal information against unauthorized access, 
              alteration, disclosure, or destruction. All data is transmitted 
              over encrypted HTTPS connections. Access to stored personal 
              information is restricted through row-level security controls.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Cookies and Tracking
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our tool does not use cookies for tracking or advertising purposes. 
              Standard server logs are maintained for security and operational 
              purposes only.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Changes to This Policy
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We may update this privacy policy from time to time. We will notify 
              you of material changes by updating the date at the top of this page. 
              Continued use of our service after changes constitutes acceptance of 
              the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Contact Us
            </h2>
            <p className="text-gray-600 leading-relaxed">
              For any privacy-related questions, requests, or complaints, 
              please contact our Privacy Officer:
            </p>
            <div className="mt-3 p-4 bg-gray-100 rounded-xl text-gray-700">
              <p><strong>2456867 Ontario Inc., operating as Caye Group</strong></p>
              <p>Ontario, Canada</p>
              <p>
                Email:{' '}
                <a 
                  href="mailto:shelina@cayegroup.ai" 
                  className="text-blue-600 hover:underline"
                >
                  shelina@cayegroup.ai
                </a>
              </p>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}