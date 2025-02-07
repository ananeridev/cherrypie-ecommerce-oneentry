"use client";
import { useContextElement } from "@/context/Context";
import { products8 } from "@/data/products/fashion";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

export default function LimitedEdition() {
  const { toggleWishlist, isAddedtoWishlist } = useContextElement();
  const { setQuickViewItem } = useContextElement();
  const { addProductToCart, isAddedToCartProducts } = useContextElement();
  const swiperOptions = {
    autoplay: {
      delay: 5000,
    },
    slidesPerView: 5,
    slidesPerGroup: 1,
    effect: "none",
    modules: [Autoplay, Pagination, Navigation],
    loop: false,
    pagination: {
      el: ".products-pagination-1",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: ".products-carousel__next-1",
      prevEl: ".products-carousel__prev-1",
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
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 4,
        slidesPerGroup: 1,
        spaceBetween: 28,
      },
      1200: {
        slidesPerView: 5,
        slidesPerGroup: 1,
        spaceBetween: 28,
      },
    },
  };
  return (
    <section className="products-carousel bg-black">
      <div className="container">
        <div className="mb-1 pb-4 mb-xl-5 pb-xl-5"></div>

        <h2 className="section-title text-center fw-normal text-white mb-1 mb-md-3 pb-xl-3 mb-xl-4">
          Limited Edition
        </h2>

        <div className="position-relative">
          <Swiper
            {...swiperOptions}
            className="swiper-container js-swiper-slider"
          >
            {products8.map((elm, i) => (
              <SwiperSlide
                key={i}
                className="swiper-slide product-card"
                style={{ backgroundColor: elm.backgroundColor }}
              >
                <div className="pc__img-wrapper">
                  <Link href={`/product1_simple/${elm.id}`}>
                    <Image
                      loading="lazy"
                      src={elm.imgSrc}
                      width="260"
                      height="315"
                      alt="Cropped Faux leather Jacket"
                      className="pc__img"
                    />
                  </Link>
                  <div className="anim_appear-bottom position-absolute w-100 text-center mb-3">
                    <button
                      className="btn btn-round btn-hover-red border-0 text-uppercase me-1 me-md-2 js-add-cart js-open-aside"
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
                      className="btn btn-round btn-hover-red border-0 text-uppercase me-1 me-md-2 js-quick-view"
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
                      className={`btn btn-round btn-hover-red border-0 text-uppercase js-add-wishlist ${
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

                <div className="pc__info position-relative mx-2 px-3 py-3 mt-0">
                  <h6 className="pc__title">
                    <Link href={`/product1_simple/${elm.id}`}>{elm.title}</Link>
                  </h6>
                  <div className="product-card__price d-flex">
                    <span className="money price">${elm.price}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            {/* <!-- /.swiper-wrapper --> */}
            {/* <!-- /.products-pagination --> */}
          </Swiper>
          {/* <!-- /.swiper-container js-swiper-slider --> */}

          <div className="cursor-pointer products-carousel__prev products-carousel__prev-1 bg-transparent position-absolute top-50 d-flex align-items-center justify-content-center">
            <svg
              className="color-white"
              width="20"
              height="20"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <use href="#icon_prev_md" />
            </svg>
          </div>
          {/* <!-- /.products-carousel__prev --> */}
          <div className="cursor-pointer products-carousel__next products-carousel__next-1 bg-transparent position-absolute top-50 d-flex align-items-center justify-content-center">
            <svg
              className="color-white"
              width="20"
              height="20"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <use href="#icon_next_md" />
            </svg>
          </div>
          {/* <!-- /.products-carousel__next --> */}

          <div className="products-pagination products-pagination-1 type2 active-white mt-5 mb-3 d-flex align-items-center justify-content-center"></div>
        </div>
        {/* <!-- /.position-relative --> */}

        <div className="mt-1 pt-4 mt-xl-5 pt-xl-5"></div>
      </div>
    </section>
  );
}
