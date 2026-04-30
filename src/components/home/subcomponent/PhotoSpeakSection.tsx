"use client";

import Image from "next/image";
import { images } from "@/utils/web-constants";

const steps = [
  { label: "SCAN", text: "Bring your\nphoto to life" },
  { label: "WATCH", text: "See moments\nmove again" },
  { label: "LISTEN", text: "Hear her\nvoice anytime" },
  { label: "RELIVE", text: "Relive it\nall together" },
];

export default function PhotoSpeakSection() {
  return (
<section className="w-full bg-[#f7f2ee] px-4 py-10 sm:px-6 sm:py-12 md:py-16 lg:px-8 xl:py-20 overflow-x-hidden overflow-y-visible">     
  <div className="mx-auto w-full max-w-[1400px] text-center">
        <h2 className="font-cormorant text-[32px] font-semibold italic leading-tight text-[#8e957b] sm:text-[42px] md:text-[52px] lg:text-[60px] xl:text-[65px]">
          What if a photo could speak?
        </h2>

        <p className="mx-auto mt-2 max-w-[620px] text-[13px] leading-snug text-black sm:mt-3 sm:text-base md:text-lg lg:text-xl">
          A modern heirloom that plays your videos and voices —
          <br className="hidden sm:block" />
          revealed with a simple scan.
        </p>

        {/* wrapper */}
        <div className="relative isolate mx-auto mt-14 w-full pb-16 sm:mt-16 md:mt-20 lg:mt-24 lg:pb-28">
          {/* ARROWS LAYER (behind cards) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-0 hidden lg:block"
          >
            {/* Arrow 1: between SCAN and WATCH (bottom) */}
            <div className="absolute left-[calc(25%-10px)] bottom-20 -translate-x-1/2 translate-y-[clamp(34px,4vw,90px)]">
            <img
  src={images.arrowOne}
  alt=""
  aria-hidden="true"
  className="w-[clamp(170px,14vw,230px)] h-auto opacity-90"
/>
            </div>

            {/* Arrow 2: between WATCH and LISTEN (top) */}
            {/* Arrow 2: between WATCH and LISTEN (top) */}
<div className="absolute left-1/2 top-0 z-20 -translate-x-1/2 -translate-y-[clamp(60px,7vw,140px)]">
<img
  src={images.arrowTwo}
  alt=""
  aria-hidden="true"
  className="w-[clamp(170px,14vw,230px)] h-auto opacity-90"
/>
</div>

            {/* Arrow 3: between LISTEN and RELIVE (bottom) */}
            <div className="absolute left-[calc(75%+10px)] bottom-20 -translate-x-1/2 translate-y-[clamp(34px,4vw,90px)]">
            <img
  src={images.arrowOne}
  alt=""
  aria-hidden="true"
  className="w-[clamp(170px,14vw,230px)] h-auto opacity-90"
/>
            </div>
          </div>

          {/* CARDS */}
          <div className="relative z-10 grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div
                key={step.label}
                className="
                  mx-auto flex aspect-[412/269] w-full flex-col items-center justify-center
                  rounded-md bg-[#8e957b] px-5 py-6 text-center text-white shadow-sm
                  max-w-[300px]
                  sm:max-w-[330px]
                  md:max-w-[360px]
                  lg:max-w-none
                "
              >
                <p className="mb-3 text-[9px] font-bold uppercase tracking-wide underline underline-offset-2 sm:text-[10px] md:text-xs xl:mb-4 xl:text-sm">
                  {step.label}
                </p>

                <p className="whitespace-pre-line font-cormorant text-[22px] italic leading-[1.05] sm:text-[24px] md:text-[27px] lg:text-[26px] xl:text-[30px] 2xl:text-[32px]">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}