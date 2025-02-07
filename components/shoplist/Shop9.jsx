"use client";
import FilterDropdown from "./filter/FilterDropdown";
import { products53 } from "@/data/products/fashion";
import Star from "../common/Star";
import ColorSelection from "../common/ColorSelection";
import Link from "next/link";
import { useContextElement } from "@/context/Context";
import Image from "next/image";
import { openModalShopFilter } from "@/utlis/aside";
import { sortingOptions } from "@/data/products/productCategories";

export default function Shop9() {
  const { toggleWishlist, isAddedtoWishlist } = useContextElement();
  const { setQuickViewItem } = useContextElement();
  const { addProductToCart, isAddedToCartProducts } = useContextElement();
  return (
    <section className="shop-main container">
      <div className="d-flex justify-content-between mb-4 pb-md-2">
        <FilterDropdown />
        {/* <!-- /.shop-acs --> */}

        <select
          className="shop-acs__select form-select fw-medium w-auto border-0 py-0 order-0 order-lg-2"
          aria-label="Sort Items"
          name="total-number"
        >
          {sortingOptions.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <div className="shop-filter d-flex align-items-center order-0 d-lg-none">
          <button
            className="btn-link btn-link_f d-flex align-items-center ps-0 js-open-aside"
            onClick={openModalShopFilter}
          >
            <svg
              className="d-inline-block align-middle me-2"
              width="14"
              height="10"
              viewBox="0 0 14 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <use href="#icon_filter" />
            </svg>
            <span className="text-uppercase fw-medium d-inline-block align-middle">
              Filter
            </span>
          </button>
        </div>
        {/* <!-- /.col-size d-flex align-items-center ms-auto ms-md-3 --> */}
      </div>
      {/* <!-- /.d-flex justify-content-between --> */}

      <div className="products-grid" id="products-grid">
        <div className="products-masonry row row-cols-md-2 mb-2 mb-md-3 pb-1 pb-md-3">
          {products53.slice(0, 1).map((elm, i) => (
            <div key={i} className="product-card-wrapper">
              <div className="product-card h-100 mb-2 pb-1 pb-md-0">
                <div className="pc__img-wrapper hover-container p-lg-0">
                  <Image
                    loading="lazy"
                    src={elm.imgSrc}
                    width="690"
                    height="714"
                    alt="Cropped Faux leather Jacket"
                    className="pc__img object-position-top"
                  />
                  <div className="pc__info hover__content text-center top-0 left-0 w-100 d-flex flex-column justify-content-center align-items-center">
                    <p className="pc__category">{elm.category}</p>
                    <h6 className="pc__title">
                      <Link href={`/product1_simple/${elm.id}`}>
                        {elm.title}
                      </Link>
                    </h6>
                    <div className="product-card__price d-flex justify-content-center">
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
                    {elm.reviews && (
                      <div className="product-card__review d-flex flex-wrap align-items-center justify-content-center">
                        <div className="reviews-group d-flex">
                          <Star stars={elm.rating} />
                        </div>
                        <span className="reviews-note text-lowercase text-secondary ms-1">
                          {elm.reviews}
                        </span>
                      </div>
                    )}
                    {elm.colors && (
                      <div className="d-flex align-items-center mt-1">
                        <ColorSelection />
                      </div>
                    )}

                    <button
                      className="pc__atc anim_appear-bottom btn mt-3 border-0 text-uppercase fw-medium js-add-cart js-open-aside"
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
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="d-flex flex-column">
            <div className="row row-cols-2 flex-grow-1 mb-lg-4">
              {products53.slice(1, 3).map((elm, i) => (
                <div key={i} className="product-card-wrapper">
                  <div className="product-card h-100 mb-2">
                    <div className="pc__img-wrapper hover-container p-lg-0">
                      <Image
                        loading="lazy"
                        src={elm.imgSrc}
                        width="690"
                        height="714"
                        alt="Cropped Faux leather Jacket"
                        className="pc__img object-position-top"
                      />
                      <div className="pc__info hover__content text-center top-0 left-0 w-100 d-flex flex-column justify-content-center align-items-center">
                        <p className="pc__category">{elm.category}</p>
                        <h6 className="pc__title">
                          <Link href={`/product1_simple/${elm.id}`}>
                            {elm.title}
                          </Link>
                        </h6>
                        <div className="product-card__price d-flex justify-content-center">
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
                        {elm.reviews && (
                          <div className="product-card__review d-flex flex-wrap align-items-center justify-content-center">
                            <div className="reviews-group d-flex">
                              <Star stars={elm.rating} />
                            </div>
                            <span className="reviews-note text-lowercase text-secondary ms-1">
                              {elm.reviews}
                            </span>
                          </div>
                        )}
                        {elm.colors && (
                          <div className="d-flex align-items-center mt-1">
                            <ColorSelection />
                          </div>
                        )}

                        <button
                          className="pc__atc anim_appear-bottom btn mt-3 border-0 text-uppercase fw-medium js-add-cart js-open-aside"
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
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {products53.slice(3, 4).map((elm, i) => (
              <div key={i} className="product-card-wrapper flex-grow-1 pt-1">
                <div className="product-card h-100">
                  <div className="pc__img-wrapper pc-wide__img-wrapper hover-container p-lg-0">
                    <Image
                      loading="lazy"
                      src={elm.imgSrc}
                      width="690"
                      height="714"
                      alt="Cropped Faux leather Jacket"
                      className="pc__img object-position-top"
                    />
                    <div className="pc__info hover__content text-center top-0 left-0 w-100 d-flex flex-column justify-content-center align-items-center">
                      <p className="pc__category">{elm.category}</p>
                      <h6 className="pc__title">
                        <Link href={`/product1_simple/${elm.id}`}>
                          {elm.title}
                        </Link>
                      </h6>
                      <div className="product-card__price d-flex justify-content-center">
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
                      {elm.reviews && (
                        <div className="product-card__review d-flex flex-wrap align-items-center justify-content-center">
                          <div className="reviews-group d-flex">
                            <Star stars={elm.rating} />
                          </div>
                          <span className="reviews-note text-lowercase text-secondary ms-1">
                            {elm.reviews}
                          </span>
                        </div>
                      )}
                      {elm.colors && (
                        <div className="d-flex align-items-center mt-1">
                          <ColorSelection />
                        </div>
                      )}

                      <button
                        className="pc__atc anim_appear-bottom btn mt-3 border-0 text-uppercase fw-medium js-add-cart js-open-aside"
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
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="products-masonry row row-cols-md-2 mb-2 mb-md-3 pb-1 pb-md-3">
          <div className="mb-2 pb-1 mb-md-0 pb-md-0">
            <div className="row row-cols-2 h-100">
              <div className="d-flex flex-column">
                {products53.slice(4, 6).map((elm, i) => (
                  <div
                    key={i}
                    className="product-card-wrapper flex-grow-1 mb-md-4"
                  >
                    <div className="product-card h-100 mb-2 pb-1 pb-md-0">
                      <div className="pc__img-wrapper hover-container p-lg-0">
                        <Image
                          loading="lazy"
                          src={elm.imgSrc}
                          width="690"
                          height="714"
                          alt="Cropped Faux leather Jacket"
                          className="pc__img object-position-top"
                        />
                        <div className="pc__info hover__content text-center top-0 left-0 w-100 d-flex flex-column justify-content-center align-items-center">
                          <p className="pc__category">{elm.category}</p>
                          <h6 className="pc__title">
                            <Link href={`/product1_simple/${elm.id}`}>
                              {elm.title}
                            </Link>
                          </h6>
                          <div className="product-card__price d-flex justify-content-center">
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
                          {elm.reviews && (
                            <div className="product-card__review d-flex flex-wrap align-items-center justify-content-center">
                              <div className="reviews-group d-flex">
                                <Star stars={elm.rating} />
                              </div>
                              <span className="reviews-note text-lowercase text-secondary ms-1">
                                {elm.reviews}
                              </span>
                            </div>
                          )}
                          {elm.colors && (
                            <div className="d-flex align-items-center mt-1">
                              <ColorSelection />
                            </div>
                          )}

                          <button
                            className="pc__atc anim_appear-bottom btn mt-3 border-0 text-uppercase fw-medium js-add-cart js-open-aside"
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
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {products53.slice(6, 7).map((elm, i) => (
                <div
                  key={i}
                  className="product-card-wrapper flex-grow-1 mb-md-4"
                >
                  <div className="product-card h-100 mb-2 pb-1 pb-md-0">
                    <div className="pc__img-wrapper hover-container p-lg-0">
                      <Image
                        loading="lazy"
                        src={elm.imgSrc}
                        width="690"
                        height="714"
                        alt="Cropped Faux leather Jacket"
                        className="pc__img object-position-top"
                      />
                      <div className="pc__info hover__content text-center top-0 left-0 w-100 d-flex flex-column justify-content-center align-items-center">
                        <p className="pc__category">{elm.category}</p>
                        <h6 className="pc__title">
                          <Link href={`/product1_simple/${elm.id}`}>
                            {elm.title}
                          </Link>
                        </h6>
                        <div className="product-card__price d-flex justify-content-center">
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
                        {elm.reviews && (
                          <div className="product-card__review d-flex flex-wrap align-items-center justify-content-center">
                            <div className="reviews-group d-flex">
                              <Star stars={elm.rating} />
                            </div>
                            <span className="reviews-note text-lowercase text-secondary ms-1">
                              {elm.reviews}
                            </span>
                          </div>
                        )}
                        {elm.colors && (
                          <div className="d-flex align-items-center mt-1">
                            <ColorSelection />
                          </div>
                        )}

                        <button
                          className="pc__atc anim_appear-bottom btn mt-3 border-0 text-uppercase fw-medium js-add-cart js-open-aside"
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
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {products53.slice(7, 8).map((elm, i) => (
            <div key={i} className="product-card-wrapper">
              <div className="product-card h-100 mb-2 pb-1 pb-md-0">
                <div className="pc__img-wrapper hover-container p-lg-0">
                  <Image
                    loading="lazy"
                    src={elm.imgSrc}
                    width="690"
                    height="714"
                    alt="Cropped Faux leather Jacket"
                    className="pc__img object-position-top"
                  />
                  <div className="pc__info hover__content text-center top-0 left-0 w-100 d-flex flex-column justify-content-center align-items-center">
                    <p className="pc__category">{elm.category}</p>
                    <h6 className="pc__title">
                      <Link href={`/product1_simple/${elm.id}`}>
                        {elm.title}
                      </Link>
                    </h6>
                    <div className="product-card__price d-flex justify-content-center">
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
                    {elm.reviews && (
                      <div className="product-card__review d-flex flex-wrap align-items-center justify-content-center">
                        <div className="reviews-group d-flex">
                          <Star stars={elm.rating} />
                        </div>
                        <span className="reviews-note text-lowercase text-secondary ms-1">
                          {elm.reviews}
                        </span>
                      </div>
                    )}
                    {elm.colors && (
                      <div className="d-flex align-items-center mt-1">
                        <ColorSelection />
                      </div>
                    )}

                    <button
                      className="pc__atc anim_appear-bottom btn mt-3 border-0 text-uppercase fw-medium js-add-cart js-open-aside"
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
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="products-grid row row-cols-2 row-cols-md-3 row-cols-lg-4">
          {products53.slice(8, 12).map((elm, i) => (
            <div key={i} className="product-card-wrapper">
              <div className="product-card mb-3 mb-md-4 mb-xxl-5">
                <div className="pc__img-wrapper hover-container ">
                  <Image
                    loading="lazy"
                    src={elm.imgSrc}
                    width="690"
                    height="714"
                    alt="Cropped Faux leather Jacket"
                    className="pc__img object-position-top"
                  />
                  <div className="pc__info hover__content text-center top-0 left-0 w-100 d-flex flex-column justify-content-center align-items-center">
                    <p className="pc__category">{elm.category}</p>
                    <h6 className="pc__title">
                      <Link href={`/product1_simple/${elm.id}`}>
                        {elm.title}
                      </Link>
                    </h6>
                    <div className="product-card__price d-flex justify-content-center">
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
                    {elm.reviews && (
                      <div className="product-card__review d-flex flex-wrap align-items-center justify-content-center">
                        <div className="reviews-group d-flex">
                          <Star stars={elm.rating} />
                        </div>
                        <span className="reviews-note text-lowercase text-secondary ms-1">
                          {elm.reviews}
                        </span>
                      </div>
                    )}
                    {elm.colors && (
                      <div className="d-flex align-items-center mt-1">
                        <ColorSelection />
                      </div>
                    )}

                    <button
                      className="pc__atc anim_appear-bottom btn mt-3 border-0 text-uppercase fw-medium js-add-cart js-open-aside"
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
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* <!-- /.products-grid row row-cols-2 row-cols-md-3 row-cols-lg-4 --> */}
      </div>

      <div className="text-center">
        <a
          className="btn btn-primary text-uppercase fw-medium fs-base"
          href="#"
        >
          Show More
        </a>
      </div>
    </section>
  );
}
