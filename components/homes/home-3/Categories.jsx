"use client";
import { categories2 } from "@/data/categories";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

export default function Categories() {
  const swiperOptions = {
    autoplay: {
      delay: 5000,
    },
    slidesPerView: 8,
    slidesPerGroup: 1,
    effect: "none",
    loop: true,
    modules: [Autoplay, Navigation],
    navigation: {
      nextEl: ".products-carousel__next-1",
      prevEl: ".products-carousel__prev-1",
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 6,
        slidesPerGroup: 1,
        spaceBetween: 45,
        pagination: false,
      },
      1200: {
        slidesPerView: 8,
        slidesPerGroup: 1,
        spaceBetween: 60,
        pagination: false,
      },
    },
  };
  return (
    <section className="category-carousel container">
      <h2 className="section-title text-center mb-3 pb-xl-2 mb-xl-4">
        You Might Like
      </h2>

      <div className="position-relative">
        <Swiper
          {...swiperOptions}
          className="swiper-container js-swiper-slider"
        >
          {categories2.map((elm, i) => (
            <SwiperSlide key={i} className="swiper-slide">
              <Image
                loading="lazy"
                className="w-100 h-auto mb-3"
                src={elm.imageUrl}
                width="124"
                height="124"
                alt="image"
              />
              <div className="text-center">
                <a href="#" className="menu-link fw-medium">
                  {elm.text.split(" ")[0]}
                  <br />
                  {elm.text.split(" ")[1]}
                </a>
              </div>
            </SwiperSlide>
          ))}

          {/* <!-- /.swiper-wrapper --> */}
        </Swiper>
        {/* <!-- /.swiper-container js-swiper-slider --> */}

        <div className="cursor-pointer products-carousel__prev products-carousel__prev-1 position-absolute top-50 d-flex align-items-center justify-content-center">
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            xmlns="http://www.w3.org/2000/svg"
          >
            <use href="#icon_prev_md" />
          </svg>
        </div>
        {/* <!-- /.products-carousel__prev --> */}
        <div className="cursor-pointer products-carousel__next products-carousel__next-1 position-absolute top-50 d-flex align-items-center justify-content-center">
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            xmlns="http://www.w3.org/2000/svg"
          >
            <use href="#icon_next_md" />
          </svg>
        </div>
        {/* <!-- /.products-carousel__next --> */}
      </div>
      {/* <!-- /.position-relative --> */}
    </section>
  );
}
