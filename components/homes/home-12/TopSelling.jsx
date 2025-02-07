"use client";

import Star from "@/components/common/Star";
import { useContextElement } from "@/context/Context";
import { products26 } from "@/data/products/grocery";
import Link from "next/link";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

export default function TopSelling() {
  const { toggleWishlist, isAddedtoWishlist } = useContextElement();
  const { setQuickViewItem } = useContextElement();
  const { addProductToCart, isAddedToCartProducts } = useContextElement();
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
      el: "#top_selling_carousel .slideshow-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 16,
      },
      768: {
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween: 22,
      },
      992: {
        slidesPerView: 4,
        slidesPerGroup: 1,
        spaceBetween: 28,
      },
      1200: {
        slidesPerView: 5,
        slidesPerGroup: 1,
        spaceBetween: 34,
      },
    },
  };
  return (
    <section className="product-carousel container">
      <div className="d-flex align-items-center justify-content-center justify-content-md-between flex-wrap mb-3 pb-xl-2 mb-xl-4 gap-4">
        <h2 className="section-title fw-normal">Top Selling Products</h2>
        <Link
          className="btn-link btn-link_md default-underline text-uppercase fw-medium"
          href="/shop-1"
        >
          See All Products
        </Link>
      </div>

      <div id="top_selling_carousel" className="position-relative">
        <Swiper
          {...swiperOptions}
          className="swiper-container js-swiper-slider"
        >
          {products26.map((elm, i) => (
            <SwiperSlide
              key={i}
              className="swiper-slide product-card product-card_style9 border rounded-3"
            >
              <div className="position-relative pb-3">
                <div className="pc__img-wrapper pc__img-wrapper_wide3">
                  <Link href={`/product1_simple/${elm.id}`}>
                    <Image
                      loading="lazy"
                      src={elm.imgSrc}
                      width="253"
                      height="198"
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
                  <Link href={`/product1_simple/${elm.id}`}>{elm.title}</Link>
                </h6>
                <div className="product-card__review d-sm-flex align-items-center">
                  <div className="reviews-group d-flex">
                    <Star stars={elm.stars} />
                  </div>
                  <span className="reviews-note text-lowercase text-secondary ms-sm-1">
                    {elm.reviews}
                  </span>
                </div>
                <div className="product-card__price d-flex">
                  <span className="money price fs-5">${elm.price}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* <!-- /.swiper-wrapper --> */}
        </Swiper>
        {/* <!-- /.swiper-container js-swiper-slider --> */}

        <div className="slideshow-pagination mt-4 d-flex align-items-center justify-content-center"></div>
        {/* <!-- /.products-pagination --> */}
      </div>
      {/* <!-- /.position-relative --> */}
    </section>
  );
}
