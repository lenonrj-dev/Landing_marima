import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { CategoriesList } from "@/components/sections/CategoriesList";
import { EditorialFeature } from "@/components/sections/EditorialFeature";
import { FullWidthRunway } from "@/components/sections/FullWidthRunway";
import { HeroCollage } from "@/components/sections/HeroCollage";
import { HeroIntro } from "@/components/sections/HeroIntro";
import { InstagramGrid } from "@/components/sections/InstagramGrid";
import { LargePortrait } from "@/components/sections/LargePortrait";
import { Newsletter } from "@/components/sections/Newsletter";
import { SeasonHighlights } from "@/components/sections/SeasonHighlights";
import { SeasonIntro } from "@/components/sections/SeasonIntro";

const ogImage = "/images/hero-2.jpg";

export const metadata: Metadata = {
  title: "Marima - Landing",
  description: "Apelo luxuoso e contemporaneo para cada mulher.",
  alternates: { canonical: "/pagina-de-promocoes" },
  openGraph: {
    title: "Marima - Landing",
    description: "Apelo luxuoso e contemporaneo para cada mulher.",
    url: "/pagina-de-promocoes",
    siteName: "Marima",
    locale: "pt_BR",
    type: "website",
    images: [{ url: ogImage }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marima - Landing",
    description: "Apelo luxuoso e contemporaneo para cada mulher.",
    images: [ogImage],
  },
};

export default function PromotionsPage() {
  return (
    <div className="bg-body text-[#111111]">
      <main>
        <Header />
        <HeroIntro />
        <HeroCollage />
        <SeasonIntro />
        <CategoriesList />
        <FullWidthRunway />
        <EditorialFeature />
        <SeasonHighlights />
        <LargePortrait />
        <InstagramGrid />
        <Newsletter />
        <Footer />
      </main>
    </div>
  );
}
