"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  footerLinks1,
  footerLinks2,
  footerLinks3,
  socialLinks,
} from "@/data/footer";

export default function Footer13() {
  return (
    <footer
      id="footer"
      className="footer footer_type_2 theme-bg-color text-white"
    >
      <div className="footer-top container">
        <div className="block-newsletter">
          <h3 className="block__title text-white">
            DON'T MISS THE CHANGE TO GET 40% OFF
          </h3>
          <p>Get the latest products and news update daily in fastest.</p>
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
              className="btn btn-secondary fw-medium theme-bg-color-secondary"
              type="submit"
            >
              JOIN
            </button>
          </form>
        </div>
      </div>
      {/* <!-- /.footer-top container --> */}

      <div className="footer-middle container">
        <div className="row row-cols-lg-5 row-cols-2">
          <div className="footer-column footer-store-info col-12 mb-4 mb-lg-0">
            <div className="logo">
              <Link href="/">
                <Image
                  src="/assets/images/logo-white-yellow.png"
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
            <h6 className="sub-menu__title text-uppercase text-white">
              Company
            </h6>
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
            <h6 className="sub-menu__title text-uppercase text-white">Shop</h6>
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
            <h6 className="sub-menu__title text-uppercase text-white">Help</h6>
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

          <div className="footer-column mb-4 mb-lg-0">
            <h6 className="sub-menu__title text-uppercase text-white">
              Opening Time
            </h6>
            <ul className="list-unstyled">
              <li>
                <span className="menu-link text-white">
                  Mon - Fri: 8AM - 9PM
                </span>
              </li>
              <li>
                <span className="menu-link text-white">Sat: 9AM - 8PM</span>
              </li>
              <li>
                <span className="menu-link text-white">Sun: Closed</span>
              </li>
            </ul>
          </div>
          {/* <!-- /.footer-column --> */}
        </div>
        {/* <!-- /.row-cols-5 --> */}
      </div>
      {/* <!-- /.footer-middle container --> */}

      <div
        className="footer-bottom border-0"
        style={{ backgroundColor: "#142965" }}
      >
        <div className="container d-md-flex align-items-center justify-content-center">
          <span className="footer-copyright mx-auto">
            ©{new Date().getFullYear()} Uomo
          </span>
        </div>
        {/* <!-- /.container d-flex align-items-center --> */}
      </div>
      {/* <!-- /.footer-bottom container --> */}
    </footer>
  );
}
