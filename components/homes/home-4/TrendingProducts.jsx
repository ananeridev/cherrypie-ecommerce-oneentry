"use client";
const filterCategories2 = ["All", "Women", "Men", "Kids"];
import { useContextElement } from "@/context/Context";
import { products6 } from "@/data/products/fashion";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import ColorSelection from "@/components/common/ColorSelection";

export default function TrendingProducts() {
  const { toggleWishlist, isAddedtoWishlist } = useContextElement();
  const { setQuickViewItem } = useContextElement();
  const { addProductToCart, isAddedToCartProducts } = useContextElement();
  const [currentCategory, setCurrentCategory] = useState(filterCategories2[0]);
  const [filtered, setFiltered] = useState(products6);
  useEffect(() => {
    if (currentCategory == "All") {
      setFiltered(products6);
    } else {
      setFiltered([
        ...products6.filter((elm) => elm.filterCategory == currentCategory),
      ]);
    }
  }, [currentCategory]);
  return (
    <section className="products-carousel container">
      <h2 className="section-title text-center fw-normal mb-1 mb-md-3 pb-xl-3 mb-xl-4">
        Trending
      </h2>

      <ul
        className="nav nav-tabs mb-3 mb-xl-5 text-uppercase justify-content-center"
        id="collections-tab"
        role="tablist"
      >
        {filterCategories2.map((elm, i) => (
          <li
            onClick={() => setCurrentCategory(elm)}
            key={i}
            className="nav-item"
            role="presentation"
          >
            <a
              className={`nav-link nav-link_underscore ${
                currentCategory == elm ? "active" : ""
              }`}
            >
              {elm}
            </a>
          </li>
        ))}
      </ul>

      <div className="tab-content pt-2" id="collections-tab-content">
        <div
          className="tab-pane fade show active"
          id="collections-tab-1"
          role="tabpanel"
          aria-labelledby="collections-tab-1-trigger"
        >
          <div className="row">
            {filtered.map((elm, i) => (
              <div key={i} className="col-6 col-md-4 col-lg-3">
                <div className="product-card mb-3 mb-md-4 mb-xxl-5">
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
                    {elm.badge && (
                      <div className="product-label text-uppercase bg-white top-0 left-0 mt-2 mx-2">
                        {elm.badge}
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
                      <Link href={`/product1_simple/${elm.id}`}>
                        {elm.title}
                      </Link>
                    </h6>
                    <div className="product-card__price d-flex">
                      <span className="money price">${elm.price}</span>
                    </div>
                    {elm.hasColorVariety && (
                      <div className="d-flex align-items-center mt-1">
                        <ColorSelection />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* <!-- /.row --> */}
          <div className="text-center mt-2">
            <Link
              className="btn-link btn-link_lg default-underline text-uppercase fw-medium"
              href="/shop-1"
            >
              See All Products
            </Link>
          </div>
        </div>
        {/* <!-- /.tab-pane fade show--> */}
      </div>
      {/* <!-- /.tab-content pt-2 --> */}
    </section>
  );
}
