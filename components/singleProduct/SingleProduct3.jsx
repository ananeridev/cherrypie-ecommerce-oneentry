"use client";
import React, { useState } from "react";
import Slider3 from "./sliders/Slider3";
import BreadCumb from "./BreadCumb";
import Size from "./Size";
import Colors from "./Colors";
import Description from "./Description";
import AdditionalInfo from "./AdditionalInfo";
import Reviews from "./Reviews";
import Link from "next/link";
import ShareComponent from "../common/ShareComponent";
import { useContextElement } from "@/context/Context";
const colors = [
  {
    id: "swatch-11",
    label: "Gray",
    color: "gray",
    defaultChecked: false,
  },
  {
    id: "swatch-12",
    label: "Red",
    color: "#c93a3e",
    defaultChecked: true,
  },
  {
    id: "swatch-13",
    label: "White",
    color: "#fff",
    defaultChecked: false,
  },
];
export default function SingleProduct3({ product }) {
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
    <section className="product-single product-single__type-3">
      <div className="product-single__top-background">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <Slider3 />
            </div>
            <div className="col-lg-5 pb-4 d-flex flex-column">
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
                      <input type="radio" name="size" id="swatch-1" />
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
                      <Colors colors={colors} />
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
                <a
                  href="#"
                  className="menu-link menu-link_us-s add-to-wishlist"
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
      </div>
      <div className="container">
        <div className="product-single__details-tab">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <a
                className="nav-link nav-link_underscore active"
                id="tab-description-tab"
                data-bs-toggle="tab"
                href="#tab-description"
                role="tab"
                aria-controls="tab-description"
                aria-selected="true"
              >
                Description
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link nav-link_underscore"
                id="tab-additional-info-tab"
                data-bs-toggle="tab"
                href="#tab-additional-info"
                role="tab"
                aria-controls="tab-additional-info"
                aria-selected="false"
              >
                Additional Information
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link nav-link_underscore"
                id="tab-reviews-tab"
                data-bs-toggle="tab"
                href="#tab-reviews"
                role="tab"
                aria-controls="tab-reviews"
                aria-selected="false"
              >
                Reviews (2)
              </a>
            </li>
          </ul>
          <div className="tab-content">
            <div
              className="tab-pane fade show active"
              id="tab-description"
              role="tabpanel"
              aria-labelledby="tab-description-tab"
            >
              <Description />
            </div>
            <div
              className="tab-pane fade"
              id="tab-additional-info"
              role="tabpanel"
              aria-labelledby="tab-additional-info-tab"
            >
              <AdditionalInfo />
            </div>
            <div
              className="tab-pane fade"
              id="tab-reviews"
              role="tabpanel"
              aria-labelledby="tab-reviews-tab"
            >
              <Reviews />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
