"use client"

import { useMemo, useState, useEffect, useRef } from 'react';
import products from '@/data/products.json';
import { ProductInfoCard } from '@/components/ui/ProductInfoCard';
import { trackProductView } from '@/lib/analytics';

export function ProductDetail() {
  const items = useMemo(() => products, []);
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const trackedProducts = useRef<Set<number>>(new Set());

  // Track product views when they come into viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const productId = parseInt(entry.target.getAttribute('data-product-id') || '0');
            if (productId && !trackedProducts.current.has(productId)) {
              const product = items.find((p: any) => p.id === productId);
              if (product) {
                trackProductView(product.id, product.title, 'view');
                trackedProducts.current.add(productId);
              }
            }
          }
        });
      },
      { threshold: 0.3 } // Track when 30% of the card is visible
    );

    // Observe all product cards
    const cards = document.querySelectorAll('[data-product-id]');
    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, [items]);

  // Track when a product is expanded
  useEffect(() => {
    if (expandedId !== null) {
      const product = items.find((p: any) => p.id === expandedId);
      if (product) {
        trackProductView(product.id, product.title, 'expand');
      }
    }
  }, [expandedId, items]);

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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[600px]">
            {items.map((p: any) => {
              const anchorId = `product-${p.slug}`;
              const isExpanded = expandedId === p.id;
              const isBlurred = expandedId !== null && expandedId !== p.id;
              return (
                <div
                  key={p.id}
                  id={anchorId}
                  data-product-id={p.id}
                  className={`${isExpanded ? 'row-span-2' : 'row-span-1'} ${isBlurred ? 'blur-[0.5px]' : ''} transition-all duration-500 ease-out will-change-transform scroll-mt-32`}
                >
                  <ProductInfoCard
                    title={p.title}
                    imageUrl={p.imageUrl}
                    summary={p.summary}
                    sizes={p.sizes}
                    standards={p.standards}
                    schedules={p.schedules}
                    materialGrade={p.materialGrade}
                    specialItems={p.specialItems}
                    extraNotes={p.extraNotes}
                    isExpanded={isExpanded}
                    onToggle={() => setExpandedId(isExpanded ? null : p.id)}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}


