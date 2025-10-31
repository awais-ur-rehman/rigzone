import { DesktopNavbar } from '../../components/layout/DesktopNavbar';
import { MobileNavbar } from '../../components/layout/MobileNavbar';
import { Footer } from '../../components/layout/Footer';
import { ServiceDetail } from '../../components/sections/ServiceDetail';
import { ContactSection } from '../../components/sections/ContactSection';

export function ServicesPage() {
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

export default ServicesPage;


