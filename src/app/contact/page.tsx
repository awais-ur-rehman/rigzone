import { DesktopNavbar } from '@/components/layout/DesktopNavbar';
import { MobileNavbar } from '@/components/layout/MobileNavbar';
import { Footer } from '@/components/layout/Footer';
import { ContactDetail } from '@/components/sections/contact/ContactDetail';

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <DesktopNavbar />
      <MobileNavbar />
      <ContactDetail />
      <Footer />
    </div>
  );
}
