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

export default function Footer18() {
  return (
    <footer className="footer footer_type_1 dark">
      <div className="footer-top container py-0">
        <div className="service-promotion horizontal container">
          <div className="row">
            <div className="col-md-4 mb-5 mb-md-0 d-flex align-items-center justify-content-center gap-3">
              <div className="service-promotion__icon">
                <svg
                  width="52"
                  height="52"
                  viewBox="0 0 52 52"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <use href="#icon_shipping" />
                </svg>
              </div>
              <div className="service-promotion__content-wrap">
                <h3 className="service-promotion__title h6 text-uppercase text-white fw-semi-bold mb-1">
                  Fast And Free Delivery
                </h3>
                <p className="service-promotion__content text-secondary text-white fs-13 mb-0">
                  Free delivery for all orders over $140
                </p>
              </div>
            </div>
            {/* <!-- /.col-md-4 text-center--> */}

            <div className="col-md-4 mb-5 mb-md-0 d-flex align-items-center justify-content-center gap-3">
              <div className="service-promotion__icon">
                <svg
                  width="53"
                  height="52"
                  viewBox="0 0 53 52"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <use href="#icon_headphone" />
                </svg>
              </div>
              <div className="service-promotion__content-wrap">
                <h3 className="service-promotion__title h6 text-uppercase text-white fw-semi-bold mb-1">
                  24/7 Customer Support
                </h3>
                <p className="service-promotion__content text-secondary text-white fs-13 mb-0">
                  Friendly 24/7 customer support
                </p>
              </div>
            </div>
            {/* <!-- /.col-md-4 text-center--> */}

            <div className="col-md-4 mb-5 mb-md-0 d-flex align-items-center justify-content-center gap-3">
              <div className="service-promotion__icon">
                <svg
                  width="52"
                  height="52"
                  viewBox="0 0 52 52"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <use href="#icon_shield" />
                </svg>
              </div>
              <div className="service-promotion__content-wrap">
                <h3 className="service-promotion__title h6 text-uppercase text-white fw-semi-bold mb-1">
                  Money Back Guarantee
                </h3>
                <p className="service-promotion__content text-secondary text-white fs-13 mb-0">
                  We return money within 30 days
                </p>
              </div>
            </div>
            {/* <!-- /.col-md-4 text-center--> */}
          </div>
          {/* <!-- /.row --> */}
        </div>
        {/* <!-- /.service-promotion container --> */}
      </div>
      {/* <!-- /.footer-top container --> */}

      <div className="footer-middle container">
        <div className="row row-cols-lg-5 row-cols-2">
          <div className="footer-column footer-store-info col-12 mb-4 mb-lg-0">
            <div className="logo">
              <Link href="/">
                <Image
                  src="/assets/images/logo-watches-footer.png"
                  alt="Uomo"
                  width={112}
                  height={28}
                  className="logo__image d-block"
                />
              </Link>
            </div>
            {/* <!-- /.logo --> */}
            <p className="footer-address fs-13">
              1418 River Drive, Suite 35 Cottonhall, CA 9622 United States
            </p>

            <p className="m-0">
              <strong className="fw-normal fs-13">sale@uomo.com</strong>
            </p>
            <p>
              <strong className="fw-normal fs-13">+1 246-345-0695</strong>
            </p>

            <ul className="social-links list-unstyled d-flex flex-wrap mb-0">
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
          {/* <!-- /.footer-column --> */}

          <div className="footer-column footer-menu mb-4 mb-lg-0">
            <h6 className="sub-menu__title text-uppercase fw-semi-bold">
              Company
            </h6>
            <ul className="sub-menu__list list-unstyled">
              {footerLinks1.map((elm, i) => (
                <li key={i} className="sub-menu__item">
                  <Link
                    href={elm.href}
                    className="menu-link menu-link_us-s fs-13"
                  >
                    {elm.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* <!-- /.footer-column --> */}

          <div className="footer-column footer-menu mb-4 mb-lg-0">
            <h6 className="sub-menu__title text-uppercase fw-semi-bold">
              Shop
            </h6>
            <ul className="sub-menu__list list-unstyled">
              {footerLinks2.map((elm, i) => (
                <li key={i} className="sub-menu__item">
                  <Link
                    href={elm.href}
                    className="menu-link menu-link_us-s fs-13"
                  >
                    {elm.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* <!-- /.footer-column --> */}

          <div className="footer-column footer-menu mb-4 mb-lg-0">
            <h6 className="sub-menu__title text-uppercase fw-semi-bold">
              Help
            </h6>
            <ul className="sub-menu__list list-unstyled">
              {footerLinks3.map((elm, i) => (
                <li key={i} className="sub-menu__item">
                  <Link
                    href={elm.href}
                    className="menu-link menu-link_us-s fs-13"
                  >
                    {elm.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* <!-- /.footer-column --> */}

          <div className="footer-column footer-newsletter col-12 mb-4 mb-lg-0">
            <h6 className="sub-menu__title text-uppercase fw-semi-bold">
              Subscribe
            </h6>
            <p className="fs-13">
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
          </div>
          {/* <!-- /.footer-column --> */}
        </div>
        {/* <!-- /.row-cols-5 --> */}
      </div>
      {/* <!-- /.footer-middle container --> */}

      <div className="footer-bottom container">
        <div className="d-block d-md-flex align-items-center">
          <span className="footer-copyright me-auto fs-13">©2024 Uomo</span>
          <div className="footer-settings d-block d-md-flex align-items-center">
            <div className="d-flex align-items-center">
              <label
                htmlFor="footerSettingsLanguage"
                className="me-2 text-secondary fs-13 text-white"
              >
                Language
              </label>
              <select
                id="footerSettingsLanguage"
                className="form-select form-select-sm bg-transparent fs-13 border-0"
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
                className="ms-md-3 me-2 text-secondary fs-13 text-white"
              >
                Currency
              </label>
              <select
                id="footerSettingsCurrency"
                className="form-select form-select-sm bg-transparent fs-13 border-0"
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
