"use client";
import React from "react";
import Image from "next/image";
import { BiSolidCategoryAlt } from "react-icons/bi";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ProductItem = ({ product }) => {
  const router = useRouter();

  const handleMouseEnter = () => {
    router.prefetch(`/product-details/${product?.id}`);
  };

  return (
    <Link
      href={`/product-details/${product?.id}`}
      className="rounded-lg hover:border shadow-md hover:cursor-pointer hover:border-teal-500/10 hover:shadow-teal-500/10 hover:scale-105 duration-300"
      onMouseEnter={handleMouseEnter}
    >
      <div className="relative h-[170px]">
        <Image
          src={product?.attributes?.banner?.data?.attributes?.url}
          alt={product?.attributes?.alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: "cover" }}
          className="rounded-t-lg"
        />
      </div>
      <div className="flex justify-between items-center bg-gray-100 rounded-b-lg p-3">
        <div>
          <h2 className="text-[14px] font-medium line-clamp-2">
            {product?.attributes?.title}
          </h2>
          <h2 className="text-[12px] text-gray-400 flex gap-1 items-center">
            <BiSolidCategoryAlt className="text-[16px]" />
            {product.attributes.category}
          </h2>
        </div>
        <h2>${product?.attributes?.price}</h2>
      </div>
    </Link>
  );
};

export default ProductItem;
