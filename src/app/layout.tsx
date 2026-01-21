import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mak-edutech.vercel.app"),
  title:
    "MAK Edutech | Visas, Travel Packages, Flight & Railway Ticketing, Insurance & IELTS Coaching in Jalandhar Cantt",
  description:
    "MAK Edutech in Jalandhar Cantt, Jalandhar (Punjab) offers Tourist & Study Visas, Travel Packages, Flight Ticketing, Railway Ticketing & Reservations, Travel Insurance and IELTS coaching for students and families.",
  keywords: [
    "MAK Edutech",
    "visa consultant Jalandhar Cantt",
    "visa consultant Jalandhar",
    "tourist visa Jalandhar",
    "study visa Jalandhar",
    "railway ticket booking Jalandhar Cantt",
    "railway ticket reservations Jalandhar",
    "flight ticketing Jalandhar",
    "travel agency in Punjab",
    "IELTS coaching in Jalandhar",
  ],
  openGraph: {
    title:
      "MAK Edutech | Visas, Travel Packages, Flight & Railway Ticketing, Insurance & IELTS Coaching",
    description:
      "Visa and travel agency in Jalandhar Cantt providing Tourist & Study Visas, Travel Packages, Flight and Railway Ticketing & Reservations, Travel Insurance and IELTS coaching.",
    url: "https://mak-edutech.vercel.app",
    siteName: "MAK Edutech",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/makEdutech.png",
        width: 1200,
        height: 630,
        alt: "MAK Edutech visa, travel and coaching institute in Jalandhar Cantt",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-50 text-slate-900`}
      >
        {children}
      </body>
    </html>
  );
}


