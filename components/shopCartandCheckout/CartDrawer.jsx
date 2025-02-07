"use client";
import Link from "next/link";

import { useContextElement } from "@/context/Context";
import React, { useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function CartDrawer() {
  const { cartProducts, setCartProducts, totalPrice } = useContextElement();
  const pathname = usePathname();
  const closeCart = () => {
    document
      .getElementById("cartDrawerOverlay")
      .classList.remove("page-overlay_visible");
    document.getElementById("cartDrawer").classList.remove("aside_visible");
  };
  const setQuantity = (id, quantity) => {
    if (quantity >= 1) {
      const item = cartProducts.filter((elm) => elm.id == id)[0];
      const items = [...cartProducts];
      const itemIndex = items.indexOf(item);
      item.quantity = quantity;
      items[itemIndex] = item;
      setCartProducts(items);
    }
  };
  const removeItem = (id) => {
    setCartProducts((pre) => [...pre.filter((elm) => elm.id != id)]);
  };
  useEffect(() => {
    closeCart();
  }, [pathname]);

  return (
    <>
      <div
        className="aside aside_right overflow-hidden cart-drawer "
        id="cartDrawer"
      >
        <div className="aside-header d-flex align-items-center">
          <h3 className="text-uppercase fs-6 mb-0">
            SHOPPING BAG (
            <span className="cart-amount js-cart-items-count">
              {cartProducts.length}
            </span>{" "}
            )
          </h3>
          <button
            onClick={closeCart}
            className="btn-close-lg js-close-aside btn-close-aside ms-auto"
          ></button>
        </div>
        {cartProducts.length ? (
          <div className="aside-content cart-drawer-items-list">
            {cartProducts.map((elm, i) => (
              <React.Fragment key={i}>
                <div className="cart-drawer-item d-flex position-relative">
                  <div className="position-relative">
                    <Image
                      loading="lazy"
                      className="cart-drawer-item__img"
                      width={330}
                      height={400}
                      style={{ height: "fit-content" }}
                      src={elm.imgSrc}
                      alt="image"
                    />
                  </div>
                  <div className="cart-drawer-item__info flex-grow-1">
                    <h6 className="cart-drawer-item__title fw-normal">
                      {elm.title}
                    </h6>
                    <p className="cart-drawer-item__option text-secondary">
                      Color: Yellow
                    </p>
                    <p className="cart-drawer-item__option text-secondary">
                      Size: L
                    </p>
                    <div className="d-flex align-items-center justify-content-between mt-1">
                      <div className="qty-control position-relative">
                        <input
                          type="number"
                          name="quantity"
                          onChange={(e) =>
                            setQuantity(elm.id, e.target.value / 1)
                          }
                          value={elm.quantity}
                          min="1"
                          className="qty-control__number border-0 text-center"
                        />
                        <div
                          onClick={() => {
                            setQuantity(elm.id, elm.quantity - 1);
                          }}
                          className="qty-control__reduce text-start"
                        >
                          -
                        </div>
                        <div
                          onClick={() => setQuantity(elm.id, elm.quantity + 1)}
                          className="qty-control__increase text-end"
                        >
                          +
                        </div>
                      </div>

                      <span className="cart-drawer-item__price money price">
                        ${elm.price * elm.quantity}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => removeItem(elm.id)}
                    className="btn-close-xs position-absolute top-0 end-0 js-cart-item-remove"
                  ></button>
                </div>
                {/* <!-- /.cart-drawer-item d-flex --> */}

                <hr className="cart-drawer-divider" />
              </React.Fragment>
            ))}

            {/* <!-- /.cart-drawer-item d-flex --> */}
          </div>
        ) : (
          <div className="fs-18 mt-5 px-5">
            Your cart is empty. Start shopping!
          </div>
        )}
        {/* <!-- /.aside-content --> */}

        <div className="cart-drawer-actions position-absolute start-0 bottom-0 w-100">
          <hr className="cart-drawer-divider" />
          <div className="d-flex justify-content-between">
            <h6 className="fs-base fw-medium">SUBTOTAL:</h6>
            <span className="cart-subtotal fw-medium">${totalPrice}</span>
          </div>
          {/* <!-- /.d-flex justify-content-between --> */}
          {cartProducts.length ? (
            <>
              <Link href="/shop_cart" className="btn btn-light mt-3 d-block">
                View Cart
              </Link>
              <Link
                href="/shop_checkout"
                className="btn btn-primary mt-3 d-block"
              >
                Checkout
              </Link>
            </>
          ) : (
            <Link href="/shop-1" className="btn btn-light mt-3 d-block">
              Explore shop
            </Link>
          )}
        </div>
        {/* <!-- /.aside-content --> */}
      </div>
      <div
        id="cartDrawerOverlay"
        onClick={closeCart}
        className="page-overlay"
      ></div>
    </>
  );
}
