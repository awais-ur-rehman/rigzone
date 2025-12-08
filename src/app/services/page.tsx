import { DesktopNavbar } from '@/components/layout/DesktopNavbar';
import { MobileNavbar } from '@/components/layout/MobileNavbar';
import { Footer } from '@/components/layout/Footer';
import { ServiceDetail } from '@/components/sections/services/ServiceDetail';
import { ContactSection } from '@/components/sections/home/ContactSection';

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      <DesktopNavbar />
      <MobileNavbar />
      <ServiceDetail />
      <ContactSection />
      <Footer />
    </div>
  );
}
