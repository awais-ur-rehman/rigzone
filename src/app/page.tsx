import { DesktopNavbar } from '@/components/layout/DesktopNavbar';
import { MobileNavbar } from '@/components/layout/MobileNavbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/home/HeroSection';
import { AboutSection } from '@/components/sections/home/AboutSection';
import { ServicesSection } from '@/components/sections/home/ServicesSection';
import { ProductSection } from '@/components/sections/home/ProductSection';
import { ContactSection } from '@/components/sections/home/ContactSection';
import { ClientsSection } from '@/components/sections/home/ClientsSection';
import { ScrollSnapLayout } from '@/components/layout/ScrollSnapLayout';

export default function Home() {
  return (
    <ScrollSnapLayout disableOnTouch>
      <div className="min-h-screen bg-white">
        <DesktopNavbar />
        <MobileNavbar />
        <main>
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <ClientsSection />
          <ProductSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ScrollSnapLayout>
  );
}
