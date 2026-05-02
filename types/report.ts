export interface OWASPRisk {
  id: string;
  title: string;
  severity: 'critical' | 'high' | 'medium' | 'low';
  description: string;
}

export interface RecentThreat {
  title: string;
  date: string;
  summary: string;
}

export interface SecurityReport {
  overall_risk: 'critical' | 'high' | 'medium' | 'low';
  risk_summary: string;
  owasp_risks: OWASPRisk[];
  recent_threat: RecentThreat;
  next_steps: string[];
}