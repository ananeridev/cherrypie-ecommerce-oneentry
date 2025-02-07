import React from "react";
import Link from "next/link";

export default function Collections() {
  return (
    <section
      className="collections-grid collections-grid_masonry"
      id="section-collections-grid_masonry"
    >
      <div className="container h-md-100">
        <div className="row h-md-100">
          <div className="col-lg-6 h-md-100">
            <div className="collection-grid__item position-relative h-md-100">
              <div
                className="background-img"
                style={{
                  backgroundImage: "url(/assets/images/collection_grid_1.jpg)",
                }}
              ></div>
              <div className="content_abs content_bottom content_left content_bottom-md content_left-md">
                <p className="text-uppercase mb-1">Hot List</p>
                <h3 className="text-uppercase">
                  <strong>Women</strong> Collection
                </h3>
                <Link
                  href="/shop-1"
                  className="btn-link default-underline text-uppercase fw-medium"
                >
                  Shop Now
                </Link>
              </div>
              {/* <!-- /.content_abs content_bottom content_left content_bottom-md content_left-md --> */}
            </div>
          </div>
          {/* <!-- /.col-md-6 --> */}

          <div className="col-lg-6 d-flex flex-column">
            <div className="collection-grid__item position-relative flex-grow-1 mb-lg-4">
              <div
                className="background-img"
                style={{
                  backgroundImage: "url(/assets/images/collection_grid_2.jpg)",
                }}
              ></div>
              <div className="content_abs content_bottom content_left content_bottom-md content_left-md">
                <p className="text-uppercase mb-1">Hot List</p>
                <h3 className="text-uppercase">
                  <strong>Men</strong> Collection
                </h3>
                <Link
                  href="/shop-1"
                  className="btn-link default-underline text-uppercase fw-medium"
                >
                  Shop Now
                </Link>
              </div>
              {/* <!-- /.content_abs content_bottom content_left content_bottom-md content_left-md --> */}
            </div>
            <div className="position-relative flex-grow-1 mt-lg-1">
              <div className="row h-md-100">
                <div className="col-md-6 h-md-100">
                  <div className="collection-grid__item h-md-100 position-relative">
                    <div
                      className="background-img"
                      style={{
                        backgroundImage:
                          "url(/assets/images/collection_grid_3.jpg)",
                      }}
                    ></div>
                    <div className="content_abs content_bottom content_left content_bottom-md content_left-md">
                      <p className="text-uppercase mb-1">Hot List</p>
                      <h3 className="text-uppercase">
                        <strong>Kids</strong> Collection
                      </h3>
                      <Link
                        href="/shop-1"
                        className="btn-link default-underline text-uppercase fw-medium"
                      >
                        Shop Now
                      </Link>
                    </div>
                    {/* <!-- /.content_abs content_bottom content_left content_bottom-md content_left-md --> */}
                  </div>
                  {/* <!-- /.collection-grid__item --> */}
                </div>

                <div className="col-md-6 h-md-100">
                  <div className="collection-grid__item h-md-100 position-relative">
                    <div
                      className="background-img"
                      style={{ backgroundColor: "#f5e6e0" }}
                    ></div>
                    <div className="content_abs content_bottom content_left content_bottom-md content_left-md">
                      <h3 className="text-uppercase">
                        <strong>E-Gift</strong> Cards
                      </h3>
                      <p className="mb-1">
                        Surprise someone with the gift they
                        <br />
                        really want.
                      </p>
                      <Link
                        href="/shop-1"
                        className="btn-link default-underline text-uppercase fw-medium"
                      >
                        Shop Now
                      </Link>
                    </div>
                    {/* <!-- /.content_abs content_bottom content_left content_bottom-md content_left-md --> */}
                  </div>
                  {/* <!-- /.collection-grid__item --> */}
                </div>
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
