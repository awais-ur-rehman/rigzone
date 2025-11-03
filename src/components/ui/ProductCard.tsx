'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface ProductCardProps {
    title: string;
    blueIcon: string;
    greyIcon: string;
    redArrow: string;
    blueArrow: string;
    onCardClick?: () => void;
}

export function ProductCard({
    title,
    blueIcon,
    greyIcon,
    redArrow,
    blueArrow,
    onCardClick,
}: ProductCardProps) {
    const [isHovered, setIsHovered] = useState(false);

    // Preload hover-state assets to eliminate first-hover delay
    useEffect(() => {
        if (typeof window === 'undefined') return;
        const preloadGrey = new window.Image();
        preloadGrey.decoding = 'async';
        preloadGrey.loading = 'eager';
        preloadGrey.src = greyIcon;

        const preloadBlueArrow = new window.Image();
        preloadBlueArrow.decoding = 'async';
        preloadBlueArrow.loading = 'eager';
        preloadBlueArrow.src = blueArrow;
    }, [greyIcon, blueArrow]);

    return (
        <div
            className="relative bg-white shadow-[0_4px_4px_rgba(0,0,0,0.25)] p-6 cursor-pointer group transition-all duration-300 ease-in-out hover:bg-[#c95600] h-[240px] flex flex-col justify-between"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={onCardClick}
        >
            {/* Icon */}
            <div className="flex justify-center">
                <Image
                    src={isHovered ? greyIcon : blueIcon}
                    alt={title}
                    width={110}
                    height={110}
                    className="transition-all duration-300"
                />
            </div>

            {/* Title */}
            <div className="flex items-end space-x-2 leading-tight mt-4 h-[56px]">
                <h3
                    className={`text-[18px] font-motor-oil tracking-[1.2px] transition-colors duration-300 leading-5 ${isHovered
                        ? 'text-white'
                        : 'text-[#435057]'
                        } max-w-[240px]`}
                >
                    {title}
                </h3>

                {/* Arrow */}
                <Image
                    src={isHovered ? blueArrow : redArrow}
                    alt="arrow"
                    width={16}
                    height={16}
                    className="transition-all duration-300"
                />
            </div>
        </div>
    );
}
