"use client";
import Link from "next/link";

import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import { openCart } from "@/utlis/openCart";
import CartLength from "./components/CartLength";
import Image from "next/image";
import User from "./components/User";

export default function Header15() {
  const [scrollDirection, setScrollDirection] = useState("down");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 250) {
        if (currentScrollY > lastScrollY.current) {
          // Scrolling down
          setScrollDirection("down");
        } else {
          // Scrolling up
          setScrollDirection("up");
        }
      } else {
        // Below 250px
        setScrollDirection("down");
      }

      lastScrollY.current = currentScrollY;
    };

    const lastScrollY = { current: window.scrollY };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup: remove event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      id="header"
      className={`header header-fullwidth header-transparent-bg header_sticky-bg_dark ${
        scrollDirection == "up" ? "header_sticky-active" : "position-absolute"
      } `}
    >
      <div className="header-desk header-desk_type_1">
        <div className="logo">
          <Link href="/">
            <Image
              src="/assets/images/logo-white-red.png"
              width={112}
              height={28}
              alt="Uomo"
              className="logo__image d-block"
            />
          </Link>
        </div>
        {/* <!-- /.logo --> */}

        <nav className="navigation">
          <ul className="navigation__list list-unstyled d-flex">
            <Nav />
          </ul>
          {/* <!-- /.navigation__list --> */}
        </nav>
        {/* <!-- /.navigation --> */}

        <div className="header-tools d-flex align-items-center">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="header-search search-field d-none d-xxl-flex mx-4"
          >
            <button className="btn header-search__btn" type="submit">
              <svg
                className="d-block"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <use href="#icon_search" />
              </svg>
            </button>
            <input
              className="header-search__input w-100"
              type="text"
              name="search-keyword"
              placeholder="SEARCH"
            />
          </form>
          {/* <!-- /.header-search --> */}

          <div className="header-tools__item hover-container">
            <a className="header-tools__item js-open-aside" href="#">
              <User />
            </a>
          </div>

          <Link className="header-tools__item" href="/account_wishlist">
            <svg
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
            <span className="cart-amount d-block position-absolute js-cart-items-count theme-bg-color">
              <CartLength />
            </span>
          </a>
        </div>
        {/* <!-- /.header__tools --> */}
      </div>
      {/* <!-- /.header-desk header-desk_type_1 --> */}
    </header>
  );
}
