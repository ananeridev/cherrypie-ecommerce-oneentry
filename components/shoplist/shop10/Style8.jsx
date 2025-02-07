import Star from "@/components/common/Star";
import { products58 } from "@/data/products/fashion";
import React from "react";
import Link from "next/link";
import { useContextElement } from "@/context/Context";
import Image from "next/image";

export default function Style8() {
  const { toggleWishlist, isAddedtoWishlist } = useContextElement();
  const { setQuickViewItem } = useContextElement();
  const { addProductToCart, isAddedToCartProducts } = useContextElement();
  return (
    <div
      className="row row-cols-2 row-cols-md-3 row-cols-lg-4"
      id="products-grid-8"
    >
      {products58.map((elm, i) => (
        <div key={i} className="product-card-wrapper">
          <div className="product-card product-card_style8 mb-3 mb-md-4 mb-xxl-5">
            <div className="pc__img-wrapper pc__img-wrapper_wide2">
              <Link href={`/product1_simple/${elm.id}`}>
                <Image
                  loading="lazy"
                  src={elm.imgSrc}
                  width="328"
                  height="298"
                  alt="Toshiba TF-43A810U21 43-inch 4K UHD TV - Fire TV Edition"
                  className="pc__img"
                />
              </Link>
            </div>

            <div className="pc__info position-relative">
              <p className="pc__category">{elm.category}</p>
              <h6 className="pc__title">
                <Link href={`/product1_simple/${elm.id}`}>{elm.title}</Link>
              </h6>
              <div className="product-card__review d-sm-flex align-items-center">
                <div className="reviews-group d-flex">
                  <Star stars={elm.rating} />
                </div>
                <span className="reviews-note text-lowercase text-secondary ms-sm-1">
                  {elm.reviews}
                </span>
              </div>
              <div className="product-card__price d-flex">
                <span className="money price fs-5">${elm.price}</span>
              </div>

              <div className="anim_appear-bottom position-absolute bottom-0 start-0 end-0 d-none d-sm-flex align-items-center bg-body">
                <button
                  className="btn-link btn-link_lg me-auto me-xxl-4 text-uppercase fw-medium js-add-cart js-open-aside"
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
                  className="btn-link btn-link_lg text-uppercase fw-medium js-quick-view"
                  data-bs-toggle="modal"
                  data-bs-target="#quickView"
                  title="Quick view"
                  onClick={() => setQuickViewItem(elm)}
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
                <button
                  className={`pc__btn-wl bg-transparent border-0 ms-3 ms-xxl-auto js-add-wishlist ${
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
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
