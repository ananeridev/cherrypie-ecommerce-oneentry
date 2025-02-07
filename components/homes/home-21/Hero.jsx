"use client";
import Link from "next/link";

import { slidesData16 } from "@/data/heroslides";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

export default function Hero() {
  const swiperOptions = {
    autoplay: {
      delay: 5000,
    },
    modules: [Autoplay, Pagination, EffectFade],
    navigation: false,
    pagination: {
      el: ".slideshow-pagination",
      type: "bullets",
      clickable: true,
    },
    slidesPerView: 1,
    effect: "fade",
    loop: true,
  };
  return (
    <div className="container">
      <Swiper
        className="swiper-container js-swiper-slider slideshow type4 overflow-visible swiper-container-fade swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events"
        {...swiperOptions}
      >
        {slidesData16.map((elm, i) => (
          <SwiperSlide key={i} className="swiper-slide">
            <div className="overflow-hidden position-relative h-100">
              <div className="slideshow-bg">
                <Image
                  loading="lazy"
                  src={elm.imageSrc}
                  width="1410"
                  height="600"
                  alt="Pattern"
                  className="slideshow-bg__img object-fit-cover"
                />
              </div>
              <div className="slideshow-text container position-absolute start-50 top-50 translate-middle px-4 px-xl-5 mx-3 mx-lg-4 mx-xl-5">
                <h6 className="text_dash text-uppercase fs-base fw-medium animate animate_fade animate_btt animate_delay-3 text-white">
                  {elm.category}
                </h6>
                <h2 className="text-uppercase fs-45 fw-bold mb-2 animate animate_fade animate_btt animate_delay-5 mb-3 text-white">
                  {elm.title.split(" ").slice(0, 2).join(" ")}
                  <br />
                  {elm.title.split(" ").slice(2, 5).join(" ")}
                  <br />
                  {elm.title.split(" ").slice(5).join(" ")}
                </h2>
                <div className="animate animate_fade animate_btt animate_delay-7">
                  <Link
                    href="/shop-1"
                    className="btn btn-outline-primary border-0 fs-base text-uppercase fw-medium btn-50"
                  >
                    <span>Shop Now</span>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* <!-- /.slideshow-wrapper js-swiper-slider --> */}

        <div className="container">
          <div className="slideshow-pagination type2 d-flex align-items-center position-absolute color-white bottom-0 left-0 mb-4 mb-xl-5 px-4 px-xl-5 mx-3 mx-lg-4 mx-xl-5"></div>
          {/* <!-- /.products-pagination --> */}
        </div>
        {/* <!-- /.container --> */}
      </Swiper>
      {/* <!-- /.slideshow --> */}
    </div>
  );
}
