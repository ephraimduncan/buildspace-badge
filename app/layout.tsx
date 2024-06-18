import "./globals.css";
import { Manrope } from "next/font/google";

const font = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.variable}>{children}</body>
    </html>
  );
}
