"use client";
import Link from "next/link";
import CartLength from "./components/CartLength";
import Nav from "./components/Nav";
import { openCart } from "@/utlis/openCart";
import Image from "next/image";
import User from "./components/User";
import { currencyOptions, languageOptions2 } from "@/data/footer";
import { socialLinks } from "@/data/socials";
import SearchPopup from "./components/SearchPopup";

export default function Header14() {
  return (
    <header id="header" className="header sticky_disabled w-100">
      <div className="header-top bg-black">
        <div className="container d-flex container color-white align-items-center">
          <ul className="list-unstyled d-flex flex-1 gap-3 m-0">
            <li>
              <a href="#" className="menu-link menu-link_us-s color-white">
                Shipping
              </a>
            </li>
            <li>
              <a href="#" className="menu-link menu-link_us-s color-white">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="menu-link menu-link_us-s color-white">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="menu-link menu-link_us-s color-white">
                Track Order
              </a>
            </li>
          </ul>
          <ul className="social-links list-unstyled d-flex flex-wrap mx-auto mb-0">
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
          <div className="heeader-top__right flex-1 d-flex gap-1 justify-content-end">
            <select
              className="form-select form-select-sm bg-transparent color-white"
              name="store-language"
            >
              {languageOptions2.map((option, index) => (
                <option key={index} value={option.value}>
                  {option.text}
                </option>
              ))}
            </select>
            <select
              className="form-select form-select-sm bg-transparent color-white"
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
      <div className="header-desk_type_8">
        <div className="header-middle py-4">
          <div className="container d-flex align-items-center my-2">
            <div className="flex-1 d-flex align-items-center gap-3">
              <div className="service-promotion__icon">
                <svg
                  width="40"
                  height="39"
                  viewBox="0 0 53 52"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <use href="#icon_headphone"></use>
                </svg>
              </div>
              <div className="service-promotion__content-wrap">
                <h3 className="service-promotion__title h6 text-uppercase mb-0">
                  Need Help
                </h3>
                <p className="service-promotion__content fs-base mb-0">
                  +0020 500 5832
                </p>
              </div>
            </div>
            <div className="logo">
              <Link href="/">
                <Image
                  src="/assets/images/logo-cosmetics.png"
                  width={112}
                  height={28}
                  alt="Uomo"
                  className="logo__image"
                />
              </Link>
            </div>
            {/* <!-- /.logo --> */}

            <div className="header-tools d-flex align-items-center flex-1 justify-content-end me-2">
              <SearchPopup />
              {/* <!-- /.header-tools__item hover-container --> */}

              <div className="header-tools__item hover-container">
                <a className="js-open-aside" href="#">
                  <User />
                </a>
              </div>

              <Link className="header-tools__item" href="/account_wishlist">
                <svg
                  className="d-block"
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

        <div className="header-bottom">
          <div className="container">
            <nav className="navigation w-100 d-flex align-items-center justify-content-center py-2 border-top-1">
              <ul className="navigation__list list-unstyled d-flex my-1">
                <Nav />
              </ul>
              {/* <!-- /.navigation__list --> */}
            </nav>
            {/* <!-- /.navigation --> */}
          </div>
        </div>
        {/* <!-- /.header-bottom --> */}
      </div>
      {/* <!-- /.header-desk header-desk_type_6 --> */}
    </header>
  );
}
