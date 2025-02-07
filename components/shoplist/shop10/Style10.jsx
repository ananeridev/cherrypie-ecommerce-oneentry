import ColorSelection from "@/components/common/ColorSelection";
import { useContextElement } from "@/context/Context";
import { products28 } from "@/data/products/glasses";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Style10() {
  const { toggleWishlist, isAddedtoWishlist } = useContextElement();

  return (
    <div
      className="row row-cols-2 row-cols-md-3 row-cols-lg-4"
      id="products-grid-10"
    >
      {products28.slice(0, 4).map((elm, i) => (
        <div key={i} className="product-card-wrapper">
          <div className="product-card product-card_style10 mb-3 mb-md-4 mb-xxl-5">
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
                <button
                  className={`pc__btn-wl position-absolute rounded-circle border-0 text-secondary js-add-wishlist bg-transparent ${
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
                    <use href="#icon_heart"></use>
                  </svg>
                </button>
              </div>
            </div>

            <div className="pc__info position-relative d-flex flex-column align-items-center mb-3 mb-md-4 mb-xxl-5">
              <h6 className="pc__title text-uppercase fw-semi-bold">
                <Link href={`/product1_simple/${elm.id}`}>{elm.title}</Link>
              </h6>
              <div className="product-card__price d-flex text-secondary mb-2">
                <span className="money price">${elm.price}</span>
              </div>
              <div className="d-flex align-items-center">
                <ColorSelection />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
