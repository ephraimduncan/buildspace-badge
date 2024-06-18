import { Toaster } from "sonner";
import "./globals.css";
import { Manrope } from "next/font/google";
import { Metadata } from "next";
import Script from "next/script";

const font = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "n&w badge",
  description: "select your house and download your badge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.variable}>{children}</body>
      <Toaster />
      {process.env.NODE_ENV === "production" && (
        <Script
          async
          src="https://analytics.duncan.land/script.js"
          data-website-id="17173b2e-0a71-47d8-9bcc-83e9cd4c6260"
        />
      )}
    </html>
  );
}
