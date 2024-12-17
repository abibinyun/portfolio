import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/templates/Navbar";
import Footer from "./components/templates/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhammad Bilal Ismail - Software Engineer",
  description: "Portfolio of Muhammad Bilal Ismail, showcasing software engineering skills, projects, and contact information.",
  keywords: "Web Development, ReactJS, NextJS, Software Engineer, Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable} ${geistMono.variable} antialiased
          flex flex-col justify-center items-center w-full min-h-[100vh] px-10 pb-24
      `}
      >
        <Navbar />
        <main className="flex-grow flex flex-col justify-center items-center py-[5rem] px-0 min-[640px]:px-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
