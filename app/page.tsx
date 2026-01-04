import type { Metadata } from "next";
import { EntryLinktree } from "@/components/sections/EntryLinktree";

const whatsappNumber = "5524981467489";
const ogImage = "/images/hero-2.jpg";

export const metadata: Metadata = {
  title: "Marima Moda Fitness | Acesso Rapido",
  description: "Acesse a loja virtual, WhatsApp e promocoes da Marima em um toque.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Marima Moda Fitness",
    description: "Acesse a loja virtual, WhatsApp e promocoes da Marima em um toque.",
    url: "/",
    siteName: "Marima Moda Fitness",
    locale: "pt_BR",
    type: "website",
    images: [{ url: ogImage }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marima Moda Fitness",
    description: "Acesse a loja virtual, WhatsApp e promocoes da Marima em um toque.",
    images: [ogImage],
  },
};

export default function Home() {
  return (
    <div className="bg-body text-[#111111]">
      <main className="min-h-screen px-4 py-16 sm:py-20 flex items-center justify-center">
        <EntryLinktree whatsappNumber={whatsappNumber} />
      </main>
    </div>
  );
}
