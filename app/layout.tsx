import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AKL Social Copy Generator",
  description: "Generate on-brand social media copy for Auckland Airport",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
