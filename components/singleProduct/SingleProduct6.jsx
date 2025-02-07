"use client";
import Star from "../common/Star";
import AdditionalInfo from "./AdditionalInfo";
import BreadCumb from "./BreadCumb";
import Colors from "./Colors";
import Description from "./Description";
import Reviews from "./Reviews";
import Size from "./Size";
import Link from "next/link";
const images = [
  {
    imgSrc: "/assets/images/products/product_0.jpg",
  },
  {
    imgSrc: "/assets/images/products/product_0-1.jpg",
  },
  {
    imgSrc: "/assets/images/products/product_0-2.jpg",
  },
  {
    imgSrc: "/assets/images/products/product_0-3.jpg",
  },
];
import Image from "next/image";
import ShareComponent from "../common/ShareComponent";
import { useContextElement } from "@/context/Context";
import { useState } from "react";
export default function SingleProduct6({ product }) {
  const { cartProducts, setCartProducts } = useContextElement();
  const [quantity, setQuantity] = useState(1);

  const isIncludeCard = () => {
    const item = cartProducts.filter((elm) => elm.id == product.id)[0];
    return item;
  };
  const setQuantityCartItem = (id, quantity) => {
    if (isIncludeCard()) {
      if (quantity >= 1) {
        const item = cartProducts.filter((elm) => elm.id == id)[0];
        const items = [...cartProducts];
        const itemIndex = items.indexOf(item);
        item.quantity = quantity;
        items[itemIndex] = item;
        setCartProducts(items);
      }
    } else {
      setQuantity(quantity - 1 ? quantity : 1);
    }
  };
  const addToCart = () => {
    if (!isIncludeCard()) {
      const item = product;
      item.quantity = quantity;
      setCartProducts((pre) => [...pre, item]);
    }
  };
  return (
    <section className="product-single product-single__type-6 container">
      <div className="row">
        <div className="col-lg-7">
          <div className="mb-md-1 pb-md-3"></div>
          <div className="product-single__media" data-media-type="list-image">
            <div className="product-single__image d-flex flex-column gap-2">
              {images.map((elm, i) => (
                <div key={i} className="product-single__image-item">
                  <Image
                    loading="lazy"
                    className="h-auto"
                    src={elm.imgSrc}
                    width="700"
                    height="700"
                    alt="image"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="sticky-content">
            <div className="mb-md-1 pb-md-3"></div>
            <div className="d-flex justify-content-between mb-4 pb-md-2">
              <div className="breadcrumb mb-0 d-none d-md-block flex-grow-1">
                <BreadCumb />
              </div>
              {/* <!-- /.breadcrumb --> */}
              <div className="product-single__prev-next d-flex align-items-center justify-content-between justify-content-md-end flex-grow-1">
                <a className="text-uppercase fw-medium">
                  <svg
                    className="mb-1px"
                    width="10"
                    height="10"
                    viewBox="0 0 25 25"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <use href="#icon_prev_md" />
                  </svg>
                  <span className="menu-link menu-link_us-s">Prev</span>
                </a>
                <a className="text-uppercase fw-medium">
                  <span className="menu-link menu-link_us-s">Next</span>
                  <svg
                    className="mb-1px"
                    width="10"
                    height="10"
                    viewBox="0 0 25 25"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <use href="#icon_next_md" />
                  </svg>
                </a>
              </div>
              {/* <!-- /.shop-acs --> */}
            </div>
            <h1 className="product-single__name">{product.title}</h1>
            <div className="product-single__rating">
              <div className="reviews-group d-flex">
                <Star stars={5} />
              </div>
              <span className="reviews-note text-lowercase text-secondary ms-1">
                8k+ reviews
              </span>
            </div>
            <div className="product-single__price">
              <span className="current-price">${product.price}</span>
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
                  <label>Sizes</label>
                  <div className="swatch-list">
                    <Size />
                  </div>
                  <a
                    href="#"
                    className="sizeguide-link"
                    data-bs-toggle="modal"
                    data-bs-target="#sizeGuide"
                  >
                    Size Guide
                  </a>
                </div>
                <div className="product-swatch color-swatches">
                  <label>Color</label>
                  <div className="swatch-list">
                    <Colors />
                  </div>
                </div>
              </div>
              <div className="product-single__addtocart">
                <div className="qty-control position-relative">
                  <input
                    type="number"
                    name="quantity"
                    value={
                      isIncludeCard() ? isIncludeCard().quantity : quantity
                    }
                    min="1"
                    onChange={(e) =>
                      setQuantityCartItem(product.id, e.target.value)
                    }
                    className="qty-control__number text-center"
                  />
                  <div
                    onClick={() =>
                      setQuantityCartItem(
                        product.id,
                        isIncludeCard()?.quantity - 1 || quantity - 1
                      )
                    }
                    className="qty-control__reduce"
                  >
                    -
                  </div>
                  <div
                    onClick={() =>
                      setQuantityCartItem(
                        product.id,
                        isIncludeCard()?.quantity + 1 || quantity + 1
                      )
                    }
                    className="qty-control__increase"
                  >
                    +
                  </div>
                </div>
                {/* <!-- .qty-control --> */}
                <button
                  type="submit"
                  className="btn btn-primary btn-addtocart js-open-aside"
                  onClick={() => addToCart()}
                >
                  {isIncludeCard() ? "Already Added" : "Add to Cart"}
                </button>
              </div>
            </form>
            <div className="product-single__addtolinks">
              <a href="#" className="menu-link menu-link_us-s add-to-wishlist">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <use href="#icon_heart" />
                </svg>
                <span>Add to Wishlist</span>
              </a>
              <ShareComponent title={product.title} />
            </div>
            <div className="product-single__meta-info">
              <div className="meta-item">
                <label>SKU:</label>
                <span>N/A</span>
              </div>
              <div className="meta-item">
                <label>Categories:</label>
                <span>Casual & Urban Wear, Jackets, Men</span>
              </div>
              <div className="meta-item">
                <label>Tags:</label>
                <span>biker, black, bomber, leather</span>
              </div>
            </div>
            <div
              id="product_single_details_accordion"
              className="product-single__details-accordion accordion"
            >
              <div className="accordion-item">
                <h5 className="accordion-header" id="accordion-heading-11">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#accordion-collapse-1"
                    aria-expanded="true"
                    aria-controls="accordion-collapse-1"
                  >
                    Description
                    <svg className="accordion-button__icon" viewBox="0 0 14 14">
                      <g aria-hidden="true" stroke="none" fillRule="evenodd">
                        <path
                          className="svg-path-vertical"
                          d="M14,6 L14,8 L0,8 L0,6 L14,6"
                        ></path>
                        <path
                          className="svg-path-horizontal"
                          d="M14,6 L14,8 L0,8 L0,6 L14,6"
                        ></path>
                      </g>
                    </svg>
                  </button>
                </h5>
                <div
                  id="accordion-collapse-1"
                  className="accordion-collapse collapse show"
                  aria-labelledby="accordion-heading-11"
                  data-bs-parent="#product_single_details_accordion"
                >
                  <div className="accordion-body">
                    <Description />
                  </div>
                </div>
              </div>
              {/* <!-- /.accordion-item --> */}

              <div className="accordion-item">
                <h5 className="accordion-header" id="accordion-heading-2">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#accordion-collapse-2"
                    aria-expanded="false"
                    aria-controls="accordion-collapse-2"
                  >
                    Additional Information
                    <svg className="accordion-button__icon" viewBox="0 0 14 14">
                      <g aria-hidden="true" stroke="none" fillRule="evenodd">
                        <path
                          className="svg-path-vertical"
                          d="M14,6 L14,8 L0,8 L0,6 L14,6"
                        ></path>
                        <path
                          className="svg-path-horizontal"
                          d="M14,6 L14,8 L0,8 L0,6 L14,6"
                        ></path>
                      </g>
                    </svg>
                  </button>
                </h5>
                <div
                  id="accordion-collapse-2"
                  className="accordion-collapse collapse"
                  aria-labelledby="accordion-heading-2"
                  data-bs-parent="#product_single_details_accordion"
                >
                  <div className="accordion-body">
                    <AdditionalInfo />
                  </div>
                </div>
              </div>
              {/* <!-- /.accordion-item --> */}

              <div className="accordion-item">
                <h5 className="accordion-header" id="accordion-heading-3">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#accordion-collapse-3"
                    aria-expanded="false"
                    aria-controls="accordion-collapse-3"
                  >
                    Reviews (3)
                    <svg className="accordion-button__icon" viewBox="0 0 14 14">
                      <g aria-hidden="true" stroke="none" fillRule="evenodd">
                        <path
                          className="svg-path-vertical"
                          d="M14,6 L14,8 L0,8 L0,6 L14,6"
                        ></path>
                        <path
                          className="svg-path-horizontal"
                          d="M14,6 L14,8 L0,8 L0,6 L14,6"
                        ></path>
                      </g>
                    </svg>
                  </button>
                </h5>
                <div
                  id="accordion-collapse-3"
                  className="accordion-collapse collapse"
                  aria-labelledby="accordion-heading-3"
                  data-bs-parent="#product_single_details_accordion"
                >
                  <div className="accordion-body">
                    <Reviews />
                  </div>
                </div>
              </div>
              {/* <!-- /.accordion-item --> */}
            </div>
            <div className="product-single__additional-info">
              <a
                href="#"
                data-bs-toggle="modal"
                data-bs-target="#deliveryModal"
              >
                Composition and Care
              </a>
              <a
                href="#"
                data-bs-toggle="modal"
                data-bs-target="#deliveryModal"
              >
                In-Store Availability
              </a>
              <a
                href="#"
                data-bs-toggle="modal"
                data-bs-target="#deliveryModal"
              >
                Delivery and Return
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
