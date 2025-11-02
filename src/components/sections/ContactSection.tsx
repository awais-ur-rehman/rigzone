'use client';

import { ContactForm } from '../forms/ContactForm';

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white min-h-screen flex items-center">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-12 gap-x-6 items-start space-y-10 md:space-y-0">
          {/* Left Column - Information */}
          <div className="space-y-12 md:space-y-20 col-span-12 lg:col-span-5">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl lg:text-[44px] font-motor-oil font-regulat text-[#3E4C52] leading-8 md:leading-10 tracking-[1.2px]">
                Corporate Inquiries
              </h2>
              <p className="text-base md:text-[18px] font-inter text-[#0F1F08] leading-5 md:leading-6 tracking-[1px]">
                For all corporate inquiries, please complete the form below. Our representatives will get back to you shortly.
              </p>
            </div>

            <div className="space-y-1">
              <h3 className="text-[14px] md:text-[16px] font-Inter tracking-[1.2px] text-[#435057]">General Inquiries</h3>
              <a
                href="mailto:info@rigzonellc.com"
                className="text-base md:text-[18px] font-inter font-bold text-[#435057] hover:text-[#E15E00] transition-colors"
              >
                info@rigzonellc.com
              </a>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="col-span-12 lg:col-span-7 ps-0 lg:ps-10">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
