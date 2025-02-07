"use client";
import BreadCumb from "../BreadCumb";
import Style2 from "./Style2";
import Style3 from "./Style3";
import Style4 from "./Style4";
import Style5 from "./Style5";
import Style6 from "./Style6";
import Style7 from "./Style7";
import Style8 from "./Style8";
import Style9 from "./Style9";
import Style10 from "./Style10";
import { products51 } from "@/data/products/fashion";
import { useState } from "react";

import { Navigation } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import Link from "next/link";
import Star from "@/components/common/Star";
import { useContextElement } from "@/context/Context";
import ColorSelection from "@/components/common/ColorSelection";
const itemPerRow = [2, 3, 4];
import Image from "next/image";
import { openModalShopFilter } from "@/utlis/aside";
import { sortingOptions } from "@/data/products/productCategories";
export default function Shop10() {
  const { toggleWishlist, isAddedtoWishlist } = useContextElement();
  const { setQuickViewItem } = useContextElement();
  const { addProductToCart, isAddedToCartProducts } = useContextElement();
  const [selectedColView, setSelectedColView] = useState(4);
  return (
    <section className="shop-main container">
      <div className="d-flex justify-content-between mb-4 pb-md-2">
        <div className="breadcrumb mb-0 d-none d-md-block flex-grow-1">
          <BreadCumb />
        </div>
        {/* <!-- /.breadcrumb --> */}

        <div className="shop-acs d-flex align-items-center justify-content-between justify-content-md-end flex-grow-1">
          <select
            className="shop-acs__select form-select w-auto border-0 py-0 order-1 order-md-0"
            aria-label="Sort Items"
            name="total-number"
          >
            {sortingOptions.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          <div className="shop-asc__seprator mx-3 bg-light d-none d-md-block order-md-0"></div>

          <div className="col-size align-items-center order-1 d-none d-lg-flex">
            <span className="text-uppercase fw-medium me-2">View</span>
            {itemPerRow.map((elm, i) => (
              <button
                key={i}
                onClick={() => setSelectedColView(elm)}
                className={`btn-link fw-medium me-2 js-cols-size ${
                  selectedColView == elm ? "btn-link_active" : ""
                } `}
              >
                {elm}
              </button>
            ))}
          </div>
          {/* <!-- /.col-size --> */}

          <div className="shop-asc__seprator mx-3 bg-light d-none d-lg-block order-md-1"></div>

          <div className="shop-filter d-flex align-items-center order-0 order-md-3">
            <button
              className="btn-link btn-link_f d-flex align-items-center ps-0 js-open-aside"
              onClick={openModalShopFilter}
            >
              <svg
                className="d-inline-block align-middle me-2"
                width="14"
                height="10"
                viewBox="0 0 14 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <use href="#icon_filter" />
              </svg>
              <span className="text-uppercase fw-medium d-inline-block align-middle">
                Filter
              </span>
            </button>
          </div>
          {/* <!-- /.col-size d-flex align-items-center ms-auto ms-md-3 --> */}
        </div>
        {/* <!-- /.shop-acs --> */}
      </div>
      {/* <!-- /.d-flex justify-content-between --> */}

      <div className="products-grid">
        <h2 className="section-title fw-normal mb-3 pb-2">List Style v1</h2>
        <div
          className={`row row-cols-2 row-cols-lg-3 row-cols-xl-${selectedColView}`}
          id="products-grid-1"
        >
          {products51.slice(0, 4).map((elm, i) => (
            <div key={i} className="product-card-wrapper">
              <div className="product-card mb-3 mb-md-4 mb-xxl-5">
                <div className="pc__img-wrapper">
                  <Swiper
                    className="swiper-container background-img js-swiper-slider"
                    slidesPerView={1}
                    modules={[Navigation]}
                    navigation={{
                      prevEl: ".prev" + i,
                      nextEl: ".next" + i,
                    }}
                  >
                    {[elm.imgSrc, elm.imgSrc2].map((elm2, i) => (
                      <SwiperSlide key={i} className="swiper-slide">
                        <Link href={`/product1_simple/${elm.id}`}>
                          <Image
                            loading="lazy"
                            src={elm2}
                            width="330"
                            height="400"
                            alt="Cropped Faux leather Jacket"
                            className="pc__img"
                          />
                        </Link>
                      </SwiperSlide>
                    ))}

                    <span
                      className={`cursor-pointer pc__img-prev ${"prev" + i} `}
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
                      className={`cursor-pointer pc__img-next ${"next" + i} `}
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
                    {isAddedToCartProducts(elm.id)
                      ? "Already Added"
                      : "Add To Cart"}
                  </button>
                </div>

                <div className="pc__info position-relative">
                  <p className="pc__category">{elm.category}</p>
                  <h6 className="pc__title">
                    <Link href={`/product1_simple/${elm.id}`}>{elm.title}</Link>
                  </h6>
                  <div className="product-card__price d-flex">
                    {elm.priceOld ? (
                      <>
                        {" "}
                        <span className="money price price-old">
                          ${elm.priceOld}
                        </span>
                        <span className="money price price-sale">
                          ${elm.price}
                        </span>
                      </>
                    ) : (
                      <span className="money price">${elm.price}</span>
                    )}
                  </div>
                  {elm.colors && (
                    <div className="d-flex align-items-center mt-1">
                      {" "}
                      <ColorSelection />{" "}
                    </div>
                  )}
                  {elm.reviews && (
                    <div className="product-card__review d-flex align-items-center">
                      <div className="reviews-group d-flex">
                        <Star stars={elm.rating} />
                      </div>
                      <span className="reviews-note text-lowercase text-secondary ms-1">
                        {elm.reviews}
                      </span>
                    </div>
                  )}

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
                {elm.discont && (
                  <div className="pc-labels position-absolute top-0 start-0 w-100 d-flex justify-content-between">
                    <div className="pc-labels__right ms-auto">
                      <span className="pc-label pc-label_sale d-block text-white">
                        -{elm.discont}%
                      </span>
                    </div>
                  </div>
                )}
                {elm.isNew && (
                  <div className="pc-labels position-absolute top-0 start-0 w-100 d-flex justify-content-between">
                    <div className="pc-labels__left">
                      <span className="pc-label pc-label_new d-block bg-white">
                        NEW
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mb-4 mb-xl-5"></div>

        <h2 className="section-title fw-normal mb-3 pb-2">List Style v2</h2>
        <Style2 />

        <div className="mb-4 mb-xl-5"></div>

        <h2 className="section-title fw-normal mb-3 pb-2">List Style v3</h2>
        <Style3 />

        <div className="mb-4 mb-xl-5"></div>

        <h2 className="section-title fw-normal mb-3 pb-2">List Style v4</h2>
        <Style4 />

        <div className="mb-4 mb-xl-5"></div>

        <h2 className="section-title fw-normal mb-3 pb-2">List Style v5</h2>
        <Style5 />

        <div className="mb-4 mb-xl-5"></div>

        <h2 className="section-title fw-normal mb-3 pb-2">List Style v6</h2>
        <Style6 />

        <div className="mb-4 mb-xl-5"></div>

        <h2 className="section-title fw-normal mb-3 pb-2">List Style v7</h2>
        <Style7 />

        <div className="mb-4 mb-xl-5"></div>

        <h2 className="section-title fw-normal mb-3 pb-2">List Style v8</h2>
        <Style8 />

        <div className="mb-4 mb-xl-5"></div>

        <h2 className="section-title fw-normal mb-3 pb-2">List Style v9</h2>
        <Style9 />

        <h2 className="section-title fw-normal mb-3 pb-2">List Style v10</h2>
        <Style10 />
      </div>
    </section>
  );
}
