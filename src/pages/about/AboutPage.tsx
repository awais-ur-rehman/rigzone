import { DesktopNavbar } from '../../components/layout/DesktopNavbar';
import { MobileNavbar } from '../../components/layout/MobileNavbar';
import { Footer } from '../../components/layout/Footer';
import { Container } from '../../components/layout/Container';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <DesktopNavbar />
      <MobileNavbar />
      <main className="pt-24 pb-16">
        <Container>
          <div className="grid grid-cols-12 gap-x-6">
            <div className="col-span-12">
              <h1 className="text-2xl font-semibold">About</h1>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default AboutPage;


