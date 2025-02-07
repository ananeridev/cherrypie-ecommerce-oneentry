import React from "react";
import Link from "next/link";
import { currencyOptions, languageOptions, socialLinks } from "@/data/footer";

export default function Footer12() {
  return (
    <footer className="footer footer_type_3 full-width_padding">
      <div className="footer-middle d-lg-flex align-items-center justify-content-between">
        <ul className="sub-menu__list list-unstyled d-sm-flex my-2">
          <li className="sub-menu__item px-3">
            <Link
              href="/"
              className="menu-link menu-link_us-s text-uppercase fw-semi-bold"
            >
              Home
            </Link>
          </li>
          <li className="sub-menu__item px-3">
            <Link
              href="/shop-1"
              className="menu-link menu-link_us-s text-uppercase fw-semi-bold"
            >
              Shop
            </Link>
          </li>
          <li className="sub-menu__item px-3">
            <Link
              href="/blog_list1"
              className="menu-link menu-link_us-s text-uppercase fw-semi-bold"
            >
              Blog
            </Link>
          </li>
          <li className="sub-menu__item px-3">
            <Link
              href="/account_dashboard"
              className="menu-link menu-link_us-s text-uppercase fw-semi-bold"
            >
              Pages
            </Link>
          </li>
          <li className="sub-menu__item px-3">
            <Link
              href="/about"
              className="menu-link menu-link_us-s text-uppercase fw-semi-bold"
            >
              About
            </Link>
          </li>
          <li className="sub-menu__item px-3">
            <Link
              href="/contact"
              className="menu-link menu-link_us-s text-uppercase fw-semi-bold"
            >
              Contact
            </Link>
          </li>
        </ul>
        <div className="d-flex align-items-center px-3 my-2">
          <span className="fw-semi-bold d-block me-4 pe-1">FOLLOW</span>
          <ul className="social-links list-unstyled d-flex flex-wrap mb-0">
            {socialLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="footer__social-link d-block p">
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
      {/* <!-- /.footer-middle --> */}

      <div className="footer-bottom">
        <div className="d-md-flex align-items-center px-3">
          <span className="footer-copyright me-auto">
            ©{new Date().getFullYear()} UOMO
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
      {/* <!-- /.footer-bottom --> */}
    </footer>
  );
}
