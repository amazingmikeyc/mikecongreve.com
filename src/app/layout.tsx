import type { Metadata } from "next";
import { VT323, Share_Tech_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const vt323 = VT323({
  variable: "--font-vt323",
  subsets: ["latin"],
  weight: "400",
});

const shareTechMono = Share_Tech_Mono({
  variable: "--font-share-tech",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Mike Congreve",
  description: "Software development & engineering. Nearly two decades of reliable web systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${vt323.variable} ${shareTechMono.variable}`}>
        <header>
          <div className="bbc-header-bar">
            <Link href="/" className="bbc-site-name">
              MIKECONGREVE.COM
            </Link>
            <span className="bbc-site-tagline">SOFTWARE DEVELOPMENT</span>
            <span className="bbc-page-num">P100</span>
          </div>
          <nav className="bbc-nav-bar">
            <Link href="/">100 HOME</Link>
            <Link href="/career">200 CAREER</Link>
            <a href="//blog.mikecongreve.com">300 BLOG</a>
          </nav>
        </header>
        <main className="bbc-main">
          {children}
        </main>
        <footer className="bbc-footer-bar">
          <span>© 2026 M CONGREVE</span>
          <span>LEICESTER, UK</span>
        </footer>
        <script async src="https://scripts.simpleanalyticscdn.com/latest.js"></script>
      </body>
    </html>
  );
}
