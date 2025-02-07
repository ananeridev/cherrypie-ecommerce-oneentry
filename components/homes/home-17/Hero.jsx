"use client";
import Link from "next/link";

import { slideData13 } from "@/data/heroslides";
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
    <section className="banner collections-grid_masonry bg-white h-auto">
      <div className="container pt-4">
        <div className="row mt-2">
          <div className="col-lg-6 slideshow-boxed-right mb-4">
            <Swiper
              className="slideshow swiper-container js-swiper-slider w-100 bg-white mx-0 mt-0"
              {...swiperOptions}
            >
              {slideData13.map((elm, i) => (
                <SwiperSlide key={i} className="swiper-slide">
                  <div className="overflow-hidden position-relative border-radius-10 h-100">
                    <Image
                      loading="lazy"
                      src={elm.imageUrl}
                      className="position-absolute w-100 h-100 object-fit-cover"
                      width="734"
                      height="500"
                      alt="Woman Fashion 1"
                    />
                    <div className="slideshow-text full-width_padding position-absolute start-50 top-50 translate-middle pb-4 pb-xl-5">
                      <p className="text_dash text-uppercase fs-base fw-medium animate animate_fade animate_btt animate_delay-3 text-white mb-2">
                        {elm.title}
                      </p>
                      <h2 className="fs-45 fw-semi-bold animate animate_fade animate_btt animate_delay-5 mb-2 text-white text-uppercase lh-1">
                        {elm.subTitle}
                      </h2>
                      <h2 className="fs-45 fw-semi-bold animate animate_fade animate_btt animate_delay-5 mb-4 text-white text-uppercase lh-1">
                        {elm.description}
                      </h2>
                      <div className="animate animate_fade animate_btt animate_delay-7">
                        <Link
                          href="/shop-1"
                          className="btn btn-primary border-0 fw-semi-bold text-uppercase theme-bg-color-secondary border-radius-10 btn-50 fs-base text-primary"
                        >
                          Shop Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              <div className="full-width_padding">
                <div className="slideshow-pagination swiper-pagination-white d-flex align-items-center position-absolute bottom-0 mb-5"></div>
                {/* <!-- /.products-pagination --> */}
              </div>
              {/* <!-- /.container --> */}
            </Swiper>
          </div>
          <div className="col-md-6 col-lg-3 order-lg--1 mb-4">
            <ul className="categories-nav__list mb-0 h-100 border-1 border-radius-10 py-xl-4">
              <li className="categories-nav__item">
                <Link href="/shop-1">INTERIOR</Link>
              </li>
              <li className="categories-nav__item">
                <Link href="/shop-1">EXTERIOR</Link>
              </li>
              <li className="categories-nav__item">
                <Link href="/shop-1">PERFORMANCE</Link>
              </li>
              <li className="categories-nav__item">
                <Link href="/shop-1">LIGHTING</Link>
              </li>
              <li className="categories-nav__item">
                <Link href="/shop-1">WHEELS & TIRES</Link>
              </li>
              <li className="categories-nav__item">
                <Link href="/shop-1">REPAIR PARTS</Link>
              </li>
              <li className="categories-nav__item">
                <Link href="/shop-1">BODY PARTS</Link>
              </li>
              <li className="categories-nav__item">
                <Link href="/shop-1">AUDIO & ELECTRONICS</Link>
              </li>
              <li className="categories-nav__item">
                <Link href="/shop-1">DAMPING</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-6 col-lg-3 d-flex flex-column mb-4">
            <div className="collection-grid__item position-relative flex-grow-1 mb-4 border-radius-10 overflow-hidden">
              <div
                className="background-img"
                style={{
                  backgroundImage: `url('/assets/images/home/demo18/banner-2.jpg')`,
                }}
              ></div>
              <div className="content_abs content_center text-left container w-100 px-4 mx-3">
                <h3 className="text-uppercase fs-20 fw-semi-bold">
                  NEW ARRIVALS
                  <br />
                  INTERIOR
                </h3>
                <Link
                  href="/shop-1"
                  className="btn-link default-underline text-uppercase fw-semi-bold fs-13"
                >
                  Shop Now
                </Link>
              </div>
              {/* <!-- /.content_abs content_center text-left --> */}
            </div>
            <div className="collection-grid__item position-relative flex-grow-1 mt-lg-1 mb-0 border-radius-10 overflow-hidden">
              <div
                className="background-img"
                style={{
                  backgroundImage: `url('/assets/images/home/demo18/banner-3.jpg')`,
                }}
              ></div>
              <div className="content_abs content_center text-left container w-100 px-4 mx-3">
                <h3 className="text-uppercase fs-20 fw-semi-bold text-white">
                  SAVE 35% ALL
                  <br />
                  SEASON TYRES
                </h3>
                <Link
                  href="/shop-1"
                  className="btn-link default-underline text-uppercase fw-semi-bold fs-13 text-white"
                >
                  Shop Now
                </Link>
              </div>
              {/* <!-- /.content_abs content_center text-left --> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
