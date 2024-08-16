// components/ProductList.jsx
import React from "react";
import ProductItem from "./ProductItem";

const ProductList = ({ productList }) => {
  return (
    <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-5 gap-x-3">
      {productList.map((item) => (
        <ProductItem product={item} key={item.id} />
      ))}
    </div>
  );
};

export default ProductList;
