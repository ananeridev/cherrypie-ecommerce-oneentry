"use client";
import { useContextElement } from "@/context/Context";
import { products10 } from "@/data/products/fashion";
import Link from "next/link";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

export default function BestSeller() {
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
    loop: false,
    modules: [Autoplay, Pagination],
    pagination: {
      el: "#best-sellers .products-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        slidesPerGroup: 1,
        spaceBetween: 14,
      },
      768: {
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween: 22,
      },
      992: {
        slidesPerView: 4,
        slidesPerGroup: 1,
        spaceBetween: 30,
      },
    },
  };
  return (
    <div className="bg-white">
      <div className="mb-4 mb-xl-5 pt-1 pb-5"></div>

      <section className="products-carousel container">
        <h2 className="section-title fw-normal text-center mb-3 pb-xl-3 mb-xl-3">
          Best Sellers
        </h2>

        <div id="best-sellers" className="position-relative">
          <Swiper
            {...swiperOptions}
            className="swiper-container js-swiper-slider"
          >
            {products10.map((elm, i) => (
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
                    className="pc__atc btn btn-lg anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium js-add-cart js-open-aside"
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
                  <div className="anim_appear-right position-absolute top-0 mt-2 me-2">
                    <button
                      className="btn btn-round-sm btn-hover-red d-block border-0 text-uppercase mb-2 js-quick-view"
                      data-bs-toggle="modal"
                      data-bs-target="#quickView"
                      onClick={() => setQuickViewItem(elm)}
                      title="Quick view"
                    >
                      <svg
                        className="d-inline-block"
                        width="14"
                        height="14"
                        viewBox="0 0 18 18"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <use href="#icon_view" />
                      </svg>
                    </button>
                    <button
                      className={`btn btn-round-sm btn-hover-red d-block border-0 text-uppercase js-add-wishlist ${
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
                  <div className="product-card__price d-flex">
                    {elm.priceOld && (
                      <>
                        <span className="money price price-old">
                          ${elm.priceOld}
                        </span>
                        <span className="money price price-sale">
                          ${elm.price}
                        </span>
                      </>
                    )}
                    {!elm.priceOld && (
                      <span className="money price">${elm.price}</span>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))}

            {/* <!-- /.swiper-wrapper --> */}
          </Swiper>
          {/* <!-- /.swiper-container js-swiper-slider --> */}

          <div className="products-pagination type2 mt-5 mb-5 d-flex align-items-center justify-content-center"></div>
          {/* <!-- /.products-pagination --> */}
        </div>
        {/* <!-- /.position-relative --> */}
      </section>

      <div className="pt-1 pb-5"></div>
    </div>
  );
}
