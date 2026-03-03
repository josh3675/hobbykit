import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "KitUp — Find Your Perfect Starter Kit",
  description:
    "Handpicked beginner gear for the hobbies you've always wanted to try. Amazon UK affiliate links.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://kitup.webapps.life"
  ),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
