"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "../ui/Button";

export function HeroSection() {
  const images = [
    "/images/hero/img1.png",
    "/images/hero/img2.png",
    "/images/hero/img3.png",
    "/images/hero/img4.png",
  ];

  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev: number) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(id);
  }, [images.length]);

  return (
    <section id="home" className="relative min-h-screen flex items-end py-[10%] overflow-hidden">

      {/* Background images crossfade */}
      <div className="absolute inset-0 z-0">
        {images.map((src, index) => (
          <img
            key={src}
            src={src}
            alt="Hero background"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1200ms] ease-in-out ${index === current ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
      </div>


      <div className="absolute inset-0 bg-[#0A2342]/20 z-10" />

      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-12 gap-x-6">
          <div className="col-span-12 lg:col-span-6 lg:col-start-1 space-y-6 text-left">
            <div className="flex gap-4 flex-wrap justify-start">
              <img src="/images/hero/US.svg" alt="Hero Image 1" className="w-6 h-6 md:w-8 md:h-8" />
              <img src="/images/hero/AE.svg" alt="Hero Image 2" className="w-6 h-6 md:w-8 md:h-8" />
              <img src="/images/hero/PK.svg" alt="Hero Image 3" className="w-6 h-6 md:w-8 md:h-8" />
            </div>

            <div className="space-y-2 mb-10">
              <h1 className="font-motor-oil text-[60px] leading-tight font-normal text-white tracking-[0] max-w-none whitespace-normal lg:whitespace-nowrap">Oilfields and Energy Services</h1>
              <p className="font-inter text-[24px] text-white leading-relaxed tracking-[1.2px]">From Wellhead to Refinery.</p>
            </div>

            <div className="flex items-center gap-4 ">
              <Button text="Get Started Now" icon={<img src="/icons/navigation/arrow.svg" alt="Arrow" className="w-4 h-4" />} variant="primary" size="lg" />
              <Button text="Discover More" icon={<img src="/icons/navigation/arrow.svg" alt="Arrow" className="w-4 h-4" />} variant="secondary" size="lg" />
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
