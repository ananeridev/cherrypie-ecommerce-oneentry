import Star from "@/components/common/Star";
import { products59 } from "@/data/products/fashion";
import React from "react";
import Link from "next/link";
import { useContextElement } from "@/context/Context";
import Image from "next/image";

export default function Style9() {
  const { toggleWishlist, isAddedtoWishlist } = useContextElement();
  const { setQuickViewItem } = useContextElement();
  const { addProductToCart, isAddedToCartProducts } = useContextElement();
  return (
    <div
      className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xxl-5"
      id="products-grid-9"
    >
      {products59.map((elm, i) => (
        <div key={i} className="product-card-wrapper">
          <div className="product-card product-card_style9 border rounded-3 mb-3 mb-md-4 mb-xxl-5">
            <div className="position-relative pb-3">
              <div className="pc__img-wrapper pc__img-wrapper_wide3">
                <Link href={`/product1_simple/${elm.id}`}>
                  <Image
                    loading="lazy"
                    src={elm.imgSrc}
                    width="256"
                    height="201"
                    alt="Cropped Faux leather Jacket"
                    className="pc__img"
                  />
                </Link>
              </div>
              <div className="anim_appear-bottom position-absolute w-100 text-center">
                <button
                  className="btn btn-round btn-hover-red border-0 text-uppercase me-2 js-add-cart js-open-aside"
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
                  className="btn btn-round btn-hover-red border-0 text-uppercase me-2 js-quick-view"
                  data-bs-toggle="modal"
                  data-bs-target="#quickView"
                  title="Quick view"
                  onClick={() => setQuickViewItem(elm)}
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
              <div className="product-card__review d-sm-flex align-items-center">
                <div className="reviews-group d-flex">
                  <Star stars={elm.stars} />
                </div>
                <span className="reviews-note text-lowercase text-secondary ms-sm-1">
                  {elm.reviewCount}
                </span>
              </div>
              <div className="product-card__price d-flex">
                <span className="money price fs-5">${elm.price}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
