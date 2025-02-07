"use client";
import { useContextElement } from "@/context/Context";
import { products3 } from "@/data/products/fashion";
import Link from "next/link";
import { Autoplay, Navigation, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

export default function Products2() {
  const { toggleWishlist, isAddedtoWishlist } = useContextElement();
  const { setQuickViewItem } = useContextElement();
  const { addProductToCart, isAddedToCartProducts } = useContextElement();
  const swiperOptions = {
    autoplay: {
      delay: 5000,
    },
    modules: [Autoplay, Scrollbar, Navigation],
    slidesPerView: 4,
    slidesPerGroup: 4,
    effect: "none",
    loop: false,
    scrollbar: {
      el: ".products-carousel__scrollbar",
      draggable: true,
    },
    navigation: {
      nextEl: ".products-carousel__next",
      prevEl: ".products-carousel__prev",
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
      <h2 className="section-title text-uppercase fw-bold text-center mb-4 pb-xl-2 mb-xl-4">
        Latest Products
      </h2>

      <div className="position-relative">
        <Swiper
          style={{ maxWidth: "100vw", overflow: "hidden" }}
          className="swiper-container js-swiper-slider"
          {...swiperOptions}
        >
          {products3.map((elm, i) => (
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
                  <Image
                    loading="lazy"
                    src={elm.imgSecondSrc}
                    width="330"
                    height="400"
                    alt="Cropped Faux leather Jacket"
                    className="pc__img pc__img-second"
                  />
                </Link>
                {elm.badge && (
                  <div className="product-label bg-white">{elm.badge}</div>
                )}
                {elm.discount && (
                  <div className="product-label bg-red text-white">
                    {elm.discount}%
                  </div>
                )}
                <div className="anim_appear-bottom position-absolute bottom-0 start-0 w-100 d-none d-sm-flex align-items-center">
                  <button
                    className="btn btn-primary flex-grow-1 fs-base ps-3 ps-xxl-4 pe-0 border-0 text-uppercase fw-medium js-add-cart js-open-aside"
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
                    className="btn btn-primary flex-grow-1 fs-base ps-0 pe-3 pe-xxl-4 border-0 text-uppercase fw-medium js-quick-view"
                    data-bs-toggle="modal"
                    data-bs-target="#quickView"
                    onClick={() => setQuickViewItem(elm)}
                    title="Quick view"
                  >
                    Quick View
                  </button>
                </div>
                <button
                  className={`pc__btn-wl position-absolute bg-body rounded-circle border-0 text-primary js-add-wishlist ${
                    isAddedtoWishlist(elm.id) ? "active" : ""
                  }`}
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

              <div className="pc__info position-relative">
                <p className="pc__category third-color">{elm.category}</p>
                <h6 className="pc__title">
                  <Link href={`/product1_simple/${elm.id}`}>{elm.title}</Link>
                </h6>
                <div className="product-card__price d-flex">
                  {elm.oldPrice && (
                    <span className="money price-old">${elm.oldPrice}</span>
                  )}
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

        <div className="pb-2 mb-2 mb-xl-4"></div>

        {/* <!-- scrollbar --> */}
        <div className="products-carousel__scrollbar swiper-scrollbar"></div>
      </div>
      {/* <!-- /.position-relative --> */}
    </section>
  );
}
