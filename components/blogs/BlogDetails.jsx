import React from "react";
import ReviewForm from "./ReviewForm";
import Reviews from "./Reviews";
import Image from "next/image";

export default function BlogDetails({ blog }) {
  return (
    <section className="blog-page blog-single container">
      <div className="mw-930">
        <h2 className="page-title">{blog.title}</h2>
        <div className="blog-single__item-meta">
          <span className="blog-single__item-meta__author">By Admin</span>
          <span className="blog-single__item-meta__date">{blog.date}</span>
          <span className="blog-single__item-meta__category">Trends</span>
        </div>
      </div>
      <div className="blog-single__item-content">
        <p>
          <Image
            loading="lazy"
            className="w-100 h-auto d-block"
            src={blog.imgSrc}
            width="1410"
            height="550"
            alt="image"
          />
        </p>
        <div className="mw-930">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet sapien
            dignissim a elementum. Sociis metus, hendrerit mauris id in. Quis
            sit sit ultrices tincidunt euismod luctus diam. Turpis sodales orci
            etiam phasellus lacus id leo. Amet turpis nunc, nulla massa est
            viverra interdum. Praesent auctor nulla morbi non posuere mattis.
            Arcu eu id maecenas cras. Eget fames tincidunt leo, sed vitae,
            pretium interdum. Non massa, imperdiet nunc sit sapien. Tempor
            lectus ornare quis mi vel. Nibh euismod donec elit posuere lobortis
            consequat faucibus aliquam metus. Ornare consequat, vulputate sit
            maecenas mauris urna sed fringilla. Urna fermentum iaculis pharetra,
            maecenas dui nullam nullam rhoncus. Facilisis quis vulputate sem
            gravida lacus, justo placerat.
          </p>
          <h5>Sed do eiusmod tempor incididunt ut labore</h5>
          <p>
            Saw wherein fruitful good days image them, midst, waters upon, saw.
            Seas lights seasons. Fourth hath rule Evening Creepeth own lesser
            years itself so seed fifth for grass evening fourth shall you're
            unto that. Had. Female replenish for yielding so saw all one to
            yielding grass you'll air sea it, open waters subdue, hath. Brought
            second Made. Be. Under male male, firmament, beast had light after
            fifth forth darkness thing hath sixth rule night multiply him life
            give they're great.
          </p>
          <div className="row">
            <div className="col-md-6">
              <h5>Why choose product?</h5>
              <ul className="list text-list list_dot_darkgray">
                <li className="list-item text-list__item">
                  Creat by cotton fibric with soft and smooth
                </li>
                <li className="list-item text-list__item">
                  Simple, Configurable (e.g. size, color, etc.), bundled
                </li>
                <li className="list-item text-list__item">
                  Downloadable/Digital Products, Virtual Products
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <h5>Sample Number List</h5>
              <ol className="list text-list">
                <li className="list-item text-list__item">
                  Create Store-specific attrittbutes on the fly
                </li>
                <li className="list-item text-list__item">
                  Simple, Configurable (e.g. size, color, etc.), bundled
                </li>
                <li className="list-item text-list__item">
                  Downloadable/Digital Products, Virtual Products
                </li>
              </ol>
            </div>
          </div>
          <p>
            She'd years darkness days. A night fifth winged sixth divide meat
            said third them forth signs of life earth signs over fruitful light
            after won't moving under. Thing yielding upon seed. Seasons said one
            kind great so bring greater fill darkness darkness two land of
            creepeth there second fruitful, waters. Make don't void years
            Gathering gathering divide fill.
          </p>
        </div>
        <div className="container mw-1170">
          <div className="row">
            <div className="col-md-6">
              <p>
                <Image
                  loading="lazy"
                  className="w-100 h-auto d-block"
                  src="/assets/images/blog/blog-15.jpg"
                  width="570"
                  height="697"
                  alt="image"
                />
              </p>
            </div>
            <div className="col-md-6">
              <p>
                <Image
                  loading="lazy"
                  className="w-100 h-auto d-block"
                  src="/assets/images/blog/blog-16.jpg"
                  width="570"
                  height="697"
                  alt="image"
                />
              </p>
            </div>
          </div>
        </div>
        <div className="mw-930">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet sapien
            dignissim a elementum. Sociis metus, hendrerit mauris id in. Quis
            sit sit ultrices tincidunt euismod luctus diam. Turpis sodales orci
            etiam phasellus lacus id leo. Amet turpis nunc, nulla massa est
            viverra interdum. Praesent auctor nulla morbi non posuere mattis.
            Arcu eu id maecenas cras. Eget fames tincidunt leo, sed vitae,
            pretium interdum. Non massa, imperdiet nunc sit sapien. Tempor
            lectus ornare quis mi vel. Nibh euismod donec elit posuere lobortis
            consequat faucibus aliquam metus. Ornare consequat, vulputate sit
            maecenas mauris urna sed fringilla. Urna fermentum iaculis pharetra,
            maecenas dui nullam nullam rhoncus. Facilisis quis vulputate sem
            gravida lacus, justo placerat.
          </p>
          <p>
            She'd years darkness days. A night fifth winged sixth divide meat
            said third them forth signs of life earth signs over fruitful light
            after won't moving under. Thing yielding upon seed. Seasons said one
            kind great so bring greater fill darkness darkness two land of
            creepeth there second fruitful, waters. Make don't void years
            Gathering gathering divide fill.
          </p>
        </div>
      </div>
      <div className="blog-single__item-share mw-930">
        <a
          href="//www.facebook.com/sharer.php?u=https://uomo-crystal.myshopify.com/blogs/news/go-to-wellness-tips-for-mental-health"
          className="btn btn-share btn-facebook"
        >
          <svg
            className="svg-icon svg-icon_facebook"
            width="9"
            height="15"
            fill="#fff"
            viewBox="0 0 9 15"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7.62891 8.31543L8.01172 5.7998H5.57812V4.15918C5.57812 3.44824 5.90625 2.79199 7 2.79199H8.12109V0.631836C8.12109 0.631836 7.10938 0.44043 6.15234 0.44043C4.15625 0.44043 2.84375 1.6709 2.84375 3.8584V5.7998H0.601562V8.31543H2.84375V14.4404H5.57812V8.31543H7.62891Z"></path>
          </svg>
          <span>Share on Facebook</span>
        </a>
        <a
          href="//twitter.com/share?text=Go-to%20Wellness%20Tips%20for%20Mental%20Health&amp;url=https://uomo-crystal.myshopify.com/blogs/news/go-to-wellness-tips-for-mental-health"
          className="btn btn-share btn-twitter"
        >
          <svg
            className="svg-icon svg-icon_twitter"
            width="14"
            height="13"
            fill="#fff"
            viewBox="0 0 14 13"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12.5508 3.59668C13.0977 3.18652 13.5898 2.69434 13.9727 2.12012C13.4805 2.33887 12.9062 2.50293 12.332 2.55762C12.9336 2.20215 13.3711 1.65527 13.5898 0.97168C13.043 1.2998 12.4141 1.5459 11.7852 1.68262C11.2383 1.1084 10.5 0.780273 9.67969 0.780273C8.09375 0.780273 6.80859 2.06543 6.80859 3.65137C6.80859 3.87012 6.83594 4.08887 6.89062 4.30762C4.51172 4.1709 2.37891 3.02246 0.957031 1.2998C0.710938 1.70996 0.574219 2.20215 0.574219 2.74902C0.574219 3.7334 1.06641 4.6084 1.85938 5.12793C1.39453 5.10059 0.929688 4.99121 0.546875 4.77246V4.7998C0.546875 6.19434 1.53125 7.34277 2.84375 7.61621C2.625 7.6709 2.35156 7.72559 2.10547 7.72559C1.91406 7.72559 1.75 7.69824 1.55859 7.6709C1.91406 8.81934 2.98047 9.63965 4.23828 9.66699C3.25391 10.4326 2.02344 10.8975 0.683594 10.8975C0.4375 10.8975 0.21875 10.8701 0 10.8428C1.25781 11.6631 2.76172 12.1279 4.40234 12.1279C9.67969 12.1279 12.5508 7.78027 12.5508 3.97949C12.5508 3.84277 12.5508 3.7334 12.5508 3.59668Z"></path>
          </svg>
          <span>Share on Twitter</span>
        </a>
        <a
          href="//pinterest.com/pin/create/button/?url=https://uomo-crystal.myshopify.com/blogs/news/go-to-wellness-tips-for-mental-health&amp;media=//uomo-crystal.myshopify.com/cdn/shop/articles/blog6.jpg?crop=center&amp;height=1024&amp;v=1650609391&amp;width=1024&amp;description=Go-to%20Wellness%20Tips%20for%20Mental%20Health"
          className="btn btn-share btn-pinterest"
        >
          <svg
            className="svg-icon svg-icon_pinterest"
            width="14"
            height="15"
            fill="#fff"
            viewBox="0 0 14 15"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.5625 7.44043C13.5625 3.69434 10.5273 0.65918 6.78125 0.65918C3.03516 0.65918 0 3.69434 0 7.44043C0 10.3389 1.77734 12.7725 4.29297 13.7568C4.23828 13.2373 4.18359 12.417 4.32031 11.8154C4.45703 11.2959 5.11328 8.45215 5.11328 8.45215C5.11328 8.45215 4.92188 8.04199 4.92188 7.44043C4.92188 6.51074 5.46875 5.7998 6.15234 5.7998C6.72656 5.7998 7 6.2373 7 6.75684C7 7.33105 6.61719 8.20605 6.42578 9.02637C6.28906 9.68262 6.78125 10.2295 7.4375 10.2295C8.64062 10.2295 9.57031 8.97168 9.57031 7.13965C9.57031 5.49902 8.39453 4.37793 6.75391 4.37793C4.8125 4.37793 3.69141 5.82715 3.69141 7.30371C3.69141 7.90527 3.91016 8.53418 4.18359 8.8623C4.23828 8.91699 4.23828 8.99902 4.23828 9.05371C4.18359 9.27246 4.04688 9.7373 4.04688 9.81934C4.01953 9.95605 3.9375 9.9834 3.80078 9.92871C2.95312 9.51855 2.43359 8.28809 2.43359 7.27637C2.43359 5.14355 3.99219 3.1748 6.91797 3.1748C9.26953 3.1748 11.1016 4.87012 11.1016 7.1123C11.1016 9.43652 9.625 11.3232 7.57422 11.3232C6.89062 11.3232 6.23438 10.9678 6.01562 10.5303C6.01562 10.5303 5.6875 11.8428 5.60547 12.1436C5.44141 12.7451 5.03125 13.4834 4.75781 13.9209C5.38672 14.1396 6.07031 14.2217 6.78125 14.2217C10.5273 14.2217 13.5625 11.1865 13.5625 7.44043Z"></path>
          </svg>
          <span>Share on Pinterest</span>
        </a>
      </div>
      <div className="blog-single__item-pagination mw-930">
        <div className="row">
          <div className="col-lg-6">
            <a href="#" className="btn-link d-inline-flex align-items-center">
              <svg
                className="me-1"
                width="7"
                height="11"
                viewBox="0 0 7 11"
                xmlns="http://www.w3.org/2000/svg"
              >
                <use href="#icon_prev_sm" />
              </svg>
              <span className="fw-medium">PREVIOUS POST</span>
            </a>
            <p>Given Set was without from god divide rule Hath</p>
          </div>
          <div className="col-lg-6 text-lg-right">
            <a href="#" className="btn-link d-inline-flex align-items-center">
              <span className="fw-medium me-1">NEXT POST</span>
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                xmlns="http://www.w3.org/2000/svg"
              >
                <use href="#icon_next_md" />
              </svg>
            </a>
            <p>Tree earth fowl given moveth deep lesser After</p>
          </div>
        </div>
      </div>
      <div className="blog-single__reviews mw-930">
        <h2 className="blog-single__reviews-title">Reviews</h2>
        <Reviews />
        <ReviewForm />
      </div>
    </section>
  );
}
