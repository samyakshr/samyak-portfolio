import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Samyak Shrestha's Portfolio",
  description: "Data science & ML portfolio – projects, experiments, and dashboards. Specializing in survival analysis, machine learning, geospatial analytics, and data visualization.",
  keywords: ["data science", "machine learning", "statistics", "survival analysis", "data visualization", "portfolio"],
  authors: [{ name: "Samyak Shrestha" }],
  creator: "Samyak Shrestha",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://samyakshrestha.com",
    title: "Samyak Shrestha's Portfolio",
    description: "Data science & ML portfolio – projects, experiments, and dashboards.",
    siteName: "Samyak Shrestha's Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Samyak Shrestha's Portfolio",
    description: "Data science & ML portfolio – projects, experiments, and dashboards.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0f172a",
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="font-montserrat antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
