"use client";

import Image from "next/image";
import { images } from "@/utils/web-constants";
import Button from "@/components/shared/Button";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[560px] md:h-[620px] lg:h-[680px] overflow-hidden bg-black">
      {/* Background Image */}
      <Image
        src={images.HeroSectionImage04}
        alt="Person holding a photo album"
        fill
        priority
        quality={100}
        className="object-cover object-center"
      />

      {/* Dark Overlay */}
      {/* <div className="opacity-50 absolute inset-0 bg-black/50 z-10" /> */}

      {/* Optional top logo badge - remove if your header already renders it */}
      {/*
      <div className="absolute top-0 left-1/2 z-30 -translate-x-1/2 -translate-y-1/2">
        <div className="h-20 w-20 rounded-full bg-white flex items-center justify-center shadow-md">
          <Image
            src={images.Logo}
            alt="Logo"
            width={54}
            height={54}
            className="object-contain"
          />
        </div>
      </div>
      */}

      {/* Content */}
      <div className="relative z-20 flex h-full flex-col items-center justify-center px-5 text-center">
        <h1 className="font-cormorant text-white font-bold leading-[0.95] tracking-wide text-[42px] sm:text-[58px] md:text-[72px] lg:text-[86px] max-w-5xl">
          Stories you can hear.
          <br />
          Memories you can hold.
        </h1>

        <p className="font-Outfit mt-6 max-w-3xl text-white font-regular leading-relaxed text-base sm:text-xl md:text-3xl">
          Arrives in time for Mother&apos;s Day.
          <br />
          Send the experience now. Create it together.
        </p>

        <Button
          text="CHOOSE YOUR EXPERIENCE"
          className="font-Outfit mt-8 px-8 py-3 text-xs md:text-xl uppercase tracking-wide font-thin border-2"
          backgroundColor="bg-transparent"
          textColor="text-white"
          borderColor="border-white"
          hoverBgColor="hover:bg-white"
          hoverTextColor="hover:text-black"
          hoverBorderColor="hover:border-white"
        />
      </div>
    </section>
  );
}