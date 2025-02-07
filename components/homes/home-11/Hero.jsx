"use client";
import Link from "next/link";
import { slideData6 } from "@/data/heroslides";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

export default function Hero() {
  const swiperOptions = {
    autoplay: {
      delay: 5000,
    },
    modules: [Autoplay, Pagination, EffectFade],
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
      <div className="slideshow-boxed-right">
        <Swiper
          {...swiperOptions}
          className="swiper-container js-swiper-slider slideshow swiper-container-fade swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events"
        >
          {slideData6.map((elm, i) => (
            <SwiperSlide key={i} className="swiper-slide">
              <div className="overflow-hidden position-relative h-100">
                <div className="slideshow-character position-absolute position-right-center mx-3 mx-xl-5">
                  <Image
                    loading="lazy"
                    src={elm.src}
                    width="350"
                    height="403"
                    alt="Woman Fashion 1"
                    className="slideshow-character__img animate animate_fade animate_btt animate_delay-9 h-auto w-auto"
                    style={{ maxHeight: "78%", width: "auto" }}
                  />
                </div>
                <div className="slideshow-text container px-4 mx-3 mx-lg-4 mx-xl-5 position-absolute start-50 top-50 translate-middle">
                  <h6 className="text_dash text-uppercase fs-base fw-medium animate animate_fade animate_btt animate_delay-3 theme-color">
                    {elm.category}
                  </h6>
                  <h2 className="fs-50 fw-bold mb-2 mb-lg-3 animate animate_fade animate_btt animate_delay-5 lh-1 text-shadow-white">
                    {elm.feature1}
                    <br />
                    {elm.feature2}
                  </h2>
                  <h2 className="fs-3 fw-normal mb-3 animate animate_fade animate_btt animate_delay-5">
                    From ${elm.price}
                  </h2>
                  <Link
                    href="/shop-1"
                    className="btn-link btn-link_lg default-underline fw-medium text-uppercase animate animate_fade animate_btt animate_delay-7"
                  >
                    Discover More
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* <!-- /.slideshow-wrapper js-swiper-slider --> */}

          <div className="container">
            <div className="slideshow-pagination d-flex align-items-center position-absolute bottom-0 left-50 mb-4"></div>
            {/* <!-- /.products-pagination --> */}
          </div>
          {/* <!-- /.container --> */}
        </Swiper>
        {/* <!-- /.slideshow --> */}
      </div>
    </div>
  );
}
