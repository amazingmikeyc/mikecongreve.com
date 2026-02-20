import type { Metadata } from "next";
import { Geist, Geist_Mono, Raleway } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const raleway = Raleway({
    variable: "--font-raleway",
    subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mikecongreve.com",
  description: "Computers man",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${raleway.variable} ${geistMono.variable} antialiased bg-indigo-100`}
      >
      <header>
        <div className="text-3xl bg-sky-900 pt-5 pl-5">
            <Link href="/">
                <h1 className="text-white">mikecongreve.com <small>software development</small></h1>
            </Link>
        </div>
      </header>
          <div className="sm:flex bg-indigo-100 v-full min-h-screen">
              <div className="hidden md:block sm:w-1/5 ">
                <Image className="m-5 float-right" src="/mike_right.png" width={108} height={307} alt="" />
              </div>
              <div className="w-full  md:max-w-3/4">
                {children}
              </div>
          </div>
      <footer>
          &copy; 2026 M Congreve
      </footer>
      </body>
    </html>
  );
}
