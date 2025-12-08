'use client';

import { AboutCard } from '@/components/ui/AboutCard';
import aboutProductsData from '@/data/aboutProducts.json';

export function AboutProductsSection() {
  return (
    <section className="min-h-screen py-32 bg-[#3E4C52] flex items-center">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="space-y-12">
          {/* Heading */}
          <h2 className="text-[#FCFDFE] text-3xl lg:text-[64px] font-motor-oil tracking-[1.2px] text-center max-w-4xl mx-auto">
            We also market and stock the following products
          </h2>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aboutProductsData.map((product) => (
              <AboutCard
                key={product.id}
                title={product.title}
                image={product.image}
                items={product.items}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

