import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { headers } from "next/headers";
import SmoothScroll from "@/providers/smooth-scroll";
import Footer from "./_components/footer";
import Navbar from "./_components/navbar";
import QueryProvider from "@/providers/query-provider";
import RainbowKitProvider from "@/providers/rainbowkit-provider";
import { WagmiProviderWrapper } from "@/providers/wagmi";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "E3MEL Token | Revolutionary Digital Currency for Global Commerce",
  description:
    "Discover E3MEL Token - a next-generation digital currency designed for fast, secure transactions, staking rewards, and long-term value preservation. Join the future of decentralized finance.",
  keywords: [
    "E3MEL Token",
    "Digital Currency",
    "Cryptocurrency",
    "Medium of Exchange",
    "Store of Value",
    "Staking Rewards",
    "DeFi Token",
    "Blockchain Technology",
    "Cross-Border Payments",
    "Low-Cost Transactions",
    "Token Staking",
    "Passive Income",
    "Decentralized Finance",
    "Limited Supply Token",
    "Secure Digital Asset",
    "Global Payment Solution",
    "Token Economics",
    "Crypto Investment",
    "Digital Value Transfer",
    "Blockchain Innovation",
    "Future of Money",
    "Tokenomics",
    "Crypto Rewards",
    "Investment Token",
    "Financial Technology",
  ],
  creator: "TokenMinds",
  authors: {
    name: "TokenMinds",
    url: process.env.NEXT_PUBLIC_APP_URL || "https://e3mel.com",
  },
  publisher: "TokenMinds",
  applicationName: "E3MEL Token",
  twitter: {
    card: "summary_large_image",
    title: "E3MEL Token | Revolutionary Digital Currency for Global Commerce",
    description:
      "Discover E3MEL Token - a next-generation digital currency designed for fast, secure transactions, staking rewards, and long-term value preservation.",
    creator: "@tokenminds_co",
    images: [
      {
        url: `${
          process.env.NEXT_PUBLIC_APP_URL || "https://e3mel.com"
        }/images/E3-Blockraise-2.svg`,
        width: 1200,
        height: 630,
        alt: "E3MEL Token Logo",
      },
    ],
  },
  openGraph: {
    title: "E3MEL Token | Revolutionary Digital Currency for Global Commerce",
    description:
      "Discover E3MEL Token - a next-generation digital currency designed for fast, secure transactions, staking rewards, and long-term value preservation.",
    url: process.env.NEXT_PUBLIC_APP_URL || "https://e3mel.com",
    siteName: "E3MEL Token",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: `${
          process.env.NEXT_PUBLIC_APP_URL || "https://e3mel.com"
        }/images/E3-Blockraise-2.svg`,
        width: 1200,
        height: 630,
        alt: "E3MEL Token - The Future of Digital Currency",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Technology",
  classification: "Cryptocurrency",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  generator: "Next.js",
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
    yandex: process.env.YANDEX_VERIFICATION,
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_APP_URL || "https://e3mel.com",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookie = (await headers()).get("cookie") as string;
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased`}
      >
        <SmoothScroll>
          <QueryProvider>
            <WagmiProviderWrapper>
              <main className="flex w-full min-h-screen flex-col items-start justify-start font-inter">
                <Navbar />
                {children}

                <Footer />
              </main>
            </WagmiProviderWrapper>
          </QueryProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
