import { DesktopNavbar } from '../../components/layout/DesktopNavbar';
import { MobileNavbar } from '../../components/layout/MobileNavbar';
import { Footer } from '../../components/layout/Footer';
import { ProductDetail } from '../../components/sections/ProductDetail';
import { ContactSection } from '../../components/sections/ContactSection';

export function ProductsPage() {
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

export default ProductsPage;


