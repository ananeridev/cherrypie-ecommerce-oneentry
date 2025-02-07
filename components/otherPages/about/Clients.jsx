"use client";
import { brandImages2 } from "@/data/brands";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Clients() {
  const swiperOptions = {
    autoplay: {
      delay: 5000,
    },
    modules: [Autoplay],
    slidesPerView: 5,
    slidesPerGroup: 1,
    effect: "none",
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 14,
      },
      768: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 24,
      },
      992: {
        slidesPerView: 4,
        slidesPerGroup: 1,
        spaceBetween: 30,
        pagination: false,
      },
      1200: {
        slidesPerView: 5,
        slidesPerGroup: 1,
        spaceBetween: 30,
        pagination: false,
      },
    },
  };
  return (
    <section className="brands-carousel container mw-930">
      <h5 className="mb-3 mb-xl-5">Company Partners</h5>
      <div className="position-relative">
        <Swiper
          {...swiperOptions}
          className="swiper-container js-swiper-slider"
        >
          {brandImages2.map((elm, i) => (
            <SwiperSlide key={i} className="swiper-slide">
              <Image
                loading="lazy"
                src={elm.src}
                width={elm.width}
                height={elm.height}
                alt="image"
              />
            </SwiperSlide>
          ))}

          {/* <!-- /.swiper-wrapper --> */}
        </Swiper>
        {/* <!-- /.swiper-wrapper --> */}

        {/* <!-- /.swiper-container js-swiper-slider --> */}
      </div>
      {/* <!-- /.position-relative --> */}
    </section>
  );
}
