"use client";
import Image from "next/image";
import { useContextElement } from "@/context/Context";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { allProducts } from "@/data/products";

export default function AccountWishlist() {
  const { wishList, toggleWishlist } = useContextElement();
  const [wishlistProducts, setWishlistProducts] = useState(
    allProducts.filter((elm) => wishList.includes(elm.id))
  );
  useEffect(() => {
    setWishlistProducts(allProducts.filter((elm) => wishList.includes(elm.id)));
  }, [wishList]);

  return (
    <div className="col-lg-9">
      <div className="page-content my-account__wishlist">
        {wishList.length ? (
          <div
            className="products-grid row row-cols-2 row-cols-lg-3"
            id="products-grid"
          >
            {" "}
            {wishlistProducts.map((elm, i) => (
              <div className="product-card-wrapper" key={i}>
                <div className="product-card mb-3 mb-md-4 mb-xxl-5">
                  <div className="pc__img-wrapper">
                    <Swiper
                      resizeObserver
                      className="swiper-container background-img js-swiper-slider"
                      slidesPerView={1}
                      modules={[Navigation]}
                      navigation={{
                        prevEl: ".prev" + i,
                        nextEl: ".next" + i,
                      }}
                    >
                      {[elm.imgSrc, elm.imgSrc].map((elm2, i) => (
                        <SwiperSlide key={i} className="swiper-slide">
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
                      className="btn-remove-from-wishlist"
                      onClick={() => toggleWishlist(elm.id)}
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <use href="#icon_close" />
                      </svg>
                    </button>
                  </div>

                  <div className="pc__info position-relative">
                    <p className="pc__category">{elm.category}</p>
                    <h6 className="pc__title">{elm.title}</h6>
                    <div className="product-card__price d-flex">
                      <span className="money price">${elm.price}</span>
                    </div>

                    <button
                      className="pc__btn-wl position-absolute top-0 end-0 bg-transparent border-0 js-add-wishlist active"
                      title="Remove From Wishlist"
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
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="fs-18">No products added to wishlist yet</div>
        )}
        {/* <!-- /.products-grid row --> */}
      </div>
    </div>
  );
}
