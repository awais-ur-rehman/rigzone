'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Container } from './Container';
import { ROUTES } from '../../routes';

export function MobileNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#435057]  md:hidden">


      <Container>
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href={`${ROUTES.home}`} aria-label="Home">
              <Image
                src="/images/logo/Logo.svg"
                alt="RigZone Logo"
                width={100}
                height={100}
                priority
                className='h-8 w-auto'
              />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-[#E15E00] focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="px-2 pt-2 pb-6 space-y-1 bg-[#435057] border-t border-[#3E4C52] h-screen">
            <a
              href={`${ROUTES.about}`}
              className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-[#3E4C52] hover:text-[#E15E00] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </a>
            <a
              href={`${ROUTES.services}`}
              className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-[#3E4C52] hover:text-[#E15E00] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a
              href={`${ROUTES.home}#clients`}
              className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-[#3E4C52] hover:text-[#E15E00] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Clients
            </a>
            <a
              href={`${ROUTES.products}`}
              className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-[#3E4C52] hover:text-[#E15E00] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </a>

            <div className="mt-4 px-3">
              <a
                href={`${ROUTES.contact}`}
                className="inline-flex w-full items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 font-[var(--font-motor-oil)] tracking-[1.2px] text-[16px] bg-[#E15E00] border border-[#E15E00] text-[#F6F4EB] hover:bg-[#c95600] focus:ring-[#E15E00] shadow-[0_4px_4px_rgba(0,0,0,0.25)] font-bold px-6 py-3"
                onClick={() => setIsMenuOpen(false)}
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
        )}
      </Container>

    </nav>
  );
}
