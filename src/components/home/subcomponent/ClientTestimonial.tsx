"use client";

import Image from "next/image";
import { images } from "@/utils/web-constants";

const testimonials = [
  {
    quote:
      "It looks like a beautiful keepsake album, but when you scan it, you can actually watch the videos from those moments. I added clips of my kids and now I’m crying flipping through it.",
    name: "Meghan B",
  },
];

export default function TestimonialSection() {
  const activeTestimonial = testimonials[0];

  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div
        className="
          grid w-full grid-cols-1
          md:grid-cols-2
          md:min-h-[390px]
          lg:min-h-[500px]
          xl:min-h-[570px]
        "
      >
        {/* LEFT / TOP IMAGE */}
        <div
          className="
            relative w-full
            h-[330px]
            sm:h-[400px]
            md:h-auto md:min-h-[390px]
            lg:min-h-[500px]
            xl:min-h-[570px]
          "
        >
          <Image
            src={images.ClientTestimonial}
            alt="Family looking through a photo album"
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        {/* RIGHT / BOTTOM CONTENT */}
        <div
          className="
            relative flex items-center justify-center bg-white text-center

            min-h-[390px] px-6 py-12
            sm:min-h-[420px] sm:px-10 sm:py-14

            md:min-h-[390px] md:px-7 md:py-8
            lg:min-h-[500px] lg:px-12 lg:py-12
            xl:min-h-[570px] xl:px-20 xl:py-16
          "
        >
          <div
            className="
              mx-auto w-full
              max-w-[560px]
              md:max-w-[460px]
              lg:max-w-[620px]
              xl:max-w-[720px]
            "
          >
            <p
              className="
                font-outfit font-medium uppercase text-[#161616]

                text-[15px] tracking-[0.16em]
                sm:text-[17px] sm:tracking-[0.18em]

                md:text-[14px] md:tracking-[0.15em]
                lg:text-[19px] lg:tracking-[0.18em]
                xl:text-[23px]
              "
            >
              WHAT FAMILIES ARE SAYING:
            </p>

            <p
              className="
                mx-auto font-outfit font-extralight leading-[1.32] text-[#161616]

                mt-7 max-w-[520px] text-[20px]
                sm:mt-8 sm:text-[20px]

                md:mt-6 md:max-w-[460px] md:text-[20px] md:leading-[1.3]
                lg:mt-8 lg:max-w-[610px] lg:text-[28px]
                xl:mt-9 xl:max-w-[690px] xl:text-[30px]
              "
            >
              “{activeTestimonial.quote}”
            </p>

            <p
              className="
                font-cormorant font-bold leading-none text-[#8F9278]

                mt-8 text-[34px]
                sm:mt-9 sm:text-[40px]

                md:mt-7 md:text-[32px]
                lg:mt-9 lg:text-[40px]
                xl:mt-10 xl:text-[46px]
              "
            >
              — {activeTestimonial.name}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

