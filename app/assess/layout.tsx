import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free AI Security Risk Assessment | Caye Group',
  description: 'Select the AI tools your business uses and get a personalized security risk report instantly — built on OWASP LLM Top 10 standards. No technical knowledge required.',
  openGraph: {
    title: 'Free AI Security Risk Assessment | Caye Group',
    description: 'Find out which AI tools are creating risk in your business. Get your personalized report in 30 seconds — no email required to start.',
    url: 'https://www.cayegroup.ai/assess',
    siteName: 'Caye Group',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free AI Security Risk Assessment | Caye Group',
    description: 'Find out which AI tools are creating risk in your business. Get your personalized report in 30 seconds — no email required to start.',
  },
};

export default function AssessLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}