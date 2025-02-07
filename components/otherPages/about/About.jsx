import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <section className="about-us container">
      <div className="mw-930">
        <h2 className="page-title">ABOUT UOMO</h2>
      </div>
      <div className="about-us__content pb-5 mb-5">
        <p className="mb-5">
          <Image
            style={{ height: "fit-content" }}
            loading="lazy"
            className="w-100 h-auto d-block"
            src="/assets/images/about/about-1.jpg"
            width="1410"
            height="550"
            alt="image"
          />
        </p>
        <div className="mw-930">
          <h3 className="mb-4">OUR STORY</h3>
          <p className="fs-6 fw-medium mb-4">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <p className="mb-4">
            Saw wherein fruitful good days image them, midst, waters upon, saw.
            Seas lights seasons. Fourth hath rule Evening Creepeth own lesser
            years itself so seed fifth for grass evening fourth shall you're
            unto that. Had. Female replenish for yielding so saw all one to
            yielding grass you'll air sea it, open waters subdue, hath. Brought
            second Made. Be. Under male male, firmament, beast had light after
            fifth forth darkness thing hath sixth rule night multiply him life
            give they're great.
          </p>
          <div className="row mb-3">
            <div className="col-md-6">
              <h5 className="mb-3">Our Mission</h5>
              <p className="mb-3">
                Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
              </p>
            </div>
            <div className="col-md-6">
              <h5 className="mb-3">Our Vision</h5>
              <p className="mb-3">
                Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
              </p>
            </div>
          </div>
        </div>
        <div className="mw-930 d-lg-flex align-items-lg-center">
          <div className="image-wrapper col-lg-6">
            <Image
              style={{ height: "fit-content" }}
              className="h-auto"
              loading="lazy"
              src="/assets/images/about/about-2.jpg"
              width="450"
              height="500"
              alt="image"
            />
          </div>
          <div className="content-wrapper col-lg-6 px-lg-4">
            <h5 className="mb-3">The Company</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
              sapien dignissim a elementum. Sociis metus, hendrerit mauris id
              in. Quis sit sit ultrices tincidunt euismod luctus diam. Turpis
              sodales orci etiam phasellus lacus id leo. Amet turpis nunc, nulla
              massa est viverra interdum. Praesent auctor nulla morbi non
              posuere mattis. Arcu eu id maecenas cras.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
