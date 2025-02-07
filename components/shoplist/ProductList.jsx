"use client";

import { useEffect, useState } from "react";
import { fetchProducts } from "@/data/oneentry/service";
import Link from "next/link";
import Image from "next/image";

export default function ShopPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await fetchProducts();
        if (data && data.items) {
          setProducts(
            data.items.map((item) => ({
              id: item.id,
              title: item.attributeValues?.title?.value,
              price: item.attributeValues?.price?.value,
              currency: item.attributeValues?.currency?.value,
              image: item.attributeValues?.imagesrc?.value.downloadLink,
            }))
          );
        }
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    }
    loadProducts();
  }, []);

  return (
    <section className="shop-main container">
      <h1 className="text-center">Shop</h1>
      <div className="products-grid row row-cols-2 row-cols-md-3 row-cols-lg-4">
        {products.map((product) => (
          <div key={product.id} className="product-card-wrapper">
            <div className="product-card">
              <div className="pc__img-wrapper">
                <Link href={`/product/${product.id}`}>
                  <Image
                    loading="lazy"
                    src={product.image}
                    width="330"
                    height="400"
                    alt={product.title}
                    className="pc__img"
                  />
                </Link>
              </div>
              <div className="pc__info">
                <h6 className="pc__title">
                  <Link href={`/product/${product.id}`}>{product.title}</Link>
                </h6>
                <p className="pc__price">
                  {product.currency} {product.price}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
