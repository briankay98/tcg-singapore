import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navigation } from "@/components/layout/Navigation";
import { PWAInstallPrompt } from "@/components/pwa/PWAInstallPrompt";
import { NotificationProvider } from "@/components/providers/NotificationProvider";

export const metadata: Metadata = {
  title: {
    default: "TCG Singapore - Trading Card Marketplace",
    template: "%s | TCG Singapore"
  },
  description: "Singapore's premier mobile-first trading card marketplace with PayNow integration. Buy, sell, and trade Pokemon, Magic: The Gathering, Yu-Gi-Oh! cards safely.",
  keywords: ["trading cards", "singapore", "pokemon", "magic the gathering", "yugioh", "marketplace", "paynow"],
  authors: [{ name: "TCG Singapore Team" }],
  creator: "TCG Singapore",
  publisher: "TCG Singapore",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://tcg-singapore.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "TCG Singapore - Trading Card Marketplace",
    description: "Singapore's premier mobile-first trading card marketplace with PayNow integration",
    url: "https://tcg-singapore.vercel.app",
    siteName: "TCG Singapore",
    locale: "en_SG",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TCG Singapore Marketplace"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "TCG Singapore - Trading Card Marketplace",
    description: "Singapore's premier mobile-first trading card marketplace with PayNow integration",
    images: ["/og-image.png"]
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "TCG Singapore",
  },
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "application-name": "TCG Singapore",
    "msapplication-TileColor": "#dc2626",
    "msapplication-config": "/browserconfig.xml",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#dc2626" },
    { media: "(prefers-color-scheme: dark)", color: "#dc2626" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-SG" className="font-sans">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="TCG Singapore" />
        <meta name="msapplication-TileColor" content="#dc2626" />
        <meta name="msapplication-tap-highlight" content="no" />
      </head>
      <body className="min-h-screen bg-gray-50 text-gray-900 antialiased">
        <NotificationProvider>
          <div className="flex min-h-screen flex-col">
            <Navigation />
            <main className="flex-1 pb-20 md:pb-0">
              {children}
            </main>
          </div>
          <PWAInstallPrompt />
        </NotificationProvider>
      </body>
    </html>
  );
}
