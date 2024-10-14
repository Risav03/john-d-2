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
        url: 'https://inspector-orange.vercel.app/footerchum.jpg', // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: 'https://inspector-orange.vercel.app/footerchum.jpg', // Must be an absolute URL
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
