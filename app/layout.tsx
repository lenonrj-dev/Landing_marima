import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { MotionProvider } from "@/components/providers/MotionProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Marima — Landing",
  description: "Apelo luxuoso e contemporâneo para cada mulher.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${inter.variable} ${playfair.variable} bg-body text-[#111111] antialiased`}>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
