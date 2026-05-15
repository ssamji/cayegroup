'use client';

import { useState } from 'react';
import ToolSelector from '@/components/ToolSelector';
import ReportView from '@/components/ReportView';
import EmailGate from '@/components/EmailGate';
import { SecurityReport } from '@/types/report';
import { saveLead } from '@/lib/actions';

type AppState = 'selecting' | 'loading' | 'report' | 'email' | 'unlocked';

export default function Home() {
  const [appState, setAppState] = useState<AppState>('selecting');
  const [selectedTools, setSelectedTools] = useState<string[]>([]);
  const [report, setReport] = useState<SecurityReport | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleToolSubmit = async (tools: string[]) => {
    setSelectedTools(tools);
    setAppState('loading');
    setError('');

    try {
      const res = await fetch('/api/report', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tools }),
      });

      if (!res.ok) throw new Error('Failed to generate report');

      const data: SecurityReport = await res.json();
      setReport(data);
      setAppState('report');
    } catch {
      setError('Something went wrong. Please try again.');
      setAppState('selecting');
    }
  };

  const handleEmailSubmit = async (name: string, email: string) => {
    setIsSubmitting(true);
    try {
      await saveLead(name, email, selectedTools, report!);
      setAppState('unlocked');
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-navy-0">

      {/* ── Nav ── */}
      <div className="bg-navy-0 border-b border-hair sticky top-0 z-50 backdrop-blur-sm">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="https://cayegroup.com" className="flex items-center gap-2 no-underline">
            <div className="w-8 h-8 bg-blue rounded-lg flex items-center justify-content-center flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                <path d="M10 2L3 5.5V10.5C3 14.5 6.1 18.2 10 19C13.9 18.2 17 14.5 17 10.5V5.5L10 2Z"
                  fill="white" fillOpacity="0.92"/>
              </svg>
            </div>
            <span className="font-sora font-bold text-white text-[17px] tracking-tight">
              Caye Group
            </span>
          </a>
          <span className="text-sm text-t-low hidden sm:block">
            AI Security Risk Assessment
          </span>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-12">

        {/* ── Hero — selecting state only ── */}
        {appState === 'selecting' && (
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-amber-dim border border-amber-500/25
                            text-amber-lt text-xs font-bold font-sora px-4 py-2 rounded-full
                            uppercase tracking-widest mb-6">
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                <path d="M5.5 1 1 3.25V6C1 8.25 3.025 10.35 5.5 11 7.975 10.35 10 8.25 10 6V3.25L5.5 1Z"
                  fill="#fbbf24"/>
              </svg>
              Free AI Security Assessment
            </div>
            <h1 className="font-sora text-4xl font-bold text-white mb-4 leading-tight tracking-tight">
              Is your team using AI safely?
            </h1>
            <p className="text-lg text-t-med max-w-xl mx-auto leading-relaxed">
              Find out in 30 seconds. Select the AI tools your business uses
              and get a personalized security risk report — no technical knowledge required.
            </p>
          </div>
        )}

        {/* ── Loading State ── */}
        {appState === 'loading' && (
          <div className="text-center py-24">
            <div className="inline-flex flex-col items-center gap-4">
              <div className="w-12 h-12 border-4 border-blue border-t-transparent rounded-full animate-spin" />
              <p className="text-white font-semibold font-sora">Analyzing your AI stack...</p>
              <p className="text-t-low text-sm">Checking against OWASP LLM Top 10</p>
            </div>
          </div>
        )}

        {/* ── Error ── */}
        {error && (
          <div className="bg-red-dim border border-red-500/30 text-red-400 rounded-xl
                          px-6 py-4 mb-6 text-sm text-center">
            {error}
          </div>
        )}

        {/* ── Tool Selector ── */}
        {appState === 'selecting' && (
          <ToolSelector onSubmit={handleToolSubmit} isLoading={false} />
        )}

        {/* ── Report ── */}
        {(appState === 'report' || appState === 'email' || appState === 'unlocked') && report && (
          <ReportView
            report={report}
            tools={selectedTools}
            isUnlocked={appState === 'unlocked'}
            onUnlock={() => {
              setAppState('email');
              setTimeout(() => {
                document.getElementById('email-gate')?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
          />
        )}

        {/* ── Email Gate ── */}
        {appState === 'email' && (
          <div className="mt-8" id="email-gate">
            <EmailGate
              tools={selectedTools}
              onSubmit={handleEmailSubmit}
              isSubmitting={isSubmitting}
            />
          </div>
        )}

        {/* ── Unlocked Confirmation ── */}
        {appState === 'unlocked' && (
          <div className="mt-8 text-center bg-green-500/10 border border-green-500/25 rounded-2xl p-6">
            <p className="text-green font-semibold font-sora">
              ✓ Your full report is unlocked
            </p>
            <p className="text-t-med text-sm mt-1">
              Check your inbox — your remediation plan is on its way.
            </p>
          </div>
        )}

      </div>

      {/* ── Footer ── */}
      <div className="text-center py-8 border-t border-hair mt-12">
        <a
          href="/privacy"
          className="text-sm text-t-low hover:text-t-med transition"
        >
          Privacy Policy
        </a>
        <p className="text-xs text-t-low mt-2">
          © 2026 2456867 Ontario Inc. o/a Caye Group — Ontario, Canada
        </p>
      </div>

    </main>
  );
}
