"use client";
import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";
import ProductApi from "../_utils/ProductApi";

const ProductSection = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getLatestProduct_();
  }, []);

  const getLatestProduct_ = async () => {
    setLoading(true);
    try {
      const res = await ProductApi.getLatestProducts();
      setProducts(res.data.data);
      setError(null);
    } catch (error) {
      setError("Something went wrong !!!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <span id="started"></span>
      <div className="px-10 md:px-16 pt-1 pb-10 bg-gray-50">
        <h2 className="my-4 text-xl font-bold">Brand New</h2>
        {loading ? (
          <div className="spinner">
            <div></div>
            <div></div>
            <div></div>
          </div>
        ) : error ? (
          <div className="error-message">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14h2v2h-2zm0-12h2v10h-2z" />
            </svg>
            <span className="text">
              Something went wrong. Please try again later.
            </span>
          </div>
        ) : (
          <ProductList productList={products} />
        )}
      </div>
    </>
  );
};

export default ProductSection;
