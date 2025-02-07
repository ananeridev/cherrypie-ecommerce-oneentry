"use client";
import { useContextElement } from "@/context/Context";
import { products5 } from "@/data/products/fashion";
import Link from "next/link";
import Image from "next/image";

export default function FeaturesProducts() {
  const { toggleWishlist, isAddedtoWishlist } = useContextElement();
  const { setQuickViewItem } = useContextElement();
  const { addProductToCart, isAddedToCartProducts } = useContextElement();
  return (
    <section className="products-grid container">
      <h2 className="section-title text-center mb-3 pb-xl-3 mb-xl-4">
        Featured Products
      </h2>

      <div className="row">
        {products5.map((elm, i) => (
          <div key={i} className="col-6 col-md-4 col-lg-3">
            <div className="product-card product-card_style3 mb-3 mb-md-4 mb-xxl-5">
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
                {elm.isNew && (
                  <div className="product-label text-uppercase bg-white top-0 left-0 mt-2 mx-2">
                    New
                  </div>
                )}
              </div>

              <div className="pc__info position-relative">
                <h6 className="pc__title">
                  <Link href={`/product1_simple/${elm.id}`}>{elm.title}</Link>
                </h6>
                <div className="product-card__price d-flex align-items-center">
                  {elm.oldPrice && (
                    <span className="money price-old">${elm.oldPrice}</span>
                  )}
                  <span className="money price text-secondary">
                    ${elm.price}
                  </span>
                </div>

                <div className="anim_appear-bottom position-absolute bottom-0 start-0 d-none d-sm-flex align-items-center bg-body">
                  <button
                    className="btn-link btn-link_lg me-4 text-uppercase fw-medium js-add-cart js-open-aside"
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
                    className="btn-link btn-link_lg me-4 text-uppercase fw-medium js-quick-view"
                    data-bs-toggle="modal"
                    data-bs-target="#quickView"
                    onClick={() => setQuickViewItem(elm)}
                    title="Quick view"
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
                    className={`pc__btn-wl bg-transparent border-0 js-add-wishlist ${
                      isAddedtoWishlist(elm.id) ? "active" : ""
                    }`}
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
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <!-- /.row --> */}

      <div className="text-center mt-2">
        <a
          className="btn-link btn-link_lg default-underline text-uppercase fw-medium"
          href="#"
        >
          Load More
        </a>
      </div>
    </section>
  );
}
