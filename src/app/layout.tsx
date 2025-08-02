import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TCG Singapore - Premier Trading Card Marketplace",
  description: "Buy, sell, and trade Pokemon, Magic: The Gathering, Yu-Gi-Oh!, and other TCG cards in Singapore's premier marketplace",
  keywords: "trading cards, TCG, Pokemon, Magic, Yu-Gi-Oh, Singapore, marketplace, buy, sell, trade",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-gray-50">
        {children}
      </body>
    </html>
  );
}
