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

export default function Header20() {
  return (
    <header id="header" className="header header_sticky">
      <div className="header-top theme-bg-color-third">
        <div className="container d-flex color-white align-items-center">
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
          <p className="mx-auto mb-0">FREE SHIPPING WORLDWIDE</p>
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
      <div className="header-desk header-desk_type_2 container">
        <nav className="navigation d-flex no-underline">
          <ul className="navigation__list nav-20 list-unstyled d-flex theme-color">
            <Nav />
          </ul>
          {/* <!-- /.navigation__list --> */}
        </nav>
        {/* <!-- /.navigation --> */}

        <div className="logo">
          <Link href="/">
            <Image
              src="/assets/images/logo-baby.png"
              width={112}
              height={28}
              alt="Uomo"
              className="logo__image d-block"
            />
          </Link>
        </div>
        {/* <!-- /.logo --> */}

        <div className="header-tools d-flex align-items-center pe-4">
          <SearchPopup />
          {/* <!-- /.header-tools__item hover-container --> */}

          <div className="header-tools__item hover-container">
            <a
              className="js-open-aside theme-color theme-hover-color-secondary"
              href="#"
            >
              <User />
            </a>
          </div>

          <Link
            className="header-tools__item theme-color theme-hover-color-secondary"
            href="/account_wishlist"
          >
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
            className="header-tools__item header-tools__cart js-open-aside theme-color theme-hover-color-secondary"
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
      {/* <!-- /.header-desk header-desk_type_2 --> */}
    </header>
  );
}
