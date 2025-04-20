
import React, { useEffect } from "react";
import { Navbar } from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import PortfolioSection from "@/components/portfolio-section";
import CtaSection from "@/components/cta-section";
import Footer from "@/components/footer";

const Index = () => {
  // Add Google Fonts
  useEffect(() => {
    const linkRaleway = document.createElement('link');
    linkRaleway.href = 'https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700;800&display=swap';
    linkRaleway.rel = 'stylesheet';
    
    const linkMontserrat = document.createElement('link');
    linkMontserrat.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap';
    linkMontserrat.rel = 'stylesheet';
    
    document.head.appendChild(linkRaleway);
    document.head.appendChild(linkMontserrat);
    
    return () => {
      document.head.removeChild(linkRaleway);
      document.head.removeChild(linkMontserrat);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <PortfolioSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
