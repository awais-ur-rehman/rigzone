import Image from 'next/image';

export function AboutDetail() {
    return (
        <section className="min-h-screen py-32 bg-white flex items-center">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
                <div className="space-y-12">
                    {/* First Row - Title */}
                    <div>
                        <p className="text-2xl lg:text-[33px] font-motor-oil text-[#3E4C52] leading-10 tracking-[0.2px]">
                            Rigzone Oilfields<span className="font-sans font-semibold">,</span> Energy Services is a trusted global supplier of specialized industrial equipment<span className="font-sans font-semibold">,</span> engineering solutions<span className="font-sans font-semibold">,</span> and field services for the Oil<span className="font-sans font-semibold">,</span> Gas<span className="font-sans font-semibold">,</span> Petrochemical<span className="font-sans font-semibold">,</span> and Energy sectors<span className="font-sans font-semibold">.</span>
                        </p>
                    </div>

                    {/* Second Row - Two Columns */}
                    <div className="grid grid-cols-12 gap-x-4 items-center">
                        {/* Left Column - Text Details */}
                        <div className="col-span-12 lg:col-span-4 space-y-8">
                            <p className="text-lg lg:text-[17.2px] font-inter text-[#3E4C52] leading-7 tracking-[1.2px]">
                                Founded in 2005 in the United States, Rigzone has built a reputation for excellence, precision, and reliability through more than two decades of international service. With offices in Maryland (USA) and Karachi (Pakistan), we proudly support major projects across Southeast Asia, the Middle East, Europe, and North America.
                            </p>

                            <p className="text-lg lg:text-[17.2px] font-inter text-[#3E4C52] leading-7 tracking-[1.2px]">
                                Our commitment is simple: to deliver dependable, high-quality solutions that empower industries to perform safely and efficiently. By combining procurement, engineering, fabrication, and logistics under one roof, Rigzone ensures seamless coordination from design to delivery, providing clients with integrated, end-to-end project support.
                            </p>
                        </div>

                        {/* Right Column - World Map */}
                        <div className="col-span-12 lg:col-span-8">
                            <div className="relative">
                                <Image
                                    src="/images/about/map.svg"
                                    alt="World map showing Rigzone office locations"
                                    width={100}
                                    height={100}
                                    className="object-cover h-full w-full"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

