import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "George Okello | Lead Technical Virtual Assistant",
    template: "%s | George Okello"
  },
  description: "24/7 Technical Virtual Assistant specializing in IT support, workflow automation, and cybersecurity solutions. Remote tech support for businesses worldwide.",
  keywords: [
    "Technical Virtual Assistant",
    "IT Support Specialist",
    "Remote Tech Support",
    "Workflow Automation",
    "Cybersecurity Consultant",
    "Cloud Solutions",
    "24/7 Tech Help",
    "George Okello"
  ],
  authors: [{ name: "George Okello" }],
  creator: "George Okello",
  publisher: "George Okello",
  metadataBase: new URL("https://www.georgeokello.com"), // Replace with your actual domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "George Okello | Lead Technical Virtual Assistant",
    description: "Your 24/7 Technical Problem-Solver for IT support, automation & cybersecurity",
    url: "https://www.georgeokello.com",
    siteName: "George Okello - Technical VA",
    images: [
      {
        url: "/og-image.jpg", // Replace with your OpenGraph image
        width: 1200,
        height: 630,
        alt: "George Okello - Technical Virtual Assistant",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "George Okello | Lead Technical Virtual Assistant",
    description: "24/7 tech support & automation solutions for businesses",
    creator: "@georgeokello", // Replace with your Twitter handle
    images: ["/twitter-image.jpg"], // Replace with your Twitter card image
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
  verification: {
    google: "your-google-verification-code", // Add Google Search Console verification
    other: {
      "msvalidate.01": "your-bing-verification-code", // Add Bing verification if needed
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        <Navbar />
        <main>{children}</main>
        <Footer />
        {/* Consider adding structured data JSON-LD here */}
      </body>
    </html>
  );
}