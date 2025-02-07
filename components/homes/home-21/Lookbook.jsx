"use client";

import { useContextElement } from "@/context/Context";
import { products49 } from "@/data/products/tools";
import Link from "next/link";
import React from "react";
import { Tooltip } from "react-tooltip";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

export default function Lookbook() {
  const { toggleWishlist, isAddedtoWishlist } = useContextElement();
  const { addProductToCart, isAddedToCartProducts } = useContextElement();
  const swiperOptions = {
    slidesPerView: 1,
    slidesPerGroup: 1,
    effect: "none",
    loop: true,
    modules: [Pagination],
    pagination: {
      el: ".lookbook-container .slideshow-pagination",
      type: "bullets",
      clickable: true,
    },
  };
  return (
    <section className="lookbook-container container">
      <div className="d-flex align-items-center flex-wrap gap-4 mb-3 pb-xl-2 mb-xl-3">
        <h2 className="fw-semi-bold fs-24 mb-3 text-uppercase">
          Featured Products
        </h2>
      </div>

      <div className="position-relative px-3 px-xl-4 py-3 py-xl-4 bg-white border-1">
        <div className="row">
          <div className="col-lg-7">
            <div className="lookbook-products position-relative">
              <Image
                loading="lazy"
                className="h-auto"
                src="/assets/images/home/demo22/banner-2.jpg"
                width="770"
                height="750"
                alt="image"
              />
              {products49.map(({ id, style, imgSrc, price, title }) => (
                <React.Fragment key={id}>
                  <button
                    className="popover-point type3 position-absolute"
                    style={style}
                    data-tooltip-id={id.toString()}
                  >
                    <span></span>
                  </button>
                  <Tooltip
                    className="example"
                    render={({ content, activeAnchor }) => (
                      <div className="popover-product">
                        <Link href={`/product1_simple/${id}`}>
                          <Image
                            loading="lazy"
                            className="mb-3"
                            src={imgSrc}
                            width={330}
                            height={400}
                            alt="image"
                          />
                        </Link>
                        <p className="fw-medium mb-0">
                          <Link href={`/product1_simple/${id}`}>{title}</Link>
                        </p>
                        <p className="mb-0">${price}</p>
                      </div>
                    )}
                    openOnClick
                    id={id.toString()}
                  />
                </React.Fragment>
              ))}
            </div>
          </div>
          <div className="col-lg-5 py-4 py-xl-5 d-flex align-items-center">
            <div className="w-100">
              <div className="row">
                <div className="col-lg-2"></div>
                <div className="col-lg-7">
                  <div className="position-relative">
                    <Swiper
                      {...swiperOptions}
                      className="swiper-container js-swiper-slider"
                    >
                      {products49.map((elm, i) => (
                        <SwiperSlide
                          key={i}
                          className="swiper-slide product-card"
                        >
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
                              className="pc__atc btn fs-base anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium js-add-cart js-open-aside bg-black text-white left-0 w-100 bottom-0"
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
                            <h6 className="pc__title fs-15 fw-semi-bold mb-2">
                              <Link href={`/product1_simple/${elm.id}`}>
                                {elm.title}
                              </Link>
                            </h6>
                            <div className="product-card__price d-flex">
                              <span className="money price theme-color fs-15 fw-semi-bold">
                                ${elm.price}
                              </span>
                            </div>

                            <button
                              className={`pc__btn-wl position-absolute top-0 end-0 bg-transparent border-0 js-add-wishlist ${
                                isAddedtoWishlist(elm.id) ? "active" : ""
                              } mt-1`}
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

                      {/* <!-- /.swiper-wrapper --> */}
                    </Swiper>
                    {/* <!-- /.swiper-container js-swiper-slider --> */}

                    <div className="slideshow-pagination position-right-center position-right-2"></div>
                  </div>
                  {/* <!-- /.position-relative --> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
