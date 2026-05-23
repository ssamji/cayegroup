import type { Metadata } from "next";
import { Sora, DM_Sans } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: 'Caye Group — AI Security for Small & Medium Business',
    template: '%s | Caye Group',
  },
  description: 'AI is already in your business. We make sure security is too. Free AI security risk assessment in 30 seconds — no technical knowledge required.',
  metadataBase: new URL('https://www.cayegroup.ai'),
  openGraph: {
    siteName: 'Caye Group',
    type: 'website',
    locale: 'en_CA',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${dmSans.variable}`}>
      <body className="antialiased font-dm bg-navy-0 text-t-high">
        {children}
      </body>
    </html>
  );
}