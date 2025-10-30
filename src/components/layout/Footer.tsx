import { Button } from "../ui/Button";

export function Footer() {
  return (
    <footer className="bg-[#3E4C52]">
      {/* Top CTA band */}
      <div className="bg-[#E15E00] h-80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-12 gap-x-6 items-center">
            <div className="col-span-12 lg:col-span-3">
              <img src="/icons/social/footer.svg" alt="Rig illustration" className="w-full h-[290px] object-cover relative -bottom-7" />
            </div>
            <div className="col-span-12 lg:col-span-4 text-white mt-14">
              <p className="font-motor-oil text-[22px] tracking-[1.2px] leading-8">
                Serving Oil <span className="font-sans font-bold">,</span> Gas<span className="font-sans font-bold">,</span> Petrochemical
                and Energy industries across the
                US<span className="font-sans font-bold">,</span>Middle East and South Asia.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-5 flex lg:justify-end  lg:mt-0 gap-6">
              <Button
                text="Discover More"
                icon={<img src="/icons/navigation/arrow.svg" alt="Arrow" className="h-4 w-4" />}
                variant="footer"
                size="lg"
                className="h-12 mt-14"
              />
              <Button
                text="Get Started Now"
                icon={<img src="/icons/navigation/arrow.svg" alt="Arrow" className="h-4 w-4" />}
                variant="footerSecondary"
                size="lg"
                className="h-12 mt-14"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8 py-6">
        <div className="grid grid-cols-12 gap-x-2 py-6">
          {/* Left branding column */}
          <div className="col-span-12 lg:col-span-4 space-y-8 items-start justify-center flex flex-col">
            <div className="flex justify-start">
              <img src="/images/logo/Logo.svg" alt="Rigzone" className="h-24 w-auto object-cover" />
            </div>
            <p className="text-[16px] font-inter text-white tracking-[1.2px] leading-5 max-w-[300px] text-start">
              Rigzone delivers reliable oilfield equipment and engineering services, supporting energy and industrial
              projects across the USA, Middle East, and South Asia.
            </p>
            <div className="flex items-center space-x-10 justify-center mt-6">
              <a href="#" aria-label="Facebook"><img className="h-8 w-8" src="/icons/social/facebook.svg" alt="facebook" /></a>
              <a href="#" aria-label="Instagram"><img className="h-8 w-8" src="/icons/social/instagram.svg" alt="instagram" /></a>
              <a href="#" aria-label="LinkedIn"><img className="h-8 w-8" src="/icons/social/linkedin.svg" alt="linkedin" /></a>
              <a href="#" aria-label="Google"><img className="h-8 w-8" src="/icons/social/google.svg" alt="google" /></a>
            </div>
          </div>

          {/* Top Links */}
          <div className="col-span-6 lg:col-span-2 mt-14 space-y-2">
            <h4 className="text-[20px] font-motor-oil tracking-[1.2px] text-white mb-4">Top Links</h4>
            <ul className="space-y-3 text-white text-[16px] space-y-4 font-inter">
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Our Services</a></li>
              <li><a href="#products">Our Products</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>

          {/* Our Services Column 1 */}
          <div className="col-span-6 lg:col-span-3 mt-14 space-y-2">
            <h4 className="text-[20px] font-motor-oil tracking-[1.2px] text-white mb-4">Our Services</h4>
            <div className="grid grid-cols-2 gap-2 text-[16px] font-inter text-white">
              <ul className="space-y-4 text-white">
                <li>Procurement</li>
                <li>Engineering</li>
                <li>Fabrication</li>
                <li>Construction</li>
                <li>Commissioning & Startup</li>
                <li>Consultancy Services</li>
              </ul>
              <ul className="space-y-4 text-white">
                <li>Well Stimulation</li>
                <li>Coil Tubing</li>
                <li>Marine Services</li>
                <li>Completion & Downhole Tools</li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="col-span-12 lg:col-span-3 mt-14 space-y-4 ps-8">
            <h4 className="text-[20px] font-motor-oil tracking-[1.2px] text-end text-white mb-3 text-right max-w-xs ml-auto">Subscribe
              <span className="block">to our Newsletter</span>
            </h4>
            <div className="flex flex-col space-y-6 items-end">
              <input type="email" placeholder="Your Email Address..." className="w-full border border-[#CAD2D7] px-4 py-3 text-[16px] font-inter text-white focus:outline-none placeholder:text-white" />
              <button className="inline-flex items-center w-full justify-center bg-[#E15E00] text-white px-6 py-3 text-[16px] font-[var(--font-motor-oil)] tracking-[1.2px] hover:bg-[#c95600]">
                Subscribe <img src="/icons/navigation/arrow.svg" alt="arrow" className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>


        <div className=" text-white text-[14px] font-inter">
          <div className="grid grid-cols-1 lg:grid-cols-3 items-center">
            <p className="order-1 lg:order-1 text-center lg:text-left">©Copyright 2025. Rigzone LLC. All rights reserved</p>
            <div className="order-3 lg:order-2 flex justify-center align-end mt-4 lg:mt-0">
              <span className="flex items-center"><span className="relative bottom-2">Powered by</span><img src="/icons/social/bridgeframe.svg" alt="bridgeframe" className="h-12 w-auto relative -left-5 bottom-4" /></span>
            </div>
            <div className="order-2 lg:order-3 flex items-center justify-center lg:justify-end space-x-6 mt-4 lg:mt-0">
              <a href="#">Terms of Use</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Disclaimer</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


{/*  */ }