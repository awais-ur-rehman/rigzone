import Image from 'next/image';

export function AboutDetail() {
    return (
        <section className="min-h-screen py-32 bg-[#3E4C52] flex items-center">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
                <div className="space-y-12">
                    {/* First Section - Company Profile */}
                    <div className="grid grid-cols-12 gap-x-4 gap-y-8 items-start">
                        {/* Left Column - Text Content */}
                        <div className="col-span-12 lg:col-span-4 space-y-8">
                            {/* Company Profile Chip */}
                            <div className="inline-block">
                                <span className="bg-[#E15E00] text-[#FCFDFE] font-inter px-4 py-2 text-[18px] tracking-[1.2px]">
                                    Company Profile
                                </span>
                            </div>

                            {/* Paragraph */}
                            <p className="text-[20px] font-inter text-[#FCFDFE] leading-6 tracking-[1.2px]">
                                RIGZONE Oilfields, Energy Services is engaged in the supply of special industrial equipment for oilfields, along with related services. The company was established in 2005 in the USA and has been serving the Oil and Gas, Petrochemical Industries, and various Government Departments worldwide for more than two decades. We have offices in <strong>Maryland USA</strong>, <strong>Abu Dhabhi UAE</strong> and <strong>Karachi Pakistan</strong>.
                            </p>

                            <p className="text-[20px] font-inter text-[#FCFDFE] leading-6 tracking-[1.2px]">
                                We are committed to customer satisfaction. Our prime objective is to provide highly dependable and reliable services in our fields of expertise to industries across the world.
                            </p>
                        </div>

                        {/* Right Column - World Map */}
                        <div className="col-span-12 lg:col-span-8">
                            <div className="relative overflow-visible">
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

                    {/* Expertise Sections - Main Heading on Left, Content on Right */}
                    <div className="grid grid-cols-12 gap-x-4 gap-y-8 items-start">
                        {/* Left Column - Main Heading */}
                        <div className="col-span-12 lg:col-span-4">
                            <h2 className="text-[54px] font-motor-oil text-[#FCFDFE] leading-16 tracking-[1.2px]">
                                A brief description of our expertise.
                            </h2>
                        </div>

                        {/* Right Column - Trading, Warehouse, and Engineering */}
                        <div className="col-span-12 lg:col-span-8 lg:pt-[135px]">
                            <div className="grid grid-cols-12 gap-x-4 gap-y-8 items-start">
                                {/* Left Sub-column - Trading and Warehouse */}
                                <div className="col-span-12 lg:col-span-6 space-y-12">
                                    {/* Trading Section */}
                                    <div className="space-y-4">
                                        <h3 className="text-[#E15E00] text-[40px] font-motor-oil tracking-[1.2px]">
                                            Trading
                                        </h3>
                                        <p className="text-[18px] font-inter text-[#FCFDFE] leading-6 tracking-[1.2px]">
                                            In our trading segment, we have trained staff to look after our customers requirements, including sourcing, importing, and supplying equipment and spares as per customer specifications within optimum lead times. Our trading activities extend across Southeast Asia, the Middle East, Europe, and North America.
                                        </p>
                                    </div>

                                    {/* Warehouse Section */}
                                    <div className="space-y-4">
                                        <h3 className="text-[#E15E00] text-[40px] font-motor-oil tracking-[1.2px]">
                                            Warehouse
                                        </h3>
                                        <p className="text-[18px] font-inter text-[#FCFDFE] leading-6 tracking-[1.2px]">
                                            We own and operate a warehouse in Karachi that supports our service oriented operations in Pakistan. It is well equipped to cater to the needs of our clients, maintaining sufficient inventory of required materials such as line pipes, valves, pipe fittings, flanges, fasteners, and gaskets. We maintain a wide range of PVF products in multiple schedules, sizes, and grades for the oil and gas industrial market.
                                        </p>
                                    </div>
                                </div>

                                {/* Right Sub-column - Engineering */}
                                <div className="col-span-12 lg:col-span-6">
                                    <div className="space-y-4">
                                        <h3 className="text-[#E15E00] text-[40px] font-motor-oil tracking-[1.2px]">
                                            Engineering
                                        </h3>
                                        <div className="space-y-3">
                                            <p className="text-[18px] font-inter text-[#FCFDFE] leading-6 tracking-[1.2px]">
                                                Rigzone has a full complement of design engineers who collaborate with clients to ensure that our engineering services are tailored to their requirements. We focus on innovative and cost-effective engineering solutions that support overall project execution, allowing us to optimize construction and fabrication costs.
                                            </p>
                                            <p className="text-[18px] font-inter text-[#FCFDFE] leading-6 tracking-[1.2px]">
                                                Rigzone, in conjunction with its affiliates and partner companies, offers FEED, Basic, and Detailed Engineering services covering the complete range of Process, Piping, Static Equipment, Civil and Structure, Electrical, and Instrumentation.
                                            </p>
                                            <p className="text-[18px] font-inter text-[#FCFDFE] leading-6 tracking-[1.2px]">
                                                In addition to greenfield projects, we can troubleshoot, debottleneck, and provide brownfield solutions to optimize or modify existing facilities. Our engineering services cover all stages including pre FEED, FEED, Detail Engineering, Construction Support, Commissioning, and training of operations. Rigzone has significant expertise in integrating construction and fabrication into our engineering solutions.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

