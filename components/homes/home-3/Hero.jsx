"use client";
import Link from "next/link";

import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

export default function Hero() {
  const swiperOptions = {
    modules: [Autoplay, EffectFade, Pagination],
    autoplay: {
      delay: 5000,
    },

    slidesPerView: 1,
    effect: "fade",
    loop: true,
  };
  return (
    <Swiper
      pagination={{
        clickable: true,
        el: ".spb3",
        bulletActiveClass: "swiper-pagination-bullet-active",
        renderBullet: function (index, className) {
          return `<span class="swiper-pagination-bullet ${className}" tabIndex="0">
            0${index + 1}
          </span>`;
        },
      }}
      {...swiperOptions}
      style={{ maxWidth: "100vw", overflow: "hidden" }}
      className="swiper-container js-swiper-slider swiper-number-pagination slideshow h-xs-25rem swiper-container-fade swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events"
    >
      <SwiperSlide className="swiper-slide">
        <div className="overflow-hidden position-relative h-100">
          <div className="slideshow-character position-absolute bottom-0 pos_right-center">
            <Image
              loading="lazy"
              src="/assets/images/home/demo3/slideshow-character1.png"
              width="542"
              height="733"
              alt="Woman Fashion 1"
              className="slideshow-character__img animate animate_fade animate_btt animate_delay-9 w-auto h-auto"
            />
            <div className="character_markup type2">
              <p className="text-uppercase font-sofia mark-grey-color animate animate_fade animate_btt animate_delay-10 mb-0">
                Dresses
              </p>
            </div>
          </div>
          <div className="slideshow-text container position-absolute start-50 top-50 translate-middle">
            <h6 className="text_dash text-uppercase fs-base fw-medium animate animate_fade animate_btt animate_delay-3">
              New Arrivals
            </h6>
            <h2 className="h1 fw-normal mb-0 animate animate_fade animate_btt animate_delay-5">
              Night Spring
            </h2>
            <h2 className="h1 fw-bold animate animate_fade animate_btt animate_delay-5">
              Dresses
            </h2>
            <Link
              href="/shop-1"
              className="btn-link btn-link_lg default-underline fw-medium animate animate_fade animate_btt animate_delay-7"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </SwiperSlide>
      {/* <!-- /.slideshow-item --> */}

      <SwiperSlide className="swiper-slide">
        <div className="overflow-hidden position-relative h-100">
          <div className="slideshow-character position-absolute bottom-0 pos_right-center">
            <Image
              loading="lazy"
              src="/assets/images/slideshow-character1.png"
              width="400"
              height="733"
              alt="Woman Fashion 1"
              className="slideshow-character__img animate animate_fade animate_btt animate_delay-9 w-auto h-auto"
            />
            <div className="character_markup">
              <p className="text-uppercase font-sofia fw-bold animate animate_fade animate_rtl animate_delay-10">
                Summer
              </p>
            </div>
          </div>
          <div className="slideshow-text container position-absolute start-50 top-50 translate-middle">
            <h6 className="text_dash text-uppercase fs-base fw-medium animate animate_fade animate_btt animate_delay-3">
              New Arrivals
            </h6>
            <h2 className="h1 fw-normal mb-0 animate animate_fade animate_btt animate_delay-5">
              Night Spring
            </h2>
            <h2 className="h1 fw-bold animate animate_fade animate_btt animate_delay-5">
              Dresses
            </h2>
            <Link
              href="/shop-1"
              className="btn-link btn-link_lg default-underline fw-medium animate animate_fade animate_btt animate_delay-7"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </SwiperSlide>
      {/* <!-- /.slideshow-item --> */}

      <SwiperSlide className="swiper-slide">
        <div className="overflow-hidden position-relative h-100">
          <div className="slideshow-character position-absolute bottom-0 pos_right-center">
            <Image
              loading="lazy"
              src="/assets/images/slideshow-character2.png"
              width="400"
              height="690"
              alt="Woman Fashion 2"
              className="slideshow-character__img animate animate_fade animate_btt animate_delay-9 w-auto h-auto"
            />
          </div>
          <div className="slideshow-text container position-absolute start-50 top-50 translate-middle">
            <h6 className="text_dash text-uppercase fs-base fw-medium animate animate_fade animate_btt animate_delay-3">
              New Arrivals
            </h6>
            <h2 className="h1 fw-normal mb-0 animate animate_fade animate_btt animate_delay-5">
              Night Spring
            </h2>
            <h2 className="h1 fw-bold animate animate_fade animate_btt animate_delay-5">
              Dresses
            </h2>
            <Link
              href="/shop-1"
              className="btn-link btn-link_lg default-underline fw-medium animate animate_fade animate_btt animate_delay-7"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </SwiperSlide>
      {/* <!-- /.slideshow-item --> */}

      <div className="container">
        <div className="slideshow-pagination slideshow-number-pagination d-flex align-items-center position-absolute bottom-0 mb-5 swiper-pagination-clickable swiper-pagination-bullets spb3"></div>
        {/* <!-- /.products-pagination --> */}
      </div>
      {/* <!-- /.container --> */}
    </Swiper>
  );
}
