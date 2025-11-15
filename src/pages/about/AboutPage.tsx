import { DesktopNavbar } from '../../components/layout/DesktopNavbar';
import { MobileNavbar } from '../../components/layout/MobileNavbar';
import { Footer } from '../../components/layout/Footer';
import { ContactSection } from '../../components/sections/ContactSection';
import { AboutDetail } from '../../components/sections/AboutDetail';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <DesktopNavbar />
      <MobileNavbar />
      <AboutDetail />
      <ContactSection variant="about" />
      <Footer />
    </div>
  );
}

export default AboutPage;


