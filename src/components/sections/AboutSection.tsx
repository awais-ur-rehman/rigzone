import Image from 'next/image';
import { Button } from '../ui/Button';

export function AboutSection() {
  return (
    <section id="about" className="min-h-screen py-20 bg-white flex items-center">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-12 gap-x-6 items-stretch">
          {/* Left Column - Image with Stats Overlay */}
          <div className="relative col-span-12 lg:col-span-5 h-full flex">
            <Image
              src="/images/about/about.png"
              alt="Oil drilling rig at sunset"
              width={100}
              height={100}
              className="h-full w-auto object-contain"
            />

            {/* Stats Overlay */}
            <div className="absolute bottom-28 right-4 bg-white p-6 shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
              <div className="flex items-center space-x-4">
                <div className="text-center -space-y-4">
                  <div className="text-[36px] font-motor-oil font-[300] text-[#3E4C52]">20<span className="font-sans">+</span></div>
                  <div className="text-[16px] text-[#3E4C52] text-start"><p>Years</p></div>
                </div>
                <div className="w-px h-12 bg-black"></div>
                <div className="text-[16px] text-[#3E4C52] tracking-[1.2px] leading-5 max-w-[150px]">
                  Of Experience in This Company
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="col-span-12 lg:col-span-7 flex flex-col h-full">
            <div className="space-y-10">
              {/* About Us Badge */}
              <div className="inline-block">
                <span className="bg-[#435057] text-[#F6F4EB] font-inter px-4 py-2 text-[16px] tracking-[1.2px]">
                  About Us
                </span>
              </div>

              {/* Main Headline */}
              <h2 className="text-3xl lg:text-[32px] font-motor-oil font-[400] text-[#3E4C52] leading-9 tracking-[1.2px] align-left text-left">
                RIGZONE Oilfields and Energy Services specializes in the supply of specialized industrial equipment and technical services for the Oilfield<span className="font-sans">,</span> Energy<span className="font-sans">,</span> and Petrochemical sectors<span className="font-sans">.</span>
              </h2>



              {/* Mission and Vision Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Mission */}
                <div className="space-y-3">
                  <h3 className="text-[20px] font-motor-oil tracking-[1.2px] text-[#435057]">Our Mission</h3>
                  <p className="text-[18px] font-inter text-[#435057] leading-tight">
                    To deliver reliable oilfield equipment and engineering solutions that meet international standards, ensuring quality, safety, and long-term value for every client.
                  </p>
                </div>

                {/* Vision */}
                <div className="space-y-3">
                  <h3 className="text-[20px] font-motor-oil tracking-[1.2px] text-[#435057]">Our Vision</h3>
                  <p className="text-[18px] font-inter text-[#435057] leading-tight">
                    To be the most trusted engineering and supply partner connecting global energy markets through dependable service and certified quality.
                  </p>
                </div>
              </div>

            </div>

            {/* Learn More Button */}
            <div className="pt-4 mt-auto flex justify-end">
              <Button
                text="Learn More"
                icon={
                  <img
                    src="/icons/navigation/arrow.svg"
                    alt="Arrow"
                    className="w-4 h-4"
                  />
                }
                variant="primary"
                size="md"
                href="#services"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
