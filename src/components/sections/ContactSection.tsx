'use client';

import { ContactForm } from '../forms/ContactForm';

export function ContactSection() {
  return (
    <section className="py-20 bg-white min-h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[var(--davys-gray)] mb-6">
                Need technical details or a quotation?
              </h2>
              <p className="text-lg text-[var(--davys-gray)] leading-relaxed">
                Our team is here to assist with every step, from technical
                inquiries and material sourcing to project consultations. Whatever
                your oilfield or engineering need, we're ready to help.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[var(--oxford-blue)] mb-3">
                General Inquiries
              </h3>
              <a
                href="mailto:info@rigzonellc.com"
                className="text-lg font-bold text-[var(--davys-gray)] hover:text-[var(--red-ncs)] transition-colors"
              >
                info@rigzonellc.com
              </a>
            </div>
          </div>

          {/* Right Column - Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
