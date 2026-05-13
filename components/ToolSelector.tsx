'use client';

import { useState } from 'react';

const COMMON_TOOLS = [
  'ChatGPT', 'Claude', 'Gemini', 'Copilot', 'Midjourney',
  'DALL-E', 'Notion AI', 'Grammarly', 'HubSpot AI', 'Jasper',
  'Perplexity', 'Runway', 'Whisper', 'Zapier AI', 'Salesforce Einstein'
];

interface ToolSelectorProps {
  onSubmit: (tools: string[]) => void;
  isLoading: boolean;
}

export default function ToolSelector({ onSubmit, isLoading }: ToolSelectorProps) {
  const [selected, setSelected] = useState<string[]>([]);
  const [search, setSearch] = useState('');

  const toggleTool = (tool: string) => {
    setSelected(prev =>
      prev.includes(tool) ? prev.filter(t => t !== tool) : [...prev, tool]
    );
  };

  const addCustomTool = () => {
    const trimmed = search.trim();
    if (trimmed && !selected.includes(trimmed)) {
      setSelected(prev => [...prev, trimmed]);
      setSearch('');
    }
  };

  const filtered = COMMON_TOOLS.filter(t =>
    t.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full max-w-2xl mx-auto">

      <h2 className="font-sora text-2xl font-semibold text-white mb-2">
        Which AI tools does your team use?
      </h2>
      <p className="text-t-med mb-6">
        Select all that apply — we&apos;ll generate a personalized security report in seconds.
      </p>

      {/* Search / add input */}
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Search or add a tool..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && addCustomTool()}
          className="flex-1 px-4 py-2.5 bg-navy-3 border border-navy-5 rounded-lg
                     text-sm text-white placeholder-t-low
                     focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue/40
                     transition"
        />
        {search.trim() && !COMMON_TOOLS.includes(search.trim()) && (
          <button
            onClick={addCustomTool}
            className="px-4 py-2 bg-blue-dim text-blue-lt border border-blue/25
                       rounded-lg text-sm font-medium hover:bg-blue/25 transition"
          >
            Add
          </button>
        )}
      </div>

      {/* Tool chips */}
      <div className="flex flex-wrap gap-2 mb-6">
        {filtered.map(tool => (
          <button
            key={tool}
            onClick={() => toggleTool(tool)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition
              ${selected.includes(tool)
                ? 'bg-blue text-white border-blue shadow-sm shadow-blue/30'
                : 'bg-navy-3 text-t-med border-navy-4 hover:border-[#3b82f6] hover:text-white'
              }`}
          >
            {tool}
          </button>
        ))}

        {/* Custom tools */}
        {selected
          .filter(t => !COMMON_TOOLS.includes(t))
          .map(tool => (
            <button
              key={tool}
              onClick={() => toggleTool(tool)}
              className="px-4 py-2 rounded-full text-sm font-medium border
                         bg-blue text-white border-blue"
            >
              {tool} ✕
            </button>
          ))}
      </div>

      {/* Submit */}
      <button
        onClick={() => onSubmit(selected)}
        disabled={selected.length === 0 || isLoading}
        className="w-full py-3.5 bg-[#2563eb] text-white rounded-xl font-sora font-semibold
                   text-base disabled:opacity-40 disabled:cursor-not-allowed
                   hover:bg-[#3b82f6] transition"
      >
        {isLoading ? 'Generating your report...' : 'Assess my risk →'}
      </button>

      {selected.length > 0 && (
        <p className="text-center text-sm text-t-low mt-3">
          {selected.length} tool{selected.length > 1 ? 's' : ''} selected
        </p>
      )}
    </div>
  );
}
