'use server';

import { supabase } from '@/lib/supabase';
import { sendReportEmail } from '@/lib/email';
import { SecurityReport } from '@/types/report';

export async function saveLead(
  name: string,
  email: string,
  tools: string[],
  report: SecurityReport
) {
  // Save lead to Supabase
  const { error } = await supabase
    .from('leads')
    .insert({
      name,
      email,
      tools,
      risk_level: report.overall_risk,
      risk_summary: report.risk_summary,
      report_json: report,
    });

  if (error) {
    console.error('Lead save error:', error);
    throw new Error('Failed to save lead');
  }

  // Send report email
  try {
    await sendReportEmail(name, email, tools, report);
  } catch (emailError) {
    // Log but don't fail the lead capture if email fails
    console.error('Email send failed:', emailError);
  }
}