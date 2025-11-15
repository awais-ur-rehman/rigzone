'use client';

import Image from 'next/image';
import { useState } from 'react';

interface AboutCardProps {
  title: string;
  image: string;
  items: string[];
}

export function AboutCard({ title, image, items }: AboutCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group cursor-pointer overflow-hidden aspect-[5/6]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Background */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Orange Banner - Starts at bottom, expands on hover */}
      <div
        className={`absolute bottom-0 left-0 right-0 bg-[#E15E00] transition-all duration-500 ease-in-out overflow-hidden ${isHovered ? 'h-full' : 'h-[72px]'
          }`}
        style={{
          transformOrigin: 'bottom',
        }}
      >
        <div className={`h-full flex flex-col transition-all duration-500 ${isHovered ? 'p-6 justify-end' : 'px-4 py-4'}`}>
          {/* Title and Arrow Row - Aligned to left with gap-1 */}
          <div className="flex items-end flex-shrink-0 w-full gap-1">
            <h3 className="text-white text-lg font-inter font-semibold tracking-[1.2px] text-left whitespace-pre-line leading-tight">
              {title}
            </h3>
            <div className="flex-shrink-0">
              {isHovered ? (
                <img
                  src="/images/about/ARROW-DOWN.svg"
                  alt="Arrow Down"
                  className="w-4 h-4 transition-opacity duration-300"
                />
              ) : (
                <img
                  src="/images/about/ARROW-UP.svg"
                  alt="Arrow Up"
                  className="w-4 h-4 transition-opacity duration-300"
                />
              )}
            </div>
          </div>

          {/* Items List - Only visible on hover, aligned to bottom */}
          <div
            className={`transition-opacity duration-300 ${isHovered ? 'opacity-100 mt-6' : 'opacity-0 h-0'
              }`}
          >
            <ol className="space-y-2 list-decimal list-inside pl-1">
              {items.map((item, index) => (
                <li
                  key={index}
                  className="text-white text-base font-inter tracking-[1.2px] leading-relaxed"
                  style={{
                    animationDelay: `${index * 0.05}s`,
                  }}
                >
                  {item}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

