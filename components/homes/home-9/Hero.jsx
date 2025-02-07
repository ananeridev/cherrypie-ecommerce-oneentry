"use client";
import { slidesData4 } from "@/data/heroslides";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
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
      className="swiper-container js-swiper-slider slideshow full-width_padding-20 slideshow-md swiper-container-fade swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events"
    >
      {slidesData4.map((elm, i) => (
        <SwiperSlide key={i} className="swiper-slide">
          <div className="overflow-hidden position-relative h-100">
            <div className="slideshow-bg">
              <Image
                loading="lazy"
                src={elm.imageSrc}
                width="1863"
                height="700"
                alt="image"
                className="slideshow-bg__img object-fit-cover object-position-right"
              />
            </div>
            <div className="slideshow-text container position-absolute start-50 top-50 translate-middle">
              <h6 className="text_dash text-uppercase fs-base fw-medium animate animate_fade animate_btt animate_delay-3">
                {elm.imageAlt}
              </h6>
              <h2 className="text-uppercase h1 fw-normal mb-0 animate animate_fade animate_btt animate_delay-5">
                {elm.subtitle}
              </h2>
              <p className="animate animate_fade animate_btt animate_delay-6">
                {elm.description.split(" ").slice(0, 7).join(" ")}
                <br />
                {elm.description.split(" ").slice(7).join(" ")}
              </p>
              <Link
                href="/shop-1"
                className="btn-link btn-link_sm default-underline text-uppercase fw-medium animate animate_fade animate_btt animate_delay-7"
              >
                Buy Now
              </Link>
            </div>
          </div>
        </SwiperSlide>
      ))}

      {/* <!-- /.slideshow-wrapper js-swiper-slider --> */}

      <div className="slideshow-pagination position-left-center"></div>
      {/* <!-- /.products-pagination --> */}
    </Swiper>
  );
}
