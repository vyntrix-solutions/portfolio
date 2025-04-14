import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

// Use Inter as base font, similar to the Portfoy template
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vyntrix-Digital Solutions",
  description: "We are a cutting-edge IT agency delivering full-stack web development services including MERN & MEAN stack, UI/UX design, mobile apps, DevOps, and digital branding — your one-stop tech partner to turn ideas into reality.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <ClientBody>{children}</ClientBody>
    </html>
  );
}
