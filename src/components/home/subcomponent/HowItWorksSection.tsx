"use client";

import Image from "next/image";
import { images } from "@/utils/web-constants";

export default function HowItWorksSection() {
  return (
    <section className="w-full overflow-hidden bg-[#fff]">
      <div className="grid min-h-[360px] grid-cols-1 lg:grid-cols-2">
        {/* Left content */}
        <div className="flex items-center justify-center px-6 py-14 text-center sm:px-10 md:py-20 lg:py-24">
          <div className="flex min-h-[240px] max-w-[520px] flex-col items-center justify-center lg:min-h-[300px]">
            <h2 className="font-cormorant text-[34px] font-semibold leading-tight text-[#8A8E75] sm:text-[42px] md:text-[52px] lg:text-[58px]">
              See how it works
            </h2>

            <p className="font-Outfit mt-4 max-w-[420px] text-[15px] leading-snug text-black sm:text-base md:text-lg text-[#161616]">
              Scan the page. The memory plays instantly.
              <br className="hidden sm:block" />
              No apps. No setup. Just open, scan, and relive it.
            </p>

            <p className="mt-16 text-[9px] font-semibold uppercase tracking-[0.22em] text-black sm:mt-20 md:mt-24">
              Powered by our patent-pending QR technology.
            </p>
          </div>
        </div>

        {/* Right image */}
        <div className="relative min-h-[300px] sm:min-h-[420px] lg:min-h-full">
          <Image
            src={images.howItWorksImage}
            alt="Photo album pages with QR memories"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}