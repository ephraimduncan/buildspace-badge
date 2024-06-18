import { Toaster } from "sonner";
import "./globals.css";
import { Manrope } from "next/font/google";
import { Metadata } from "next";

const font = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "n&w badge",
  description: "Select your house and download your badge",
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
    </html>
  );
}
