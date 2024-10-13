import "./ui/globals.css";
import { rubik } from "./ui/fonts";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IP Address Tracker",
  description: "Search for any IP address or domain",
  keywords: ["ip", "address", "tracker", "domain", "search"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rubik.className} antialiased`}>{children}</body>
    </html>
  );
}
