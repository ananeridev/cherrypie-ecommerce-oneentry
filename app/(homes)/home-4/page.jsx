import Footer4 from "@/components/footers/Footer4";

import Header4 from "@/components/headers/Header4";
import Blogs from "@/components/homes/home-4/Blogs";
import CategoryBanner from "@/components/homes/home-4/CategoryBanner";
import Hero from "@/components/homes/home-4/Hero";
import InsideCollextions from "@/components/homes/home-4/InsideCollextions";
import LimitedEdition from "@/components/homes/home-4/LimitedEdition";
import Testimonials from "@/components/homes/home-4/Testimonials";
import TrendingProducts from "@/components/homes/home-4/TrendingProducts";

export const metadata = {
  title: "Home 4 || Uomo eCommerce React Nextjs Template",
  description: "Uomo eCommerce React Nextjs Template",
};
export default function HomePage4() {
  return (
    <>
      <Header4 />
      <main className="bg-grey-faf9f8 page-wrapper-2">
        <Hero />
        <div className="mb-1 pb-4 mb-xl-5 pb-xl-5"></div>
        <TrendingProducts />
        <div className="mb-1 pb-4 mb-xl-5 pb-xl-5"></div>
        <CategoryBanner />
        <div className="mb-1 pb-4 mb-xl-5 pb-xl-5"></div>
        <Testimonials />
        <div className="mb-1 pb-4 mb-xl-5 pb-xl-5"></div>
        <InsideCollextions />
        <div className="mb-1 pb-4 mb-xl-5 pb-xl-5"></div>
        <LimitedEdition />
        <Blogs />
      </main>
      <Footer4 />
    </>
  );
}
