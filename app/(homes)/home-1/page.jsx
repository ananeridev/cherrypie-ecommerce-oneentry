import LoginFormPopup from "@/components/common/LoginFormPopup";
import Footer1 from "@/components/footers/Footer1";

import Header1 from "@/components/headers/Header1";
import Features from "@/components/common/features/Features";
import Hero from "@/components/homes/home-1/Hero";
import InstaGram from "@/components/homes/home-1/InstaGram";
import Products1 from "@/components/homes/home-1/Products1";
import Products2 from "@/components/homes/home-1/Products2";
import Products3 from "@/components/homes/home-1/Products3";
import Products4 from "@/components/homes/home-1/Products4";
import Products5 from "@/components/homes/home-1/Products5";

export const metadata = {
  title: "Home 1 || Uomo eCommerce React Nextjs Template",
  description: "Uomo eCommerce React Nextjs Template",
};
export default function HomePage1() {
  return (
    <>
      <div>
        <Header1 />
        <main className="page-wrapper">
          <Hero />
          <div className="mb-3 pb-3 mb-md-4 pb-md-4 mb-xl-5 pb-xl-5"></div>
          <div className="pb-1"></div>
          <Products1 />
          <div className="mb-4 pb-4 mb-xl-5 pb-xl-5"></div>
          <Products2 />
          <div className="mb-3 mb-xl-5 pb-1 pb-xl-5"></div>
          <Products3 />
          <div className="mb-3 mb-xl-5 pb-1 pb-xl-5"></div>
          <Products4 />
          <div className="mb-5 pb-1 pb-xl-4"></div>
          <Products5 />
          <InstaGram />
          <div className="mb-4 pb-4 pb-xl-5 mb-xl-5"></div>
          <div className="bg-white">
            <Features />{" "}
          </div>
        </main>
        <Footer1 />
        <LoginFormPopup />{" "}
      </div>
    </>
  );
}
