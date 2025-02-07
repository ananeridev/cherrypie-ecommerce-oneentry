"use client";
import Link from "next/link";
import CartLength from "./components/CartLength";
import Nav from "./components/Nav";
import { openCart } from "@/utlis/openCart";
import Image from "next/image";
import User from "./components/User";
import { currencyOptions, languageOptions2 } from "@/data/footer";
import { socialLinks } from "@/data/socials";
import CategorySelect from "./components/CategorySelect";

export default function Header17() {
  return (
    <header
      id="header"
      className="header sticky_disabled header_sticky-bg_dark w-100 theme-bg-color"
    >
      <div className="header-top bordered-20per">
        <div className="container d-flex align-items-center">
          <ul className="list-unstyled d-flex flex-1 gap-3 m-0">
            <li>
              <a href="#" className="menu-link menu-link_us-s fs-13">
                Shipping
              </a>
            </li>
            <li>
              <a href="#" className="menu-link menu-link_us-s fs-13">
                FAQ
              </a>
            </li>
            <li>
              <Link href="/contact" className="menu-link menu-link_us-s fs-13">
                Contact
              </Link>
            </li>
            <li>
              <a href="#" className="menu-link menu-link_us-s fs-13">
                Track Order
              </a>
            </li>
          </ul>
          <div className="heeader-top__right flex-1 d-flex gap-1 justify-content-end">
            <ul className="social-links list-unstyled d-flex flex-wrap mb-0">
              {socialLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="footer__social-link d-block color-white"
                  >
                    <svg
                      className={link.className}
                      width={link.width}
                      height={link.height}
                      viewBox={link.viewBox}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <use href={link.icon} />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
            <select
              className="form-select form-select-sm bg-transparent color-white fs-13"
              name="store-language"
            >
              {languageOptions2.map((option, index) => (
                <option key={index} value={option.value}>
                  {option.text}
                </option>
              ))}
            </select>
            <select
              className="form-select form-select-sm bg-transparent color-white fs-13"
              name="store-currency"
            >
              {currencyOptions.map((option, index) => (
                <option
                  key={index}
                  className="footer-select__option"
                  value={option.value}
                >
                  {option.text}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="header-desk_type_6 style2">
        <div className="header-middle border-0 position-relative py-4">
          <div className="container d-flex align-items-center">
            <div className="logo">
              <Link href="/">
                <Image
                  src="/assets/images/logo-cars.png"
                  width={112}
                  height={28}
                  alt="Uomo"
                  className="logo__image"
                />
              </Link>
            </div>
            {/* <!-- /.logo --> */}

            <nav className="navigation flex-grow-1 fs-15 fw-semi-bold">
              <ul className="navigation__list list-unstyled d-flex">
                <Nav />
              </ul>
              {/* <!-- /.navigation__list --> */}
            </nav>
            {/* <!-- /.navigation --> */}

            <div className="header-tools d-flex align-items-center me-0">
              <div className="header-tools__item text-white d-none d-xxl-block">
                <span className="fs-15 fw-semi-bold text-uppercase">
                  Need Help? 0020 500
                </span>
              </div>

              <div className="header-tools__item hover-container">
                <a className="header-tools__item js-open-aside" href="#">
                  <User />
                </a>
              </div>

              <Link className="header-tools__item" href="/account_wishlist">
                <svg
                  width="20"
                  height="20"
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
                <span className="cart-amount d-block position-absolute js-cart-items-count">
                  <CartLength />
                </span>
              </a>
            </div>
            {/* <!-- /.header__tools --> */}
          </div>
        </div>
        {/* <!-- /.header-middle --> */}

        <div className="header-bottom pb-4 mb-2">
          <div className="container d-flex align-items-center">
            <div className="categories-nav position-relative">
              <h3 className="categories-nav__title d-flex align-items-center gap-4 py-2 btn-50 theme-bg-color-secondary text-primary px-4 border-radius-10">
                <svg
                  className="nav-icon"
                  width="25"
                  height="18"
                  viewBox="0 0 25 18"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <use href="#icon_nav" />
                </svg>
                <span className="fw-semi-bold lh-1">Browse Categories</span>
                <svg
                  className="ms-auto"
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <use href="#icon_down" />
                </svg>
              </h3>
              <ul className="categories-nav__list list-unstyled border-radius-10">
                <li className="categories-nav__item">
                  <a className="text-primary" href="#">
                    Electronics
                  </a>
                </li>
                <li className="categories-nav__item">
                  <a className="text-primary" href="#">
                    Computers
                  </a>
                </li>
                <li className="categories-nav__item">
                  <a className="text-primary" href="#">
                    Audio & Video
                  </a>
                </li>
                <li className="categories-nav__item">
                  <a className="text-primary" href="#">
                    Mobiles & Tablets
                  </a>
                </li>
                <li className="categories-nav__item">
                  <a className="text-primary" href="#">
                    TV & Audio
                  </a>
                </li>
                <li className="categories-nav__item">
                  <a className="text-primary" href="#">
                    Car & Motorbike
                  </a>
                </li>
                <li className="categories-nav__item">
                  <a className="text-primary" href="#">
                    Hmoe & Garden
                  </a>
                </li>
                <li className="categories-nav__item">
                  <a className="text-primary" href="#">
                    Toys & Kids
                  </a>
                </li>
                <li className="categories-nav__item">
                  <a className="text-primary" href="#">
                    Sporting Goods
                  </a>
                </li>
                <li className="categories-nav__item">
                  <a className="text-primary" href="#">
                    Pet Supplies
                  </a>
                </li>
              </ul>
            </div>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="header-search search-field me-0 border-radius-10"
            >
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
              <input
                className="header-search__input w-100"
                type="text"
                name="search-keyword"
                placeholder="Search products..."
              />
              <CategorySelect />
            </form>
            {/* <!-- /.header-search --> */}
          </div>
        </div>
        {/* <!-- /.header-bottom --> */}
      </div>
      {/* <!-- /.header-desk header-desk_type_6 --> */}
    </header>
  );
}
