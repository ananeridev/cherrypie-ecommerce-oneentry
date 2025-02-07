"use client";
import { useContextElement } from "@/context/Context";
import { products11 } from "@/data/products/fashion";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import CountDownComponent from "@/components/common/CountDownComponent";

export default function WeekDeals() {
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
      el: ".hot-deals .products-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 14,
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 3,
        spaceBetween: 24,
      },
      992: {
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 4,
        slidesPerGroup: 1,
        spaceBetween: 30,
      },
    },
  };
  return (
    <section className="hot-deals position-relative">
      <div className="bg-image">
        <Image
          loading="lazy"
          src="/assets/images/home/demo5/deal_bg.jpg"
          width="1903"
          height="699"
          alt="image"
        />
      </div>
      <div className="container position-relative">
        <div className="mb-4 mb-xl-5 pt-1 pb-5"></div>

        <h2 className="section-title fw-normal text-center mb-3 pb-xl-3 mb-xl-3 text-white">
          Deal Of The Week
        </h2>

        <div className="row">
          <div className="col-md-6 col-lg-4 col-xl-20per d-flex align-items-center flex-column justify-content-center py-4 align-items-md-start">
            <h2 className="text-white">Summer Sale</h2>
            <h2 className="fw-bold text-white">Up to 60% Off</h2>

            <div className="position-relative d-flex align-items-center text-center text-white pt-xxl-4 js-countdown mb-3">
              <CountDownComponent
                labelParentclassName={"countdown-word text-uppercase"}
              />
            </div>

            <Link
              href="/shop-1"
              className="btn-link default-underline text-uppercase text-white fw-medium mt-3"
            >
              View All
            </Link>
          </div>
          <div className="col-md-6 col-lg-8 col-xl-80per">
            <div className="position-relative">
              <Swiper
                className="swiper-container js-swiper-slider"
                {...swiperOptions}
              >
                {products11.map((elm, i) => (
                  <SwiperSlide key={i} className="swiper-slide product-card">
                    <div className="pc__img-wrapper">
                      <Link href={`/product1_simple/${elm.id}`}>
                        <Image
                          loading="lazy"
                          src={elm.imgSrc}
                          width="258"
                          height="313"
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

                    <div className="pc__info position-relative text-white">
                      <h6 className="pc__title text-white">
                        <Link
                          href={`/product1_simple/${elm.id}`}
                          className="text-white"
                        >
                          {elm.title}
                        </Link>
                      </h6>
                      <div className="product-card__price d-flex">
                        <span className="money price">${elm.price}</span>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}

                {/* <!-- /.swiper-wrapper --> */}
              </Swiper>
              {/* <!-- /.swiper-container js-swiper-slider --> */}

              <div className="products-pagination type2 active-white mt-4 d-flex align-items-center justify-content-center"></div>
            </div>
            {/* <!-- /.position-relative --> */}
          </div>
        </div>
        <div className="pt-5 pb-5"></div>
      </div>
    </section>
  );
}
