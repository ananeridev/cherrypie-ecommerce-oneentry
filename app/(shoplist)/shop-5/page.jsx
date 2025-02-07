import Footer1 from "@/components/footers/Footer1";

import Header1 from "@/components/headers/Header1";

import Shop5 from "@/components/shoplist/Shop5";

export const metadata = {
  title: "Shop 5 || Uomo eCommerce React Nextjs Template",
  description: "Uomo eCommerce React Nextjs Template",
};
export default function ShopPage5() {
  return (
    <>
      <Header1 />
      <main className="page-wrapper">
        <Shop5 />
      </main>
      <div className="mb-5 pb-xl-5"></div>
      <Footer1 />
    </>
  );
}
