"use client"

import { useMemo, useState } from 'react';
import products from '@/data/products.json';
import { ProductInfoCard } from '../ui/ProductInfoCard';
import { ProductOverlay } from '../ui/ProductOverlay';

export function ProductDetail() {
  const items = useMemo(() => products, []);
  const [openId, setOpenId] = useState<number | null>(null);
  const opened = items.find((p) => p.id === openId) as any | undefined;

  return (
    <section id="product-detail" className="min-h-screen pb-10 py-36 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="space-y-8">
          <div className="space-y-4 text-left">
            <div>
              <span className="bg-[#435057] text-[#F6F4EB] font-inter px-4 py-2 text-[16px] tracking-[1.2px]">
                Our Products
              </span>
            </div>
            <h1 className="text-3xl lg:text-[28px] font-motor-oil  text-[#3E4C52] tracking-[1.2px] my-16 me-10">
              We supply high quality<span className="font-sans">,</span> field<span className="font-sans">-</span>tested industrial equipment designed for demanding oilfield and energy operations<span className="font-sans">.</span> Every product we deliver reflects our commitment to safety<span className="font-sans">,</span> efficiency<span className="font-sans">,</span> and long<span className="font-sans">-</span>term reliability in the harshest environments<span className="font-sans">.</span>
            </h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((p: any) => (
              <ProductInfoCard
                key={p.id}
                title={p.title}
                imageUrl={p.imageUrl}
                summary={p.summary}
                sizes={p.sizes}
                standards={p.standards}
                onReadMore={() => setOpenId(p.id)}
              />
            ))}
          </div>
        </div>
      </div>

      {opened && (
        <ProductOverlay
          isOpen={!!opened}
          onClose={() => setOpenId(null)}
          title={opened.title}
          imageUrl={opened.imageUrl}
          summary={opened.summary}
          sizes={opened.sizes}
          schedules={opened.schedules}
          standards={opened.standards}
          materialGrade={opened.materialGrade}
          specialItems={opened.specialItems}
          extraNotes={opened.extraNotes}
        />
      )}
    </section>
  );
}


