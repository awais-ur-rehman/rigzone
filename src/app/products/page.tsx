import { DesktopNavbar } from '@/components/layout/DesktopNavbar';
import { MobileNavbar } from '@/components/layout/MobileNavbar';
import { Footer } from '@/components/layout/Footer';
import { ProductDetail } from '@/components/sections/products/ProductDetail';
import { ContactSection } from '@/components/sections/home/ContactSection';

export default function Products() {
  return (
    <div className="min-h-screen bg-white">
      <DesktopNavbar />
      <MobileNavbar />
      <ProductDetail />
      <ContactSection />
      <Footer />
    </div>
  );
}
