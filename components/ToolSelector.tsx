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
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        Which AI tools does your team use?
      </h2>
      <p className="text-gray-500 mb-6">
        Select all that apply — we'll generate a personalized security report in seconds.
      </p>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Search or add a tool..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && addCustomTool()}
          className="flex-1 px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
        {search.trim() && !COMMON_TOOLS.includes(search.trim()) && (
          <button
            onClick={addCustomTool}
            className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg text-sm font-medium hover:bg-blue-100 transition"
          >
            Add
          </button>
        )}
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {filtered.map(tool => (
          <button
            key={tool}
            onClick={() => toggleTool(tool)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
              selected.includes(tool)
                ? 'bg-blue-600 text-white border-blue-600'
                : 'bg-white text-gray-600 border-gray-200 hover:border-blue-300'
            }`}
          >
            {tool}
          </button>
        ))}
        {selected
          .filter(t => !COMMON_TOOLS.includes(t))
          .map(tool => (
            <button
              key={tool}
              onClick={() => toggleTool(tool)}
              className="px-4 py-2 rounded-full text-sm font-medium border bg-blue-600 text-white border-blue-600"
            >
              {tool} ✕
            </button>
          ))}
      </div>

      <button
        onClick={() => onSubmit(selected)}
        disabled={selected.length === 0 || isLoading}
        className="w-full py-3 bg-blue-600 text-white rounded-xl font-semibold text-base disabled:opacity-40 disabled:cursor-not-allowed hover:bg-blue-700 transition"
      >
        {isLoading ? 'Generating your report...' : `Assess my risk →`}
      </button>

      {selected.length > 0 && (
        <p className="text-center text-sm text-gray-400 mt-3">
          {selected.length} tool{selected.length > 1 ? 's' : ''} selected
        </p>
      )}
    </div>
  );
}