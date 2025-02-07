"use client";

import { products51 } from "@/data/products/fashion";
import React from "react";
import Link from "next/link";
import { useContextElement } from "@/context/Context";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

export default function Style5() {
  const { toggleWishlist, isAddedtoWishlist } = useContextElement();
  const { setQuickViewItem } = useContextElement();
  const { addProductToCart, isAddedToCartProducts } = useContextElement();
  return (
    <div
      className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5"
      id="products-grid-5"
    >
      {products51.slice(0, 5).map((elm, i) => (
        <div key={i} className="product-card-wrapper">
          <div className="product-card mb-3 mb-md-4 mb-xxl-5">
            <div className="pc__img-wrapper">
              <Swiper
                slidesPerView={1}
                className="swiper-container background-img js-swiper-slider"
                modules={[Navigation]}
                id={`style-5${elm.id.toString()}`}
                navigation={{
                  prevEl: `#style-5${elm.id.toString()} .pc__img-prev`,
                  nextEl: `#style-5${elm.id.toString()} .pc__img-next`,
                }}
              >
                <SwiperSlide className="swiper-slide">
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
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <Link href={`/product1_simple/${elm.id}`}>
                    <Image
                      loading="lazy"
                      src={elm.imgSrc2}
                      width="330"
                      height="400"
                      alt="Cropped Faux leather Jacket"
                      className="pc__img"
                    />
                  </Link>
                </SwiperSlide>

                <span className="cursor-pointer pc__img-prev">
                  <svg
                    width="7"
                    height="11"
                    viewBox="0 0 7 11"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <use href="#icon_prev_sm" />
                  </svg>
                </span>
                <span className="cursor-pointer pc__img-next">
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
                  title="Quick view"
                  onClick={() => setQuickViewItem(elm)}
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
                  title="Add To Wishlist"
                  onClick={() => toggleWishlist(elm.id)}
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
                <span className="money price">${elm.price}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
