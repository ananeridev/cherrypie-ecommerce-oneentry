import React from "react";
import Link from "next/link";

export default function Products4() {
  return (
    <section className="grid-banner container mb-3">
      <div className="row">
        <div className="col-md-6">
          <div className="grid-banner__item grid-banner__item_rect position-relative mb-3">
            <div
              className="background-img"
              style={{ backgroundImage: "url(/assets/images/banner_1.jpg)" }}
            ></div>
            <div className="content_abs content_bottom content_left content_bottom-lg content_left-lg">
              <h6 className="text-uppercase text-white fw-medium mb-3">
                Starting At $19
              </h6>
              <h3 className="text-white mb-3">Women's T-Shirts</h3>
              <Link
                href="/shop-1"
                className="btn-link default-underline text-uppercase text-white fw-medium"
              >
                Shop Now
              </Link>
            </div>
            {/* <!-- /.content_abs content_bottom content_left content_bottom-md content_left-md --> */}
          </div>
        </div>
        {/* <!-- /.col-md-6 --> */}

        <div className="col-md-6">
          <div className="grid-banner__item grid-banner__item_rect position-relative mb-3">
            <div
              className="background-img"
              style={{ backgroundImage: "url(/assets/images/banner_2.jpg)" }}
            ></div>
            <div className="content_abs content_bottom content_left content_bottom-lg content_left-lg">
              <h6 className="text-uppercase fw-medium mb-3">Starting At $39</h6>
              <h3 className="mb-3">Men's Sportswear</h3>
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
      </div>
      {/* <!-- /.row --> */}
    </section>
  );
}
