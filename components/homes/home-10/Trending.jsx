"use client";
import { useContextElement } from "@/context/Context";
import { products18 } from "@/data/products/fashion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Autoplay, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const filterCategories = ["All", "Sportwear", "Running"];
import Image from "next/image";
export default function Trending() {
  const { setQuickViewItem } = useContextElement();
  const { toggleWishlist, isAddedtoWishlist } = useContextElement();
  const { addProductToCart, isAddedToCartProducts } = useContextElement();
  const [currentCategory, setCurrentCategory] = useState(filterCategories[0]);
  const [filtered, setFiltered] = useState(products18);
  useEffect(() => {
    if (currentCategory == "All") {
      setFiltered(products18);
    } else {
      setFiltered([
        ...products18.filter((elm) => elm.filterCategory == currentCategory),
      ]);
    }
  }, [currentCategory]);
  const swiperOptions = {
    autoplay: {
      delay: 5000,
    },
    slidesPerView: 4,
    slidesPerGroup: 4,
    effect: "none",
    loop: false,
    modules: [Autoplay, Scrollbar],
    scrollbar: {
      el: "#product_1 .products-carousel__scrollbar",
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
    <section className="products-carousel container">
      <div className="d-flex align-items-center justify-content-center justify-content-md-between flex-wrap mb-3 pb-xl-2 mb-xl-4">
        <h2 className="section-title fw-normal text-center">Trending Now</h2>

        <ul
          className="nav nav-tabs justify-content-center"
          id="collections-tab"
          role="tablist"
        >
          {filterCategories.map((elm, i) => (
            <li
              onClick={() => setCurrentCategory(elm)}
              key={i}
              className="nav-item"
              role="presentation"
            >
              <a
                className={`nav-link nav-link_underscore ${
                  currentCategory == elm ? "active" : ""
                }`}
              >
                {elm}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="tab-content pt-2" id="collections-tab-content">
        <div
          className="tab-pane fade show active"
          id="collections-tab-1"
          role="tabpanel"
          aria-labelledby="collections-tab-1-trigger"
        >
          <div id="product_1" className="position-relative">
            <Swiper
              className="swiper-container js-swiper-slider"
              {...swiperOptions}
            >
              {filtered.slice(0, 12).map((elm, i) => (
                <SwiperSlide
                  key={i}
                  className="swiper-slide product-card product-card_style3"
                >
                  <div className="pc__img-wrapper border-radius-0">
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
                  </div>

                  <div className="pc__info position-relative">
                    <p className="pc__category text-uppercase">
                      {elm.category}
                    </p>
                    <h6 className="pc__title mb-2">
                      <Link href={`/product1_simple/${elm.id}`}>
                        {elm.title}
                      </Link>
                    </h6>
                    <div className="product-card__price d-flex align-items-center">
                      <span className="money price">${elm.price}</span>
                    </div>

                    <div className="anim_appear-bottom position-absolute bottom-0 start-0 d-none d-sm-flex align-items-center bg-body mb-1">
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
                    </div>

                    <button
                      className={`pc__btn-wl position-absolute top-0 end-0 bg-transparent border-0 js-add-wishlist ${
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
                </SwiperSlide>
              ))}
            </Swiper>
            {/* <!-- /.swiper-container js-swiper-slider --> */}

            <div className="pb-2 mb-4"></div>

            {/* <!-- scrollbar --> */}
            <div className="products-carousel__scrollbar swiper-scrollbar"></div>
          </div>
          {/* <!-- /.position-relative --> */}
        </div>
      </div>
    </section>
  );
}
