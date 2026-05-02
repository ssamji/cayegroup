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
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 w-full max-w-md mx-auto">
      <div className="text-center mb-6">
        <div className="text-3xl mb-3">🔓</div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          Your remediation plan is ready
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed">
          Get your full action plan for{' '}
          <span className="font-medium text-gray-700">
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
          className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
        <input
          type="email"
          placeholder="Your work email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSubmit()}
          className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
      </div>

      {error && (
        <p className="text-red-500 text-xs mb-3 text-center">{error}</p>
      )}

      <button
        onClick={handleSubmit}
        disabled={isSubmitting}
        className="w-full py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition disabled:opacity-40 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Unlocking...' : 'Unlock my plan →'}
      </button>

      <p className="text-center text-xs text-gray-400 mt-3">
        🔒 No spam. One email with your full report.
      </p>
    </div>
  );
}