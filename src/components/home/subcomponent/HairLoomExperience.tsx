"use client";

import Image from "next/image";
import { images } from "@/utils/web-constants";
import Button from "@/components/shared/Button";

const steps = [
  {
    title: "1. GIFT THE EXPERIENCE",
    text: "Send a beautifully designed digital gift that invites them into the story.",
  },
  {
    title: "2. BUILD IT TOGETHER",
    text: "Spend time choosing the moments, telling stories side by side.",
  },
  {
    title: "3. RECEIVE THE HEIRLOOM",
    text: "A handcrafted album arrives holding everything you created together.",
  },
];

export default function ExperienceSections() {
  return (
    <section className="w-full overflow-hidden bg-[#F8F5F2]">
      {/* FIRST SECTION */}

<section className="relative z-100 h-[clamp(220px,42vw,600px)] overflow-hidden">
  <Image
    src={images.ExperienceHeroImage}
    alt="Heirloom album"
    fill
    priority
    sizes="100vw"
    className="
      object-cover
      object-[24%_center]
      sm:object-[25%_center]
      md:object-center
    "
  />

  <div
    className="
      relative z-10 mx-auto flex h-full max-w-[1920px] items-start
      px-4 pt-8
      sm:px-8 sm:pt-10
      md:px-12 md:pt-20
      lg:px-20 lg:pt-28
      xl:px-28 xl:pt-32
      2xl:pt-40
    "
  >
    <div
      className="
        ml-auto w-[52%] max-w-[260px] -translate-y-2 text-center
        sm:w-[50%] sm:max-w-[430px] sm:-translate-y-3
        md:w-[58%] md:max-w-[640px] md:-translate-y-6
        lg:w-[56%] lg:max-w-[760px] lg:-translate-y-2
        2xl:max-w-[920px]
      "
    >
      <h1
        className="
          font-cormorant font-bold leading-[1.04] text-[#8A8E75]
          text-[clamp(18px,4.8vw,30px)]
          sm:text-[clamp(30px,5vw,45px)]
          md:text-[clamp(42px,4.2vw,48px)]
          lg:text-[clamp(50px,4vw,50px)]
          2xl:text-[55px]
        "
      >
        <span className="md:whitespace-nowrap">Give the experience</span>
        <span className="hidden md:inline"> of</span>
        <br className="md:hidden" />
        <span className="md:hidden">of remembering together.</span>

        <span className="hidden md:inline">
          <br />
          remembering — together.
        </span>
      </h1>

      <p
        className="
          mx-auto mt-3 max-w-[260px] font-outfit font-normal leading-[1.25] text-[#161616]
          text-[clamp(10px,2.8vw,14px)]
          sm:mt-5 sm:max-w-[430px] sm:text-[clamp(15px,2.2vw,17px)]
          md:max-w-[620px] md:text-[clamp(16px,1.7vw,18px)]
          lg:mt-6 lg:max-w-[720px] lg:text-[clamp(18px,1.5vw,22px)]
          2xl:text-[22px]
        "
      >
        A guided way to gather your photos, videos, and voices,
        <br className="hidden md:block" />
        and turn them into something you’ll hold onto forever.
      </p>
    </div>
  </div>
</section>


      {/* MIDDLE SECTION */}
      <section
        className="
          relative z-20 overflow-visible bg-[#F8F5F2]
          px-5 py-10
          sm:px-8 sm:py-14
          md:px-12 md:py-20
          lg:px-20 lg:py-24
          2xl:py-28
        "
      >
        {/* LEFT LEAF */}
        <Image
          src={images.LeafPatternImage}
          alt=""
          width={285}
          height={850}
          className="
            pointer-events-none absolute z-999 select-none
            opacity-100 contrast-125 brightness-95

            left-[-22px] top-[10px] w-[250px]
            sm:left-[-60px] sm:top-[30px] sm:w-[260px]
            md:left-[-55px] md:top-[55px] md:w-[260px]
            lg:left-[-20px] lg:top-[70px] lg:w-[275px]
            xl:left-[0px] xl:top-[88px] xl:w-[285px]
          "
        />

        {/* RIGHT LEAF */}
        <Image
          src={images.RightLeafPatternImage}
          alt=""
          width={285}
          height={650}
          className="
            pointer-events-none absolute z-0 select-none
            opacity-100 contrast-125 brightness-95

            right-[-28px] top-[15px] w-[250px]
            sm:right-[-70px] sm:top-[-20px] sm:w-[260px]
            md:right-[-70px] md:top-[-160px] md:w-[260px]
            lg:right-[-30px] lg:top-[-360px] lg:w-[275px]
            xl:right-[0px] xl:top-[-520px] xl:w-[285px]
            2xl:right-[0px] 2xl:top-[-700px]
          "
        />

        {/* CONTENT */}
        <div className="relative z-10 mx-auto max-w-7xl">
          <div
            className="
              grid grid-cols-1 text-center
              gap-11
              md:grid-cols-3 md:gap-7
              lg:gap-10
              xl:gap-12
            "
          >
            {steps.map((step) => (
              <div
                key={step.title}
                className="
                  mx-auto max-w-[430px]
                  md:max-w-[300px]
                  lg:max-w-[390px]
                  xl:max-w-[450px]
                "
              >
                <h3
                  className="
                    font-outfit font-semibold leading-tight text-[#161616]
                    text-[17px]
                    sm:text-[17px]
                    md:text-[17px]
                    lg:text-[20px]
                    xl:text-[23px]
                  "
                >
                  {step.title}
                </h3>

                <p
                  className="
                    mt-5 font-cormorant font-semibold italic text-[#161616]
                    text-[21px] leading-[35px]
                    sm:text-[22px] sm:leading-[35px]
                    md:text-[27px] md:leading-[38px]
                    lg:text-[30px] lg:leading-[44px]
                    xl:text-[35px] xl:leading-[49px]
                  "
                >
                  {step.text}
                </p>
              </div>
            ))}
          </div>

          <div
            className="
              mx-auto h-[2px] w-full bg-[#161616]/20
              mt-10 max-w-[350px]
              sm:mt-12 sm:max-w-[420px]
              md:mt-20 md:max-w-[500px]
              lg:mt-24 lg:max-w-[650px]
              xl:mt-28
            "
          />

          <div
            className="
              flex flex-col items-center text-center
              mt-9
              sm:mt-12
              md:mt-16
              lg:mt-20
            "
          >
            <h2
              className="
                max-w-[330px] font-outfit font-medium uppercase leading-[1.15] text-[#161616]
                tracking-[0.04em]
                text-[18px]
                sm:max-w-none sm:text-[20px] sm:tracking-[0.08em]
                md:text-[22px]
                lg:text-[26px]
                xl:text-[28px]
              "
            >
              DESIGNED TO BE FELT NOW — AND HELD ONTO FOREVER.
            </h2>

            {/* <Button
              text="GIVE THE HEIRLOOM EXPERIENCE"
              className="
                mt-5 uppercase !font-light !border-2
                text-[11px]
                sm:text-[14px]
                md:text-[17px]
                lg:mt-10 lg:text-[20px]
              "
              backgroundColor="bg-transparent"
              textColor="text-[#161616]"
              borderColor="border-[#161616]"
              hoverBgColor="hover:bg-[#161616]"
              hoverTextColor="hover:text-white"
              hoverBorderColor="hover:border-[#161616]"
            /> */
            
            
//             <Button
//   text="GIVE THE HEIRLOOM EXPERIENCE"
//   className="
//     mt-5 uppercase !font-light !border-2
//     text-[11px]
//     sm:text-[14px]
//     md:text-[17px]
//     lg:mt-10 lg:text-[20px]

//     relative overflow-hidden
//     transition-colors duration-300 ease-out
//   "
//   backgroundColor="bg-transparent"
//   textColor="text-[#161616]"
//   borderColor="border-[#161616]"
//   hoverBgColor="hover:bg-[#161616]"
//   hoverTextColor="hover:text-white"
//   hoverBorderColor="hover:border-[#161616]"
// />











<Button
  text="GIVE THE HEIRLOOM EXPERIENCE"
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


            
            }
          </div>
        </div>
      </section>

      {/* THIRD SECTION */}
      <section className="relative z-10 h-[284px] overflow-hidden sm:h-[420px] md:h-[460px] lg:h-[510px] 2xl:h-[560px]">
        <Image
          src={images.StoryAlbumImage}
          alt="Memory album"
          fill
          className="
            object-cover
            object-[62%_center]
            sm:object-center
          "
        />

        <div
          className="
            relative z-10 mx-auto flex h-full max-w-[1350px] items-center
            px-5
            sm:px-8
            md:px-12
            lg:px-0
          "
        >
          <div
            className="
              mb-4 max-w-[245px]
              sm:max-w-[420px]
              md:max-w-[540px]
              lg:max-w-[640px]
            "
          >
        <p
  className="
    text-center font-cormorant font-medium italic leading-[1.08] text-white
    [text-shadow:0_4px_4px_rgba(0,0,0,0.25)]
    text-[22px]
    sm:text-[32px]
    md:text-[36px]
    lg:text-[45px]
  "
>
  The sound of her laugh. The way she says your name. The stories you never want to forget.

</p>
          </div>
        </div>
      </section>
    </section>
  );
}


