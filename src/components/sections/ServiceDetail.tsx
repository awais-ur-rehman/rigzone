import { DetailCard } from '../ui/DetailCard';
import services from '@/data/services.json';

export function ServiceDetail() {
  const items = services;
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
              With over two decades of experience, RIGZONE offers trusted oilfield and energy services worldwide. Our expertise ensures dependable support, quality equipment and seamless project execution<span className="font-sans">.</span>
            </h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((s) => (
              <DetailCard
                key={s.id}
                title={s.title}
                description={s.description}
                imageUrl={s.imageUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


