import type { Metadata } from "next";
import localFont from "next/font/local";
import { Lilita_One } from "next/font/google";

import "./globals.css";

const inter = Lilita_One({ subsets: ["latin"], weight: ['400'] });


export const metadata: Metadata = {
  title: "Inspector Orange",
  description: "I am Inspector Orange and this is a small website about me :)",
  openGraph: {
    title: "Inspector Orange",
  description: "I am Inspector Orange and this is a small website about me :)",
    url: 'https://inspector-orange.vercel.app',
    siteName: 'Inspector Orange',
    images: [
      {
        url: 'https://opengraph.b-cdn.net/production/images/348c4f5e-86dc-4611-b588-26d63849b008.jpg?token=WUIoaDyhTF-eGOtHCy8pugFHPvdEmBD36wuTdGXdRCg&height=1200&width=1200&expires=33264902575', // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: 'https://opengraph.b-cdn.net/production/images/348c4f5e-86dc-4611-b588-26d63849b008.jpg?token=WUIoaDyhTF-eGOtHCy8pugFHPvdEmBD36wuTdGXdRCg&height=1200&width=1200&expires=33264902575', // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className + ` antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
