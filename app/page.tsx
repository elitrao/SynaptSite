import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { CasesSection } from "@/components/sections/CasesSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { Hero } from "@/components/sections/Hero";
import { MetricsSection } from "@/components/sections/MetricsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Перейти к содержанию
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <MetricsSection />
        <ServicesSection />
        <CasesSection />
        <ContactSection />
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}
