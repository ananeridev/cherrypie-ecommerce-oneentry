import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function SiteMapModal() {
  return (
    <div className="modal fade" id="siteMap" tabIndex="-1">
      <div className="modal-dialog modal-fullscreen">
        <div className="sitemap d-flex">
          <div className="w-50 d-none d-lg-block">
            <Image
              loading="lazy"
              src="/assets/images/nav-bg.jpg"
              alt="Site map"
              className="sitemap__bg"
              width={960}
              height={950}
            />
          </div>
          {/* <!-- /.sitemap__bg w-50 d-none d-lg-block --> */}
          <div className="sitemap__links w-50 flex-grow-1">
            <div className="modal-content">
              <div className="modal-header">
                <ul className="nav nav-pills" id="pills-tab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link active rounded-1 text-uppercase"
                      id="pills-item-1-tab"
                      data-bs-toggle="pill"
                      href="#pills-item-1"
                      role="tab"
                      aria-controls="pills-item-1"
                      aria-selected="true"
                    >
                      WOMEN
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link rounded-1 text-uppercase"
                      id="pills-item-2-tab"
                      data-bs-toggle="pill"
                      href="#pills-item-2"
                      role="tab"
                      aria-controls="pills-item-2"
                      aria-selected="false"
                    >
                      MEN
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link rounded-1 text-uppercase"
                      id="pills-item-3-tab"
                      data-bs-toggle="pill"
                      href="#pills-item-3"
                      role="tab"
                      aria-controls="pills-item-3"
                      aria-selected="false"
                    >
                      KIDS
                    </a>
                  </li>
                </ul>
                <button
                  type="button"
                  className="btn-close-lg"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>

              <div className="modal-body">
                <div className="tab-content col-12" id="pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="pills-item-1"
                    role="tabpanel"
                    aria-labelledby="pills-item-1-tab"
                  >
                    <div className="row">
                      <ul
                        className="nav nav-tabs list-unstyled col-5 d-block"
                        id="myTab"
                        role="tablist"
                      >
                        <li
                          className="nav-item position-relative"
                          role="presentation"
                        >
                          <a
                            className="nav-link nav-link_rline active"
                            id="tab-item-1-tab"
                            data-bs-toggle="tab"
                            href="#tab-item-1"
                            role="tab"
                            aria-controls="tab-item-1"
                            aria-selected="true"
                          >
                            <span className="rline-content">WOMEN</span>
                          </a>
                        </li>
                        <li
                          className="nav-item position-relative"
                          role="presentation"
                        >
                          <a
                            className="nav-link nav-link_rline"
                            id="tab-item-2-tab"
                            data-bs-toggle="tab"
                            href="#tab-item-2"
                            role="tab"
                            aria-controls="tab-item-2"
                            aria-selected="false"
                          >
                            <span className="rline-content">MAN</span>
                          </a>
                        </li>
                        <li
                          className="nav-item position-relative"
                          role="presentation"
                        >
                          <a
                            className="nav-link nav-link_rline"
                            id="tab-item-3-tab"
                            data-bs-toggle="tab"
                            href="#tab-item-3"
                            role="tab"
                            aria-controls="tab-item-3"
                            aria-selected="false"
                          >
                            <span className="rline-content">KIDS</span>
                          </a>
                        </li>
                        <li
                          className="nav-item position-relative"
                          role="presentation"
                        >
                          <a className="nav-link nav-link_rline" href="#">
                            <span className="rline-content">HOME</span>
                          </a>
                        </li>
                        <li
                          className="nav-item position-relative"
                          role="presentation"
                        >
                          <a className="nav-link nav-link_rline" href="#">
                            <span className="rline-content">COLLECTION</span>
                          </a>
                        </li>
                        <li
                          className="nav-item position-relative"
                          role="presentation"
                        >
                          <a
                            className="nav-link nav-link_rline text-red"
                            href="#"
                          >
                            SALE UP TO 50% OFF
                          </a>
                        </li>
                        <li
                          className="nav-item position-relative"
                          role="presentation"
                        >
                          <a className="nav-link nav-link_rline" href="#">
                            <span className="rline-content">NEW</span>
                          </a>
                        </li>
                        <li
                          className="nav-item position-relative"
                          role="presentation"
                        >
                          <a className="nav-link nav-link_rline" href="#">
                            <span className="rline-content">SHOES</span>
                          </a>
                        </li>
                        <li
                          className="nav-item position-relative"
                          role="presentation"
                        >
                          <a className="nav-link nav-link_rline" href="#">
                            <span className="rline-content">ACCESSORIES</span>
                          </a>
                        </li>
                        <li
                          className="nav-item position-relative"
                          role="presentation"
                        >
                          <a className="nav-link nav-link_rline" href="#">
                            <span className="rline-content">JOIN LIFE</span>
                          </a>
                        </li>
                        <li
                          className="nav-item position-relative"
                          role="presentation"
                        >
                          <a className="nav-link nav-link_rline" href="#">
                            <span className="rline-content">#UOMOSTYLE</span>
                          </a>
                        </li>
                      </ul>

                      <div className="tab-content col-7" id="myTabContent">
                        <div
                          className="tab-pane fade show active"
                          id="tab-item-1"
                          role="tabpanel"
                          aria-labelledby="tab-item-1-tab"
                        >
                          <ul className="sub-menu list-unstyled">
                            <li className="sub-menu__item">
                              <a href="#" className="menu-link menu-link_us-s">
                                New
                              </a>
                            </li>
                            <li className="sub-menu__item">
                              <a href="#" className="menu-link menu-link_us-s">
                                Best Sellers
                              </a>
                            </li>
                            <li className="sub-menu__item">
                              <a href="#" className="menu-link menu-link_us-s">
                                Collaborations®
                              </a>
                            </li>
                            <li className="sub-menu__item">
                              <a href="#" className="menu-link menu-link_us-s">
                                Sets
                              </a>
                            </li>
                            <li className="sub-menu__item">
                              <a href="#" className="menu-link menu-link_us-s">
                                Denim
                              </a>
                            </li>
                            <li className="sub-menu__item">
                              <a href="#" className="menu-link menu-link_us-s">
                                Jackets & Coats
                              </a>
                            </li>
                            <li className="sub-menu__item">
                              <a href="#" className="menu-link menu-link_us-s">
                                Overshirts
                              </a>
                            </li>
                            <li className="sub-menu__item">
                              <a href="#" className="menu-link menu-link_us-s">
                                Trousers
                              </a>
                            </li>
                            <li className="sub-menu__item">
                              <a href="#" className="menu-link menu-link_us-s">
                                Jeans
                              </a>
                            </li>
                            <li className="sub-menu__item">
                              <a href="#" className="menu-link menu-link_us-s">
                                Dresses
                              </a>
                            </li>
                            <li className="sub-menu__item">
                              <a href="#" className="menu-link menu-link_us-s">
                                Sweatshirts and Hoodies
                              </a>
                            </li>
                            <li className="sub-menu__item">
                              <a href="#" className="menu-link menu-link_us-s">
                                T-shirts & Tops
                              </a>
                            </li>
                            <li className="sub-menu__item">
                              <a href="#" className="menu-link menu-link_us-s">
                                Shirts & Blouses
                              </a>
                            </li>
                            <li className="sub-menu__item">
                              <a href="#" className="menu-link menu-link_us-s">
                                Shorts and Bermudas
                              </a>
                            </li>
                            <li className="sub-menu__item">
                              <a href="#" className="menu-link menu-link_us-s">
                                Shoes
                              </a>
                            </li>
                            <li className="sub-menu__item">
                              <Link
                                href="/shop-3"
                                className="menu-link menu-link_us-s"
                              >
                                Accessories
                              </Link>
                            </li>
                            <li className="sub-menu__item">
                              <a href="#" className="menu-link menu-link_us-s">
                                Bags
                              </a>
                            </li>
                            <li className="sub-menu__item">
                              <Link
                                href="/about"
                                className="menu-link menu-link_us-s"
                              >
                                Gift Card
                              </Link>
                            </li>
                          </ul>
                          {/* <!-- /.sub-menu --> */}
                        </div>
                        <div
                          className="tab-pane fade"
                          id="tab-item-2"
                          role="tabpanel"
                          aria-labelledby="tab-item-2-tab"
                        >
                          <ul className="sub-menu list-unstyled">
                            <li className="sub-menu__item">
                              <a href="#" className="menu-link menu-link_us-s">
                                Best Sellers
                              </a>
                            </li>
                            <li className="sub-menu__item">
                              <a href="#" className="menu-link menu-link_us-s">
                                New
                              </a>
                            </li>
                            <li className="sub-menu__item">
                              <a href="#" className="menu-link menu-link_us-s">
                                Sets
                              </a>
                            </li>
                            <li className="sub-menu__item">
                              <a href="#" className="menu-link menu-link_us-s">
                                Denim
                              </a>
                            </li>
                            <li className="sub-menu__item">
                              <a href="#" className="menu-link menu-link_us-s">
                                Collaborations®
                              </a>
                            </li>
                            <li className="sub-menu__item">
                              <a href="#" className="menu-link menu-link_us-s">
                                Trousers
                              </a>
                            </li>
                            <li className="sub-menu__item">
                              <a href="#" className="menu-link menu-link_us-s">
                                Jackets & Coats
                              </a>
                            </li>
                            <li className="sub-menu__item">
                              <a href="#" className="menu-link menu-link_us-s">
                                Overshirts
                              </a>
                            </li>
                            <li className="sub-menu__item">
                              <a href="#" className="menu-link menu-link_us-s">
                                Dresses
                              </a>
                            </li>
                            <li className="sub-menu__item">
                              <a href="#" className="menu-link menu-link_us-s">
                                Jeans
                              </a>
                            </li>
                            <li className="sub-menu__item">
                              <a href="#" className="menu-link menu-link_us-s">
                                Sweatshirts and Hoodies
                              </a>
                            </li>
                            <li className="sub-menu__item">
                              <Link
                                href="/about"
                                className="menu-link menu-link_us-s"
                              >
                                Gift Card
                              </Link>
                            </li>
                            <li className="sub-menu__item">
                              <a href="#" className="menu-link menu-link_us-s">
                                Shirts & Blouses
                              </a>
                            </li>
                            <li className="sub-menu__item">
                              <a href="#" className="menu-link menu-link_us-s">
                                T-shirts & Tops
                              </a>
                            </li>
                            <li className="sub-menu__item">
                              <a href="#" className="menu-link menu-link_us-s">
                                Shorts and Bermudas
                              </a>
                            </li>
                            <li className="sub-menu__item">
                              <Link
                                href="/shop-3"
                                className="menu-link menu-link_us-s"
                              >
                                Accessories
                              </Link>
                            </li>
                            <li className="sub-menu__item">
                              <a href="#" className="menu-link menu-link_us-s">
                                Shoes
                              </a>
                            </li>
                            <li className="sub-menu__item">
                              <a href="#" className="menu-link menu-link_us-s">
                                Bags
                              </a>
                            </li>
                          </ul>
                          {/* <!-- /.sub-menu --> */}
                        </div>
                        <div
                          className="tab-pane fade"
                          id="tab-item-3"
                          role="tabpanel"
                          aria-labelledby="tab-item-3-tab"
                        >
                          <ul className="sub-menu list-unstyled">
                            <li className="sub-menu__item">
                              <Link
                                href="/about"
                                className="menu-link menu-link_us-s"
                              >
                                Gift Card
                              </Link>
                            </li>
                            <li className="sub-menu__item">
                              <a href="#" className="menu-link menu-link_us-s">
                                Collaborations®
                              </a>
                            </li>
                            <li className="sub-menu__item">
                              <a href="#" className="menu-link menu-link_us-s">
                                Sets
                              </a>
                            </li>
                            <li className="sub-menu__item">
                              <a href="#" className="menu-link menu-link_us-s">
                                Denim
                              </a>
                            </li>
                            <li className="sub-menu__item">
                              <a href="#" className="menu-link menu-link_us-s">
                                New
                              </a>
                            </li>
                            <li className="sub-menu__item">
                              <a href="#" className="menu-link menu-link_us-s">
                                Best Sellers
                              </a>
                            </li>
                            <li className="sub-menu__item">
                              <a href="#" className="menu-link menu-link_us-s">
                                Overshirts
                              </a>
                            </li>
                            <li className="sub-menu__item">
                              <a href="#" className="menu-link menu-link_us-s">
                                Jackets & Coats
                              </a>
                            </li>
                            <li className="sub-menu__item">
                              <a href="#" className="menu-link menu-link_us-s">
                                Jeans
                              </a>
                            </li>
                            <li className="sub-menu__item">
                              <a href="#" className="menu-link menu-link_us-s">
                                Trousers
                              </a>
                            </li>
                            <li className="sub-menu__item">
                              <a href="#" className="menu-link menu-link_us-s">
                                Shorts and Bermudas
                              </a>
                            </li>
                            <li className="sub-menu__item">
                              <a href="#" className="menu-link menu-link_us-s">
                                Shoes
                              </a>
                            </li>
                            <li className="sub-menu__item">
                              <Link
                                href="/shop-3"
                                className="menu-link menu-link_us-s"
                              >
                                Accessories
                              </Link>
                            </li>
                            <li className="sub-menu__item">
                              <a href="#" className="menu-link menu-link_us-s">
                                Dresses
                              </a>
                            </li>
                            <li className="sub-menu__item">
                              <a href="#" className="menu-link menu-link_us-s">
                                Bags
                              </a>
                            </li>
                          </ul>
                          {/* <!-- /.sub-menu --> */}
                        </div>
                      </div>
                    </div>
                    {/* <!-- /.row --> */}
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-item-2"
                    role="tabpanel"
                    aria-labelledby="pills-item-2-tab"
                  >
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                    Elementum lectus a porta commodo suspendisse arcu, aliquam
                    lectus faucibus.
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-item-3"
                    role="tabpanel"
                    aria-labelledby="pills-item-3-tab"
                  >
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo. Nemo
                      enim ipsam voluptatem quia voluptas sit aspernatur aut
                      odit aut fugit, sed quia consequuntur magni dolores eos
                      qui ratione voluptatem sequi nesciunt.
                    </p>
                    Ut enim ad minima veniam, quis nostrum exercitationem ullam
                    corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                    consequatur?
                  </div>
                </div>
              </div>
              {/* <!-- /.modal-body --> */}
            </div>
            {/* <!-- /.modal-content --> */}
          </div>
          {/* <!-- /.sitemap__links w-50 flex-grow-1 --> */}
        </div>
      </div>
      {/* <!-- /.modal-dialog modal-fullscreen --> */}
    </div>
  );
}
