import { DesktopNavbar } from '../../components/layout/DesktopNavbar';
import { MobileNavbar } from '../../components/layout/MobileNavbar';
import { Footer } from '../../components/layout/Footer';
import { ContactDetail } from '../../components/sections/ContactDetail';

export function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <DesktopNavbar />
      <MobileNavbar />

      <ContactDetail />

      <Footer />
    </div>
  );
}

export default ContactPage;

