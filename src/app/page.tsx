import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import LiveDataShowcaseSection from "@/components/LiveDataShowcaseSection";
import InteractiveDashboardSection from "@/components/InteractiveDashboardSection";
import UiShowcaseSection from "@/components/UiShowcaseSection";
import CrudShowcaseSection from "@/components/CrudShowcaseSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <LiveDataShowcaseSection />
      <InteractiveDashboardSection />
      <UiShowcaseSection />
      <CrudShowcaseSection />
      <ContactSection />
    </main>
  );
}