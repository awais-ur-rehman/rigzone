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
        <div className={`h-full flex flex-col transition-all duration-500 ${isHovered ? 'p-6' : 'p-4'}`}>
          {/* Title and Arrow Row */}
          <div className="flex items-center justify-between flex-shrink-0">
            <h3 className="text-white text-lg font-inter font-semibold tracking-[1.2px]">
              {title}
            </h3>
            <div className="flex-shrink-0 ml-4">
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

          {/* Items List - Only visible on hover */}
          <div
            className={`flex-1 overflow-y-auto transition-opacity duration-300 ${isHovered ? 'opacity-100 mt-6' : 'opacity-0 mt-0 h-0'
              }`}
          >
            <ol className="space-y-2 list-decimal list-inside">
              {items.map((item, index) => (
                <li
                  key={index}
                  className="text-white text-base font-inter tracking-[1.2px]"
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

