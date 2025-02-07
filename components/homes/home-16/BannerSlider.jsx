"use client";

import { useContextElement } from "@/context/Context";
import { products36 } from "@/data/products/bikes";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

export default function BannerSlider() {
  const { toggleWishlist, isAddedtoWishlist } = useContextElement();
  const { setQuickViewItem } = useContextElement();
  const { addProductToCart, isAddedToCartProducts } = useContextElement();
  const swiperOptions = {
    autoplay: {
      delay: 5000,
    },
    modules: [Autoplay, Navigation],
    navigation: {
      nextEl: "#banner_slider .products-carousel__next",
      prevEl: "#banner_slider .products-carousel__prev",
    },
    pagination: false,
    slidesPerView: 1,
    effect: "none",
    loop: true,
  };
  return (
    <section className="banner-slider container">
      <div id="banner_slider" className="position-relative">
        <Swiper
          {...swiperOptions}
          className="swiper-container js-swiper-slider"
        >
          {products36.map((elm, i) => (
            <SwiperSlide key={i} className="swiper-slide">
              <div className="row mx-0">
                <div className="theme-bg-color text-white col-lg-4 px-0 py-5">
                  <div className="d-flex flex-column justify-content-center h-100 px-4 px-xl-5">
                    <h6 className="text-uppercase fs-18 fw-semi-bold text-uppercase text-white">
                      {elm.category}
                    </h6>
                    <h2 className="fs-40 fw-bold color-white text-uppercase">
                      {elm.title}
                    </h2>
                    <h2 className="fs-40 fw-bold color-white text-uppercase mb-3">
                      ${elm.price}
                    </h2>

                    <div className="d-flex align-items-center">
                      <button
                        className="btn btn-square bg-transparent text-white border-1 border-white text-uppercase me-1 me-md-2 js-add-cart js-open-aside"
                        onClick={() => addProductToCart(elm.id)}
                        title={
                          isAddedToCartProducts(elm.id)
                            ? "Already Added"
                            : "Add to Cart"
                        }
                      >
                        <svg
                          className="d-inline-block"
                          width="14"
                          height="14"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <use
                            href={`${
                              isAddedToCartProducts(elm.id)
                                ? "#icon_cart_added"
                                : "#icon_cart"
                            }`}
                          ></use>
                        </svg>
                      </button>
                      <button
                        className="btn btn-square bg-transparent text-white border-1 border-white text-uppercase me-1 me-md-2 js-quick-view"
                        data-bs-toggle="modal"
                        data-bs-target="#quickView"
                        onClick={() => setQuickViewItem(elm)}
                        title="Quick view"
                      >
                        <svg
                          className="d-inline-block"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <use href="#icon_view"></use>
                        </svg>
                      </button>
                      <button
                        className={`btn btn-square bg-transparent text-white border-1 border-white text-uppercase js-add-wishlist ${
                          isAddedtoWishlist(elm.id) ? "active" : ""
                        }`}
                        onClick={() => toggleWishlist(elm.id)}
                        title="Add To Wishlist"
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <use href="#icon_heart"></use>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8 px-0">
                  <Image
                    loading="lazy"
                    src={elm.imgSrc}
                    width="930"
                    height="600"
                    alt="Pattern"
                    className="w-100 h-auto"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="cursor-pointer products-carousel__prev position-absolute top-50 d-flex align-items-center justify-content-center border-radius-0 border-1 transparent-bg navigation-sm mt-0">
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
        {/* <!-- /.slideshow__prev --> */}
        <div className="cursor-pointer products-carousel__next position-absolute top-50 d-flex align-items-center justify-content-center border-radius-0 border-1 transparent-bg navigation-sm mt-0">
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
        {/* <!-- /.slideshow__next --> */}
      </div>
    </section>
  );
}
