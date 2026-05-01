"use client";

import Image from "next/image";
import { images } from "@/utils/web-constants";
import Button from "@/components/shared/Button";

export default function AlbumExperienceSection() {
  return (
    <section className="relative w-full bg-[#F8F5F2]">
      <section
        className="
          relative overflow-hidden bg-[#F8F5F2]
          py-14
          sm:py-16
          md:py-20
          min-[900px]:min-h-[780px] min-[900px]:py-20
          xl:min-h-[790px] xl:overflow-visible xl:py-24
          2xl:min-h-[850px]
        "
      >
        {/* RIGHT ALBUM IMAGE - hidden below 900px */}
        <div
          className="
            pointer-events-none absolute z-10 hidden select-none min-[900px]:block

            min-[900px]:right-[-170px] min-[900px]:top-[-10px]
            min-[900px]:h-[720px] min-[900px]:w-[720px]

            xl:right-[-80px] xl:top-[-40px]
            xl:h-[920px] xl:w-[920px]

            2xl:right-0 2xl:top-[-78px]
            2xl:h-[1070px] 2xl:w-[948px]
          "
        >
          <Image
            src={images.OptionsAlbum}
            alt="Heirloom and legacy albums"
            fill
            priority
            className="object-contain object-right-top"
          />
        </div>

        {/* CONTENT WRAPPER */}
        <div
          className="
            relative z-20 mx-auto flex w-full max-w-[1600px] items-center justify-center
            px-5
            sm:px-8
            md:min-h-[620px] md:px-10

            min-[900px]:min-h-[680px] min-[900px]:justify-start min-[900px]:px-12

            xl:min-h-[690px] xl:px-16
            2xl:min-h-[740px] 2xl:px-20
          "
        >
          <div
            className="
              mx-auto w-full max-w-full text-center
              sm:max-w-[660px]
              md:max-w-[760px]

              min-[900px]:mx-0
              min-[900px]:max-w-[560px]

              xl:max-w-[700px]
              xl:pl-6
              2xl:pl-10
            "
          >
            {/* FIRST TEXT BLOCK */}
            <div>
              <h2
                className="
                  font-outfit font-medium uppercase leading-[1.3] text-[#161616]
                  text-[22px]
                  sm:text-[24px]
                  md:text-[26px]
                  min-[900px]:text-[24px]
                  xl:text-[30px]
                "
              >
                THIS IS THE PART THEY’LL
                <br />
                REMEMBER THE MOST
              </h2>

              <p
                className="
                  mx-auto mt-6 max-w-[620px] font-outfit font-normal leading-[1.35] text-[#161616]
                  text-[17px]
                  sm:text-[19px]
                  md:text-[21px]
                  min-[900px]:max-w-[560px] min-[900px]:text-[22px]
                  xl:max-w-[620px] xl:text-[24px]
                "
              >
                Not just the album—but the time spent creating it together.
              </p>

              <p
                className="
                  mx-auto mt-6 max-w-[640px] font-outfit font-normal leading-[1.35] text-[#161616]
                  text-[17px]
                  sm:text-[19px]
                  md:text-[21px]
                  min-[900px]:max-w-[560px] min-[900px]:text-[22px]
                  xl:max-w-[640px] xl:text-[25px]
                "
              >
                An afternoon flipping through photos. Laughing at the
                {/* <br className="hidden sm:block" /> */}
                ones you forgot. Hearing voices you haven’t heard in years.
                {/* <br className="hidden sm:block" /> */}
                This is where the gift begins.
              </p>
            </div>

            {/* DIVIDER */}
            <div
              className="
                mx-auto h-[2px] w-full bg-[#161616]/15
                my-10 max-w-[560px]
                sm:my-12
                md:my-14
                min-[900px]:max-w-[540px]
                xl:my-16 xl:max-w-[620px]
              "
            />

            {/* SECOND TEXT BLOCK */}
            <div>
              <h3
                className="
                  font-outfit font-medium uppercase leading-[1.3] text-[#161616]
                  text-[22px]
                  sm:text-[24px]
                  md:text-[26px]
                  min-[900px]:text-[24px]
                  xl:text-[30px]
                "
              >
                CHOOSE THE EXPERIENCE
                <br />
                THAT FITS YOUR STORY
              </h3>

              <p
                className="
                  mx-auto mt-6 max-w-[560px] font-outfit font-normal leading-[1.35] text-[#161616]
                  text-[17px]
                  sm:text-[19px]
                  md:text-[21px]
                  min-[900px]:max-w-[520px] min-[900px]:text-[22px]
                  xl:max-w-[560px] xl:text-[25px]
                "
              >
                Three thoughtfully designed albums, each offering
                <br className="hidden sm:block" />a different way to preserve
                your story.
              </p>



              <Button
  text="VIEW OPTIONS"
  className="
    uppercase !border-2 !font-outfit !font-regular
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
          </div>
        </div>
      </section>
    </section>
  );
}




