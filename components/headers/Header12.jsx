"use client";
import Link from "next/link";
import CartLength from "./components/CartLength";
import Nav from "./components/Nav";
import { openCart } from "@/utlis/openCart";
import Image from "next/image";
import User from "./components/User";
import CategorySelect from "./components/CategorySelect";

export default function Header12() {
  return (
    <header id="header" className="header header_sticky">
      <div className="header-desk_type_7">
        <div className="header-top theme-bg-color-secondary">
          <div className="container d-flex align-items-center">
            <div className="logo">
              <Link href="/">
                <Image
                  src="/assets/images/logo-white.png"
                  width={112}
                  height={28}
                  alt="Uomo"
                  className="logo__image"
                />
              </Link>
            </div>
            {/* <!-- /.logo --> */}

            <form
              onSubmit={(e) => e.preventDefault()}
              className="header-search search-field"
            >
              <input
                className="header-search__input w-100"
                type="text"
                name="search-keyword"
                placeholder="Search products..."
              />
              <CategorySelect />
              <button className="btn header-search__btn" type="submit">
                <svg
                  className="d-block"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <use href="#icon_search" />
                </svg>
              </button>
            </form>
            {/* <!-- /.header-search --> */}

            <div className="header-tools d-flex align-items-center">
              <div className="header-tools__item hover-container">
                <a className="header-tools__item js-open-aside" href="#">
                  <User />
                </a>
              </div>

              <Link className="header-tools__item" href="/account_wishlist">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <use href="#icon_heart" />
                </svg>
              </Link>

              <a
                onClick={() => openCart()}
                className="header-tools__item header-tools__cart js-open-aside"
              >
                <svg
                  className="d-block"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <use href="#icon_cart" />
                </svg>
                <span className="cart-amount d-block position-absolute js-cart-items-count theme-bg-color">
                  <CartLength />
                </span>
              </a>

              <a
                className="header-tools__item"
                href="#"
                data-bs-toggle="modal"
                data-bs-target="#siteMap"
              >
                <svg
                  className="nav-icon"
                  width="25"
                  height="18"
                  viewBox="0 0 25 18"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="25" height="2" />
                  <rect y="8" width="20" height="2" />
                  <rect y="16" width="25" height="2" />
                </svg>
              </a>
            </div>
            {/* <!-- /.header__tools --> */}
          </div>
        </div>
        {/* <!-- /.header-top --> */}

        <div className="header-bottom theme-bg-color">
          <div className="container d-flex align-items-center">
            <nav className="navigation">
              <ul className="navigation__list list-unstyled d-flex">
                <Nav />
              </ul>
              {/* <!-- /.navigation__list --> */}
            </nav>
            {/* <!-- /.navigation --> */}
          </div>
        </div>
        {/* <!-- /.header-bottom --> */}
      </div>
      {/* <!-- /.header-desk header-desk_type_7 --> */}
    </header>
  );
}
