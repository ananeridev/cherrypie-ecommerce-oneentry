import { collectionsData } from "@/data/categories";
import React from "react";
import Link from "next/link";

export default function Collections() {
  return (
    <section className="collections-grid collections-grid_masonry gutters-20">
      <div className="h-md-100 full-width_padding-20">
        <div className="row h-md-100">
          <div className="col-lg-5 h-md-100">
            <div className="collection-grid__item position-relative h-md-100">
              <div
                className="background-img"
                style={{
                  backgroundImage: `url(${collectionsData[0].imageSrc})`,
                }}
              ></div>
              <div className="content_abs content_top content_left content_top-md content_left-md pt-2 px-2">
                <h3 className="text-uppercase mb-0">
                  {collectionsData[0].title}
                </h3>
                <p className="mb-3">
                  {collectionsData[0].productCount} Products
                </p>
                <Link
                  href="/shop-1"
                  className="btn-link default-underline text-uppercase fw-medium"
                >
                  Shop Now
                </Link>
              </div>
              {/* <!-- /.content_abs content_top content_left content_top-md content_left-md pt-2 px-2 --> */}
            </div>
          </div>
          {/* <!-- /.col-md-6 --> */}

          <div className="col-lg-7 d-flex flex-column">
            <div className="position-relative flex-grow-1">
              <div className="row h-md-100">
                {collectionsData.slice(1, 3).map((elm, i) => (
                  <Link href={"/shop-1"} key={i} className="col-md-6 h-md-100">
                    <div className="collection-grid__item h-md-100 position-relative">
                      <div
                        className="background-img"
                        style={{ backgroundImage: `url(${elm.imageSrc})` }}
                      ></div>
                      <div className="content_abs content_top content_left content_top-md content_left-md pt-2 px-2">
                        <h3 className="text-uppercase mb-0">{elm.title}</h3>
                        <p className="mb-3">{elm.productCount} Products</p>
                      </div>
                      {/* <!-- /.content_abs content_top content_left content_top-md content_left-md pt-2 px-2 --> */}
                    </div>
                    {/* <!-- /.collection-grid__item --> */}
                  </Link>
                ))}
              </div>
            </div>

            <div className="position-relative flex-grow-1 mt-lg-3 pt-lg-1">
              <div className="row h-md-100">
                {collectionsData.slice(3, 5).map((elm, i) => (
                  <Link href={"/shop-1"} key={i} className="col-md-6 h-md-100">
                    <div className="collection-grid__item h-md-100 position-relative">
                      <div
                        className="background-img"
                        style={{ backgroundImage: `url(${elm.imageSrc})` }}
                      ></div>
                      <div className="content_abs content_top content_left content_top-md content_left-md pt-2 px-2">
                        <h3 className="text-uppercase mb-0">{elm.title}</h3>
                        <p className="mb-3">{elm.productCount} Products</p>
                      </div>
                      {/* <!-- /.content_abs content_top content_left content_top-md content_left-md pt-2 px-2 --> */}
                    </div>
                    {/* <!-- /.collection-grid__item --> */}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {/* <!-- /.col-md-6 --> */}
        </div>
        {/* <!-- /.row --> */}
      </div>
      {/* <!-- /.container --> */}
    </section>
  );
}
