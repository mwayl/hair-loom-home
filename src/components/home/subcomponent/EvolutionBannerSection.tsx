"use client";

import Image from "next/image";
import { images } from "@/utils/web-constants";

export default function EvolutionBannerSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#f7f2ee] px-4 py-12 sm:px-6 sm:py-14 md:py-28 lg:px-8">
      {/* Petal background */}
      <Image
        src={images.evolutionPetalBg}
        alt=""
        aria-hidden="true"
        fill
        className="pointer-events-none object-cover object-center"
        sizes="100vw"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[150px] max-w-[1100px] flex-col items-center justify-center text-center">
        <h2 className="font-cormorant text-[28px] font-bold italic leading-tight text-[#8e957b] sm:text-[38px] md:text-[49px] lg:text-[55px]">
          This is the evolution of the photo album.
        </h2>

        <p className="mt-3 text-[13px] leading-snug text-black sm:text-base md:text-lg">
          From something you look at to something you experience.
        </p>
      </div>
    </section>
  );
}