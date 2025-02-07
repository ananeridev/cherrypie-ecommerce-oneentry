import React from "react";
import Link from "next/link";
import { socialLinks } from "@/data/footer";

export default function Footer22() {
  return (
    <footer className="footer footer_type_1 bg-grey-f5f5f7">
      <div className="footer-middle container">
        <div className="row row-cols-lg-5 row-cols-2">
          <div className="footer-column footer-menu mb-4 mb-lg-0">
            <h6 className="sub-menu__title text-uppercase fw-semi-bold">
              My Account
            </h6>
            <ul className="sub-menu__list list-unstyled">
              <li className="sub-menu__item">
                <Link
                  href="/account_dashboard"
                  className="menu-link menu-link_us-s fs-13"
                >
                  My Account
                </Link>
              </li>
              <li className="sub-menu__item">
                <Link
                  href="/store_location"
                  className="menu-link menu-link_us-s fs-13"
                >
                  Find a Store
                </Link>
              </li>
              <li className="sub-menu__item">
                <Link
                  href="/login_register"
                  className="menu-link menu-link_us-s fs-13"
                >
                  Register
                </Link>
              </li>
            </ul>
          </div>
          {/* <!-- /.footer-column --> */}

          <div className="footer-column footer-menu mb-4 mb-lg-0">
            <h6 className="sub-menu__title text-uppercase fw-semi-bold">
              Information
            </h6>
            <ul className="sub-menu__list list-unstyled">
              <li className="sub-menu__item">
                <Link href="/about" className="menu-link menu-link_us-s">
                  About Us
                </Link>
              </li>
              <li className="sub-menu__item">
                <Link href="/blog_list1" className="menu-link menu-link_us-s">
                  Blog
                </Link>
              </li>
              <li className="sub-menu__item">
                <Link href="/contact" className="menu-link menu-link_us-s">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          {/* <!-- /.footer-column --> */}

          <div className="footer-column footer-menu mb-4 mb-lg-0">
            <h6 className="sub-menu__title text-uppercase fw-semi-bold">
              Contact Details
            </h6>
            <ul className="list-unstyled">
              <li>
                <span className="menu-link fs-13">0203 - 980 - 14 - 19</span>
              </li>
              <li>
                <span className="menu-link fs-13">0203 - 980 - 14 - 19</span>
              </li>
              <li>
                <span className="menu-link fs-13">venedor@gmail.com</span>
              </li>
            </ul>
          </div>
          {/* <!-- /.footer-column --> */}

          <div className="footer-column footer-menu mb-4 mb-lg-0">
            <h6 className="sub-menu__title text-uppercase fw-semi-bold">
              Follow Us
            </h6>
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
        </div>
        {/* <!-- /.row-cols-5 --> */}
      </div>
      {/* <!-- /.footer-middle container --> */}
    </footer>
  );
}
