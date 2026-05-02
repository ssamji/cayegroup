import { NextRequest, NextResponse } from 'next/server';
import { anthropic } from '@/lib/anthropic';
import { SecurityReport } from '@/types/report';

export async function POST(req: NextRequest) {
  try {
    const { tools } = await req.json();

    if (!tools || !Array.isArray(tools) || tools.length === 0) {
      return NextResponse.json(
        { error: 'tools array is required' },
        { status: 400 }
      );
    }

    const message = await anthropic.messages.create({
      model: 'claude-sonnet-4-5',
      max_tokens: 1024,
      messages: [
        {
          role: 'user',
          content: `You are a cybersecurity expert analyzing AI tool risks for a small business.
          
The business uses these AI tools: ${tools.join(', ')}.

Return a JSON security report with exactly this structure:
{
  "overall_risk": "high",
  "risk_summary": "Brief 2-3 sentence summary",
  "owasp_risks": [
    {
      "id": "LLM01",
      "title": "Risk title",
      "severity": "high",
      "description": "How this applies to their specific tools"
    }
  ],
  "recent_threat": {
    "title": "Threat name",
    "date": "2024-01",
    "summary": "Brief description"
  },
  "next_steps": [
    "Specific actionable step 1",
    "Specific actionable step 2"
  ]
}

Return only valid JSON. No markdown, no explanation.`,
        },
      ],
    });

    const content = message.content[0];
    if (content.type !== 'text') {
      throw new Error('Unexpected response type from Anthropic API');
    }

    const cleaned = content.text.replace(/^```json\s*/i, '').replace(/```\s*$/i, '').trim();
    const report: SecurityReport = JSON.parse(cleaned);
    return NextResponse.json(report);

  } catch (error) {
    console.error('Report generation error:', error);
    return NextResponse.json(
      { error: 'Failed to generate report' },
      { status: 500 }
    );
  }
}