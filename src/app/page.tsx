import Hero from "@/components/sections/Hero";
import CompanyOverview from "@/components/sections/CompanyOverview";
import VisionSection from "@/components/sections/VisionSection";
import BusinessHighlight from "@/components/sections/BusinessHighlight";
import GlobalNetwork from "@/components/sections/GlobalNetwork";
import ESGSection from "@/components/sections/ESGSection";
import NewsSection from "@/components/sections/NewsSection";

export default function Home() {
  return (
    <>
      <Hero/>
      <CompanyOverview />
      <VisionSection />
      <BusinessHighlight />
      <GlobalNetwork />
      <ESGSection />
      <NewsSection />
    </>
  );
}
