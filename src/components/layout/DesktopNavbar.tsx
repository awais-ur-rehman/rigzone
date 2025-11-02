import { Button } from '../ui/Button';
import Image from 'next/image';
import { Container } from './Container';
import { ROUTES } from '../../routes';

export function DesktopNavbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#435057] hidden md:block w-full py-2">
      <Container>
        <div className="grid grid-cols-12 items-center h-18 gap-x-2 md:gap-x-4 lg:gap-x-6">
          {/* Logo */}
          <div className="col-span-2 md:col-span-2 lg:col-span-2 flex items-center">
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
          <div className="col-span-6 md:col-span-7 lg:col-span-8 text-[16px] md:text-[18px]">
            <div className="flex justify-center items-center space-x-2 md:space-x-4 lg:space-x-8">
              <a
                href={`${ROUTES.about}`}
                className="text-white hover:text-[#E15E00]  p-2 transition-colors"
              >
                About Us
              </a>
              <a
                href={`${ROUTES.services}`}
                className="text-white hover:text-[#E15E00] p-2 transition-colors"
              >
                Services
              </a>
              <a
                href={`${ROUTES.home}#clients`}
                className="text-white hover:text-[#E15E00] p-2 transition-colors"
              >
                Clients
              </a>
              <a
                href={`${ROUTES.products}`}
                className="text-white hover:text-[#E15E00] p-2 transition-colors"
              >
                Products
              </a>

            </div>
          </div>

          {/* CTA Button */}
          <div className="col-span-4 md:col-span-3 lg:col-span-2 justify-self-end">
            <a
              href={`${ROUTES.home}#contact`}
              className="inline-flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 font-[var(--font-motor-oil)] tracking-[1.2px] text-[16px] bg-[#E15E00] border border-[#E15E00] text-[#F6F4EB] hover:bg-[#c95600] focus:ring-[#E15E00] shadow-[0_4px_4px_rgba(0,0,0,0.25)] font-bold px-3 py-2 md:px-6 md:py-3"
            >
              Contact Us
              <img
                src="/icons/navigation/arrow.svg"
                alt="Arrow"
                className="ml-2 w-3 h-3"
              />
            </a>
          </div>
        </div>
      </Container>
    </nav>
  );
}
