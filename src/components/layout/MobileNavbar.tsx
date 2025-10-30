'use client';

import { useState } from 'react';
import { Button } from '../ui/Button';
import { Container } from './Container';
import { ROUTES } from '../../routes';

export function MobileNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white  md:hidden">
      {/* Top Blue Bar */}
      <div className="h-1 bg-[var(--bright-blue)]"></div>

      <Container>
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-gradient-to-br from-[var(--orange-web)] via-[var(--red-ncs)] to-[var(--orange-web)] rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7l-10-5z" />
              </svg>
            </div>
            <a href="#" className="text-lg font-bold text-[var(--oxford-blue)]">
              rigzone
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <Button
              text="Get Quote"
              variant="primary"
              size="sm"
              href={ROUTES.contact}
            />

            <button
              onClick={toggleMenu}
              className="text-[var(--cadet-gray)] hover:text-[var(--oxford-blue)] focus:outline-none"
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
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-[var(--oxford-blue)]">
            <a
              href={`${ROUTES.home}#about`}
              className="text-[var(--oxford-blue)] block px-3 py-2 rounded-md text-base font-medium hover:bg-[var(--anti-flash-white)]"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </a>
            <a
              href={`${ROUTES.home}#services`}
              className="text-[var(--cadet-gray)] block px-3 py-2 rounded-md text-base font-medium hover:bg-[var(--anti-flash-white)]"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a
              href={`${ROUTES.home}#products`}
              className="text-[var(--cadet-gray)] block px-3 py-2 rounded-md text-base font-medium hover:bg-[var(--anti-flash-white)]"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </a>
            <a
              href={`${ROUTES.home}#industries`}
              className="text-[var(--cadet-gray)] block px-3 py-2 rounded-md text-base font-medium hover:bg-[var(--anti-flash-white)]"
              onClick={() => setIsMenuOpen(false)}
            >
              Industries
            </a>
            <a
              href={`${ROUTES.home}#clients`}
              className="text-[var(--cadet-gray)] block px-3 py-2 rounded-md text-base font-medium hover:bg-[var(--anti-flash-white)]"
              onClick={() => setIsMenuOpen(false)}
            >
              Clients and Partners
            </a>
            <a
              href={ROUTES.contact}
              className="text-[var(--cadet-gray)] block px-3 py-2 rounded-md text-base font-medium hover:bg-[var(--anti-flash-white)]"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        )}
      </Container>

      {/* Bottom Dark Blue Bar */}
      <div className="h-1 bg-[var(--oxford-blue)]"></div>
    </nav>
  );
}
