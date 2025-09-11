import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ezra Furr",
  description: "Artist, Producer, Engineer",
  openGraph: {
    title: 'Ezra Furr',
    description: 'Artist, Producer, Engineer',
    url: 'https://www.ezrafurr.com/',
    siteName: 'Ezra Furr',
    images: [
      {
        url: 'https://www.ezrafurr.com/preview.png',
        width: 1200,
        height: 630,
        alt: 'Ezra Furr',
      },
    ],
    locale: 'en_US',
    type: 'website',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
