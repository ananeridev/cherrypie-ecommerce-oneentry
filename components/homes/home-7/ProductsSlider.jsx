"use client";
import { products15 } from "@/data/products/fashion";
import Link from "next/link";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

export default function ProductsSlider() {
  const swiperOptions = {
    slidesPerView: 1,
    slidesPerGroup: 1,
    effect: "none",
    loop: false,
    modules: [Navigation],
    navigation: {
      nextEl: ".products-carousel__next",
      prevEl: ".products-carousel__prev",
    },
  };
  return (
    <section className="products-carousel-with-banner container">
      <div className="row">
        <div className="col-lg-6 px-xxl-0">
          <div className="row">
            <div className="col-lg-7">
              <div className="position-relative py-4">
                <h2 className="section-title fw-normal text-uppercase text-center mb-1 mb-md-3 pb-xl-2 mb-xl-4">
                  Elements of <strong className="fw-bold">Style</strong>
                </h2>
                <Swiper
                  className="swiper-container js-swiper-slider"
                  {...swiperOptions}
                >
                  {products15.map((elm, i) => (
                    <SwiperSlide key={i} className="swiper-slide product-card">
                      <div className="pc__img-wrapper">
                        <Link href={`/product1_simple/${elm.id}`}>
                          <Image
                            loading="lazy"
                            src={elm.imgSrc}
                            width="408"
                            height="495"
                            alt="Cropped Faux leather Jacket"
                            className="pc__img"
                          />
                        </Link>
                      </div>

                      <div className="pc__info position-relative">
                        <p className="pc__category">{elm.category}</p>
                        <h6 className="pc__title">
                          <Link href={`/product1_simple/${elm.id}`}>
                            {elm.title}
                          </Link>
                        </h6>
                        <div className="product-card__price d-flex">
                          <span className="money price">${elm.price}</span>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}

                  {/* <!-- /.swiper-wrapper --> */}
                </Swiper>
                {/* <!-- /.swiper-container js-swiper-slider --> */}

                <div className="cursor-pointer products-carousel__prev position-absolute top-50 d-flex align-items-center justify-content-center">
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
                <div className="cursor-pointer products-carousel__next position-absolute top-50 d-flex align-items-center justify-content-center">
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
            </div>
          </div>
        </div>
        <div className="col-lg-6 px-xxl-0">
          <div className="position-relative">
            <Image
              loading="lazy"
              className="h-auto"
              src="/assets/images/home/demo7/banner.jpg"
              width="720"
              height="776"
              alt="image"
            />
            <div className="products-carousel-with-banner__category fw-medium text-uppercase">
              Women
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
