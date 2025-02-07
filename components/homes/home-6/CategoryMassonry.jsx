import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function CategoryMassonry() {
  return (
    <section className="category-masonry container">
      <div className="row">
        <div className="col-lg-6 px-4">
          <div className="category-masonry__item">
            <h2 className="category-masonry__title fw-normal mb-0">
              New Season
              <br />
              and New Trends
            </h2>
          </div>
          <div className="pb-4 mb-4 pb-xl-5 mb-xl-5"></div>
          <div className="category-masonry__item">
            <div className="category-masonry__item-image pb-1 mb-4">
              <Image
                loading="lazy"
                className="h-auto"
                src="/assets/images/home/demo6/banner1.jpg"
                width="570"
                height="500"
                alt="image"
              />
            </div>
            <h2>Women’s Collection</h2>
            <Link
              href="/shop-1"
              className="btn-link btn-link_md default-underline text-uppercase fw-medium"
            >
              Discover Now
            </Link>
            <div className="category-masonry__item-category fw-medium">
              WOMEN LOOKBOOK
            </div>
          </div>
          <div className="pb-4 mb-4 pb-xl-5 mb-xl-5 pt-4 mt-4 pt-xl-5 mt-xl-5"></div>
          <div className="category-masonry__item">
            <div className="category-masonry__item-image pb-1 mb-4">
              <Image
                loading="lazy"
                className="h-auto"
                src="/assets/images/home/demo6/banner2.jpg"
                width="672"
                height="480"
                alt="image"
              />
            </div>
            <h2>Newest Women Clothes</h2>
            <Link
              href="/shop-1"
              className="btn-link btn-link_md default-underline text-uppercase fw-medium"
            >
              Discover Now
            </Link>
            <div className="category-masonry__item-category fw-medium">
              NEW ARRIVAL
            </div>
          </div>
          <div className="pb-4 mb-4 pb-xl-5 mb-xl-5 pt-4 mt-4 pt-xl-5 mt-xl-5"></div>
          <div className="category-masonry__item">
            <div className="category-masonry__item-image pb-1 mb-4">
              <Image
                loading="lazy"
                className="h-auto"
                src="/assets/images/home/demo6/banner3.jpg"
                width="570"
                height="570"
                alt="image"
              />
            </div>
            <h2>Slouchy Colorblock Tunic Sweater</h2>
            <Link
              href="/shop-1"
              className="btn-link btn-link_md default-underline text-uppercase fw-medium"
            >
              Discover Now
            </Link>
            <div className="category-masonry__item-category fw-medium">
              SWEATSHIRT
            </div>
          </div>
          <div className="pb-4 mb-4 pb-xl-5 mb-xl-5 pt-4 mt-4 pt-xl-5 mt-xl-5"></div>
          <div className="category-masonry__item">
            <div className="category-masonry__item-image pb-1 mb-4">
              <Image
                loading="lazy"
                className="h-auto"
                src="/assets/images/home/demo6/banner4.jpg"
                width="450"
                height="550"
                alt="image"
              />
            </div>
            <h2>Jackets & Coats</h2>
            <Link
              href="/shop-1"
              className="btn-link btn-link_md default-underline text-uppercase fw-medium"
            >
              Discover Now
            </Link>
            <div className="category-masonry__item-category fw-medium">
              BE WELL DRESSED IN
            </div>
          </div>
          <div className="pb-4 mb-4 pb-xl-5 mb-xl-5 pt-4 mt-4 pt-xl-5 mt-xl-5"></div>
        </div>
        <div className="col-lg-6 px-4 d-lg-flex flex-lg-column align-items-lg-end">
          <div className="category-masonry__item">
            <div className="category-masonry__item-image pb-1 mb-4">
              <Image
                loading="lazy"
                className="h-auto"
                src="/assets/images/home/demo6/banner5.jpg"
                width="570"
                height="631"
                alt="image"
              />
            </div>
            <h2>Men’s Spring Collection 2020</h2>
            <Link
              href="/shop-1"
              className="btn-link btn-link_md default-underline text-uppercase fw-medium"
            >
              Discover Now
            </Link>
            <div className="category-masonry__item-category fw-medium">
              MEN COLLECTION
            </div>
          </div>
          <div className="pb-4 mb-4 pb-xl-5 mb-xl-5 pt-4 mt-4 pt-xl-5 mt-xl-5"></div>
          <div className="category-masonry__item">
            <div className="category-masonry__item-image pb-1 mb-4">
              <Image
                loading="lazy"
                className="h-auto"
                src="/assets/images/home/demo6/banner6.jpg"
                width="450"
                height="550"
                alt="image"
              />
            </div>
            <h2>Fresh Dresses</h2>
            <Link
              href="/shop-1"
              className="btn-link btn-link_md default-underline text-uppercase fw-medium"
            >
              Discover Now
            </Link>
            <div className="category-masonry__item-category fw-medium">
              DRESSES
            </div>
          </div>
          <div className="pb-4 mb-4 pb-xl-5 mb-xl-5 pt-4 mt-4 pt-xl-5 mt-xl-5"></div>
          <div className="category-masonry__item">
            <div className="category-masonry__item-image pb-1 mb-4">
              <Image
                loading="lazy"
                className="h-auto"
                src="/assets/images/home/demo6/banner7.jpg"
                width="570"
                height="450"
                alt="image"
              />
            </div>
            <h2>Shirt in Vintage Plaid</h2>
            <Link
              href="/shop-1"
              className="btn-link btn-link_md default-underline text-uppercase fw-medium"
            >
              Discover Now
            </Link>
            <div className="category-masonry__item-category fw-medium">
              FIND YOUR FIT
            </div>
          </div>
          <div className="pb-4 mb-4 pb-xl-5 mb-xl-5 pt-4 mt-4 pt-xl-5 mt-xl-5"></div>
          <div className="pb-0 mb-0 pb-xl-5 mb-xl-5 pt-0 mt-0 pt-xl-5 mt-xl-4"></div>
          <div className="category-masonry__item">
            <div className="category-masonry__item-image pb-1 mb-4">
              <Image
                loading="lazy"
                className="h-auto"
                src="/assets/images/home/demo6/banner8.jpg"
                width="450"
                height="450"
                alt="image"
              />
            </div>
            <h2>Sleeve Bags</h2>
            <Link
              href="/shop-1"
              className="btn-link btn-link_md default-underline text-uppercase fw-medium"
            >
              Discover Now
            </Link>
            <div className="category-masonry__item-category fw-medium">
              ACCESSORIES
            </div>
          </div>
          <div className="pb-4 mb-4 pb-xl-5 mb-xl-5 pt-4 mt-4 pt-xl-5 mt-xl-5"></div>
        </div>
      </div>
    </section>
  );
}
