"use client";

import { useContextElement } from "@/context/Context";
import { products32 } from "@/data/products/medical";
import Link from "next/link";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

export default function FaceMask() {
  const { toggleWishlist, isAddedtoWishlist } = useContextElement();
  const { setQuickViewItem } = useContextElement();
  const { addProductToCart, isAddedToCartProducts } = useContextElement();
  const swiperOptions = {
    autoplay: {
      delay: 5000,
    },
    modules: [Autoplay],
    slidesPerView: 4,
    slidesPerGroup: 1,
    effect: "none",
    loop: false,
    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 16,
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 1,
        spaceBetween: 22,
      },
      992: {
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween: 28,
      },
      1200: {
        slidesPerView: 4,
        slidesPerGroup: 1,
        spaceBetween: 30,
      },
    },
  };
  return (
    <section className="product-carousel container">
      <div className="d-flex align-items-center justify-content-md-between flex-wrap mb-3 pb-xl-2 mb-xl-4">
        <h2 className="section-title fw-semi-bold fs-30 theme-color">
          Face Mask
        </h2>

        <Link
          className="btn-link btn-link_md default-underline text-uppercase fw-semi-bold theme-color"
          href="/shop-1"
        >
          See All Products
        </Link>
      </div>

      <div className="row">
        <div className="col-sm-6 col-md-4 col-lg-3 col-xl-20per">
          <div className="position-relative w-100 h-sm-100 border-radius-4 overflow-hidden minh-240 mb-4 mb-sm-0">
            <div
              className="background-img"
              style={{
                backgroundImage:
                  "url(/assets/images/home/demo14/grid_banner_5.jpg)",
              }}
            ></div>
            <div className="content_abs top-0 mx-3 mt-3 mt-xl-4 pt-2 px-2">
              <p className="mb-1 text-secondary">NEW</p>
              <h3 className="fs-22 fw-bold mb-3 theme-color">
                Search Lab N95 Face Mask
              </h3>
              <button className="btn btn-outline-primary border-0 fs-12 btn-40 border-circle text-uppercase theme-bg-color text-white px-4 py-2 fw-semi-bold">
                <span>More Info</span>
              </button>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-8 col-lg-9 col-xl-80per">
          <div id="product_carousel_4" className="position-relative">
            <Swiper
              {...swiperOptions}
              className="swiper-container js-swiper-slider"
            >
              {products32.map((elm, i) => (
                <SwiperSlide
                  key={i}
                  className="swiper-slide product-card product-card_style9 type2"
                >
                  <div className="position-relative pb-3">
                    <div className="pc__img-wrapper pc__img-wrapper_wide3">
                      <Link href={`/product1_simple/${elm.id}`}>
                        <Image
                          loading="lazy"
                          src={elm.imgSrc}
                          width="260"
                          height="280"
                          alt="Cropped Faux leather Jacket"
                          className="pc__img"
                        />
                      </Link>
                    </div>
                    <div className="anim_appear-bottom position-absolute w-100 text-center">
                      <button
                        className="btn btn-round btn-hover-red border-0 text-uppercase me-2 js-add-cart js-open-aside"
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
                        className="btn btn-round btn-hover-red border-0 text-uppercase me-2 js-quick-view"
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
          </div>
          {/* <!-- /.position-relative --> */}
        </div>
      </div>
    </section>
  );
}
