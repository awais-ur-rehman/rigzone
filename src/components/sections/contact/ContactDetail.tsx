'use client';

import { ContactForm } from '@/components/forms/ContactForm';

export function ContactDetail() {
    return (
        <section className="py-20 md:py-32 lg:py-32 bg-white min-h-screen flex items-center">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
                <div className="space-y-4 text-left">
                    <div>
                        <span className="bg-[#435057] text-[#F6F4EB] font-inter px-4 py-2 text-[16px] tracking-[1.2px]">
                            Contact Us
                        </span>
                    </div>
                    <h1 className="text-3xl lg:text-[28px] font-motor-oil text-[#3E4C52] tracking-[1.2px] my-10 ">
                        Get in touch with our team for expert guidance<span className="font-sans">,</span> and reliable support on all your industrial equipment needs<span className="font-sans">.</span> We’re here to ensure your operations run safely<span className="font-sans">,</span> efficiently<span className="font-sans">,</span> and without interruption<span className="font-sans">.</span>

                    </h1>
                </div>
                <div className="grid grid-cols-12 gap-x-6 lg:gap-x-12 items-start space-y-10 md:space-y-0">
                    {/* Left Column - Form */}
                    <div className="col-span-12 lg:col-span-7 ps-0 lg:ps-10 space-y-10">
                        <ContactForm />
                    </div>

                    {/* Right Column - Contact Information */}
                    <div className="col-span-12 lg:col-span-5 space-y-8 md:space-y-10 lg:space-y-8">
                        {/* USA Office */}
                        <div className="space-y-2 md:space-y-2">
                            <h3 className="text-[18px] md:text-[20px] font-motor-oil tracking-[1.2px] text-[#435057]">
                                Rigzone LLC USA
                            </h3>
                            <div className="text-[15px] md:text-[16px] font-inter text-[#3E4C52] leading-6">
                                418 West 28 Street, Baltimore MD, 21211, USA
                            </div>
                            <div className="space-y-2">
                                <a
                                    href="tel:+14106005589"
                                    className="block text-[15px] md:text-[16px] font-inter text-[#435057] hover:text-[#E15E00] transition-colors cursor-pointer"
                                >
                                    +1.(410) 600-5589
                                </a>
                                <a
                                    href="mailto:Info@rigzonellc.com"
                                    className="block text-[15px] md:text-[16px] font-inter text-[#435057] hover:text-[#E15E00] transition-colors cursor-pointer"
                                >
                                    Info@rigzonellc.com
                                </a>
                                <a
                                    href="http://www.rigzonellc.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block text-[15px] md:text-[16px] font-inter text-[#435057] hover:text-[#E15E00] transition-colors cursor-pointer"
                                >
                                    http://www.rigzonellc.com
                                </a>
                            </div>
                        </div>

                        {/* Abu Dhabi Office */}
                        <div className="space-y-3 md:space-y-2">
                            <h3 className="text-[18px] md:text-[20px] font-motor-oil tracking-[1.2px] text-[#435057]">
                                Rigzone LLC Abu Dhabi
                            </h3>
                            <div className="text-[15px] md:text-[16px] font-inter text-[#3E4C52] leading-6">
                                P.O. Box, 70247, Abu Dhabi, UAE
                            </div>
                            <div className="space-y-2">
                                <a
                                    href="tel:+97126777836"
                                    className="block text-[15px] md:text-[16px] font-inter text-[#435057] hover:text-[#E15E00] transition-colors cursor-pointer"
                                >
                                    + 971 2 6777 836
                                </a>
                                <a
                                    href="tel:+97126777846"
                                    className="block text-[15px] md:text-[16px] font-inter text-[#435057] hover:text-[#E15E00] transition-colors cursor-pointer"
                                >
                                    +971 2 6777 846
                                </a>
                                <a
                                    href="tel:+971508264417"
                                    className="block text-[15px] md:text-[16px] font-inter text-[#435057] hover:text-[#E15E00] transition-colors cursor-pointer"
                                >
                                    +971 50 8264417
                                </a>
                                <a
                                    href="mailto:Info@rigzonellc.com"
                                    className="block text-[15px] md:text-[16px] font-inter text-[#435057] hover:text-[#E15E00] transition-colors cursor-pointer"
                                >
                                    Info@rigzonellc.com
                                </a>
                                <a
                                    href="http://www.rigzonellc.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block text-[15px] md:text-[16px] font-inter text-[#435057] hover:text-[#E15E00] transition-colors cursor-pointer"
                                >
                                    http://www.rigzonellc.com
                                </a>
                            </div>
                        </div>

                        {/* Pakistan Office */}
                        <div className="space-y-3 md:space-y-2">
                            <h3 className="text-[18px] md:text-[20px] font-motor-oil tracking-[1.2px] text-[#435057]">
                                Rigzone (Pvt) Ltd
                            </h3>
                            <div className="text-[15px] md:text-[16px] font-inter text-[#3E4C52] leading-6">
                                5C/1, 1st Floor, 6th Commercial Lane,Zamzama Blvd, Clifton, Karachi Pakistan
                            </div>
                            <div className="space-y-2">
                                <a
                                    href="tel:+922135871322"
                                    className="block text-[15px] md:text-[16px] font-inter text-[#435057] hover:text-[#E15E00] transition-colors cursor-pointer"
                                >
                                    +92 21 3587 1322 – 3587 1324
                                </a>
                                <a
                                    href="tel:+922135871996"
                                    className="block text-[15px] md:text-[16px] font-inter text-[#435057] hover:text-[#E15E00] transition-colors cursor-pointer"
                                >
                                    +92 21 3587 1996
                                </a>
                                <a
                                    href="tel:+923008277007"
                                    className="block text-[15px] md:text-[16px] font-inter text-[#435057] hover:text-[#E15E00] transition-colors cursor-pointer"
                                >
                                    +92 300 827 7007
                                </a>
                                <a
                                    href="mailto:info@rigzonellc.com"
                                    className="block text-[15px] md:text-[16px] font-inter text-[#435057] hover:text-[#E15E00] transition-colors cursor-pointer"
                                >
                                    info@rigzonellc.com
                                </a>
                                <a
                                    href="http://www.rigzonellc.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block text-[15px] md:text-[16px] font-inter text-[#435057] hover:text-[#E15E00] transition-colors cursor-pointer"
                                >
                                    http://www.rigzonellc.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

