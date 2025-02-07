"use client";
import { socialLinks } from "@/data/socials";
import React from "react";

export default function Cta() {
  return (
    <div className="bg-white">
      <section className="newsletter border-top-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 text-center px-lg-5 d-flex align-items-center justify-content-center">
              <div className="pt-4 pb-4">
                <h5 className="mb-3">Stay In Touch</h5>

                <ul className="social-links list-unstyled d-flex flex-wrap mb-0 align-items-center justify-content-center">
                  {socialLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="footer__social-link d-block "
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
              </div>
            </div>
            <div className="col-lg-6 text-center px-lg-5 border-left-0 border-left-lg-1 border-top-1 border-top-lg-0">
              <div className="pt-3 pb-3 pt-xl-5 pb-xl-5"></div>
              <div className="block-newsletter">
                <h3 className="block__title">Sign up now & get 10% off</h3>
                <p>
                  Be the first to get the latest news about trends, promotions,
                  and much more!
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
                  <button className="btn btn-secondary" type="submit">
                    JOIN
                  </button>
                </form>
              </div>
              <div className="pt-3 pb-3 pt-xl-5 pb-xl-5"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
