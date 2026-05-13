'use client';

import { SecurityReport } from '@/types/report';

interface ReportViewProps {
  report: SecurityReport;
  tools: string[];
  onUnlock: () => void;
  isUnlocked: boolean;
}

const RISK_CONFIG = {
  critical: {
    color:  'text-red-400',
    bg:     'bg-red-500/10',
    border: 'border-red-500/30',
    badge:  'bg-red-600',
    label:  'Critical',
    bar:    'bg-red-500',
  },
  high: {
    color:  'text-orange-400',
    bg:     'bg-orange-500/10',
    border: 'border-orange-500/30',
    badge:  'bg-orange-500',
    label:  'High',
    bar:    'bg-orange-500',
  },
  medium: {
    color:  'text-amber-400',
    bg:     'bg-amber-500/10',
    border: 'border-amber-500/30',
    badge:  'bg-amber-500',
    label:  'Medium',
    bar:    'bg-amber-400',
  },
  low: {
    color:  'text-green-400',
    bg:     'bg-green-500/10',
    border: 'border-green-500/30',
    badge:  'bg-green-600',
    label:  'Low',
    bar:    'bg-green-500',
  },
};

export default function ReportView({ report, tools, onUnlock, isUnlocked }: ReportViewProps) {
  const risk = RISK_CONFIG[report.overall_risk];
  const topRisk = report.owasp_risks[0];
  const remainingRisks = report.owasp_risks.slice(1);

  return (
    <div className="w-full max-w-2xl mx-auto">

      {/* ── Risk Score Card ── */}
      <div className={`rounded-2xl border ${risk.border} ${risk.bg} p-8 mb-6 text-center`}>
        <p className="text-xs font-bold font-sora text-t-low uppercase tracking-widest mb-3">
          Your AI Risk Score
        </p>
        <div className={`text-6xl font-bold font-sora ${risk.color} mb-4`}>
          {risk.label}
        </div>
        <p className="text-t-med text-base leading-relaxed max-w-md mx-auto">
          {report.risk_summary}
        </p>
      </div>

      {/* ── Top Vulnerability ── */}
      {topRisk && (
        <div className="mb-6">
          <h3 className="text-xs font-bold font-sora text-t-low uppercase tracking-widest mb-3">
            Top vulnerability in your stack
          </h3>
          <div className={`rounded-xl border ${RISK_CONFIG[topRisk.severity].border} bg-navy-3 p-5`}>
            <div className="flex items-center gap-3 mb-2">
              <span className={`text-xs font-bold px-2 py-1 rounded-full text-white
                               font-sora ${RISK_CONFIG[topRisk.severity].badge}`}>
                {topRisk.id}
              </span>
              <span className="font-semibold font-sora text-white">{topRisk.title}</span>
              <span className={`ml-auto text-xs font-medium font-sora
                               ${RISK_CONFIG[topRisk.severity].color}`}>
                {RISK_CONFIG[topRisk.severity].label}
              </span>
            </div>
            <p className="text-t-med text-sm leading-relaxed">
              {topRisk.description}
            </p>
          </div>
        </div>
      )}

      {/* ── Locked / Unlocked Section ── */}
      <div className="relative">

        {/* Blurred content */}
        <div className={`${!isUnlocked ? 'blur-sm pointer-events-none select-none' : ''}
                         transition-all duration-500`}>

          {/* Remaining vulnerabilities */}
          <h3 className="text-xs font-bold font-sora text-t-low uppercase tracking-widest mb-3">
            Vulnerabilities in your stack
          </h3>
          <div className="space-y-3 mb-6">
            {remainingRisks.map(r => (
              <div key={r.id} className="rounded-xl border border-hair bg-navy-3 p-5">
                <div className="flex items-center gap-3 mb-2">
                  <span className={`text-xs font-bold px-2 py-1 rounded-full text-white
                                   font-sora ${RISK_CONFIG[r.severity].badge}`}>
                    {r.id}
                  </span>
                  <span className="font-semibold font-sora text-white">{r.title}</span>
                  <span className={`ml-auto text-xs font-medium font-sora
                                   ${RISK_CONFIG[r.severity].color}`}>
                    {RISK_CONFIG[r.severity].label}
                  </span>
                </div>
                <p className="text-t-med text-sm leading-relaxed">{r.description}</p>
              </div>
            ))}
          </div>

          {/* Recent Threat */}
          <div className="rounded-xl border border-hair bg-navy-3 p-5 mb-6">
            <h3 className="text-xs font-bold font-sora text-t-low uppercase tracking-widest mb-3">
              Recent threat to watch
            </h3>
            <p className="font-semibold font-sora text-white mb-1">
              {report.recent_threat.title}
            </p>
            <p className="text-xs text-t-low mb-2">{report.recent_threat.date}</p>
            <p className="text-t-med text-sm leading-relaxed">{report.recent_threat.summary}</p>
          </div>

          {/* Action Plan */}
          <div className="rounded-xl border border-hair bg-navy-3 p-5">
            <h3 className="text-xs font-bold font-sora text-t-low uppercase tracking-widest mb-3">
              Your action plan
            </h3>
            <ol className="space-y-2">
              {report.next_steps.map((step, i) => (
                <li key={i} className="flex gap-3 text-sm text-t-med">
                  <span className="font-bold font-sora text-blue-lt shrink-0">{i + 1}.</span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* ── Gate Overlay ── */}
        {!isUnlocked && (
          <div className="absolute inset-0 flex items-start justify-center pt-8">
            <div className="bg-navy-3 rounded-2xl border border-navy-5 shadow-2xl p-8 mx-4 w-full max-w-md">
              <div className="text-center mb-6">
                {/* Lock icon */}
                <div className="w-12 h-12 bg-blue-dim border border-blue/25 rounded-xl
                                flex items-center justify-center mx-auto mb-4">
                  <svg width="22" height="22" fill="none" viewBox="0 0 22 22">
                    <rect x="3" y="10" width="16" height="10" rx="2"
                          stroke="#3b82f6" strokeWidth="1.75"/>
                    <path d="M7 10V7a4.5 4.5 0 0 1 9 0v3"
                          stroke="#3b82f6" strokeWidth="1.75" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3 className="font-sora text-xl font-bold text-white mb-2">
                  Your remediation plan is ready
                </h3>
                <p className="text-t-med text-sm leading-relaxed">
                  Get your full action plan for{' '}
                  <span className="font-medium text-white">
                    {tools.slice(0, 2).join(' and ')}
                    {tools.length > 2 ? ` and ${tools.length - 2} more` : ''}
                  </span>
                  {' '}delivered to your inbox.
                </p>
              </div>
              <button
                onClick={onUnlock}
                className="w-full py-3.5 bg-blue text-white rounded-xl font-sora
                           font-semibold hover:bg-blue-lt transition"
              >
                Unlock my plan →
              </button>
              <p className="text-center text-xs text-t-low mt-3">
                No spam. One email with your full report.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
