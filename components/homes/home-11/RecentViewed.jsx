"use client";
import Star from "@/components/common/Star";
import { useContextElement } from "@/context/Context";
import { products24 } from "@/data/products/electronics";
import Link from "next/link";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

export default function RecentViewed() {
  const { addProductToCart, isAddedToCartProducts } = useContextElement();
  const { setQuickViewItem } = useContextElement();
  const swiperOptions = {
    autoplay: {
      delay: 5000,
    },
    modules: [Autoplay, Pagination],
    slidesPerView: 8,
    slidesPerGroup: 1,
    effect: "none",
    loop: false,
    pagination: {
      el: "#product_carousel_2 .slideshow-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 1,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 4,
        slidesPerGroup: 1,
        spaceBetween: 40,
      },
      1500: {
        slidesPerView: 5,
        slidesPerGroup: 1,
        spaceBetween: 40,
      },
    },
  };
  return (
    <section className="product-carousel border-top-1">
      <div className="container">
        <div className="mb-3 mb-xl-5 pb-3 pt-1 pb-xl-5"></div>

        <div className="d-flex align-items-center justify-content-center justify-content-md-between flex-wrap mb-3 pb-xl-2 mb-xl-4">
          <h2 className="section-title fw-bold">Recently Viewed</h2>
          <Link
            className="btn-link btn-link_md default-underline text-uppercase fw-medium"
            href="/shop-1"
          >
            See All Products
          </Link>
        </div>

        <div id="product_carousel_2" className="position-relative">
          <Swiper
            {...swiperOptions}
            className="swiper-container js-swiper-slider"
          >
            {products24.map((elm, i) => (
              <SwiperSlide
                key={i}
                className="swiper-slide product-card product-card_style8 hover-container border-1"
              >
                <div className="pc__img-wrapper pc__img-wrapper_wide2">
                  <Link href={`/product1_simple/${elm.id}`}>
                    <Image
                      loading="lazy"
                      src={elm.imgSrc}
                      width="248"
                      height="225"
                      alt="image"
                      className="pc__img"
                    />
                  </Link>
                </div>

                <div className="pc__info position-relative">
                  <p className="pc__category">{elm.category}</p>
                  <h6 className="pc__title">
                    <Link href={`/product1_simple/${elm.id}`}>{elm.title}</Link>
                  </h6>
                  <div className="product-card__review d-sm-flex align-items-center">
                    <div className="reviews-group d-flex">
                      <Star stars={elm.reviewStars} />
                    </div>
                    <span className="reviews-note text-lowercase text-secondary ms-sm-1">
                      {elm.reviewsCount}
                    </span>
                  </div>

                  <div className="product-card__price d-flex mb-2">
                    <span className="money price fs-5">${elm.price}</span>
                  </div>

                  <div className="anim_appear-bottom position-absolute bottom-0 start-0 end-0 d-none d-sm-flex align-items-center bg-body">
                    <button
                      className="btn-link btn-link_lg me-auto me-xxl-4 text-uppercase fw-medium js-add-cart js-open-aside"
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
                      className="btn-link btn-link_lg me-auto text-uppercase fw-medium js-quick-view"
                      data-bs-toggle="modal"
                      data-bs-target="#quickView"
                      onClick={() => setQuickViewItem(elm)}
                      title="Quick view"
                    >
                      <span className="d-xxl-block">Quick View</span>
                      <span className="d-xxl-none">
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
                  </div>
                </div>
              </SwiperSlide>
            ))}

            {/* <!-- /.swiper-wrapper --> */}
          </Swiper>
          {/* <!-- /.swiper-container js-swiper-slider --> */}

          <div className="slideshow-pagination mt-4 mt-xl-5 d-flex align-items-center justify-content-center"></div>
          {/* <!-- /.products-pagination --> */}
        </div>
        {/* <!-- /.position-relative --> */}
      </div>
    </section>
  );
}
