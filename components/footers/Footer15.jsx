"use client";
import React from "react";
import Link from "next/link";
import { currencyOptions, languageOptions, socialLinks } from "@/data/footer";

export default function Footer15() {
  return (
    <footer className="footer footer_type_1 dark">
      <div className="footer-top container">
        <div className="block-newsletter mb-4">
          <h3 className="block__title text-uppercase text-white fs-40 fw-bold mb-2">
            Subscribe to our newsletter
          </h3>
          <p className="mb-4">
            Be the first to get the latest news about trends, promotions, and
            much more!
          </p>

          <div className="mb-2 pb-1"></div>
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
            <button
              className="btn btn-secondary fw-medium theme-bg-color text-white border-0"
              type="submit"
            >
              JOIN
            </button>
          </form>
        </div>

        <div className="mb-3 pb-2"></div>
        <ul className="sub-menu__list list-unstyled d-flex gap-4 align-items-center justify-content-center">
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

        <ul className="social-links list-unstyled d-flex flex-wrap mb-0 align-items-center justify-content-center">
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

        <div className="mb-3 mb-xl-5 pb-3 pt-1 pb-xl-4"></div>
      </div>

      <div className="footer-bottom">
        <div className="d-block d-md-flex align-items-center container">
          <span className="footer-copyright me-auto">
            ©{new Date().getFullYear()} Uomo
          </span>
          <div className="footer-settings d-block d-md-flex align-items-center">
            <div className="d-flex align-items-center">
              <label
                htmlFor="footerSettingsLanguage"
                className="me-2 text-white"
              >
                Language
              </label>
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
            </div>

            <div className="d-flex align-items-center">
              <label
                htmlFor="footerSettingsCurrency"
                className="ms-md-3 me-2 text-white"
              >
                Currency
              </label>
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
          </div>
          {/* <!-- /.footer-settings --> */}
        </div>
        {/* <!-- /.d-flex --> */}
      </div>
      {/* <!-- /.footer-bottom container --> */}
    </footer>
  );
}
