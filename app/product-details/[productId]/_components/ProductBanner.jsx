import React from "react";
import Image from "next/image";

function ProductBanner({ product }) {
  return (
    <div>
      <Image
        src={product?.attributes?.banner?.data?.attributes?.url}
        alt={product?.attributes?.alt}
        width={400}
        height={400}
        style={{ objectFit: "cover" }}
        className="rounded-lg"
      />
    </div>
  );
}

export default ProductBanner;
