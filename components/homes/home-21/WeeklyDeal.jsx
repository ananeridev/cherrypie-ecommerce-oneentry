"use client";
import { useContextElement } from "@/context/Context";
import { products47 } from "@/data/products/tools";
import Link from "next/link";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import CountDownComponent2 from "@/components/common/CountDownComponent2";

export default function WeeklyDeal() {
  const { toggleWishlist, isAddedtoWishlist } = useContextElement();
  const { addProductToCart, isAddedToCartProducts } = useContextElement();
  const swiperOptions = {
    autoplay: {
      delay: 5000,
    },
    modules: [Autoplay, Navigation],
    slidesPerView: 5,
    slidesPerGroup: 1,
    effect: "none",
    loop: false,
    navigation: {
      nextEl: "#product_hot_deals .products-carousel__next",
      prevEl: "#product_hot_deals .products-carousel__prev",
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
      <div className="d-flex align-items-center flex-wrap gap-4 mb-3 pb-xl-2 mb-xl-4">
        <h2 className="fw-semi-bold fs-24 mb-3 text-uppercase">
          Top weekly deals
        </h2>
        <div className="text-white theme-bg-color-secondary border-circle d-flex align-items-center gap-2 px-4 py-1 mb-3">
          <span>Ends in:</span>
          <div
            className="position-relative d-flex align-items-center text-center color-secondary js-countdown fs-18 fw-semi-bold"
            data-date="18-3-2024"
            data-time="06:50"
          >
            <CountDownComponent2 />
          </div>
        </div>

        <Link
          className="btn-link btn-link_md default-underline text-uppercase fw-semi-bold ms-md-auto mb-3"
          href="/shop-1"
        >
          See All Products
        </Link>
      </div>
      <div
        id="product_hot_deals"
        className="position-relative px-3 px-xl-4 py-3 py-xl-4 bg-white border-1"
      >
        <Swiper
          {...swiperOptions}
          className="swiper-container js-swiper-slider"
        >
          {products47.map((elm, i) => (
            <SwiperSlide key={i} className="swiper-slide product-card">
              <div className="pc__img-wrapper pt-100per">
                <Link href={`/product1_simple/${elm.id}`}>
                  <Image
                    loading="lazy"
                    src={elm.imgSrc}
                    width="315"
                    height="310"
                    alt="Cropped Faux leather Jacket"
                    className="pc__img"
                  />
                </Link>
                <button
                  className="pc__atc btn fs-base anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium js-add-cart js-open-aside bg-black text-white left-0 w-100 bottom-0"
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
                <h6 className="pc__title fs-15 fw-semi-bold mb-2">
                  <Link href={`/product1_simple/${elm.id}`}>{elm.title}</Link>
                </h6>
                <div className="product-card__price d-flex">
                  <span className="money price theme-color fs-15 fw-semi-bold">
                    ${elm.price}
                  </span>
                </div>

                <button
                  className={`pc__btn-wl position-absolute top-0 end-0 bg-transparent border-0 js-add-wishlist ${
                    isAddedtoWishlist(elm.id) ? "active" : ""
                  } mt-1`}
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
            </SwiperSlide>
          ))}

          {/* <!-- /.swiper-wrapper --> */}
        </Swiper>
        {/* <!-- /.swiper-container js-swiper-slider --> */}

        <div className="cursor-pointer products-carousel__prev navigation-sm bg-white border-radius-0 border-1 position-absolute top-50 mt-0 d-flex align-items-center justify-content-center">
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
        <div className="cursor-pointer products-carousel__next navigation-sm bg-white border-radius-0 border-1 position-absolute top-50 mt-0 d-flex align-items-center justify-content-center">
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
