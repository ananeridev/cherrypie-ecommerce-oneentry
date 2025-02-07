"use client";
import React from "react";
import Link from "next/link";
import { currencyOptions, languageOptions, socialLinks } from "@/data/footer";

export default function Footer6() {
  return (
    <footer className="footer footer_type_2 bordered">
      <div className="footer-top container pb-5">
        <div className="block-newsletter pb-5 mb-5">
          <h3 className="block__title">Subscribe to our newsletter</h3>
          <p>
            Be the first to get the latest news about trends, promotions, and
            much more!
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="block-newsletter__form"
          >
            <input
              className="form-control"
              type="email"
              name="email"
              placeholder="Your email address"
            />
            <button className="btn btn-secondary fw-medium" type="submit">
              JOIN
            </button>
          </form>
        </div>
        <div className="block-links">
          <ul className="list-unstyled d-flex gap-0 gap-md-5 align-items-center justify-content-center mb-4 flex-column flex-md-row">
            <li className="sub-menu__item">
              <Link href="/terms" className="menu-link menu-link_us-s">
                Returns Policy
              </Link>
            </li>
            <li className="sub-menu__item">
              <Link
                href="/shop_order_tracking"
                className="menu-link menu-link_us-s"
              >
                Track Your Order
              </Link>
            </li>
            <li className="sub-menu__item">
              <Link href="/about" className="menu-link menu-link_us-s">
                Shipping & Delivery
              </Link>
            </li>
          </ul>
          <ul className="social-links list-unstyled d-flex flex-wrap align-items-center justify-content-center mb-5">
            {socialLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="footer__social-link d-block">
                  <svg
                    className={link.className}
                    width={link.width}
                    height={link.height}
                    viewBox={link.viewBox}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {typeof link.icon === "string" ? (
                      <use href={link.icon} />
                    ) : (
                      link.icon
                    )}
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* <!-- /.footer-top container --> */}

      <div className="footer-bottom">
        <div className="container d-md-flex align-items-center">
          <span className="footer-copyright me-auto">
            ©{new Date().getFullYear()} Uomo
          </span>
          <div className="footer-settings d-md-flex align-items-center">
            <select
              id="footerSettingsLanguage"
              className="form-select form-select-sm bg-transparent border-0"
              aria-label="Default select example"
              name="store-language"
            >
              {languageOptions.map((option, index) => (
                <option
                  key={index}
                  className="footer-select__option"
                  value={option.value}
                >
                  {option.text}
                </option>
              ))}
            </select>

            <select
              id="footerSettingsCurrency"
              className="form-select form-select-sm bg-transparent border-0"
              aria-label="Default select example"
              name="store-language"
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
          {/* <!-- /.footer-settings --> */}
        </div>
        {/* <!-- /.container d-flex align-items-center --> */}
      </div>
      {/* <!-- /.footer-bottom container --> */}
    </footer>
  );
}
