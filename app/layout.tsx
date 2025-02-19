import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "./context/authContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DELHA DESTINY SOLUTION LIMITED",
  description: "Delha Destiny Solutions provides access to affordable, quality land for residential, commercial, or investment purposes.",
  openGraph: {
    title: "Delha Destiny Solutions",
    description: "Discover affordable land for sale with Delha Destiny Solutions.",
    url: "https://www.delhadestiny.com",
    siteName: "Delha Destiny Solutions",
    images: [
      {
        url: "https://www.delhadestiny.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Delha Destiny Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@delhadestiny",
    creator: "@creator",
    title: "Delha Destiny Solutions",
    description: "Discover affordable land for sale with Delha Destiny Solutions.",
    images: "https://www.delhadestiny.com/og-image.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Wrap the app with AuthProvider */}
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
