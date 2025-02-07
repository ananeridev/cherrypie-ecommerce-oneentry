"use client";

import { useContextElement } from "@/context/Context";
import { products41 } from "@/data/products/watches";
import Link from "next/link";
import { Autoplay, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

export default function Trending() {
  const { toggleWishlist, isAddedtoWishlist } = useContextElement();
  const { setQuickViewItem } = useContextElement();
  const { addProductToCart, isAddedToCartProducts } = useContextElement();
  const swiperOptions = {
    autoplay: {
      delay: 5000,
    },
    modules: [Autoplay, Scrollbar],
    slidesPerView: 4,
    slidesPerGroup: 4,
    effect: "none",
    loop: false,
    scrollbar: {
      el: "#product_trending .products-carousel__scrollbar",
      draggable: true,
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
    <section className="product-carousel container">
      <h2 className="section-title text-uppercase fs-30 fw-semi-bold text-center mb-2">
        TRENDING
      </h2>
      <p className="fs-13 mb-3 pb-2 pb-xl-3 text-secondary text-center">
        The World's Premium Brands In One Destination.
      </p>

      <div id="product_trending" className="position-relative">
        <Swiper
          {...swiperOptions}
          className="swiper-container js-swiper-slider"
        >
          {products41.map((elm, i) => (
            <SwiperSlide
              key={i}
              className="swiper-slide product-card product-card_style6 hover-container"
            >
              <div className="pc__img-wrapper">
                <Link href={`/product1_simple/${elm.id}`}>
                  <Image
                    loading="lazy"
                    src={elm.imgSrc}
                    width="330"
                    height="400"
                    alt="image"
                    className="pc__img"
                  />
                </Link>
              </div>

              <div className="pc__info position-relative bg-body">
                <div className="position-relative">
                  <p className="pc__category fs-13">{elm.category}</p>
                  <h6 className="pc__title fs-base fw-semi-bold mb-1">
                    <Link href={`/product1_simple/${elm.id}`}>{elm.title}</Link>
                  </h6>
                  <div className="product-card__price d-flex mb-1">
                    <span className="money price fs-base fw-semi-bold">
                      ${elm.price}
                    </span>
                  </div>

                  <div className="d-flex align-items-center hover__content position-relative mt-3 mt-sm-0">
                    <button
                      className="btn-link btn-link_lg me-auto me-xxl-4 text-uppercase js-add-cart js-open-aside fs-13 fw-semi-bold"
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
                    <button
                      className="btn-link btn-link_lg me-3 me-xxl-auto text-uppercase js-quick-view fs-13 fw-semi-bold"
                      data-bs-toggle="modal"
                      data-bs-target="#quickView"
                      onClick={() => setQuickViewItem(elm)}
                      title="Quick view"
                    >
                      <span className="d-none d-xxl-block">Quick View</span>
                      <span className="d-block d-xxl-none">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <use href="#icon_view" />
                        </svg>
                      </span>
                    </button>
                    <button
                      className={`pc__btn-wl bg-transparent border-0 js-add-wishlist ${
                        isAddedtoWishlist(elm.id) ? "active" : ""
                      } pt-1`}
                      onClick={() => toggleWishlist(elm.id)}
                      title="Add To Wishlist"
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
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* <!-- /.swiper-wrapper --> */}
        </Swiper>
        {/* <!-- /.swiper-container js-swiper-slider --> */}

        {/* <!-- scrollbar --> */}
        <div className="products-carousel__scrollbar swiper-scrollbar"></div>
      </div>
      {/* <!-- /.position-relative --> */}
    </section>
  );
}
