'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from './Container';
import { ROUTES } from '../../routes';
import services from '@/data/services.json';
import products from '@/data/products.json';

export function MobileNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<'services' | 'products' | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setOpenDropdown(null); // Reset dropdowns when menu is closed
  };

  const toggleDropdown = (dropdown: 'services' | 'products') => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const serviceMenuItems = services.map((service) => ({
    label: service.titleFull || service.title,
    href: `${ROUTES.services}#${service.slug}`,
  }));

  const productMenuItems = products
    .filter((product) => product.slug) // Only include products with slugs
    .map((product) => ({
      label: product.title,
      href: `${ROUTES.products}#product-${product.slug}`,
    }));

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#435057]  md:hidden">


      <Container>
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href={`${ROUTES.home}`} aria-label="Home" className="cursor-pointer">
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
              className="text-white hover:text-[#E15E00] focus:outline-none transition-colors cursor-pointer"
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
          <div className="px-2 pt-2 pb-6 space-y-1 bg-[#435057] border-t border-[#3E4C52] h-[calc(100vh-56px)] flex flex-col justify-between">
            <div className='space-y-4 font-motor-oil'>
              <a
                href={`${ROUTES.about}`}
                className="text-white block px-3 py-2 rounded-md text-2xl font-medium hover:bg-[#3E4C52] hover:text-[#E15E00] transition-colors cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </a>

              {/* Services Dropdown */}
              <div>
                <button
                  onClick={() => toggleDropdown('services')}
                  className="w-full text-white flex items-center justify-between px-3 py-2 rounded-md text-2xl font-medium hover:bg-[#3E4C52] hover:text-[#E15E00] transition-colors cursor-pointer"
                >
                  <span>Services</span>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`transition-transform duration-200 ml-2 ${openDropdown === 'services' ? 'rotate-180' : ''}`}
                  >
                    <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                {openDropdown === 'services' && (
                  <div className="pl-6 pr-3 py-2 space-y-2">
                    {serviceMenuItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="text-white block px-3 py-2 rounded-md text-lg font-medium hover:bg-[#3E4C52] hover:text-[#E15E00] transition-colors cursor-pointer"
                        onClick={() => {
                          setIsMenuOpen(false);
                          setOpenDropdown(null);
                        }}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>



              {/* Products Dropdown */}
              <div>
                <button
                  onClick={() => toggleDropdown('products')}
                  className="w-full text-white flex items-center justify-between px-3 py-2 rounded-md text-2xl font-medium hover:bg-[#3E4C52] hover:text-[#E15E00] transition-colors cursor-pointer"
                >
                  <span>Products</span>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`transition-transform duration-200 ml-2 ${openDropdown === 'products' ? 'rotate-180' : ''}`}
                  >
                    <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                {openDropdown === 'products' && (
                  <div className="pl-6 pr-3 py-2 space-y-2">
                    {productMenuItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="text-white block px-3 py-2 rounded-md text-lg font-medium hover:bg-[#3E4C52] hover:text-[#E15E00] transition-colors cursor-pointer"
                        onClick={() => {
                          setIsMenuOpen(false);
                          setOpenDropdown(null);
                        }}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <a
                href={`${ROUTES.home}#clients`}
                className="text-white block px-3 py-2 rounded-md text-2xl font-medium hover:bg-[#3E4C52] hover:text-[#E15E00] transition-colors cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Clients
              </a>
            </div>

            <div className="px-3">
              <a
                href={`${ROUTES.contact}`}
                className="inline-flex w-full items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 font-[var(--font-motor-oil)] tracking-[1.2px] text-[16px] bg-[#E15E00] border border-[#E15E00] text-[#F6F4EB] hover:bg-[#c95600] focus:ring-[#E15E00] shadow-[0_4px_4px_rgba(0,0,0,0.25)] font-bold px-6 py-3 cursor-pointer"
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
