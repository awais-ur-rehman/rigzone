'use client';

import { DetailCard } from '@/components/ui/DetailCard';
import services from '@/data/services.json';
import { useEffect, useRef } from 'react';
import { trackServiceView } from '@/lib/analytics';

export function ServiceDetail() {
  const items = services;
  const trackedServices = useRef<Set<number>>(new Set());

  useEffect(() => {
    // Track service views when they come into viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const serviceId = parseInt(entry.target.getAttribute('data-service-id') || '0');
            if (serviceId && !trackedServices.current.has(serviceId)) {
              const service = items.find((s) => s.id === serviceId);
              if (service) {
                trackServiceView(service.id, service.title || service.titleFull || 'Unknown', 'view');
                trackedServices.current.add(serviceId);
              }
            }
          }
        });
      },
      { threshold: 0.5 } // Track when 50% of the card is visible
    );

    // Observe all service cards
    const cards = document.querySelectorAll('[data-service-id]');
    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, [items]);

  return (
    <section id="service-detail" className="min-h-screen pb-10 py-44 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="space-y-8">
          <div className="space-y-4 text-left">
            <div>
              <span className="bg-[#435057] text-[#F6F4EB] font-inter px-4 py-2 text-[16px] tracking-[1.2px]">
                Our Services
              </span>
            </div>
            <h1 className="text-3xl lg:text-[33px] font-motor-oil text-[#3E4C52] tracking-[1.2px] my-16">
              With over two decades of experience<span className="font-sans">,</span> <span className='text-[#E15E00]'>RIGZONE</span> offers trusted oilfield and energy services worldwide<span className="font-sans">.</span>
            </h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((s) => (
              <div key={s.id} id={s.slug} className="scroll-mt-32" data-service-id={s.id}>
                <DetailCard
                  title={s.title}
                  description={s.description}
                  imageUrl={s.imageUrl}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


