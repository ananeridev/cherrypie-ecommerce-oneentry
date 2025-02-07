import Brands from "./dropDownSelects/Brands";
import Category from "./dropDownSelects/Category";
import Color from "./dropDownSelects/Color";
import Price from "./dropDownSelects/Price";
import Size from "./dropDownSelects/Size";

export default function FilterDropdown() {
  return (
    <div className="shop-acs d-flex align-items-center flex-grow-1 pe-1">
      <Category />

      <div className="shop-asc__seprator ms-2 me-4 bg-light d-none d-lg-block"></div>

      <Size />

      <div className="shop-asc__seprator ms-2 me-4 bg-light d-none d-lg-block"></div>

      <Color />

      <div className="shop-asc__seprator ms-2 me-4 bg-light d-none d-lg-block"></div>

      <Brands />

      <div className="shop-asc__seprator ms-2 me-4 bg-light d-none d-lg-block"></div>

      <Price />

      <div className="shop-asc__seprator ms-1 bg-light d-none d-lg-block"></div>
    </div>
  );
}
