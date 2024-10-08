import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { DM_Sans } from "next/font/google"
import AccessLocation from "@/components/AccessLocation";
import PhoneHeader from "@/components/PhoneHeader";

export const metadata: Metadata = {
  title: "Weather Vision",
  description: "Weather Vision",
};

const font = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "700", "900"]
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <head>
      <link rel="stylesheet" href="https://unpkg.com/leaflet@1.0.1/dist/leaflet.css" />

      </head>
      <body className={font.className}>
          <Header/>
          <PhoneHeader/>
          <main>{children}</main>
          <AccessLocation/>
      </body>
    </html>
  );
}
