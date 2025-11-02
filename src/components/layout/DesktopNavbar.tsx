import { Button } from '../ui/Button';
import Image from 'next/image';
import { Container } from './Container';
import { ROUTES } from '../../routes';

export function DesktopNavbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#435057] hidden md:block w-full py-2">
      <Container>
        <div className="grid grid-cols-12 items-center h-18 gap-x-6">
          {/* Logo */}
          <div className="col-span-3 lg:col-span-2 flex items-center">
            <a href={`${ROUTES.home}`} aria-label="Home" >
              <Image
                src="/images/logo/Logo.svg"
                alt="RigZone Logo"
                width={100}
                height={100}
                priority
                className='w-full h-full'
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="col-span-7 lg:col-span-8 text-[18px]">
            <div className="flex justify-center items-center space-x-8">
              <a
                href={`${ROUTES.home}#about`}
                className="text-white hover:text-[#F6F4EB]  p-2 transition-colors"
              >
                About Us
              </a>
              <a
                href={`${ROUTES.services}`}
                className="text-white hover:text-[#F6F4EB] p-2 transition-colors"
              >
                Services
              </a>
              <a
                href={`${ROUTES.home}#clients`}
                className="text-white hover:text-[#F6F4EB] p-2 transition-colors"
              >
                Clients
              </a>
              <a
                href={`${ROUTES.products}`}
                className="text-white hover:text-[#F6F4EB] p-2 transition-colors"
              >
                Products
              </a>
              <a
                href={`${ROUTES.companyProfile}`}
                className="text-white hover:text-[#F6F4EB] p-2 transition-colors"
              >
                Company Profile
              </a>

            </div>
          </div>

          {/* CTA Button */}
          <div className="col-span-2 lg:col-span-2 justify-self-end">
            <Button
              text="Contact Us"
              icon={
                <img
                  src="/icons/navigation/arrow.svg"
                  alt="Arrow"
                  className="w-3 h-3"
                />
              }
              variant="primary"
              size="md"
              href={`${ROUTES.home}#contact`}
            />
          </div>
        </div>
      </Container>
    </nav>
  );
}
