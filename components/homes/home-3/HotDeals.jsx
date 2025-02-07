"use client";
import { useContextElement } from "@/context/Context";
import { products4 } from "@/data/products/fashion";
import Link from "next/link";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import CountDownComponent from "@/components/common/CountDownComponent";

export default function HotDeals() {
  const { toggleWishlist, isAddedtoWishlist } = useContextElement();
  const { setQuickViewItem } = useContextElement();
  const { addProductToCart, isAddedToCartProducts } = useContextElement();
  const swiperOptions = {
    autoplay: {
      delay: 5000,
    },
    slidesPerView: 4,
    slidesPerGroup: 4,
    effect: "none",
    modules: [Autoplay],
    loop: false,
    breakpoints: {
      320: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 14,
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 3,
        spaceBetween: 24,
      },
      992: {
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween: 30,
        pagination: false,
      },
      1200: {
        slidesPerView: 4,
        slidesPerGroup: 1,
        spaceBetween: 30,
        pagination: false,
      },
    },
  };
  return (
    <section className="hot-deals container">
      <h2 className="section-title text-center mb-3 pb-xl-3 mb-xl-4">
        Hot Deals
      </h2>
      <div className="row">
        <div className="col-md-6 col-lg-4 col-xl-20per d-flex align-items-center flex-column justify-content-center py-4 align-items-md-start">
          <h2>Summer Sale</h2>
          <h2 className="fw-bold">Up to 60% Off</h2>

          <div className="position-relative d-flex align-items-center text-center pt-xxl-4 js-countdown mb-3">
            <CountDownComponent />
          </div>

          <Link
            href="/shop-1"
            className="btn-link default-underline text-uppercase fw-medium mt-3"
          >
            View All
          </Link>
        </div>
        <div className="col-md-6 col-lg-8 col-xl-80per">
          <div className="position-relative">
            <Swiper
              className="swiper-container js-swiper-slider"
              {...swiperOptions}
            >
              {products4.map((elm, i) => (
                <SwiperSlide
                  key={i}
                  className="swiper-slide product-card product-card_style3"
                >
                  <div className="pc__img-wrapper">
                    <Link href={`/product1_simple/${elm.id}`}>
                      <Image
                        loading="lazy"
                        src={elm.imgSrc}
                        width="258"
                        height="313"
                        alt="Cropped Faux leather Jacket"
                        className="pc__img"
                      />
                      <Image
                        loading="lazy"
                        src={elm.imgSrc2}
                        width="258"
                        height="313"
                        alt="Cropped Faux leather Jacket"
                        className="pc__img pc__img-second"
                      />
                    </Link>
                  </div>

                  <div className="pc__info position-relative">
                    <h6 className="pc__title">
                      <Link href={`/product1_simple/${elm.id}`}>
                        {elm.title}
                      </Link>
                    </h6>
                    <div className="product-card__price d-flex align-items-center">
                      <span className="money price-old">${elm.oldPrice}</span>
                      <span className="money price text-secondary">
                        ${elm.price}
                      </span>
                    </div>

                    <div className="anim_appear-bottom position-absolute bottom-0 start-0 d-none d-sm-flex align-items-center bg-body">
                      <button
                        className="btn-link btn-link_lg me-4 text-uppercase fw-medium js-add-cart js-open-aside"
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
                        className="btn-link btn-link_lg me-4 text-uppercase fw-medium js-quick-view"
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
