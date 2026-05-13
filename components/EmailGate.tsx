'use client';

import { useState } from 'react';

interface EmailGateProps {
  tools: string[];
  onSubmit: (name: string, email: string) => void;
  isSubmitting: boolean;
}

export default function EmailGate({ tools, onSubmit, isSubmitting }: EmailGateProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (!name.trim()) {
      setError('Please enter your name.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    onSubmit(name.trim(), email.trim());
  };

  return (
    <div className="bg-navy-3 rounded-2xl border border-navy-5 p-8 w-full max-w-md mx-auto">
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

      <div className="space-y-3 mb-4">
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={e => setName(e.target.value)}
          className="w-full px-4 py-3 bg-navy-2 border border-navy-5 rounded-xl
                     text-sm text-white placeholder-t-low
                     focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue/40
                     transition"
        />
        <input
          type="email"
          placeholder="Your work email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSubmit()}
          className="w-full px-4 py-3 bg-navy-2 border border-navy-5 rounded-xl
                     text-sm text-white placeholder-t-low
                     focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue/40
                     transition"
        />
      </div>

      {error && (
        <p className="text-red-400 text-xs mb-3 text-center">{error}</p>
      )}

      <button
        onClick={handleSubmit}
        disabled={isSubmitting}
        className="w-full py-3.5 bg-blue text-white rounded-xl font-sora font-semibold
                   hover:bg-blue-lt transition disabled:opacity-40 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Unlocking...' : 'Unlock my plan →'}
      </button>

      <p className="text-center text-xs text-t-low mt-3">
        No spam. One email with your full report.
      </p>
    </div>
  );
}
