"use client";
const filterCategories4 = ["Featured", "Best Seller", "Sales"];
import { useContextElement } from "@/context/Context";
import { products16 } from "@/data/products/fashion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

export default function BestSelling() {
  const { toggleWishlist, isAddedtoWishlist } = useContextElement();
  const { addProductToCart, isAddedToCartProducts } = useContextElement();
  const [currentCategory, setCurrentCategory] = useState(filterCategories4[0]);
  const [filtered, setFiltered] = useState(products16);
  useEffect(() => {
    if (currentCategory == "All") {
      setFiltered(products16);
    } else {
      setFiltered([
        ...products16.filter((elm) => elm.filterCategory == currentCategory),
      ]);
    }
  }, [currentCategory]);

  return (
    <section className="products-carousel container">
      <h2 className="section-title text-center fw-normal text-uppercase mb-1 mb-md-3 pb-xl-3">
        Best Selling Products
      </h2>

      <ul
        className="nav nav-tabs mb-3 pb-3 mb-xl-4 text-uppercase justify-content-center"
        id="collections-tab"
        role="tablist"
      >
        {filterCategories4.map((elm, i) => (
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

      <div className="tab-content pt-2" id="collections-tab-content">
        <div
          className="tab-pane fade show active"
          id="collections-tab-1"
          role="tabpanel"
          aria-labelledby="collections-tab-1-trigger"
        >
          <div className="row">
            {filtered.map((elm, i) => (
              <div key={i} className="col-6 col-md-4 col-lg-3">
                <div className="product-card mb-3 mb-md-4 mb-xxl-5">
                  <div className="pc__img-wrapper">
                    <Swiper
                      modules={[Navigation]}
                      navigation={{
                        prevEl: `${`.pc__img-prev-${i}`} `,
                        nextEl: `${`.pc__img-next-${i}`} `,
                      }}
                      className="swiper-container background-img js-swiper-slider"
                    >
                      {[1, 2, 3].map((elm2, i2) => (
                        <SwiperSlide key={i2} className="swiper-slide">
                          <Link href={`/product1_simple/${elm.id}`}>
                            <Image
                              loading="lazy"
                              src={elm.imgSrc}
                              width="330"
                              height="400"
                              alt="Colorful Jacket"
                              className="pc__img"
                            />
                          </Link>
                        </SwiperSlide>
                      ))}

                      <span
                        className={`cursor-pointer pc__img-prev ${`pc__img-prev-${i}`} `}
                      >
                        <svg
                          width="7"
                          height="11"
                          viewBox="0 0 7 11"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <use href="#icon_prev_sm" />
                        </svg>
                      </span>
                      <span
                        className={`cursor-pointer pc__img-next ${`pc__img-next-${i}`} `}
                      >
                        <svg
                          width="7"
                          height="11"
                          viewBox="0 0 7 11"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <use href="#icon_next_sm" />
                        </svg>
                      </span>
                    </Swiper>
                    <button
                      className="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium js-add-cart js-open-aside"
                      onClick={() => addProductToCart(elm.id)}
                      title={
                        isAddedToCartProducts(elm.id)
                          ? "Already Added"
                          : "Add to Cart"
                      }
                    >
                      <svg
                        className="d-inline-blockk align-middle mx-2"
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
                      <span className="d-inline-block align-middle">
                        {isAddedToCartProducts(elm.id)
                          ? "Already Added"
                          : "Add To Cart"}
                      </span>
                    </button>
                  </div>

                  <div className="pc__info position-relative">
                    <p className="pc__category">{elm.category}</p>
                    <h6 className="pc__title mb-2">
                      <Link href={`/product1_simple/${elm.id}`}>
                        {elm.title}
                      </Link>
                    </h6>
                    <div className="product-card__price d-flex">
                      <span className="money price">${elm.price}</span>
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
                </div>
              </div>
            ))}
          </div>
          {/* <!-- /.row --> */}
          <div className="text-center mt-2">
            <Link
              className="btn-link btn-link_lg default-underline text-uppercase fw-medium"
              href="/shop-1"
            >
              See All Products
            </Link>
          </div>
        </div>
      </div>
      {/* <!-- /.tab-content pt-2 --> */}
    </section>
  );
}
