import Image from 'next/image';

export function AboutMessageSection() {
  const message = "At Rigzone, our commitment to dependable service and technical excellence remains unwavering. We take pride in supporting esteemed organizations across the industry and look forward to serving your company with the highest standards of professionalism.";

  return (
    <section className="min-h-screen py-32 bg-[#3E4C52] flex items-center">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="space-y-12">
          {/* Title at top left */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-motor-oil max-w-xl text-[#FCFDFE] leading-tight tracking-[1.2px]">
              Message from the Chief Executive
            </h2>
          </div>

          {/* Full-width box with message and image */}
          <div className="relative w-full">
            {/* Quote Box with Orange Border - Full width */}
            <div className="relative border-4 border-[#E15E00] p-8 lg:px-12 lg:py-2 bg-transparent overflow-visible">
              <div className="grid grid-cols-12 gap-4 items-start">
                {/* Left 60% - Message */}
                <div className="col-span-12 lg:col-span-8 relative">
                  {/* Quote Text */}
                  <div className="relative z-10 pr-4 py-4 pb-32 sm:pb-40 lg:pb-4 lg:pr-4 lg:py-4">
                    <p className="text-lg sm:text-xl lg:text-[24px] font-inter text-[#FCFDFE] leading-relaxed tracking-[1.2px]">
                      {message}
                    </p>
                  </div>
                </div>

                {/* Right 40% - Image placeholder (image extends above border) */}
                <div className="hidden lg:block col-span-12 lg:col-span-4 relative">
                  {/* This div is just for spacing on desktop, image is positioned absolutely */}
                </div>
              </div>

              {/* Image - Responsive positioning */}
              {/* Mobile: Inside box at bottom right, smaller size */}
              <div className="lg:hidden absolute bottom-0 right-4 z-20">
                <div className="relative w-32 h-40 sm:w-40 sm:h-48">
                  <Image
                    src="/images/about/ijaz.png"
                    alt="Chief Executive"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Desktop: Extends from top, overlaps border */}
              <div className="hidden lg:block absolute -top-[108px] right-12 z-20">
                <div className="relative w-64 h-[350px]">
                  <Image
                    src="/images/about/ijaz.png"
                    alt="Chief Executive"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

