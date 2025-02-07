"use client";
import { useContextElement } from "@/context/Context";
import { products19 } from "@/data/products/fashion";
import Link from "next/link";
import React from "react";
import { Tooltip } from "react-tooltip";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

export default function Lookbook() {
  const { toggleWishlist, isAddedtoWishlist } = useContextElement();
  const { addProductToCart, isAddedToCartProducts } = useContextElement();

  const awiperOptions = {
    slidesPerView: 1,
    slidesPerGroup: 1,
    effect: "none",
    modules: [Pagination],
    loop: true,
    pagination: {
      el: ".lookbook-container .slideshow-pagination",
      type: "bullets",
      clickable: true,
    },
  };
  return (
    <section className="lookbook-container container">
      <h2 className="section-title fw-normal mb-3 pb-2 mb-xl-4">
        Featured Products
      </h2>

      <div className="row">
        <div className="col-lg-7">
          <div className="lookbook-products position-relative">
            <Image
              loading="lazy"
              className="h-auto"
              src="/assets/images/home/demo10/lookbook-bg.jpg"
              width="770"
              height="750"
              alt="image"
            />
            {products19.map(({ id, style, imgSrc, price, title }) => (
              <React.Fragment key={id}>
                <button
                  className="popover-point type3 position-absolute"
                  style={style}
                  data-tooltip-id={id.toString()}
                >
                  <span></span>
                </button>
                <Tooltip
                  place="right-start"
                  className="example"
                  render={({ content, activeAnchor }) => (
                    <div className="popover-product">
                      <Link href={`/product1_simple/${id}`}>
                        <Image
                          loading="lazy"
                          width={330}
                          height={400}
                          className="mb-3"
                          src={imgSrc}
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
                    {...awiperOptions}
                    className="swiper-container js-swiper-slider"
                  >
                    {products19.map((elm, i) => (
                      <SwiperSlide
                        key={i}
                        className="swiper-slide product-card"
                      >
                        <div className="pc__img-wrapper">
                          <Link href={`/product1_simple/${elm.id}`}>
                            <Image
                              loading="lazy"
                              src={elm.imgSrc}
                              width="320"
                              height="388"
                              alt="Cropped Faux leather Jacket"
                              className="pc__img"
                            />
                          </Link>
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
                          <p className="pc__category text-uppercase">
                            {elm.category}
                          </p>
                          <h6 className="pc__title mb-2">
                            <Link href={`/product1_simple/${elm.id}`}>
                              {elm.title}
                            </Link>
                          </h6>
                          <div className="product-card__price d-flex">
                            <span className="money price price-old">
                              ${elm.oldPrice}
                            </span>
                            <span className="money price price-sale">
                              ${elm.price}
                            </span>
                          </div>

                          <button
                            className={`pc__btn-wl position-absolute top-0 end-0 bg-transparent border-0 js-add-wishlist ${
                              isAddedtoWishlist(elm.id) ? "active" : ""
                            }`}
                            title="Add To Wishlist"
                            onClick={() => toggleWishlist(elm.id)}
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
    </section>
  );
}
