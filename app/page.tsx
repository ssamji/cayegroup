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
    } catch (_err) {
      setError('Something went wrong. Please try again.');
      setAppState('selecting');
    }
  };

  const handleEmailSubmit = async (name: string, email: string) => {
  setIsSubmitting(true);
  try {
    await saveLead(name, email, selectedTools, report!);
    setAppState('unlocked');
  } catch (_err) {
    setError('Something went wrong. Please try again.');
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-sm font-bold">CV</span>
            </div>
            <span className="font-bold text-gray-900">ClearVector</span>
          </div>
          <span className="text-sm text-gray-400">AI Security Risk Assessment</span>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-12">

        {/* Hero — only shown on selecting state */}
        {appState === 'selecting' && (
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-sm font-medium px-4 py-2 rounded-full mb-6">
              🛡️ Free AI Security Assessment
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Is your team using AI safely?
            </h1>
            <p className="text-lg text-gray-500 max-w-xl mx-auto">
              Find out in 30 seconds. Select the AI tools your business uses
              and get a personalized security risk report — no technical knowledge required.
            </p>
          </div>
        )}

        {/* Loading State */}
        {appState === 'loading' && (
          <div className="text-center py-24">
            <div className="inline-flex flex-col items-center gap-4">
              <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
              <p className="text-gray-600 font-medium">Analyzing your AI stack...</p>
              <p className="text-gray-400 text-sm">Checking against OWASP LLM Top 10</p>
            </div>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 rounded-xl px-6 py-4 mb-6 text-sm text-center">
            {error}
          </div>
        )}

        {/* Tool Selector */}
        {appState === 'selecting' && (
          <ToolSelector
            onSubmit={handleToolSubmit}
            isLoading={false}
          />
        )}

        {/* Report */}
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
        {/* Email Gate */}
        {appState === 'email' && (
          <div className="mt-8" id="email-gate">
            <EmailGate
              tools={selectedTools}
              onSubmit={handleEmailSubmit}
              isSubmitting={isSubmitting}
            />
          </div>
    )}
        {/* Unlocked confirmation */}
        {appState === 'unlocked' && (
          <div className="mt-8 text-center bg-emerald-50 border border-emerald-200 rounded-2xl p-6">
            <p className="text-emerald-700 font-semibold">✅ Your full report is unlocked</p>
            <p className="text-emerald-600 text-sm mt-1">Check your inbox — your remediation plan is on its way.</p>
          </div>
        )}

      </div>
    </main>
  );
}