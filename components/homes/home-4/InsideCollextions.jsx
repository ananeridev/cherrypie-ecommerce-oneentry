"use client";
import { useContextElement } from "@/context/Context";
import { products7 } from "@/data/products/fashion";
import Link from "next/link";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import ColorSelection from "@/components/common/ColorSelection";

export default function InsideCollextions() {
  const { toggleWishlist, isAddedtoWishlist } = useContextElement();
  const { setQuickViewItem } = useContextElement();
  const { addProductToCart, isAddedToCartProducts } = useContextElement();
  const swiperOptions = {
    modules: [Autoplay],
    autoplay: {
      delay: 5000,
    },
    slidesPerView: 4,
    slidesPerGroup: 4,
    effect: "none",
    loop: false,
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
      <h2 className="section-title text-center fw-normal mb-1 mb-md-3 pb-xl-3 mb-xl-4">
        The Inside Collection
      </h2>

      <div className="position-relative">
        <Swiper
          className="swiper-container js-swiper-slider"
          {...swiperOptions}
        >
          {products7.map((elm, i) => (
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
                  <Image
                    loading="lazy"
                    src={elm.imgSrc2}
                    width="330"
                    height="400"
                    alt="Cropped Faux leather Jacket"
                    className="pc__img pc__img-second"
                  />
                </Link>
                {elm.isNew && (
                  <div className="product-label text-uppercase bg-white top-0 left-0 mt-2 mx-2">
                    New
                  </div>
                )}
                {elm.discount && (
                  <div className="product-label bg-red text-white right-0 top-0 left-auto mt-2 mx-2">
                    {elm.discount}%
                  </div>
                )}
                {elm.isSale && (
                  <div className="product-label text-uppercase bg-black text-white top-0 left-0 mt-2 mx-2">
                    Sale
                  </div>
                )}
                <div className="anim_appear-bottom position-absolute w-100 text-center mb-3">
                  <button
                    className="btn btn-round btn-hover-red border-0 text-uppercase me-1 me-md-2 js-add-cart js-open-aside"
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
                    className="btn btn-round btn-hover-red border-0 text-uppercase me-1 me-md-2 js-quick-view"
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
                <div className="product-card__price d-flex">
                  {elm.oldPrice && (
                    <>
                      <span className="money price price-old">
                        ${elm.oldPrice}
                      </span>
                      <span className="money price price-sale">
                        ${elm.price}
                      </span>
                    </>
                  )}
                  {!elm.oldPrice && (
                    <span className="money price">${elm.price}</span>
                  )}
                </div>
                {elm.hasColorVariety && (
                  <div className="d-flex align-items-center mt-1">
                    <ColorSelection />
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}

          {/* <!-- /.swiper-wrapper --> */}
        </Swiper>
        {/* <!-- /.swiper-container js-swiper-slider --> */}
      </div>
      {/* <!-- /.position-relative --> */}
    </section>
  );
}
