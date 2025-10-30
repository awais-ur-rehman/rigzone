'use client';

import { ProductCard } from '../ui/ProductCard';
import { Button } from '../ui/Button';
import productsData from '@/data/products.json';

export function ProductSection() {
    const handleProductClick = (productId: number) => {
        console.log(`Product ${productId} clicked`);
    };

    return (
        <section id="products" className="py-20 bg-[var(--anti-flash-white)] min-h-screen flex items-center">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
                {/* Header on 12-column grid */}
                <div className="grid grid-cols-12 gap-x-6 mb-12 items-center">
                    <div className="col-span-12 lg:col-span-8 space-y-4">
                        {/* Badge */}
                        <div>
                            <span className="bg-[#435057] text-[#F6F4EB] font-inter px-4 py-2 text-[16px] tracking-[1.2px]">
                                Our Product Range
                            </span>
                        </div>

                        {/* Main Headline */}
                        <h2 className="text-3xl lg:text-[30px] font-inter font-bold text-[#3E4C52] leading-10 tracking-[1.2px]">
                            Certified PVF products meeting API, ASTM and ANSI standards.
                        </h2>
                    </div>

                    {/* CTA Button */}
                    <div className="col-span-12 lg:col-span-4 flex lg:justify-end items-center">
                        <Button
                            text="Explore All Products"
                            icon={
                                <img
                                    src="/icons/navigation/arrow.svg"
                                    alt="Arrow"
                                    className="w-4 h-4"
                                />
                            }
                            variant="primary"
                            size="lg"
                        />
                    </div>
                </div>

                {/* Product Grid: 1/2/4/5 across breakpoints */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    {productsData.map((product) => (
                        <div key={product.id}>
                            <ProductCard
                                title={product.title}
                                blueIcon={product.blueIcon}
                                greyIcon={product.greyIcon}
                                redArrow={product.redArrow}
                                blueArrow={product.blueArrow}
                                onCardClick={() => handleProductClick(product.id)}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
