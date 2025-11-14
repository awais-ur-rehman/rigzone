import { DesktopNavbar } from '../../components/layout/DesktopNavbar';
import { MobileNavbar } from '../../components/layout/MobileNavbar';
import { Footer } from '../../components/layout/Footer';
import { HeroSection } from '../../components/sections/HeroSection';
import { AboutSection } from '../../components/sections/AboutSection';
import { ServicesSection } from '../../components/sections/ServicesSection';
import { ProductSection } from '../../components/sections/ProductSection';
import { ContactSection } from '../../components/sections/ContactSection';
import { ClientsSection } from '@/components/sections/ClientsSection';
import { ScrollSnapLayout } from '@/components/layout/ScrollSnapLayout';

export function HomePage() {
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

export default HomePage;


