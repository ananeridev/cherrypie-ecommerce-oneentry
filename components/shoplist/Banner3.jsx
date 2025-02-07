"use client";

import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

const slides = [
  {
    id: 1,
    backgroundColor: "#f5e6e0",
    title: "Women's ACCESSORIES",
    content:
      "Accessories are the best way to update your look. Add a title edge with new styles and new colors, or go for timeless pieces.",
    imagePath: "/assets/images/shop/shop_banner3.jpg",
    alt: "Women's accessories",
  },
  {
    id: 2,
    backgroundColor: "#f5e6e0",
    title: "Choose Your Best Suits",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imagePath: "/assets/images/shop/shop_banner3.jpg",
    alt: "Women's accessories",
  },
  {
    id: 3,
    backgroundColor: "#f5e6e0",
    title: "World's Leading Quality",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imagePath: "/assets/images/shop/shop_banner3.jpg",
    alt: "Women's accessories",
  },
];

export default function Banner3() {
  const swiperOptions = {
    autoplay: {
      delay: 5000,
    },
    modules: [Autoplay, EffectFade, Pagination],
    slidesPerView: 1,
    effect: "fade",
    loop: true,
    pagination: {
      el: ".slideshow-pagination",
      type: "bullets",
      clickable: true,
    },
  };
  return (
    <Swiper
      {...swiperOptions}
      className="swiper-container js-swiper-slider slideshow slideshow_small slideshow_split"
    >
      {slides.map((elm, i) => (
        <SwiperSlide key={i} className="swiper-slide">
          <div className="slide-split h-100 d-block d-md-flex overflow-hidden">
            <div
              className="slide-split_text position-relative d-flex align-items-center"
              style={{ backgroundColor: elm.backgroundColor }}
            >
              <div className="slideshow-text container p-3 p-xl-5">
                <h2 className="text-uppercase section-title fw-normal mb-3 animate animate_fade animate_btt animate_delay-2">
                  {elm.title.split(" ").slice(0, 1).join(" ")} <br />
                  <strong>{elm.title.split(" ").slice(1).join(" ")}</strong>
                </h2>
                <p className="mb-0 animate animate_fade animate_btt animate_delay-5">
                  {elm.content}
                </p>
              </div>
            </div>
            <div className="slide-split_media position-relative">
              <div
                className="slideshow-bg"
                style={{ backgroundColor: elm.backgroundColor }}
              >
                <Image
                  loading="lazy"
                  src={elm.imagePath}
                  width="630"
                  height="450"
                  alt="Women's accessories"
                  className="slideshow-bg__img object-fit-cover"
                />
              </div>
            </div>
          </div>
          {/* <!-- /.slideshow-item --> */}
        </SwiperSlide>
      ))}

      {/* <!-- /.slideshow-wrapper js-swiper-slider --> */}

      <div className="container p-3 p-xl-5">
        <div className="slideshow-pagination d-flex align-items-center position-absolute bottom-0 mb-4 pb-xl-2"></div>
        {/* <!-- /.products-pagination --> */}
      </div>
      {/* <!-- /.container --> */}
    </Swiper>
  );
}
