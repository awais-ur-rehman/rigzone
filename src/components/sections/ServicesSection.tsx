'use client';

import { useState } from 'react';
import { Card } from '../ui/Card';
import servicesData from '@/data/services.json';

export function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = servicesData.slice(0, 3);

  const Icon = ({ src }: { src: string }) => (
    <img src={src} alt="Service Icon" className="w-full h-full p-1 object-cover text-white" />
  );

  const ArrowIcon = ({ isHovered }: { isHovered: boolean }) => (
    <img
      src={isHovered ? "/images/services/blue-arrow.svg" : "/images/services/red-arrow.svg"}
      alt="Arrow"
      className="w-4 h-4"
    />
  );

  return (
    <section id="services" className="h-screen py-20 bg-white flex items-center">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full space-y-20">
        {/* Header */}
        <div className="text-center space-y-10 w-full">
          {/* Badge */}
          <div>
            <span className="bg-[#435057] text-[#F6F4EB] font-inter px-4 py-2 text-[18px] tracking-[1.2px]">
              Our Services
            </span>
          </div>

          {/* Main Headline */}
          <h2 className="text-3xl lg:text-[36px] font-inter font-bold text-[#3E4C52] leading-10 tracking-[1.2px] max-w-4xl mx-auto">
            Delivering end to end solutions across engineering, supply chain and oilfield operations.
          </h2>

        </div>

        {/* Service Cards laid out on 12-column grid */}
        <div className="grid grid-cols-12 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="col-span-12 md:col-span-6 lg:col-span-4"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Card
                accentColor={service.accentColor}
                icon={<Icon src={service.icon} />}
                title={service.title}
                description={service.description}
                ctaText="Read More"
                ctaIcon={<ArrowIcon isHovered={hoveredIndex === index} />}
                onCtaClick={() => console.log(`${service.title} clicked`)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
