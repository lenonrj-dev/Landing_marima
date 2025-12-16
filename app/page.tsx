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

export default function Home() {
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
