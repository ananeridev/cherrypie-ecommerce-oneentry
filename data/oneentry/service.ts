import { defineOneEntry } from "oneentry";
import TOKEN from "./config";
import { IMenusPages } from "oneentry/dist/menus/menusInterfaces";

export const fetchMenu = async () => {
  const { Menus } = defineOneEntry("https://demo-ecommerce.oneentry.cloud", {
    token: TOKEN,
  });

  try {
    const categoryMenu = await Menus.getMenusByMarker("categories");
    return categoryMenu;
  } catch (error) {
    console.error("Erro ao buscar menu:", error);
    return [];
  }
};

export const fetchProducts = async () => {
  const { Products } = defineOneEntry("https://demo-ecommerce.oneentry.cloud", {
    token: TOKEN,
  });

  return Products.getProducts();
};
