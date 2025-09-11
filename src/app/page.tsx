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
    <main className="flex min-h-screen flex-col items-center overflow-x-hidden">
      <HeroSection />
      {/* Wrapper for main content sections */}
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <ServicesSection />
        <PortfolioSection />
        <LiveDataShowcaseSection />
        <InteractiveDashboardSection />
        <UiShowcaseSection />
        <CrudShowcaseSection />
      </div>
      {/* Full-width sections */}
      <ContactSection />
    </main>
  );
}