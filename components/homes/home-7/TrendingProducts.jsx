"use client";
import ColorSelection from "@/components/common/ColorSelection";
import { useContextElement } from "@/context/Context";
import { products13 } from "@/data/products/fashion";
import Image from "next/image";
import Link from "next/link";

export default function TrendingProducts() {
  const { toggleWishlist, isAddedtoWishlist } = useContextElement();
  const { setQuickViewItem } = useContextElement();
  const { addProductToCart, isAddedToCartProducts } = useContextElement();
  return (
    <section className="products-grid container">
      <h2 className="section-title text-uppercase text-center mb-1 mb-md-3 pb-xl-2 mb-xl-4">
        Trending <strong>Products</strong>
      </h2>

      <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4">
        {products13.map((elm, i) => (
          <div key={i} className="product-card-wrapper overflow-hidden">
            <div className="product-card product-card_style6 hover-container mb-3 mb-md-4">
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
                    src={elm.img2Src}
                    width="330"
                    height="400"
                    alt="Cropped Faux leather Jacket"
                    className="pc__img pc__img-second"
                  />
                </Link>
              </div>

              <div className="pc__info position-relative bg-body">
                <div className="position-relative">
                  <p className="pc__category">{elm.category}</p>
                  <h6 className="pc__title">
                    <Link href={`/product1_simple/${elm.id}`}>{elm.title}</Link>
                  </h6>
                  <div className="product-card__price d-flex">
                    {elm.priceOld ? (
                      <>
                        <span className="money price price-old">
                          ${elm.priceOld}
                        </span>
                        <span className="money price price-sale">
                          ${elm.price}
                        </span>
                      </>
                    ) : (
                      <span className="money price">${elm.price}</span>
                    )}
                  </div>

                  <div className="hover__content d-flex align-items-center top-0 end-0 bg-body w-auto">
                    <ColorSelection />
                  </div>

                  <div className="d-flex align-items-center hover__content position-relative mt-3 mt-sm-0">
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
                      className="btn-link btn-link_lg me-auto text-uppercase fw-medium js-quick-view"
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
    </section>
  );
}
