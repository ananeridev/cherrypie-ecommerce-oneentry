"use client";

import { slidesData15 } from "@/data/heroslides";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const swiperOptions = {
    autoplay: {
      delay: 5000,
    },
    modules: [Autoplay, Navigation, Pagination, EffectFade],
    navigation: {
      nextEl: ".slideshow .products-carousel__next",
      prevEl: ".slideshow .products-carousel__prev",
    },
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
        {...swiperOptions}
        className="swiper-container js-swiper-slider hero-21 slideshow type5 overflow-visible swiper-container-fade swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events"
      >
        {slidesData15.map((elm, i) => (
          <SwiperSlide key={i} className="swiper-slide">
            <div className="overflow-hidden position-relative h-100">
              <div className="slideshow-bg">
                <Image
                  loading="lazy"
                  src={elm.imgSrc}
                  width="1410"
                  height="650"
                  alt={elm.imgAlt}
                  className="slideshow-bg__img object-fit-cover"
                />
              </div>
              <div className="slideshow-text container position-absolute start-50 top-50 translate-middle px-4 px-xl-5 mx-3 mx-lg-4 mx-xl-5">
                <h6 className="text_dash text-uppercase fs-base fw-medium animate animate_fade animate_btt animate_delay-3 theme-color">
                  {elm.subTitle}
                </h6>
                <h2 className="text-uppercase fs-45 fw-bold mb-2 animate animate_fade animate_btt animate_delay-5 theme-color">
                  {elm.title.split(" ").slice(0, 2).join(" ")}
                  <br />
                  {elm.title.split(" ").slice(2).join(" ")}
                </h2>
                <p className="animate animate_fade animate_btt animate_delay-6 theme-color mb-3">
                  {elm.price}
                </p>
                <Link
                  href="/shop-1"
                  className="btn btn-outline-primary animate_btt animate_delay-7 border-0 fs-base text-uppercase fw-medium btn-50 border-circle theme-bg-color-secondary text-white"
                >
                  <span>Shop Now</span>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
        {/* <!-- /.slideshow-wrapper js-swiper-slider --> */}
        <div className="cursor-pointer products-carousel__prev position-absolute top-50 d-flex align-items-center justify-content-center rounded-circle border-1 bg-grey-eeeeee navigation-sm mt-0">
          <svg
            className="w-auto"
            width="7"
            height="11"
            viewBox="0 0 7 11"
            xmlns="http://www.w3.org/2000/svg"
          >
            <use href="#icon_prev_sm"></use>
          </svg>
        </div>
        <div className="cursor-pointer products-carousel__next position-absolute top-50 d-flex align-items-center justify-content-center rounded-circle border-1 bg-grey-eeeeee navigation-sm mt-0">
          <svg
            className="w-auto"
            width="7"
            height="11"
            viewBox="0 0 7 11"
            xmlns="http://www.w3.org/2000/svg"
          >
            <use href="#icon_next_sm"></use>
          </svg>
        </div>
        <div className="container">
          <div className="slideshow-pagination type2 d-flex align-items-center position-absolute bottom-0 left-50 mb-4"></div>
          {/* <!-- /.products-pagination --> */}
        </div>{" "}
      </Swiper>
      {/* <!-- /.container --> */}

      {/* <!-- /.slideshow --> */}
    </div>
  );
}
