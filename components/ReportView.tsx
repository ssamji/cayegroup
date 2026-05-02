'use client';

import { SecurityReport } from '@/types/report';

interface ReportViewProps {
  report: SecurityReport;
  tools: string[];
  onUnlock: () => void;
  isUnlocked: boolean;
}

const RISK_CONFIG = {
  critical: { color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-200', badge: 'bg-red-600', label: 'Critical' },
  high: { color: 'text-orange-600', bg: 'bg-orange-50', border: 'border-orange-200', badge: 'bg-orange-500', label: 'High' },
  medium: { color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-200', badge: 'bg-amber-400', label: 'Medium' },
  low: { color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-200', badge: 'bg-emerald-500', label: 'Low' },
};

export default function ReportView({ report, tools, onUnlock, isUnlocked }: ReportViewProps) {
  const risk = RISK_CONFIG[report.overall_risk];
  const topRisk = report.owasp_risks[0];
  const remainingRisks = report.owasp_risks.slice(1);

  return (
    <div className="w-full max-w-2xl mx-auto">

      {/* Risk Score Header — always visible */}
      <div className={`rounded-2xl border ${risk.border} ${risk.bg} p-8 mb-6 text-center`}>
        <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
          Your AI Risk Score
        </p>
        <div className={`text-6xl font-bold ${risk.color} mb-3`}>
          {risk.label}
        </div>
        <p className="text-gray-700 text-base leading-relaxed max-w-md mx-auto">
          {report.risk_summary}
        </p>
      </div>

      {/* Top Risk Card — always visible */}
      {topRisk && (
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
            Top vulnerability in your stack
          </h3>
          <div className={`rounded-xl border ${RISK_CONFIG[topRisk.severity].border} bg-white p-5`}>
            <div className="flex items-center gap-3 mb-2">
              <span className={`text-xs font-bold px-2 py-1 rounded-full text-white ${RISK_CONFIG[topRisk.severity].badge}`}>
                {topRisk.id}
              </span>
              <span className="font-semibold text-gray-800">{topRisk.title}</span>
              <span className={`ml-auto text-xs font-medium ${RISK_CONFIG[topRisk.severity].color}`}>
                {RISK_CONFIG[topRisk.severity].label}
              </span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              {topRisk.description}
            </p>
          </div>
        </div>
      )}

      {/* Locked Section */}
      <div className="relative">

        {/* Blurred content */}
        <div className={`${!isUnlocked ? 'blur-sm pointer-events-none select-none' : ''} transition-all duration-500`}>
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
            Vulnerabilities in your stack
          </h3>
          <div className="space-y-3 mb-6">
            {remainingRisks.map(risk => (
              <div key={risk.id} className="rounded-xl border border-gray-100 bg-white p-5">
                <div className="flex items-center gap-3 mb-2">
                  <span className={`text-xs font-bold px-2 py-1 rounded-full text-white ${RISK_CONFIG[risk.severity].badge}`}>
                    {risk.id}
                  </span>
                  <span className="font-semibold text-gray-800">{risk.title}</span>
                  <span className={`ml-auto text-xs font-medium ${RISK_CONFIG[risk.severity].color}`}>
                    {RISK_CONFIG[risk.severity].label}
                  </span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{risk.description}</p>
              </div>
            ))}
          </div>

          {/* Recent Threat */}
          <div className="rounded-xl border border-gray-100 bg-white p-5 mb-6">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
              Recent threat to watch
            </h3>
            <p className="font-semibold text-gray-800 mb-1">{report.recent_threat.title}</p>
            <p className="text-xs text-gray-400 mb-2">{report.recent_threat.date}</p>
            <p className="text-gray-600 text-sm leading-relaxed">{report.recent_threat.summary}</p>
          </div>

          {/* Next Steps */}
          <div className="rounded-xl border border-gray-100 bg-white p-5">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
              Your action plan
            </h3>
            <ol className="space-y-2">
              {report.next_steps.map((step, i) => (
                <li key={i} className="flex gap-3 text-sm text-gray-600">
                  <span className="font-bold text-blue-600 shrink-0">{i + 1}.</span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Email Gate Overlay — soft wall */}
        {!isUnlocked && (
          <div className="absolute inset-0 flex items-start justify-center pt-8">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 mx-4 w-full max-w-md">
              <div className="text-center mb-6">
                <div className="text-2xl mb-2">🔓</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Your remediation plan is ready
                </h3>
                <p className="text-gray-500 text-sm">
                  Get your full action plan for{' '}
                  <span className="font-medium text-gray-700">
                    {tools.slice(0, 2).join(' and ')}
                    {tools.length > 2 ? ` and ${tools.length - 2} more` : ''}
                  </span>
                  {' '}delivered to your inbox.
                </p>
              </div>
              <button
                onClick={onUnlock}
                className="w-full py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition"
            >
                Unlock my plan →
                </button>
              <p className="text-center text-xs text-gray-400 mt-3">
                🔒 No spam. One email with your full report.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}