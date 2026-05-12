import { Resend } from 'resend';
import { SecurityReport } from '@/types/report';

if (!process.env.RESEND_API_KEY) {
  throw new Error('RESEND_API_KEY environment variable is not set');
}

const resend = new Resend(process.env.RESEND_API_KEY);

const RISK_COLORS = {
  critical: '#DC2626',
  high: '#EA580C',
  medium: '#D97706',
  low: '#059669',
};

const RISK_LABELS = {
  critical: 'Critical',
  high: 'High',
  medium: 'Medium',
  low: 'Low',
};

export async function sendReportEmail(
  name: string,
  email: string,
  tools: string[],
  report: SecurityReport
) {
  const riskColor = RISK_COLORS[report.overall_risk];
  const riskLabel = RISK_LABELS[report.overall_risk];
  const firstName = name.split(' ')[0];

  const owaspRows = report.owasp_risks.map(risk => `
    <tr>
      <td style="padding: 12px 16px; border-bottom: 1px solid #F3F4F6;">
        <span style="background: ${RISK_COLORS[risk.severity]}; color: white; font-size: 11px; font-weight: bold; padding: 2px 8px; border-radius: 12px; margin-right: 8px;">${risk.id}</span>
        <strong style="color: #111827;">${risk.title}</strong>
        <span style="color: ${RISK_COLORS[risk.severity]}; font-size: 12px; float: right;">${RISK_LABELS[risk.severity]}</span>
        <p style="color: #6B7280; font-size: 13px; margin: 8px 0 0 0; line-height: 1.5;">${risk.description}</p>
      </td>
    </tr>
  `).join('');

  const nextSteps = report.next_steps.map((step, i) => `
    <tr>
      <td style="padding: 8px 16px; border-bottom: 1px solid #F3F4F6;">
        <span style="color: #2563EB; font-weight: bold; margin-right: 8px;">${i + 1}.</span>
        <span style="color: #374151; font-size: 14px;">${step}</span>
      </td>
    </tr>
  `).join('');
  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your AI Security Report - Caye Group</title>
</head>
<body style="margin: 0; padding: 0; background-color: #F9FAFB; font-family: Arial, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #F9FAFB; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width: 600px; width: 100%;">
          <tr>
            <td style="background-color: #1E40AF; padding: 24px 32px; border-radius: 12px 12px 0 0;">
              <span style="color: white; font-weight: bold; font-size: 18px;">Caye Group</span>
            </td>
          </tr>
          <tr>
            <td style="background-color: white; padding: 32px; border-radius: 0 0 12px 12px;">
              <p style="color: #111827; font-size: 16px; margin: 0 0 8px 0;">Hi ${firstName},</p>
              <p style="color: #6B7280; font-size: 14px; line-height: 1.6; margin: 0 0 32px 0;">
                Here is your complete AI security risk assessment for: 
                <strong style="color: #111827;">${tools.join(', ')}</strong>.
              </p>
              <table width="100%" cellpadding="0" cellspacing="0" style="background: #FEF3C7; border: 1px solid #FDE68A; border-radius: 12px; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 24px; text-align: center;">
                    <p style="color: #6B7280; font-size: 11px; font-weight: bold; letter-spacing: 1px; text-transform: uppercase; margin: 0 0 8px 0;">YOUR AI RISK SCORE</p>
                    <p style="color: ${riskColor}; font-size: 48px; font-weight: bold; margin: 0 0 12px 0;">${riskLabel}</p>
                    <p style="color: #374151; font-size: 14px; line-height: 1.6; margin: 0;">${report.risk_summary}</p>
                  </td>
                </tr>
              </table>
              <h2 style="color: #111827; font-size: 16px; margin: 0 0 12px 0; text-transform: uppercase; letter-spacing: 0.5px;">Vulnerabilities in Your Stack</h2>
              <table width="100%" cellpadding="0" cellspacing="0" style="border: 1px solid #E5E7EB; border-radius: 8px; margin-bottom: 24px;">
                ${owaspRows}
              </table>
              <h2 style="color: #111827; font-size: 16px; margin: 0 0 12px 0; text-transform: uppercase; letter-spacing: 0.5px;">Recent Threat to Watch</h2>
              <table width="100%" cellpadding="0" cellspacing="0" style="border: 1px solid #E5E7EB; border-radius: 8px; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 16px;">
                    <strong style="color: #111827; font-size: 14px;">${report.recent_threat.title}</strong>
                    <p style="color: #9CA3AF; font-size: 12px; margin: 4px 0;">${report.recent_threat.date}</p>
                    <p style="color: #6B7280; font-size: 13px; line-height: 1.5; margin: 8px 0 0 0;">${report.recent_threat.summary}</p>
                  </td>
                </tr>
              </table>
              <h2 style="color: #111827; font-size: 16px; margin: 0 0 12px 0; text-transform: uppercase; letter-spacing: 0.5px;">Your Action Plan</h2>
              <table width="100%" cellpadding="0" cellspacing="0" style="border: 1px solid #E5E7EB; border-radius: 8px; margin-bottom: 32px;">
                ${nextSteps}
              </table>
              <table width="100%" cellpadding="0" cellspacing="0" style="background: #EFF6FF; border: 1px solid #DBEAFE; border-radius: 12px; margin-bottom: 32px;">
                <tr>
                  <td style="padding: 24px; text-align: center;">
                    <p style="color: #1E40AF; font-weight: bold; font-size: 16px; margin: 0 0 8px 0;">Ready to implement your remediation plan?</p>
                    <p style="color: #6B7280; font-size: 14px; margin: 0 0 16px 0;">I work directly with SMB owners to implement these security measures without slowing down your business.</p>
                    <a href="mailto:shelina@cayegroup.ai?subject=AI Security Follow-up" style="background: #1E40AF; color: white; padding: 12px 32px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 14px; display: inline-block;">Email Shelina to Book a Call</a>
                  </td>
                </tr>
              </table>
              <p style="color: #9CA3AF; font-size: 12px; text-align: center; margin: 0; line-height: 1.6;">
                This report was generated by Caye Group for ${name}.<br>
                AI is already in your business. We make sure security is too.<br><br>
                <a href="https://cayegroup.ai/privacy" style="color: #9CA3AF;">Privacy Policy</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;

  const { data, error } = await resend.emails.send({
    from: 'Caye Group <shelina@cayegroup.ai>',
    to: email,
    subject: `Your AI Security Report - Risk Level: ${riskLabel}`,
    html,
  });

  if (error) {
    console.error('Email send error:', error);
    throw new Error('Failed to send report email');
  }

  return data;
}