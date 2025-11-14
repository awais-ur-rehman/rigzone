"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "../ui/Button";

export function HeroSection() {
  const images = [
    "/images/hero/img1.png",
    "/images/hero/img2.png",
    "/images/hero/img15.png",
    "/images/hero/img3.png",
    "/images/hero/img14.png",
    "/images/hero/img4.png",
    "/images/hero/img9.png",
    "/images/hero/img5.png",
    "/images/hero/img6.png",
    "/images/hero/img8.png",
    "/images/hero/img12.png",
    "/images/hero/img7.png",
    "/images/hero/img17.png",
  ];

  const [current, setCurrent] = useState(0);
  const [previous, setPrevious] = useState<number | null>(null);
  const [isFading, setIsFading] = useState(true);

  // Rotate images, but only render two layers (current + previous) to avoid downloading all at once
  useEffect(() => {
    const id = setInterval(() => {
      setPrevious(current);
      const next = (current + 1) % images.length;
      setCurrent(next);
      // Prepare: first frame has current = opacity-0, previous = opacity-100
      setIsFading(false);
      // Next frame: trigger the transition to fade
      requestAnimationFrame(() => requestAnimationFrame(() => setIsFading(true)));
      // Preload upcoming image
      const preload = new window.Image();
      preload.decoding = 'async';
      preload.loading = 'eager';
      preload.src = images[(next + 1) % images.length];
    }, 5000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  return (
    <section id="home" className="scroll-snap-section relative min-h-screen flex items-end py-[10%] overflow-hidden">

      {/* Background images crossfade - render only current and previous to cut initial downloads */}
      <div className="absolute inset-0 z-0">
        {previous !== null && (
          <img
            key={`prev-${previous}`}
            src={images[previous]}
            alt="Hero background"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1200ms] ease-in-out ${isFading ? 'opacity-0' : 'opacity-100'}`}
            loading="lazy"
            decoding="async"
          />
        )}
        <img
          key={`cur-${current}`}
          src={images[current]}
          alt="Hero background"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1200ms] ease-in-out ${isFading ? 'opacity-100' : 'opacity-0'}`}
          loading="eager"
          decoding="async"
        />
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
              <h1 className="font-motor-oil text-[60px] leading-tight font-normal text-white tracking-[0] max-w-none whitespace-normal lg:whitespace-nowrap">Oilfields<span className="font-sans font-bold">,</span> Energy Services</h1>
              <p className="font-inter text-[24px] text-white leading-relaxed tracking-[1.2px]">From Wellhead to Refinery.</p>
            </div>

            <div className="flex items-center md:gap-4 gap-1">
              <Button text="Get Started Now" icon={<img src="/icons/navigation/arrow.svg" alt="Arrow" className="lg:w-4 lg:h-4 w-3 h-3" />} variant="primary" size="lg" href="/contact" />
              <Button text="Discover More" icon={<img src="/icons/navigation/arrow.svg" alt="Arrow" className="lg:w-4 lg:h-4 w-3 h-3" />} variant="secondary" size="lg" href="/about" />
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
