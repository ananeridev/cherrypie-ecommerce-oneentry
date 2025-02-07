"use client";

import Star from "@/components/common/Star";
import { useContextElement } from "@/context/Context";
import { products42 } from "@/data/products/jewelry";
import Link from "next/link";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

export default function BestSelling() {
  const { toggleWishlist, isAddedtoWishlist } = useContextElement();
  const { setQuickViewItem } = useContextElement();
  const { addProductToCart, isAddedToCartProducts } = useContextElement();
  const swiperOptions = {
    autoplay: {
      delay: 5000,
    },
    modules: [Autoplay, Navigation],
    slidesPerView: 4,
    slidesPerGroup: 4,
    effect: "none",
    loop: false,
    pagination: false,
    navigation: {
      nextEl: "#product_5 .products-carousel__next",
      prevEl: "#product_5 .products-carousel__prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 14,
      },
      768: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 24,
      },
      992: {
        slidesPerView: 4,
        slidesPerGroup: 1,
        spaceBetween: 30,
        pagination: false,
      },
    },
  };
  return (
    <section className="products-carousel container">
      <h2 className="section-title fw-normal fs-30 text-center mb-2">
        Best Selling
      </h2>
      <p className="font-special fs-13 mb-3 pb-2 text-secondary text-center">
        The World's Premium Brands In One Destination.
      </p>

      <div id="product_5" className="position-relative">
        <Swiper
          {...swiperOptions}
          className="swiper-container js-swiper-slider"
        >
          {products42.map((elm, i) => (
            <SwiperSlide
              key={i}
              className="swiper-slide product-card hover-overlay"
            >
              <div className="pc__img-wrapper border-1 pt-100per">
                <Link href={`/product1_simple/${elm.id}`}>
                  <Image
                    loading="lazy"
                    src={elm.imgSrc}
                    width="330"
                    height="330"
                    alt="image"
                    className="pc__img"
                  />
                </Link>
                <div className="position-absolute left-0 top-0">
                  {elm.discount && (
                    <div className="product-label fs-12 text-uppercase bg-red text-white position-static py-0 mx-3 mt-3 mb-2">
                      -{elm.discount}%
                    </div>
                  )}
                  {elm.badge && (
                    <div className="product-label fs-12 text-uppercase bg-black text-white position-static py-0 mx-3">
                      {elm.badge}
                    </div>
                  )}
                </div>
                <div className="anim_appear-center position-absolute w-100 text-center mb-3">
                  <button
                    className="btn btn-round bg-black text-white theme-hover-bg border-0 border-radius-0 d-inline-flex align-items-center justify-content-center text-uppercase py-1 me-1 me-md-2 js-add-cart js-open-aside"
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
                      />
                    </svg>
                  </button>
                  <button
                    className="btn btn-round bg-black text-white theme-hover-bg border-0 border-radius-0 d-inline-flex align-items-center justify-content-center text-uppercase py-1 me-1 me-md-2 js-quick-view"
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
                      <use href="#icon_view" />
                    </svg>
                  </button>
                  <button
                    className={`btn btn-round bg-black text-white theme-hover-bg border-0 border-radius-0 d-inline-flex align-items-center justify-content-center text-uppercase py-1 js-add-wishlist ${
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
                      <use href="#icon_heart" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="pc__info position-relative">
                <div className="d-flex align-items-center justify-content-between">
                  <p className="pc__category">{elm.category}</p>
                  <div className="reviews-group d-flex theme-color">
                    <Star stars={elm.rating} />
                  </div>
                </div>
                <h6 className="pc__title mb-2">
                  <Link href={`/product1_simple/${elm.id}`}>{elm.title}</Link>
                </h6>
                <div className="product-card__price d-flex">
                  <span className="money price theme-color fw-bold font-heading">
                    ${elm.price}
                  </span>
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
    </section>
  );
}
