import { Button } from "../ui/Button";

export function Footer() {
  return (
    <footer className="bg-white">
      {/* Top CTA band */}
      <div className="bg-[#3E4C52]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-12 gap-x-6 items-center">
            <div className="col-span-12 lg:col-span-3">
              <img src="/icons/social/footer.svg" alt="Rig illustration" className="w-full h-auto" />
            </div>
            <div className="col-span-12 lg:col-span-4 text-white">
              <p className="font-motor-oil text-[22px] tracking-[1.2px] leading-8">
                Serving Oil <span className="font-sans font-bold">,</span> Gas<span className="font-sans font-bold">,</span> Petrochemical
                and Energy industries across the
                US<span className="font-sans font-bold">,</span>Middle East and South Asia.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-5 flex lg:justify-end mt-6 lg:mt-0 gap-6">
              <Button
                text="Discover More"
                icon={<img src="/icons/navigation/arrow.svg" alt="Arrow" className="h-4 w-4" />}
                variant="primary"
                size="lg"
                className="h-12"
              />
              <Button
                text="Get Started Now"
                icon={<img src="/icons/navigation/arrow.svg" alt="Arrow" className="h-4 w-4" />}
                variant="secondary"
                size="lg"
                className="h-12"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-12 gap-x-6 gap-y-12">
          {/* Left branding column */}
          <div className="col-span-12 lg:col-span-4 space-y-2 items-start justify-center flex flex-col">
            <div className="">
              <img src="/images/logo/Logo.svg" alt="Rigzone" className="h-24 w-auto" />
            </div>
            <p className="text-[16px] font-inter text-[#3E4C52] tracking-[1.2px] leading-5 max-w-[300px] text-center">
              Rigzone delivers reliable oilfield equipment and engineering services, supporting energy and industrial
              projects across the USA, Middle East, and South Asia.
            </p>
            <div className="flex items-center space-x-4 justify-center w-full mt-6">
              <a href="#" aria-label="Facebook"><img className="h-6 w-6" src="/icons/social/facebook.svg" alt="facebook" /></a>
              <a href="#" aria-label="Instagram"><img className="h-6 w-6" src="/icons/social/instagram.svg" alt="instagram" /></a>
              <a href="#" aria-label="LinkedIn"><img className="h-6 w-6" src="/icons/social/linkedin.svg" alt="linkedin" /></a>
              <a href="#" aria-label="Google"><img className="h-6 w-6" src="/icons/social/google.svg" alt="google" /></a>
            </div>
          </div>

          {/* Top Links */}
          <div className="col-span-6 lg:col-span-2">
            <h4 className="text-[16px] font-inter tracking-[1.2px] text-[#435057] mb-4">Top Links</h4>
            <ul className="space-y-3 text-[#435057] text-[16px] font-inter">
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Our Services</a></li>
              <li><a href="#products">Our Products</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>

          {/* Our Services Column 1 */}
          <div className="col-span-6 lg:col-span-3">
            <h4 className="text-[16px] font-inter tracking-[1.2px] text-[#435057] mb-4">Our Services</h4>
            <div className="grid grid-cols-2 gap-6 text-[16px] font-inter text-[#435057]">
              <ul className="space-y-3">
                <li>Procurement</li>
                <li>Engineering</li>
                <li>Fabrication</li>
                <li>Construction</li>
                <li>Commissioning & Startup</li>
              </ul>
              <ul className="space-y-3">
                <li>Well Stimulation</li>
                <li>Coil Tubing</li>
                <li>Marine Services</li>
                <li>Completion & Downhole Tools</li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="col-span-12 lg:col-span-3">
            <h4 className="text-[16px] font-inter tracking-[1.2px] text-[#435057] mb-3 text-right max-w-xs ml-auto">Subscribe to our
              <span className="block">Newsletter</span>
            </h4>
            <div className="flex flex-col space-y-3 items-end">
              <input type="email" placeholder="Your Email Address..." className="w-full border border-[#CAD2D7] px-4 py-3 text-[16px] font-inter text-[#435057] focus:outline-none" />
              <button className="inline-flex items-center justify-center bg-[#E15E00] text-[#F6F4EB] px-6 py-3 text-[16px] font-[var(--font-motor-oil)] tracking-[1.2px]">
                Subscribe <img src="/icons/navigation/arrow.svg" alt="arrow" className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[#CAD2D7] text-[#435057] text-[14px] font-inter">
          <div className="grid grid-cols-1 lg:grid-cols-3 items-center">
            <p className="order-1 lg:order-1 text-center lg:text-left">©Copyright 2025. Rigzone LLC. All rights reserved</p>
            <div className="order-3 lg:order-2 flex justify-center mt-4 lg:mt-0">
              <span className="flex items-center space-x-2"><span>Powered by</span><img src="/icons/social/bridgeframe.png" alt="bridgeframe" className="h-4 w-auto" /></span>
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
