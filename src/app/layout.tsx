import "./ui/globals.css";
import { rubik } from "./ui/fonts";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IP Address Tracker",
  description:
    "Search for any IP addresses or domains and see the key information and location",
  keywords: [
    "ip",
    "address",
    "tracker",
    "domain",
    "search",
    "geolocation",
    "ipgeolocation",
  ],
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
