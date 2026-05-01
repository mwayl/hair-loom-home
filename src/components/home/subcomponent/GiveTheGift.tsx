"use client";

import Button from "@/components/shared/Button";

export default function GiftCTASection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F8F5F2]">
      <div
        className="
          mx-auto flex w-full max-w-[1600px] flex-col items-center justify-center text-center

          px-5 py-10
          sm:px-8 sm:py-12
          md:px-10 md:py-14
          lg:py-16
          xl:py-20
        "
      >
        <h2
          className="
            font-cormorant font-bold leading-[1.08] text-[#8A8E75]

            text-[38px]
            min-[390px]:text-[44px]
            sm:text-[44px]
            md:text-[52px]
            lg:text-[65px]
            xl:text-[75px]
          "
        >
          Give the gift
          <br />
          she’ll never forget.
        </h2>

        {/* <Button
          text="CHOOSE YOUR EXPERIENCE"
          className="
            uppercase !border-1 !font-outfit !font-light

            mt-6
            px-6 py-2.5
            text-[13px]

            min-[390px]:px-3
            min-[390px]:text-[14px]

            sm:mt-7
            sm:px-8 sm:py-3
            sm:text-[16px]

            md:mt-8
            md:px-9 md:py-3.5
            md:text-[18px]

            lg:mt-9
            lg:px-10 lg:py-4
            lg:text-[21px]
          "
          backgroundColor="bg-transparent"
          textColor="text-[#161616]"
          borderColor="border-[#161616]"
          hoverBgColor="hover:bg-[#161616]"
          hoverTextColor="hover:text-white"
          hoverBorderColor="hover:border-[#161616]"
        /> */}

<Button
  text="CHOOSE YOUR EXPERIENCE"
  className="
    uppercase !border !font-outfit !font-light
    tracking-[0.02em]

    mt-6
    px-6 py-2.5
    text-[13px]

    min-[390px]:px-3
    min-[390px]:text-[14px]

    sm:mt-7
    sm:px-8 sm:py-3
    sm:text-[16px]

    md:mt-8
    md:px-9 md:py-3.5
    md:text-[18px]

    lg:mt-9
    lg:px-10 lg:py-4
    lg:text-[21px]
  "
  backgroundColor="bg-transparent"
  textColor="text-[#161616]"
  borderColor="border-[#161616]"
/>
      </div>
    </section>
  );
}