"use client";
import { useContextElement } from "@/context/Context";
import { products1 } from "@/data/products/fashion";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Pagination, Navigation, Autoplay],
  autoplay: {
    delay: 5000,
  },
  slidesPerView: 4,
  slidesPerGroup: 4,
  effect: "none",
  loop: true,
  pagination: {
    el: "#product_carousel .products-pagination",
    type: "bullets",
    clickable: true,
  },
  navigation: {
    nextEl: "#product_carousel .products-carousel__next",
    prevEl: "#product_carousel .products-carousel__prev",
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
      slidesPerGroup: 2,
      spaceBetween: 30,
    },
  },
};
import Image from "next/image";

export default function Products5() {
  const { toggleWishlist, isAddedtoWishlist } = useContextElement();
  const { addProductToCart, isAddedToCartProducts } = useContextElement();
  return (
    <section className="products-carousel container">
      <h2 className="section-title text-uppercase text-center mb-4 pb-xl-2 mb-xl-4">
        Limited <strong>Edition</strong>
      </h2>

      <div id="product_carousel" className="position-relative">
        <Swiper
          style={{ maxWidth: "100vw", overflow: "hidden" }}
          {...swiperOptions}
          className="swiper-container js-swiper-slider"
        >
          {products1.map((elm, i) => (
            <SwiperSlide key={i} className="swiper-slide product-card">
              <div className="pc__img-wrapper">
                <Link href={`/product1_simple/${elm.id}`}>
                  <Image
                    loading="lazy"
                    src={elm.imgSrc}
                    width="330"
                    height="400"
                    alt="Cropped Faux leather Jacket"
                    className="pc__img"
                  />
                </Link>
                <button
                  className="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium js-add-cart js-open-aside"
                  onClick={() => addProductToCart(elm.id)}
                  title={
                    isAddedToCartProducts(elm.id)
                      ? "Already Added"
                      : "Add to Cart"
                  }
                >
                  {isAddedToCartProducts(elm.id)
                    ? "Already Added"
                    : "Add To Cart"}
                </button>
              </div>

              <div className="pc__info position-relative">
                <p className="pc__category">{elm.category}</p>
                <h6 className="pc__title">
                  <Link href={`/product1_simple/${elm.id}`}>{elm.title}</Link>
                </h6>
                <div className="product-card__price d-flex">
                  <span className="money price">${elm.price}</span>
                </div>
                {elm.reviews && (
                  <div className="product-card__review d-flex align-items-center">
                    <div className="reviews-group d-flex">
                      <svg
                        className="review-star"
                        viewBox="0 0 9 9"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <use href="#icon_star" />
                      </svg>
                      <svg
                        className="review-star"
                        viewBox="0 0 9 9"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <use href="#icon_star" />
                      </svg>
                      <svg
                        className="review-star"
                        viewBox="0 0 9 9"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <use href="#icon_star" />
                      </svg>
                      <svg
                        className="review-star"
                        viewBox="0 0 9 9"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <use href="#icon_star" />
                      </svg>
                      <svg
                        className="review-star"
                        viewBox="0 0 9 9"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <use href="#icon_star" />
                      </svg>
                    </div>
                    <span className="reviews-note text-lowercase text-secondary ms-1">
                      {elm.reviews}
                    </span>
                  </div>
                )}

                <button
                  className={`pc__btn-wl position-absolute top-0 end-0 bg-transparent border-0 js-add-wishlist ${
                    isAddedtoWishlist(elm.id) ? "active" : ""
                  }`}
                  title="Add To Wishlist"
                  onClick={() => toggleWishlist(elm.id)}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <use href="#icon_heart" />
                  </svg>
                </button>
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

        <div className="products-pagination mt-4 mb-5 d-flex align-items-center justify-content-center"></div>
        {/* <!-- /.products-pagination --> */}
      </div>
      {/* <!-- /.position-relative --> */}
    </section>
  );
}
