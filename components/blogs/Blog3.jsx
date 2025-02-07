"use client";
import Pagination2 from "../common/Pagination2";
import { blogs14, categories } from "@/data/blogs";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Blog3() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [filteredBlogs, setFilteredBlogs] = useState(blogs14);
  useEffect(() => {
    if (activeCategory == "ALL") {
      setFilteredBlogs(blogs14);
    } else {
      setFilteredBlogs([
        ...blogs14.filter((elm) => elm.category.includes(activeCategory)),
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
        <div className="blog-list">
          {filteredBlogs.map((elm, i) => (
            <div key={i} className="blog-list__item">
              <div className="blog-list__item-image">
                <Image
                  loading="lazy"
                  className="h-auto"
                  src={elm.imgSrc}
                  width="680"
                  height="493"
                  alt="image"
                />
              </div>
              <div className="blog-list__item-detail">
                <div className="blog-list__item-meta">
                  <span className="blog-list__item-meta__author">
                    By {elm.author}
                  </span>
                  <span className="blog-list__item-meta__date">{elm.date}</span>
                </div>
                <div className="blog-list__item-title">
                  <Link href={`/blog_single/${elm.id}`}>{elm.title}</Link>
                </div>
                <div className="blog-list__item-content">
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

        <Pagination2 />
      </section>{" "}
    </>
  );
}
