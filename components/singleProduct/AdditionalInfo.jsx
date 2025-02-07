import React from "react";

export default function AdditionalInfo() {
  return (
    <div className="product-single__addtional-info">
      <div className="item">
        <label className="h6">Weight</label>
        <span>1.25 kg</span>
      </div>
      <div className="item">
        <label className="h6">Dimensions</label>
        <span>90 x 60 x 90 cm</span>
      </div>
      <div className="item">
        <label className="h6">Size</label>
        <span>XS, S, M, L, XL</span>
      </div>
      <div className="item">
        <label className="h6">Color</label>
        <span>Black, Orange, White</span>
      </div>
      <div className="item">
        <label className="h6">Storage</label>
        <span>Relaxed fit shirt-style dress with a rugged</span>
      </div>
    </div>
  );
}
