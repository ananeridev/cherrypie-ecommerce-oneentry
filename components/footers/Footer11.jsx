"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  currencyOptions,
  footerLinks1,
  footerLinks2,
  footerLinks3,
  languageOptions,
  socialLinks,
} from "@/data/footer";

export default function Footer11() {
  return (
    <footer className="footer footer_type_1 theme-bg-color-secondary text-white">
      <div className="footer-middle container">
        <div className="row row-cols-lg-5 row-cols-2">
          <div className="footer-column footer-store-info col-12 mb-4 mb-lg-0">
            <div className="logo">
              <Link href="/">
                <Image
                  src="/assets/images/logo-white.png"
                  width={112}
                  height={28}
                  alt="Uomo"
                  className="logo__image d-block"
                />
              </Link>
            </div>
            {/* <!-- /.logo --> */}
            <p className="footer-address">
              1418 River Drive, Suite 35 Cottonhall, CA 9622 United States
            </p>

            <p className="m-0">
              <strong className="fw-medium">sale@uomo.com</strong>
            </p>
            <p>
              <strong className="fw-medium">+1 246-345-0695</strong>
            </p>

            <ul className="social-links list-unstyled d-flex flex-wrap mb-0">
              {socialLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="footer__social-link d-block text-white"
                  >
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
          {/* <!-- /.footer-column --> */}

          <div className="footer-column footer-menu mb-4 mb-lg-0">
            <h6 className="sub-menu__title text-uppercase">Company</h6>
            <ul className="sub-menu__list list-unstyled">
              {footerLinks1.map((elm, i) => (
                <li key={i} className="sub-menu__item">
                  <Link
                    href={elm.href}
                    className="menu-link menu-link_us-s text-white"
                  >
                    {elm.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* <!-- /.footer-column --> */}

          <div className="footer-column footer-menu mb-4 mb-lg-0">
            <h6 className="sub-menu__title text-uppercase">Shop</h6>
            <ul className="sub-menu__list list-unstyled">
              {footerLinks2.map((elm, i) => (
                <li key={i} className="sub-menu__item">
                  <Link
                    href={elm.href}
                    className="menu-link menu-link_us-s text-white"
                  >
                    {elm.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* <!-- /.footer-column --> */}

          <div className="footer-column footer-menu mb-4 mb-lg-0">
            <h6 className="sub-menu__title text-uppercase">Help</h6>
            <ul className="sub-menu__list list-unstyled">
              {footerLinks3.map((elm, i) => (
                <li key={i} className="sub-menu__item">
                  <Link
                    href={elm.href}
                    className="menu-link menu-link_us-s text-white"
                  >
                    {elm.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* <!-- /.footer-column --> */}

          <div className="footer-column footer-newsletter col-12 mb-4 mb-lg-0">
            <h6 className="sub-menu__title text-uppercase">Subscribe</h6>
            <p>
              Be the first to get the latest news about trends, promotions, and
              much more!
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="footer-newsletter__form position-relative bg-body"
            >
              <input
                className="form-control border-white"
                type="email"
                name="email"
                placeholder="Your email address"
              />
              <input
                className="btn-link fw-medium bg-white position-absolute top-0 end-0 h-100"
                type="submit"
                defaultValue="JOIN"
              />
            </form>

            <div className="mt-4 pt-3 d-flex align-items-center justify-content-around gap-3 flex-wrap">
              <a
                href="https://www.apple.com/app-store/"
                target="_blank"
                className="app-download-link no-bg text-white"
              >
                <svg
                  width="28"
                  height="33"
                  viewBox="0 0 28 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27.207 23.7305C26.0547 23.3789 25.0195 22.5586 24.1211 21.2695C23.2227 19.9805 22.7734 18.5156 22.7734 16.9141C22.7734 15.4297 23.2031 14.082 24.043 12.8711C24.5117 12.1875 25.2539 11.4258 26.2695 10.5664C25.6055 9.74609 24.9219 9.08203 24.2383 8.61328C23.0273 7.77344 21.6406 7.34375 20.0781 7.34375C19.1211 7.34375 17.9883 7.57812 16.6992 8.00781C15.4102 8.45703 14.4727 8.67188 13.9063 8.67188C13.457 8.67188 12.5586 8.47656 11.2109 8.08594C9.84375 7.69531 8.71094 7.5 7.75391 7.5C5.50781 7.5 3.67188 8.4375 2.20703 10.3125C0.742188 12.207 0 14.6289 0 17.6172C0 20.8203 0.976563 24.082 2.87109 27.4414C4.80469 30.8008 6.73828 32.5 8.75 32.5C9.39453 32.5 10.2539 32.2852 11.3281 31.8359C12.3828 31.4063 13.3203 31.1914 14.1016 31.1914C14.9023 31.1914 15.8984 31.3867 17.0508 31.8164C18.2227 32.2266 19.1211 32.4414 19.7852 32.4414C21.4453 32.4414 23.125 31.1719 24.8047 28.6133C25.9375 26.9141 26.7188 25.2734 27.207 23.7305ZM19.8633 0.820312C19.8633 0.683593 19.8438 0.566405 19.8438 0.429687C19.8242 0.312499 19.7852 0.17578 19.7461 -2.38419e-06C17.4805 0.527342 15.8398 1.48437 14.8633 2.89062C13.8867 4.29687 13.3789 5.97656 13.3398 7.91015C14.2578 7.83203 14.9219 7.71484 15.3711 7.57812C16.0742 7.34375 16.7773 6.875 17.4805 6.17187C18.3008 5.35156 18.9063 4.45312 19.2969 3.47656C19.668 2.51953 19.8633 1.62109 19.8633 0.820312Z"
                    fill="#fff"
                  />
                </svg>
                <span className="app-download-text">
                  <span>Download on the</span>
                  <strong>Apple Store</strong>
                </span>
              </a>
              <a
                href="https://play.google.com/store/apps"
                target="_blank"
                className="app-download-link no-bg text-white"
              >
                <svg
                  width="28"
                  height="31"
                  viewBox="0 0 28 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.043 14.5195L5.09375 1.51172L21.5586 11.0039L18.043 14.5195ZM1.75391 0.75L16.7539 15.75L1.75391 30.75C0.992188 30.3984 0.464844 29.6367 0.464844 28.6992V2.85938C0.464844 1.92188 0.992188 1.16016 1.75391 0.75ZM26.6562 13.9922C27.7695 14.8125 27.7695 16.7461 26.7148 17.5664L23.1992 19.5586L19.332 15.75L23.1992 12L26.6562 13.9922ZM5.09375 29.9883L18.043 17.0391L21.5586 20.5547L5.09375 29.9883Z"
                    fill="#fff"
                  />
                </svg>
                <span className="app-download-text">
                  <span>Get it on</span>
                  <strong>Google Play</strong>
                </span>
              </a>
            </div>
          </div>
          {/* <!-- /.footer-column --> */}
        </div>
        {/* <!-- /.row-cols-5 --> */}
      </div>
      {/* <!-- /.footer-middle container --> */}

      <div
        className="footer-bottom container"
        style={{ borderTopColor: "rgba(255, 255, 255, 0.1)" }}
      >
        <div className="d-block d-md-flex align-items-center">
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
                className="form-select form-select-sm bg-transparent border-0 color-white"
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
                className="form-select form-select-sm bg-transparent border-0 color-white"
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
