import { DesktopNavbar } from '@/components/layout/DesktopNavbar';
import { MobileNavbar } from '@/components/layout/MobileNavbar';
import { Footer } from '@/components/layout/Footer';
import { ContactSection } from '@/components/sections/home/ContactSection';
import { AboutDetail } from '@/components/sections/companyprofile/AboutDetail';

export default function CompanyProfile() {
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
