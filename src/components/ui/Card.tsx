'use client';

import React from 'react';

interface CardProps {
    icon?: React.ReactNode;
    title: string;
    description: string;
    ctaText?: string;
    ctaIcon?: React.ReactNode;
    onCtaClick?: () => void;
    className?: string;
    accentColor?: string; // hex color like #CE8B1E
}

export function Card({
    icon,
    title,
    description,
    ctaText,
    ctaIcon,
    onCtaClick,
    className = '',
    accentColor = '#E15E00',
}: CardProps) {
    return (
        <div
            style={{ ['--accent-color' as any]: accentColor }}
            className={`relative bg-[var(--anti-flash-white)] overflow-hidden px-6 py-6 shadow-[0_4px_4px_rgba(0,0,0,0.25)] group cursor-pointer transition-all duration-700 ease-in-out h-[400px] ${className}`}
        >
            {/* Ripple Effect (stays inside card) */}
            <div
                className="absolute left-14  top-16 w-16 h-16 rounded-full 
        scale-0 group-hover:scale-[20]
        transition-transform duration-1000 ease-in-out z-0 origin-center bg-[var(--accent-color)]"
            ></div>

            {/* Content */}
            <div className="relative z-10 h-full w-full flex flex-col justify-between space-y-1 py-4">
                {/* Icon Section */}
                {icon && (
                    <div className="relative mb-4 h-24 w-full flex">
                        <div
                            className="w-28 h-28 rounded-full bg-[var(--accent-color)]
                     flex items-center justify-center 
                     transition-all duration-1000 ease-in-out
                     group-hover:bg-[var(--accent-color)] 
                     group-hover:w-24 group-hover:h-24
                     transform
                     group-hover:translate-x-[calc(100%+6rem)]
                     group-hover:scale-125"
                        >
                            <div
                                className="text-white text-2xl transition-transform duration-1000 ease-in-out 
                       group-hover:scale-150"
                            >
                                {icon}
                            </div>
                        </div>
                    </div>

                )}


                {/* Title */}
                <div className="relative mt-8">
                    <h3
                        className="text-[20px] font-motor-oil font-regular tracking-[1.2px] text-[#435057] leading-6 max-w-[200px]
            transition-colors duration-700 delay-200 
            group-hover:text-white"
                    >
                        {title}
                    </h3>
                </div>

                {/* Description */}
                <div className="relative mt-4">
                    <p
                        className="text-[#435057] font-inter font-regular tracking-[1.2px] text-[16px] leading-5 
            transition-colors duration-700 delay-200 
            group-hover:text-white"
                    >
                        {description}
                    </p>
                </div>

                {/* CTA */}
                {ctaText && (
                    <div className="mt-8">
                        <button
                            onClick={onCtaClick}
                            className="flex items-center space-x-2 font-regular text-[#435057] font-motor-oil  tracking-[1.2px] text-[20px] 
              transition-colors duration-700 delay-200 group-hover:text-white"
                        >
                            <span>{ctaText}</span>
                            {ctaIcon && <div className="w-4 h-4">{ctaIcon}</div>}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

