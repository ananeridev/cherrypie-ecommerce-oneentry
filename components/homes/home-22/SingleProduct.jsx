"use client";
import Star from "@/components/common/Star";
import { useState } from "react";
import { Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/thumbs";
import Image from "next/image";
import Size from "@/components/singleProduct/Size";
import Colors from "@/components/singleProduct/Colors";
const productImages = [
  {
    imageSrc: "/assets/images/home/demo23/product-1.png",
    thumb: "/assets/images/home/demo23/product-1-thumb.jpg",
  },
  {
    imageSrc: "/assets/images/home/demo23/product-2.png",
    thumb: "/assets/images/home/demo23/product-2-thumb.jpg",
  },
  {
    imageSrc: "/assets/images/home/demo23/product-1.png",
    thumb: "/assets/images/home/demo23/product-3-thumb.jpg",
  },
  {
    imageSrc: "/assets/images/home/demo23/product-2.png",
    thumb: "/assets/images/home/demo23/product-4-thumb.jpg",
  },
  // Add more images as needed
];

export default function SingleProduct() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [value, setValue] = useState(1);

  return (
    <section className="product-single full-screen py-4 py-xl-5">
      <div className="container">
        <div className="row my-3 my-xl-5">
          <div className="col-lg-7 px-xl-5">
            <div
              className="product-single__media align-items-center"
              style={{ display: "flex", flexDirection: "column" }}
              data-media-type="horizontal-thumbnail"
            >
              <div className="product-single__image" style={{ width: "100%" }}>
                <Swiper
                  modules={[Thumbs]}
                  slidesPerView={1}
                  thumbs={{ swiper: thumbsSwiper }}
                  className="swiper-container"
                  style={{ maxWidth: "100%", overflow: "hidden" }}
                >
                  {productImages.map((elm, i) => (
                    <SwiperSlide
                      key={i}
                      className="swiper-slide product-single__image-item"
                    >
                      <Image
                        loading="lazy"
                        className="h-auto"
                        src={elm.imageSrc}
                        width="700"
                        height="700"
                        alt="image"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="product-single__thumbnail flex-auto">
                <Swiper
                  modules={[Thumbs]}
                  watchSlidesProgress
                  onSwiper={setThumbsSwiper}
                  slidesPerView={4}
                  className="swiper-container"
                  style={{ maxWidth: "100vw", overflow: "hidden" }}
                >
                  {productImages.map((elm, i) => (
                    <SwiperSlide
                      key={i}
                      className="swiper-slide product-single__image-item w-auto"
                    >
                      <Image
                        loading="lazy"
                        className="h-auto"
                        src={elm.thumb}
                        width="76"
                        height="76"
                        alt="image"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
          <div className="col-lg-5 px-xl-5">
            <h2 className="product-single__name">Beats Studio3 Wireless</h2>
            <div className="product-single__rating">
              <div className="reviews-group d-flex">
                <Star stars={5} />
              </div>
              <span className="reviews-note text-lowercase text-secondary ms-1">
                1 Review
              </span>
            </div>
            <div className="product-single__price">
              <span className="current-price fw-semi-bold">$249</span>
            </div>
            <div className="product-single__short-desc">
              <p>
                Phasellus sed volutpat orci. Fusce eget lore mauris vehicula
                elementum gravida nec dui. Aenean aliquam varius ipsum, non
                ultricies tellus sodales eu. Donec dignissim viverra nunc, ut
                aliquet magna posuere eget.
              </p>
            </div>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="product-single__swatches">
                <div className="product-swatch text-swatches">
                  <label className="fw-semi-bold">Sizes</label>
                  <div className="swatch-list">
                    <Size />
                  </div>
                </div>
                <div className="product-swatch color-swatches">
                  <label className="fw-semi-bold">Color</label>
                  <div className="swatch-list">
                    <Colors />
                  </div>
                </div>
              </div>
              <div className="product-single__addtocart gap-3">
                <label className="fw-semi-bold">QTY</label>
                <div className="qty-control position-relative ms-5">
                  <input
                    type="number"
                    name="quantity"
                    value={value}
                    readOnly
                    min="1"
                    onChange={(e) => setValue(e.target.value)}
                    className="qty-control__number text-center"
                  />
                  <div
                    onClick={() => setValue((pre) => (pre > 1 ? pre - 1 : pre))}
                    className="qty-control__reduce"
                  >
                    -
                  </div>
                  <div
                    onClick={() => setValue((pre) => pre + 1)}
                    className="qty-control__increase"
                  >
                    +
                  </div>
                </div>
                {/* <!-- .qty-control --> */}
              </div>
              <div className="btn-container d-flex align-items-center gap-3">
                <button
                  type="submit"
                  className="btn btn-primary btn-55 btn-addtocart js-open-aside text-uppercase border-0 fs-base fw-semi-bold flex-1"
                >
                  Add To Cart
                </button>
                <button
                  type="submit"
                  className="btn btn-primary btn-55 btn-addtocart js-open-aside text-uppercase theme-bg-color border-0 fs-base fw-semi-bold flex-1"
                >
                  Buy it Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
