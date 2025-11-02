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
          <div className="px-2 pt-2 pb-3 space-y-1 bg-[#435057] border-t border-[#3E4C52] h-screen">
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
              href={`${ROUTES.products}`}
              className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-[#3E4C52] hover:text-[#E15E00] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </a>
            <a
              href={`${ROUTES.home}#industries`}
              className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-[#3E4C52] hover:text-[#E15E00] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Industries
            </a>
            <a
              href={`${ROUTES.home}#clients`}
              className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-[#3E4C52] hover:text-[#E15E00] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Clients and Partners
            </a>
            <a
              href={ROUTES.contact}
              className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-[#3E4C52] hover:text-[#E15E00] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        )}
      </Container>

    </nav>
  );
}
