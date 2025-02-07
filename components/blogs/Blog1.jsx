"use client";
import Pagination1 from "../common/Pagination1";
import { blogs12, categories } from "@/data/blogs";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Blog1() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [filteredBlogs, setFilteredBlogs] = useState(blogs12);
  useEffect(() => {
    if (activeCategory == "ALL") {
      setFilteredBlogs(blogs12);
    } else {
      setFilteredBlogs([
        ...blogs12.filter((elm) => elm.category.includes(activeCategory)),
      ]);
    }
  }, [activeCategory]);

  return (
    <>
      <section className="blog-page-title mb-4 mb-xl-5">
        <div className="title-bg">
          <Image
            loading="lazy"
            src="/assets/images/blog_title_bg.jpg"
            width="1780"
            height="420"
            alt="image"
          />
        </div>
        <div className="container">
          <h2 className="page-title">The Blog</h2>
          <div className="blog__filter">
            {categories.map((elm, i) => (
              <a
                onClick={() => setActiveCategory(elm)}
                key={i}
                className={`menu-link menu-link_us-s ${
                  activeCategory == elm ? "menu-link_active" : ""
                }`}
              >
                {elm}
              </a>
            ))}
          </div>
        </div>
      </section>
      <section className="blog-page container">
        <h2 className="d-none">The Blog</h2>
        <div className="blog-grid row row-cols-1 row-cols-md-2">
          {filteredBlogs.map((elm, i) => (
            <div key={i} className="blog-grid__item">
              <div className="blog-grid__item-image">
                <Image
                  loading="lazy"
                  className="h-auto"
                  src={elm.imgSrc}
                  width="690"
                  height="500"
                  alt="image"
                />
              </div>
              <div className="blog-grid__item-detail">
                <div className="blog-grid__item-meta">
                  <span className="blog-grid__item-meta__author">
                    By {elm.author}
                  </span>
                  <span className="blog-grid__item-meta__date">{elm.date}</span>
                </div>
                <div className="blog-grid__item-title">
                  <Link href={`/blog_single/${elm.id}`}>{elm.title}</Link>
                </div>
                <div className="blog-grid__item-content">
                  <p>{elm.content}</p>
                  <Link
                    href={`/blog_single/${elm.id}`}
                    className="readmore-link"
                  >
                    Continue Reading
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="mb-5 text-center fw-medium">SHOWING 36 of 497 items</p>
        <Pagination1 />

        <div className="text-center">
          <a className="btn-link btn-link_lg text-uppercase fw-medium" href="#">
            Show More
          </a>
        </div>
      </section>
    </>
  );
}
