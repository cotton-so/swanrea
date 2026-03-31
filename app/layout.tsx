import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SWANREA Ltd. | Heat Pump & Air Conditioning Auckland",
  description:
    "Professional heat pump and air conditioning installation, servicing, and repairs across Auckland. Specialising in North Shore, Albany, and Hibiscus Coast.",
  keywords: [
    "heat pump Auckland",
    "heat pump installation",
    "heat pump servicing",
    "air conditioning Auckland",
    "air conditioning installation Auckland",
    "air conditioning repair Auckland",
    "HVAC Auckland",
    "heat pump North Shore",
    "heat pump Albany",
    "heat pump Hibiscus Coast",
    "air conditioning North Shore",
    "heat pump not working",
    "heat pump repair Auckland",
  ],
  openGraph: {
    title: "SWANREA Ltd. | Heat Pump & Air Conditioning Auckland",
    description:
      "Heat pump and air conditioning installation, servicing, and repairs across Auckland.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
