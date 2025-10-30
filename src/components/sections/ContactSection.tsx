'use client';

import { ContactForm } from '../forms/ContactForm';

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white min-h-screen flex items-start">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-12 gap-x-6 items-start">
          {/* Left Column - Information */}
          <div className="space-y-20 col-span-12 lg:col-span-5">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-[44px] font-motor-oil font-regulat text-[#3E4C52] leading-10 tracking-[1.2px]">
                Need technical details or a quotation<span className="font-sans font-bold">?</span>
              </h2>
              <p className="text-[18px] font-inter text-[#0F1F08] leading-5 tracking-[1.2px]">
                Our team is here to assist with every step, from technical inquiries and material sourcing to project consultations. Whatever your oilfield or engineering need, we're ready to help.
              </p>
            </div>

            <div className="space-y-1">
              <h3 className="text-[16px] font-Inter tracking-[1.2px] text-[#435057]">General Inquiries</h3>
              <a
                href="mailto:info@rigzonellc.com"
                className="text-[18px] font-inter font-bold text-[#435057] hover:text-[#E15E00] transition-colors"
              >
                info@rigzonellc.com
              </a>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="col-span-12 lg:col-span-7 ps-10">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
