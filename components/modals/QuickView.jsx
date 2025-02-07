"use client";
import { useContextElement } from "@/context/Context";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Size from "../singleProduct/Size";
import Colors from "../singleProduct/Colors";
import Image from "next/image";
import ShareComponent from "../common/ShareComponent";
import { useState } from "react";

export default function QuickView() {
  const { quickViewItem } = useContextElement();
  const { isAddedToCartProducts } = useContextElement();
  const { toggleWishlist, isAddedtoWishlist } = useContextElement();
  const swiperOptions = {
    slidesPerView: 1,
    slidesPerGroup: 1,
    effect: "none",
    modules: [Navigation],
    loop: false,
    navigation: {
      nextEl:
        ".modal-dialog.quick-view .product-single__media .swiper-button-next",
      prevEl:
        ".modal-dialog.quick-view .product-single__media .swiper-button-prev",
    },
  };
  const swiperSlideItems = [
    quickViewItem.imgSrc,
    quickViewItem.imgSrc,
    quickViewItem.imgSrc,
    quickViewItem.imgSrc,
  ];
  const { cartProducts, setCartProducts } = useContextElement();
  const [quantity, setQuantity] = useState(1);

  const isIncludeCard = () => {
    const item = cartProducts.filter((elm) => elm.id == quickViewItem.id)[0];
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
      const item = quickViewItem;
      item.quantity = quantity;
      setCartProducts((pre) => [...pre, item]);
    }
  };
  return (
    <div className="modal fade" id="quickView" tabIndex="-1">
      <div className="modal-dialog quick-view modal-dialog-centered">
        <div className="modal-content">
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
          <div className="product-single">
            <div className="product-single__media m-0">
              <div className="product-single__image position-relative w-100">
                <Swiper
                  {...swiperOptions}
                  className="swiper-container js-swiper-slider"
                >
                  {swiperSlideItems.map((elm, i) => (
                    <SwiperSlide
                      key={i}
                      className="swiper-slide product-single__image-item"
                    >
                      <Image
                        loading="lazy"
                        width={500}
                        height={700}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                        }}
                        src={elm}
                        alt="image"
                      />
                    </SwiperSlide>
                  ))}

                  <div className="cursor-pointer swiper-button-prev">
                    <svg
                      width="7"
                      height="11"
                      viewBox="0 0 7 11"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <use href="#icon_prev_sm" />
                    </svg>
                  </div>
                  <div className="cursor-pointer swiper-button-next">
                    <svg
                      width="7"
                      height="11"
                      viewBox="0 0 7 11"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <use href="#icon_next_sm" />
                    </svg>
                  </div>
                </Swiper>
              </div>
            </div>
            <div className="product-single__detail">
              <h1 className="product-single__name">{quickViewItem.title}</h1>
              <div className="product-single__price">
                <span className="current-price">${quickViewItem.price}</span>
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
                      readOnly
                      min="1"
                      onChange={(e) =>
                        setQuantityCartItem(quickViewItem.id, e.target.value)
                      }
                      className="qty-control__number text-center"
                    />
                    <div
                      onClick={() =>
                        setQuantityCartItem(
                          quickViewItem.id,
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
                          quickViewItem.id,
                          isIncludeCard()?.quantity + 1 || quantity + 1
                        )
                      }
                      className="qty-control__increase"
                    >
                      +
                    </div>
                  </div>

                  <button
                    onClick={() => addToCart()}
                    className="btn btn-primary btn-addtocart js-open-aside"
                  >
                    {isAddedToCartProducts(quickViewItem.id)
                      ? "Already Added"
                      : "Add To Cart"}
                  </button>
                </div>
              </form>
              <div className="product-single__addtolinks">
                <a
                  href="#"
                  className={`menu-link menu-link_us-s add-to-wishlist  ${
                    isAddedtoWishlist(quickViewItem.id) ? "active" : ""
                  }`}
                  onClick={() => toggleWishlist(quickViewItem.id)}
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
                <ShareComponent title={quickViewItem.title} />
              </div>
              <div className="product-single__meta-info mb-0">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
