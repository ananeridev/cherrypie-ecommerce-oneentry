"use client";
import { useContextElement } from "@/context/Context";
import { products41 } from "@/data/products/watches";
import Link from "next/link";
import Image from "next/image";

export default function Populer() {
  const { toggleWishlist, isAddedtoWishlist } = useContextElement();
  const { setQuickViewItem } = useContextElement();
  const { addProductToCart, isAddedToCartProducts } = useContextElement();
  return (
    <section className="products-grid container">
      <h2 className="section-title text-uppercase fs-30 fw-semi-bold text-center mb-2">
        MOST POPULAR PRODUCTS
      </h2>
      <p className="fs-13 mb-3 pb-2 pb-xl-3 text-secondary text-center">
        The World's Premium Brands In One Destination.
      </p>

      <div className="row">
        {products41.map((elm, i) => (
          <div key={i} className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="product-card-wrapper">
              <div className="product-card product-card_style6 hover-container mb-3">
                <div className="pc__img-wrapper">
                  <Link href={`/product1_simple/${elm.id}`}>
                    <Image
                      loading="lazy"
                      src={elm.imgSrc}
                      width="330"
                      height="400"
                      alt="image"
                      className="pc__img"
                    />
                  </Link>
                </div>

                <div className="pc__info position-relative bg-body">
                  <div className="position-relative">
                    <p className="pc__category fs-13">{elm.category}</p>
                    <h6 className="pc__title fs-base fw-semi-bold mb-1">
                      <Link href={`/product1_simple/${elm.id}`}>
                        {elm.title}
                      </Link>
                    </h6>
                    <div className="product-card__price d-flex mb-1">
                      <span className="money price fs-base fw-semi-bold">
                        ${elm.price}
                      </span>
                    </div>

                    <div className="d-flex align-items-center hover__content position-relative mt-3 mt-sm-0">
                      <button
                        className="btn-link btn-link_lg me-auto me-xxl-4 text-uppercase js-add-cart js-open-aside fs-13 fw-semi-bold"
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
                        className="btn-link btn-link_lg me-3 me-xxl-auto text-uppercase js-quick-view fs-13 fw-semi-bold"
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
                        } pt-1`}
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
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
